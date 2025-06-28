<template>
  <div>Incomes</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import getIncomes from '@/api/index.ts';
import { toast } from 'vue3-toastify';

const incomes = ref([]);

onMounted(async () => {
  try {
    const response = await getIncomes({
      dataType: 'incomes',
      dateTo: '2023-10-31',
      dateFrom: '2025-06-25'
    });
    incomes.value = response.data;
  } catch (error) {
    toast.error('Failed to load incomes');
    console.error(error);
  }
});
</script>

<style lang="scss" scoped></style>
