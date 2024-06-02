<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <!-- Banner Image -->
            <v-row class="py-5 px-0 d-flex align-center justify-center">
                <v-col>
                    <v-img cover height="300" src="@/assets/Projects_Images/Skybox/banner.avif">
                    </v-img>
                </v-col>
            </v-row>

            <!-- Title -->
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Skybox</h1>

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
                        Our hackathon team for "To the moon and hack" by major league hacking chose to create a 3D star
                        system simulator. The game works in a sandbox style where you can place down stars/planets and
                        give them qualities such as velocity, mass, gravity constant, and radius. After entering all the
                        desired entities, you can choose which planets/stars can move as well as delete unwanted ones.
                        Once you press the play button, the physics engine will start to simulate the passage of time in
                        this universe and what would happen with these conditions. You can also rotate and move the
                        camera to better observe the simulated environment from different angles.
                    </v-card-text>


                    <!-- Photo -->
                    <v-img cover width="700" src="@/assets/Projects_Images/Skybox/summary.png" class="mx-auto">
                    </v-img>
                </v-card>

            </v-row>

            <v-divider></v-divider>

            <!-- Design Process -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Design Process" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        Our team of 4 had 48 hours to create something of our choice using any programming language as
                        long as the theme of "space" was respected. In this regard, we ultimately chose to create a
                        sandbox game using python that heavily relied on physics since it was a shared interest of us
                        all. This was my first hackathon experience, but I had already been comfortable with python for
                        years and was confident enough to create something with my friends.\n
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        For this project, I mainly focused on the front-end to back-end connection between the buttons,
                        images, and textboxes to receive inputs/outputs. Since it was a small group, we were each aware
                        of everyone's roles and positions keenly but worked together when difficulties appeared, so I am
                        also familiar with the structure of all the back-end functions.
                    </v-card-text>

                    <v-img cover width="700" src="@/assets/Projects_Images/Skybox/fully_loaded.png" class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Automatically Loaded Sample
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        The most challenging aspect of this hackathon for me was working with others for an extended
                        period. Each member of the group trusted the others to fully complete their portion of the work
                        without error and asked for help if they got stuck. This structure worked amazingly, but the
                        challenging part for me was reading and understanding others' code who had different habits than
                        mine when trying to help them with their unknown error. I overcame this slowly over two days,
                        and I learned what it means to work in a small group and gained valuable experience
                        working/learning under a tight time constraints.
                    </v-card-text>
                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Available features -->
            <v-row class="py-5 px-5 d-flex justify-center bg-light-blue-lighten-5">
                <v-card title="Currently available functions:" class="mx-auto" cover>

                    <v-list lines="two" :items="functions" class="mx-auto text-bold" color="#81D4FA">

                    </v-list>

                    <v-row class="pb-4 px-3 align-center justify-center">
                        <v-col>
                            <v-card append-icon="mdi-open-in-new" class="mx-auto" color="#385F73"
                                href="https://github.com/Ahren-Chen/SkyBox" max-width="344"
                                prepend-icon="mdi-github" rel="noopener noreferrer" target="_blank" title="GitHub">
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card append-icon="mdi-open-in-new" class="mx-auto" color="#385F73" href="https://devpost.com/software/skybox-3ebh5z"
                                max-width="344" prepend-icon="mdi-devpost" rel="noopener noreferrer" target="_blank"
                                title="Devpost">
                            </v-card>
                        </v-col>
                    </v-row>
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
        functions: [
            {
                title: 'Able to create a new star or planet by filling out oll the text boxes other than gravity constant, click on either the star or planet icon, and hitting confirm',
                value: 1,
            },
            {
                title: 'To change the gravity constant, type in your desired gravity constant and hit apply',
                value: 2,
            },
            {
                title: 'Click on a planet/star to select it, when selected, the entity will show a colored dot at the center',
                value: 3,
            },
            {
                title: 'Use the trash can button to delete a selected entity, or the movable button to lock it in place',
                value: 4,
            },
            {
                title: 'You may save the current star system by clicking save, or click load to load your saved star system',
                value: 5,
            },
            {
                title: 'A demo star system has been pre loaded and can be accessed by pressing load',
                value: 6,
            },
            {
                title: 'The mini map can be used to determin the direction you are facing and where objects in your star system are',
                value: 7,
            },
            {
                title: 'The PAUSE and PLAY button can be used to enable the physics of the the system to unfold',
                value: 8,
            },
            {
                title: 'The eye icon can be clicked to reset your perspective',
                value: 9,
            },
            {
                title: 'Note: The gravity constant has been pre-set to 0.0004',
                value: 10,
            },
        ],
    }),
}
</script>