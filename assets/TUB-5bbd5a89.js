import{B as g,S as h,V as n,T as d,C as o,a}from"./CardText-e9dac580.js";import{V as p,P as f,c as i,b,a as w}from"./VCard-46f7eb49.js";import{T as r}from"./TwoColumnImage-f2e1831d.js";import{S as T}from"./SocialMediaButtons-c55eb9c4.js";import{k as y}from"./index-e26ba3bd.js";import{I as _,C as v,D as x,E as t,m as e,F as l,M as c}from"./index-c82ffbd7.js";import"./ssrBoot-d5b8581b.js";import"./FigureText-474ec56e.js";const k="/src/assets/Projects_Images/Tub/banner.avif",C="Hackathon: TUB",I=`Our hackathon team decided to create a club management program in 48 hours to make signing up
  for clubs and creating/managing them easier for students and staff. The program is made of
  python as the back-end with python kivy to create the front-end and MySQL as the database to
  store all account/club information. The program consists of a log-in/sign-up feature, a
  biography edit, password changes, joining clubs, club creation, viewing currently joined clubs,
  and a search/scroll section for clubs. There were many more features planned, but we were unable
  to implement them within the limited time we had, such as admin privileges for certain users and
  announcement pages for each club.`,P="/src/assets/Projects_Images/Tub/summary.png",S="Design Process",j=`For this project, we decided to create something that may be practical and noticed that most
  schools never had an app/program to keep track of all school-sanctioned clubs, and we thought it
  would be useful to create one for convenience. This was also the first time we incorporated
  MySQL into our projects, and with that came challenges such as preventing SQL injections. During
  this time, we each needed to understand the logic of each other's code to properly use and
  prevent bugs from occurring, which means that I was able to obtain a working understanding of
  MySQL during this project.`,V="/src/assets/Projects_Images/Tub/log_in.png",L="/src/assets/Projects_Images/Tub/sign_up.png",B="Log-In Page",M="Sign-Up Page",O=`I wanted to try learning something new this hackathon, so I took it upon myself to learn Kivy,
  an extremely useful tool to create a front-end without using pygame. I was responsible for
  creating all the visuals, buttons, text boxes, scroll bars, and transitions. As this was my
  first time using Kivy, I learned it during the 48 hours, and this was truly a worthwhile
  learning experience for problem-solving as there was no guidance other than google and
  StackOverflow for any issues I encountered.`,A="/src/assets/Projects_Images/Tub/available_club.png",D="/src/assets/Projects_Images/Tub/club_creation.png",Q="Available Clubs Page",U="Club Creation Page",F="Conclusion",H=`The most challenging aspect of this hackathon for me was learning an entirely different language
  in a tight time constraint while also being able to provide help to my other teammates in
  creating/implementing ideas. The difference in this project was that I was almost fully
  responsible for the front-end, so I knew to critique ideas based on an estimate of feasibility
  and time needed, as well as give alternative solutions. It allowed for more established
  communication than in previous projects and ultimately lead to a more productive working
  structure.`,K="https://github.com/Ahren-Chen/SkyBox",G="#385F73",ee={__name:"TUB",setup(N){const u=["Python: Kivy","Python","MySQL"],m=["Teamwork","Communication","Time Management","Problem Solving","Creativity"];return(R,q)=>{const s=_("v-slot");return v(),x(p,{class:"fill-height"},{default:t(()=>[e(y,{class:"fill-height text-center"},{default:t(()=>[e(g,{imagePath:k}),e(f,{titleText:C}),e(h,{technical_skills_items:u,soft_skills_items:m}),e(n),e(d,{summaryText:I,summaryImg:P}),e(n),e(o,null,{default:t(()=>[e(s,null,{default:t(()=>[e(i,null,{default:t(()=>[l(c(S))]),_:1}),e(a,{text:j}),e(r,{imageOne:V,imageTwo:L,textOne:B,textTwo:M}),e(a,{text:O}),e(r,{imageOne:A,imageTwo:D,textOne:Q,textTwo:U})]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(s,null,{default:t(()=>[e(i,null,{default:t(()=>[l(c(F))]),_:1}),e(a,{text:H}),e(b,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(w,null,{default:t(()=>[e(T,{link:K,icon:"mdi-github",title:"GitHub",color:G})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ee as default};
