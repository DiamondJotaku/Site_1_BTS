function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var d = document.getElementById("t5").value;
    var c = Number(a) + Number(b) + Number(d);

    t3.value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var d = document.getElementById("t5").value;
    var c = Number(a) - Number(b) - Number(d);

    t3.value = c;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var d = document.getElementById("t5").value;
    if (d == "")
        var c = Number(a) * Number(b);
    else
        var c = Number(a) * Number(b) *  Number(d);

    t3.value = c;
}

function division() {
    t3.value = Number(t1.value) / Number(t2.value) /  Number(t5.value);
}

function parite() {
    Number(t3.value)%2 == 0 ? t4.value = "Pair" : t4.value = "Impair";
}

function permute() {
    [t1.value, t2.value] = [t2.value, t1.value];
}