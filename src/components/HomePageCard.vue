<template>
    <v-col cols="4">
        <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="link" min-height="350"
            :image="image" :color="color">

            <HomePageCardTitle :text = "title" class="wrap-text"/>
            <HomePageCardText :text = "text" />
        </v-card>
    </v-col>
</template>

<script>
import HomePageCardTitle from '@/components/Subcomponents/HomePageCardTitle.vue'
import HomePageCardText from '@/components/Subcomponents/HomePageCardText.vue'
export default {
    name: 'HomeCard',
    props: {
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    components: {
        HomePageCardTitle,
        HomePageCardText
    }
}
</script>