<template>
    <v-container class="lighten-10">
        <v-row no-gutters>
            <v-col cols="12">
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Create new product</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form"
                                v-model="valid">
                            <v-text-field
                                    label="TitleProduct "
                                    name="title"
                                    type="text"
                                    required
                                    :rules="[v=>!!v||'Field is required']"
                                    v-model="title"
                            ></v-text-field>
                            <v-text-field
                                    label="Vendor Product"
                                    name="vendor"
                                    type="text"
                                    v-model="vendor"
                            ></v-text-field>
                            <v-text-field
                                    label="Color Product"
                                    name="color"
                                    type="text"
                                    v-model="color"
                            ></v-text-field>
                            <v-text-field
                                    label="Material Product"
                                    name="material"
                                    type="text"
                                    v-model="material"
                            ></v-text-field>
                            <v-text-field
                                    label="Price Product"
                                    name="price"
                                    type="text"
                                    required
                                    :rules="[v=>!!v||'Field is required']"
                                    v-model="price"
                            ></v-text-field>

                            <v-text-field
                                    label="Description Product"
                                    name="description"
                                    type="text"

                                    v-model="description"
                            ></v-text-field>
                          <!--  <v-textarea
                                    label="Description Product"
                                    name="description"
                                    v-model="description"
                                    :value="description"
                            ></v-textarea>-->
                            <input
                                    style="display: none"
                                    accept="image/*"
                                    type="file"
                                    name="file"
                                    ref="fileInput"
                                    @change="onFileChange"
                            />
                            <v-btn class="warning" @click="upload">Upload
                                <v-icon>{{icons.upload}}</v-icon>
                            </v-btn>


                            <v-row align="center" justify="center">
                                <v-img
                                        v-if="imageSrc"
                                        :src="imageSrc"
                                        lazy-src="https://picsum.photos/id/11/10/6"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                        max-width="350"
                                        max-height="200"
                                ></v-img>
                            </v-row>

                            <v-switch
                                    color="primary"
                                    v-model="promo"
                                    label="Add to Promo?"
                            ></v-switch>

                            <v-btn class="success"
                                   :loading="loading"
                                   :disabled="!valid || !image || loading"
                                   @click="createProduct"
                            >Create product
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import {mdiAccount} from '@mdi/js'
    import {mdiLock} from '@mdi/js'
    import {mdiEye} from '@mdi/js'
    import {mdiEyeOff} from '@mdi/js'
    import {mdiCloudUpload} from '@mdi/js'

    export default {
        data: () => ({
            drawer: null,
            icons: {
                account: mdiAccount,
                lock: mdiLock,
                eye: mdiEye,
                eyeOff: mdiEyeOff,
                upload: mdiCloudUpload
            },
            title: '',
            vendor: '',
            color: '',
            material: '',
            price: 0,
            description: '',
            promo: false,
            valid: false,
            image: null,
            imageSrc: '',


        }),
        computed:{
            loading(){
                return this.$store.getters.loading
            }
        },
        methods: {
            createProduct() {
                if (this.$refs.form.validate() && this.image) {
                    const product = {
                        title: this.title,
                        vendor: this.vendor,
                        color: this.color,
                        material: this.material,
                        price: this.price,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }
                    // console.log("PRD", prd);
                    this.$store.dispatch('createProduct', product)
                        .then(()=>{
                            this.$router.push('/list')
                        })
                        .catch(()=>{})
                }
            },
            upload(){
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0];
                // console.log(file)
                const reader = new FileReader()

                reader.onload = e => {
                    this.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>