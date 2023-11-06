<template src="./user-data.html"></template>

<script>
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
const tableData = [
    {
		key: '1',
		fileName: "saad.zip",
		AIMarks: '10/15',
		AIFeedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
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

<style src="./user-data.css" scoped></style>