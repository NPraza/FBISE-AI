<template src="./landing-page.html"></template>

<script>
import api from './../../../services/api';

// "Authors" table list of columns and their properties.
const tableHeader = [
  {
    title: "Date",
    sorter: true,
    dataIndex: "date",
    scopedSlots: { customRender: "date" },
  },
  {
    title: "Paper",
    dataIndex: "paper",
    scopedSlots: { customRender: "paper" },
  },
  {
    title: "No. of Question",
    dataIndex: "questionNumber",
    scopedSlots: { customRender: "questionNumber" },
  },
  {
    title: "Action",
    scopedSlots: { customRender: 'editBtn' },
    // render:text=><Link to='/detail'>View</Link>
  },
];

// "Authors" table list of rows and their properties.
let tableData = [];

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
  async mounted () { 
    api.get('/papers')
    .then((response) => {
      let i = 0;
      // Handle the response data here
      this.tableData = response.data.map( res => {
        i++;
        const date = new Date(res.modified_at).toLocaleDateString();
        return {key: i.toString(), date, paper: res.name, questionNumber: res.questions.length, paper_id: res._id}
      })
      console.log('User data:', this.tableData);
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error:', error);
    });

  },
  methods: {
  },
};
</script>

<style src="./landing-page.css" scoped></style>