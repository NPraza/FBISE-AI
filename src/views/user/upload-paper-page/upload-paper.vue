<template src="./upload-paper.html"></template>

<script>
import api from '../../../services/api';

export default {
  components: {
  },
  data() {
    return {
      papers: [],
      questions: [],
    };
  },

  mounted () { 
    api.get('/papers')
    .then(response => {
      this.papers = response.data;
    })
    .catch(error => {
      console.log(error)
    });
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handlePaperChange(paper_id) {
      api.get('/questions?paper_id='+paper_id)
      .then(response => {
        this.questions = response.data;
      })
      .catch(error => {
        console.log(error)
      });
    },
  },
};
</script>

<style src="./upload-paper.css" scoped></style>