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

          <TwoColumnImage :imageOne="LogIn" :imageTwo="SignUp" :textOne="LogInText" :textTwo="SignUpText" />

          <CardText :text="designProcessText2" />

          <TwoColumnImage :imageOne="AvailableClubs" :imageTwo="ClubCreation" :textOne="AvailableClubsText"
            :textTwo="ClubCreationText" />

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
import SocialMediaButtons from '@/components/Subcomponents/SocialMediaButtons.vue'

// data
const bannerImgPath = new URL('@/assets/Projects_Images/Tub/banner.avif', import.meta.url).href;
const pageTitle = 'Hackathon: TUB'

const technical_skills_items = [
  'Python: Kivy',
  'Python',
  'MySQL',
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
  'Creativity',
]

const summaryText =
  `Our hackathon team decided to create a club management program in 48 hours to make signing up
  for clubs and creating/managing them easier for students and staff. The program is made of
  python as the back-end with python kivy to create the front-end and MySQL as the database to
  store all account/club information. The program consists of a log-in/sign-up feature, a
  biography edit, password changes, joining clubs, club creation, viewing currently joined clubs,
  and a search/scroll section for clubs. There were many more features planned, but we were unable
  to implement them within the limited time we had, such as admin privileges for certain users and
  announcement pages for each club.`
const summaryImgPath = new URL('@/assets/Projects_Images/Tub/summary.png', import.meta.url).href;

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `For this project, we decided to create something that may be practical and noticed that most
  schools never had an app/program to keep track of all school-sanctioned clubs, and we thought it
  would be useful to create one for convenience. This was also the first time we incorporated
  MySQL into our projects, and with that came challenges such as preventing SQL injections. During
  this time, we each needed to understand the logic of each other's code to properly use and
  prevent bugs from occurring, which means that I was able to obtain a working understanding of
  MySQL during this project.`

const LogIn = new URL('@/assets/Projects_Images/Tub/log_in.png', import.meta.url).href;
const SignUp = new URL('@/assets/Projects_Images/Tub/sign_up.png', import.meta.url).href;
const LogInText = 'Log-In Page'
const SignUpText = 'Sign-Up Page'

const designProcessText2 =
  `I wanted to try learning something new this hackathon, so I took it upon myself to learn Kivy,
  an extremely useful tool to create a front-end without using pygame. I was responsible for
  creating all the visuals, buttons, text boxes, scroll bars, and transitions. As this was my
  first time using Kivy, I learned it during the 48 hours, and this was truly a worthwhile
  learning experience for problem-solving as there was no guidance other than google and
  StackOverflow for any issues I encountered.`

const AvailableClubs = new URL('@/assets/Projects_Images/Tub/available_club.png', import.meta.url).href;
const ClubCreation = new URL('@/assets/Projects_Images/Tub/club_creation.png', import.meta.url).href;
const AvailableClubsText = 'Available Clubs Page'
const ClubCreationText = 'Club Creation Page'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `The most challenging aspect of this hackathon for me was learning an entirely different language
  in a tight time constraint while also being able to provide help to my other teammates in
  creating/implementing ideas. The difference in this project was that I was almost fully
  responsible for the front-end, so I knew to critique ideas based on an estimate of feasibility
  and time needed, as well as give alternative solutions. It allowed for more established
  communication than in previous projects and ultimately lead to a more productive working
  structure.`

const GitHubLink = 'https://github.com/Ahren-Chen/SkyBox'
const color = '#385F73'
</script>
