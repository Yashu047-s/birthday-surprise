
/* ================= QUIZ ================= */

let questions = [
{ 
q: "naav first meet aagid elli?",
options: ["College", "Park", "Online"],
answer: 0
},
{
q: "nange nin andre nin prakara yak ista?",
options: ["nodak chanag idya anta 😄", "nin nagu inda", "ninge gottirbeku"],
answer: 2
},
{
q: "Our favorite memory place?",
options: ["Malleshwaram", "park", "College"],
answer: 1
},
{
q: "nav yavaglu tinnak hogtidid biriyani hotel yavdu?",
options: ["Appu biriyani center", "Appu biriyani hotel", "punith biriyani","nang gotilla"],
answer: 0
}
]

let currentQ = 0

function loadQuestion(){

document.getElementById("question").innerText = questions[currentQ].q

document.getElementById("opt1").innerText = questions[currentQ].options[0]
document.getElementById("opt2").innerText = questions[currentQ].options[1]
document.getElementById("opt3").innerText = questions[currentQ].options[2]

}

function checkAnswer(i){

if(i === questions[currentQ].answer){
alert("parvagilve chur improve aagidya ❤️")
}else{
alert("ning yav range ge marvu andre😅")
}

currentQ++

if(currentQ < questions.length){
loadQuestion()
}else{
window.location="gift.html"
}

}


/* ================= GIFT ================= */

function yes(){
window.location="memories.html"
}

function no(){

document.getElementById("noMsg").style.display="block"

} // removes NO button




/* ================= MEMORIES ================= */

let photos=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo4.jpg",
"images/photo3.jpg",
"images/photo5.jpg",
"images/photo6.jpg"
]

let i=0

function startMemories(){

let music = document.getElementById("music")

music.currentTime = 12   // start from 15 seconds

music.play()

showPhotos()

}
function showPhotos(){

let img=document.getElementById("memoryImage")

img.src=photos[i]

img.style.opacity=1

setTimeout(()=>{
img.style.opacity=0
},2500)

i++

if(i<photos.length){

setTimeout(showPhotos,3000)

}else{

setTimeout(()=>{
document.getElementById("music").pause()
document.getElementById("nextBox").style.display="block"
},3000)

}

}


/* ================= FINAL NAV ================= */

function goFinal(){
window.location="final.html"
}

function noNext(btn){

alert('No option again? 😏 Not allowed! Click Yes ❤️')

btn.style.display="none"

}
function createHearts(){

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

/* mix of soft hearts */
let hearts=["💗"]
heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)]

heart.style.left=Math.random()*100+"vw"

/* smaller & softer */
heart.style.fontSize=(12+Math.random()*18)+"px"

/* slower animation */
heart.style.animationDuration=(8+Math.random()*5)+"s"

document.getElementById("hearts-container").appendChild(heart)

setTimeout(()=>{
heart.remove()
},12000)

},500)  // slower creation

}

/* ===== VIDEO + LYRICS ===== */

let lyrics = [
"Ohh With you!!!!!" ,   
"My Life is so much better🤍",
"Because i know you there For me whatever>>> 💖",

"No Matter what we doo ?? As always I'm with you💕",

"I forget about the world🤎",
"and All the stress I hold~~"
]

let line = 0

function showLyrics(){

if(line < lyrics.length){

document.getElementById("lyrics").innerText = lyrics[line]

line++

setTimeout(showLyrics,3000)  // change timing here

}

}

/* start lyrics when video starts */

let video = document.getElementById("finalVideo")

if(video){

video.onplay = function(){
showLyrics()
}

/* after video ends */

video.onended = function(){

document.getElementById("finalMsg").style.display="block"

typeMessage()  // start typing effect

}

}

/* ===== FINAL MESSAGE TYPING EFFECT ===== */

let message = "YOU\n  ARE \n  MY \n EVERYTHING 💕\n\n Once Again Happy Birthday Putta 🤎"

let indexMsg = 0

function typeMessage(){

if(indexMsg < message.length){

document.getElementById("finalText").innerText += message.charAt(indexMsg)

indexMsg++

setTimeout(typeMessage,80)  // speed (increase for slower)

}

}