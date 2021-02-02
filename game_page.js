var p1name= localStorage.getItem("p1")
var p2name= localStorage.getItem("p2")
var p1score= 0
var p2score= 0
document.getElementById("p1name").innerHTML=p1name+" : "
document.getElementById("p2name").innerHTML=p2name+" : "
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("q_turn").innerHTML="question turn- "+p1name
document.getElementById("a_turn").innerHTML="answer turn- "+p2name

function send() {
  var word=  document.getElementById("wordinput").value
   qword=word.toLowerCase()
  console.log(qword)

  letter1=qword.charAt(1)
  console.log(letter1)
  replace1=qword.replace(letter1," _ ")
  console.log(replace1)

  letter2=qword.charAt(qword.length-1)
  console.log(letter2)
  replace2=replace1.replace(letter2," _ ")
  console.log(replace2)

  letter3=qword.charAt(qword.length/2)
  console.log(letter3)
  replace3=replace2.replace(letter3," _ ")  
  console.log(replace3)

  var question_tag= `<h4>Q.${replace3}</h4> <br>`
var answer_tag= `Answer: <input type="text"  id="answer"> <br> <br>`
var button_tag= `<button onclick="check()" class="btn btn-primary">Check</button>`

  document.getElementById("output").innerHTML=question_tag+answer_tag+button_tag
document.getElementById("wordinput").value=""

}

var q_turn= "player1"
var a_turn= "player2"

function check() {
  getword=document.getElementById("answer").value
  answer = getword.toLowerCase()
  if (answer==qword) {
    if (a_turn=="player1") {
      p1score=p1score+1
      document.getElementById("p1score").innerHTML=p1score
    }
    else{
      p2score=p2score+1
      document.getElementById("p2score").innerHTML=p2score
    }
  }

  if (q_turn=="player1") {
    q_turn="player2"
    document.getElementById("q_turn").innerHTML="Question turn-"+p2name
    
  }
  else{
    q_turn="player1"
    document.getElementById("q_turn").innerHTML="Question turn-"+p1name
  }

  if (a_turn=="player1") {
    a_turn="player2"
    document.getElementById("a_turn").innerHTML="Answer turn-"+p2name
  }

  else{
    a_turn="player1"
    document.getElementById("a_turn").innerHTML="Answer turn-"+p1name
  }
  document.getElementById("answer").value=""
}


