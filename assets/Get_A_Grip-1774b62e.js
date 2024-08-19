import{B as h,S as u,V as s,T as g,C as a,a as o}from"./CardText-e9dac580.js";import{V as p,P as f,c as n}from"./VCard-46f7eb49.js";import{T as r}from"./TwoColumnImage-f2e1831d.js";import{F as _}from"./FigureText-474ec56e.js";import{V as w,k as y}from"./index-e26ba3bd.js";import{I as T,C as v,D as x,E as t,m as e,F as l,M as c}from"./index-c82ffbd7.js";import"./ssrBoot-d5b8581b.js";const I="/src/assets/Projects_Images/Get_A_Grip/Get_A_Grip_banner.jpg",P="Get A Grip",b=`Our team was entrusted with designing a process to sterilize a surgical tool by putting
  it into a container and using a mechanical arm to transport it.To efficiently
  accomplish this task, we split into two teams; one was responsible for creating a solid
  model of the container, and the other was in charge of writing the python code for the
  robotic arm.I was a part of the modeling team, and my objectives included minimizing
  material usage, securing the surgical tool, and facilitating sterilization.`,G="/src/assets/Projects_Images/Get_A_Grip/summary.png",A="Design Process",k=`As part of the modeling team, I first created a set of objectives and features that I should 
  be aware of when designing my container. The container needed to be picked up by the robot gripped, 
  therefore requiring a rectangular shape. The container also had to sustain steam sterilization 
  while being under 350 grams in weight. Our team was given an inventor model of the surgical 
  tool to secure and the autoclave our container needed to fit into.`,z="/src/assets/Projects_Images/Get_A_Grip/surgical_tool.png",C="/src/assets/Projects_Images/Get_A_Grip/autoclave.png",j="Surgical Tool",S="Autoclave",O=`Once a set of objectives, constraints, and functions were fully defined, 
  I created multiple prototypes while integrating each feature one at a time. 
  These prototypes varied from low-fidelity physical models to fully realized 
  models made in Autodesk with proper dimensions.`,V="/src/assets/Projects_Images/Get_A_Grip/physical_low_fidelity.png",F="/src/assets/Projects_Images/Get_A_Grip/finalized_inventor.png",D="Physical Low Fidelity",M="Finalized Inventor",L=`The purpose of the indented walls on either side of my model was to increase the ease 
  with which it could be picked up. This extra feature would ensure that the transportation 
  of the container would be smooth and indicates where the gripper is supposed to grab. 
  To secure the surgical tool during transportation, I chose to add cylinders to insert 
  into the openings of the surgical tool. Lastly, to facilitate sterilization, I chose 
  for my model to have an open-top and numerous holes for the steam to enter and pass 
  through. As my final model was finalized, I got the Gcode using PrusaSlicer to print a 
  high-fidelity physical version of the model.`,B="/src/assets/Projects_Images/Get_A_Grip/3D_printed_model.png",q="3D Printed Model",N="Conclusion",E=`This project expanded my horizon on a new modeling technique using 3D printing. 
  Since I had to review and revise my model several times before creating the final 
  version, I developed a better grasp of the engineering method. I faced many challenges 
  during this project, mainly having to remake my model over a dozen times to accommodate 
  all restrictions while thinking about minimizing material usage. One example would be 
  when generating the Gcode to print my model, the maximum print time is 2 hours, and 
  my model went over the limit by 5 minutes. To solve this issue, I poured through all 
  features of my model to see what is minimizable, and I realized the height of the 
  model could be decreased and cut the time nearly in half. Overall this assignment 
  was a valuable learning opportunity for 3D printing and simulates the trial and error 
  process of the engineering process.`,$={__name:"Get_A_Grip",setup(Q){const m=["Autodesk Inventor","Python","Microsoft Office","Prusa Slicer","Quanser Interactive Labs"],d=["Teamwork","Communication","Time Management","Problem Solving"];return(R,H)=>{const i=T("v-slot");return v(),x(p,{class:"fill-height"},{default:t(()=>[e(y,{class:"fill-height text-center"},{default:t(()=>[e(h,{imagePath:I}),e(f,{titleText:P}),e(u,{technical_skills_items:m,soft_skills_items:d}),e(s),e(g,{summaryText:b,summaryImg:G}),e(s),e(a,null,{default:t(()=>[e(i,null,{default:t(()=>[e(n,null,{default:t(()=>[l(c(A))]),_:1}),e(o,{text:k}),e(r,{imageOne:z,imageTwo:C,textOne:j,textTwo:S}),e(o,{text:O}),e(r,{imageOne:V,imageTwo:F,textOne:D,textTwo:M}),e(o,{text:L}),e(w,{cover:"",width:"500",src:B,class:"mx-auto"}),e(_,{text:q})]),_:1})]),_:1}),e(a,null,{default:t(()=>[e(i,null,{default:t(()=>[e(n,null,{default:t(()=>[l(c(N))]),_:1}),e(o,{text:E})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{$ as default};
