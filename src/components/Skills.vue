<template>
    <v-row class="py-5 px-5 d-flex justify-center bg-light-blue-lighten-5">
        <v-col>
            <v-card title="Applicable Technical Skills">

                <v-list lines="two" :items="technical_skills_items" class="mx-auto" color="#81D4FA">

                </v-list>
            </v-card>
        </v-col>

        <v-col>
            <v-card title="Applicable Soft Skills">

                <v-list lines="two" :items="soft_skills_items" class="mx-auto" color="#81D4FA">

                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Skills',
    props: {
        technical_skills_items: {
            type: Array,
            required: true
        },
        soft_skills_items: {
            type: Array,
            required: true
        }
    }
}
</script>