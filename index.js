const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "int",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "write()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade sem verificar o tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "toInt()",
        "parseInteger()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes NÃO é um tipo de dado em JavaScript?",
      respostas: [
        "Boolean",
        "String",
        "Number",
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para encontrar o número de elementos em um array em JavaScript?",
      respostas: [
        "length()",
        "count()",
        "size()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector( '#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
     
     mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
     
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  
  
  }
  
  quizItem.querySelector('dl dt').remove()
  // código utilizado para remover elementos 
  
  quiz.appendChild(quizItem)
  }