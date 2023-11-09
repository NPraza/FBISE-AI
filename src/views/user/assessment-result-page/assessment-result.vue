<template src="./assessment-result.html"></template>

<script>
import assessmentResult from '../../../components/assessmentResult/assessmentResult.vue';
import api from '../../../services/api';


export default {
  components: {
    assessmentResult
  },
  data() {
    return {
      ai_result: Object
    };
  },
  beforeMount(){
    this.ai_result_id = this.$route.params.ai_result_id
  },
  mounted () { 
    api.get('/ai-results/'+this.ai_result_id)
    .then(response => {
      this.ai_result = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
  },
};
</script>

<style src="./assessment-result.css" scoped></style>