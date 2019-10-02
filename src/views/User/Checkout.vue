<template>
    <v-container class="lighten-10">
        <v-row class="mb-8" v-if="loading"
               justify="center"
               no-gutters>
            <v-col cols="8">

                <div>
                    <v-progress-circular
                            :width="5"
                            :size="50"
                            color="red"
                            indeterminate
                    ></v-progress-circular>
                </div>


            </v-col>
        </v-row>
        <v-row class="mb-8" v-else-if="!loading && orders.length !==  0"
               justify="center"
               no-gutters>
            <v-col cols="8">
                <v-list >
                    <h1 class="pa-5">Orders</h1>


                    <div v-for="(order, i) in orders" :key="i">


                        <v-checkbox
                                color="success"
                                :input-value="order.done"
                                @change="markDone(order)"
                        ></v-checkbox>


                        <v-list-item-title>{{order.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>

                        <v-btn class="primary" :to="`/product/${order.productId}`">Open</v-btn>


                    </div>


                </v-list>
            </v-col>
        </v-row>
        <v-row class="mb-8" v-else
               justify="center"
               no-gutters>
            <v-col cols="8">
                <div>
                    <h1>No orders</h1>
                </div>
            </v-col>
        </v-row>


    </v-container>
</template>
<script>
    export default {

        computed: {
            loading() {
                return this.$store.getters.loading
            },
            orders() {
                return this.$store.getters.orders
            }
        },
        methods: {
            markDone(order) {
                this.$store.dispatch('markOrderDone', order.id)
                    .then(() => {
                        order.done = true
                    })
                    .catch(() => {
                    })
            }
        },
        created() {
            this.$store.dispatch('fetchOrders')
        }
    }
</script>

<style scoped>

</style>