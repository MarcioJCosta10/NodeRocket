// clearInterval irá cancelar um setInterval registrado

const time = 1000
const checking = ()=>console.log('Checking!')

let interval = setInterval(checking, time)
setTimeout(()=>clearInterval(interval),4000)
