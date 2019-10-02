<template>
    <v-container class="lighten-10">
        <v-row no-gutters>
            <v-col cols="8" offset="2" v-if="!loading && myProducts.length !== 0">
                <v-card
                        max-width="768"
                        class="mx-auto mb-4"

                        v-for="(product, i) in myProducts"
                        :key="i"
                        :to="`/product/${product.id}`"
                >
                    <v-row
                            class="py-2 pl-2"
                    >
                        <v-col class="shrink">
                            <v-img
                                    height="100"
                                    width="100"
                                    :src="product.imageSrc"
                            ></v-img>
                        </v-col>

                        <v-col>
                            <v-list-item-content>
                                <div class="overline mb-4">{{product.title}}</div>
                                <v-list-item-title class="headline mb-1">${{product.price}}</v-list-item-title>
                            </v-list-item-content>
                        </v-col>

                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="8" offset="2" v-else-if="!loading && myProducts.length === 0">
                <h1>You haven't products yet!</h1>
            </v-col>
            <v-col cols="8" offset="2" v-else>
                <v-overlay>
                    <v-progress-circular
                            :width="5"
                            :size="50"
                            color="red"
                            indeterminate
                    ></v-progress-circular>
                </v-overlay>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        computed: {
            myProducts() {
                console.log(this.$store.getters.myProducts);
                return this.$store.getters.myProducts
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>