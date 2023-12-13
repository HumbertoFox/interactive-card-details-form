# Frontend Mentor - Interactive card details form

Esta é uma solução para o [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.


<div align="center">

![Visualização do design para o desafio de codificação Interactive card details form](./src/images/design/desktop-design.jpg)

![Visualização do design para o desafio de codificação Interactive card details form](./src/images/design/complete-state-desktop.jpg)

![Visualização do design para o desafio de codificação Interactive card details form](./src/images/design/mobile-design.jpg)

![Visualização do design para o desafio de codificação Interactive card details form](./src/images/design/complete-state-mobile.jpg)

![Visualização do design para o desafio de codificação Interactive card details form](./src/images/design/active-states.jpg)

</div>

## Bem-vindo! 👋

### O que aprendi

Mais uma prática com o HTML, CSS e Js! show 😎

Solução alternativa
```css
input[type=text]:focus {
    background: linear-gradient(var(--White), var(--White)) padding-box,
    linear-gradient(to right, var(--Gradient-from), var(--Gradient-to)) border-box;
    border: 1px solid transparent;
    border-radius: 7px;
}
```
Solução alternativa para
Border image gradient não combina com radius!
```css
input[type=text]:focus {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, var(--Gradient-from), var(--Gradient-to)) 1;
}
```
Removendo espaço digitado.
Colocando espaço a cada quatro caractere digitado.
```Js
selectInputList[1].addEventListener('input', function (e) {
    let numberValue = e.target.value.replace(/\s/g, '');
    numberValue = numberValue.replace(/(\w{4})/g, '$1 ').trim();
    e.target.value = numberValue;
});
```
Checando se possui caracteres diferentes de A-z e espaço / vazio!
```Js
/[^A-z|^\s]/.test(selectInputList[0].value)
```
Checando se possui caracteres diferentes de 0-9 e espaço / vazio
```Js
/[^0-9|^\s]/.test(selectInputList[1].value)
```

### Construído com 🚀

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em: 🚀

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
