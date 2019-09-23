<template>
    <v-container class="lighten-10">
        <v-row no-gutters>
            <v-col cols="8" offset="2">
                <v-card
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
                                    <!-- <thead>
                                     <tr>
                                         <th class="text-right">Name</th>
                                         <th class="text-left">Calories</th>
                                     </tr>
                                     </thead>-->
                                    <tbody>
                                    <!-- <tr v-for="(item, key) in product" :key="key">
                                         <td>{{ key }}</td>
                                         <td>{{ item }}</td>
                                     </tr>-->
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
                                <v-btn color="accent-4"
                                       class="primary">
                                    Edit
                                </v-btn>
                                <v-btn color="accent-4"
                                       class="primary">
                                    buy
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            product() {
                const id = this.id;
                return this.$store.getters.productById(id)
            }
        }
    }
</script>

<style scoped>

</style>