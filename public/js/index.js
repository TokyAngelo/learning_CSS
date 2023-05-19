const dropIt = document.querySelector(".dropIt");
const dropDownMenu = document.querySelector("#dropDownMenu");
const links = document.querySelectorAll('a');
const headings = document.querySelectorAll('.headings h1');
const heading1 =  document.querySelector('.heading1');
const heading2 =  document.querySelector('.heading2');
const heading3 =  document.querySelector('.heading3');
const buttons =   document.querySelectorAll('button');

const prev =  document.querySelector('.prevew');
const restore =  document.querySelector('.center');
const next   =  document.querySelector('.next');

document.addEventListener('click', function(){
    this.querySelector('.navList').style.left="0"
    this.querySelector('.navList').style.transition="1s"
    this.querySelector('.navList').style.positon="fixed"
})
// Création d'une fonction qui sera chargée de cacher les elements headings inactifs
function inactiveHeading(elem){
    return elem.setAttribute('class', 'inactiveHeading');
}
inactiveHeading(heading1);
inactiveHeading(heading3); 

prev.addEventListener('click', function(){
    inactiveHeading(heading2); 
    inactiveHeading(heading3);
    heading1.removeAttribute('class', 'inactiveHeading');
})
restore.addEventListener('click', function(){
    inactiveHeading(heading1); 
    inactiveHeading(heading3);
    heading2.removeAttribute('class', 'inactiveHeading');

})
next.addEventListener('click', function(){
    inactiveHeading(heading1); 
    inactiveHeading(heading2);
    heading3.removeAttribute('class', 'inactiveHeading');

})


for(const link of links){
    link.addEventListener('click', function(e){
        e.preventDefault();
    })
}

const tabStarter = document.querySelector('.tabStarter');
const FeedBack = document.querySelector('.repComs');

const clientReports = document.querySelectorAll('.clientsReports');

tabStarter.addEventListener("click", function(){
    for(const Rep of clientReports){
        if (Rep.style.height!=='auto') {
            Rep.style.height='auto'
            tabStarter.textContent ="Réduire";
        } else {
            Rep.style.height='0'
            tabStarter.textContent ="Voir plus"
        }
    }
});


const comentStarters = document.querySelectorAll('#comStr');

var reactSums = document.querySelectorAll('.reactSum');
var comSums = document.querySelectorAll('.comSum');
let replies = document.querySelectorAll('.replay');
const commentArea = document.createElement('input');
    commentArea.type= "text";
    commentArea.placeholder="Répondre à ce commentaire";
    commentArea.setAttribute('class','comInput');
    for(const comentStarter of comentStarters){
        comentStarter.addEventListener('click', function(){
            console.log(commentArea);
            this.parentElement.after(commentArea);
            let sendCom = document.createElement('button');
            sendCom.textContent='Répondre';
            sendCom.setAttribute('class','sendCom');
            commentArea.addEventListener('input', function(){
                if (this.value.length>5) {
                    this.after(sendCom);
                    sendCom.addEventListener('click',function(){              
                        this.parentElement.removeChild(this);
                    })
                } else {
                    return null;
                }
            })
        })
    }
