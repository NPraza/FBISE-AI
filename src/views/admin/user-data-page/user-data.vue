<template src="./user-data.html"></template>

<script>
import api from '../../../services/api';

// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "File name",
    sorter: true,
    dataIndex: "fileName",
    scopedSlots: { customRender: "fileName" },
    width:150
  },
  {
    title: "AI Marks",
    dataIndex: "AIMarks",
    scopedSlots: { customRender: "AIMarks" },
    width:100
  },
  {
    title: "A.I Feedback",
    dataIndex: "AIFeedback",
    scopedSlots: { customRender: "AIFeedback" },
    width:500
  },
  {
    title: "",
    scopedSlots: { customRender: 'detail' },
    width:100
    // render:text=><Link to='/detail'>View</Link>
  },
];

// "Authors" table list of rows and their properties.
const tableData = [];


export default {
  components: {
  },
  data() {
    return {
      loading:true,
      paper_id: String,
      question_id: String,
      tableHeader,
      tableData,
      searchText: '',
      pagination: {
        total: 0,
        current: 1,
        pageSize: 20
      },
    };
  },
  beforeMount(){
    this.paper_id = this.$route.params.paper_id
    this.question_id = this.$route.params.question_id
  },
  mounted () { 
    api.get('/ocr-results?paper_id='+this.paper_id+'&question_id='+this.question_id)
    .then(response => {
      this.loading = false;
      let i = 0;
      this.tableData = response.data.map(res => {
        i++;
        const parts = res.file_path.split('/');
        const fileName = parts[parts.length - 1];
        return {
          key: i.toString(),
          fileName,
          AIMarks: `${res.ai_result?.result?.ai_result?.marks_obtained || 0} / 100`,
          AIFeedback: res.ai_result?.result?.ai_result?.weaknesses,
          ai_result_id: res.ai_result?._id
        }
      })
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
  },
};
</script>

<style src="./user-data.css" scoped></style>