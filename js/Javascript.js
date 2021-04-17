let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let buttonsCB = document.querySelectorAll("#buttons-container-2 button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let container = document.querySelector("#container");
let scoreboardX = document.querySelector("#scoreboard-1");
let scoreboardO = document.querySelector("#scoreboard-2");
let buttonContinue = document.querySelector("#continue-play");
let buttonBack = document.querySelector("#back-play");
let secondPlayer;
let continueOrBack;

//Contador de jogadas

let player1 = 0;
let player2 = 0;

//Selecionar player vs player ou player vs CPU
EventButtons();

// adcionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++) {

	//quando alguém clicar na caixa

	boxes[i].addEventListener("click", () => {

		let element = CheckElement(player1,player2);
	
	//Verificação de elemento X ou O na div boxes, se não houver aceita e computa a jogada

		if(boxes[i].childNodes.length == 0){
			let cloneElement = element.cloneNode(true);

			boxes[i].appendChild(cloneElement);

			//Computar jogada
			
			if(player1 == player2) {
				player1++;

				if(secondPlayer == 'ia-player'){
					player2++;
					//Executa a jogada do CPU
					ComputerPlay();
				
				}
			}else{
				player2++;
			}
		}

		CheckWinCondition();

	});
}

//Evento dos botões 2 players e IA

function EventButtons() {

	for(let i = 0; i < buttons.length; i++){

		buttons[i].addEventListener("click", () => {

			secondPlayer = buttons[i].getAttribute("id");

			for(let j = 0; j < buttons.length; j++){
				buttons[j].classList.add("hide");

			}

			setTimeout(() =>{

				container.classList.remove("hide");

			}, 1000);
			
		});
	}
}

//Check elemento pra clonar e enviar para o evento de clique do jogador

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

//Checa as condições de vitória

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
			DeclareWinner(player);
		}

	}if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

		b1ClassChild = b4.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b6.childNodes[0].className;
		player = b4.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b7.childNodes[0].className;
		b2ClassChild = b8.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b7.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

		b1ClassChild = b1.childNodes[0].className;
		b2ClassChild = b4.childNodes[0].className;
		b3ClassChild = b7.childNodes[0].className;
		player = b1.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

		b1ClassChild = b2.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b8.childNodes[0].className;
		player = b2.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b3.childNodes[0].className;
		b2ClassChild = b6.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b3.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

		b1ClassChild = b1.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b9.childNodes[0].className;
		player = b1.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}

	}if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

		b1ClassChild = b3.childNodes[0].className;
		b2ClassChild = b5.childNodes[0].className;
		b3ClassChild = b7.childNodes[0].className;
		player = b3.childNodes[0].className;

		result = CheckLine(b1ClassChild,b2ClassChild,b3ClassChild);

		if(result){
			DeclareWinner(player);
		}
	}

	let counterOld = 0;								

	for(let i=0; i < boxes.length; i++){
		if(boxes[i].childNodes[0] != undefined){
			counterOld++;
		}
	}

	if(counterOld == 9){
		DeclareWinner("Deu velha");
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
function DeclareWinner(winner){

	let msg = '';

	if(winner == 'x') {
		scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
		msg = "jogador X venceu !";
	}else if(winner == 'o' && secondPlayer == 'ia-player'){
		scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
		msg = "CPU é o vencedor !";
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

	//Continuar ou voltar

	ContinueOrBackPlay();

	//Zerar as jogadas

	player1 = 0;
	player2 = 0;

	//Limpar tabela do jogo
	let boxesRemove = document.querySelectorAll(".box div");

	for(let i = 0; i < boxesRemove.length; i++){
		boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
	}
}

//Computa a jogada da Inteligencia Artificial
function ComputerPlay(){

	let cloneO = o.cloneNode(true);
	counter = 0;
	filled = 0;

	for(let i = 0; i < boxes.length; i++){

		let randomNumber = Math.floor(Math.random() * 5);

		if(boxes[i].childNodes[0] == undefined){
			if(randomNumber <= 1){
				boxes[i].appendChild(cloneO);
				counter++;
				break;
			}
		}else {
			filled++;
		}
	}

	if(counter == 0 && filled < 9){
		ComputerPlay();
	}
}

//Continuar Player vs Player ou Player vs CPU 

function ContinueOrBackPlay() {

container.classList.add("hide");

	for(let i = 0; i < buttons.length; i++){

		buttonsCB[i].addEventListener("click", () => {

			if(buttonsCB[i].getAttribute("id") == "continue-play"){
				hideClassCB(buttonContinue, buttonBack);
				container.classList.remove("hide");

			}else if(buttonsCB[i].getAttribute("id") == "back-play"){
				hideClassCB(buttonContinue, buttonBack);

				showButtons(buttons[0],buttons[1]);

				scoreboardO.textContent = 0;
				scoreboardX.textContent = 0;
				EventButtons();
			}

		});
	}
}

function showClassCB(Continue, Back){
	Continue.classList.remove("hide");
	Back.classList.remove("hide");

}

function hideClassCB(Continue,Back){

	Continue.classList.add("hide");
	Back.classList.add("hide");

}

function showButtons(button1, button2){

	console.log(button1, button2);

	button1.classList.remove("hide");
	button2.classList.remove("hide");

}