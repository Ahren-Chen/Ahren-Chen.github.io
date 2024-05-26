<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <!-- Banner Image -->
            <v-row class="py-5 px-0 d-flex align-center justify-center">
                <v-col>
                    <v-img cover height="300" src="@/assets/Projects_Images/Get_A_Grip/Get_A_Grip_banner.jpg">
                    </v-img>
                </v-col>
            </v-row>

            <!-- Title -->
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Renewable Energy Challenge</h1>

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
                <v-col justify="start" class="mx-auto">
                    <v-card title="Project Description">

                        <v-card-text class="text-subtitle-1">
                            <p>Our team was entrusted with designing a process to sterilize a surgical tool by putting
                                it into a container and using a mechanical arm to transport it. To efficiently
                                accomplish this task, we split into two teams; one was responsible for creating a solid
                                model of the container, and the other was in charge of writing the python code for the
                                robotic arm. I was a part of the modeling team, and my objectives included minimizing
                                material usage, securing the surgical tool, and facilitating sterilization.</p>
                        </v-card-text>
                    </v-card>

                </v-col>

                <!-- Photo -->
                <v-col>
                    <v-img cover height="400" src="@/assets/Projects_Images/Get_A_Grip/summary.png">
                    </v-img>

                </v-col>
            </v-row>

            <v-divider></v-divider>

            <!-- Design Process -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Design Process" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        As part of the modeling team, I first created a set of objectives and features that I should be
                        aware of when designing my container. The container needed to be picked up by the robot gripped,
                        therefore requiring a rectangular shape. The container also had to sustain steam sterilization
                        while being under 350 grams in weight. Our team was given an inventor model of the surgical tool
                        to secure and the autoclave our container needed to fit into.
                    </v-card-text>

                    <v-row class="my-auto px-5">
                        <v-img cover height="400" src="@/assets/Projects_Images/Get_A_Grip/surgical_tool.png"
                            class="mx-auto">
                        </v-img>
                        <v-img cover height="400" src="@/assets/Projects_Images/Get_A_Grip/autoclave.png"
                            class="mx-auto">
                        </v-img>
                    </v-row>

                    <v-card-text class="font-weight-light">
                        Surgical Tool and Autoclave

                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        Once a set of objectives, constraints, and functions were fully defined, I created multiple
                        prototypes while integrating each feature one at a time. These prototypes varied from
                        low-fidelity physical models to fully realized models made in Autodesk with proper dimensions.
                    </v-card-text>

                    <v-row class="my-auto px-5">
                        <v-img cover height="450" src="@/assets/Projects_Images/Get_A_Grip/physical_low_fidelity.png"
                            class="mx-auto">
                        </v-img>
                        <v-img cover height="450" src="@/assets/Projects_Images/Get_A_Grip/finalized_inventor.png"
                            class="mx-auto">
                        </v-img>
                    </v-row>

                    <v-card-text class="font-weight-light">
                        Physical Low-Fidelity Prototype and Finalized Inventor Model
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        The purpose of the indented walls on either side of my model was to increase the ease with which
                        it could be picked up. This extra feature would ensure that the transportation of the container
                        would be smooth and indicates where the gripper is supposed to grab. To secure the surgical tool
                        during transportation, I chose to add cylinders to insert into the openings of the surgical
                        tool. Lastly, to facilitate sterilization, I chose for my model to have an open-top and numerous
                        holes for the steam to enter and pass through. As my final model was finalized, I got the Gcode
                        using PrusaSlicer to print a high-fidelity physical version of the model.
                    </v-card-text>

                    <v-img cover width="500" src="@/assets/Projects_Images/Get_A_Grip/3D_printed_model.png"
                        class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        3D Printed Physical Model
                    </v-card-text>

                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Conclusion -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card title="Conclusion" class="mx-auto">

                    <v-card-text class="text-subtitle-1">
                        This project expanded my horizon on a new modeling technique using 3D printing. Since I had to
                        review and revise my model several times before creating the final version, I developed a better
                        grasp of the engineering method. I faced many challenges during this project, mainly having to
                        remake my model over a dozen times to accommodate all restrictions while thinking about
                        minimizing material usage. One example would be when generating the Gcode to print my model, the
                        maximum print time is 2 hours, and my model went over the limit by 5 minutes. To solve this
                        issue, I poured through all features of my model to see what is minimizable, and I realized the
                        height of the model could be decreased and cut the time nearly in half. Overall this assignment
                        was a valuable learning opportunity for 3D printing and simulates the trial and error process of
                        the engineering process.
                    </v-card-text>

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
                title: 'Python',
                value: 2,
            },
            {
                title: 'Microsoft Office',
                value: 3,
            },
            {
                title: 'Prusa Slicer',
                value: 4,
            },
            {
                title: 'Quanser Interactive Labs',
                value: 5,
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
        ],
    }),
}
</script>