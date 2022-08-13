<template>
  <HeaderComponent />
  <router-view />
</template>

<script>
import HeaderComponent from '@/components/common/HeaderComponent'
export default {
  components: {
    HeaderComponent,
  },
}
</script>
<script setup>
import { getData, setData } from '@/helpers/localStorage'
import transactionTypes from '@/mocks/transactionTypes'
import amountTypes from '@/mocks/amountTypes'

if (!getData('transactionTypes')) {
  setData('transactionTypes', transactionTypes)
}

if (!getData('amountTypes')) {
  setData('amountTypes', amountTypes)
}

if (!getData('categories')) {
  setData('categories', [])
}

if (!getData('transactions')) {
  setData('transactions', [])
}
</script>

<style lang="scss"></style>
