<template>
    <v-row class="py-5 px-0 d-flex align-center justify-center">
        <v-col>
            <v-img cover height="350" :src=imagePath>
            </v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        imagePath: {
            type: String,
            required: true
        }
    }
}
</script>