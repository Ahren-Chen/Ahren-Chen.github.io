<template>
  <router-view />
</template>

<script>
  export default {
    data() {
      return {
        scrlpoint: false,
      };
    },
    methods: {
      // updateScroll checks how far page is scrolled, and changes scrlpoint value accordingly
      updateScroll() {
        window.scrollY >= 50 ? (this.scrlpoint = true) : (this.scrlpoint = false);
      },
      onIntersect(entries) {
        this.intersect = entries[0].isIntersecting;
      },
    },
    watch: {
      scrlpoint(value) {
        this.menu = value;
      },
      $route: {
        immediate: true,
        handler(to) {
          document.title = to.meta.title || "Ahren Chen";
        },
      },
    },
    mounted() {
      // Starts updateScroll method
      window.addEventListener("scroll", this.updateScroll);
    },
  };
</script>
