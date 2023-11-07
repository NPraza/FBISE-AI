<template src="./paper-page.html"></template>

<script>
import api from '../../../services/api';

export default {
  components: {
    // CardAuthorTable,
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      question_id: String
    };
  },
  beforeMount(){
    if(this.$route.query?.question_id) this.question_id = this.$route.query?.question_id;
  },
  mounted () { 
    if(this.question_id){
      api.get('/questions/'+this.question_id)
      .then(response => {
        const fieldValues = { 
          addPapperName: response.data.paper_id.name, 
          addQuestionNumber: response.data.number, 
          addQuestion: response.data.statement, 
          rubrics: response.data.rubrics, 
          prompt: response.data.checking_prompt, 
          promptGraph: response.data.graphs_prompt
        };
        this.form.setFieldsValue(fieldValues)
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const data = { 
            name: values.addPapperName, 
            number: values.addQuestionNumber, 
            statement: values.addQuestion, 
            rubrics: values.rubrics, 
            checking_prompt: values.prompt, 
            graphs_prompt: values.promptGraph
          };

          const api_call = this.question_id ? api.put('/questions/'+this.question_id, data) : api.post('/questions', data);
          api_call.then(response => {
            console.log(response);
            this.$router.push({ name: 'Landing Page' });
          })
          .catch(error => {
            console.log(error);
          });
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style src="./paper-page.css" scoped></style>