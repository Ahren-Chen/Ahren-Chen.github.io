import{B as T,S as v,V as s,T as x,C as i,a as n}from"./CardText-610539fd.js";import{V as _,P,c as r,b as C,a as k}from"./VCard-1ec29ebd.js";import{T as l}from"./TwoColumnImage-cc0dddeb.js";import{F as A}from"./FigureText-2763884f.js";import{S}from"./SocialMediaButtons-e8740b91.js";import{V as I,k as V}from"./index-37fbe7bd.js";import{I as M,C as R,D as j,E as t,m as e,O as a,F as c,M as h}from"./index-116b974c.js";import"./ssrBoot-3716da22.js";const L="Secure Chat Application",U=`This is the final project for my Software Architecture and Design course. Up until this point of actually building
    the app, we had been learning about different kinds of architecture patterns and ways to implement them through
    class diagrams and requirement documents. All of our work led up to this project where we had to choose an architecture
    style and create a secure chat application. The application is meant to be used internally by a company, it must
    be able to authenticate users, send messages, store chat logs, and utilize a mediated authentication protocol. The
    project had to be done in groups of 5 and we had 1 week to actually implement our ideas and build the app. We were
    given the choice of using any programming language we wanted along with any additional features we wanted to add.`,F="Design Process",O=`The project was broken down into 3 main parts: brainstorming, architecture design, and implementation. We had about 3 months
    to complete the project and the implementation part was only 1 week. The reason for this is because the professor wanted to
    focus on the design and architecture of the application rather than the functionality of it. As part of the brainstorming,
    we came up with a list of features that we wanted to include in the app and tried to be as ambitious as possible. For the
    architecture design, we ultimately decided on MVC architecture considering that it was an android app that needed to
    display views based on the business logic of a chat application. Since there needs to be dynamic information displayed
    to the user based on inputs and events, we thought that MVC would be the best choice as it separates the concerns of
    the app into 3 main parts: the model, the view, and the controller.`,B="Home Page",D="Account Page",H=`With the main architecture decided, we start documenting the design of the app. We created class diagrams, sequence diagrams,
    use case scenarios, and robustness diagrams to help us visualize the app and how it would work. We broke down the use
    cases into nouns and verbs to create the robustness diagrams which helped to separate responsibility and functionality.
    Considering that user privacy and security were a top priority, we decided to implement Kerbros authentication for
    logging into the app along with sending messages. Furthermore, to ensure there were no security vulnerabilities, we
    separated the app into 3 main parts: The client, the server, and the account manager. The client would be the android
    app that the user interacts with, the server would be the backend that sends messages, accept
    all API requests, and the account manager would be an authentication server that verifies the user's credentials. 
    The account manager would only communicate directly with the server and the client would only communicate with the server.
    Along with Kerbros authentication, the account manager would be strictly offline and accessible only by the server to
    ensure no security vulnerabilities.`,W="Message Page",K="Survey Page",q=`The additional features we added to the app were a survey page, a calling feature, and a profile page. The survey page
    was meant to be a way for the company to send out surveys to employees and get feedback on different topics. The calling
    feature was meant to be a way for employees to call each other directly through the app in a srcure manner. 
    The profile page was meant to be a way for strictly managers to view/edit employee profiles and see who is online.
    Although these additional features are not fully functional, they were meant to be a proof of concept to show that we
    could implement them if we had more time, or as future updates.`,z="Call Page",G="Conclusion",J=`This project was a great learning experience for me as it was the first time I had to design and implement an app from
    scratch. I learned a lot about the importance of design and architecture in software development and how it can affect
    the functionality and security of an app. I also learned a lot about the different architecture patterns and how they
    can be implemented in real-world applications. This was my first time developing an android app utilizing MVC architecture
    and communicating with a server. I wanted to formally implement a database and the additional features we had planned
    but due to time constraints, we were unable to. For this project the team had chosen to use Java as the programming language,
    but in the future, I would like to try and implement the app in Kotlin and see how it compares. I learned a lot from
    this experience and I am excited to continue learning and growing as a software developer.`,N="https://github.com/Ahren-Chen/SecureChatApplication",E="#90CAF9",ie={__name:"Secure_Chat_Application",setup(Q){const d=new URL("/assets/banner-dbe15eb1.avif",self.location).href,u=["Java","Gradle","Android Studio","Kerbros Authentication"],m=["Communication","Time Management","Problem Solving","Troubleshooting"],p=new URL("/assets/login-42550185.png",self.location).href,g=new URL("/assets/home-60e87795.png",self.location).href,f=new URL("/assets/account-29f554d7.png",self.location).href,w=new URL("/assets/message-a2b61e89.png",self.location).href,b=new URL("/assets/survey-3b789e71.png",self.location).href,y=new URL("/assets/call-94ac784f.png",self.location).href;return(X,Y)=>{const o=M("v-slot");return R(),j(_,{class:"fill-height"},{default:t(()=>[e(V,{class:"fill-height text-center"},{default:t(()=>[e(T,{imagePath:a(d)},null,8,["imagePath"]),e(P,{titleText:L}),e(v,{technical_skills_items:u,soft_skills_items:m}),e(s),e(x,{summaryText:U,summaryImg:a(p)},null,8,["summaryImg"]),e(s),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(r,null,{default:t(()=>[c(h(F))]),_:1}),e(n,{text:O}),e(l,{imageOne:a(g),imageTwo:a(f),textOne:B,textTwo:D},null,8,["imageOne","imageTwo"]),e(n,{text:H}),e(l,{imageOne:a(w),imageTwo:a(b),textOne:W,textTwo:K},null,8,["imageOne","imageTwo"]),e(n,{text:q}),e(I,{height:"500",src:a(y),class:"mx-auto"},null,8,["src"]),e(A,{text:z})]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(r,null,{default:t(()=>[c(h(G))]),_:1}),e(n,{text:J}),e(C,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(k,null,{default:t(()=>[e(S,{link:N,icon:"mdi-github",title:"GitHub",color:E})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ie as default};
