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