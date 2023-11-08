<template src="./check-result.html"></template>

<script>
import api from './../../../services/api';

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
    title: "Answer Uploaded",
    dataIndex: "answerUploaded",
    scopedSlots: { customRender: "answerUploaded" },
  },
  {
    title: "Wrong OCR",
    dataIndex: "wrongOCR",
    scopedSlots: { customRender: "wrongOCR" },
  },
  {
    title: "Dissatisfied Checking",
    dataIndex: "dissatisfiedChecking",
    scopedSlots: { customRender: "dissatisfiedChecking" },
  },
  {
    title: "Action",
    scopedSlots: { customRender: 'userData' },
    // render:text=><Link to='/detail'>View</Link>
  },
];

// "Authors" table list of rows and their properties.
const tableData = [];

export default {
  components: {
    // CardAuthorTable,
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
    //   dataSource: [
    //       {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //       },
    //       {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //       },
    //     ],

    //     columns: [
    //       {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //       },
    //       {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'age',
    //       },
    //       {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //       },
    //     ],
    };
  },
  beforeMount(){
    this.tableData = [];
  },
  mounted () { 
    api.get('/papers')
    .then(response => {
      let i = 0;
      response.data.map(res => {
        const data = res.questions.map(question => {
          i++;
          return {
            key: i.toString(),
            date: new Date(question.created_at).toLocaleDateString(),
            paper: res.name,
            paper_id: res._id,
            questionNumber: question.number,
            question_id: question._id,
            answerUploaded: question.answers.length,
            wrongOCR: question.wrong_ocr.length,
            dissatisfiedChecking: question.wrong_checking.length,
          }
        })
        this.tableData.push(...data);
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

<style src="./check-result.css" scoped></style>