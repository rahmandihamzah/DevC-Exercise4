var tambah, kurang, bagi, kali

function initialize() {
    tambah = document.kalkulator.operator[0];
    kurang = document.kalkulator.operator[1];
    bagi = document.kalkulator.operator[2];
    kali = document.kalkulator.operator[3];
}

function hitung() {
    a = parseInt(document.kalkulator.value1.value);
    b = parseInt(document.kalkulator.value2.value);
    if (tambah.selected) {
        document.kalkulator.hasil.value = a + b;
    } else if (kurang.selected) {
        document.kalkulator.hasil.value = a - b;
    } else if (bagi.selected) {
        document.kalkulator.hasil.value = a / b;
    } else {
        document.kalkulator.hasil.value = a * b;
    }
}