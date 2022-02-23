const rendomuser =() =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(user => userPepole(user) )
}
rendomuser();


const userPepole = data =>{
    const buddies =data.results;
    const userDiv =document.getElementById('userDiv');
    for(const buddie of buddies){
        console.log(buddie);
        const p =document.createElement('p');
        p.innerHTML =`Name : ${buddie.name.title} ${buddie.name.first} ${buddie.name.last} Location : ${buddie.location.city}`;
        userDiv.appendChild(p);
    }
}