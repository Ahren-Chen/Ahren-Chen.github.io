<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height text-center">

      <PageTitle :titleText="pageTitle" />

      <HomePageRow>

        <HomePageCard
          v-for="project in projects"
          :key="project.title"
          :link="project.link"
          :image="project.image"
          :color="project.color"
          :title="project.title"
          :text="project.text" />

      </HomePageRow>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import PageTitle from '@/components/PageTitle.vue';
  import HomePageRow from '@/components/HomePageRow.vue';
  import HomePageCard from '@/components/HomePageCard.vue';

  const pageTitle = 'Personal Projects';

  const projects = [
    {
      title: 'Wind Turbine',
      text: 'A 3D wind turbine blade model and simulation project that I worked on in my first year of university.',
      image: '/src/assets/Projects_Images/Wind_Turbine/Wind_Turbine.jpg',
      color: 'secondary',
      link: '/projects/wind_turbine'
    },
    {
      title: 'Get A Grip',
      text: 'A medical sterilization process that I worked on in my first year of university.',
      image: '/src/assets/Projects_Images/Get_A_Grip/Get_A_Grip.jpg',
      color: 'primary',
      link: '/projects/get_a_grip'
    },
    {
      // The title is filled in by the image
      title: '',
      text: 'A 3D wind turbine blade model and simulation project that I worked on in my first year of university.',
      image: '/src/assets/Projects_Images/Recycling_System/revenge_recycling_system.png',
      color: 'primary',
      link: '/projects/recycling_system'
    },
    {
      title: 'Power in the Community',
      text: 'A real client driven project with the focus on improving quality of life that I worked on in my first year of university.',
      image: '/src/assets/Projects_Images/Power_In_Community/Power_In_Community.avif',
      color: 'primary',
      link: '/projects/community'
    },
    {
      title: 'Skybox',
      text: 'To the Moon and Hack! Hackathon project.',
      image: '/src/assets/Projects_Images/Skybox/skybox.png',
      color: 'primary',
      link: '/projects/skybox'
    },
    {
      title: 'T.U.B',
      text: 'A Club Management app created for a hackathon.',
      image: '/src/assets/Projects_Images/Tub/tub.png',
      color: 'primary',
      link: '/projects/tub'
    },
    {
      title: 'Hackathon of Change',
      text: 'A app developed to support local businesses following the pandemic.',
      image: '/src/assets/Projects_Images/Tub/tub.png',
      color: 'primary',
      link: '/projects/tub'
    },
    {
      title: 'Mesh Generator',
      text: 'A 3 component randomized mesh generator that produces a realistic 2D island environment.',
      image: '/src/assets/Projects_Images/Tub/tub.png',
      color: 'primary',
      link: '/projects/tub'
    },
    {
      title: 'Secure Chat Application',
      text: 'An Android chat application that real time secure communication for company use.',
      image: '/src/assets/Projects_Images/Tub/tub.png',
      color: 'primary',
      link: '/projects/tub'
    }
  ];
</script>
