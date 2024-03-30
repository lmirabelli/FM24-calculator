function cargarArchivo() {
    let input = document.getElementById('htmlAnalizar');
    let file = input.files[0];
    

    if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let contenidoHTML = e.target.result;

            const parser = new DOMParser();
            const listado = parser.parseFromString(contenidoHTML, 'text/html');

            const jugadores = listado.querySelectorAll('tr')

            let box = document.querySelectorAll('.grupoDeDatos')

            for(i of box){
                i.style.display = 'block'
            }

            
            let plantilla = []
            
            crearPlantilla(jugadores,plantilla)
            gastosPorMinutosAcordados(plantilla)
            gastosPorMinutosJugados(plantilla)
            gastosPorAtributo(plantilla)
            gastosDePrimas(plantilla)
            economiaGlobal(plantilla)
            analizarContratos(plantilla)
            console.log(plantilla)

        };

        reader.readAsText(file);
    } else {
        alert("Por favor, selecciona un archivo HTML.");
    }
}
document.getElementById('cargar').addEventListener('click', () => cargarArchivo())
let vallasInvictas = 0
let crearPlantilla = (jugadores,plantilla) => {
    
    let numeroDeVuelta = 0
    for (linea of jugadores) {
        const datoJugador = linea.querySelectorAll('td')
        let jugador = {}
        let numeroDeDato = 0
        let sumaDeAtributos = 0
        

        for (dato of datoJugador) {
            if (numeroDeVuelta > 0) {

                numeroDeDato == 1 && (jugador.nombre = dato.innerHTML)
                numeroDeDato == 2 && (jugador.posiciones = dato.innerHTML)
                numeroDeDato == 62 && (jugador.nacionalidad = dato.innerHTML)
                numeroDeDato == 66 && (jugador.edad = dato.innerHTML)
                numeroDeDato == 69 && (jugador.estadoFichaje = dato.innerHTML)
                numeroDeDato == 85 && (jugador.minutosAcordados = dato.innerHTML)
                numeroDeDato == 88 && (jugador.club = dato.innerHTML)
                numeroDeDato == 90 && (jugador.division = dato.innerHTML)
                numeroDeDato == 91 && (jugador.mejorPosicion = dato.innerHTML)
                numeroDeDato == 93 && (jugador.porteriaImbatida = dato.innerHTML)
                numeroDeDato == 93 && dato.innerHTML != '-' && (vallasInvictas += parseInt(dato.innerHTML))
                numeroDeDato == 9 && (jugador.partidos = dato.innerHTML)
                numeroDeDato == 10 && (jugador.goles = dato.innerHTML)
                numeroDeDato == 11 && (jugador.asistencias = dato.innerHTML)
                numeroDeDato == 71 && (jugador.finDeContrato = dato.innerHTML)

                if(numeroDeDato == 92){
                   let minutosJugadosDelJugador = dato.innerHTML.search('&nbsp;') != -1 ? parseInt(dato.innerHTML.slice(0,dato.innerHTML.search('&nbsp;'))) * 1000 + parseInt(dato.innerHTML.slice(dato.innerHTML.length - 3)) : dato.innerHTML
                   jugador.minutos = minutosJugadosDelJugador
                }
                if(numeroDeDato == 94){

                    if(dato.innerHTML == 'No disponible'){
                        jugador.primaXpartido = 0
                    }else if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        jugador.primaXpartido = (parseInt(miles) * 1000 + parseInt(cientos))
                        
                    }else{
                        
                        let separador = dato.innerHTML.search('&')
                        jugador.primaXpartido = parseInt(dato.innerHTML.slice(0,separador))
                    }
                }
                if(numeroDeDato == 95){

                    if(dato.innerHTML == 'No disponible'){
                        jugador.primaXsuplencia = 0
                    }else if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        jugador.primaXsuplencia = (parseInt(miles) * 1000 + parseInt(cientos))
                        
                    }else{
                        
                        let separador = dato.innerHTML.search('&')
                        jugador.primaXsuplencia = parseInt(dato.innerHTML.slice(0,separador))
                    }
                }
                if(numeroDeDato == 96){

                    if(dato.innerHTML == 'No disponible'){
                        jugador.primaXasistencia = 0
                    }else if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        jugador.primaXasistencia = (parseInt(miles) * 1000 + parseInt(cientos))
                        
                    }else{
                        
                        let separador = dato.innerHTML.search('&')
                        jugador.primaXasistencia = parseInt(dato.innerHTML.slice(0,separador))
                    }
                }
                if(numeroDeDato == 97){

                    if(dato.innerHTML == 'No disponible'){
                        jugador.primaXgol = 0
                    }else if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        jugador.primaXgol = (parseInt(miles) * 1000 + parseInt(cientos))
                        
                    }else{
                        
                        let separador = dato.innerHTML.search('&')
                        jugador.primaXgol = parseInt(dato.innerHTML.slice(0,separador))
                    }
                }
                if(numeroDeDato == 98){

                    if(dato.innerHTML == 'No disponible'){
                        jugador.primaXporteriaInvicta = 0
                    }else if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        jugador.primaXporteriaInvicta = (parseInt(miles) * 1000 + parseInt(cientos))
                        
                    }else{
                        
                        let separador = dato.innerHTML.search('&')
                        jugador.primaXporteriaInvicta = parseInt(dato.innerHTML.slice(0,separador))
                    }
                }

                if (numeroDeDato > 11 && numeroDeDato < 59) {
                    sumaDeAtributos += parseInt(dato.innerHTML)
                }
                if (numeroDeDato == 68) {
                    
                    let separador1 = dato.innerHTML.search('&')
                    let valorBajo = dato.innerHTML.slice(0, separador1 - 1)

                    let valorAltoString = dato.innerHTML.slice(separador1)
                    let valorAlto = valorAltoString.slice(10)
                    let separador2 = valorAlto.search('&')
                    let simboloAlto = valorAlto.slice(separador2 - 1,separador2)
                    valorAlto = valorAlto.slice(0,separador2 - 1)
                    
                    
                    if(dato.innerHTML.slice(separador1 -1 , separador1) == 'm'){
                        valorBajo = valorBajo * 1000
                    } else if(dato.innerHTML.slice(separador1 -1 , separador1) == 'M'){
                        valorBajo = valorBajo * 1000000
                    }
                    if(simboloAlto == 'm'){
                        valorAlto = valorAlto * 1000
                    } else if(simboloAlto == 'M'){
                        valorAlto = valorAlto * 1000000
                    }else if(simboloAlto == ''){
                        valorAlto = valorBajo
                    }
                    
                    jugador.valorProbable = valorBajo + (valorAlto - valorBajo) * 0.35
                    
                }
                if (numeroDeDato == 70) {
                    if(dato.innerHTML.length > 14){

                        let separadorMiles = dato.innerHTML.search('&')
                        let separadorCientos = dato.innerHTML.search(';')
                        let miles = dato.innerHTML.slice(0,separadorMiles)
                        let cientos = dato.innerHTML.slice(separadorCientos + 1,separadorCientos +4)
                        
                        let temporalidadDePago = dato.innerHTML.includes('p/m') ? 12 : dato.innerHTML.includes('p/s') ? 52 : 1
                        
                        jugador.salario = (parseInt(miles) * 1000 + parseInt(cientos)) * temporalidadDePago
                        
                    }else{
                        
                        let temporalidadDePago = dato.innerHTML.includes('p/m') ? 12 : dato.innerHTML.includes('p/s') ? 52 : 1
                        let separador = dato.innerHTML.search('&')
                        jugador.salario = parseInt(dato.innerHTML.slice(0,separador)) * temporalidadDePago
                    }
                }

                jugador.atributos = parseInt(sumaDeAtributos)
            }
            numeroDeDato++
            
        }
        numeroDeVuelta > 0 && plantilla.push(jugador)
        numeroDeVuelta++
    }
}

let gastosPorMinutosAcordados = (plantilla) => {
    
    let grupoDeJugadores = []
    let totalSalarial = 0
    for(jugador of plantilla){
        let grupo = grupoDeJugadores.find(a => a.nombreDelGrupo == jugador.minutosAcordados)
        totalSalarial += jugador.salario
        if(grupo == undefined){
            grupoDeJugadores.push({nombreDelGrupo: jugador.minutosAcordados, cantidadDeJugadores: 1, salarioTotal: jugador.salario})
        }else{
            grupo.cantidadDeJugadores++
            grupo.salarioTotal += jugador.salario
        }
    }
    grupoDeJugadores.sort((a,b) => b.salarioTotal - a.salarioTotal)
    
    document.getElementById('minutosAcordados').innerHTML = `
        <h2>Por Grupos de Minutos Acordados</h2>
        <div class="linea titulo">
        <div class="muestra"></div>
        <div class="nombre">Grupo de jugador</div>
        <div class="dato">Jug</div>
        <div class="dato">Salario</div>
        <div class="dato">%</div>
        </div>`

        let rotacion = 0
        
    for(i of grupoDeJugadores){

        let colorRed= Math.random() * 255
        let colorGreen= Math.random() * 255
        let colorBlue= Math.random() * 255
        let porcentaje = i.salarioTotal / totalSalarial

        document.getElementById('minutosAcordados').innerHTML += `<div class="linea">
        <div class="muestra" style="background-color: rgb(${colorRed.toFixed(0)},${colorGreen.toFixed(0)},${colorBlue.toFixed(0)})"></div>
        <div class="nombre">${i.nombreDelGrupo}</div>
        <div class="dato">${i.cantidadDeJugadores}</div>
        <div class="dato">$ ${i.salarioTotal.toLocaleString()}</div>
        <div class="dato">${(porcentaje * 100).toFixed(2)}%</div>
        </div>`

        document.querySelector('.torta').innerHTML += `
        <circle r="50" cx="50%" cy="50%" pathlength="100" style="--colorPorcion: rgb(${colorRed.toFixed(0)},${colorGreen.toFixed(0)},${colorBlue.toFixed(0)}); --porcentaje:${porcentaje * 100 }; --rotacion: ${rotacion}deg;" />
        
        `
        

        
        rotacion += porcentaje * 360
    }

    let salarioPromedio = parseInt(totalSalarial / plantilla.length)
    document.getElementById('minutosAcordados').innerHTML += `<div class="linea titulo">
    <div class="muestra"></div>
        <div class="nombre">Total</div>
        <div class="dato">${plantilla.length}</div>
        <div class="dato">$${totalSalarial.toLocaleString()}</div>
        <div class="dato">$${salarioPromedio.toLocaleString()}</div>
        </div>`

        let plantillaxsalario = plantilla.sort((a,b) => b.salario - a.salario)

        document.getElementById('jugadoresMayorSalario').innerHTML = `
            <h2> Top 5 de los que mas cobran</h2>
            <div class="linea titulo">
            <div class="nombre">Nombre</div>
            <div class="nombre">Minutos Acordados</div>
            <div class="dato">Salario</div>
            <div class="dato">Edad</div>
            </div>`
    
        for(i = 0 ; i < 5 ; i++){
            let jugadorSalario = plantillaxsalario[i]
            
            document.getElementById('jugadoresMayorSalario').innerHTML += `<div class="linea">
            <div class="nombre">${jugadorSalario.nombre}</div>
            <div class="nombre">${jugadorSalario.minutosAcordados}</div>
            <div class="dato">$ ${jugadorSalario.salario.toLocaleString()}</div>
            <div class="dato">${jugadorSalario.edad}</div>
            </div>`
        }
}

let gastosPorMinutosJugados = (plantilla) => {

    let salarioConMinutos = []
    let salarioSinMinutos = []

    for(i of plantilla){
        console.log(i.minutos)
        if(i.minutos > 0){
            let salxmin = i.salario / i.minutos
            salarioConMinutos.push({nombre: i.nombre, salario: i.salario, minutos: i.minutos, salxmin: salxmin})
        }else{
            salarioSinMinutos.push({nombre: i.nombre, salario: i.salario, edad: i.edad, sitPlantilla: i.minutosAcordados})
        }
    }
    document.getElementById('salarioxminuto').innerHTML = `
        <h2>Relacion entre el salario y los minutos que juega</h2>
        <div class="linea titulo">
        <div class="nombre">Nombre</div>
        <div class="dato">$ x Min.</div>
        <div class="dato">Salario</div>
        <div class="dato">Minutos</div>
        </div>`
    salarioConMinutos.sort((a,b) => b.salxmin - a.salxmin)
    salarioSinMinutos.sort((a,b) => b.salario - a.salario)

    let salarioTotal = 0
    let minutosTotal = 0
    for(i of salarioConMinutos){
        document.getElementById('salarioxminuto').innerHTML += `<div class="linea">
        <div class="nombre">${i.nombre}</div>
        <div class="dato">$ ${parseInt(i.salxmin).toLocaleString()}</div>
        <div class="dato">$ ${i.salario.toLocaleString()} p/a</div>
        <div class="dato">${i.minutos.toLocaleString()}</div>
        </div>`

        salarioTotal += i.salario
        minutosTotal += parseInt(i.minutos)
    }

    document.getElementById('salarioxminuto').innerHTML += `
        <div class="linea titulo">
        <div class="nombre"></div>
        <div class="dato">$ ${parseInt(salarioTotal / minutosTotal).toLocaleString()}</div>
        <div class="dato">$ ${salarioTotal.toLocaleString()}</div>
        <div class="dato">${minutosTotal.toLocaleString()}</div>
        </div>`

    document.getElementById('salariosinminutos').innerHTML = `
        <h2>Jugadores que cobran y no jugaron</h2>
        <div class="linea titulo">
        <div class="nombre">Nombre</div>
        <div class="dato">Salario</div>
        <div class="dato">Edad</div>
        <div class="nombre">Min. Acordados</div>
        </div>`

    for(i of salarioSinMinutos){
        document.getElementById('salariosinminutos').innerHTML += `
        <div class="linea">
        <div class="nombre">${i.nombre}</div>
        <div class="dato">$ ${i.salario.toLocaleString()}</div>
        <div class="dato">${i.edad}</div>
        <div class="nombre">${i.sitPlantilla}</div>
        </div>`
    }
}

let gastosPorAtributo = (plantilla) => {

    let plantillaxatributo = plantilla.sort((a,b) => b.atributos - a.atributos)
    let posicion = 1
    let mejorJugador = plantillaxatributo[0].atributos
    let salariotop10 = 0
    let atributostop10 = 0
    for(i of plantillaxatributo){
       i.ranking = posicion == 1 ? 'el mejor' : posicion < 11 ? 'top 10' : posicion == plantillaxatributo.length ? 'el peor' : posicion > plantillaxatributo.length - 10 ? 'not top 10' : ''
       i.comparacion = i.atributos / mejorJugador
       i.salarioxattr = i.salario / i.atributos
        posicion < 11 && (salariotop10 += i.salario, atributostop10 += i.atributos)
       posicion++
    }

    plantillaxatributo.sort((a,b) => b.salarioxattr - a.salarioxattr)
    let mediaSalarioAtributo10 = salariotop10 / atributostop10

    document.getElementById('salarioxatributo').innerHTML = `
        <div class="cuadroResumen">
            <div class="titular">Salario del top 10</div>
            <div class="dato">$ ${salariotop10.toLocaleString()}</div>
            <div class="dato">$ ${(mediaSalarioAtributo10.toFixed(2))} x pt de atributo</div>
        </div>
        <h2>Relacion entre salario y atributos totales</h2>
        <div class="linea titulo">
        <div class="nombre">Nombre</div>
        <div class="dato"></div>
        <div class="dato">Salario</div>
        <div class="dato">$ x atr</div>
        <div class="dato">% del mejor</div>
        <div class="datito"></div>
        </div>`

    for(i of plantillaxatributo){
        let nivel = i.salarioxattr > mediaSalarioAtributo10 * 1.1 ? 'alto' : i.salarioxattr < mediaSalarioAtributo10 * .95 ? 'bajo' : ''
        let escrituraSalarial = i.salarioxattr > 999.99 ? parseInt(i.salarioxattr).toLocaleString() : i.salarioxattr.toFixed(2)
        let colorRojo = 255 * (1 - i.comparacion)
        let colorVerde = 255 * i.comparacion
        let colorRGB = `rgb(${colorRojo.toFixed(0)},${colorVerde.toFixed(0)},0)`
        document.getElementById('salarioxatributo').innerHTML += `<div class="linea">
        <div class="nombre">${i.nombre}</div>
        <div class="dato">${i.ranking}</div>
        <div class="dato">$ ${i.salario.toLocaleString()}</div>
        <div class="dato ${nivel}">$ ${escrituraSalarial}</div>
        <div class="dato">${(i.comparacion * 100).toFixed(1)}%</div>
        <div class="datito"><svg class="cal-jugadores"><circle r="6" cx="50%" cy="50%" pathlength="100" style="--porcentaje: ${i.comparacion * 100}; --colorPorcion: ${colorRGB}"/></svg></div>
        </div>`
    }



}

let gastosDePrimas = (plantilla) => {

    document.getElementById('primasPagadas').innerHTML = ``
    
    let totalPI = 0
    let totalPPartidos = 0
    let totalPSuplencia = 0
    let totalPGol = 0
    let totalPAsistencia = 0

    let listaDePorteriaImbatida = []
    let listaDePartidos = []
    let listaDeSuplencias = []
    let listaDeGoles = []
    let listaDeAsistencias = []


    for(i of plantilla){

        let titular = 0
        let suplente = 0
        if(i.partidos.includes('(')){
            let separador = i.partidos.search(/\(/g)
            titular = i.partidos.slice(0,separador)
            suplente = i.partidos.slice(separador +1, i.partidos.length -1)
        }else{
            titular = i.partidos != '-' ? parseInt(i.partidos) : 0
        }


        let porInv = i.porteriaImbatida == '-' ? vallasInvictas : parseInt(i.porteriaImbatida)
        totalPI = porInv * i.primaXporteriaInvicta
        totalPPartidos = i.primaXpartido * titular
        totalPSuplencia = i.primaXsuplencia * suplente
        totalPGol = i.primaXgol * parseInt(i.goles)
        totalPAsistencia = i.primaXasistencia * parseInt(i.asistencias)
        
        if(titular + suplente > 0 && totalPI > 0){
            listaDePorteriaImbatida.push({nombre: i.nombre, primaUnitaria: i.primaXporteriaInvicta, cantidad: porInv, total: totalPI})
        }
        totalPPartidos > 0 && listaDePartidos.push({nombre: i.nombre, primaUnitaria: i.primaXpartido, cantidad: titular, total: totalPPartidos})
        totalPSuplencia > 0 && listaDeSuplencias.push({nombre: i.nombre, primaUnitaria: i.primaXsuplencia, cantidad: suplente, total: totalPSuplencia})
        totalPGol > 0 && listaDeGoles.push({nombre: i.nombre, primaUnitaria: i.primaXgol, cantidad: i.goles, total: totalPGol})
        totalPAsistencia > 0 && listaDeAsistencias.push({nombre: i.nombre, primaUnitaria: i.primaXasistencia, cantidad: i.asistencias, total: totalPAsistencia})
    }
    
    impresionDePrimas(listaDePorteriaImbatida,'Primas por Porteria Invicta')
    impresionDePrimas(listaDePartidos, 'Primas por Partidos')
    impresionDePrimas(listaDeSuplencias, 'Primas por Partidos Suplentes')
    impresionDePrimas(listaDeGoles, 'Primas por Gol')
    impresionDePrimas(listaDeAsistencias, 'Primas por Asistencia')
}

let economiaGlobal = (plantilla) => {

    let salarioGlobal = 0
    let valorGlobal = 0
    let club = ''
    let division = ''
    for(i of plantilla){
        salarioGlobal += i.salario
        valorGlobal += parseInt(i.valorProbable)
        club = i.club
        division = i.division
    }

    document.querySelector('.modalEconomico').style.display = 'block'
    document.querySelector('.modalEconomico').innerHTML = `
    <div class="tituloModal">
    <h3>${club}</h3>
    <h6>${division}</h6>
    </div>
    <div class="tituloModal">
    <h3>Salarios</h3>
    <h6>$ ${salarioGlobal.toLocaleString()} p/a</h6>
    </div>
    <div class="tituloModal">
    <h3>Valor de Plantilla</h3>
    <h6>$ ${valorGlobal.toLocaleString()}</h6>
    </div>
    `
}

let impresionDePrimas = (lista,titulo) => {
    lista.sort((a,b) => b.total - a.total)

    document.getElementById('primasPagadas').innerHTML += `
    <h2>${titulo}</h2>
    <div class="linea titulo">
        <div class="nombre">Jugador</div>
        <div class="dato">Total</div>
        <div class="dato">Unidad</div>
        <div class="dato">Cantidad</div>
    </div>`

    let totalPagado = 0
    for(i of lista){
        totalPagado += parseInt(i.total)
        document.getElementById('primasPagadas').innerHTML += `
    <div class="linea">
        <div class="nombre">${i.nombre}</div>
        <div class="dato">$ ${i.total.toLocaleString()}</div>
        <div class="dato">$ ${i.primaUnitaria.toLocaleString()}</div>
        <div class="dato">${i.cantidad}</div>
    </div>`
    }

    document.getElementById('primasPagadas').innerHTML += `
    <div class="linea titulo">
        <div class="nombre">Total</div>
        <div class="dato">$ ${totalPagado.toLocaleString()}</div>
        <div class="dato"></div>
        <div class="dato"></div>
    </div>`
}

let analizarContratos = (plantilla) => {

    document.getElementById('contratosBox').innerHTML = `` 
    let finales = []
    for(i of plantilla){
        let anioDeFinalizacion = i.finDeContrato.slice(i.finDeContrato.length - 4)
        anioDeFinalizacion == '-' && (anioDeFinalizacion = 0)
        i.anioDeFinalizacion = anioDeFinalizacion
        let idContrato = `contrato${anioDeFinalizacion}`

        finales.find(a => a == anioDeFinalizacion) == undefined && finales.push(parseInt(anioDeFinalizacion))
    }

    finales.sort((a,b) => a - b)
    for(i of finales){
        
        let contratos = plantilla.filter(a => a.anioDeFinalizacion == i)

        let titulo = i == 0 ? 'Sin Contrato' : `Finaliza en ${i}`

        document.getElementById('contratosBox').innerHTML += `<h2>${titulo}</h2>
        <div class="linea titulo">
            <div class="nombre">Jugador</div>
            <div class="dato">Edad</div>
            <div class="dato">Salario</div>
            <div class="nombre">Fichaje</div>
            <div class="nombre">Situacion</div>
            <div class="dato">Valor Aprox</div>
            <div class="dato">Ranking</div>
        </div>
        ` 

        let salariosTotal = 0
        let valorTotal = 0
        for(j of contratos){
            salariosTotal += parseInt(j.salario)
            valorTotal += parseInt(j.valorProbable)
            document.getElementById('contratosBox').innerHTML += `
        <div class="linea">
            <div class="nombre">${j.nombre}</div>
            <div class="dato">${j.edad}</div>
            <div class="dato">$ ${parseInt(j.salario).toLocaleString()}</div>
            <div class="nombre">${j.estadoFichaje}</div>
            <div class="nombre">${j.minutosAcordados}</div>
            <div class="dato">$ ${parseInt(j.valorProbable).toLocaleString()}</div>
            <div class="dato">${j.ranking}</div>
        </div>
        ` 
        }

        document.getElementById('contratosBox').innerHTML += `
        <div class="linea titulo">
            <div class="nombre">Total</div>
            <div class="dato"></div>
            <div class="dato">$ ${salariosTotal.toLocaleString()}</div>
            <div class="nombre"></div>
            <div class="nombre"></div>
            <div class="dato">$ ${valorTotal.toLocaleString()}</div>
            <div class="dato"></div>
        </div>
        ` 
    }
    
}

