function Recharge() {
    location.reload();
}

function Result() {
    t8.value = Number(t6.value)*Number(t7.value);
    t12.value = Number(t10.value)*Number(t11.value);
    t16.value = Number(t14.value)*Number(t15.value);
    t18.value = Number(t8.value) + Number(t12.value) + Number(t16.value);
}