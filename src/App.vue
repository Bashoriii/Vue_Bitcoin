<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav class="main-nav">
      <RouterLink to="/" class="logo">Bitcoin</RouterLink>
      <div class="nav-list">
        <RouterLink to="/idr-to-btc">Rupiah to Bitcoin</RouterLink>
        <RouterLink to="/btc-to-idr">Bitcoin to Rupiah</RouterLink>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style>
.wrapper {
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid #dddddd;
  box-shadow: #dddddd 0px 5px 4px 0px;
}

.main-nav {
  width: 80%;
  padding: 1rem 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.nav-list a {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
  text-decoration: none;
  color: black;
}
</style>
