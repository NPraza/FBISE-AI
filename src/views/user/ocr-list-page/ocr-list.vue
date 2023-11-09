<template src="./ocr-list.html"></template>

<script>
import api from '../../../services/api';

// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "",
    key: "action",
    width: "10%",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "File Name",
    dataIndex: "file_name",
    scopedSlots: { customRender: "file_name" },
  },
  {
    title: "Action",
    width:"10%",
    scopedSlots: { customRender: 'edit' },
    // render:text=><Link to='/detail'>View</Link>
  },
];

const tableData = [];

export default {
  components: {
  },
  data() {
    return {
      tableHeader,
      tableData,
      searchText: '',
      pagination: {
        total: 0,
        current: 1,
        pageSize: 20
      },
      selectedRows: [],
      completedRequests: 0,
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
    };
  },
  beforeMount(){
    this.paper_id = this.$route.params.paper_id
    this.question_id = this.$route.params.question_id
  },
  mounted () { 
    api.get('/ocr-results?is_ai_checked=false&paper_id='+this.paper_id+'&question_id='+this.question_id)
    .then(response => {
      let i = 0;
      this.tableData = response.data.map(res => {
        i++;
        const parts = res.file_path.split('/');
        const fileName = parts[parts.length - 1];
        return {
          key: i.toString(),
          file_name: fileName,
          image_src: res.file_path,
          ocr_result: res.answer,
          ocr_result_id: res._id,
          paper_id: res.paper_id._id,
          question_id: res.question_id._id,
          feedback: res.feedback?.rating,
          done: false
        }
      })
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
   onChange(record) {
      record.done = !record.done;
    },
    async runAI() {
      this.completedRequests = 0;
      this.totalRequests = 0;
      this.successfulRequests = 0;
      this.failedRequests = 0;

      const selected_answers = this.tableData.filter( td => td.done );
      this.totalRequests = selected_answers.length;
      const endpoints = selected_answers.map( sa => '/get-ai-result/'+sa.ocr_result_id );

      const requests = endpoints.map((endpoint) => {
        return api.get(endpoint)
          .then((response) => {
            this.successfulRequests++;
            this.completedRequests++;
          })
          .catch((error) => {
            this.failedRequests++;
            this.completedRequests++;
          });
      });

      try {
        await Promise.all(requests);
        this.$router.push({ name: 'User Data', params: { paper_id: this.paper_id, question_id: this.question_id }});
      } catch (error) {
        console.error('One or more requests failed:', error);
      }
    },
  },
};
</script>

<style src="./ocr-list.css" scoped></style>