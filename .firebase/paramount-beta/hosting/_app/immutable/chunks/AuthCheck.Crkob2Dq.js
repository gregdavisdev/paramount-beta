import{s as h,o as m,i as b,f as d,k,e as g,c as v,m as y,p as $,n as u,y as A,z as C,A as S,B as w}from"./scheduler.BEXlFcv1.js";import{S as H,i as L,g as M,b as _,e as T,t as f}from"./index.7KKCNSNY.js";import{c as q}from"./firebase.BwfJqXMx.js";function z(r){let e,o=`You must be signed in to view this page.
    <a class="btn btn-primary" href="/login">Sign in</a>`;return{c(){e=g("p"),e.innerHTML=o,this.h()},l(t){e=v(t,"P",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1tg7wv7"&&(e.innerHTML=o),this.h()},h(){$(e,"class","text-error")},m(t,s){b(t,e,s)},p:u,i:u,o:u,d(t){t&&d(e)}}}function B(r){let e;const o=r[2].default,t=A(o,r,r[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&2)&&C(t,o,s,s[1],e?w(o,s[1],i,null):S(s[1]),null)},i(s){e||(f(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function N(r){let e,o,t,s;const i=[B,z],l=[];function p(n,a){return n[0]?0:1}return e=p(r),o=l[e]=i[e](r),{c(){o.c(),t=m()},l(n){o.l(n),t=m()},m(n,a){l[e].m(n,a),b(n,t,a),s=!0},p(n,[a]){let c=e;e=p(n),e===c?l[e].p(n,a):(M(),_(l[c],1,1,()=>{l[c]=null}),T(),o=l[e],o?o.p(n,a):(o=l[e]=i[e](n),o.c()),f(o,1),o.m(t.parentNode,t))},i(n){s||(f(o),s=!0)},o(n){_(o),s=!1},d(n){n&&d(t),l[e].d(n)}}}function P(r,e,o){let t;k(r,q,l=>o(0,t=l));let{$$slots:s={},$$scope:i}=e;return r.$$set=l=>{"$$scope"in l&&o(1,i=l.$$scope)},[t,i,s]}class E extends H{constructor(e){super(),L(this,e,P,N,h,{})}}export{E as A};
