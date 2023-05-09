const getResult = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const genderInput = form.elements.gender;
    const genderData = genderInput.selectedOptions[0].getAttribute('name');
    const numUser = form.elements.numUser.value;
    const genderParam = genderData === 'both' ? 'female, male' : genderData;
    const url = `https://randomuser.me/api/?results=${numUser}&gender=${genderParam}`;
    
    
    fetch(url)
        .then(res => res.json())
        .then(data => addUserToPage(data.results))
        .catch(err => alert(err));

};


const addUserToPage = (data) => {
    const content = document.querySelector('.content');
    content.textContent = '';

    console.log(data);

    data.forEach(item=>{
        const userItem = document.createElement('div');    
        userItem.className = "content__item";    
        userItem.innerHTML = `    
        <img class="content__image" src= '${item.picture.medium}'>    
        <div class="content__txt">
        <span>${item.name.title}</span>
        <span>${item.name.first}</span>
        <span>${item.name.last}</span>
        </div>    
        `;
        content.appendChild(userItem);
})
};
document.querySelector('form').addEventListener('submit', getResult);