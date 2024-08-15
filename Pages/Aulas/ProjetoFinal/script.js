// Inicializa a quantidade de produtos no carrinho
let cartQuantity = 0;

// Seleciona o botão e o elemento de quantidade do carrinho
const addToCartButton = document.getElementById('btn-add');
const cartQuantityElement = document.getElementById('cart-quantity');
const addToCartForm = document.getElementById('add-to-cart-form');

// Adiciona um ouvinte de evento para o botão de adicionar ao carrinho
addToCartForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);

    cartQuantity += quantity; // Atualiza a quantidade no carrinho
    cartQuantityElement.textContent = cartQuantity; // Atualiza o texto do carrinho
});


 // Seleciona todas as imagens em miniatura
 const thumbnails = document.querySelectorAll('.thumbnail-img');

 // Adiciona um evento de mouseover em cada miniatura
 thumbnails.forEach(thumbnail => {
     thumbnail.addEventListener('mouseover', () => {
         // Atualiza a imagem principal para a imagem da miniatura
         document.getElementById('main-img').src = thumbnail.dataset.fullsize;
     });
 });