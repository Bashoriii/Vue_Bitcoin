import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const whiteListCurrency = ['AUD', 'EUR', 'GBP', 'JPY', 'USD']
      const whiteListData = Object.fromEntries(
        Object.entries(json).filter(([key]) => whiteListCurrency.includes(key))
      )
      data.value = whiteListData
    })
    .catch((err) => (error.value = err))

  return { data, error }
}
