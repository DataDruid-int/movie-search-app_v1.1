"use strict";(self.webpackChunkmovie_search_app_personal_project_v1_0=self.webpackChunkmovie_search_app_personal_project_v1_0||[]).push([[72],{9601:(e,n,t)=>{t.d(n,{t:()=>C});var a,r=t(3216),o=t(7528),i=t(5903);const s=i.A.ul(a||(a=(0,o.A)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  padding: 16px 0;\n  list-style: none;\n  margin: 0 auto;\n  max-width: calc(100vw - 32px); /* \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c \u043e\u0442\u0441\u0442\u0443\u043f\u044b */\n\n  @media (max-width: 1440px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 4 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u0445 */\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  // @media (max-width: 992px) {\n  //   /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 */\n  //   grid-template-columns: repeat(2, 1fr);\n  // }\n\n  @media (max-width: 1000px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u0445 */\n    grid-template-columns: repeat(2, minmax(0, 350px));\n  }\n  @media (max-width: 425px) {\n    /* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e 2 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u0445 */\n    grid-template-columns: repeat(1, 1fr);\n  }\n"])));var c,d,p,l,h=t(5043),g=t(5475);const m=i.A.li(c||(c=(0,o.A)(["\n  position: relative;\n  overflow: hidden;\n  max-width: 100%;\n\n  height: auto;\n\n  padding: 12px;\n  border-radius: 12px;\n  border: 1.5px solid green;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),v=i.A.div(d||(d=(0,o.A)(["\n  position: relative;\n"]))),x=i.A.img(p||(p=(0,o.A)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n"]))),u=i.A.h3(l||(l=(0,o.A)(["\n  font-size: 16px;\n  margin-top: 8px;\n"])));var f,w,A,y=t(6543);const _=i.A.button(f||(f=(0,o.A)(["\n  position: absolute;\n  bottom: -30px;\n  right: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-top: 10px;\n\n  &.favorite svg path {\n    fill: #ffc700;\n    stroke: #ffc700;\n  }\n\n  &:not(.favorite) svg path {\n    fill: green;\n    stroke: green;\n  }\n"]))),b=i.A.span(w||(w=(0,o.A)(["\n  width: 24px;\n  height: 24px;\n\n  // svg {\n  //   width: 24px;\n  //   height: 24px;\n  // }\n"]))),j=i.A.svg(A||(A=(0,o.A)(["\n  width: 24px;\n  height: 24px;\n"])));var k=t(3003),E=t(205);var F=t(713),H=t(579);const S=e=>{let{id:n}=e;const{addFavoriteHook:t,removeFavoriteHook:a}=(()=>{const e=(0,k.wA)();return{addFavoriteHook:n=>e((0,E._J)(n)),removeFavoriteHook:n=>e((0,E.wy)(n))}})(),r=(0,F.C)(n),[o,i]=(0,h.useState)();(0,h.useEffect)((()=>{i(r)}),[r]);return(0,H.jsx)(_,{onClick:e=>{e.stopPropagation(),e.preventDefault(),o?a(n):t(n),i(!o)},className:o?"favorite":"",children:(0,H.jsx)(b,{children:(0,H.jsx)(j,{viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M26,2H6A1,1,0,0,0,5,3V28a1,1,0,0,0,1.51.86L16,23.17l9.49,5.69A1,1,0,0,0,26,29a1,1,0,0,0,.49-.13A1,1,0,0,0,27,28V3A1,1,0,0,0,26,2ZM25,4V8H7V4ZM16.51,21.14a1,1,0,0,0-1,0L7,26.23V10H25V26.23Z",className:"cls-1"})})})})},V=e=>{let{movie:n,location:t}=e;const{id:a,original_title:r,poster_path:o}=n;return(0,H.jsxs)(m,{children:[(0,H.jsx)(g.N_,{state:{from:t},to:"/movies/".concat(a),children:(0,H.jsxs)(v,{children:[(0,H.jsx)(x,{src:o?y.a+o:y.K+"?text="+r,alt:r}),(0,H.jsx)(S,{id:a})]})}),(0,H.jsx)(u,{children:r})]},a)},C=e=>{let{movies:n,onRemoveFavorite:t}=e;const a=(0,r.zy)();return(0,H.jsx)(s,{children:n.map((e=>(0,H.jsx)(V,{movie:e,location:a,onRemoveFavorite:t},e.id)))})}},5072:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(5043),r=t(9076),o=t(9601),i=t(579);const s=()=>{const[e,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(0,r.Nt)("").then(n)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(o.t,{movies:e})]})}},9076:(e,n,t)=>{t.d(n,{IJ:()=>c,Nt:()=>o,Vg:()=>d,l:()=>s,mE:()=>i});var a=t(6213);a.A.defaults.baseURL="https://api.themoviedb.org/3/";const r="3373af60a4ee1fe7510a1a61c11380e1",o=async()=>{try{const{data:e}=await a.A.get("trending/movie/week?api_key=".concat(r));return e.results}catch(e){console.error("Error fetching trending movies:",e)}},i=async(e,n)=>{try{const{data:t}=await a.A.get("search/movie?api_key=".concat(r,"&query=").concat(e,"&language=en-US&page=").concat(n,"&include_adult=false"));return t}catch(t){console.error("Error fetching movie by query:",t)}},s=async e=>{try{const{data:n}=await a.A.get("movie/".concat(e,"?api_key=").concat(r,"&language=en-US"));return n}catch(n){console.error("Error fetching movie by id:",n)}},c=async e=>{try{const{data:n}=await a.A.get("movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US"));return n.cast}catch(n){console.error("Error fetching cast movies:",n)}},d=async e=>{try{const{data:n}=await a.A.get("movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US"));return n.results}catch(n){console.error("Error fetching reviews movie:",n)}}},713:(e,n,t)=>{t.d(n,{C:()=>o,l:()=>r});var a=t(3003);const r=()=>(0,a.d4)((e=>e.favoritesStoreReducer.favoriteMoviesid)),o=e=>r().includes(e)},6543:(e,n,t)=>{t.d(n,{K:()=>r,a:()=>a});const a="https://image.tmdb.org/t/p/w500/",r="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=72.568bcd03.chunk.js.map