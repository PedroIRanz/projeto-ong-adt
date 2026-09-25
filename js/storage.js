export function obterColaboradores() {
    const dadosSalvos =
        localStorage.getItem("dbColaboradores");

    if (!dadosSalvos) {
        return [];
    }

    try {
        return JSON.parse(dadosSalvos);
    }

    catch (erro) {
        console.error(
            "Erro ao carregar os colaboradores:",
            erro
        );

        return [];
    }
}


export function salvarColaboradores(colaboradores) {
    localStorage.setItem(
        "dbColaboradores",
        JSON.stringify(colaboradores)
    );
}