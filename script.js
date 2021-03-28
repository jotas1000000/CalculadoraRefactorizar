function calculadora() {
  let texto = "";
  let primDig = null;
  let segDig = null;
  let operacion = false;
  let oc = "";
  panel = document.getElementsByClassName("panel")[0];
  uno = document.getElementsByClassName("item 1")[0];
  uno.addEventListener("click", function (event) {
    panel.innerText = event.target.innerText;
  });
  dos = document.getElementsByClassName("item 2")[0];
  dos.addEventListener("click", function (event) {
    texto = "";
    primDig = null;
    segDig = null;
    operacion = false;
    oc = "";
    panel.innerText = "";
  });
  tres = document.getElementsByClassName("item 3")[0];
  tres.addEventListener("click", function (event) {
    texto = "";
    primDig = null;
    segDig = null;
    operacion = false;
    oc = "";
    panel.innerText = "";
  });
  cuatro = document.getElementsByClassName("item 4")[0];
  cuatro.addEventListener("click", function (event) {
    if (segDig !== null) {
      if (segDig / 10 > 1) {
        segDig = (segDig - (segDig % 10)) / 10;
        texto = `${primDig} ${oc} ${segDig}`;
      } else if (segDig / 10 > 0) {
        segDig = null;
        texto = `${primDig} ${oc}`;
      }
    } else if (operacion === true) {
      operacion = false;
      oc = "";
      texto = `${primDig} `;
      panel.innerText = texto;
    } else if (primDig !== null) {
      if (primDig / 10 > 1) {
        primDig = (primDig - (primDig % 10)) / 10;
        texto = `${primDig} `;
      } else if (primDig / 10 > 0) {
        primDig = null;
        texto = ``;
      }
    }
    panel.innerText = texto;
  });
  cinco = document.getElementsByClassName("item 5")[0];
  cinco.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  seis = document.getElementsByClassName("item 6")[0];
  seis.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;

    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  siete = document.getElementsByClassName("item 7")[0];
  siete.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;

    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  ocho = document.getElementsByClassName("item +")[0];
  ocho.addEventListener("click", function (event) {
    if (primDig !== null) {
      if (operacion === true) {
        texto = `${primDig} + `;
        oc = "+";
      } else {
        operacion = true;
        oc = "+";
        texto = `${primDig} + `;
      }
    }
    panel.innerText = texto;
  });
  nueve = document.getElementsByClassName("item 9")[0];
  nueve.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  diez = document.getElementsByClassName("item 10")[0];
  diez.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  once = document.getElementsByClassName("item 11")[0];
  once.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  doce = document.getElementsByClassName("item -")[0];
  doce.addEventListener("click", function (event) {
    if (primDig !== null) {
      if (operacion === true) {
        texto = `${primDig} - `;
        oc = "-";
      } else {
        operacion = true;
        oc = "-";
        texto = `${primDig} - `;
      }
    }
    panel.innerText = texto;
  });
  trece = document.getElementsByClassName("item 13")[0];
  trece.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  catorce = document.getElementsByClassName("item 14")[0];
  catorce.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  quince = document.getElementsByClassName("item 15")[0];
  quince.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  sixteen = document.getElementsByClassName("item *")[0];
  sixteen.addEventListener("click", function (event) {
    if (primDig !== null) {
      if (operacion === true) {
        texto = `${primDig} * `;
        oc = "*";
      } else {
        operacion = true;
        oc = "*";
        texto = `${primDig} * `;
      }
    }
    panel.innerText = texto;
  });
  seventeen = document.getElementsByClassName("item 17")[0];
  eighteen = document.getElementsByClassName("item 18")[0];
  eighteen.addEventListener("click", function (event) {
    texto = texto + `${event.target.innerText}`;
    if (operacion === true) {
      segDig = segDig * 10 + parseInt(event.target.innerText);
    } else {
      primDig = primDig * 10 + parseInt(event.target.innerText);
    }
    console.log(primDig);
    panel.innerText = texto;
  });
  nineteen = document.getElementsByClassName("item =")[0];
  nineteen.addEventListener("click", function (event) {
    if (primDig !== null && segDig !== null && o !== false) {
      if (oc === "+") {
        primDig = primDig + segDig;
      } else if (oc === "-") {
        primDig = primDig - segDig;
      } else if (oc === "*") {
        primDig = primDig * segDig;
      } else {
        primDig = primDig / segDig;
      }
    }
  });
  twenty = document.getElementsByClassName("item /")[0];
  twenty.addEventListener("click", function (event) {
    if (primDig !== null) {
      if (operacion === true) {
        texto = `${primDig} / `;
        oc = "/";
      } else {
        operacion = true;
        oc = "/";
        texto = `${primDig} / `;
      }
    }
    panel.innerText = texto;
  });
}

calculadora();