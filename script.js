// Lista com todas as jogadas possíveis no Jokenpô.
const opcoes = ['Pedra', 'Papel', 'Tesoura'];

// Variáveis que guardam a pontuação de cada participante.
let pontuacaoJogador = 0;
let pontuacaoAlexia = 0;

// Busca no HTML o local onde a mensagem do resultado será exibida.
const resultado = document.querySelector('.result');

// Busca os elementos <span> que mostram os pontos na tela.
const placarJogador = document.querySelector('.you-score span');
const placarAlexia = document.querySelector('.alexia-score span');

// Escolhe aleatoriamente uma jogada para a Alexia.
function escolherOpcaoDaAlexia() {
	// Math.random() gera um número entre 0 e 1.
	// Math.floor() arredonda para baixo e transforma o resultado em um índice inteiro.
	const indice = Math.floor(Math.random() * opcoes.length);

	// Retorna a opção que está na posição sorteada da lista.
	return opcoes[indice];
}

// Compara as escolhas e decide quem venceu a rodada.
// Os parâmetros recebem a escolha do jogador e a escolha da Alexia.
function descobrirVencedor(escolhaDoJogador, escolhaDaAlexia) {
	// Se as duas escolhas forem iguais, ninguém ganha ponto.
	if (escolhaDoJogador === escolhaDaAlexia) {
		return 'Empate!';
	}

	// Verifica as três situações em que o jogador vence:
	// Pedra ganha de Tesoura, Papel ganha de Pedra e Tesoura ganha de Papel.
	const jogadorVenceu =
		(escolhaDoJogador === 'Pedra' && escolhaDaAlexia === 'Tesoura') ||
		(escolhaDoJogador === 'Papel' && escolhaDaAlexia === 'Pedra') ||
		(escolhaDoJogador === 'Tesoura' && escolhaDaAlexia === 'Papel');

	// Se alguma das regras acima for verdadeira, o jogador recebe um ponto.
	if (jogadorVenceu) {
		// ++ aumenta a pontuação em 1.
		pontuacaoJogador++;
		return 'Você venceu!';
	}

	// Se não houve empate nem vitória do jogador, a Alexia venceu.
	pontuacaoAlexia++;
	return 'Alexia venceu!';
}

// Executa uma rodada completa quando o jogador escolhe uma opção.
function jogar(escolhaDoJogador) {
	// Sorteia a jogada da Alexia.
	const escolhaDaAlexia = escolherOpcaoDaAlexia();

	// Compara as duas jogadas e recebe a mensagem do vencedor.
	const vencedor = descobrirVencedor(escolhaDoJogador, escolhaDaAlexia);

	// Mostra na tela as escolhas feitas e o resultado da rodada.
	resultado.textContent = `Você escolheu ${escolhaDoJogador}. Alexia escolheu ${escolhaDaAlexia}. ${vencedor}`;

	// Atualiza os placares exibidos no HTML.
	placarJogador.textContent = pontuacaoJogador;
	placarAlexia.textContent = pontuacaoAlexia;
}

// Percorre cada opção da lista para configurar seu respectivo botão.
opcoes.forEach((opcao) => {
	// Encontra o botão pelo id: Pedra, Papel ou Tesoura.
	const botao = document.getElementById(opcao);

	// Espera o clique do usuário e chama a função jogar com a opção escolhida.
	botao.addEventListener('click', () => jogar(opcao));
});
