

// im1=https://www.themoviedb.org/t/p/w220_and_h330_face/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg
// im2=https://www.themoviedb.org/t/p/w220_and_h330_face/ews3l3v7JYLtBS5ansZrXsXLMzl.jpg
//im3=https://www.themoviedb.org/t/p/w220_and_h330_face/qJRB789ceLryrLvOKrZqLKr2CGf.jpg
//im4=https://www.themoviedb.org/t/p/w220_and_h330_face/c80mxgOPvSWJBcgWoI5bf3et5Ws.jpg
//im5=https://www.themoviedb.org/t/p/w220_and_h330_face/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg

//let url='/discover/movie?sort_by=popularity.desc';
// imge path : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
// https://api.themoviedb.org/3/movie/550?api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9


// let API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9';

// let IMAGE_PATH ="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

// let SEARCH_API='https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=6b6dbec91e2a8a5ac8ce63fb0b5468d9';


// let main=document.getElementById("movie");
// let form=document.getElementById("form");

// async function getMovie(url)
// {
//   let res= await fetch(url);

//   let data=await res.json();

//   console.log(data.results)
// }

// getMovie(API_URL)

//    function GetValu(e){
//     e.preventDefault();

//     let searchVal=form.value;

//     if(searchVal && searchVal !=="")
//     {
//  getMovie(SEARCH_API+searchVal)
//  searchVal='';
//     }
//   else
//   {
//     window.location.reload();
//   }
// }

// // display data

// function displayData(movie)
// {
//    main.innerHTML='' ;
//    movie.forEach(function(el){

//    let (tirle, poster_path,overview)=movie;

//    let MovieBox=document.createElement("div");
//    MovieBox.setAttribute("class", "MoviBox");

//    })
// }

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

// form.addEventListener("submit", (el)=>{
//     el.preventDefault();

//     let searchVal = search.value;

//     if (searchVal && searchVal !== "") {
//         GetMovie(SEARCH_API + searchVal)
//         searchVal = '';
//     }
//     else {
//         window.location.reload();
//     }
// })

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
