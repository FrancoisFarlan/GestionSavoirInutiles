let bo = (function(){

        let bo = {};
        //classe savoirinutile
        bo.SavoirInutile = function(savoir, auteur, date) {
            this.savoir = savoir || "";
            this.auteur = auteur || "";
            this.date = date || new Date();
        }

        //méthode pour vérifier que tous les champs sont remplis
        bo.SavoirInutile.prototype.tousLesChampsSontRemplis = function () {
            return this.savoir != "" && this.auteur != "" && this.date != "";
        }

        //méthode pour obtenir les informations du savoirInutile
        bo.SavoirInutile.prototype.recupererInformations = function() {
            let jour = this.date.getDate().toString().padStart(2, "0");
            let mois = (this.date.getMonth() + 1).toString().padStart(2,"0");
            let annee = this.date.getFullYear();

            return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
        }

        return bo;
    }
)();