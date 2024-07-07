<template>
    <v-card-title class="text-h3 py-5 font-weight-bold wrap-title">{{ text }}</v-card-title>
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