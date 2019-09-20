<template>
    <v-container class="lighten-10">
        <v-row no-gutters>
            <v-col cols="8" offset="2">
                <v-card
                        max-width="768"
                        class="mx-auto mb-4"

                        v-for="(product, i) in products"
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
        </v-row>

    </v-container>
</template>

<script>
    export default {
        data: () => ({
            products: [
                {
                    id: '1',
                    title: 'Lenovo Legion Y520',
                    vendor: 'Lenovo',
                    color: 'black',
                    material: 'metal/plastic',
                    description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD íåò/NVIDIA GeForce GTX 1050, 4096 ÌÁ/Wi-Fi/Bluetooth/Win 10 Home'
                    , price: 760,
                    promo: false,
                    imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
                },

                {
                    id: '2',
                    title: 'Asus FX503VD',
                    vendor: 'Asus',
                    color: 'white',
                    material: 'plastic',
                    description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD íåò/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
                    price: 984,
                    promo: true,
                    imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
                },

                {
                    id: '3',
                    title: 'ASUS TUF Gaming FX504GD',
                    vendor: 'Asus',
                    color: 'black',
                    material: 'metal/plastic',
                    description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD íåò/NVIDIA GeForce GTX 1050, 4096 ÌÁ/Wi-Fi/Bluetooth/Win 10 Home',
                    price: 1220,
                    promo: true,
                    imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
                },],
            items2: [
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
            ],
        }),
    }
</script>

<style scoped>

</style>