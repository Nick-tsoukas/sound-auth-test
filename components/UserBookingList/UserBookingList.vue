<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td data-column="First Name">Mathew</td>
          <td data-column="Last Name">Hiedman</td>
          <td data-column="Email">mat@gmail.com</td>
          <td data-column="Phone Number">333-333-3333s</td>
          <td data-column="Date">{{book.date}}</td>
          <td data-column="Time">{{book.time}}</td>
          <td data-column="Status">{{book.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    props: [
      'books'
    ]
  }

</script>

<style scoped>
  table {
    width: 750px;
    border-collapse: collapse;
    margin: 50px auto;
  }

  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }

  th {
    background: #3498db;
    color: white;
    font-weight: bold;
  }

  td,
  th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
  }

  /* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
  @media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {

    table {
      width: 100%;
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      /* Label the data */
      content: attr(data-column);

      color: #000;
      font-weight: bold;
    }

  }

</style>
