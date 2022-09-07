
//Classe SavoirInutile
function SavoirInutile(savoir, auteur, date) {
    this.savoir = savoir || "";
    this.auteur = auteur || "";
    this.date = date || new Date();
}

//méthode pour vérifier que tous les champs sont remplis
SavoirInutile.prototype.tousLesChampsSontRemplis = function () {
    return this.savoir != "" && this.auteur != "" && this.date != "";
}

//méthode pour obtenir les informations du savoirInutile
SavoirInutile.prototype.recupererInformations = function() {
    let jour = this.date.getDate().toString().padStart(2, "0");
    let mois = (this.date.getMonth() + 1).toString().padStart(2,"0");
    let annee = this.date.getFullYear();

    return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
}

//fonction à charger au lancement de la page
function reinitialiserSavoir() {
    let savoirInutile = new SavoirInutile();
    document.querySelector("#savoir").value=savoirInutile.savoir;
    document.querySelector("#auteur").value=savoirInutile.auteur;
    document.querySelector("#date").valueAsDate=savoirInutile.date;
    document.querySelector("#savoir").focus();
}

//event listener bouton ajouter
document.querySelector("#valider").addEventListener("click", ajouter);


//fonction ajouter
function ajouter() {

    let savoirInutile = new SavoirInutile(document.querySelector("#savoir").value,
        document.querySelector("#auteur").value,
        document.querySelector("#date").valueAsDate);

    if (savoirInutile.tousLesChampsSontRemplis()) {

        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        pSavoir.className = "pSavoir";
        let pInfos = document.createElement("p");
        pInfos.className = "pInfos";

        pSavoir.innerText = savoirInutile.savoir;
        pInfos.innerText = savoirInutile.recupererInformations();
        liSavoir.addEventListener("click", supprimer);

        let olSavoir = document.querySelector("#listeSavoirs");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        reinitialiserSavoir();

    } else {
        alert("Tous les champs sont obligatoires");
    }
    document.querySelector("#savoir").focus();
}

//fonction supprimer
function supprimer() {

    if(confirm(`Voulez-vous supprimer ce savoir ?`))
    {
        this.parentNode.removeChild(this);
    }
}