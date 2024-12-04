import{S as h,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=o=>{const i="47416000-07f62798ea171a7bceefd88a8",s="https://pixabay.com/api/",r=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${r}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits)};function d(o){const i=document.querySelector(".gallery"),s=o.map(({webformatURL:r,largeImageURL:e,tags:t,likes:l,views:m,comments:u,downloads:g})=>`
    <li class="gallery-item">
    <a href="${e}">
    <img class="gallery-image" src="${r}", alt="${t}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${l}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${m}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${u}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${g}</p>
        </li>
    </ul>
    </li>
    `).join("");i.innerHTML=s}const f=new h(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",L);function L(o){o.preventDefault(),n.innerHTML="";let i=o.target.elements.name;const s=i.value.trim();if(!s){a.show({title:"",iconUrl:`${errorImage}`,backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}c.style.display="inline-block",s(p).then(r=>{r.length===0&&a.show({title:"",iconUrl:`${errorImage}`,backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.insertAdjacentHTML("beforeend",d(r)),f.refresh(),i.value="",c.style.display="none"}).catch(r=>console.log(r))}
//# sourceMappingURL=index.js.map
