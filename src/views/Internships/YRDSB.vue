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

                    <v-img cover width="400" :src="Tech" class="mx-auto" />
                    <FigureText :text="TechText" />

                    <CardText :text="bodyText2" />

                    <v-img cover width="400" :src="School" class="mx-auto" />
                    <FigureText :text="SchoolText" />

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
const bannerImgPath = '/src/assets/Internships_Images/YRDSB/banner.avif'
const pageTitle = 'IT Technical Support Co-op'

const technical_skills_items = [
    'BIOS Configuration',
    'Hardware Troubleshooting',
    'Imaging Laptop/Desktop',
    "Repairing Laptops/Desktops",
]
const soft_skills_items = [
    'Teamwork',
    'Communication',
    'Time Management',
    'Problem Solving',
    "Self-Motivation",
]

const summaryText =
    `I decided to take a co-op course in the first semester of grade 11, and luckily, 
    I managed to get a position as a student IT assistant at Dr. Bette Stephenson's Centre for Learning. 
    My duties were mainly focused on troubleshooting laptops/desktops and resetting them to make them usable; 
    the repaired laptops/desktops would be shipped out to teachers who need a replacement. I also got 
    to experience working with servers and networks briefly with others. The vast majority of issues had 
    to do with hardware issues, so replacing/fixing the hardware was the bulk of my experience, but I also 
    got to experience imaging and manipulating BIOS settings.`
const summaryImgPath = '/src/assets/Internships_Images/YRDSB/summary_photo.jpg'

const bodyTitle = 'What I learned'
const bodyText1 =
    `The schedule consisted of my friend Adam in the morning followed by me in the afternoon, and although 
    we both had our responsibilities, when we were unable to complete our tasks, we would leave a message 
    on what needed to be done for the other person to see. This inspired teamwork, collaboration and increased 
    our overall efficiency since there was never any confusion on what still needed to be completed. We often 
    worked on similar long-term projects, and whenever we met in the short period before we swapped, we would 
    chat and catch up as friends. I looked forward to every day there and continued to learn, often, I was 
    left to my own devices once the task was assigned to me, so I had the chance to explore different 
    technologies on my own.`

const Tech = '/src/assets/Internships_Images/YRDSB/tech.jpg'
const TechText = 'Me and my teammate with all the laptops we fixed'

const bodyText2 =
    `The independence to do what I wanted as long as the final result was satisfactory gave me a lot of 
    freedom to research and try different things to see what worked and what didn't. There were extremely 
    competent veterans in the field around me that were always ready to help and give advice whenever 
    I needed it, and I truly learned by doing. I even got to disassemble hard drives and other hardware 
    to put my understanding of their concepts into practical use. I am forever grateful that I got to 
    meet such amazing people and learn more than I could have imagined from them.`

const School = '/src/assets/Internships_Images/YRDSB/school.jpg'
const SchoolText = 'The School Building'

</script>