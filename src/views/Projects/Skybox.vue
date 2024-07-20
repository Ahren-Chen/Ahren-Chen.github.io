<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height text-center">

      <Banner :imagePath="bannerImgPath" />

      <PageTitle :titleText="pageTitle" />

      <Skills :technical_skills_items="technical_skills_items" :soft_skills_items="soft_skills_items" />

      <v-divider></v-divider>

      <TwoColumnSummary :summaryText="summaryText" :summaryImg="summaryImgPath" :height="height" />

      <v-divider></v-divider>

      <Card>
        <v-slot>

          <v-card-title>{{ designProcessTitle }}</v-card-title>

          <CardText :text="designProcessText1" />

          <CardText :text="designProcessText2" />

          <v-img cover width="500" :src="LoadedSample" class="mx-auto" />
          <FigureText :text="LoadedSampleText" />

          <CardText :text="designProcessText3" />

        </v-slot>
      </Card>

      <Card>
        <v-slot>

          <v-card-title>{{ FeaturesTitle }}</v-card-title>

          <CardText :text="ConclusionText" />

          <v-list lines="two" :items="Features" class="mx-auto text-bold" color="#81D4FA" />

          <v-row class="pb-4 px-3 align-center justify-center">
            
            <v-col>
              <SocialMediaButtons :link="GitHubLink" icon="mdi-github" title="GitHub" :color="color" />
            </v-col>

            <v-col>
              <SocialMediaButtons :link="DevpostLink" icon="mdi-devpost" title="Devpost" :color="color" />
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
import FigureText from '@/components/Subcomponents/FigureText.vue'
import SocialMediaButtons from '@/components/Subcomponents/SocialMediaButtons.vue'

// data
const bannerImgPath = '/src/assets/Projects_Images/Skybox/banner.avif'
const pageTitle = 'Skybox'

const technical_skills_items = [
  'Python',
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
  'Creativity'
]

const summaryText =
  `Our hackathon team for "To the moon and hack" by major league hacking chose to create a 3D star
  system simulator. The game works in a sandbox style where you can place down stars/planets and
  give them qualities such as velocity, mass, gravity constant, and radius. After entering all the
  desired entities, you can choose which planets/stars can move as well as delete unwanted ones.
  Once you press the play button, the physics engine will start to simulate the passage of time in
  this universe and what would happen with these conditions. You can also rotate and move the
  camera to better observe the simulated environment from different angles.`
const summaryImgPath = '/src/assets/Projects_Images/Skybox/summary.png'
const height = 365

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `Our team of 4 had 48 hours to create something of our choice using any programming language as
  long as the theme of "space" was respected. In this regard, we ultimately chose to create a
  sandbox game using python that heavily relied on physics since it was a shared interest of us
  all. This was my first hackathon experience, but I had already been comfortable with python for
  years and was confident enough to create something with my friends.`

const designProcessText2 =
  `For this project, I mainly focused on the front-end to back-end connection between the buttons,
  images, and textboxes to receive inputs/outputs. Since it was a small group, we were each aware
  of everyone's roles and positions keenly but worked together when difficulties appeared, so I am
  also familiar with the structure of all the back-end functions.`

const LoadedSample = '/src/assets/Projects_Images/Skybox/fully_loaded.png'
const LoadedSampleText = 'Automatically Loaded Sample'

const designProcessText3 =
  `The most challenging aspect of this hackathon for me was working with others for an extended
  period. Each member of the group trusted the others to fully complete their portion of the work
  without error and asked for help if they got stuck. This structure worked amazingly, but the
  challenging part for me was reading and understanding others' code who had different habits than
  mine when trying to help them with their unknown error. I overcame this slowly over two days,
  and I learned what it means to work in a small group and gained valuable experience
  working/learning under a tight time constraints.`

const FeaturesTitle = 'Currently Available Features'
const Features = [
  'Able to create a new star or planet by filling out oll the text boxes other than gravity constant, click on either the star or planet icon, and hitting confirm',
  'To change the gravity constant, type in your desired gravity constant and hit apply',
  'Click on a planet/star to select it, when selected, the entity will show a colored dot at the center',
  'Use the trash can button to delete a selected entity, or the movable button to lock it in place',
  'You may save the current star system by clicking save, or click load to load your saved star system',
  'A demo star system has been pre loaded and can be accessed by pressing load',
  'The mini map can be used to determin the direction you are facing and where objects in your star system are',
  'The PAUSE and PLAY button can be used to enable the physics of the the system to unfold',
  'The eye icon can be clicked to reset your perspective',
  'Note: The gravity constant has been pre-set to 0.0004'
]

const GitHubLink = 'https://github.com/Ahren-Chen/SkyBox'
const DevpostLink = 'https://devpost.com/software/skybox-3ebh5z'
const color = '#385F73'
</script>
