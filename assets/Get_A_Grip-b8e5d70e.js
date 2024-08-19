import{B as _,S as v,V as a,T as x,C as s,a as i}from"./CardText-105f93df.js";import{V as b,P as I,c as r}from"./VCard-9d5b7b78.js";import{T as l}from"./TwoColumnImage-8a75e988.js";import{F as P}from"./FigureText-91126868.js";import{V as k,k as z}from"./index-60448ab7.js";import{I as C,C as O,D as L,E as t,m as e,O as o,F as c,M as m}from"./index-01bf1ad5.js";import"./ssrBoot-9a22d729.js";const S="Get A Grip",A=`Our team was entrusted with designing a process to sterilize a surgical tool by putting
  it into a container and using a mechanical arm to transport it.To efficiently
  accomplish this task, we split into two teams; one was responsible for creating a solid
  model of the container, and the other was in charge of writing the python code for the
  robotic arm.I was a part of the modeling team, and my objectives included minimizing
  material usage, securing the surgical tool, and facilitating sterilization.`,V="Design Process",F=`As part of the modeling team, I first created a set of objectives and features that I should 
  be aware of when designing my container. The container needed to be picked up by the robot gripped, 
  therefore requiring a rectangular shape. The container also had to sustain steam sterilization 
  while being under 350 grams in weight. Our team was given an inventor model of the surgical 
  tool to secure and the autoclave our container needed to fit into.`,D="Surgical Tool",G="Autoclave",R=`Once a set of objectives, constraints, and functions were fully defined, 
  I created multiple prototypes while integrating each feature one at a time. 
  These prototypes varied from low-fidelity physical models to fully realized 
  models made in Autodesk with proper dimensions.`,U="Physical Low Fidelity",j="Finalized Inventor",M=`The purpose of the indented walls on either side of my model was to increase the ease 
  with which it could be picked up. This extra feature would ensure that the transportation 
  of the container would be smooth and indicates where the gripper is supposed to grab. 
  To secure the surgical tool during transportation, I chose to add cylinders to insert 
  into the openings of the surgical tool. Lastly, to facilitate sterilization, I chose 
  for my model to have an open-top and numerous holes for the steam to enter and pass 
  through. As my final model was finalized, I got the Gcode using PrusaSlicer to print a 
  high-fidelity physical version of the model.`,B="3D Printed Model",q="Conclusion",N=`This project expanded my horizon on a new modeling technique using 3D printing. 
  Since I had to review and revise my model several times before creating the final 
  version, I developed a better grasp of the engineering method. I faced many challenges 
  during this project, mainly having to remake my model over a dozen times to accommodate 
  all restrictions while thinking about minimizing material usage. One example would be 
  when generating the Gcode to print my model, the maximum print time is 2 hours, and 
  my model went over the limit by 5 minutes. To solve this issue, I poured through all 
  features of my model to see what is minimizable, and I realized the height of the 
  model could be decreased and cut the time nearly in half. Overall this assignment 
  was a valuable learning opportunity for 3D printing and simulates the trial and error 
  process of the engineering process.`,ee={__name:"Get_A_Grip",setup(E){const d=new URL("/assets/Get_A_Grip_banner-efb0c7dc.jpg",self.location).href,h=["Autodesk Inventor","Python","Microsoft Office","Prusa Slicer","Quanser Interactive Labs"],u=["Teamwork","Communication","Time Management","Problem Solving"],g=new URL("/assets/summary-e6d20a67.png",self.location).href,f=new URL("/assets/surgical_tool-154a5eee.png",self.location).href,p=new URL("/assets/autoclave-3f3c9cfb.png",self.location).href,w=new URL("/assets/physical_low_fidelity-858b8101.png",self.location).href,y=new URL("/assets/finalized_inventor-bedc3ec8.png",self.location).href,T=new URL("/assets/3D_printed_model-ddf466ff.png",self.location).href;return(Q,H)=>{const n=C("v-slot");return O(),L(b,{class:"fill-height"},{default:t(()=>[e(z,{class:"fill-height text-center"},{default:t(()=>[e(_,{imagePath:o(d)},null,8,["imagePath"]),e(I,{titleText:S}),e(v,{technical_skills_items:h,soft_skills_items:u}),e(a),e(x,{summaryText:A,summaryImg:o(g)},null,8,["summaryImg"]),e(a),e(s,null,{default:t(()=>[e(n,null,{default:t(()=>[e(r,null,{default:t(()=>[c(m(V))]),_:1}),e(i,{text:F}),e(l,{imageOne:o(f),imageTwo:o(p),textOne:D,textTwo:G},null,8,["imageOne","imageTwo"]),e(i,{text:R}),e(l,{imageOne:o(w),imageTwo:o(y),textOne:U,textTwo:j},null,8,["imageOne","imageTwo"]),e(i,{text:M}),e(k,{cover:"",width:"500",src:o(T),class:"mx-auto"},null,8,["src"]),e(P,{text:B})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(n,null,{default:t(()=>[e(r,null,{default:t(()=>[c(m(q))]),_:1}),e(i,{text:N})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ee as default};
