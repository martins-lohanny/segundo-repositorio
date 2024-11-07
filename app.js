function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta,resposta)

    let flashcard = document.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className='cartao';

    cartao.innerHTML=`
        <div class="cartao_conteudo"
                <h3>Missão</h3>

                <div class="cartao__conteudo__pergunta">
                   <p> Saiba qual e a missao de nossa empresa! </p>
                </div>

                <div class="cartao_conteudo_resposta">
                    <p>Nossa missao e... </p>
                </div>
            </div>
    `
    let respostaEstaVisivel - false;
    function viraCartao (){
        respostaEstaVisivel= !variavelEstaVisivel;
        cartao.classList.toggle('active', viraCartao);
    }

    cartao.addEventListener('click', viraCartao);

    flashcard.appendChield(cartao);
    

}