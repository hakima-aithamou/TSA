
function filtrer(categorie,bouton){
 document.querySelectorAll(".filtres button").forEach(btn=>btn.classList.remove("selectionne"));
 bouton.classList.add("selectionne");
 document.querySelectorAll(".image-galerie").forEach(image=>{
   image.style.display=(categorie==="toutes"||image.classList.contains(categorie))?"block":"none";
 });
}
function agrandir(image){document.getElementById("grandeImage").src=image.src;document.getElementById("modal").style.display="flex";}
function fermer(){document.getElementById("modal").style.display="none";}
function fermerModal(event){if(event.target.id==="modal")fermer();}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.getElementById("modal"))fermer();});
document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".menu a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("actif");});
});
