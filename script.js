const line = document.getElementById('progress');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const circle = document.getElementsByTagName('li');

// Grabing the Circles
const circles=Array.from(circle);
// Converting HTML collection into Array


let currentvalue = 1;
circles[currentvalue-1].classList.add('active');

next.addEventListener('click',()=>{
    currentvalue++;
    if(currentvalue>circles.length){
        currentvalue = circles.length;
    }
    // console.log(currentvalue);
    update();
})

prev.addEventListener('click',()=>{
    currentvalue--;
    if(currentvalue<1){
        currentvalue = 1;
    }
    // console.log(currentvalue);
    update();
})

function update(){

    circles[currentvalue-1].classList.add('active');
    
    circles.forEach((element,idx)=>{
       if(currentvalue > idx){
        element.classList.add('active');

       }
       else{
         element.classList.remove('active');   
       }

    })

    const actives = document.getElementsByClassName('active');
    line.style.width = (actives.length-1)/(circles.length-1) * 100 + "%";
    // This only work if line is grabbed via a id , not class.....I know you got it


    // Handling Disabled
    if(currentvalue == 1){
        prev.disabled = true;
    }
    else if(currentvalue == circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }

}

