import {
    carregarPagina
} from "./router.js";

import {
    ativarTema
} from "./tema.js";


ativarTema();

window.addEventListener(
    "hashchange",
    carregarPagina
);

carregarPagina();