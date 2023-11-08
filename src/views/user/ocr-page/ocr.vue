<template src="./ocr.html"></template>

<script>
import ocrCard from '../../../components/ocrCard/ocrCard.vue';
import api from '../../../services/api';

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
const tableData = [];


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
  beforeMount(){
    this.paper_id = this.$route.params.paper_id
    this.question_id = this.$route.params.question_id
  },
  mounted () { 
    api.get('/ocr-results?paper_id='+this.paper_id+'&question_id='+this.question_id)
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
          feedback: res.feedback?.rating
        }
      })
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
    updateOcrResult(ocr_result_id, data){
      api.put('/ocr-results/'+ocr_result_id, data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    },
    updateOcrFeedback(data){
      data.module_name = 'OCRResult';
      api.post('/feedback/create', data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style src="./ocr.css" scoped></style>