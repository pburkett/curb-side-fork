<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>My Orders</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h6>Coming Soon!</h6>
      </div>
    </div>
    <div class="row" v-if="false">
      <div class="col">
        <order-component v-for="order in sortDates()" :key="order.id" :order-prop="order" :archived="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive } from 'vue'
import { orderService } from '../services/OrderService'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

export default {
  setup() {
    const route = useRoute()

    const state = reactive({
      orders: computed(() => AppState.orders)
    })
    onMounted(async() => {
      // AppState.date = ''
      try {
        await orderService.getMyOrders(route.params.id)
        AppState.orders = AppState.orders.filter(o => o.status !== 'pending')
      } catch (error) {
        logger.error(error)
      }
    })
    onUnmounted(() => {
      AppState.date = ''
    })
    return {
      state,
      sortDates() {
        state.orders.forEach(o => {
          const date = new Date(o.createdAt)
          const month = date.getMonth()
          const year = date.getFullYear()
          const day = date.getDate()
          const currentDate = year.toString() + month.toString() + day.toString()
          o.date = currentDate
          logger.log(currentDate)
        })
        AppState.orders.sort(function(a, b) {
          return a.date - b.date
        })
        return AppState.orders
      }
    }
  }
}
</script>

<style>

</style>
