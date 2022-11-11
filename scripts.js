const sort =document.querySelector('.sort');
const sort2 =document.querySelector('.sort2');
const addbut = document.querySelector('.add');
const input = document.querySelector('.list');
const typex = document.querySelector('.typenew');
let del = document.querySelector('.x2');

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
