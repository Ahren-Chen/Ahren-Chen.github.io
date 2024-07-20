<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height text-center">

      <Banner :imagePath="bannerImgPath" />

      <PageTitle :titleText="pageTitle" />

      <Skills :technical_skills_items="technical_skills_items" :soft_skills_items="soft_skills_items" />

      <v-divider></v-divider>

      <TwoColumnSummary :summaryText="summaryText" :summaryImg="summaryImgPath" />

      <v-divider></v-divider>

      <Card>
        <v-slot>

          <v-card-title>{{ designProcessTitle }}</v-card-title>

          <CardText :text="designProcessText1" />

          <v-img cover width="400" :src="TurbineBlade" class="mx-auto" />
          <FigureText :text="TurbineBladeText" />

          <CardText :text="designProcessText2" />

          <v-img cover width="400" :src="TurbineBladeDeflection" class="mx-auto" />
          <FigureText :text="TurbineBladeDeflectionText" />

        </v-slot>
      </Card>

      <Card>
        <v-slot>

          <v-card-title>{{ ConclusionTitle }}</v-card-title>

          <CardText :text="ConclusionText" />

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
import FigureText from '@/components/Subcomponents/FigureText.vue'

// data
const bannerImgPath = '/src/assets/Projects_Images/Wind_Turbine/banner.jpg'
const pageTitle = 'Renewable Energy Challenge'

const technical_skills_items = [
  'Autodesk Inventor',
  'Microsoft Office',
  'Granta Design',
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
]

const summaryText =
  `During my first year of university, I worked on a project that involved creating a 3D
  model of a wind turbine blade and simulating its performance in a wind tunnel. The
  project was part of a renewable energy challenge that was hosted by the university.

  My role in the project was to design the 3D model of the wind turbine blade using
  Autodesk Inventor and to analyze the stress and strain on the blade using Granta Design.
  I also worked on the project report and presentation, which involved using Microsoft
  Office to create the necessary documents.`
const summaryImgPath = '/src/assets/Projects_Images/Wind_Turbine/summary_photo.jpg'

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `We first created an objective tree to highlight important aspects that fit our mission
  requirements and concluded that our primary objective was to minimize mass. The is because our
  turbine should not be heavy enough to affect the structural integrity of the house. Our
  secondary goal was to reduce the cost since our target audience was the average household which
  means it needs to be affordable. After careful inspection of possible materials using a weighted
  decision matrix, we concluded that medium carbon steel was the optimal option for this
  assignment. With the material selected, we began to model our turbine blade using Autodesk
  Inventor with a set of given dimensions.`

const TurbineBlade = '/src/assets/Projects_Images/Wind_Turbine/turbine_blade.jpg'
const TurbineBladeText = 'Initial Wind Turbine Blade'

const designProcessText2 =
  `Once we had the basic shape of the blade designed, we calculated the thickness required so that
  the blade would not deform more than 10 mm. After testing deflection simulations with Inventor,
  we found that a thickness of 24.6 mm would fulfill the requirements while not wasting any
  additional material.`

const TurbineBladeDeflection = '/src/assets/Projects_Images/Wind_Turbine/turbine_blade_deflection.jpg'
const TurbineBladeDeflectionText = 'Turbine Blade Simulation'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `This project was an astonishing learning opportunity that helped me develop my communication
  skills and teamwork skills. The assignment also challenged my time management and
  problem-solving skills, which only further developed them. The soft skills learned from this
  were indispensable, and I could not have done it without my irreplaceable teammates, who gave
  their all during this project.`

</script>
