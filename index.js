'use strict'

const voce = window.prompt('Qual é o seu nome?') || 'Anônimo'
window.alert('Errou! Seu nome agora é Scheila')
const idade = window.prompt('Qual é sua idade?') || 18
const eula = window.confirm('Você concorda em fornecer seus dados para vendermos?')

console.log(voce)
console.log(idade)
console.log(eula)