import{B as g}from"./Banner-aeadc041.js";import{V as u,P as f,c as r}from"./VCard-f157f250.js";import{S as p,V as l,T as b,C as c,a as o}from"./CardText-ddaa18f0.js";import{F as s}from"./FigureText-691611e6.js";import{V as n,k as w}from"./index-2c7f582b.js";import{V as _}from"./VBtn-3bad187e.js";import{I as y,C as x,D as v,E as e,m as t,F as a,M as h}from"./index-ee6f11e4.js";import"./ssrBoot-a76b7d8f.js";const T="/src/assets/Projects_Images/Recycling_System/banner.jfif",I="Revenge of the Recycling System",P=`Our team was given the task of designing a system to sort and recycle bottles into their
  respective bins to mimic the methods of sorting facilities. Our task included designing a
  computer program to sort and transport the bottles as well as a mechanism to unload the bottles
  into the bin. To ensure maximum effectiveness, the team split into two teams; one was
  responsible for creating the mechanism and unloading the bottles off of the q-bot, and the other
  was responsible for writing the computer code to sort, transfer, and dispose of the bottles
  using the q-bot and q-arm in an endless loop. I was on the computing sub-team and my objectives
  included writing an efficient, clear, and never-ending loop to transfer the correct bottles from
  the sorting station to the correct bins and disposing of the bottles.`,k="/src/assets/Projects_Images/Recycling_System/starting_virtual_environment.png",q="310",C="Design Process",V=`As part of the computing sub-team, I was responsible for designing a process to dispense the
  bottles onto the sorting station, transferring the bottles onto the q-bot, transferring the
  q-bot to the correct bin, signaling when to unload the bottles from the q-bot, and bringing the
  q-bot back to its starting position. Each of these functions should work together without error
  contiously so long as the program runs. The constraints for this process included: there can be
  no more than three bottles on the q-bot at any given time and the mass of the bottles on the
  q-bot cannot exceed 90 grams. With these objectives and constraints in mind, I started to work
  on the pseudocode to establish a clear plan of action.`,j="/src/assets/Projects_Images/Recycling_System/bottle_properties.png",S="Table of all Bottle Properties",B=`We had the option of choosing a maximum of two out of four possible sensors on the q-bot to
  distinguish the bins, and we chose the color sensor and the ultrasonic sensor. By configuring
  each bin to a different color, the color sensor was able to identify when the q-bot was near the
  correct bin. The ultrasonic sensor would indicate how far the q-bot was from the bin, and this
  would determine when the q-bot chooses to unload the bottles.`,R="/src/assets/Projects_Images/Recycling_System/Q-bot_unloading.png",D="Q-bot Unloading the Bottles",Q=`The most challenging portion of this assignment was due to the inaccuracy of the sensors and the
  q-bot commands. I had assumed that every command I made to the q-bot would be perfectly
  replicated when I began coding. I quickly found out that the inputs I gave the q-bot, such as
  rotating three degrees counterclockwise, were not precisely replicated at exactly 3 degrees.
  This incorrect assumption made my idea of adjusting the final orientation of the bot at the end
  based on how far it was from 360 degrees to be invalid. After weeks of revision and adjustments
  to the code, the method that yielded the most reliable results was to move and rotate the bot in
  small increments to constantly adjust itself while following the line.`,F="/src/assets/Projects_Images/Recycling_System/loading_bottle.png",L="Loading a Bottle onto the Q-bot",M="Conclusion",N=`This project was an eye-opener in terms of applying programming to a physical environment. It
  helped me realize that a perfectly simulated environment does not mimic the physical world and
  that previously valid solutions may not be applicable in the real world. This was also the first
  time I collaborated with someone when programming, and it helped develop my communication skills
  and teamwork. This assignment was an incredible learning opportunity as I was exposed to new
  skills that will be valuable in the future. I have also attached the code I created below.`,Y={__name:"Recycling_System",setup(O){const m=["Python","VNC Viewer","Microsoft Office","Quanser Interactive Labs"],d=["Teamwork","Communication","Time Management","Problem Solving","Leadership"];return(A,E)=>{const i=y("v-slot");return x(),v(u,{class:"fill-height"},{default:e(()=>[t(w,{class:"fill-height text-center"},{default:e(()=>[t(g,{imagePath:T}),t(f,{titleText:I}),t(p,{technical_skills_items:m,soft_skills_items:d}),t(l),t(b,{summaryText:P,summaryImg:k,height:q}),t(l),t(c,null,{default:e(()=>[t(i,null,{default:e(()=>[t(r,null,{default:e(()=>[a(h(C))]),_:1}),t(o,{text:V}),t(n,{cover:"",width:"800",src:j,class:"mx-auto"}),t(s,{text:S}),t(o,{text:B}),t(n,{cover:"",width:"800",src:R,class:"mx-auto"}),t(s,{text:D}),t(o,{text:Q}),t(n,{cover:"",width:"800",src:F,class:"mx-auto"}),t(s,{text:L})]),_:1})]),_:1}),t(c,null,{default:e(()=>[t(i,null,{default:e(()=>[t(r,null,{default:e(()=>[a(h(M))]),_:1}),t(o,{text:N}),t(_,{class:"mx-auto mb-5",color:"primary",href:"Thurs-12_P3_Python_Program.py",download:"",outlined:""},{default:e(()=>[a(" View Code ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Y as default};
