export function ativarTema() {

    const botao =
        document.querySelector("#alternar-contraste");

    if (!botao) {
        return;
    }

    const contrasteSalvo =
        localStorage.getItem("altoContraste") === "true";

    document.body.classList.toggle(
        "alto-contraste",
        contrasteSalvo
    );

    botao.setAttribute(
        "aria-pressed",
        contrasteSalvo
    );

    botao.addEventListener("click", function () {

        const ativo =
            document.body.classList.toggle("alto-contraste");

        botao.setAttribute(
            "aria-pressed",
            ativo
        );

        localStorage.setItem(
            "altoContraste",
            ativo
        );
    });
}