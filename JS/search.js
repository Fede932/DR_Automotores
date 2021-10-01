const input = document.getElementById("inputId");
const btn = document.querySelector("#btnSearch");
const resultados = document.getElementById("resultados");

console.log(autos);

input.addEventListener("keyup", () => {
  console.log(input.value);
  mostrarResultados();
});

btn.addEventListener("click", () => {
  console.log(input.value);
  mostrarResultados();
});

function mostrarResultados() {
  limpiarHijos();

  const valor = input.value;

  if (valor === "") {
    alert("Completa el campo del buscador");
    return;
  };

  const resultadosAutos = filtrarDatos(valor);

  if (resultadosAutos.length === 0) {
    const nodo = sinResultados();
    resultados.appendChild(nodo);
  } else {
    resultadosAutos.forEach((res) => {
      const nodo = crearNodo(res);

      resultados.appendChild(nodo);
    });
  };
};

function sinResultados() {
  const nodo = document.createElement("h5");
  nodo.classList.add("sin-resultados");
  nodo.innerHTML = "No hay resultados";

  return nodo;
};

function filtrarDatos(valor) {
  return autos.filter((auto) =>
    auto.marca.toLowerCase().includes(valor.toLowerCase())
  );
};

function limpiarHijos() {
  while (resultados.lastElementChild) {
    resultados.removeChild(resultados.lastElementChild);
  };
};

function crearNodo(res) {
  const nodoParent = document.createElement("h5");
  nodoParent.classList.add("listado-resultado");
  nodoParent.addEventListener("click", () => {
    console.log("ir a la pagina " + res.url);
  window.location.href = res.url;

    const url = window.location.origin + "/" + res.url;
console.log(url)
  window.location.href = url;
  });

  const nodoImg = document.createElement("img");
  nodoImg.classList.add("logo");
  nodoImg.src = res.logo;

  const nodoTexto = document.createElement("span");
  nodoTexto.classList.add("texto");
  nodoTexto.innerHTML = res.marca;

  nodoParent.appendChild(nodoImg);
  nodoParent.appendChild(nodoTexto);

  return nodoParent;
};
