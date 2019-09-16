<template>
  <v-container class="lighten-10">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>About PAGE</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>

      <v-col
              v-for="n in 12"
              :key="n"
              cols="12"
              sm="2"
      >
        <v-card
                class="pa-5"
                outlined
                tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
