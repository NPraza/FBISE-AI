<template src="./question-list.html"></template>

<script>
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
const tableData = [
    {
		key: '1',
		date: "21-1-2022",
		paper: 'Physics',
		questionNumber: 60,
    questionText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
	},
];


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
    };
  },
  mounted () { 
  },
  methods: {
  },
};
</script>

<style src="./question-list.css" scoped></style>