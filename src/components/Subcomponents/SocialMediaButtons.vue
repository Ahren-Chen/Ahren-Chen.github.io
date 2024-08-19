<template>
    <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="link" :max-width="max_width"
        :prepend-icon="icon" rel="noopener noreferrer" target="_blank" :title="title" :color="color">
    </v-card>
</template>

<script>
export default {
    name: 'SocialMediaButtons',
    props: {
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        max_width: {
            type: String,
            default: "344"
        },
        color: {
            type: String,
            default: ""
        }
    }
}
</script>