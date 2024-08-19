import{B as y,S as T,V as s,T as _,C as i,a as n}from"./CardText-105f93df.js";import{V as v,P as x,c as l,b as k,a as C}from"./VCard-9d5b7b78.js";import{T as r}from"./TwoColumnImage-8a75e988.js";import{S as I}from"./SocialMediaButtons-6c3f5884.js";import{k as P}from"./index-60448ab7.js";import{I as S,C as L,D as U,E as t,m as e,O as a,F as c,M as m}from"./index-01bf1ad5.js";import"./ssrBoot-9a22d729.js";import"./FigureText-91126868.js";const V="Hackathon: TUB",j=`Our hackathon team decided to create a club management program in 48 hours to make signing up
  for clubs and creating/managing them easier for students and staff. The program is made of
  python as the back-end with python kivy to create the front-end and MySQL as the database to
  store all account/club information. The program consists of a log-in/sign-up feature, a
  biography edit, password changes, joining clubs, club creation, viewing currently joined clubs,
  and a search/scroll section for clubs. There were many more features planned, but we were unable
  to implement them within the limited time we had, such as admin privileges for certain users and
  announcement pages for each club.`,O="Design Process",B=`For this project, we decided to create something that may be practical and noticed that most
  schools never had an app/program to keep track of all school-sanctioned clubs, and we thought it
  would be useful to create one for convenience. This was also the first time we incorporated
  MySQL into our projects, and with that came challenges such as preventing SQL injections. During
  this time, we each needed to understand the logic of each other's code to properly use and
  prevent bugs from occurring, which means that I was able to obtain a working understanding of
  MySQL during this project.`,R="Log-In Page",M="Sign-Up Page",A=`I wanted to try learning something new this hackathon, so I took it upon myself to learn Kivy,
  an extremely useful tool to create a front-end without using pygame. I was responsible for
  creating all the visuals, buttons, text boxes, scroll bars, and transitions. As this was my
  first time using Kivy, I learned it during the 48 hours, and this was truly a worthwhile
  learning experience for problem-solving as there was no guidance other than google and
  StackOverflow for any issues I encountered.`,D="Available Clubs Page",Q="Club Creation Page",F="Conclusion",H=`The most challenging aspect of this hackathon for me was learning an entirely different language
  in a tight time constraint while also being able to provide help to my other teammates in
  creating/implementing ideas. The difference in this project was that I was almost fully
  responsible for the front-end, so I knew to critique ideas based on an estimate of feasibility
  and time needed, as well as give alternative solutions. It allowed for more established
  communication than in previous projects and ultimately lead to a more productive working
  structure.`,K="https://github.com/Ahren-Chen/SkyBox",G="#385F73",te={__name:"TUB",setup(N){const u=new URL("/assets/banner-66c3e463.avif",self.location).href,h=["Python: Kivy","Python","MySQL"],g=["Teamwork","Communication","Time Management","Problem Solving","Creativity"],d=new URL("/assets/summary-eeb961fc.png",self.location).href,f=new URL("/assets/log_in-8bf94342.png",self.location).href,p=new URL("/assets/sign_up-6a5d7f95.png",self.location).href,b=new URL("/assets/available_club-70f5d643.png",self.location).href,w=new URL("/assets/club_creation-f2c39152.png",self.location).href;return(q,E)=>{const o=S("v-slot");return L(),U(v,{class:"fill-height"},{default:t(()=>[e(P,{class:"fill-height text-center"},{default:t(()=>[e(y,{imagePath:a(u)},null,8,["imagePath"]),e(x,{titleText:V}),e(T,{technical_skills_items:h,soft_skills_items:g}),e(s),e(_,{summaryText:j,summaryImg:a(d)},null,8,["summaryImg"]),e(s),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(l,null,{default:t(()=>[c(m(O))]),_:1}),e(n,{text:B}),e(r,{imageOne:a(f),imageTwo:a(p),textOne:R,textTwo:M},null,8,["imageOne","imageTwo"]),e(n,{text:A}),e(r,{imageOne:a(b),imageTwo:a(w),textOne:D,textTwo:Q},null,8,["imageOne","imageTwo"])]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(l,null,{default:t(()=>[c(m(F))]),_:1}),e(n,{text:H}),e(k,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(C,null,{default:t(()=>[e(I,{link:K,icon:"mdi-github",title:"GitHub",color:G})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{te as default};
