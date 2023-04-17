<!--
 * @Author: zhangyanni
 * @Date: 2023-03-31 10:53:32
 * @LastEditors: zhangyanni
 * @LastEditTime: 2023-04-17 14:24:43
 * @FilePath: /my-app/pages/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved. 
-->
<template>
  <div>
    Go to <NuxtLink to="/about">About</NuxtLink>
    <div v-for="item in tableData" :key="item.id">
      <span >{{ item.id }}: {{ item.assertName }}</span>
    </div>
    <button @click="update">refresh</button>
  </div>
</template>
<script lang="ts" setup>
import { hash } from 'ohash'

definePageMeta({
  layout: 'default',
  title: 'My Index page',
})
const key = hash('test111')
const tableData = ref<any[]>([])
const search = reactive({
  pageIndex: 1,
  pageSize: 10,
})

const init = async () => {
  const { data }: any = await useFetch('/api/analyzeAssert/pageList', {
    method: 'POST',
    body: JSON.stringify(search),
    key,
  })
  tableData.value = data.value.data.records
}
init()
const update = () => {
  search.pageIndex++
  init()
}
</script>
