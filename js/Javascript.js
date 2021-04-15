let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//Contador de jogadas

let player1 = 0;
let player2 = 0;

// adcionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++) {

	//quando alguém clicar na caixa
	boxes[i].addEventListener("click", () => {

		let element = CheckElement(player1,player2);

		CheckElement();
	//Verificação de elemento X ou O na div boxes, se não houver aceita computa jogada
		if(boxes[i].childNodes.length == 0){
			let cloneElement = element.cloneNode(true);

			console.log(cloneElement);

			boxes[i].appendChild(cloneElement);

			//Computar jogada
			if(player1 == player2) {
				player1++;
			}else{
				player2++;
			}
		}
	});
}

function CheckElement(player1, player2){
	if(player1 == player2) {
		// x
		el = x;
	} else {
		// o
		el = o;
	}

	return el;
}
