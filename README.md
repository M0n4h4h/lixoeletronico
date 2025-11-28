# Campanha de Coleta de Lixo Eletrônico - Senac RN Mossoró

Site desenvolvido para a campanha sustentável do **Senac RN Mossoró - 1º Ano B**, focada na coleta e reciclagem de lixo eletrônico em escolas da região.

## 📋 Descrição

Este site foi criado para divulgar a campanha de coleta de lixo eletrônico, informar a comunidade sobre o processo e permitir o registro de equipamentos coletados através de um formulário interativo.

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em desktops, tablets e smartphones
- **Paleta Minimalista**: Cores branco, laranja (#FF6B35) e azul (#1E88E5)
- **3 Arquivos Principais**: HTML, CSS e JavaScript
- **Código Limpo**: Identado e bem comentado para fácil edição
- **Formulário Interativo**: Validação e armazenamento local de dados
- **Animações Suaves**: Contadores animados e transições elegantes

## 📁 Estrutura de Arquivos

```
campanha-senac/
├── index.html          # Estrutura HTML do site
├── styles.css          # Estilos e responsividade
├── script.js           # Funcionalidades JavaScript
├── images/             # Pasta de imagens
│   ├── hero.jpg        # Imagem principal do banner
│   ├── collection.webp # Imagem da seção "Sobre"
│   └── recycling.png   # Imagem adicional
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Extraia todos os arquivos em uma pasta
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Usar um Servidor Local (Recomendado)

**Com Python:**
```bash
cd campanha-senac
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

**Com Node.js:**
```bash
cd campanha-senac
npx http-server -p 8000
```
Depois acesse: `http://localhost:8000`

## ✏️ Como Editar

### Alterar Textos

Abra o arquivo `index.html` e localize as seções:
- **Header**: Navegação e logo
- **Hero**: Banner principal
- **Sobre**: Informações da campanha
- **Como Funciona**: Processo em 4 etapas
- **Estatísticas**: Números de impacto
- **Formulário**: Campos de coleta
- **Footer**: Contato e redes sociais

### Alterar Cores

Abra o arquivo `styles.css` e modifique as variáveis no início:
```css
:root {
    --cor-branco: #FFFFFF;
    --cor-laranja: #FF6B35;
    --cor-azul: #1E88E5;
    /* ... */
}
```

### Alterar Imagens

1. Coloque suas imagens na pasta `images/`
2. No arquivo `index.html`, altere os atributos `src` das tags `<img>`
3. No arquivo `styles.css`, altere o `background-image` da classe `.hero`

### Alterar Estatísticas

No arquivo `index.html`, localize os elementos com `data-target` e altere os valores:
```html
<div class="stat-number" data-target="150">0</div>
```

### Personalizar Formulário

No arquivo `index.html`, adicione ou remova campos dentro da tag `<form id="formColeta">`.

## 📧 Informações de Contato

**E-mail:** contato@rn.senac.br  
**Instagram:** [@senacrn](https://instagram.com/senacrn)

## 🔧 Funcionalidades JavaScript

- **Contadores Animados**: Os números na seção "Nosso Impacto" são animados ao entrar na viewport
- **Validação de Formulário**: Campos obrigatórios e validação de e-mail
- **Máscara de Telefone**: Formatação automática para telefone brasileiro
- **Navegação Suave**: Scroll suave ao clicar nos links do menu
- **Armazenamento Local**: Dados do formulário salvos no localStorage do navegador
- **Responsividade**: Adaptação automática para diferentes tamanhos de tela

## 📱 Responsividade

O site foi testado e otimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 💾 Dados do Formulário

Os dados enviados pelo formulário são armazenados localmente no navegador (localStorage). Para visualizar os registros, abra o console do navegador (F12) e digite:

```javascript
visualizarRegistros()
```

Para limpar todos os registros:

```javascript
limparRegistros()
```

## 🌟 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Variáveis CSS, Media Queries
- **JavaScript ES6+**: Intersection Observer, LocalStorage, Validação de Formulários

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da campanha sustentável do Senac RN Mossoró - 1º Ano B.

---

**Desenvolvido com 💚 para um futuro mais sustentável**
