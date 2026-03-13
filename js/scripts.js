const botao = document.getElementById('btn-calcular');
const btnResetar = document.getElementById('btn-resetar');
const areaRecibo = document.getElementById('recibo');

// Botão Gerar

botao.addEventListener('click', () => {
    const precoOriginal = 85;
    const porcentagem = 15;

    const valorDesconto = (precoOriginal * porcentagem) / 100;
    const precoFinal = precoOriginal - valorDesconto;

    document.getElementById('valor-desc').innerText = valorDesconto.toFixed(2);
    document.getElementById('total-final').innerText = `R$ ${precoFinal.toFixed(2)}`;

    areaRecibo.style.display = 'block';
    btnResetar.style.display = 'inline-block';
    botao.style.display = 'none';
});

// Botão Resetar

btnResetar.addEventListener('click', () => {
    areaRecibo.style.display = 'none';
    botao.style.display = 'inline-block';
    btnResetar.style.display = 'none';
});


/* Card Bolo Maracujá */

const botaoCalc = document.getElementById('btn-calcular1');
const btnReset = document.getElementById('btn-resetar1');
const recibo = document.getElementById('voucher');

// Botão Gerar

botaoCalc.addEventListener('click', () => {
    const precoOriginal = 105;
    const porcentagem = 15;

    const valorDesconto = (precoOriginal * porcentagem) / 100;
    const precoFinal = precoOriginal - valorDesconto;

    document.getElementById('valor-desc1').innerText = valorDesconto.toFixed(2);
    document.getElementById('total-final1').innerText = `R$ ${precoFinal.toFixed(2)}`;

    botaoCalc.style.display = 'none';
    btnReset.style.display = 'inline-block';
    recibo.style.display = 'block';
});

// Botão Resetar

btnReset.addEventListener('click', () => {
    recibo.style.display = 'none';
    botaoCalc.style.display = 'inline-block';
    btnReset.style.display = 'none';
});