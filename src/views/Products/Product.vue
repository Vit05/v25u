<template>
    <v-container class="lighten-10">
        <v-row no-gutters>
            <v-col cols="8" offset="2">
                <v-card
                        v-if="!loading"
                        class="mx-auto"
                        outlined
                >
                    <v-row no-gutters>
                        <v-col cols="4" class="py-4">
                            <v-img
                                    :src="product.imageSrc"
                                    lazy-src="https://picsum.photos/id/11/10/6"
                                    aspect-ratio="2" contain
                                    max-height="300"
                            ></v-img>
                        </v-col>
                        <v-col cols="8" class="pa-4">


                            <v-simple-table>
                                <template v-slot:default>

                                    <tbody>
                                    <tr>
                                        <th class="text-right">Name:</th>
                                        <td>{{ product.title }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-right">Vendor:</th>
                                        <td>{{ product.vendor }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-right">Color:</th>
                                        <td>{{ product.color }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-right">Material:</th>
                                        <td>{{ product.material }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-right">Price:</th>
                                        <td>{{ product.price }}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-right">Desc:</th>
                                        <td class="py-2">{{ product.description }}</td>
                                    </tr>


                                    </tbody>
                                </template>
                            </v-simple-table>

                            <v-divider class="mx-4"></v-divider>


                            <v-card-actions>
                                <app-edit-product v-if="isOwner" :product="product"></app-edit-product>
                                <app-buy-dialog :product="product"></app-buy-dialog>

                            </v-card-actions>
                        </v-col>
                    </v-row>

                </v-card>
                <v-overlay v-else>
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
    import fb from 'firebase'
    import EditProduct from "./editProduct";

    export default {
        props: ['id'],
        computed: {
            product() {
                const id = this.id;
                return this.$store.getters.productById(id)
            },
            loading() {
                return this.$store.getters.loading
            },
            isOwner(){
                if (this.$store.getters.isUserLoggedIn) {
                    return this.product.ownerId === fb.auth().currentUser.uid
                } else {
                    console.log('YOU DO NOT LOGIN')
                }
            }
        },
        components: {
            appEditProduct: EditProduct
        }
    }
</script>

<style scoped>

</style>