<template>
    <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">

        <!-- Summary -->
        <v-col justify="start" class="mx-auto">
            <v-card title="Project Description">

                <v-card-text class="text-subtitle-1">
                    {{ summaryText }}
                </v-card-text>
            </v-card>

        </v-col>

        <!-- Photo -->
        <v-col>
            <v-img cover height="400" :src="summaryImg">
            </v-img>

        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'TwoColumnSummary',
    props: {
        summaryText: {
            type: String,
            required: true
        },
        summaryImg: {
            type: String,
            required: true
        }
    }
}
</script>