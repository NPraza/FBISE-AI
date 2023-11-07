<template src="./upload-paper.html"></template>

<script>

export default {
  components: {
  },
  data() {
    return {};
  },

  mounted () { 
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
  },
};
</script>

<style src="./upload-paper.css" scoped></style>