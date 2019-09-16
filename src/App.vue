<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-if="$vuetify.breakpoint.smOnly"
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
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
        <v-toolbar-title>Title</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-toolbar-items>
          <v-btn text to="/">Home</v-btn>
          <v-btn text to="/about">About</v-btn>

        </v-toolbar-items>


          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height"
              fluid
      >
        <router-view/>
      </v-container>
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
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
    drawer: false
  }),
};
</script>
