const sort =document.querySelector('.sort');
const sort2 =document.querySelector('.sort2');
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

