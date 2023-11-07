<template src="./question-list.html"></template>

<script>
import api from '../../../services/api';
// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "Date",
    sorter: true,
    dataIndex: "date",
    scopedSlots: { customRender: "date" },
  },
  {
    title: "Paper",
    dataIndex: "paper",
    scopedSlots: { customRender: "paper" },
  },
  {
    title: "Question No",
    dataIndex: "questionNumber",
    scopedSlots: { customRender: "questionNumber" },
  },
  {
    title: "Question Text",
    dataIndex: "questionText",
    scopedSlots: { customRender: "questionText" },
    width:400
  },
  {
    title: "Action",
    scopedSlots: { customRender: 'editBtn' },
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
      paper_id: String,
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
  },
  mounted () { 
    api.get('/questions?paper_id='+this.paper_id)
    .then(response => {
      let i = 0;
      console.log(response.data);
      this.tableData = response.data.map(res => {
        i++;
        return {
          key: i.toString(),
          date: new Date(res.created_at).toLocaleDateString(),
          paper: res.paper_id.name,
          questionNumber: res.number,
          questionText: res.statement,
          question_id: res._id
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
  },
};
</script>

<style src="./question-list.css" scoped></style>