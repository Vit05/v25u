<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    :prepend-icon="icons.account"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                            ></v-text-field>

                            <v-text-field
                                    :append-icon="show3 ? icons.eye : icons.eyeOff"
                                    :rules="[passwordRules.required, passwordRules.min]"
                                    :type="show3 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Password"
                                    hint="At least 6 characters"
                                    v-model="password"
                                    @click:append="show3 = !show3"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="primary"
                               :disabled="valid"
                               @click="onSubmit">Login</v-btn>
                    </v-card-actions>
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

    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            icons: {
                    account: mdiAccount,
                    lock: mdiLock,
                    eye: mdiEye,
                    eyeOff: mdiEyeOff
                },
            valid: false,
            show3: false,
            password:'',
            passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 6 || 'Min 6 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],


        }),

        methods:{
            onSubmit(){
                if (this.$refs.form.validate()){
                    this.valid = !this.valid;
                    const  user_2={
                        email: this.email,
                        password: this.password
                    };
                    // console.log(user);
                }
            }
        }
    }
</script>

<style scoped>

</style>