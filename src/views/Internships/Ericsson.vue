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
  const pageTitle = 'Ericsson Indoor Planner'
  
  const technical_skills_items = [
    'C# .NET',
    'Microsoft Azure',
    'Azure Function Apps',
    'SQL Server',
    'Java',
    'Bash Scripting',
  ]
  const soft_skills_items = [
    'Teamwork',
    'Communication',
    'Time Management',
    'Problem Solving',
    'Initiative',
  ]
  
  const summaryText =
    `After my third year of university, I was given the opportunity to work at Ericsson as a Software
    Developer Intern for 16 months. I was part of the Indoor Planner team, which was responsible for
    developing a tool that would allow users to plan and optimize the layout of their indoor
    networks based on radio configurations, placements, operators, etc. My role was to develop new 
    features and maintain the existing codebase. THIS SECTION IS NOT COMPLETE. STILL PART
    OF THE INTERNSHIP SO I WILL ADD MORE INFORMATION ONCE I HAVE COMPLETED IT.`
  const summaryImgPath = '/src/assets/Projects_Images/Wind_Turbine/summary_photo.jpg'
  
  const designProcessTitle = 'What I learned'
  const designProcessText1 =
    `NOT COMPLETE`
  
  const ConclusionTitle = 'Conclusion'
  const ConclusionText =
    `NOT DONE`
  
  </script>
  