const escopo = () => {
  const container = document.querySelector(".container");

  const lista = document.createElement("ul");
  container.appendChild(lista);

  // const getApi = async () => {
  //   const url = 'https://github.com/oGabrielArruda/api-charadas';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };

  const frases = ['oi', 'tudo', 'bem', 'com', 'você'];

  const createList = async () => {
    const data = frases;
    for(let i = 0; i < data.length; i += 1) {
      const item = document.createElement("li");
      item.innerHTML = `<p>${data[i]}</p>`;
      lista.appendChild(item);
    }
  };

  createList();
};

escopo();
