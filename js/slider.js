(function () {
  /*Funcion que se llama a si misma para proteger el codigo y no mezclarlo con otros archivos de js que se van a crear, osea proteger las variables de otros archivos*/

  const sliders =
    document.querySelectorAll(
      ".testimony__body"
    ); /*Obtener todas las clases testimony__body, contiene todos los sliders (sliders son las imagenes con los textos de las personas*/

  const buttonNext = document.querySelector("#next");

  const buttonBefore = document.querySelector("#before");

  let value;

  buttonNext.addEventListener("click", () => {
    changePosition(1);
  }); /*Es para que cuando se de click a ese boton, se ejecute la funcion de cambiar posicion */

  buttonBefore.addEventListener("click", () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    const currentTestimony = document.querySelector(".testimony__body--show")
      .dataset.id;
    value =
      Number(
        currentTestimony
      ); /*Va a ser igual al slider actual, osea al id del slider actual */
    value += add; /* Sumarle el valor que le pasamos a la funcion */

    /*slider.lenght es para saber cuantos elementos tengo actualmente en el array (slider), el +1 es para cuando llegue al 5 que no existe 
    ya que solo son 4 testimony body, pase algo (reinicie, vaya al 1) y el value===0, es para cuando se este en el slider 1, se reste 1 por lo que 
    queda en 0, y pase algo (vaya a la ultima)*/
    sliders[Number(currentTestimony) - 1].classList.remove(
      "testimony__body--show"
    );
    if (value === sliders.length + 1 || value === 0) {
      value =
        value === 0
          ? sliders.length
          : 1; /* Si value es 0, la idea es que no lo sea, por lo que deberia ir al ultimo slider, es caso contrario, si se rebasa el numero de sliders (osea es mas de los que hay), va a mandar al primero*/
    }
    sliders[value - 1].classList.add("testimony__body--show");
  };
})();