function login() {
 p1name=document.getElementById("player1_name").value;
 p2name=document.getElementById("player2_name").value;
 
 localStorage.setItem("p1",p1name)
 localStorage.setItem("p2",p2name)

 window.location= "game_page.html"
}

