import{B as p,S as g,V as s,T as u,C as n,a}from"./CardText-e9dac580.js";import{V as w,P as f,c as i,b as y,a as T}from"./VCard-46f7eb49.js";import{T as b}from"./TwoColumnImage-f2e1831d.js";import{F as r}from"./FigureText-474ec56e.js";import{S as _}from"./SocialMediaButtons-c55eb9c4.js";import{V as l,k as v}from"./index-e26ba3bd.js";import{I as x,C as k,D as j,E as t,m as e,F as h,M as c}from"./index-c82ffbd7.js";import"./ssrBoot-d5b8581b.js";const I="/src/assets/Projects_Images/Mesh_Generator/banner.avif",P="Mesh Generator",M=`This project was the first ever self directed major project that I had worked on since starting university.
    The project goal was to use what we had learned with Object Oriented Programming in Java and use it to create a
    2D mesh generator. The project was split into 3 components: the mesh details generator, the mesh viewer, and
    the actual mesh polygon generator. The mesh polygon generator was the first component that I had to work on and
    it was all about independently creating a randomized mesh of polygons based on the user's input. Next came the mesh
    viewer which was all about displaying the mesh that was generated. Finally, the mesh details generator was all about
    adding on physical properties to the polygons that were generated. This included things like altitude, temperature,
    biomes, rivers, cities, roads, lakes, aquifers, and more.`,C="/src/assets/Projects_Images/Mesh_Generator/summary.png",V=500,G="Design Process",S=`The project details weren't given to us initally, everyone had thought that creating a mesh polygon generator
    was all we had to do. With that in mind, there wasn't much thought when it came to creating something that was
    sustainable and scalable. When the announcement was made that we had to add details onto the generated mesh, it
    was a mad scramble to refactor the code to make it work. The mesh viewer was the easiest part of the project as
    it was all about taking a mesh and displaying it. The project description and requirements were vague and it was
    purposefully done to see how we would handle the situation. The professor wanted to mimic a real world scenario
    where we were working with a client who didn't know exactly what they wanted from the get go.`,D="/src/assets/Projects_Images/Mesh_Generator/mesh.png",F="Generated Mesh Polygon Example",O=`Despite all the initial challenges that I faced, I was able to successfully create something that I thought
    was what the professor was looking for. For the next phase of the project, everyone had to form a group of 3
    and work on adding details to the output file that the mesh polygon generator created. The mesh details generator
    would take in the output file and add on physical properties to the polygons based on user input. Details included,
    island shapes, soils, elevation, biomes, rivers, lakes, aquifers, and viewing modes (such as heat map, precipitation,
    and elevation). The mesh details generator was the most challenging part of the project as it was all about working
    together with a group to create something that was cohesive and achievable within the time frame given.`,z="/src/assets/Projects_Images/Mesh_Generator/rivers.png",B="Map With Rivers Example",E="/src/assets/Projects_Images/Mesh_Generator/precipitation.png",R="Precipitation View Example",q=`For the final phase of the project, we went back to working individually to create cities and roads based 
    not only on the user input and shortest path, but also on the physical properties of the mesh. The cities and
    roads need to be reasonable in the sense that a road can't be built on a mountain or in the middle of a lake.
    This added one more layer of complexity to the project since I had to take into account how certain 
    user input and randomization combinations would make some cities and roads impossible to build.`,N="/src/assets/Projects_Images/Mesh_Generator/urbanization.png",U="Final Example: Urbanization",W="Conclusion",H=`This project was a great learning experience for me as it was the first time that I had the opportunity to
    apply what I had learned in class to a larger scale project. The project was challenging and required a lot of
    time and effort to complete. Through trial and error, I was able to learn how to effectively implement Object
    Oriented Programming on a practical level. Through working with others, I was able to effectively resolve
    conflicts and express my ideas in a way that was understandable to others. Overall, this was an enjoyable
    course that I had the pleasure of working on and I look forward to working on more projects like this in the
    future.`,J="https://github.com/Ahren-Chen/MeshGenerator",L="secondary",se={__name:"Mesh_Generator",setup(A){const d=["Java","Bash Scripting","Maven","Log4j"],m=["Teamwork","Communication","Time Management","Problem Solving","Perseverance"];return(K,Q)=>{const o=x("v-slot");return k(),j(w,{class:"fill-height"},{default:t(()=>[e(v,{class:"fill-height text-center"},{default:t(()=>[e(p,{imagePath:I}),e(f,{titleText:P}),e(g,{technical_skills_items:d,soft_skills_items:m}),e(s),e(u,{summaryText:M,summaryImg:C,height:V}),e(s),e(n,null,{default:t(()=>[e(o,null,{default:t(()=>[e(i,null,{default:t(()=>[h(c(G))]),_:1}),e(a,{text:S}),e(l,{cover:"",width:"500",src:D,class:"mx-auto"}),e(r,{text:F}),e(a,{text:O}),e(b,{imageOne:z,imageTwo:E,textOne:B,textTwo:R}),e(a,{text:q}),e(l,{cover:"",width:"500",src:N,class:"mx-auto"}),e(r,{text:U})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(o,null,{default:t(()=>[e(i,null,{default:t(()=>[h(c(W))]),_:1}),e(a,{text:H}),e(y,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(T,null,{default:t(()=>[e(_,{link:J,icon:"mdi-github",title:"GitHub",color:L})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{se as default};
