const sort =document.querySelector('.sort');
const sort2 =document.querySelector('.sort2');
const addbut = document.querySelector('.add');
const input = document.querySelector('.list');
const typex = document.querySelector('.typenew');
let listtxt =document.querySelectorAll('.list-text');
let del = document.querySelector('.x2');
let xr = document.querySelector('.x');
let text=document.querySelector('.type');
new Sortable(text);
function changebut() {
sort.style.display = 'none';
sort2.style.display = 'flex';
}
sort.addEventListener('click',changebut);
function changebut2() {
    sort.style.display = 'flex';
    sort2.style.display = 'none';
    }
sort2.addEventListener('click',changebut2);
function add() {

     let p=document.createElement("p")
     p.innerHTML = '<input class="list-text" type="text" ><button class="x2"><img src="./images/x.svg" class="x-image" alt="Not found" onmouseover=this.src="./images/x2.svg" class="x2-image" alt="Not found" onmouseout=this.src="./images/x.svg" alt="Not found"></button>';
     p.className = "type typenew";
    input.appendChild(p);
    del = document.querySelectorAll('.x2');  
    removeFunc();
}    
addbut.addEventListener('click',add);
function removeFunc() {
        del.forEach((item) => {
            item.addEventListener('click', (event)=> {
            event.target.parentElement.parentElement.remove();
        });
});
}
xr.onclick = function() {

    document.querySelector(".input1").value = "";
    document.querySelector(".input1").readOnly=false;
  }
input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        input.scrollBy(0,10000);
         listtxt =document.querySelectorAll('.list-text');
        listtxt.forEach((item)=>{
       item.readOnly=true;
})
    }});
let sortarr=[...document.querySelectorAll('.type')];
function sortbyin(){
sortarr=[...document.querySelectorAll('.type')].sort((a, b) => {
    if (a.innerText < b.innerText) {
      return -1;
    }
    if (a.innerText > b.innerText) {
      return 1;
    }
  
    return 0;
  });}
sort.addEventListener('click', () => {
    sortarr.forEach(elem => input.append(elem));
});
