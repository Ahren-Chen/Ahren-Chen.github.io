<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">About Me</h1>

            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-3">

                <!-- Intro here -->
                <v-col justify="start" class="bg-light-blue-lighten-4 px-2">
                    <h2>Hello! My name is Ahren Chen and I am currently a third-year student enrolled in the Software 
                        Engineering Co-op program at McMaster University in Hamilton, ON, Canada.
                        I strive to learn and create quality code that will stand the test of time.</h2>

                </v-col>

                <!-- Profile picture and social media links here -->
                <v-col>
                    <v-img
                        cover
                        height="500"
                        src="@/assets/AboutPage_profile.jpg">
                    </v-img>

                    <v-row class="pt-4 px-3 align-center justify-center">
                        <v-col>
                            <v-card
                                append-icon="mdi-open-in-new"
                                class="mx-auto"
                                href="https://www.linkedin.com/in/ahren-chen/"
                                max-width="344"
                                prepend-icon="mdi-linkedin"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="LinkedIn">
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card
                                append-icon="mdi-open-in-new"
                                class="mx-auto"
                                href="https://github.com/Ahren-Chen"
                                max-width="344"
                                prepend-icon="mdi-github"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="GitHub">
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="py-5 mb-2 d-flex align-center justify-center bg-light-blue-lighten-2">
                <!-- PDF of Resume Here -->
                <v-col>
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="mx-auto"
                        href="./Ahren_Chen_Resume.pdf"
                        max-width="344"
                        prepend-icon="mdi-file-pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Resume">
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>