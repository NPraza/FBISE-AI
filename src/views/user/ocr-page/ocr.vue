<template src="./ocr.html"></template>

<script>
import ocrCard from '../../../components/ocrCard/ocrCard.vue';
// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "Uploaded Picture",
    sorter: true,
    dataIndex: "uploadedPicture",
    scopedSlots: { customRender: "uploadedPicture" },
    width:150
  },
  {
    title: "OCR Data",
    dataIndex: "ocrData",
    scopedSlots: { customRender: "ocrData" },
    width:500
  },
  {
    title: "Like/Dislike",
    dataIndex: "likeDislike",
    scopedSlots: { customRender: "likeDislike" },
    width:150
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
    ocrCard
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

<style src="./ocr.css" scoped></style>