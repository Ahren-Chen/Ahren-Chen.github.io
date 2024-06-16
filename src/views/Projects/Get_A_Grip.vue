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

          <TwoColumnImage :imageOne="SurgicalTool" :imageTwo="Autoclave" :textOne="SurgicalToolText"
            :textTwo="AutoclaveText" />

          <CardText :text="designProcessText2" />

          <TwoColumnImage :imageOne="PhysicalLowFidelity" :imageTwo="FinalizedInventor"
            :textOne="PhysicalLowFidelityText" :textTwo="FinalizedInventorText" />

          <CardText :text="designProcessText3" />

          <v-img cover width="500" :src="PrintedModel" class="mx-auto" />
          <FigureText :text="PrintedModelText" />

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
import TwoColumnImage from '@/components/TwoColumnImage.vue'
import FigureText from '@/components/Subcomponents/FigureText.vue'

// data
const bannerImgPath = '/src/assets/Projects_Images/Get_A_Grip/Get_A_Grip_banner.jpg'
const pageTitle = 'Get A Grip'

const technical_skills_items = [
  'Autodesk Inventor',
  'Python',
  'Microsoft Office',
  'Prusa Slicer',
  'Quanser Interactive Labs'
]
const soft_skills_items = [
  'Teamwork',
  'Communication',
  'Time Management',
  'Problem Solving'
]

const summaryText =
  `Our team was entrusted with designing a process to sterilize a surgical tool by putting
  it into a container and using a mechanical arm to transport it.To efficiently
  accomplish this task, we split into two teams; one was responsible for creating a solid
  model of the container, and the other was in charge of writing the python code for the
  robotic arm.I was a part of the modeling team, and my objectives included minimizing
  material usage, securing the surgical tool, and facilitating sterilization.`
const summaryImgPath = '/src/assets/Projects_Images/Get_A_Grip/summary.png'

const designProcessTitle = 'Design Process'
const designProcessText1 =
  `As part of the modeling team, I first created a set of objectives and features that I should 
  be aware of when designing my container. The container needed to be picked up by the robot gripped, 
  therefore requiring a rectangular shape. The container also had to sustain steam sterilization 
  while being under 350 grams in weight. Our team was given an inventor model of the surgical 
  tool to secure and the autoclave our container needed to fit into.`

const SurgicalTool = '/src/assets/Projects_Images/Get_A_Grip/surgical_tool.png'
const Autoclave = '/src/assets/Projects_Images/Get_A_Grip/autoclave.png'
const SurgicalToolText = 'Surgical Tool'
const AutoclaveText = 'Autoclave'

const designProcessText2 =
  `Once a set of objectives, constraints, and functions were fully defined, 
  I created multiple prototypes while integrating each feature one at a time. 
  These prototypes varied from low-fidelity physical models to fully realized 
  models made in Autodesk with proper dimensions.`

const PhysicalLowFidelity = '/src/assets/Projects_Images/Get_A_Grip/physical_low_fidelity.png'
const FinalizedInventor = '/src/assets/Projects_Images/Get_A_Grip/finalized_inventor.png'
const PhysicalLowFidelityText = 'Physical Low Fidelity'
const FinalizedInventorText = 'Finalized Inventor'

const designProcessText3 =
  `The purpose of the indented walls on either side of my model was to increase the ease 
  with which it could be picked up. This extra feature would ensure that the transportation 
  of the container would be smooth and indicates where the gripper is supposed to grab. 
  To secure the surgical tool during transportation, I chose to add cylinders to insert 
  into the openings of the surgical tool. Lastly, to facilitate sterilization, I chose 
  for my model to have an open-top and numerous holes for the steam to enter and pass 
  through. As my final model was finalized, I got the Gcode using PrusaSlicer to print a 
  high-fidelity physical version of the model.`

const PrintedModel = '/src/assets/Projects_Images/Get_A_Grip/3D_printed_model.png'
const PrintedModelText = '3D Printed Model'

const ConclusionTitle = 'Conclusion'
const ConclusionText =
  `This project expanded my horizon on a new modeling technique using 3D printing. 
  Since I had to review and revise my model several times before creating the final 
  version, I developed a better grasp of the engineering method. I faced many challenges 
  during this project, mainly having to remake my model over a dozen times to accommodate 
  all restrictions while thinking about minimizing material usage. One example would be 
  when generating the Gcode to print my model, the maximum print time is 2 hours, and 
  my model went over the limit by 5 minutes. To solve this issue, I poured through all 
  features of my model to see what is minimizable, and I realized the height of the 
  model could be decreased and cut the time nearly in half. Overall this assignment 
  was a valuable learning opportunity for 3D printing and simulates the trial and error 
  process of the engineering process.`

</script>
