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
	
	//Verificação de elemento X ou O na div boxes, se não houver aceita e computa a jogada

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

		CheckWinCondition();

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

function CheckWinCondition() {

	let b1 = document.getElementById("block-1");
	let b2 = document.getElementById("block-2");
	let b3 = document.getElementById("block-3");
	let b4 = document.getElementById("block-4");
	let b5 = document.getElementById("block-5");
	let b6 = document.getElementById("block-6");
	let b7 = document.getElementById("block-7");
	let b8 = document.getElementById("block-8");
	let b9 = document.getElementById("block-9");
	let b1ClassChild,b2ClassChild,b3ClassChild,result,player;


	if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

		b1ClassChild = b1.childNodes[0].className;
		b2ClassChild = b2.childNodes[0].className;
		b3ClassChild = b3.childNodes[0].className;
		player = b1.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

		b1ClassChild = b4.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b6.childNodes[0].className;
		player = b4.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b7.childNodes[0].className;
		b2ClassChild = b8.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b7.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

		b1ClassChild = b1.childNodes[0].className;
		b2ClassChild = b4.childNodes[0].className;
		b3ClassChild = b7.childNodes[0].className;
		player = b1.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

		b1ClassChild = b2.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b8.childNodes[0].className;
		player = b2.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b3.childNodes[0].className;
		b2ClassChild = b6.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b3.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b1.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b1.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}


	}if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

		b1ClassChild = b3.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b7.childNodes[0].className;
		player = b3.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			declareWinner(player);
		}
	}

	let counterOld = 0;								

	for(let i=0; i < boxes.length; i++){
		if(boxes[i].childNodes[0] != undefined){
			counterOld++;
		}
	}

	if(counterOld == 9){
		declareWinner("Deu velha");
	}
}
	

//Checa se uma linha está preenchida com elementos iguais
function CheckLine(block1, block2, block3){

		if(block1 == block2 && block3 == block2){	
			return true;
			
		}
		else{
			return false;
		
		}
}


//Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){

	let scoreboardX = document.querySelector("#scoreboard-1");
	let scoreboardO = document.querySelector("#scoreboard-2");
	let msg = '';

	if(winner == 'x') {
		scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
		msg = "jogador X venceu !";
	}else if (winner == 'o'){
		scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
		msg = "jogador O venceu !";
	}else{
		msg = "Deu velha !";
	}

	//exibir mensagem 

	messageText.innerHTML = msg;
	messageContainer.classList.remove("hide");							//removendo classe que esconde os elementos

	setTimeout(()=> {
		messageContainer.classList.add("hide");
	},4000);

	//Zerar as jogadas

	player1 = 0;
	player2 = 0;

	//Limpar tabela do jogo
	let boxesRemove = document.querySelectorAll(".box div");

	for(let i = 0; i < boxesRemove.length; i++){
		boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
	}
}