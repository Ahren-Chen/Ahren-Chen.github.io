<template>
    <v-card-text class="font-weight-light"> {{ text }} </v-card-text>
</template>

<script>
export default {
    name: 'FigureText',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>