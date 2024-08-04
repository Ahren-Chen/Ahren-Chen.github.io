<template>
    <v-row class="my-auto px-5">
        <v-col>
            <v-img height="400" :src="imageOne" class="mx-auto">
            </v-img>
            <FigureText :text="textOne" />
        </v-col>

        <v-col>
            <v-img height="400" :src="imageTwo" class="mx-auto">
            </v-img>
            <FigureText :text="textTwo" />
        </v-col>
    </v-row>
</template>

<script>
import FigureText from '@/components/Subcomponents/FigureText.vue'
export default {
    name: 'TwoColumnImage',
    props: {
        imageOne: {
            type: String,
            required: true
        },
        imageTwo: {
            type: String,
            required: true
        },
        textOne: {
            type: String,
            required: true
        },
        textTwo: {
            type: String,
            required: true
        }
    },
    components: {
        FigureText
    }
}
</script>