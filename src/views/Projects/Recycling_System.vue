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

          <v-img cover width="800" :src="bottle_properties" class="mx-auto" />
          <FigureText :text="bottle_propertiesText" />

          <CardText :text="designProcessText2" />

          <v-img cover width="800" :src="qBot_unloading" class="mx-auto" />
          <FigureText :text="qBot_unloading_text" />

          <CardText :text="designProcessText3" />

          <v-img cover width="800" :src="loading_bottle" class="mx-auto" />
          <FigureText :text="loading_bottleText" />

        </v-slot>
      </Card>

      <Card>
        <v-slot>

          <v-card-title>{{ ConclusionTitle }}</v-card-title>

          <CardText :text="ConclusionText" />

          <v-btn class="mx-auto mb-5" color="primary" href="Thurs-12_P3_Python_Program.py" download outlined>
            View Code
          </v-btn>

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
const bannerImgPath = '/src/assets/Projects_Images/Recycling_System/banner.jfif'
const pageTitle = 'Revenge of the Recycling System'

const technical_skills_items = [
  'Python',
  'VNC Viewer',
  'Microsoft Office',
  'Quanser Interactive Labs'
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
  'Leadership'
]

const summaryText =
  `Our team was given the task of designing a system to sort and recycle bottles into their
  respective bins to mimic the methods of sorting facilities. Our task included designing a
  computer program to sort and transport the bottles as well as a mechanism to unload the bottles
  into the bin. To ensure maximum effectiveness, the team split into two teams; one was
  responsible for creating the mechanism and unloading the bottles off of the q-bot, and the other
  was responsible for writing the computer code to sort, transfer, and dispose of the bottles
  using the q-bot and q-arm in an endless loop. I was on the computing sub-team and my objectives
  included writing an efficient, clear, and never-ending loop to transfer the correct bottles from
  the sorting station to the correct bins and disposing of the bottles.`
const summaryImgPath = '/src/assets/Projects_Images/Recycling_System/starting_virtual_environment.png'
const height = '310'

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `As part of the computing sub-team, I was responsible for designing a process to dispense the
  bottles onto the sorting station, transferring the bottles onto the q-bot, transferring the
  q-bot to the correct bin, signaling when to unload the bottles from the q-bot, and bringing the
  q-bot back to its starting position. Each of these functions should work together without error
  contiously so long as the program runs. The constraints for this process included: there can be
  no more than three bottles on the q-bot at any given time and the mass of the bottles on the
  q-bot cannot exceed 90 grams. With these objectives and constraints in mind, I started to work
  on the pseudocode to establish a clear plan of action.`

const bottle_properties = '/src/assets/Projects_Images/Recycling_System/bottle_properties.png'
const bottle_propertiesText = 'Table of all Bottle Properties'

const designProcessText2 =
  `We had the option of choosing a maximum of two out of four possible sensors on the q-bot to
  distinguish the bins, and we chose the color sensor and the ultrasonic sensor. By configuring
  each bin to a different color, the color sensor was able to identify when the q-bot was near the
  correct bin. The ultrasonic sensor would indicate how far the q-bot was from the bin, and this
  would determine when the q-bot chooses to unload the bottles.`

const qBot_unloading = '/src/assets/Projects_Images/Recycling_System/Q-bot_unloading.png'
const qBot_unloading_text = 'Q-bot Unloading the Bottles'

const designProcessText3 =
  `The most challenging portion of this assignment was due to the inaccuracy of the sensors and the
  q-bot commands. I had assumed that every command I made to the q-bot would be perfectly
  replicated when I began coding. I quickly found out that the inputs I gave the q-bot, such as
  rotating three degrees counterclockwise, were not precisely replicated at exactly 3 degrees.
  This incorrect assumption made my idea of adjusting the final orientation of the bot at the end
  based on how far it was from 360 degrees to be invalid. After weeks of revision and adjustments
  to the code, the method that yielded the most reliable results was to move and rotate the bot in
  small increments to constantly adjust itself while following the line.`

const loading_bottle = '/src/assets/Projects_Images/Recycling_System/loading_bottle.png'
const loading_bottleText = 'Loading a Bottle onto the Q-bot'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `This project was an eye-opener in terms of applying programming to a physical environment. It
  helped me realize that a perfectly simulated environment does not mimic the physical world and
  that previously valid solutions may not be applicable in the real world. This was also the first
  time I collaborated with someone when programming, and it helped develop my communication skills
  and teamwork. This assignment was an incredible learning opportunity as I was exposed to new
  skills that will be valuable in the future. I have also attached the code I created below.`

</script>
