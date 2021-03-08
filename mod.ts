class You {
  name: string = ''

  constructor (yourName: string) {
    this.name = yourName || 'vazio'
  }
}

let yourName: string = await window.prompt('Qual é seu nome?') || 'nada'

const voce = new You(yourName)

window.alert('Errou... Seu nome agora é Jéssica')

console.log(voce)
