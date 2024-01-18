function hitungLuasKeliling() {
  var sideLength = parseFloat(document.getElementById("sideLength").value);

  if (!isNaN(sideLength) && sideLength > 0) {
    var luas = sideLength * sideLength;
    var keliling = 4 * sideLength;

    var rumusLuas =
      "Luas: Sisi x Sisi = " + sideLength + " x " + sideLength + " = " + luas;
    var rumusKeliling =
      "Keliling: 4 x Sisi = 4 x " + sideLength + " = " + keliling;

    var hasil = "Luas: " + luas + "<br>Keliling: " + keliling;

    document.getElementById("rumus").innerHTML =
      rumusLuas + "<br>" + rumusKeliling;
  } else {
    alert("Masukkan panjang sisi yang valid");
  }
}

function resetForm() {
  document.getElementById("sideLength").value = "";
  document.getElementById("rumus").innerHTML = "";
}
