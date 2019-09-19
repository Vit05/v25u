<template>
    <v-container class="lighten-10">
        <v-row class="mb-8"
               justify="center"
               no-gutters>
            <v-col cols="8">
                <v-list
                        subheader
                        two-line
                        flat
                >
                    <h1 class="pa-5">Orders</h1>

                    <v-list-item-group
                            v-model="settings"
                            multiple
                    >
                        <v-list-item v-for="(order, i) in orders" :key="i">
                            <template v-slot:default="{ active, toggle }">
                                <v-list-item-action>
                                    <v-checkbox
                                            v-model="active"
                                            color="primary"
                                            @change="markDone(order)"
                                            :input-value="order.done"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn class="primary" :to="`/product/${order.productId}`">Open</v-btn>
                                </v-list-item-action>
                            </template>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                settings: [],
                orders: [
                    {
                        id: 'test',
                        name: 'Viktor',
                        phone: '937 999 2',
                        productId: 1,
                        done: false
                    },
                    {
                        id: 'test2',
                        name: 'Viktor2',
                        phone: '937 999 2 45454',
                        productId: 2,
                        done: true
                    },
                    {
                        id: 'test3',
                        name: 'Viktor3',
                        phone: '937 94547894',
                        productId: 4,
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone(order) {
                order.done = !order.done
            }
        }
    }
</script>

<style scoped>

</style>