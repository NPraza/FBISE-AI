<template src="./ocr-list.html"></template>

<script>

// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "",
    dataIndex: "date",
    scopedSlots: { customRender: "date" },
  },
  {
    title: "File Name",
    dataIndex: "fileName",
    scopedSlots: { customRender: "fileName" },
  },
  {
    title: "Action",
    scopedSlots: { customRender: 'edit' },
    // render:text=><Link to='/detail'>View</Link>
  },
];

// "Authors" table list of rows and their properties.
const tableData = [
    {
		key: '1',
		title: "21-1-2022",
    fileName: "saad.zip"
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

<style src="./ocr-list.css" scoped></style>