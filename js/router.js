import {
    paginaInicio,
    paginaProjetos,
    paginaCadastro
} from "./templates.js";


import {
    ativarFormulario
} from "./formulario.js";


export function carregarPagina() {
    const rota =
        location.hash || "#inicio";


    const app =
        document.querySelector("#app");


    if (!app) {
        return;
    }


    if (rota === "#inicio") {

        app.innerHTML =
            paginaInicio();

    }


    else if (rota === "#projetos") {

        app.innerHTML =
            paginaProjetos();

    }


    else if (
        rota === "#voluntariados" ||
        rota === "#doacoes" ||
        rota === "#contribuicao"
    ) {

        app.innerHTML =
            paginaProjetos();


        const idSecao =
            rota.substring(1);


        const secao =
            document.querySelector(
                "#" + idSecao
            );


        if (secao) {

            secao.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    else if (rota === "#cadastro") {

        app.innerHTML =
            paginaCadastro();


        ativarFormulario();

    }


    else {

        app.innerHTML = `
            <section>

                <h2>Página não encontrada</h2>

                <p>
                    A página solicitada não existe.
                </p>

            </section>
        `;

    }


    const menuToggle =
        document.querySelector("#menu-toggle");


    if (menuToggle) {
        menuToggle.checked = false;
    }


    app.focus();
}