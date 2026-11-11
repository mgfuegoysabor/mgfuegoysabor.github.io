/* MG Fuego y Sabor: galería y formulario de cotización */
      (function () {
        var box = document.getElementById("lightbox");
        if (!box || typeof box.showModal !== "function") return;
        var big = box.querySelector("img");
        var cap = box.querySelector("p");
        document.querySelectorAll(".x-gallery button").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var img = btn.querySelector("img");
            big.setAttribute("src", img.currentSrc || img.getAttribute("src"));
            big.alt = img.alt;
            cap.textContent = img.alt;
            box.showModal();
          });
        });
        box.querySelector(".x-lightbox__close").addEventListener("click", function () { box.close(); });
        box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
      })();

      (function () {
        var form = document.getElementById("cotizar");
        if (!form) return;
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          var v = function (n) { return (form.elements[n].value || "").trim(); };
          var fecha = v("fecha");
          if (/^\d{4}-\d{2}-\d{2}$/.test(fecha)) { var p = fecha.split("-"); fecha = p[2] + "-" + p[1] + "-" + p[0]; }
          var lines = ["Hola Mario, quiero cotizar un asado."];
          if (v("nombre")) lines.push("Nombre: " + v("nombre"));
          if (fecha) lines.push("Fecha del evento: " + fecha);
          if (v("personas")) lines.push("Número de personas: " + v("personas"));
          lines.push("Tipo de evento: " + v("tipo"));
          if (v("comentarios")) lines.push("Comentarios: " + v("comentarios"));
          var url = "https://wa.me/56951959603?text=" + encodeURIComponent(lines.join("\n"));
          var win = window.open(url, "_blank");
          if (win) { win.opener = null; } else { window.location.href = url; }
        });
      })();
