import{B as u,S as p,V as o,T as m,C as s,a}from"./CardText-e9dac580.js";import{V as g,P as f,c as i,b as w,a as b}from"./VCard-46f7eb49.js";import{T as r}from"./TwoColumnImage-f2e1831d.js";import{F as y}from"./FigureText-474ec56e.js";import{S as _}from"./SocialMediaButtons-c55eb9c4.js";import{V as T,k as v}from"./index-e26ba3bd.js";import{I as C,C as P,D as x,E as t,m as e,F as c,M as l}from"./index-c82ffbd7.js";import"./ssrBoot-d5b8581b.js";const A="/src/assets/Projects_Images/Chat_Application/banner.avif",I="Secure Chat Application",k=`This is the final project for my Software Architecture and Design course. Up until this point of actually building
    the app, we had been learning about different kinds of architecture patterns and ways to implement them through
    class diagrams and requirement documents. All of our work led up to this project where we had to choose an architecture
    style and create a secure chat application. The application is meant to be used internally by a company, it must
    be able to authenticate users, send messages, store chat logs, and utilize a mediated authentication protocol. The
    project had to be done in groups of 5 and we had 1 week to actually implement our ideas and build the app. We were
    given the choice of using any programming language we wanted along with any additional features we wanted to add.`,S="/src/assets/Projects_Images/Chat_Application/login.png",j="Design Process",V=`The project was broken down into 3 main parts: brainstorming, architecture design, and implementation. We had about 3 months
    to complete the project and the implementation part was only 1 week. The reason for this is because the professor wanted to
    focus on the design and architecture of the application rather than the functionality of it. As part of the brainstorming,
    we came up with a list of features that we wanted to include in the app and tried to be as ambitious as possible. For the
    architecture design, we ultimately decided on MVC architecture considering that it was an android app that needed to
    display views based on the business logic of a chat application. Since there needs to be dynamic information displayed
    to the user based on inputs and events, we thought that MVC would be the best choice as it separates the concerns of
    the app into 3 main parts: the model, the view, and the controller.`,M="/src/assets/Projects_Images/Chat_Application/home.png",F="/src/assets/Projects_Images/Chat_Application/account.png",B="Home Page",D="Account Page",H=`With the main architecture decided, we start documenting the design of the app. We created class diagrams, sequence diagrams,
    use case scenarios, and robustness diagrams to help us visualize the app and how it would work. We broke down the use
    cases into nouns and verbs to create the robustness diagrams which helped to separate responsibility and functionality.
    Considering that user privacy and security were a top priority, we decided to implement Kerbros authentication for
    logging into the app along with sending messages. Furthermore, to ensure there were no security vulnerabilities, we
    separated the app into 3 main parts: The client, the server, and the account manager. The client would be the android
    app that the user interacts with, the server would be the backend that sends messages, accept
    all API requests, and the account manager would be an authentication server that verifies the user's credentials. 
    The account manager would only communicate directly with the server and the client would only communicate with the server.
    Along with Kerbros authentication, the account manager would be strictly offline and accessible only by the server to
    ensure no security vulnerabilities.`,W="/src/assets/Projects_Images/Chat_Application/message.png",K="/src/assets/Projects_Images/Chat_Application/survey.png",O="Message Page",q="Survey Page",z=`The additional features we added to the app were a survey page, a calling feature, and a profile page. The survey page
    was meant to be a way for the company to send out surveys to employees and get feedback on different topics. The calling
    feature was meant to be a way for employees to call each other directly through the app in a srcure manner. 
    The profile page was meant to be a way for strictly managers to view/edit employee profiles and see who is online.
    Although these additional features are not fully functional, they were meant to be a proof of concept to show that we
    could implement them if we had more time, or as future updates.`,G="/src/assets/Projects_Images/Chat_Application/call.png",J="Call Page",N="Conclusion",R=`This project was a great learning experience for me as it was the first time I had to design and implement an app from
    scratch. I learned a lot about the importance of design and architecture in software development and how it can affect
    the functionality and security of an app. I also learned a lot about the different architecture patterns and how they
    can be implemented in real-world applications. This was my first time developing an android app utilizing MVC architecture
    and communicating with a server. I wanted to formally implement a database and the additional features we had planned
    but due to time constraints, we were unable to. For this project the team had chosen to use Java as the programming language,
    but in the future, I would like to try and implement the app in Kotlin and see how it compares. I learned a lot from
    this experience and I am excited to continue learning and growing as a software developer.`,E="https://github.com/Ahren-Chen/SecureChatApplication",L="#90CAF9",se={__name:"Secure_Chat_Application",setup(U){const h=["Java","Gradle","Android Studio","Kerbros Authentication"],d=["Communication","Time Management","Problem Solving","Troubleshooting"];return(Q,X)=>{const n=C("v-slot");return P(),x(g,{class:"fill-height"},{default:t(()=>[e(v,{class:"fill-height text-center"},{default:t(()=>[e(u,{imagePath:A}),e(f,{titleText:I}),e(p,{technical_skills_items:h,soft_skills_items:d}),e(o),e(m,{summaryText:k,summaryImg:S}),e(o),e(s,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[c(l(j))]),_:1}),e(a,{text:V}),e(r,{imageOne:M,imageTwo:F,textOne:B,textTwo:D}),e(a,{text:H}),e(r,{imageOne:W,imageTwo:K,textOne:O,textTwo:q}),e(a,{text:z}),e(T,{height:"500",src:G,class:"mx-auto"}),e(y,{text:J})]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[c(l(N))]),_:1}),e(a,{text:R}),e(w,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(b,null,{default:t(()=>[e(_,{link:E,icon:"mdi-github",title:"GitHub",color:L})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{se as default};
