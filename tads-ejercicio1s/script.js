function cambiarTamaño(tamaño) {
  const imagen = document.getElementById("imagen");

  // quitar todas las clases previas
  imagen.classList.remove("x-pequeño", "pequeño", "mediano", "grande", "x-grande");

  // agregar la clase nueva
  imagen.classList.add(tamaño);
}
