
// const button = document.getElementById('myButton');
// button.onclick = myFunction;

// function myFunction() {
//   alert("Working!");
// }
var index=0;
var sec=30;
var data=[
    {
        title:"Avengers 2",
        releaseDate:"2016",
        director:"Joss Whedon",
        boxOffice:"200 million",
        image:"./assets./images/avengers.jpg"
    },

    {
        title:"Ice Age",
        releaseDate:"2022",
        director:"John C.Donkin",
        boxOffice:"70 million",
        image:"./assets./images/iceAge.jpg"
    },

    {
        title:"Wanted",
        releaseDate:"2008",
        director:"Timur Bekmambetov",
        boxOffice:"30 million",
        image:"./assets/images/wanted.jpg"
    },

    {
        title:"Kill Bill",
        releaseDate:"2007",
        director:"Quentin Tarantino",
        boxOffice:"100 million",
        image:"./assets./images/killBill.jpg"
    },

    {
        title:"Drive",
        releaseDate:"2011",
        director:"Nicolas Winding Refn",
        boxOffice:"50 million",
        image:"./assets./images/drive.jpg"
    },
    
]


var titles=document.getElementsByClassName("card-title");
var director=document.getElementsByClassName("dir");
var release=document.getElementsByClassName("rel");
var images=document.getElementsByTagName("img");
var boxOffice=document.getElementsByClassName("fgr");
console.log(titles.length);


function carousel(){
    for(var i=0;i<titles.length;i++){
        if(index>4){
            index=0;
        }
        if(index===-1){
            index=4;
        }
        if(index===-2){
            index=3;
        }
        titles[i].textContent=data[index].title;
        boxOffice[i].textContent=data[index].boxOffice;
        director[i].textContent=data[index].director;
        release[i].textContent=data[index].releaseDate;
        images[i].setAttribute("src",data[index].image);
        index++;
    }
}

carousel();

function reset(){
    index=index-2;
}

function time(){
    let timer=setInterval(function(){
        console.log(index)
        reset();
        carousel();
        sec=sec-5;
        if(sec===0){
            clearInterval(timer);
        }
    },5000)

}

let jumbotron=document.getElementById("jumbo");

jumbotron.addEventListener("click",time);

