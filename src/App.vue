<template>
    <v-app id="inspire">
        <v-navigation-drawer v-if="$vuetify.breakpoint.smOnly"
                             v-model="drawer"
                             app
        >
            <v-list dense>
                <v-list-item v-for="(link, i) in links" :to="link.url" :key="i">


                    <v-list-item-content>
                        <v-list-item-title>{{link.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  v-if="isUserLoggedIn"
                              @click="onLogout">


                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <template v-if="$vuetify.breakpoint.smOnly">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
            <v-toolbar>
                <v-toolbar-title>
                    <router-link to="/">v25u</router-link>
                    <span v-if="user" style="margin-left: 30px;">{{user.email}}</span>
                </v-toolbar-title>

                <div class="flex-grow-1"></div>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                    <v-toolbar-items>
                        <v-btn text v-for="(link, i) in links" :to="link.url" :key="i">{{link.title}}</v-btn>
                    </v-toolbar-items>



                    <v-btn icon
                           v-if="isUserLoggedIn"
                    @click="onLogout">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>

                </template>
            </v-toolbar>
        </v-app-bar>
        <template v-if="error">
            <v-snackbar
                    color="red"
                    :multi-line="true"
                    :timeout="5000"
                    @input="closeError"
                    :value="true"
            >
                {{ error }}
                <v-btn
                        dark
                        text
                        @click.native="closeError"
                >
                    Close
                </v-btn>
            </v-snackbar>

        </template>
        <v-content>

            <router-view/>

        </v-content>
        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data: () => ({
            //
            drawer: false,
        }),
        computed: {
            error() {
                return this.$store.getters.error
            },

            isUserLoggedIn() {
                return this.$store.getters.isUserLoggedIn
            },
            user() {
                return this.$store.getters.user
            },
            links() {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Home', url: '/'},

                        {title: 'Cart', url: '/checkout'},
                        {title: 'New Product', url: '/new'},
                        {title: 'My Products', url: '/list'},
                    ]
                }
                return [
                    {title: 'Home', url: '/'},

                    {title: 'Login', url: '/login'},
                    {title: 'Register', url: '/register'},
                ]
            }
        },
        methods: {
            closeError() {
                this.$store.dispatch('clearError')
            },
            onLogout(){
                this.$store.dispatch('logoutUser')
                this.$router.push('/')
            }
        }
    };
</script>
