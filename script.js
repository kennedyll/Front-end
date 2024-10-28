// script.js

function filterDestinations() {
    // Obter a região selecionada no filtro
    const selectedRegion = document.getElementById("region-select").value;
    
    // Obter todos os cartões de destino
    const destinationCards = document.querySelectorAll(".destination-card");

    // Iterar por cada cartão de destino
    destinationCards.forEach(card => {
        // Verificar a região do cartão
        const cardRegion = card.getAttribute("data-region");
        
        // Mostrar ou ocultar o cartão com base na região selecionada
        if (selectedRegion === "all" || cardRegion === selectedRegion) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
