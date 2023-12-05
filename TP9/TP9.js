function login() {
    var log = prompt("Donner votre nom d'utilisateur");
    var pass =prompt("Entrer votre mot de passe");
    log == "admin" && pass == "admin" ? document.write("Bienvenue: admin") : alert("Accès refusé");
}

function login2() {
    window.location.href='id.html';
}

function verif(name, v) {
    let i = 0;
    for (; name[i] != null && v[i] != null; i++) {
        if (name[i] >= 'a' && name[i] <= 'z' && v[i] >= 'a' && v[i] <= 'z' ||
        name[i] >= 'A' && name[i] <= 'Z' && v[i] >= 'A' && v[i] <= 'Z') {
            if (name[i] !== v[i])
                return false;
        } else {
            if (name[i] >= 'a' && name[i] <= 'z' && v[i] >= 'A' && v[i] <= 'Z') {
                if (String.fromCharCode(name[i].charCodeAt(0) - 32) !== v[i]) {
                    return false;
                }
            }
            if (name[i] >= 'A' && name[i] <= 'Z' && v[i] >= 'a' && v[i] <= 'z') {
                if (String.fromCharCode(name[i].charCodeAt(0) + 32) !== v[i]) {
                    return false;
                }
            }
        }
    }
    if (name[i] == null && v[i] == null)
        return true;
    return false;
}

function login3() {
    if (t1.value == "admin" && t2.value == "admin"){
        document.write('<font size=50em;>' + '<center>' + "Bienvenue: " + t1.value + '</center>');
        document.bgColor="green";
    } else {
        document.write('<font size=50em;>' + '<center>' + "Accès refusé" + '</center>');
        document.bgColor="red";
    }
}

function affichagetab() {
    document.write('<table border=2px width=30%>');
    for(var i = 0; i<=5; i++) {
        document.write('<tr> <td>*</td> <td>*</td> <td>*</td> </tr>');
    }
    document.write('</table>');
}

function affichagetab2() {
    var j = prompt("Donne un nombre");
    document.write('<table border=2px width=30%>');
    for (var i = 1; i <= j; i++)
        document.write('<tr> <td>' + i + '</td> <td>*</td> <td>*</td> </tr>');
    document.write('</table>');
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient " + chaine.length + " caractères" + "<br>");
    document.write("La première lettre est " + chaine.substring(0,1) + "<br>");
    document.write("La dernière lettre est " + chaine.substr(length-1, 1) + "<br>");
}

function colors() {
    var color = prompt ("Entrez une couleur :");
    switch (color.toLowerCase()) {
    case "rouge":
        document.body.style.background="red"; 
        break;
    case "bleu":
        document.body.style.background="blue"; 
        break;
    default:
        alert("Couleur non prise en charge, veuillez choisir parmis: Bleu, Rouge");
    }
}

function login3_0(){
    var i= 0;
    do {
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin") {
            document.write("Bienvenue "+id);
            break;
        } else 
            alert("Accès refusé");
        i++;
    } while (i<3);

    if (i==3)
        alert("Delai dépassé");
}

function primo() {
    var i = prompt("Tu as combien de primos");
    var is = i > 1 ? "s" : "";
    document.write('<center> <font size=50em;> <br> <br>');
    document.write("Pour " + i + " primo" + is + " " + '<br>');
    var j = Math.floor(i / 1600);
    i -= j * 1600;
    var k = Math.floor(i / 160);
    i -= k * 160;
    var js = j > 1 ? "s" : "";
    var ks = k > 1 ? "s" : "";
    var is2 = i > 1 ? "s" : "";
    document.write("Tu peux faire " + j + " multi" + js + ", ");
    document.write(k + " tirage" + ks + " et il te restera ");
    document.write(i + " primo" + is2 + ".");
    document.write('</center>');
}

function inv() {
    var i = prompt("Donne un mot");
    document.write("L'inverse de " + i + " est:" + '<br>')
    for (var j = i.length - 1; j >= 0; j--)
        document.write(i[j]);
}

function find_e() {
    var i = prompt("Ecris un mot, je te donnerais les infos sur les e");
    var k = 0;
    for (var j = 0; j < i.length; j++) {
        if (i[j] == "e")
            k++;
    }
    document.write('<font size= 50em>');
    if (k > 0)
        document.write("Il y a des E dans le mot" + '<br>');
    document.write("Il y a " + k + " E");
}
