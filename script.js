const btn=document.getElementById("button");
const randomcolor=()=> {
    let var1="0123456789ABCDEF";
    let cons ="#";
    for(let i=0; i<6; i++){
       cons = cons+var1[Math.floor(Math.random()*16)];
       console.log(cons);
    }
    return cons;
};
console.log(randomcolor());
function changerandomcolor(){
    document.body.style.backgroundColor=randomcolor();

}
btn.addEventListener("click",changerandomcolor);