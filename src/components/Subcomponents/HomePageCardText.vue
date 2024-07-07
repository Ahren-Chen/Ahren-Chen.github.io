<template>
    <v-card-text class="text-h5 py-5 font-weight-light">{{ text }}</v-card-text>
</template>

<script>
export default {
    name: 'HomeCardText',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>