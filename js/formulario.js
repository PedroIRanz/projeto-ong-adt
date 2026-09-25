import {
    obterColaboradores,
    salvarColaboradores
} from "./storage.js";


import {
    ativarModal
} from "./modal.js";


export function ativarFormulario() {
    const formulario =
        document.querySelector("#form-cadastro");


    if (!formulario) {
        return;
    }


    const campos =
        formulario.querySelectorAll("input[required]");


    const alerta =
        document.querySelector("#alerta-sucesso");


    campos.forEach(function (campo) {

        campo.addEventListener(
            "input",
            function () {

                alerta.classList.remove("visivel");


                if (campo.validity.valid) {

                    campo.classList.remove(
                        "campo-invalido"
                    );

                    campo.classList.add(
                        "campo-valido"
                    );

                }

                else {

                    campo.classList.remove(
                        "campo-valido"
                    );

                    campo.classList.add(
                        "campo-invalido"
                    );

                }

            }
        );

    });


    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;

            }


            const colaborador = {

                nome:
                    document.querySelector("#nome").value,

                cpf:
                    document.querySelector("#cpf").value,

                data:
                    document.querySelector("#data").value,

                email:
                    document.querySelector("#email").value,

                telefone:
                    document.querySelector("#telefone").value,

                rua:
                    document.querySelector("#rua").value,

                numero:
                    document.querySelector("#numero").value,

                bairro:
                    document.querySelector("#bairro").value,

                cidade:
                    document.querySelector("#cidade").value,

                estado:
                    document.querySelector("#estado").value,

                cep:
                    document.querySelector("#cep").value

            };


            const colaboradores =
                obterColaboradores();


            colaboradores.push(colaborador);


            salvarColaboradores(
                colaboradores
            );


            console.log(colaboradores);


            alerta.classList.add(
                "visivel"
            );


            formulario.reset();


            campos.forEach(function (campo) {

                campo.classList.remove(
                    "campo-valido"
                );

                campo.classList.remove(
                    "campo-invalido"
                );

            });

        }
    );


    ativarModal();
}