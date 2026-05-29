<script setup lang="ts">

import { useRoute } from 'vue-router'
import { useMoneyStore } from '../stores/stores.money.ts';

import MoneyEditForm from '../components/money/MoneyEditForm.vue';

const route = useRoute()
const useMoney = useMoneyStore()

useMoney.editDataId= Number(route.params.id)



</script>

<template>
  <MoneyEditForm
    v-if="useMoney.editData"
    :edit-data="useMoney.editData"
  />
</template>