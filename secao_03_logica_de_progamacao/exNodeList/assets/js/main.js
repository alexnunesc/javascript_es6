const escopo = () => {
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  const paragrafos = container.querySelectorAll("p");

  const estilosBody = () => {
    const colorBody = getComputedStyle(body);
    paragrafos.forEach((p) => {
      p.style.backgroundColor = colorBody.backgroundColor;
    });
  };

  estilosBody();

};

escopo();
