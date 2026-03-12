const botao = document.getElementById('btn-calcular');
const areaRecibo = document.getElementById('recibo');


botao.addEventListener('click', () => {
    const precoOriginal = 150;
    const porcentagem = 10;

    const valorDesconto = (precoOriginal * porcentagem) / 100;
    const precoFinal = precoOriginal - valorDesconto;

    document.getElementById('valor-desc').innerText = valorDesconto.toFixed(2);
    document.getElementById('total-final').innerText = `R$ ${precoFinal.toFixed(2)}`;

    areaRecibo.style.display = 'block';
    botao.style.display = 'none';
});