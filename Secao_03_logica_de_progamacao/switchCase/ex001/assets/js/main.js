const escopo = () => {
  const h1 = document.querySelector(".titulo");


  const data = new Date();

  // Jeito facil de formatar a data
  // const dateFormated = new Intl.DateTimeFormat("pt-BR", {
  //   dateStyle: "full",
  //   timeStyle: "short",
  // }).format(data);

  // Jeito verboso de formatar a data
  function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        diaSemanaTexto = "Domingo";
        break;
      case 1:
        diaSemanaTexto = "Segunda-feira";
        break;
      case 2:
        diaSemanaTexto = "Terça-feira";
        break;
      case 3:
        diaSemanaTexto = "Quarta-feira";
        break;
      case 4:
        diaSemanaTexto = "Quinta-feira";
        break;
      case 5:
        diaSemanaTexto = "Sexta-feira";
        break;
      case 6:
        diaSemanaTexto = "Sábado";
        break;
      default:
        diaSemanaTexto = "Dia Não Existe";
        break;
    }

    return diaSemanaTexto;
  }

  function getMonthText(mes) {
    let mesTexto;

    switch (mes) {
      case 0:
        mesTexto = "Janeiro";
        break;
      case 1:
        mesTexto = "Fevereiro";
        break;
      case 2:
        mesTexto = "Março";
        break;
      case 3:
        mesTexto = "Abril";
        break;
      case 4:
        mesTexto = "Maio";
        break;
      case 5:
        mesTexto = "Junho";
        break;
      case 6:
        mesTexto = "Julho";
        break;
      case 7:
        mesTexto = "Agosto";
        break;
      case 8:
        mesTexto = "Setembro";
        break;
      case 9:
        mesTexto = "Outubro";
        break;
      case 10:
        mesTexto = "Novembro";
        break;
      case 11:
        mesTexto = "Dezembro";
        break;
      default:
        mesTexto = "Mês Não Existe";
        break;
    }

    return mesTexto;
  }

  const mes = data.getMonth();
  const mesTexto = getMonthText(mes);
  
  const diaSemana = data.getDay();
  const diaText = getDayWeekText(diaSemana);

  h1.innerHTML = ` ${diaText}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
};

escopo();
