import{c as d}from"./index.CvmYViMX.js";import{l as n}from"./scheduler.BEXlFcv1.js";function V(r,{delay:a=0,duration:c=400,easing:e=d,x:i=0,y:f=0,opacity:m=0}={}){const t=getComputedStyle(r),o=+t.opacity,l=t.transform==="none"?"":t.transform,p=o*(1-m),[u,y]=n(i),[$,x]=n(f);return{delay:a,duration:c,easing:e,css:(s,_)=>`
			transform: ${l} translate(${(1-s)*u}${y}, ${(1-s)*$}${x});
			opacity: ${o-p*_}`}}export{V as f};
