import{B as _,S as y,V as l,T as x,C as c,a as s}from"./CardText-43be0701.js";import{V as v,P as T,c as h}from"./VCard-b22d6519.js";import{F as n}from"./FigureText-c178f39d.js";import{V as a,k}from"./index-cc1bb379.js";import{V as I}from"./VBtn-5520db51.js";import{I as q,C as P,D as C,E as t,m as e,O as o,F as i,M as d}from"./index-5c784a8e.js";import"./ssrBoot-86103078.js";const V="Revenge of the Recycling System",B=`Our team was given the task of designing a system to sort and recycle bottles into their
  respective bins to mimic the methods of sorting facilities. Our task included designing a
  computer program to sort and transport the bottles as well as a mechanism to unload the bottles
  into the bin. To ensure maximum effectiveness, the team split into two teams; one was
  responsible for creating the mechanism and unloading the bottles off of the q-bot, and the other
  was responsible for writing the computer code to sort, transfer, and dispose of the bottles
  using the q-bot and q-arm in an endless loop. I was on the computing sub-team and my objectives
  included writing an efficient, clear, and never-ending loop to transfer the correct bottles from
  the sorting station to the correct bins and disposing of the bottles.`,R="310",L="Design Process",j=`As part of the computing sub-team, I was responsible for designing a process to dispense the
  bottles onto the sorting station, transferring the bottles onto the q-bot, transferring the
  q-bot to the correct bin, signaling when to unload the bottles from the q-bot, and bringing the
  q-bot back to its starting position. Each of these functions should work together without error
  contiously so long as the program runs. The constraints for this process included: there can be
  no more than three bottles on the q-bot at any given time and the mass of the bottles on the
  q-bot cannot exceed 90 grams. With these objectives and constraints in mind, I started to work
  on the pseudocode to establish a clear plan of action.`,S="Table of all Bottle Properties",U=`We had the option of choosing a maximum of two out of four possible sensors on the q-bot to
  distinguish the bins, and we chose the color sensor and the ultrasonic sensor. By configuring
  each bin to a different color, the color sensor was able to identify when the q-bot was near the
  correct bin. The ultrasonic sensor would indicate how far the q-bot was from the bin, and this
  would determine when the q-bot chooses to unload the bottles.`,D="Q-bot Unloading the Bottles",O=`The most challenging portion of this assignment was due to the inaccuracy of the sensors and the
  q-bot commands. I had assumed that every command I made to the q-bot would be perfectly
  replicated when I began coding. I quickly found out that the inputs I gave the q-bot, such as
  rotating three degrees counterclockwise, were not precisely replicated at exactly 3 degrees.
  This incorrect assumption made my idea of adjusting the final orientation of the bot at the end
  based on how far it was from 360 degrees to be invalid. After weeks of revision and adjustments
  to the code, the method that yielded the most reliable results was to move and rotate the bot in
  small increments to constantly adjust itself while following the line.`,Q="Loading a Bottle onto the Q-bot",F="Conclusion",M=`This project was an eye-opener in terms of applying programming to a physical environment. It
  helped me realize that a perfectly simulated environment does not mimic the physical world and
  that previously valid solutions may not be applicable in the real world. This was also the first
  time I collaborated with someone when programming, and it helped develop my communication skills
  and teamwork. This assignment was an incredible learning opportunity as I was exposed to new
  skills that will be valuable in the future. I have also attached the code I created below.`,Y={__name:"Recycling_System",setup(N){const m=new URL("/assets/banner-2d6dafce.jfif",self.location).href,u=["Python","VNC Viewer","Microsoft Office","Quanser Interactive Labs"],f=["Teamwork","Communication","Time Management","Problem Solving","Leadership"],g=new URL("/assets/starting_virtual_environment-f92d1215.png",self.location).href,b=new URL("/assets/bottle_properties-61ef1d14.png",self.location).href,p=new URL("/assets/Q-bot_unloading-d60c726c.png",self.location).href,w=new URL("/assets/loading_bottle-c7bbbaf6.png",self.location).href;return(A,E)=>{const r=q("v-slot");return P(),C(v,{class:"fill-height"},{default:t(()=>[e(k,{class:"fill-height text-center"},{default:t(()=>[e(_,{imagePath:o(m)},null,8,["imagePath"]),e(T,{titleText:V}),e(y,{technical_skills_items:u,soft_skills_items:f}),e(l),e(x,{summaryText:B,summaryImg:o(g),height:R},null,8,["summaryImg"]),e(l),e(c,null,{default:t(()=>[e(r,null,{default:t(()=>[e(h,null,{default:t(()=>[i(d(L))]),_:1}),e(s,{text:j}),e(a,{cover:"",width:"800",src:o(b),class:"mx-auto"},null,8,["src"]),e(n,{text:S}),e(s,{text:U}),e(a,{cover:"",width:"800",src:o(p),class:"mx-auto"},null,8,["src"]),e(n,{text:D}),e(s,{text:O}),e(a,{cover:"",width:"800",src:o(w),class:"mx-auto"},null,8,["src"]),e(n,{text:Q})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,null,{default:t(()=>[e(h,null,{default:t(()=>[i(d(F))]),_:1}),e(s,{text:M}),e(I,{class:"mx-auto mb-5",color:"primary",href:"Thurs-12_P3_Python_Program.py",download:"",outlined:""},{default:t(()=>[i(" View Code ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Y as default};
