<template>
  <v-app-bar flat :class="scrlpoint ? 'scrlpoint' : 'scrl0'" short>
    <v-app-bar-title class="align-center text-center">
      <v-icon icon="mdi-circle-slice-4" />

      Base Preset

    </v-app-bar-title>

    <span class="ml-auto mr-4 d-none d-sm-flex">
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/about">ABOUT</v-btn>
    </span>
  </v-app-bar>
</template>

<script setup>
  //
</script>
