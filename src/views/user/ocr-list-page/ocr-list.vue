<template src="./ocr-list.html"></template>

<script>

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
    dataIndex: "fileName",
    scopedSlots: { customRender: "fileName" },
  },
  {
    title: "Action",
    width:"10%",
    scopedSlots: { customRender: 'edit' },
    // render:text=><Link to='/detail'>View</Link>
  },
];

const tableData = [
  {
		key: '1',
		title: "21-1-2022",
    fileName: "saad.zip",
    done: false,
	},
  {
		key: '2',
		title: "21-1-2022",
    fileName: "saad.zip",
    done: false
	},
  {
		key: '3',
		title: "21-1-2022",
    fileName: "saad.zip",
    done: false
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
      selectedRows: []
    };
  },
  mounted () { 
  },
  methods: {
   onChange(record) {
      record.done = !record.done;
    }
  },
};
</script>

<style src="./ocr-list.css" scoped></style>