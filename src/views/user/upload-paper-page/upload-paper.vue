<template src="./upload-paper.html"></template>

<script>
import api from '../../../services/api';

export default {
  components: {
  },
  data() {
    return {
      papers: [],
      selected_paper: String,
      questions: [],
      selected_question: String,
      files: [],
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
    handleChange(event) {
      const selectedFiles = event.target.files;
      // Push the selected files into the array
      for (let i = 0; i < selectedFiles.length; i++) {
        this.files.push(selectedFiles[i]);
      }
      console.log(this.files)
    },
    handlePaperChange(paper_id) {
      this.selected_paper = paper_id;
      api.get('/questions?paper_id='+paper_id)
      .then(response => {
        this.questions = response.data;
      })
      .catch(error => {
        console.log(error)
      });
    },
    handleQuestionChange(question_id) {
      this.selected_question = question_id;
    },
    submit() {
      const formData = new FormData();

      // Append the uploaded files to the FormData object
      for (let i = 0; i < this.files.length; i++) {
        formData.append('files', this.files[i]);
      }
      formData.append('paper_id', this.selected_paper);
      formData.append('question_id', this.selected_question);
      console.log(formData)
      api.post('/ocr-results', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      )
      .then(response => {
        this.$router.push({ name: 'OCR', params: { paper_id: this.selected_paper, question_id: this.selected_question } });
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
};
</script>

<style src="./upload-paper.css" scoped></style>