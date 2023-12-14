$(document).ready(function() {
    $("#nextStep1").click(function() {
        var nombreValue = $("#nombre").val();
        var apellidoValue = $("#apellido").val();


          // Valida que los campos Nombre y Apellido no estén vacios
        if (nombreValue.trim() === "") {
            $("#nombreError").text("Por favor, ingrese el Nombre.").show();
            return;
        } else {
            $("#nombreError").hide();
        }

        if (apellidoValue.trim() === "") {
            $("#apellidoError").text("Por favor, ingrese el Apellido.").show();
            return;
        } else {
            $("#apellidoError").hide();
        }

        // Valida que los campos Nombre y Apellido  no contengan ningun numero o carácteres especiales
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñüÜ\s]+$/.test(nombreValue)) {
            $("#nombreError").text("Ingrese un nombre válido.").show();
            return;
        } else {
            $("#nombreError").hide();
        }

        if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñüÜ\s]+$/.test(apellidoValue)) {
            $("#apellidoError").text("Ingrese un apellido válido.").show();
            return;
        } else {
            $("#apellidoError").hide();
        }

        $("#step1").hide();
        $("#step2").show();
    });

    $("#prevStep2").click(function() {
        $("#step2").hide();
        $("#step1").show();
    });

    $("#nextStep2").click(function() {
        var dniValue = $("#dni").val();
        var cuilValue = $("#cuil").val();

        // Valida que los campos DNI y CUIL no estén vacíos
        if (dniValue.trim() === "") {
            $("#dniError").text("Por favor, ingrese el DNI.").show();
            return;
        } else {
            $("#dniError").hide();
        }

        if (cuilValue.trim() === "") {
            $("#cuilError").text("Por favor, ingrese el CUIL.").show();
            return;
        } else {
            $("#cuilError").hide();
        }

        // Valida que el DNI y CUIL solo contengan números
        if (!/^\d+$/.test(dniValue)) {
            $("#dniError").text("Ingrese solo números.").show();
            return;
        } else {
            $("#dniError").hide();
        }

        if (!/^\d+$/.test(cuilValue)) {
            $("#cuilError").text("Ingrese solo números.").show();
            return;
        } else {
            $("#cuilError").hide();
        }

        $("#step2").hide();
        $("#step3").show();

        // Actualiza la tabla resumen
        $("#summaryNombre").text($("#nombre").val());
        $("#summaryApellido").text($("#apellido").val());
        $("#summaryDNI").text(dniValue);
        $("#summaryCUIL").text(cuilValue);
    });

    $("#prevStep3").click(function() {
        $("#step3").hide();
        $("#step2").show();
    });

    // Evento para mostrar el mensaje de éxito
$("#confirm").click(function() {
    $("#customModal").show(); // Mostrar el cuadro de diálogo

    // Si se hace clic en "Sí, enviar"
    $("#confirmSI").click(function() {
        $("#customModal").hide(); 
        $("#successMessage").show(); 
    });

    // Si se hace clic en "Cancelar"
    $("#confirmCANCELAR").click(function() {
        $("#customModal").hide(); 
    });
});

// Oscurece el footer y su contenido junto con el texto cuando saltan los mensajes
$("#confirm").click(function() {
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    footer.querySelector("p").style.color = "rgba(255, 255, 255, 0.6)";
});

// Devuelve el color original al footer y su contenido al cancelar el envío
$("#cancel").click(function() {
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "#1e60ac";
    footer.querySelector("p").style.color = "white"; // no logre que vuelva al blanco original
});


});
