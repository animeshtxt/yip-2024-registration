const addStudBtn = document.querySelector("#add-stud-btn");
const stud1details = document.querySelector('.stud-1-details');
const stud2details = document.querySelector('.stud-2-details');
const stud3details = document.querySelector('.stud-3-details');
const removeStud2btn = document.querySelector('#remove-stud-2-btn');
const removeStud3btn = document.querySelector('#remove-stud-3-btn');

let stud1display = false;
let stud2display = false;
let stud3display = false;
let addStudBtnClickCount = 0;

addStudBtn.addEventListener('click', ()=> {
    if(stud2display == false){
        stud2details.style.display = "block";
        stud2display = true ;
        
    }
    else if (stud3display == false){
        stud3details.style.display = "block";
        stud3display = true ;
        
    }
    else if (stud2display==true && stud3display == true){
        alert("Maximum 3 students are allowed to participate.");
    }
});

removeStud2btn.addEventListener('click', () => {
    stud2details.style.display = 'none';
    stud2display = false;
})

removeStud3btn.addEventListener('click', () => {
    stud3details.style.display = 'none';
    stud3display = false;
})






