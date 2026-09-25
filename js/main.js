import {
    carregarPagina
} from "./router.js";


window.addEventListener(
    "hashchange",
    carregarPagina
);


carregarPagina();