<template>
    <v-container class="fill-height">
        <v-responsive class="fill-height text-center">

            <Banner :imagePath="bannerImgPath" />

            <PageTitle :titleText="pageTitle" />

            <Skills :technical_skills_items="technical_skills_items" :soft_skills_items="soft_skills_items" />

            <v-divider></v-divider>

            <TwoColumnSummary :summaryText="summaryText" :summaryImg="summaryImgPath" :height="summary_height" />

            <v-divider></v-divider>

            <Card>
                <v-slot>

                    <v-card-title>{{ designProcessTitle }}</v-card-title>

                    <CardText :text="designProcessText1" />

                    <v-img cover width="500" :src="Mesh" class="mx-auto" />
                    <FigureText :text="MeshText" />

                    <CardText :text="designProcessText2" />

                    <TwoColumnImage :imageOne="Rivers" :imageTwo="Precipitation" :textOne="RiversText"
                        :textTwo="PrecipitationText" />

                    <CardText :text="designProcessText3" />

                    <v-img cover width="500" :src="Urbanization" class="mx-auto" />
                    <FigureText :text="UrbanizationText" />

                </v-slot>
            </Card>

            <Card>
                <v-slot>

                    <v-card-title>{{ ConclusionTitle }}</v-card-title>

                    <CardText :text="ConclusionText" />

                    <v-row class="pb-4 px-3 align-center justify-center">
                        <v-col>
                            <SocialMediaButtons :link="GitHubLink" icon="mdi-github" title="GitHub" :color="color" />
                        </v-col>
                    </v-row>

                </v-slot>
            </Card>
        </v-responsive>
    </v-container>
</template>

<script setup>

// import components
import Banner from '@/components/Banner.vue'
import PageTitle from '@/components/PageTitle.vue'
import Skills from '@/components/Skills.vue'
import TwoColumnSummary from '@/components/TwoColumnSummary.vue'
import Card from '@/components/Card.vue'
import CardText from '@/components/CardText.vue'
import TwoColumnImage from '@/components/TwoColumnImage.vue'
import FigureText from '@/components/Subcomponents/FigureText.vue'
import SocialMediaButtons from '@/components/Subcomponents/SocialMediaButtons.vue'

// data
const bannerImgPath = '/src/assets/Projects_Images/Mesh_Generator/banner.avif'
const pageTitle = 'Mesh Generator'

const technical_skills_items = [
    'Java',
    'Bash Scripting',
    'Maven',
    'Log4j',
]
const soft_skills_items = [
    'Teamwork',
    'Communication',
    'Time Management',
    'Problem Solving',
    'Perseverance'
]

const summaryText =
    `This project was the first ever self directed major project that I had worked on since starting university.
    The project goal was to use what we had learned with Object Oriented Programming in Java and use it to create a
    2D mesh generator. The project was split into 3 components: the mesh details generator, the mesh viewer, and
    the actual mesh polygon generator. The mesh polygon generator was the first component that I had to work on and
    it was all about independently creating a randomized mesh of polygons based on the user's input. Next came the mesh
    viewer which was all about displaying the mesh that was generated. Finally, the mesh details generator was all about
    adding on physical properties to the polygons that were generated. This included things like altitude, temperature,
    biomes, rivers, cities, roads, lakes, aquifers, and more.`
const summaryImgPath = '/src/assets/Projects_Images/Mesh_Generator/summary.png'
const summary_height = 500

const designProcessTitle = 'Design Process'
const designProcessText1 =
    `The project details weren't given to us initally, everyone had thought that creating a mesh polygon generator
    was all we had to do. With that in mind, there wasn't much thought when it came to creating something that was
    sustainable and scalable. When the announcement was made that we had to add details onto the generated mesh, it
    was a mad scramble to refactor the code to make it work. The mesh viewer was the easiest part of the project as
    it was all about taking a mesh and displaying it. The project description and requirements were vague and it was
    purposefully done to see how we would handle the situation. The professor wanted to mimic a real world scenario
    where we were working with a client who didn't know exactly what they wanted from the get go.`

const Mesh = '/src/assets/Projects_Images/Mesh_Generator/mesh.png'
const MeshText = 'Generated Mesh Polygon Example'

const designProcessText2 =
    `Despite all the initial challenges that I faced, I was able to successfully create something that I thought
    was what the professor was looking for. For the next phase of the project, everyone had to form a group of 3
    and work on adding details to the output file that the mesh polygon generator created. The mesh details generator
    would take in the output file and add on physical properties to the polygons based on user input. Details included,
    island shapes, soils, elevation, biomes, rivers, lakes, aquifers, and viewing modes (such as heat map, precipitation,
    and elevation). The mesh details generator was the most challenging part of the project as it was all about working
    together with a group to create something that was cohesive and achievable within the time frame given.`

const Rivers = '/src/assets/Projects_Images/Mesh_Generator/rivers.png'
const RiversText = 'Map With Rivers Example'
const Precipitation = '/src/assets/Projects_Images/Mesh_Generator/precipitation.png'
const PrecipitationText = 'Precipitation View Example'

const designProcessText3 =
    `For the final phase of the project, we went back to working individually to create cities and roads based 
    not only on the user input and shortest path, but also on the physical properties of the mesh. The cities and
    roads need to be reasonable in the sense that a road can't be built on a mountain or in the middle of a lake.
    This added one more layer of complexity to the project since I had to take into account how certain 
    user input and randomization combinations would make some cities and roads impossible to build.`

const Urbanization = '/src/assets/Projects_Images/Mesh_Generator/urbanization.png'
const UrbanizationText = 'Final Example: Urbanization'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
    `This project was a great learning experience for me as it was the first time that I had the opportunity to
    apply what I had learned in class to a larger scale project. The project was challenging and required a lot of
    time and effort to complete. Through trial and error, I was able to learn how to effectively implement Object
    Oriented Programming on a practical level. Through working with others, I was able to effectively resolve
    conflicts and express my ideas in a way that was understandable to others. Overall, this was an enjoyable
    course that I had the pleasure of working on and I look forward to working on more projects like this in the
    future.`

const GitHubLink = 'https://github.com/Ahren-Chen/MeshGenerator'
const color = 'secondary'
</script>