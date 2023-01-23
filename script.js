let newDiv=document.createElement("div");
newDiv.setAttribute("class", "container")
newDiv.setAttribute("class", "newDiv")
let newNav = document.createElement("nav");
newNav.setAttribute("class", "navbar");
newNav.setAttribute("class", "head");
let heading=document.createElement("h4")
heading.innerHTML=`CRAFT BEER HERE`;
let itag=document.createElement("i")
itag.setAttribute("class","fa-sharp fa-solid fa-champagne-glasses")
let itag1=document.createElement("i")
itag1.setAttribute("class","fa-sharp fa-solid fa-champagne-glasses")

let newDiv1=document.createElement("div");
newDiv1.setAttribute("class", "container");
let newDiv2=document.createElement("div");
newDiv2.setAttribute("class", "row");
let newDiv2A=document.createElement("div");
newDiv2A.setAttribute("class","col-md-4");
let image=document.createElement("img");
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFU1nqqKUs66CuA6GyFxk1Xv_n4BqL3BKqRLKo_L-3qKRAG0hWV9rlReFZhnEetACSLk&usqp=CAU")
let newDiv2B=document.createElement("div");
newDiv2B.setAttribute("class","col-md-4");
newDiv2B.setAttribute("id","data")
let newDiv2C=document.createElement("div");
newDiv2C.setAttribute("class","col-md-4");
newDiv2C.setAttribute("id","image-details");

let inputtag=document.createElement("input");
inputtag.setAttribute("type", "search")
inputtag.setAttribute("id","txt")
inputtag.setAttribute("placeholder","Enter the number")
let newBut = document.createElement("button");
newBut.setAttribute("class", "button");
newBut.setAttribute("type", "search");
newBut.setAttribute("id", "find");
let itag2 = document.createElement("i");
itag2.setAttribute("class", "fa-solid fa-magnifying-glass");


document.body.append(newDiv);
newDiv.append(newNav)
newNav.append(itag)
newNav.append(heading,itag1)
newDiv.append(newDiv1);
newDiv1.append(newDiv2);
newDiv2.append(newDiv2A,newDiv2B,newDiv2C)
newDiv2A.append(image)

newDiv2B.append(inputtag,newBut)
newBut.append(itag2)


let beerdata = new Promise((resolve, reject) => {
    let beerInput = document.getElementById("find");
    beerInput.addEventListener("click",()=>{
        console.log(txt.value);
let request=new XMLHttpRequest();
request.open(`GET`,`https://api.punkapi.com/v2/beers/${txt.value}`)
request.send()
request.onload=function(){
    if(request.status==200){
let data=JSON.parse(request.response);
console.log(data)
resolve(data)
    }
    else{
        reject("325 datas only display")
    }
}
    })
})
 beerdata.then((res)=>{
     console.log(res)
 newDiv2B.innerHTML =`
 <p><b>Name : ${res[0].name}</b></p>
 <p><b>Tagline : ${res[0].tagline}</b></p>
 <p><b>Description : ${res[0].description}</b></p>
 <p><b>Food Pairing : ${res[0].food_pairing}</b></p>
 <p><b>Brewers Tips : ${res[0].brewers_tips}</b></p>
  `
  newDiv2C.innerHTML=`
  <div class="card">
  <img src=${res[0].image_url}>
  </div>`
 })
.catch((err)=>{
    newDiv2B.innerHTML =`<p><b>${err}</b></b>`
})






