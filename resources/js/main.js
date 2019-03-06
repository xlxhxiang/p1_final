const links = ["https://ajoseph3993.github.io/project_1/", "https://samvas19.github.io/cyoa/","https://macero121.github.io/sandy-road/", "https://yungchuansu.github.io/game/", "https://samlui64.github.io/ADgame/","https://karinazalac.github.io/Project1/","https://maxwell-lohr.github.io/Tome-interactive-game/", "https://a-g00n.github.io/cyoagame/","https://puppy888.github.io/CYOA/","https://seanh796.github.io/The-diner-next-door/","https://sarinaca.github.io/Inu-Game/","https://noahcastro.github.io/CollegeCrush/","https://github.com/kennykngo/Game_1","https://laurenp13.github.io/project1/","https://aleeromero.github.io/Project-1/"];
var generated = false;

function randomGame(){

	if (!generated) {
		document.getElementById("title").style.display = "none";


		for (var i = 0; i < 3; i++) {

			let randomItem = links[Math.floor(Math.random()*links.length)];
			let element = document.createElement("P");

			let t = document.createTextNode(randomItem);
			element.appendChild(t);  
			document.getElementById("links_container").appendChild(element); 

		}
		generated = true;
	}


}