const produtos = [

    {
        nome: "Mini compressor de ar digital portátil",
        categoria: "eletronicos",
        precoAntigo: "R$ 157,98",
        preco: "R$ 63,62",
        desconto: "59% OFF",
        imagem: "img/produto1.webp",
        link: "https://meli.la/1WMtPQ6"
    },

    {
        nome: "Fone de ouvido para capacete",
        categoria: "eletronicos",
        precoAntigo: "R$ 129,99",
        preco: "R$ 40,99",
        desconto: "68% OFF",
        imagem: "img/produto2.webp",
        link: "https://meli.la/2vHgVP5"
    },

    {
        nome: "Controle GameSir G7 SE com fio",
        categoria: "gamer",
        precoAntigo: "R$ 357,65",
        preco: "R$ 253,92",
        desconto: "29% OFF",
        imagem: "img/produto3.webp",
        link: "https://meli.la/1EfQY6i"
    },

    {
        nome: "Teclado e Mouse Usb com fio",
        categoria: "informatica",
        precoAntigo:"",
        preco: "R$ 49,90",
        desconto: "sem desconto",
        imagem: "img/produto4.webp",
        link: "https://meli.la/1sPGhzQ"
    },


];


const lista = document.getElementById("product-list");


function mostrarProdutos(listaProdutos) {

    lista.innerHTML = "";

    listaProdutos.forEach(produto => {

        const card = document.createElement("article");

        card.classList.add("product");

        card.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="product-info">

                <span class="product-category">
                    ${produto.categoria}
                </span>

                <h3>
                    ${produto.nome}
                </h3>

                <p class="old-price">
                    ${produto.precoAntigo}
                </p>

                <p class="price">
                    ${produto.preco}
                </p>

                <span class="discount">
                    ${produto.desconto}
                </span>

                <a
                    href="${produto.link}"
                    target="_blank"
                    class="offer-button"
                >
                    🔥 Ver oferta
                </a>

            </div>

        `;

        lista.appendChild(card);

    });

}


function filtrarCategoria(categoria) {

    if (categoria === "todos") {

        mostrarProdutos(produtos);

        return;
    }

    const filtrados = produtos.filter(
        produto => produto.categoria === categoria
    );

    mostrarProdutos(filtrados);

}


const campoBusca = document.getElementById("search");


campoBusca.addEventListener("input", () => {

    const texto = campoBusca.value.toLowerCase();

    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(texto)
    );

    mostrarProdutos(resultados);

});


mostrarProdutos(produtos);