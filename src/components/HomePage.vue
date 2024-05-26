<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">
            <h1 class="py-10 text-h3 font-weight-bold bg-light-blue-lighten-4">Personal Projects</h1>

            <v-row class="py-5 px-6 mb-2 d-flex align-center justify-center bg-light-blue-lighten-2">
                <!-- Project 1 -->
                <v-col cols="4">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="mx-auto"
                        href="/projects/wind_turbine"
                        min-height="350"
                        image="@/assets/Projects_Images/Wind_Turbine/Wind_Turbine.jpg"
                        color="secondary">

                        <v-card-title class="text-h3 py-5 font-weight-bold">Wind Turbine</v-card-title>
                        <v-card-text class="text-h5 py-5 font-weight-light">A 3D wind turbine blade model and simulation project that I worked on in my first year of university.</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="mx-auto"
                        href="/projects/get_a_grip"
                        min-height="350"
                        image="@/assets/Projects_Images/Get_A_Grip/Get_A_Grip.jpg"
                        color="primary">

                        <v-card-title class="text-h3 py-5 font-weight-bold">Get A Grip</v-card-title>
                        <v-card-text class="text-h5 py-5 font-weight-light">A medical sterilization process that I worked on in my first year of university.</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="mx-auto"
                        href="/projects/recycling_system"
                        min-height="350"
                        image="@/assets/Projects_Images/Recycling_System/revenge_recycling_system.png"
                        color="primary">

                        <!-- The title is filled in by the image-->
                        <v-card-title class="text-h3 py-5 font-weight-bold"></v-card-title>
                        <v-card-text class="text-h5 py-14 font-weight-light">A 3D wind turbine blade model and simulation project that I worked on in my first year of university.</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>