import * as esbuild from "esbuild";
import { minify } from "html-minifier-terser";
import {
    readFile,
    writeFile,
    mkdir,
    rm,
    copyFile,
    readdir,
    stat
} from "node:fs/promises";
import path from "node:path";


const pastaDist = "dist";


// Apaga a build anterior e cria uma nova pasta
await rm(pastaDist, {
    recursive: true,
    force: true
});

await mkdir(pastaDist, {
    recursive: true
});

await mkdir(
    path.join(pastaDist, "imagens"),
    { recursive: true }
);


// -------------------------
// JAVASCRIPT
// -------------------------

await esbuild.build({
    entryPoints: ["js/main.js"],
    bundle: true,
    minify: true,
    outfile: "dist/app.min.js"
});


// Corrige caminhos das imagens usadas nos templates JS
let javascriptFinal =
    await readFile(
        "dist/app.min.js",
        "utf8"
    );

javascriptFinal =
    javascriptFinal.replaceAll(
        "../imagens/",
        "./imagens/"
    );

await writeFile(
    "dist/app.min.js",
    javascriptFinal,
    "utf8"
);


// -------------------------
// CSS
// -------------------------

const cssOriginal =
    await readFile(
        "css/style.css",
        "utf8"
    );

const cssMinificado =
    await esbuild.transform(
        cssOriginal,
        {
            loader: "css",
            minify: true
        }
    );

await writeFile(
    "dist/style.min.css",
    cssMinificado.code,
    "utf8"
);


// -------------------------
// HTML
// -------------------------

let htmlOriginal =
    await readFile(
        "html/index.html",
        "utf8"
    );


htmlOriginal =
    htmlOriginal
        .replace(
            "../css/style.css",
            "./style.min.css"
        )
        .replace(
            '../js/main.js',
            './app.min.js'
        );


const htmlMinificado =
    await minify(
        htmlOriginal,
        {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
            minifyJS: true
        }
    );


await writeFile(
    "dist/index.html",
    htmlMinificado,
    "utf8"
);


// -------------------------
// IMAGENS
// -------------------------

const imagens =
    await readdir("imagens");


for (const imagem of imagens) {

    await copyFile(
        path.join("imagens", imagem),
        path.join(
            pastaDist,
            "imagens",
            imagem
        )
    );

}


// -------------------------
// TAMANHO DOS ARQUIVOS
// -------------------------

async function tamanhoArquivo(arquivo) {

    const dados =
        await stat(arquivo);

    return dados.size;

}


async function tamanhoJavaScriptOriginal() {

    const arquivos =
        await readdir("js");

    let total = 0;


    for (const arquivo of arquivos) {

        if (arquivo.endsWith(".js")) {

            total +=
                await tamanhoArquivo(
                    path.join(
                        "js",
                        arquivo
                    )
                );

        }

    }


    return total;

}


function calcularReducao(
    original,
    final
) {

    return (
        (
            (original - final)
            / original
        )
        * 100
    ).toFixed(2);

}


const tamanhoHtmlOriginal =
    await tamanhoArquivo(
        "html/index.html"
    );

const tamanhoHtmlFinal =
    await tamanhoArquivo(
        "dist/index.html"
    );


const tamanhoCssOriginal =
    await tamanhoArquivo(
        "css/style.css"
    );

const tamanhoCssFinal =
    await tamanhoArquivo(
        "dist/style.min.css"
    );


const tamanhoJsOriginal =
    await tamanhoJavaScriptOriginal();

const tamanhoJsFinal =
    await tamanhoArquivo(
        "dist/app.min.js"
    );


console.log("");
console.log("BUILD CONCLUÍDA");
console.log("------------------------------");

console.log(
    `HTML: ${tamanhoHtmlOriginal} → ${tamanhoHtmlFinal} bytes`
);

console.log(
    `Redução HTML: ${calcularReducao(
        tamanhoHtmlOriginal,
        tamanhoHtmlFinal
    )}%`
);


console.log("");

console.log(
    `CSS: ${tamanhoCssOriginal} → ${tamanhoCssFinal} bytes`
);

console.log(
    `Redução CSS: ${calcularReducao(
        tamanhoCssOriginal,
        tamanhoCssFinal
    )}%`
);


console.log("");

console.log(
    `JavaScript: ${tamanhoJsOriginal} → ${tamanhoJsFinal} bytes`
);

console.log(
    `Redução JavaScript: ${calcularReducao(
        tamanhoJsOriginal,
        tamanhoJsFinal
    )}%`
);

console.log("------------------------------");
console.log("Arquivos gerados em /dist");