import{_ as a,C as o,D as n,E as t,F as u,M as _,I as m,m as r}from"./index-c82ffbd7.js";import{c as g,d as f,e as C,a as h}from"./VCard-46f7eb49.js";const T={name:"Title",props:{text:{type:String,required:!0}}};function y(i,c,e,s,d,l){return o(),n(g,{class:"text-h4 py-5 font-weight-bold text-wrap"},{default:t(()=>[u(_(e.text),1)]),_:1})}const H=a(T,[["render",y]]),$={name:"HomeCardText",props:{text:{type:String,required:!0}}};function S(i,c,e,s,d,l){return o(),n(f,{class:"text-h5 py-5 font-weight-light"},{default:t(()=>[u(_(e.text),1)]),_:1})}const q=a($,[["render",S]]),P={name:"HomeCard",props:{link:{type:String,required:!0},image:{type:String,required:!0},color:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,required:!0}},components:{HomePageCardTitle:H,HomePageCardText:q}};function V(i,c,e,s,d,l){const p=m("HomePageCardTitle"),x=m("HomePageCardText");return o(),n(h,{cols:"4"},{default:t(()=>[r(C,{"append-icon":"mdi-open-in-new",class:"mx-auto",href:e.link,"min-height":"350",image:e.image,color:e.color},{default:t(()=>[r(p,{text:e.title},null,8,["text"]),r(x,{text:e.text},null,8,["text"])]),_:1},8,["href","image","color"])]),_:1})}const B=a(P,[["render",V]]);export{B as H};
