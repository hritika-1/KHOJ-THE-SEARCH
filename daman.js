const stories = [
    {n:1, cat:"culture", title:"Portuguese-Gujarati Fusion Culture", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UoK4TnSDP8vp_nraNqdccN4JNEhRDxYOrkS9pW0Rvg&s=10", desc:"The local culture is a unique blend of centuries of Portuguese colonial rule and surrounding Gujarati traditions. Traditional architecture, bilingual communities, and distinct social customs offer a fascinating window into India’s colonial maritime history."},
    {n:2, cat:"culture", title:"Fishing Village Heritage", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-GWhco5UVLX10vk1wVGJR_W5MtWKdtzDSJBGEF2-1g&s=10", desc:"The fishing communities of Diu (especially at Vanakbara) and Daman preserve a way of life centered around the Arabian Sea. Their colorful boats, bustling morning fish markets, and maritime traditions form the heartbeat of the region."},
    {n:3, cat:"culture", title:"East Indian and Christian Heritage Communities", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfh8atANeM8KBRebHK_vGLzmxGWgWNfvPQVh6ZRxqf-w&s=10", desc:"Generations of families carrying Portuguese surnames maintain unique cultural practices, traditional attire for weddings, and community celebrations that are distinct from mainland Gujarat."},
    {n:4, cat:"culture", title:"Coastal Gujarati Sub-Culture", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwSR6nLiGltmmtIvtJJBlRo0fJXKNGn_2XtEIwT66KA&s=10", desc:"The mainland communities preserve traditional Gujarati folk arts, language, and cuisine, heavily influenced by maritime trade and proximity to Maharashtra and Gujarat."},
    {n:5, cat:"monuments", title:"Diu Fort", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUTr0Sp8JoDf_bXCxN2JfZAQ3iXZ__RVFO_yjxQbPKw&s=10", desc:" Built by the Portuguese in the 16th century, Diu Fort is a massive seaside fortress perched on the tip of the island. It features a sweeping wall of cannons, a historic lighthouse, and dramatic views of the crashing waves of the Arabian Sea."},
    {n:6, cat:"monuments", title:"Moti Daman Fort & Church of Bom Jesus", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAB14kRZYkjyChZ6oc9np5rS7uqOU5t_O1wabTOhbDfA&s=10", desc:"Moti Daman Fort encloses an old colonial township complete with government buildings, cobbled streets, and the magnificent Church of Bom Jesus, known for its intricate woodcarvings and altar."},
    {n:7, cat:"monuments", title:"Fort of St. Jerome (Nani Daman Fort)", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewJTVTUorY_ubspkXsHwDcSGcdrheQN-ZotIoTb3Pdw&s=10", desc:"Located in Nani Daman along the Daman Ganga river, this fort features an imposing gateway with a massive statue of St. Jerome and houses the charming Church of Our Lady of the Sea inside its walls."},
    {n:8, cat:"monuments", title:"Naida Caves", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuND3yYLt30YilgpZELcOwEMnjFwxOBtJAO9KIwl61A&s=10", desc:"A network of interconnected subterranean rock-cut caves near Diu Fort, formed partly by natural processes and partly by centuries of stone quarrying during the Portuguese era. Their dramatic light and shadow play make them a visual marvel."},
    {n:9, cat:"arts", title:"Mando and Verdigao Dance Traditions", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OnbJHYFOLhZ_VzIvpMyvodoZUbN4RqHhvaVIVfItZw&s=10", desc:"Mando is a traditional song-and-dance form born from the fusion of Goan-Portuguese and local coastal elements. Accompanied by western instruments like the violin and guitar, it tells stories of love and longing."},
    {n:10, cat:"arts", title:"Sea and Sailor Folklore", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6nedDwO7MEPPzhu5fdw4IPGHEulG38094Wx_6GR3Nw&s=10", desc:" Oral traditions are filled with legends of Portuguese galleons, fierce sea battles, shipwrecks off the treacherous shoals, and local saints who protected fishermen from monsoonal tempests."},
    {n:11, cat:"arts", title:"Traditional Shell and Whale Bone Craft", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNyVGY68in1xOROxw3cb1RxTlOLwMhAI8NWKkvrgYKA&s=10", desc:"Local artisans have historically crafted decorative items, trinkets, and household objects using seashells and marine elements collected from the shore."},
    {n:12,cat:"arts",title:"Folk Music of the Koli and Fisherfolk Communities", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7lBJEz91vh9_XVYFIJsqXZFuaM43Qs649GXuYsCKZg&s=10", desc:"Traditional work songs sung by local fishers during boat launches and hauls reflect their deep relationship with the ocean tides and seasonal changes."},
    {n:13,cat:"festivals",title:"Diu Festival (FestDeDiu)", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tQbw8tWoFo7HEp60kpR55CIFsO-AudcnnWzPOjSFRA&s=10", desc:"An extravaganza celebrating music, art, food, and culture across Diu’s beaches and historical sites. It brings together national artists, beach camps, and local cultural performances."},
    {n:14,cat:"festivals",title:"Feast of St. Paul", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDL-W8xyh9uRW7qbkBacKKW-ggna-q0NU_f4akZy1hRQ&s=10", desc:"Celebrated with grand religious processions, traditional hymns, and community fairs at historic churches like St. Paul’s in Diu and Bom Jesus in Daman."},
    {n:15,cat:"festivals",title:"Nariyal Poornima", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tx9AaE01rI0ReQg6SRYyR1htoLDKGblYyL4kOa4JcQ&s=10", desc:"Marked widely by the fishing community at the start of the fishing season after the monsoons, where coconuts are offered to the sea gods to ensure safe voyages and bountiful catches."},
    {n:16,cat:"festivals",title:"Garba and Navratri Celebrations", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUb_vyNgRoDOoFmgt6qHj161kjweG4uERPu4i__pcNQ&s=10", desc:"Blending Gujarati traditions with local coastal flair, community grounds come alive with traditional dances, music, and colorful traditional attire during the autumn festival season."},
    {n:17,cat:"crafts",title:"Intricate Shell Work and Souvenirs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDReg6otu_uQhvGLE18p5RRWa87pmyt4HAJIzr7XhQZQ&s=10", desc:"Local markets, particularly near Jampore and Nagoa beaches, feature intricate decorative items, lampshades, and mirrors framed with polished seashells."},
    {n:18,cat:"crafts",title:"Bamboo and Cane Utility Items", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhT1zr2UCJV6KPBnHC41GZTZmARvgvTE-wfYdkt_-hA&s=10", desc:"Crafted by artisans using locally sourced materials, these include traditional fishing baskets, mats, and small furniture pieces reflecting practical coastal utility."},
    {n:19,cat:"crafts",title:"Traditional Portuguese-Style Woodcarving", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR2EI3p55tipTj-oUU3RPseZ2PyBEzu2g_Bmt_dACpg&s=10", desc:"Seen in the ornate altars of local churches and old colonial homes, traditional carpenters maintain skills in detailed wood ornamentation."},
    {n:20,cat:"crafts",title:"Hand-Embroidered Textiles and Lace Work", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5YX0i56x1fKk6aAj8mqpsQfMoxeQOXH28GBjYkHmT82LzwHeb1GM1qE&s=10", desc:"Influenced by European lacemaking traditions introduced during colonial times, local textiles occasionally feature delicate needlework and embroidery."},
    {n:21,cat:"food",title:"Prawn Curry and Rice", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoD3mWbCXb6-FdGHa4ypEqpVMqZn7O6iYVS5yxzvqDg&s=10", desc:"A quintessential coastal dish featuring fresh prawns cooked in a rich, tangy coconut-and-spice gravy, heavily influenced by both Goan-Portuguese and Gujarati flavors."},
    {n:22,cat:"food",title:"Fish Xacuti", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYl1qb4B7NBjJE7IgJt-2wbn2dI2o70rAlE2noy4YiDQ&s=10", desc:"A legacy of Portuguese culinary contact, these spicy, vinegar-forward meat and fish dishes bring bold, complex flavors distinct from typical Gujarati vegetarian fare."},
    {n:23,cat:"food",title:"Ubadiyo", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QZepnlTNEU5bXYhELSFFOLioON9Cnqa9gYvlTuiPwQ&s=10", desc:" A traditional winter delicacy of Diu consisting of a medley of seasonal root vegetables, beans, and herbs baked in a sealed earthen pot buried underground over hot coals."},
    {n:24,cat:"food",title:"Toddy and Local Fermented Beverages", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwclEtbudSppCAbi5_MlcIOBr6xUWAduc6sawZdil1bQ&s=10", desc:"A traditional coconut or palm-sap beverage tied closely to local social gatherings and the traditional lifestyle of coastal laborers and farmers."},
];

const labels={culture:"Regional Cultures",monuments:"Historic Monuments & Temples",arts:"Folklore, Art & Literature",festivals:"Festivals",crafts:"Handicrafts & Textiles",food:"Traditional Cuisine"};
const categoryImages={
  culture:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
  monuments:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
  arts:"https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=900&q=80",
  festivals:"https://images.unsplash.com/photo-1604608672516-f1b9c1b1a0a5?auto=format&fit=crop&w=900&q=80",
  crafts:"https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
  food:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
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
  document.querySelectorAll(".story").forEach(el=>el.addEventListener("click",()=>openStory(+el.dataset.id)));
}
function closeModal(){document.getElementById("modal").classList.remove("open");document.getElementById("modal").setAttribute("aria-hidden","true")}
search.addEventListener("input",render); filter.addEventListener("change",render);
document.querySelectorAll(".cat-card").forEach(btn=>btn.addEventListener("click",()=>{
  filter.value=btn.dataset.cat; document.getElementById("discover").scrollIntoView({behavior:"smooth"}); render();
}));
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();