const produtos = document.querySelectorAll(
".produtos-destaque .card-produto"
);

console.log(produtos);

let produtoAtual = 0;

function mostrarproduto() {

    produtos.forEach(function(produto){
        produto.style.display = "none";
    });
    produtos[produtoAtual].style.display="flex";
    produtoAtual++;
    
    if (produtoAtual >= produtos.length) {
    produtoAtual = 0;
   }
}

mostrarproduto();

setInterval(mostrarproduto, 5000);