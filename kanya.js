const apiKanye =() =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(kanye => kaneyeQ(kanye))
}

const kaneyeQ = data =>{
    const ptag=document.getElementById('ptag');
    ptag.innerText =data.quote
}