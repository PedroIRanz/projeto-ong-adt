export function fecharModal(modal) {
    modal.classList.remove("visivel");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );
}


export function ativarModal() {
    const botaoAbrir =
        document.querySelector("#abrir-modal");

    const botaoFechar =
        document.querySelector("#fechar-modal");

    const modal =
        document.querySelector("#modal-fundo");


    if (!botaoAbrir || !botaoFechar || !modal) {
        return;
    }


    botaoAbrir.addEventListener(
        "click",
        function () {
            modal.classList.add("visivel");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );
        }
    );


    botaoFechar.addEventListener(
        "click",
        function () {
            fecharModal(modal);
        }
    );


    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {
                fecharModal(modal);
            }

        }
    );
}