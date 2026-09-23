const stories = [
    {n:1, cat:"telangana", title:"Telangana", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB__Uv5H-LBl17iZIhLlTDSjujnWwjxZPCUVRRpJ76eg&s=10", href:"structure.html",  desc:"It is the a state in the southern part of India. It is known for its rich history, culture, and heritage. The state has a diverse range of attractions including forts, temples, and modern architectures.\n Why travel for it: Explore the unique blend of tradition and modernity in Telangana."},
    {n:2, cat:"arunachal", title:"Arunachal Pradesh", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUABktNjpNDTtOui-5hw2KbCA5Vs76zp84HE6PLmFB8Q&s=10", href:"arunachal.html", desc:"It is a state in the northeastern part of India. It is known for its stunning landscapes, diverse cultures, and rich biodiversity. The state offers a range of experiences from trekking in the mountains to exploring tribal cultures.\n Why travel for it: Discover the natural beauty and cultural richness of Arunachal Pradesh."},
    {n:3, cat:"chhattisgarh", title:"Chhattisgarh", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4arpPgPwdRUw8JDnNxEGvskP_TdaUlo3fohYI3mnOPg&s=10", href:"chhattisgarh.html", desc:"It is a state in the central part of India. It is known for its ancient temples, waterfalls, and tribal culture. The state offers a mix of historical sites and natural beauty.\n Why travel for it: Explore the rich heritage and scenic landscapes of Chhattisgarh."},
    {n:4, cat:"daman", title:"Daman and Diu", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy_HRRf3W8XKYCFg3Gnmu1qDkNstQhdHjCl4Vpmn-mw&s=10", href:"daman.html", desc:"It is a union territory on the western coast of India. It is known for its beaches, Portuguese heritage, and vibrant culture. The territory offers a relaxing coastal experience with historical sites and local cuisine.\n Why travel for it: Enjoy the serene beaches and explore the unique cultural heritage of Daman and Diu."},
];

const labels={telangana:"Telangana",arunachal:"Arunachal Pradesh",chhattisgarh:"Chhattisgarh",daman:"Daman and Diu",crafts:"Handicrafts & Textiles",food:"Traditional Cuisine"};
const categoryImages={
  telangana:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
  arunachal:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
  chhattisgarh:"https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=900&q=80",
  daman:"https://images.unsplash.com/photo-1604608672516-f1b9c1b1a0a5?auto=format&fit=crop&w=900&q=80",
};
const collection=document.getElementById("collection"),search=document.getElementById("search"),filter=document.getElementById("categoryFilter");

function openStory(id){
  const s=stories.find(x=>x.n===id);
  document.getElementById("modalNumber").textContent=String(s.n).padStart(2,"0");
  document.getElementById("modalCategory").textContent=labels[s.cat];
  document.getElementById("modalTitle").textContent=s.title;
  document.getElementById("modalDescription").textContent=s.desc;
  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
}
function render(){
  const q=search.value.toLowerCase().trim(), cat=filter.value;
  const result=stories.filter(s=>(cat==="all"||s.cat===cat)&&(!q||(s.title+" "+s.desc+" "+labels[s.cat]).toLowerCase().includes(q)));
  collection.innerHTML=result.length?result.map(s=>`
    <article class="story" data-id="${s.n}">
      <img class="story-image" src="${s.img}" alt="${s.title}" loading="lazy">
      <div><div class="story-number">${String(s.n).padStart(2,"0")}</div><div class="story-cat">${labels[s.cat]}</div></div>
      <div><h3>${s.title}</h3><p>${s.desc}</p></div><a class="story-arrow" target="_blank" rel="noopener" aria-label="Read source for ${s.title}">↗</a>
    </article>`).join(""):`<div class="empty">No stories found. Try another search.</div>`;
  document.querySelectorAll(".story").forEach(el=>el.addEventListener("click",()=>{
    const s=stories.find(x=>x.n===+el.dataset.id);
    if(s && s.href){ window.location.href = s.href; } else { openStory(+el.dataset.id); }
  }));
  }  
function closeModal(){document.getElementById("modal").classList.remove("open");document.getElementById("modal").setAttribute("aria-hidden","true")}
search.addEventListener("input",render); filter.addEventListener("change",render);
document.querySelectorAll(".cat-card").forEach(btn=>btn.addEventListener("click",()=>{
  filter.value=btn.dataset.cat; document.getElementById("discover").scrollIntoView({behavior:"smooth"}); render();
}));
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();