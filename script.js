

function chargementTermine() {
    document.querySelector("#date").valueAsDate=new Date();
    document.querySelector("#savoir").focus();
}
function tousLesChampsSontRemplis(savoir, auteur, date) {
    return savoir != "" && auteur != "" && date != "";
}

document.querySelector("#valider").addEventListener("click", ajouter);

function ajouter() {

    let savoir = document.querySelector("#savoir").value;
    let auteur = document.querySelector("#auteur").value;
    let date = document.querySelector("#date").valueAsDate;

    if (tousLesChampsSontRemplis(savoir, auteur, date)) {

        let jour = date.getDate().toString().padStart(2, "0");
        let mois = (date.getMonth() + 1).toString().padStart(2,"0");
        let annee = date.getFullYear();

        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        pSavoir.className = "pSavoir";
        let pInfos = document.createElement("p");
        pInfos.className = "pInfos";

        pSavoir.innerText = savoir;
        pInfos.innerText = `Par ${auteur}, le ${jour}/${mois}/${annee}`;
        liSavoir.addEventListener("click", supprimer);

        let olSavoir = document.querySelector("#listeSavoirs");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        document.getElementById("savoir").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();

    } else {
        alert("Tous les champs sont obligatoires");
    }
    document.querySelector("#savoir").focus();
}

function supprimer() {

    if(confirm(`Voulez-vous supprimer ce savoir ?`))
    {
        this.parentNode.removeChild(this);
    }
}