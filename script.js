/*CARROSSEL "MAIS VENDIDOS" (HOME)*/
 
const produtosCarrossel = document.querySelectorAll(
    ".produtos-destaque .card-produto"
);
 
if (produtosCarrossel.length > 0) {
 
    let produtoAtual = 0;
 
    function mostrarProduto() {
 
        produtosCarrossel.forEach(function (produto) {
            produto.style.display = "none";
        });
 
        produtosCarrossel[produtoAtual].style.display = "flex";
 
        produtoAtual++;
 
        if (produtoAtual >= produtosCarrossel.length) {
            produtoAtual = 0;
        }
    }
 
    mostrarProduto();
 
    setInterval(mostrarProduto, 3000);
}
 
/*BANCO DE PRODUTOS (PROVISÓRIO)*/

const produtosDB = {
 
    fenix: {
        nome: "Cropped Fenix",
        categoria: "Cropped",
        preco: "R$ 85,00",
        descricao: "Cropped em crochê artesanal, caimento leve e acabamento delicado. Peça versátil para compor looks do dia a dia.",
        material: "Linha Charme",
        producao: "Produção artesanal sob encomenda.",
        tamanhos: ["PP", "P", "M", "G"],
        cores: ["Bordô", "Off White", "Creme"],
        imagens: [
            "../imagens/produtos/croppedfenix.jpeg"
        ]
    },
 
    luna: {
        nome: "Cropped Luna",
        categoria: "Cropped",
        preco: "R$ 75,00",
        descricao: "Cropped em crochê artesanal com modelagem confortável e visual delicado.",
        material: "Linha Charme",
        producao: "Produção artesanal sob encomenda.",
        tamanhos: ["PP", "P", "M", "G"],
        cores: ["Creme", "Dourado"],
        imagens: [
            "../imagens/PRODUTOS/lunafoco.jpeg"
        ]
    },
 
    mia: {
        nome: "Cropped Mia",
        categoria: "Cropped",
        preco: "R$ 65,00",
        descricao: "Cropped em crochê artesanal, ideal para compor com saias e calças de cintura alta.",
        material: "Linha Charme",
        producao: "Produção artesanal sob encomenda.",
        tamanhos: ["PP", "P", "M", "G"],
        cores: ["Grafite", "Off White"],
        imagens: [
            "../imagens/produtos/croppedMia.jpeg"
        ]
    }
 
};
 
/*PÁGINA DE PRODUTO (produto.html)*/

const imagemProduto = document.getElementById("produto-imagem");
 
if (imagemProduto) {
 
    // pega o nome do produto que veio na URL
    // exemplo: produto.html?p=fenix  ->  "fenix"
    const parametros = new URLSearchParams(window.location.search);
    const idProduto = parametros.get("p");
 
    const produto = produtosDB[idProduto];
 
    if (produto) {
 
        // IMAGEM PRINCIPAL + MINIATURAS
        imagemProduto.src = produto.imagens[0];
        imagemProduto.alt = produto.nome;
 
        const miniaturasContainer = document.getElementById("produto-miniaturas");
 
        produto.imagens.forEach(function (imagem, index) {
 
            const miniatura = document.createElement("img");
            miniatura.src = imagem;
            miniatura.alt = produto.nome + " - foto " + (index + 1);
 
            if (index === 0) {
                miniatura.classList.add("ativa");
            }
 
            miniatura.addEventListener("click", function () {
                imagemProduto.src = imagem;
 
                document
                    .querySelectorAll(".produto-miniaturas img")
                    .forEach(function (img) {
                        img.classList.remove("ativa");
                    });
 
                miniatura.classList.add("ativa");
            });
 
            miniaturasContainer.appendChild(miniatura);
        });
 
        // TEXTOS
        document.getElementById("produto-categoria").textContent = produto.categoria;
        document.getElementById("produto-nome").textContent = produto.nome;
        document.getElementById("produto-preco").textContent = produto.preco;
        document.getElementById("produto-descricao").textContent = produto.descricao;
        document.getElementById("produto-material").textContent = produto.material;
        document.getElementById("produto-producao").textContent = produto.producao;
 
        // TAMANHO
        const selectTamanho = document.getElementById("produto-tamanho");
 
        produto.tamanhos.forEach(function (tamanho) {
            const opcao = document.createElement("option");
            opcao.value = tamanho;
            opcao.textContent = tamanho;
            selectTamanho.appendChild(opcao);
        });
 
        // COR
        const selectCor = document.getElementById("produto-cor");
 
        produto.cores.forEach(function (cor) {
            const opcao = document.createElement("option");
            opcao.value = cor;
            opcao.textContent = cor;
            selectCor.appendChild(opcao);
        });
 
    } else {
 
        // caso alguém acesse produto.html sem "?p=" válido
        document.getElementById("produto-nome").textContent = "Produto não encontrado";
        document.getElementById("produto-descricao").textContent = "Volte ao catálogo e escolha uma peça.";
    }
}

