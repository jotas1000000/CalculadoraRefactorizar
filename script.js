function calculadora() {
  let t = "";
  let v = null;
  let b = null;
  let o = false;
  let oc = "";
  panel = document.getElementsByClassName("panel")[0];
  uno = document.getElementsByClassName("item 1")[0];
  uno.addEventListener("click", function (event) {
    /*  console.log(event.target.innerText);
    console.log(panel.innerText); */
    panel.innerText = event.target.innerText;
  });
  dos = document.getElementsByClassName("item 2")[0];
  dos.addEventListener("click", function (event) {
    t = "";
    v = null;
    b = null;
    o = false;
    oc = "";
    panel.innerText = "";
  });
  tres = document.getElementsByClassName("item 3")[0];
  tres.addEventListener("click", function (event) {
    t = "";
    v = null;
    b = null;
    o = false;
    oc = "";
    panel.innerText = "";
  });
  cuatro = document.getElementsByClassName("item 4")[0];
  cuatro.addEventListener("click", function (event) {
    if (b !== null) {
      if (b / 10 > 1) {
        b = (b - (b % 10)) / 10;
        t = `${v} ${oc} ${b}`;
        panel.innerText = t;
      } else if (b / 10 > 0) {
        b = null;
        t = `${v} ${oc}`;
        panel.innerText = t;
      }
    } else if (o === true) {
      o = false;
      oc = "";
      t = `${v} `;
      panel.innerText = t;
    } else if (v !== null) {
      if (v / 10 > 1) {
        v = (v - (v % 10)) / 10;
        t = `${v} `;
        panel.innerText = t;
      } else if (v / 10 > 0) {
        v = null;
        t = ``;
        panel.innerText = t;
      }
    }
  });
  cinco = document.getElementsByClassName("item 5")[0];
  cinco.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  seis = document.getElementsByClassName("item 6")[0];
  seis.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  siete = document.getElementsByClassName("item 7")[0];
  siete.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  ocho = document.getElementsByClassName("item 8")[0];
  ocho.addEventListener("click", function (event) {
    if (v !== null) {
      if (o === true) {
        t = `${v} + `;
        oc = "+";
        panel.innerText = t;
      } else {
        o = true;
        oc = "+";
        t = `${v} + `;
        panel.innerText = t;
      }
    }
  });
  nueve = document.getElementsByClassName("item 9")[0];
  nueve.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  diez = document.getElementsByClassName("item 10")[0];
  diez.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  once = document.getElementsByClassName("item 11")[0];
  once.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  doce = document.getElementsByClassName("item 12")[0];
  doce.addEventListener("click", function (event) {
    if (v !== null) {
      if (o === true) {
        t = `${v} - `;
        oc = "-";
        panel.innerText = t;
      } else {
        o = true;
        oc = "-";
        t = `${v} - `;
        panel.innerText = t;
      }
    }
  });
  trece = document.getElementsByClassName("item 13")[0];
  trece.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  catorce = document.getElementsByClassName("item 14")[0];
  catorce.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  quince = document.getElementsByClassName("item 15")[0];
  quince.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  sixteen = document.getElementsByClassName("item 16")[0];
  sixteen.addEventListener("click", function (event) {
    if (v !== null) {
      if (o === true) {
        t = `${v} * `;
        oc = "*";
        panel.innerText = t;
      } else {
        o = true;
        oc = "*";
        t = `${v} * `;
        panel.innerText = t;
      }
    }
  });
  seventeen = document.getElementsByClassName("item 17")[0];
  eighteen = document.getElementsByClassName("item 18")[0];
  eighteen.addEventListener("click", function (event) {
    t = t + `${event.target.innerText}`;

    if (o === true) {
      b = b * 10 + parseInt(event.target.innerText);
    } else {
      v = v * 10 + parseInt(event.target.innerText);
    }
    console.log(v);
    panel.innerText = t;
  });
  nineteen = document.getElementsByClassName("item 19")[0];
  nineteen.addEventListener("click", function (event) {
    if (v !== null && b !== null && o !== false) {
      if (oc === "+") {
        v = v + b;
        b = null;
        o = false;
        oc = "";
        t = `${v}`;
        panel.innerText = t;
        t = "";
        v = null;
      } else if (oc === "-") {
        v = v - b;
        b = null;
        o = false;
        oc = "";
        t = `${v}`;
        panel.innerText = t;
        t = "";
        v = null;
      } else if (oc === "*") {
        v = v * b;
        b = null;
        o = false;
        oc = "";
        t = `${v}`;
        panel.innerText = t;
        t = "";
        v = null;
      } else {
        v = v / b;
        b = null;
        o = false;
        oc = "";
        t = `${v}`;
        panel.innerText = t;
        t = "";
        v = null;
      }
    }
  });
  twenty = document.getElementsByClassName("item 20")[0];
  twenty.addEventListener("click", function (event) {
    if (v !== null) {
      if (o === true) {
        t = `${v} / `;
        oc = "/";
        panel.innerText = t;
      } else {
        o = true;
        oc = "/";
        t = `${v} / `;
        panel.innerText = t;
      }
    }
  });
}

calculadora();