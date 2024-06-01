<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <!-- Banner Image -->
            <v-row class="py-5 px-0 d-flex align-center justify-center">
                <v-col>
                    <v-img cover height="300" src="@/assets/Projects_Images/Power_In_Community/community_banner.jfif">
                    </v-img>
                </v-col>
            </v-row>

            <!-- Title -->
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Power In The Community</h1>

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
                        Our client James allowed us to create a design that would improve an aspect of his daily
                        life. James is diagnosed with Ehlers-Danlos Syndrome, which affects his ability to perform
                        lateral movements and causes him significant strain when forced to reach/apply pressure onto
                        his joints. Using our experience up until now, we were given freedom on what design and
                        aspect of his life we would target by going through the engineering design process. We
                        created our functions, objectives, and constraints and were in charge of prototyping and
                        delivering a final product in pitch presentation format. One of the difficulties that James
                        faces is his struggle to play board games with his son for extended periods without injury.
                        We decided to address this issue and ultimately designed a multifunctional board game
                        device: Gamehub. Gamehub allows him to manipulate/move game pieces and roll dice without
                        having to reach for them.
                    </v-card-text>



                    <!-- Photo -->
                    <v-img cover width="600" src="@/assets/Projects_Images/Power_In_Community/gamehub.png"
                        class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Final Gamehub Model
                    </v-card-text>
                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Design Process -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Design Process" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        We first decided on the primary aspect of James's life that we were going to improve and settled
                        on board games since they aligned with our interests and everyone's had experiences with a
                        variety of board games. I brought up the prompt of whether we should focus on allowing James to
                        play a specific family of a board game or focus on generalizing the approach and extending it to
                        commonly used board game pieces instead; we decided on the latter. With these critical decisions
                        made, we developed a set of objectives and functions for our mechanism. The functions that we
                        settled on were: the mechanism must be able to roll dice for the user with minimal involvement,
                        accept user input, and be able to hold/transfer game pieces. The objectives that we chose
                        included: it must be lightweight, portable, cheap, compact, and comfortable to use. With the
                        conclusion of our initial discussions, we each set off to develop sketches/inventor models of
                        our ideas.
                    </v-card-text>

                    <v-row class="my-auto px-5">
                        <v-img cover width="450"
                            src="@/assets/Projects_Images/Power_In_Community/community_inventor.png" class="mx-auto">
                        </v-img>
                        <v-img cover width="650"
                            src="@/assets/Projects_Images/Power_In_Community/community_multiview.png" class="mx-auto">
                        </v-img>
                    </v-row>

                    <v-card-text class="font-weight-light">
                        Inventor Model and Multiview Sketch of Dice Roller
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        The aspect I focused on was how to let James roll dice while using minimal movement. My solution
                        consisted of a pinball-inspired design where James would drop the dice from the top, and they
                        would bounce on the pegs as it gradually descends. Although this design was the initial
                        prototype, it fulfilled the objectives set out for the dice roller, and our team created our
                        physical prototypes after selecting the best design for each component.
                    </v-card-text>

                    <v-img cover width="500" src="@/assets/Projects_Images/Power_In_Community/prototype.png"
                        class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Low-Fidelity Prototype
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        After multiple iterations, we modified our final design to include a card slider to move cards
                        between players, a dice roller, and a game piece mover that can be remotely controlled to adjust
                        the position of different pieces on the game board and even act as a game piece itself (Figure
                        1). We chose to 3D print the dice roller to ensure quality and a custom-made design, and we also
                        chose to order a Hexbug online to act as the game piece mover but adjusted the controller to
                        better accommodate James's needs. We chose a light, low friction plastic for the card slider to
                        reduce the force needed to transfer the cards.
                    </v-card-text>

                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Conclusion -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Conclusion" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        This was my first project that involved a real client and the freedom to decide what we built
                        with our objectives/functions. The number of iterations and prototypes that we built for this
                        project was incomparable to previous assignments, and we had to resort to outside resources and
                        times to complete this project. Several challenges appeared during the testing phase, such as
                        ideas that we found were flawed and unpractical and that needed major adjustments. One example
                        was that the printing times for the dice roller alone amounted to nearly 19 hours of print time.
                        Our solution for this was to print it at the school public library, but when we were notified
                        that the print might not come in time, we resorted to creating backups out of wood in case the
                        material did not arrive in time. This project was an incredible learning opportunity about the
                        unexpected situations that arise when facing real-world problems, and it tested our
                        creativity/problem solving to the fullest.
                    </v-card-text>

                    <!-- YouTube video, although there are options to use libraries, videos wil be rare so its easier
                            to just use HTML code and embed it.-->
                    <div class="gamehub_video">
                        <iframe width="882" height="535" src="https://www.youtube.com/embed/tX62yW6jxWg">
                        </iframe>
                    </div>
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
                title: 'Autodesk Inventor',
                value: 1,
            },
            {
                title: 'Prusa Slicer',
                value: 2,
            },
            {
                title: 'Microsoft Office',
                value: 3,
            },
            {
                title: 'Prototyping',
                value: 4,
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