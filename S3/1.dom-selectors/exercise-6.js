document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('[data-function="testMe"]');
  if (elements.length >= 3) {
    console.log(elements[2]); 
  } else {
    console.log(
      'No hay suficientes elementos con el atributo data-function="testMe"'
    );
  }
});
