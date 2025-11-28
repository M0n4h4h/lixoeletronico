// ========================================
// ANIMAÇÃO DE CONTADORES (ESTATÍSTICAS)
// ========================================

/**
 * Anima os números das estatísticas quando a seção entra na viewport
 */
function animarContadores() {
    const contadores = document.querySelectorAll('.stat-number');
    const opcoes = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const contador = entry.target;
                const valorFinal = parseInt(contador.getAttribute('data-target'));
                const duracao = 2000; // 2 segundos
                const incremento = valorFinal / (duracao / 16); // 60fps
                let valorAtual = 0;

                const atualizarContador = () => {
                    valorAtual += incremento;
                    if (valorAtual < valorFinal) {
                        contador.textContent = Math.floor(valorAtual);
                        requestAnimationFrame(atualizarContador);
                    } else {
                        contador.textContent = valorFinal;
                    }
                };

                atualizarContador();
                observer.unobserve(contador);
            }
        });
    }, opcoes);

    contadores.forEach(contador => {
        observer.observe(contador);
    });
}

// ========================================
// VALIDAÇÃO E ENVIO DO FORMULÁRIO
// ========================================

/**
 * Valida e processa o formulário de coleta
 */
function configurarFormulario() {
    const form = document.getElementById('formColeta');
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        // Validação básica
        if (!validarFormulario(form)) {
            return;
        }

        // Coletar dados do formulário
        const dadosFormulario = {
            nome: form.nome.value.trim(),
            email: form.email.value.trim(),
            escola: form.escola.value.trim(),
            telefone: form.telefone.value.trim(),
            tipoEquipamento: form.tipoEquipamento.value,
            quantidade: parseInt(form.quantidade.value),
            estado: form.estado.value,
            observacoes: form.observacoes.value.trim(),
            dataEnvio: new Date().toLocaleString('pt-BR')
        };

        // Simular envio (em produção, seria enviado para um servidor)
        console.log('Dados do formulário:', dadosFormulario);
        
        // Salvar no localStorage para demonstração
        salvarDadosLocalStorage(dadosFormulario);

        // Exibir mensagem de sucesso
        exibirMensagemSucesso(mensagemSucesso);

        // Limpar formulário
        form.reset();

        // Scroll suave até a mensagem
        mensagemSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Resetar mensagem ao limpar formulário
    form.addEventListener('reset', function() {
        mensagemSucesso.classList.remove('show');
    });
}

/**
 * Valida os campos do formulário
 * @param {HTMLFormElement} form - Formulário a ser validado
 * @returns {boolean} - True se válido, false caso contrário
 */
function validarFormulario(form) {
    // Validar nome
    if (form.nome.value.trim().length < 3) {
        alert('Por favor, insira um nome válido (mínimo 3 caracteres).');
        form.nome.focus();
        return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.value.trim())) {
        alert('Por favor, insira um e-mail válido.');
        form.email.focus();
        return false;
    }

    // Validar escola
    if (form.escola.value.trim().length < 3) {
        alert('Por favor, insira o nome da escola/instituição.');
        form.escola.focus();
        return false;
    }

    // Validar tipo de equipamento
    if (!form.tipoEquipamento.value) {
        alert('Por favor, selecione o tipo de equipamento.');
        form.tipoEquipamento.focus();
        return false;
    }

    // Validar quantidade
    if (form.quantidade.value < 1) {
        alert('Por favor, insira uma quantidade válida (mínimo 1).');
        form.quantidade.focus();
        return false;
    }

    // Validar estado
    if (!form.estado.value) {
        alert('Por favor, selecione o estado do equipamento.');
        form.estado.focus();
        return false;
    }

    return true;
}

/**
 * Salva os dados do formulário no localStorage
 * @param {Object} dados - Dados a serem salvos
 */
function salvarDadosLocalStorage(dados) {
    try {
        // Recuperar dados existentes
        let registros = JSON.parse(localStorage.getItem('coletasEletronicos')) || [];
        
        // Adicionar novo registro
        registros.push(dados);
        
        // Salvar de volta no localStorage
        localStorage.setItem('coletasEletronicos', JSON.stringify(registros));
        
        console.log('Total de registros salvos:', registros.length);
    } catch (erro) {
        console.error('Erro ao salvar dados:', erro);
    }
}

/**
 * Exibe a mensagem de sucesso
 * @param {HTMLElement} elemento - Elemento da mensagem
 */
function exibirMensagemSucesso(elemento) {
    elemento.classList.add('show');
    
    // Ocultar mensagem após 5 segundos
    setTimeout(() => {
        elemento.classList.remove('show');
    }, 5000);
}

// ========================================
// MÁSCARA PARA TELEFONE
// ========================================

/**
 * Aplica máscara de telefone brasileiro
 */
function aplicarMascaraTelefone() {
    const inputTelefone = document.getElementById('telefone');
    
    inputTelefone.addEventListener('input', function(evento) {
        let valor = evento.target.value.replace(/\D/g, '');
        
        if (valor.length <= 11) {
            // Formato: (84) 99999-9999
            valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
            valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        
        evento.target.value = valor;
    });
}

// ========================================
// NAVEGAÇÃO SUAVE
// ========================================

/**
 * Adiciona comportamento de scroll suave aos links de navegação
 */
function configurarNavegacaoSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(evento) {
            const href = this.getAttribute('href');
            
            // Ignorar links vazios
            if (href === '#') {
                return;
            }
            
            evento.preventDefault();
            
            const elemento = document.querySelector(href);
            if (elemento) {
                const offsetTop = elemento.offsetTop - 80; // Compensar header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// HIGHLIGHT DA NAVEGAÇÃO ATIVA
// ========================================

/**
 * Destaca o link de navegação correspondente à seção visível
 */
function configurarNavegacaoAtiva() {
    const secoes = document.querySelectorAll('section[id]');
    const linksNav = document.querySelectorAll('.nav a[href^="#"]');
    
    const opcoes = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66%'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remover classe ativa de todos os links
                linksNav.forEach(link => {
                    link.style.color = '';
                    link.style.borderBottomColor = '';
                });
                
                // Adicionar classe ativa ao link correspondente
                const linkAtivo = document.querySelector(`.nav a[href="#${id}"]`);
                if (linkAtivo) {
                    linkAtivo.style.color = 'var(--cor-laranja)';
                    linkAtivo.style.borderBottomColor = 'var(--cor-laranja)';
                }
            }
        });
    }, opcoes);
    
    secoes.forEach(secao => {
        observer.observe(secao);
    });
}

// ========================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ========================================

/**
 * Adiciona animação de fade-in aos elementos quando entram na viewport
 */
function configurarAnimacoesEntrada() {
    const elementos = document.querySelectorAll('.step, .stat-card, .content-grid');
    
    const opcoes = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, opcoes);
    
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

/**
 * Inicializa todas as funcionalidades quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site da Campanha de Coleta de Lixo Eletrônico - Senac RN Mossoró');
    console.log('Inicializando funcionalidades...');
    
    // Inicializar funcionalidades
    animarContadores();
    configurarFormulario();
    aplicarMascaraTelefone();
    configurarNavegacaoSuave();
    configurarNavegacaoAtiva();
    configurarAnimacoesEntrada();
    
    console.log('Todas as funcionalidades foram inicializadas com sucesso!');
});

// ========================================
// UTILITÁRIO: VISUALIZAR DADOS SALVOS
// ========================================

/**
 * Função utilitária para visualizar todos os registros salvos
 * Execute no console: visualizarRegistros()
 */
function visualizarRegistros() {
    const registros = JSON.parse(localStorage.getItem('coletasEletronicos')) || [];
    console.table(registros);
    return registros;
}

/**
 * Função utilitária para limpar todos os registros
 * Execute no console: limparRegistros()
 */
function limparRegistros() {
    localStorage.removeItem('coletasEletronicos');
    console.log('Todos os registros foram removidos.');
}
