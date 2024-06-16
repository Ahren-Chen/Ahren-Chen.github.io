<template>
    <v-card-text class="text-subtitle-1">{{ text }}</v-card-text>
</template>

<script>
export default {
    name: 'CardText',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>