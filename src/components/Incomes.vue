<template>
  <div>Incomes</div>
</template>

<script setup>
import { onMounted } from 'vue'
import getIncomes from '@/api/index.ts'

onMounted(() => {
  getIncomes({ dataType: 'incomes', dateTo: '2023-10-31', dateFrom: '2025-06-25' })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>
<style lang="scss" scoped></style>
