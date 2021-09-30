// clearTimeout cancela um timeOut

const timeout = 3000
const finished = ()=>console.log('Done');

 let timer = setTimeout(finished, timeout);
 clearTimeout(timer);
