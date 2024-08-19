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

          <v-img cover width="800" :src="landingPage" class="mx-auto" />
          <FigureText :text="landingPageText" />

          <CardText :text="designProcessText2" />

          <v-img cover width="800" :src="searchResults" class="mx-auto" />
          <FigureText :text="searchResultsText" />

          <CardText :text="designProcessText3" />

          <v-img cover width="500" :src="PrintedModel" class="mx-auto" />
          <FigureText :text="PrintedModelText" />

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
import SocialMediaButtons from '@/components/Subcomponents/SocialMediaButtons.vue'
import FigureText from '@/components/Subcomponents/FigureText.vue'

// data
const bannerImgPath = new URL('@/assets/Projects_Images/Hackathon_Of_Change/banner.avif', import.meta.url).href;
const pageTitle = 'DeltaHacks9: Hackathon Of Change'

const technical_skills_items = [
  'React',
  'Python',
  'HTML/CSS',
  'Figma',
  'Django'
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
  'Adaptability'
]

const summaryText =
  `The hackathon topic that our team of 4 chose was to create a platform that would allow users to
    support local businesses during the pandemic. We decided to create an app/website that would enable users to
    search specifically for local businesses in their area and allow filtering by food, location, and prices.
    I had the opportunity to work on the back-end of the project, where I used Django to create the database and
    the API that would be used by the front-end.`
const summaryImgPath = new URL('@/assets/Projects_Images/Hackathon_Of_Change/search_page.png', import.meta.url).href;

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `Deltahacks is a 48-hour hackathon hosted by McMaster University where teams of 4 come together to create a project
    with a variety of topics to choose from. After discussing the different topics, our team decided that we wanted to
    do something to help support local businesses that were struggling with the effects of the pandemic. Since it was
    our first time working together, we decided to split the work into front-end, back-end, and design. I was excited to
    work on the back-end of the project, where I learned how to use Django and work with calling external APIs for the first time.`

const landingPage = new URL('@/assets/Projects_Images/Hackathon_Of_Change/landing_page.png', import.meta.url).href;
const landingPageText = 'Landing Page'

const designProcessText2 =
  `Since we didn't have a lot of time to work on the project, we decided to keep the design simple and focus on the
    functionality of the app. We wanted to make sure that users could easily search for local businesses in their area
    through a search bar and use Google Maps API to show the physical locations. We also wanted to figure out a way to show
    only local businesses and filter by food type, location, and prices. With this in mind, we chose an MVP structure and 
    hard coded some chain resturants to filter out of search results which could be improved in the future.`

const searchResults = new URL('@/assets/Projects_Images/Hackathon_Of_Change/search_results.png', import.meta.url).href;
const searchResultsText = 'Search Results Example'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `Although we didn't win the hackathon, I was proud of what our team was able to accomplish in such a short amount of time.
    Especially considering that everyone chose a new technology to work with, we were able to create a functional app that
    can serve as a foundation for future improvements. We came into the hackathon with the intention of learning
    and having fun, and I can confidently say that we achieved both of those goals.`

const GitHubLink = 'https://github.com/Ahren-Chen/DeltaHacks9'
const color = 'red'

</script>