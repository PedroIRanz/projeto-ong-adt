export function paginaInicio() {
    return `
        <section>
            <h2>Quem somos?</h2>

            <img
                src="../imagens/ong.png"
                alt="Voluntários realizando cortes de cabelo em pessoas atendidas pela ONG">

            <p>
                Somos um grupo de três amigos que, desde 5 de fevereiro de 2004,
                busca manter com amor a autoestima de pessoas mais humildes.
            </p>

            <p>
                Hoje somos muito mais do que três amigos.
                Nosso projeto cresceu e alcança pessoas
                em várias regiões do Brasil.
            </p>

            <ul>
                <li>Mais de 1.200 colaboradores espalhados pelo Brasil</li>
                <li>Presença em mais de 15 estados</li>
                <li>Mais de 600 pessoas atendidas diariamente</li>
            </ul>
        </section>

        <section>
            <h2>Nossa missão</h2>

            <p>
                Buscamos acolher e atender pessoas em situação
                de vulnerabilidade, sem fins lucrativos.
            </p>

            <ul>
                <li>Cortes de cabelo para todos</li>
                <li>Barba para todos</li>
                <li>Sobrancelha para todos</li>
            </ul>
        </section>

        <section>
            <h2>Contato</h2>

            <p>Quer nos ajudar ou conhecer mais sobre nosso trabalho?</p>
            <p>Instagram: @ADT.br</p>
            <p>Telefone: (19) 99999-9999</p>
            <p>E-mail: amigosdaT@ong.com</p>
        </section>
    `;
}


export function criarProjeto(id, titulo, conteudo) {
    return `
        <section id="${id}">
            <h2>${titulo}</h2>
            ${conteudo}
        </section>
    `;
}


export function paginaProjetos() {
    const conteudoVoluntariado = `
        <span class="badge">Voluntariado</span>

        <p>
            Nosso trabalho é voluntário e não possui remuneração.
            Buscamos pessoas que desejam doar seu tempo e conhecimento
            para ajudar quem mais precisa.
        </p>

        <p>
            Profissionais como barbeiros, cabeleireiros e pessoas
            dispostas a auxiliar na organização e no atendimento
            são sempre bem-vindos.
        </p>
    `;

    const conteudoDoacoes = `
        <p>
            Para continuarmos realizando nossos atendimentos,
            precisamos de materiais e produtos utilizados no dia a dia.
        </p>

        <p>Alguns itens que podem ser doados:</p>

        <ul>
            <li>Máquinas de cortar cabelo</li>
            <li>Tesouras e pentes</li>
            <li>Produtos de higiene</li>
            <li>Toalhas e capas de corte</li>
        </ul>
    `;

    const conteudoContribuicao = `
        <p>
            As contribuições financeiras ajudam no transporte dos
            voluntários, na compra de materiais e na manutenção dos
            projetos realizados pela ONG.
        </p>

        <p>
            Quem desejar contribuir pode realizar uma doação por PIX.
        </p>

        <p>
            <strong>Chave PIX:</strong> amigosdaT@ong.com
        </p>
    `;

    return `
        <h1>Projetos e formas de ajudar</h1>

        <div class="grade-projetos">

            ${criarProjeto(
                "voluntariados",
                "Voluntariado",
                conteudoVoluntariado
            )}

            ${criarProjeto(
                "doacoes",
                "Campanhas de doação",
                conteudoDoacoes
            )}

            ${criarProjeto(
                "contribuicao",
                "Contribuição financeira",
                conteudoContribuicao
            )}

        </div>
    `;
}


export function paginaCadastro() {
    return `
        <h1>Cadastro de colaborador</h1>

        <form id="form-cadastro">

            <fieldset>
                <legend>Dados pessoais</legend>

                <ul>
                    <li>
                        <label for="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome Completo"
                            required>
                    </li>

                    <li>
                        <label for="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            inputmode="numeric"
                            placeholder="000.000.000-00"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            maxlength="14"
                            title="Digite o CPF no formato 000.000.000-00"
                            required>
                    </li>

                    <li>
                        <label for="data">Data de nascimento</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            required>
                    </li>

                    <li>
                        <label for="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required>
                    </li>

                    <li>
                        <label for="telefone">Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            maxlength="15"
                            title="Digite o telefone no formato (00) 00000-0000"
                            required>
                    </li>
                </ul>
            </fieldset>


            <fieldset>
                <legend>Endereço</legend>

                <ul>
                    <li>
                        <label for="rua">Rua/Avenida</label>
                        <input type="text" id="rua" name="rua" required>
                    </li>

                    <li>
                        <label for="numero">Número</label>
                        <input type="text" id="numero" name="numero" required>
                    </li>

                    <li>
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" required>
                    </li>

                    <li>
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" required>
                    </li>

                    <li>
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" name="estado" required>
                    </li>

                    <li>
                        <label for="cep">CEP</label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            inputmode="numeric"
                            placeholder="00000-000"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxlength="9"
                            title="Digite o CEP no formato 00000-000"
                            required>
                    </li>
                </ul>
            </fieldset>


            <button type="submit" id="botao-cadastro">
                Enviar cadastro
            </button>


            <div
                id="alerta-sucesso"
                class="alerta-sucesso">

                Cadastro enviado com sucesso!

            </div>


            <button
                type="button"
                id="abrir-modal"
                class="botao-modal">

                Ver informações

            </button>


            <div
                id="modal-fundo"
                class="modal-fundo"
                aria-hidden="true">

                <div class="modal-conteudo">

                    <h2>Cadastro de colaborador</h2>

                    <p>
                        Obrigado pelo interesse em colaborar
                        com a ADT - Amigos da Tesoura.
                    </p>

                    <button
                        type="button"
                        id="fechar-modal"
                        class="fechar-modal">

                        Fechar

                    </button>

                </div>

            </div>

        </form>
    `;
}