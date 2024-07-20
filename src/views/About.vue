<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <PageTitle :titleText="Title" />

            <HomePageRow>

                <v-col justify="start" class="bg-light-blue-lighten-4 px-2">
                    {{ AboutMe }}

                </v-col>

                <v-col>
                    <v-img cover height="500" src="@/assets/AboutPage_profile.jpg">
                    </v-img>

                    <v-row class="pt-4 px-3 align-center justify-center">
                        <v-col>
                            <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="LinkedInLink" max-width="344"
                                prepend-icon="mdi-linkedin" rel="noopener noreferrer" target="_blank" title="LinkedIn">
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="GitHubLink" max-width="344"
                                prepend-icon="mdi-github" rel="noopener noreferrer" target="_blank" title="GitHub">
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>

            </HomePageRow>
        </v-responsive>
    </v-container>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue';
import HomePageRow from '@/components/HomePageRow.vue';

const Title = "About Me";

const AboutMe = `Hello! My name is Ahren Chen and I am currently a third-year student enrolled in the Software
                        Engineering Co-op program at McMaster University in Hamilton, ON, Canada.
                        I strive to learn and create quality code that will stand the test of time.`

const LinkedInLink = "https://www.linkedin.com/in/ahren-chen/";
const GitHubLink = "https://github.com/Ahren-Chen";
</script>