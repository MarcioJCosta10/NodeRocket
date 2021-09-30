// Seguir a ordem primeiro o ouvinte depois o que será disparado

const {EventEmitter} = require('events')
const ev = new EventEmitter()


// Fica ouvindo os eventos e aguarda um parametro
ev.on('saySomething', (message)=>{
    console.log("Eu ouvi você: ", message)
})
// Eevento de emitir mensagem recebe o nome do evento e o parametro
ev.emit('saySomething','Marcio')        
ev.emit('saySomething','Marcos')


  ev.once('saySomething_2',(message)=>{
      console.log('Agora vou ouvir só uma vez:', message)
  })

ev.emit('saySomething_2', 'Emerson')