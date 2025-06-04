const Clock = document.getElementById("relogio")

function ClockUpdate (){
  const data = new Date ()
  const horas = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds() <= 9 ? "0" + data.getSeconds() : data.getSeconds()
  
  Clock.innerHTML = `${horas}: ${minutos}: ${segundos}`
}


setInterval(ClockUpdate, 1000)

