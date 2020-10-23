function relogio() {
  function criaHorasDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  const relogio = document.querySelector('.relogio')
  const inciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;
  
  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHorasDosSegundos(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function (e) {
    const el = e.target;
    
    if(el.classList.contains('zerar')){
      clearInterval(timer);
      relogio.classList.remove('pausado');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  
    if(el.classList.contains('pausar')){
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  
    if(el.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
  });  
}
relogio();