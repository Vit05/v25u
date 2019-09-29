<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="light-blue darken-4" dark v-on="on">Buy</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Do ypu want to buy?</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-text-field
                            label="Your name "
                            name="name"
                            type="text"
                            required
                            v-model="name"
                    ></v-text-field>
                    <v-text-field
                            label="Your phone "
                            name="phone"
                            type="text"
                            v-model="phone"
                    ></v-text-field>

                    <v-text-field
                            label="Your email "
                            name="email"
                            type="email"
                            v-model="email"
                    ></v-text-field>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn :disabled="localLoading"
                           color="blue darken-1"
                           outlined
                           text
                           @click="onClose">Close
                    </v-btn>
                    <v-btn :disabled="localLoading"
                           :loading="localLoading"
                           color="blue darken-1"
                           text
                           @click="onSave">BUY IT
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        props: ['product'],
        data() {
            return {
                dialog: false,
                name: '',
                phone: '',
                email: '',
                localLoading: false,

            }
        },
        methods: {
            onClose() {
                this.name = ''
                this.phone = ''
                this.email = ''
                this.dialog = false
            },

            onSave() {
                if (this.name !== '' && this.phone !== '' && this.email !== '') {
                    this.localLoading = true
                    this.$store.dispatch('createOrder', {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        productId: this.productId,
                        ownerId: this.product.ownerId
                    }).finally(() => {
                        this.name = ''
                        this.phone = ''
                        this.email = ''
                        this.localLoading = false
                        this.dialog = false
                    })
                }
            },

        }
    }
</script>

<style scoped>

</style>