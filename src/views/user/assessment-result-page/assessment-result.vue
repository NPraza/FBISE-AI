<template src="./assessment-result.html"></template>

<script>
import assessmentResult from '../../../components/assessmentResult/assessmentResult.vue';


export default {
  components: {
    assessmentResult
  },
  data() {
    return {
    };
  },
  beforeMount(){
    this.ai_result_id = this.$route.params.ai_result_id
  },
  mounted () { 
  },
  methods: {
  },
};
</script>

<style src="./assessment-result.css" scoped></style>