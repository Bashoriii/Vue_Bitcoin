<template>
  <main>
    <!-- <div v-if="pending">Loading...</div> -->
    <div class="container-1">
      <div class="table-title">
        <h1>Harga Bitcoin Hari Ini</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Mata Uang</th>
            <th scope="col">Harga Beli Bitcoin</th>
            <th scope="col">Harga Jual Bitcoin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, err) in dataTable">
            <td>{{ row.symbol }}</td>
            <td>{{ row.buy }}</td>
            <td>{{ row.sell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { useFetch } from '../fetch'

const { data: dataTable, error } = useFetch('https://blockchain.info/ticker')
</script>

<style>
.container-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table {
  width: 45vw;
  margin: 1rem 0;
  font-size: 1.5rem;
  border-collapse: collapse;
}

.table thead tr {
  color: #fff;
  text-align: left;
  background-color: #ffc933;
}

.table thead tr th {
  border: 1px solid black;
  padding: 1rem;
}

.table tbody tr td {
  border: 1px solid black;
  width: 100px;
  padding: 1rem;
}
</style>
