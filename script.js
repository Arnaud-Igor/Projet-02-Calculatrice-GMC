const touches = [...document.querySelectorAll(".bouton")];
const listeKeyCode = touches.map(touche => touche.dataset.code);
const ecran = document.querySelector(".ecran");

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.code;
    calculer(valeur);
});

const calculer = (valeur) => {
    if (listeKeyCode.includes(valeur)) {
        switch (valeur) {
            case "keyC":
                ecran.textContent = "";
                break;
            case "Equal":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexCode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexCode];
                ecran.textContent += touche.innerHTML;
        };
    };
};

window.addEventListener('error', (e) => {
    alert("Une erreur est survenue dans votre calcul, vérifiez vos saisies");
});