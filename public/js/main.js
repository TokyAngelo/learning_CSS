// const searchButton = document.querySelector('.searchButton');
// const searchArea = document.querySelector('.searchArea');
// const searchResult = document.querySelector(".searchResult");

async function searchFilter(){
    let APIurl = "http://127.0.0.1:5500/public/js/api.json";
    const result = await fetch(`${APIurl}`);
    const data = await result.json();
    showResult(data);
}
searchFilter();


function showResult(d){
    console.log(d.results);
}