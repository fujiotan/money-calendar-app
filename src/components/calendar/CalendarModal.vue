<script setup lang="ts">
import { getCategoryLavel } from '../../composable/useMoney';

import { formatedDateJp } from '../../utils/utils.calendar';
import { useMoneyStore } from '../../stores/stores.money';
import { useRouter } from 'vue-router';

import type { TransactionData } from '../../types/types.money'

const useMoney = useMoneyStore()
const router = useRouter()

const props = defineProps<{
  selectedDate: Date
  selectedDateData: TransactionData[]
}>()


const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()

const moveEdit = (id: number) => {
  router.push({
    name: 'money-edit',
    params: { id }
  })
}

</script>

<template>
  <div style="margin-top:20px;padding-top:20px;border-top:1px solid #333">
    <div>{{ formatedDateJp(props.selectedDate) }}</div>
  </div>
  <p v-if="useMoney.selectedDateData.length === 0">登録がありません</p>
  <div v-else>
    <p>本日の収支：</p>
    <ul style="width: 100%;">
      <li v-for="item in props.selectedDateData" :key="item.id" style="text-align:left;margin-left:-20px;">
        {{`[${getCategoryLavel(item.category)}] ${[item.name]}  ${item.amount.toLocaleString('jp-JP')}円` }}
        <button @click="moveEdit(item.id)">編集</button>
        <button @click="emit('delete', item.id )">削除</button>
      </li>
    </ul>
  </div>
  <div>
    <RouterLink to="/create">新規作成</RouterLink>
  </div>

</template>