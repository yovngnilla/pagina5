(function () {
  //funcion autoinvocada para proteger las variables de otros archivos

  const titleQuestions = [...document.querySelectorAll(".questions__title")]; //los tres puntos es para convertirlo en un array
  console.log(titleQuestions);

  titleQuestions.forEach((question) => {
    //para obtener las preguntas individualmente
    question.addEventListener("click", () => {
      let height = 0; //para calcular el alto del elemento
      let answer = question.nextElementSibling; //el hermano del h3 (el cual es question__title) es el parrafo, que es lo que se guarda en answer
      let addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle("questions__padding--add");
      question.children[0].classList.toggle("question__arrow--rotate"); //para que gire la flecha en las questions, el toggle es para quitar o poner

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight; //da el alto minimo para que un elemento se muestre
      }
      answer.style.height = `${height}px`;
    });
  });
})();