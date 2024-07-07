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

          <TwoColumnImage :imageOne="InventorModel" :imageTwo="Multiview" :textOne="InventorModelText"
            :textTwo="MultiviewText" />

          <CardText :text="designProcessText2" />

          <v-img cover width="500" :src="Prototype" class="mx-auto" />
          <FigureText :text="PrototypeText" />

          <CardText :text="designProcessText3" />

        </v-slot>
      </Card>

      <Card>
        <v-slot>
            
            <v-card-title>{{ ConclusionTitle }}</v-card-title>
  
            <CardText :text="ConclusionText" />

            <iframe width="882" height="535" src="https://www.youtube.com/embed/tX62yW6jxWg">
            </iframe>
          
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

// data
const bannerImgPath = '/src/assets/Projects_Images/Power_In_Community/community_banner.jfif'
const pageTitle = 'Power In The Community'

const technical_skills_items = [
  'Autodesk Inventor',
  'Microsoft Office',
  'Prusa Slicer',
  'Prototyping'
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving',
  'Creativity'
]

const summaryText =
  `Our client James allowed us to create a design that would improve an aspect of his daily
                        life. James is diagnosed with Ehlers-Danlos Syndrome, which affects his ability to perform
                        lateral movements and causes him significant strain when forced to reach/apply pressure onto
                        his joints. Using our experience up until now, we were given freedom on what design and
                        aspect of his life we would target by going through the engineering design process. We
                        created our functions, objectives, and constraints and were in charge of prototyping and
                        delivering a final product in pitch presentation format. One of the difficulties that James
                        faces is his struggle to play board games with his son for extended periods without injury.
                        We decided to address this issue and ultimately designed a multifunctional board game
                        device: Gamehub. Gamehub allows him to manipulate/move game pieces and roll dice without
                        having to reach for them.`
const summaryImgPath = '/src/assets/Projects_Images/Power_In_Community/gamehub.png'

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `We first decided on the primary aspect of James's life that we were going to improve and settled
                        on board games since they aligned with our interests and everyone's had experiences with a
                        variety of board games. I brought up the prompt of whether we should focus on allowing James to
                        play a specific family of a board game or focus on generalizing the approach and extending it to
                        commonly used board game pieces instead; we decided on the latter. With these critical decisions
                        made, we developed a set of objectives and functions for our mechanism. The functions that we
                        settled on were: the mechanism must be able to roll dice for the user with minimal involvement,
                        accept user input, and be able to hold/transfer game pieces. The objectives that we chose
                        included: it must be lightweight, portable, cheap, compact, and comfortable to use. With the
                        conclusion of our initial discussions, we each set off to develop sketches/inventor models of
                        our ideas.`

const InventorModel = '/src/assets/Projects_Images/Power_In_Community/community_inventor.png'
const Multiview = '/src/assets/Projects_Images/Power_In_Community/community_multiview.png'
const InventorModelText = 'Inventor Model'
const MultiviewText = 'Multiview Sketch of Dice Roller'

const designProcessText2 =
  `The aspect I focused on was how to let James roll dice while using minimal movement. My solution
                        consisted of a pinball-inspired design where James would drop the dice from the top, and they
                        would bounce on the pegs as it gradually descends. Although this design was the initial
                        prototype, it fulfilled the objectives set out for the dice roller, and our team created our
                        physical prototypes after selecting the best design for each component.`

const Prototype = '/src/assets/Projects_Images/Power_In_Community/prototype.png'
const PrototypeText = 'Low-Fidelity Prototype'

const designProcessText3 =
  `After multiple iterations, we modified our final design to include a card slider to move cards
                        between players, a dice roller, and a game piece mover that can be remotely controlled to adjust
                        the position of different pieces on the game board and even act as a game piece itself (Figure
                        1). We chose to 3D print the dice roller to ensure quality and a custom-made design, and we also
                        chose to order a Hexbug online to act as the game piece mover but adjusted the controller to
                        better accommodate James's needs. We chose a light, low friction plastic for the card slider to
                        reduce the force needed to transfer the cards.`

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `This was my first project that involved a real client and the freedom to decide what we built
                        with our objectives/functions. The number of iterations and prototypes that we built for this
                        project was incomparable to previous assignments, and we had to resort to outside resources and
                        times to complete this project. Several challenges appeared during the testing phase, such as
                        ideas that we found were flawed and unpractical and that needed major adjustments. One example
                        was that the printing times for the dice roller alone amounted to nearly 19 hours of print time.
                        Our solution for this was to print it at the school public library, but when we were notified
                        that the print might not come in time, we resorted to creating backups out of wood in case the
                        material did not arrive in time. This project was an incredible learning opportunity about the
                        unexpected situations that arise when facing real-world problems, and it tested our
                        creativity/problem solving to the fullest.`

</script>
