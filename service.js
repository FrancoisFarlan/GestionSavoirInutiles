let service = (
    function(bo) {
        let service = {};
        //création tableau savoirs
        var tableauSavoirs = new Array();

        service.ajouterSavoir = function (savoir, auteur, date) {

            let savoirInutile = new bo.SavoirInutile(savoir, auteur, date);

            if (savoirInutile.tousLesChampsSontRemplis()) {
                //ajout au tableau
                tableauSavoirs.push(savoirInutile);
                return true;
            } else {
                return false;
            }
        }

        //trier par ordre chronologique
        service.trierParOrdreChronologique = function () {
            tableauSavoirs.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
        }

        //trier auteur par ordre alphabétiques
        service.trierParAuteurParOrdreAlphabetique = function () {
            tableauSavoirs.sort(function (a, b) {
                return ('' + a.auteur).localeCompare(b.auteur);
            })
        }

        //supprimer savoir à un index précis
        service.supprimerSavoir = function (index) {
                tableauSavoirs.splice(index,1);
        }

        //getter tableau
        service.getSavoirsInutiles = function()
        {
            return tableauSavoirs;
        }

        //savoir par défaut
        service.getSavoirDefaut = function()
        {
            return new bo.SavoirInutile("","",new Date());
        }

        return service;
    }
)(bo);
