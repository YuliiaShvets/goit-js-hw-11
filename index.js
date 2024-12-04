import{S as d,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=l=>{const r="47416000-07f62798ea171a7bceefd88a8",i="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})};function c(l){const r=document.querySelector(".gallery"),i=l.map(({webformatURL:s,largeImageURL:e,tags:t,likes:o,views:g,comments:h,downloads:p})=>`
    <li class="gallery-item">
    <a href="${e}">
    <img class="gallery-image" src="${s}", alt="${t}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${o}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${g}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${h}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${p}</p>
        </li>
    </ul>
    </li>
    `).join("");r.innerHTML=i}const m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector("#search-form"),u=document.querySelector(".gallery"),a=document.querySelector("#loader");y.addEventListener("submit",L);function L(l){l.preventDefault(),u.innerHTML="";let r=l.target.elements["search-input"];const i=r.value.trim();if(!i){n.show({title:"",backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}a.style.display="inline-block",f(i).then(s=>{s.length===0&&n.show({title:"",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c(s.hits),m.refresh(),r.value="",a.style.display="none"}).catch(s=>console.log(s)),u.insertAdjacentHTML("beforeend",c(arrImg)),m.refresh(),r.value="",a.style.display="none"}
//# sourceMappingURL=index.js.map
