<template>
    <v-container class="fill-height">
      <v-responsive class="fill-height text-center">
  
        <PageTitle :titleText="pageTitle" />
  
        <HomePageRow>
  
          <HomePageCard v-for="project in projects" :key="project.title" :link="project.link" :image="project.image"
            :color="project.color" :title="project.title" :text="project.text" />
  
        </HomePageRow>
      </v-responsive>
    </v-container>
  </template>
  
  <script setup>
  import PageTitle from '@/components/PageTitle.vue';
  import HomePageRow from '@/components/HomePageRow.vue';
  import HomePageCard from '@/components/HomePageCard.vue';
  
  const pageTitle = 'Internships';
  
  const projects = [
    {
      title: 'Ericsson',
      text: 'Software Developer Internship (16 months) (NOT COMPLETED)',
      image: '/src/assets/Internships_Images/Ericsson/Ericsson.png',
      color: 'primary',
      link: '/internships/ericsson'
    },
    {
      title: 'WSIB',
      text: 'Operations Vendor Management Internship (4 months)',
      image: '/src/assets/Internships_Images/WSIB/WSIB.png',
      color: 'primary',
      link: '/internships/wsib'
    },
    {
      title: 'YRDSB',
      text: 'IT Technical Support Internship (4 months)',
      image: '/src/assets/Internships_Images/YRDSB/IT.png',
      color: 'primary',
      link: '/internships/yrdsb'
    },
  ];
  </script>
  