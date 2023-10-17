function calcul_moyenne() {
    var n1= prompt("Donner la premiere note: ");
    var n2= prompt("Donner la deuxieme note: ");
    var n3= prompt("Donner la troisieme note: ");

    var somme= Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+"<br>");

    var moyenne = somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne < 10)
        document.write("Trop bas !");
    else
        document.write("Cool");
}

function test_age() {
    var n1= prompt("Donne ton âge stp: ");

    if (Number(n1) < 18) {
        if (Number(n1) < 1)
            document.write("<font size='10em' color=white>" + "Trop jeune pour exister<br>");
        else 
            document.write("<font size='10em' color=white>" + "Tu es mineur gamin<br>");
        document.bgColor="red";
        return;
    } else if (Number(n1) > 60 && Number(n1) < 151)
        document.write("<font size='10em' color=grey>" + "Ok boomer<br>");
    else if (Number(n1) > 150)
            document.write("<font size='10em' color=grey>" + "je suis pas sûr pour ton âge...<br>");
    else
        document.write("<font size='10em' color=grey>" + "Tu es majeur mon vieux<br>");
    document.bgColor="green";
}

function changerTexte2() {
    var bouton = document.getElementById("coucou");
    bouton.innerText = "Tu es sûr ?";
  }

  function changerTexte() {
    var bouton = document.getElementById("coucou");
    bouton.innerText = "Ne pas cliquer";
  }

function simple_affichage() {
    var Nom = prompt("Eh toi, oui toi c'est quoi ton nom ?");
    var Prenom = prompt("Et ton prénom stp");

    document.write('<div style="margin:auto; width:50%; text-align:center; border: 6px solid red;">');
    document.write("Ok " + Prenom + " " + Nom + " je te souhaite la bienvenue !");
    document.write('</div>');
}

var images = [
    "Qiqi.jpeg",
    "Diluc.jpg",
    "furina.jpeg",
    "mona.jpg",
    "charlotte.png",
    "charlotte.png",
    "charlotte.png",
    "kirara.png",
    "kirara.png",
    "kirara.png",
    "fischl.jpg",
    "fischl.jpg",
    "fischl.jpg"
  ];

function peur() {
      var indice = Math.floor(Math.random() * 12);
        window.open(images[indice], "_blank");
  }

function test_couleur() {
    let c = prompt("Quelle couleur tu veux ? Je sais lire que bleu ou rouge si je met au pif");
    if (c=="bleu" ||c=="BLEU") {
        document.body.style.backgroundColor = "blue";
        return;
    }
    if (c=="rouge" ||c=="ROUGE") {
        document.body.style.backgroundColor = "red";
        return;
    }
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.body.style.backgroundColor = randomColor;
}
  
  