const li = document.querySelector('ul');
const a = document.querySelectorAll('a');
const red = location.href.split('/');
const ab = red[red.length-1];
const currentPage = () => {
    for(let i=0; i<a.length;i++)
    {
        const page = a[i].href.split('/');
        const pageMain = page[page.length-1];
     if(pageMain===ab){
         a[i].classList.add('active');
     }
    }
 };
 currentPage();
li.addEventListener('mouseenter', () => {
    // if (section.className ===  'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
    // section.classList.toggle('visible');
    li.classList.toggle('color');
});
li.addEventListener('mouseleave', () => {
    // if (section.className ===  'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
    // section.classList.toggle('visible');
    li.classList.toggle('color');
});
