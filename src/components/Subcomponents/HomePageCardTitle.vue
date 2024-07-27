<template>
    <v-card-title class="text-h4 py-5 font-weight-bold text-wrap">{{ text }}</v-card-title>
</template>

<script>
export default {
    name: 'Title',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>