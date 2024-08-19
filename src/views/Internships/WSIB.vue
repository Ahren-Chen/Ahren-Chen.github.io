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
  
            <v-card-title>{{ bodyTitle }}</v-card-title>
  
            <CardText :text="bodyText1" />
  
            <CardText :text="bodyText2" />
  
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
  
  // data
  const bannerImgPath = '/src/assets/Internships_Images/WSIB/banner.png'
  const pageTitle = 'Workplace Safety and Insurance Board (WSIB)'
  
  const technical_skills_items = [
    'Microsoft Office',
    'Data Analysis',
    'Data Visualization',
  ]
  const soft_skills_items = [
    'Teamwork',
    'Communication',
    'Time Management',
    'Problem Solving',
    "Research",
  ]
  
  const summaryText =
    `During the summer of 2023, I had the opportunity to work at the Workplace Safety and Insurance Board (WSIB) 
    as an Operations Vendor Management Intern. I was part of a small team that was responsible for all vendor
    contracts and ensuring that all vendors were compliant with the WSIB's policies and procedures. This included
    reviewing vendor application questionnaires, conducting background checks, and ensuring that all vendors had
    the necessary skills and qualifications to perform the work required. I also had the opportunity to organize
    meetings with stakeholders to discuss vendor performance and to identify areas for improvement. 
    `
  const summaryImgPath = '/src/assets/Internships_Images/WSIB/summary.jpg'
  
  const bodyTitle = 'What I learned'
  const bodyText1 =
    `The operations vendor management team at WSIB was responsible for managing 20+ contracts with different
    vendors as well as reaching out to new areas to expand coverage. As part of my short 4 month internship, I
    was able to learn the business sides of things which was an incredible experience considering how up until
    that point, my major mainly focused on software engineering and the purely technical aspects. I learned from
    the ground up, how the process of deciding on a new contract in a new area works, and how the requirements 
    are set depending on the stakeholders involved.`
  
  const bodyText2 =
    `I was also able to glimpse into the world of data analysis and was tasked with creating tools that would
    automate the process of reviewing vendor spending to identify any discrepanacies and alert the team for
    any unusual spending. This was a great opportunity to learn about data visualization and how to present
    reports to management in a way that was easy to understand, helpful, and with the appropriate research
    and analysis to back it up. Another small project I worked on was to create a knowledge sharing form
    on Micosoft Excel that would function as a database for the team to search adn review documents based
    on contracts, case numbers, and other relevant information.`
  
  const ConclusionTitle = 'Conclusion'
  const ConclusionText =
    `This internship was an amazing experience and I am thankful to have had the opportunity to work with such
    a great team. I learned a lot about the business side of things and how important it is to have good communication
    skills in any organization. I was able to apply my technical skills in a new way and learned a lot about how to
    manipulate data to create useful tools for the team. I am grateful for the opportunity to have worked at WSIB
    and I look forward to applying what I have learned in my future career.`
  
  </script>
  