const country =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(rep =>rep.json())
    .then(data => showCountry(data))
}
country();

const showCountry = countryData =>{
    const countryDiv =document.getElementById('countryDiv');
    countryData.forEach(country => {
        // console.log(country);
        const div =document.createElement('div')
        div.classList.add('coun')
        div.innerHTML =`
            ${country.name.common},
            ${country.capital}
            <button onclick="lodeCountryByname('${country.name.common}')">Details</Button>
             `;
        
        countryDiv.appendChild(div)

        
    });
}
const lodeCountryByname = name =>{
    const url =`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetails(data[0]))
}
const countryDetails = country =>{
    // console.log(country);
    const countryh=document.getElementById('country');
    countryh.innerHTML =`
    <h4>${country.name.common}</h4>
    <img width="200px" src="${country.flags.png}" >
    `
}