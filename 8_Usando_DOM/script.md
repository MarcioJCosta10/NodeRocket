// Manipulando elementos
// getElementById() como pegar um elemento para depois manipular
// const element = document.getElementById('blog-title');
// console.log(element)

// // getElemntByClassName()
// const Classe = document.getElementsByClassName('one')
// console.log(Classe)

// getElementByTagName()
// const tag = 
// document.getElementsByTagName('h1')
// console.log(tag)

//querySelector() busca pelo seletor css, ele pega o primeiro que achar
// const querySelector = document.querySelector('.one')
// console.log(querySelector)

//querySelectorAll() Vai trazer um coleção de nós ou NodeList
// const querySelectorAll = document.querySelectorAll('.one')
//console.log(querySelectorAll)

// Com o querySelectorAll() como ele vai trazer uma lista de elementos consigo fazer um forEach()
// Assim consigo visualizar todos os elementos da NodeList
//querySelectorAll.forEach(el //=> console.log(el))

// Qual usar? Vai de acordo com sua necessidade

// getElementById() // Vai retornar o elemento
// getElementsByClassName() // Vai retornar o HTMLCollection -- Não é possível fazer o forEach()
// getElementsByTagName() // Vai retornar o HTMLCollection
// querySelector() // Vai retornar o elemento
// querySelectorAll() // Vai rertornar o NodeList -- Conseguimos fazer o forEach()

// Como manipular conteudo usando a propriedade textContent
// const element = document.querySelector('h1')

// // exibir os textos
// element.textContent = ' Olá Devs'
// console.log(element)
// // verificar o conteúdo do elemento
// console.log(element.textContent)
// // Concatenar textos
// element.textContent += ' Olá Devs'
// console.log(element.textContent)

// Manipulando conteúdo com 
// innerText -- troca o conteudo interno do elemento
// const elemento = document.querySelector('h1');
// elemento.innerText = "Olá Devs!"
// console.log(elemento)


//Manipulando conteúdo 
// innerHTML - Troca o html interno do elemento
// const element = document.querySelector('h1')
// element.innerHTML = "Olá Devs!<small>!!!</small>"

// Manipulando conteúdo 
// value -- Conseguimos atribuir o valor do input ou pegar o valor
// const element = document.querySelector('input')
// //element.value = "Valor que eu quiser!"
// //Posso também só verificar o valor do elemento
// console.log(element.value)
// element.value = "outro valor"
// console.log(element.value)

//Manipulando elementos 
// Atributos -- adicionei um atributo ao elemento
// const header = document.querySelector('header')
// header.setAttribute('id','header')
// const headerID = document.querySelector('#header')
// console.log(headerID)

// // Posso pegar o atributo
// console.log(headerID.getAttribute('id'))

// // posso pegar uma classe
// console.log(headerID.getAttribute('class'))

// // Posso remover um atruibuto
// headerID.removeAttribute('id')
// headerID.removeAttribute('class')
// console.log(headerID.getAttribute('id'))
// console.log(headerID.getAttribute('class'))
// //Posso definir uma classe
// console.log(headerID.setAttribute('class','bg hearder'))
// console.log(headerID)

// Alterando Estilos
// Precisamos alterar o nome do Estilo para CamelCase
// const element = document.querySelector('body');
// // Posso atribuir valores
// element.style.backgroundColor = "#F9d3d2"
// // Posso pegar esse style
// console.log(element.style.backgroundColor)

//Alterando estilos 
// // Pela classList
// const element = document.querySelector('body')
// // Assim imprimo a Lista de Classe do elemento
// console.log(element.classList)
// // Posso adicionar uma nova classe
// element.classList.add('active','green')
// // Posso remover uma classe
// element.classList.remove('active')
// // O toggle vai pesquisar, se a classe não existir irá adicionar se existir irá remover é como se fosse um interruptor
// element.classList.toggle('active')

//Navegando pelos ementos 
// Navegando pelo parentNode/ parentElement (Pais) 
// const body = document.querySelector('body');
// // Pegar o elemento pai 
// console.log(body.parentNode) // filho do html
// const h1 = document.querySelector('h1')
// console.log(h1.parentElement)

//Navegando pelos ementos filhos
// childNodes chidren elementos filhos
// const elemento = document.querySelector('body')
// console.log(elemento.childNodes)
// console.log(elemento.children) // O htmlCollection não leva em conta os espaços vazios
// // firstChild firstElementChil 1º filho
// console.log(elemento.firstChild)
// console.log(elemento.firstElementChild) //não leva em conta os espaços vazios
// //lastChild lastElementChild último filho
// console.log(elemento.lastChild)
// console.log(elemento.lastElementChild)

// // Navegando pelos elementos irmãos
// const elemento = document.querySelector('header')
// console.log(elemento)
// // nextSibling nextElementSibling
// console.log(elemento.nextSibling)
// console.log(elemento.nextElementSibling) // Não leva em conta os espaços vazios
// //previousSibling previousElementSibling anterior proximo
// const elemento2 = document.querySelector('body script')
//  console.log(elemento2.previousSibling)
//  console.log(elemento2.previousElementSibling)// Não leva em conta o espaço vazio

// Criando e adicionando elementos ao html
// CreateElement -- criar po elemento
// const div = document.createElement('div')
// div.innerText = 'Olá devs!'

// // Adicionar esse elemento na página
// const body = document.querySelector('body')

// const script = body.querySelector('script')
// append vai adicionar depois
//body.append(div) 

//prepend vai adicionar depois
//body.prepend(div)

//insertBefore
//body.insertBefore(div, script)// div antes do script

// Para inserir entre dois elementos porém simulando um after que não existe
// const div = document.createElement('div')
// div.innerText = 'Olá devs!'

// // Adicionar esse elemento na página
// const body = document.querySelector('body')

// const hearder = body.querySelector('header')

// // Simulando um insterAfter
// body.insertBefore(div, hearder.nextElementSibling)

// Eventos
// Como disparar um evento em um elemento

// Primeiro preciso ter o elemento
// nesse exemplo vamos colocar direto dentro do elemento h1 o evento onClick para executar a função print

// function print(){
//     console.log('Trabalhando com eventos da DOM')
// }

// function duploclick(){
//     console.log('DuploClick')
// }

// function onMouseOver(){
//     console.log('Funcão de MouseOver')
// }

//Eventos de Teclado
// const input = document.querySelector('input')

// // input.onkeydown = function(){
// //     console.log('Rodei')
// // }

// // input.onkeyup = function(){
// //     console.log('Rodei')
// // }

// input.onkeypress = function(){
//     console.log('rodei')
// }

// Eventos via javaScript pegando um elemento e já disparando o enveto
//1 pegar o elemento
// const h2 = document.querySelector('h2')

// //2 adicionar o ouvinte de eventos ao h1
// h2.addEventListener('click', print)// Vai receber dois argumentos(tipo do evento, qual função será executada sem os parenteses)
// function print(){
//    console.log("disparando o evento dentro do javascript") 
//}

// Outra forma de disparar eventos diretor pelo javaScript e direto pelo elemento

// Assim ele vai considerar a ultima função que encotrar, o mais indicado é usare o addEventListener()
// const h2 = document.querySelector('h2')
// h2.onclick = ()=>{
//     console.log("Inserindo o evento direto pelo elemento dentro do JS")
// }

// Eventos
//Argumento event
//const input = document.querySelector('input')
// Qualquer evento quando recebe uma função já espera o parametro event
//essa função irá retornar as categorias dos eventos
//input.onkeydown = function(event){
    //console.log(event.key) // posso pegar a letra digitada
    //console.log(event.currentTarget)// Pegar o alvo do evento, ou seja quem está disparando o evento

    //console.log(event.currentTarget.value) // Posso pegar o valor que existe no input  


//}



