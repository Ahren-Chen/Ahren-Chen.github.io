<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <!-- Banner Image -->
            <v-row class="py-5 px-0 d-flex align-center justify-center">
                <v-col>
                    <v-img
                        cover
                        height="300"
                        src="@/assets/Projects_Images/Wind_Turbine/banner.jpg">
                    </v-img>
                </v-col>
            </v-row>

            <!-- Title -->
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Renewable Energy Challenge</h1>

            <!-- Technical and Soft Skills -->
            <v-row class="py-5 px-5 d-flex justify-center bg-light-blue-lighten-5">
                <v-col>
                    <v-card
                        title="Applicable Technical Skills"
                        >

                        <v-list lines="two" :items="technical_skills_items" class="mx-auto" color="#81D4FA">

                        </v-list>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card
                        title="Applicable Soft Skills"
                        >

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
                    <v-card
                        title="Project Description"
                        >

                        <v-card-text class="text-subtitle-1">
                            <p>During my first year of university, I worked on a project that involved creating a 3D model of a wind turbine blade and simulating its performance in a wind tunnel. The project was part of a renewable energy challenge that was hosted by the university.</p>

                            <p>My role in the project was to design the 3D model of the wind turbine blade using Autodesk Inventor and to analyze the stress and strain on the blade using Granta Design. I also worked on the project report and presentation, which involved using Microsoft Office to create the necessary documents.</p>
                        </v-card-text>
                    </v-card>

                </v-col>

                <!-- Photo -->
                <v-col>
                    <v-img
                        cover
                        height="400"
                        src="@/assets/Projects_Images/Wind_Turbine/summary_photo.jpg">
                    </v-img>

                </v-col>
            </v-row>

            <v-divider></v-divider>

            <!-- Design Process -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card
                    title="Design Process"
                    class="mx-auto"
                    >

                    <v-card-text class="text-subtitle-1">
                        We first created an objective tree to highlight important aspects that fit our mission requirements and concluded that our primary objective was to minimize mass. The is because our turbine should not be heavy enough to affect the structural integrity of the house. Our secondary goal was to reduce the cost since our target audience was the average household which means it needs to be affordable. After careful inspection of possible materials using a weighted decision matrix, we concluded that medium carbon steel was the optimal option for this assignment. With the material selected, we began to model our turbine blade using Autodesk Inventor with a set of given dimensions.
                    </v-card-text>

                    <v-img
                        cover
                        width="400"
                        src="@/assets/Projects_Images/Wind_Turbine/turbine_blade.jpg"
                        class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Initial Wind Turbine Blade
                    </v-card-text>

                    <v-card-text class="text-subtitle-1">
                        Once we had the basic shape of the blade designed, we calculated the thickness required so that the blade would not deform more than 10 mm. After testing deflection simulations with Inventor, we found that a thickness of 24.6 mm would fulfill the requirements while not wasting any additional material.
                    </v-card-text>

                    <v-img
                        cover
                        width="400"
                        src="@/assets/Projects_Images/Wind_Turbine/turbine_blade_deflection.jpg"
                        class="mx-auto">
                    </v-img>

                    <v-card-text class="font-weight-light">
                        Turbine Blade Simulation
                    </v-card-text>
                
                </v-card>
            </v-row>

            <v-divider></v-divider>

            <!-- Conclusion -->
            <v-row class="py-5 px-5 d-flex align-center justify-center bg-light-blue-lighten-5">
                <v-card
                    title="Conclusion"
                    class="mx-auto"
                    >

                    <v-card-text class="text-subtitle-1">
                        This project was an astonishing learning opportunity that helped me develop my communication skills and teamwork skills. The assignment also challenged my time management and problem-solving skills, which only further developed them. The soft skills learned from this were indispensable, and I could not have done it without my irreplaceable teammates, who gave their all during this project.
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
          title: 'Granta Design',
          value: 2,
        },
        {
          title: 'Microsoft Office',
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
      ],
    }),
  }
</script>