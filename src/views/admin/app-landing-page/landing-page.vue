<template src="./landing-page.html"></template>

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
    title: "No. of Question",
    dataIndex: "questionNumber",
    scopedSlots: { customRender: "questionNumber" },
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
		paper: '$14,000',
		questionNumber: 60,
	},
];

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
  mounted () { 
  },
  methods: {
  },
};
</script>

<style src="./landing-page.css" scoped></style>