<template>
    <div v-if="!loading">
        <v-container class="lighten-10" fluid>
            <v-row>
                <v-carousel :show-arrows="true">
                    <v-carousel-item
                            v-for="(item,i) in productsPromo"
                            :key="i"
                            :src="item.imageSrc"
                    ></v-carousel-item>
                </v-carousel>
            </v-row>
        </v-container>

        <v-container class="lighten-10">

            <v-row>

                <v-col
                        v-for="(item, i) in products"
                        :key="i"
                        cols="3"
                >

                    <v-card
                    >
                        <router-link :aria-label="item.title" :to="`/product/${item.id}`">

                            <v-img
                                    v-if="item.imageSrc"
                                    class="white--text"
                                    height="300px"
                                    :src="item.imageSrc"
                            >
                            </v-img>
                        </router-link>

                        <v-card-title>
                            <div>{{item.title}}</div>
                        </v-card-title>
                        <v-card-title>
                            <div>Price: ${{item.price}}</div>
                        </v-card-title>

                        <v-card-text>
                            {{item.description}}

                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined color="indigo" :to="`/product/${item.id}`">Deskription</v-btn>
                            <v-btn dark color="primary">Click</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-else>
        <v-overlay>
            <v-progress-circular
                    :width="5"
                    :size="50"
                    color="red"
                    indeterminate
            ></v-progress-circular>
        </v-overlay>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                overlay: false,
            }
        },
        computed: {
            productsPromo() {
                return this.$store.getters.productsPromo
            },
            products() {
                return this.$store.getters.products
            },
            loading() {
                return this.$store.getters.loading
            }
        },
        components: {},
    };
</script>
