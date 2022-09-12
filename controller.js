let controller = (
    function(service) {
        let controller = {};

        //event listener bouton ajouter
        controller.eventListenerBoutonValider = function() {
            document.querySelector("#valider").addEventListener("click", controller.ajouterSavoir);
        }

        //initialiser formulaire
        controller.reinitialiserSavoir = function()
        {
            let savoirInutile = service.getSavoirDefaut();
            document.querySelector("#savoir").value=savoirInutile.savoir;
            document.querySelector("#auteur").value=savoirInutile.auteur;
            document.querySelector("#date").valueAsDate=savoirInutile.date;
            document.querySelector("#savoir").focus();
            controller.afficherTableauSavoirs();
        }

        //afficher tableau savoirs
        controller.afficherTableauSavoirs = function() {
            controller.supprimerTousLesSavoirs();
            let listeSavoirs = document.querySelector("#listeSavoirs");

            service.getSavoirsInutiles().forEach((element, index) => {
                let liSavoir = document.createElement("li");
                let pSavoir = document.createElement("p");
                pSavoir.className = "pSavoir";
                let pInfos = document.createElement("p");
                pInfos.className = "pInfos";

                liSavoir.id = index;
                pSavoir.innerText = element.savoir;
                pInfos.innerText = element.recupererInformations();
                liSavoir.addEventListener("click", controller.supprimerSavoir);

                listeSavoirs.appendChild(liSavoir);
                liSavoir.appendChild(pSavoir);
                liSavoir.appendChild(pInfos);

            });
        }

        //ajouter savoir
        controller.ajouterSavoir = function() {
            let ajoutOk = service.ajouterSavoir(document.querySelector("#savoir").value,
                document.querySelector("#auteur").value,
                document.querySelector("#date").valueAsDate);

            if (ajoutOk) {
                controller.afficherTableauSavoirs();
                controller.reinitialiserSavoir();
            }
            else {
                alert("Tous les champs sont obligatoires");
            }
        }

        //supprimer savoir
        controller.supprimerSavoir = function(event)
        {
            let index = event.currentTarget.id;
            if(confirm(`Voulez-vous supprimer ce savoir?`))
            {
                service.supprimerSavoir(index);
                controller.afficherTableauSavoirs();
                controller.reinitialiserSavoir();
            }
        }

        //fonction supprimerTousLesSavoirs
        controller.supprimerTousLesSavoirs = function () {
            document.querySelector("#listeSavoirs").innerHTML="";
        }

        //trier par ordre chronologique
        controller.trierParOrdreChronologique = function () {
            service.trierParOrdreChronologique();
            controller.afficherTableauSavoirs();
        }

        //trier auteur par ordre alphabétiques
        controller.trierParAuteurParOrdreAlphabetique = function () {
            service.trierParAuteurParOrdreAlphabetique();
            controller.afficherTableauSavoirs();
        }

        return controller;
    }
)(service);

controller.reinitialiserSavoir();
controller.eventListenerBoutonValider();