document.addEventListener('DOMContentLoaded', function() {

    // Sélectionner tous les boutons de filtrage
    const boutonsFiltre = document.querySelectorAll('.tabs button[data-filter]');

    // Ajouter un gestionnaire d'événement "click" à chaque bouton
    boutonsFiltre.forEach(function(bouton) {
        bouton.addEventListener('click', function() {

            // Obtenir la valeur de filtrage du bouton cliqué
            let valeurFiltre = this.getAttribute('data-filter');

            // Sélectionner tous les éléments de la galerie
            const élémentsGalerie = document.querySelectorAll('.gallery figure');

            // Parcourir chaque élément de la galerie
            élémentsGalerie.forEach(function(élément) {

                // Si la valeur de filtrage est 'all', afficher tous les éléments.
                // Sinon, afficher uniquement les éléments qui correspondent à la valeur de filtrage.
                if (valeurFiltre === 'all' || élément.getAttribute('data-categorie') === valeurFiltre) {
                    élément.style.display = 'block';
                } else {
                    élément.style.display = 'none';
                }
            });
        });
    });
});
