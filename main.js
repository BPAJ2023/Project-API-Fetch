const form = document.querySelector('form');
const numUser = form.elements.numUser;
const gender = form.elements.gender;


const url = `https://randomuser.me/api/?results=${numUser}&gender=(${gender} === 'both ? "female,male" : ${gender}')`;
fetch(url)
    .then(res=>res)
    .then(res=>{
        res.json;
        console.log(res)
    })
    .catch(err=>err)

form.addEventListener('submit', ()=>{
    console.log(numUser,gender)
});