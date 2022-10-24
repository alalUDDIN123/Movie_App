
let API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9&page=1';

let IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

//
let SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9&query="';

let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");

GetMovie(API_URL)

async function GetMovie(url) {
    let res = await fetch(url);
    let data = await res.json();
  displayData(data.results)
  console.log(data.results)
   if(data.results=="")
    {
    window.location.href="./500/500.html";
       
    }
       
   
   
}

function ShowData()
{
    let searchVal = search.value;

    if (searchVal && searchVal !== "") {
        GetMovie(SEARCH_API + searchVal)
        searchVal = '';                    
    }
    else {
        window.location.reload();   // If there are no any input automatically return to main page
    } 
}

function displayData(movies)
{
   main.innerHTML='' ;
   movies.forEach((movies)=>{

   let { title, poster_path, vote_average}=movies;
   let MovieBox=document.createElement("div");
   MovieBox.classList.add("movie");
   MovieBox.innerHTML=`
   <img src="${IMAGE_PATH + poster_path}" alt="${title}"/>
   <div class='movie-info'>
   <h3>${title}</h3>
   <span class="${getClassesByRating(vote_average)}">${vote_average} </span>
   </div>
   </div>
   `
   main.appendChild(MovieBox);

   })
}

function getClassesByRating(rating)
{
    if(rating>=8)
    {
        return 'green'
    }
    else if(rating>=5)
    {
   return 'orange'
    }
    else
    {
        return 'red'
    }
}
