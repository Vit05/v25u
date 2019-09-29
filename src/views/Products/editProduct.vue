<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Edit</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-text-field
                            label="Title "
                            name="title"
                            type="text"
                            required
                            v-model="editTitle"
                    ></v-text-field>
                    <v-text-field
                            label="Price "
                            name="price"
                            type="text"
                            v-model="editPrice"
                    ></v-text-field>

                    <v-text-field
                            label="Description"
                            name="description"
                            type="text"
                            v-model="editDescription"
                    ></v-text-field>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" outlined text @click="onCancel">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="onSave">Save</v-btn>
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
                editTitle: this.product.title,
                editPrice: this.product.price,
                editDescription: this.product.description,

            }
        },
        methods: {
            onCancel() {
                this.editTitle = this.product.title
                this.editPrice = this.product.price
                this.editDescription = this.product.description
                this.dialog = false
            },

            onSave() {
                if (this.editTitle !=='' && this.editPrice !=='' && this.editDescription !=='' ){
                    this.$store.dispatch('updateProduct', {
                        title: this.editTitle,
                        price: this.editPrice,
                        description: this.editDescription,
                        id: this.product.id
                    })
                    this.dialog = false
                }
            },

        }
    }
</script>

<style scoped>

</style>