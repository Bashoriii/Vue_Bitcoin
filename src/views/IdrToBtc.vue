<template>
  <div class="container-2">
    <div class="konversi-text">
      <h1>Konversi Rupiah to Bitcoin</h1>
      <h3>Kurs 1 USD = 14.000 IDR</h3>
    </div>
    <div class="konversi-input">
      <input class="input" type="number" v-model="rateRp" v-on:input="toBtc" />
    </div>
    <div class="konversi-result">
      <h1>Rp 14000 = BTC {{ btcRate }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rateRp: '',
      btcRate: ''
    }
  },
  methods: {
    toBtc() {
      const rupiah = this.rateRp * 0.000071
      console.log(rupiah)
      fetch(`https://blockchain.info/tobtc?currency=USD&value=${rupiah}`)
        .then((res) => res.json())
        .then((response) => {
          this.btcRate = response
        })

        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.container-2 {
  width: 95vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.konversi-text,
.konversi-result {
  text-align: center;
}

.input {
  width: 20vw;
  height: 30px;
  font-size: 1rem;
}
</style>
