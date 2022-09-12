let bo = (function(){

        let bo = {};
        //classe savoirinutile
        bo.SavoirInutile = class {
            constructor(savoir, auteur, date) {
                this.savoir = savoir || "";
                this.auteur = auteur || "";
                this.date = date || new Date();
            }

            tousLesChampsSontRemplis() {
                return this.savoir != "" && this.auteur != "" && this.date != "";
            }

            get informations() {
                let jour = this.date.getDate().toString().padStart(2, "0");
                let mois = (this.date.getMonth() + 1).toString().padStart(2,"0");
                let annee = this.date.getFullYear();

                return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
            }
        }

        return bo;
    }
)();