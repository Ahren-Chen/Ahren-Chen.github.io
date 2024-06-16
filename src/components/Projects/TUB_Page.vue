<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <!-- Banner Image -->
            <v-row class="py-5 px-0 d-flex align-center justify-center">
                <v-col>
                    <v-img cover height="300" src="@/assets/Projects_Images/Tub/banner.avif">
                    </v-img>
                </v-col>
            </v-row>

            <!-- Title -->
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Hackathon: TUB</h1>

            <!-- Technical and Soft Skills -->
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

            <v-divider></v-divider>

            <!-- Summary -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">

                <!-- Summary -->
                <v-card title="Project Description">

                    <v-card-text class="text-subtitle-1">
                        Our hackathon team decided to create a club management program in 48 hours to make signing up
                        for clubs and creating/managing them easier for students and staff. The program is made of
                        python as the back-end with python kivy to create the front-end and MySQL as the database to
                        store all account/club information. The program consists of a log-in/sign-up feature, a
                        biography edit, password changes, joining clubs, club creation, viewing currently joined clubs,
                        and a search/scroll section for clubs. There were many more features planned, but we were unable
                        to implement them within the limited time we had, such as admin privileges for certain users and
                        announcement pages for each club.
                    </v-card-text>


                    <v-img width="800" src="@/assets/Projects_Images/Tub/summary.png" class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Account Profile Example
                    </v-card-text>
                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Design Process -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Design Process" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        For this project, we decided to create something that may be practical and noticed that most
                        schools never had an app/program to keep track of all school-sanctioned clubs, and we thought it
                        would be useful to create one for convenience. This was also the first time we incorporated
                        MySQL into our projects, and with that came challenges such as preventing SQL injections. During
                        this time, we each needed to understand the logic of each other's code to properly use and
                        prevent bugs from occurring, which means that I was able to obtain a working understanding of
                        MySQL during this project.
                    </v-card-text>

                    <v-row class="my-auto px-5">
                        <v-img cover height="400" src="@/assets/Projects_Images/Tub/log_in.png" class="mx-auto">
                        </v-img>
                        <v-img cover height="400" src="@/assets/Projects_Images/Tub/sign_up.png" class="mx-auto">
                        </v-img>
                    </v-row>

                    <v-card-text class="font-weight-light">
                        Log-In and Sign-Up Pages
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        I wanted to try learning something new this hackathon, so I took it upon myself to learn Kivy,
                        an extremely useful tool to create a front-end without using pygame. I was responsible for
                        creating all the visuals, buttons, text boxes, scroll bars, and transitions. As this was my
                        first time using Kivy, I learned it during the 48 hours, and this was truly a worthwhile
                        learning experience for problem-solving as there was no guidance other than google and
                        StackOverflow for any issues I encountered.
                    </v-card-text>

                    <v-row class="my-auto px-5">
                        <v-img cover height="450" src="@/assets/Projects_Images/Tub/available_club.png" class="mx-auto">
                        </v-img>
                        <v-img cover height="450" src="@/assets/Projects_Images/Tub/club_creation.png" class="mx-auto">
                        </v-img>
                    </v-row>

                    <v-card-text class="font-weight-light">
                        Available Clubs and Club Creation
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        The most challenging aspect of this hackathon for me was learning an entirely different language
                        in a tight time constraint while also being able to provide help to my other teammates in
                        creating/implementing ideas. The difference in this project was that I was almost fully
                        responsible for the front-end, so I knew to critique ideas based on an estimate of feasibility
                        and time needed, as well as give alternative solutions. It allowed for more established
                        communication than in previous projects and ultimately lead to a more productive working
                        structure.
                    </v-card-text>

                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Conclusion -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card append-icon="mdi-open-in-new" class="mx-auto" color="#385F73"
                    href="https://github.com/Ahren-Chen/SkyBox" max-width="344" prepend-icon="mdi-github"
                    rel="noopener noreferrer" target="_blank" title="GitHub">
                </v-card>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
export default {
    data: () => ({

        technical_skills_items: [
            {
                title: 'Python',
                value: 1,
            },
            {
                title: 'Python Kivy',
                value: 2,
            },
            {
                title: 'MySQL',
                value: 3,
            },
        ],

        soft_skills_items: [
            {
                title: 'Teamwork',
                value: 1,
            },
            {
                title: 'Communication',
                value: 2,
            },
            {
                title: 'Time Management',
                value: 3,
            },
            {
                title: 'Problem Solving',
                value: 4,
            },
            {
                title: 'Creativity',
                value: 5,
            },
        ],
    }),
}
</script>