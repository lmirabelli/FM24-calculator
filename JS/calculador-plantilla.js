const printDatos = document.getElementById('printDatos')
let listaDeJugadores = []
let calculandoRoles = () => {

    let porcentajePrimario = 0.75
    let porcentajeSecundario = 0.22
    let porcentajeTerciario = 1 - porcentajePrimario - porcentajeSecundario


    let atributosTotal = ((aer + blo + com + exc + pun + mdo + ref + sld + sqm + sqp + uvu + cab + cen + ctr + ent + mar + pas + pen + reg + rem + sqe + sql + tec + tle + tli + agr + ant + col + cnc + dec + dmq + det + jeq + lid + sac + ser + tal + val + vis + ace + agi + equ + sal + fue + rfi + res + vel))

        //portero defensa
        let prc = ((aer + blo + com + mdo + ref + sqp + col + cnc + agi) / 9)
        let sec = ((sqm + uvu + ant + dec + vel) / 5)
        let trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pordf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //portero cierre - defensa

        prc = ((mdo + ref + sqp + uvu + ant + col + cnc + agi) / 8)
        sec = ((aer + blo + com + ctr + pas + sld + sqm + dec + ser + vis + ace + vel) / 12)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pcidf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //portero cierre - apoyo

        prc = ((mdo + ref + sld + sqp + uvu + ant + col + cnc + ser + agi) / 10)
        sec = ((aer + blo + com + ctr + pas + sqm + dec + vis + ace + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pciap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //portero cierre - ataque

        prc = ((mdo + ref + sld + sqp + uvu + ant + col + cnc + ser + agi) / 10)
        sec = ((aer + blo + com + ctr + exc + pas + sqm + dec + vis + ace + vel) / 11)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pciat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        jug.porpromedio = (jug.pordf + jug.pcidf + jug.pciap + jug.pciat) / 4

        //carrilero - defensa

        prc = ((ent + mar + ant + col + jeq + sac + ace + res) / 8)
        sec = ((cen + ctr + pas + reg + tec + cnc + dec + dmq + agi + equ + vel) / 11)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cardf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //carrilero - apoyo

        prc = ((cen + ent + mar + reg + dmq + jeq + sac + ace + res) / 9)
        sec = ((ctr + pas + tec + ant + col + cnc + dec + agi + equ + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.carap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //carrilero - ataque

        prc = ((cen + ent + reg + tec + dmq + jeq + sac + ace + res + vel) / 10)
        sec = ((ctr + mar + pas + ant + col + cnc + dec + tal + agi + equ) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.carat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.carpromedio = (jug.cardf + jug.carap + jug.carat) / 3

        //carrilero Completo - apoyo

        prc = ((cen + reg + tec + dmq + jeq + sac + ace + res) / 8)
        sec = ((ctr + ent + mar + pas + ant + col + dec + tal + agi + equ + vel) / 11)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ccmap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //carrilero Completo - ataque

        prc = ((cen + reg + tec + dmq + jeq + sac + tal + ace + res) / 9)
        sec = ((ctr + ent + mar + pas + ant + col + dec + agi + equ + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ccmat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.ccmpromedio = (jug.ccmap + jug.ccmat) / 2

        //carrilero Inverso - defensa

        prc = ((ent + pas + ant + col + dec + jeq) / 6)
        sec = ((ctr + mar + tec + cnc + dmq + sac + ser + ace + agi + res + vel) / 11)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cindf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        //carrilero inverso - apoyo

        prc = ((ctr + ent + pas + dec + jeq + ser) / 6)
        sec = ((mar + tec + ant + col + cnc + dmq + sac + vis + agi + res) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cinap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // carrilero inverso - ataque

        prc = ((ctr + ent + pas + tec + dec + dmq + jeq + ser + vis + ace) / 10)
        sec = ((cen + mar + reg + tle + ant + col + cnc + sac + tal + agi + res + vel) / 12)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cinat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.cinpromedio = (jug.cindf + jug.cinap + jug.cinat) / 3

        // central lateral - defensa

        prc = ((cab + ent + mar + col + sal + fue) / 6)
        sec = ((ctr + pas + reg + tec + agr + ant + cnc + dec + sac + ser + val + agi + vel) / 13)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cltdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // central lateral - apoyo

        prc = ((cab + ent + mar + reg + col + sal + fue + vel) / 8)
        sec = ((cen + ctr + pas + tec + agr + ant + cnc + dec + dmq + sac + ser + val + agi + res) / 14)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cltap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // central lateral - ataque

        prc = ((cab + cen + ent + mar + reg + dmq + sal + fue + res + vel) / 10)
        sec = ((ctr + pas + tec + agr + ant + col + cnc + dec + sac + ser + val + agi) / 12)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cltat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.cltpromedio = (jug.cltdf + jug.cltap + jug.cltat) / 3

        // central practico - defensa

        prc = ((cab + ent + mar + col + sal + fue) / 6)
        sec = ((agr + ant + cnc + val + vel) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctpdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // central parctico - tapon

        prc = ((cab + ent + agr + col + val + sal + fue) / 7)
        sec = ((mar + ant + cnc) / 3)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctptp = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        prc = ((ent + mar + ant + col + cnc + vel) / 6)
        sec = ((cab + val + sal + fue) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctpco = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.ctppromedio = (jug.ctpdf + jug.ctptp + jug.ctpco) / 3

        // defensa central - defensa

        prc = ((cab + ent + mar + col + sal + fue) / 6)
        sec = ((agr + ant + cnc + dec + ser + val + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dfcdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // defensa central - tapon

        prc = ((cab + ent + agr + col + dec + val + sal + fue) / 8)
        sec = ((mar + ant + cnc + ser) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dfctp = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // defensa central - cubrir

        prc = ((ent + mar + ant + col + cnc + dec + vel) / 7)
        sec = ((cab + ser + val + sal + fue) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dfcco = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dfcpromedio = (jug.dfcdf + jug.dfctp + jug.dfcco) / 3

        // defensa central con toque - defensa

        prc = ((cab + ent + mar + pas + col + sal + fue + ser) / 8)
        sec = ((ctr + tec + agr + ant + cnc + dec + val + vis + vel) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dftdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // defensa central con toque - tapon

        prc = ((cab + ent + pas + agr + col + dec + ser + val + sal + fue) / 10)
        sec = ((ctr + mar + tec + ant + cnc + vis) / 6)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dfttp = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // defensa central con toque - cubrir

        prc = ((ent + mar + pas + ant + col + cnc + dec + ser + vel) / 9)
        sec = ((cab + ctr + tec + val + vis + sal + fue) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dftco = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dftpromedio = (jug.dftdf + jug.dfttp + jug.dftco) / 3

        // lateral - defensa

        prc = ((ent + mar + ant + col + cnc) / 5)
        sec = ((cen + pas + dec + jeq + sac + res + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.latdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // lateral - apoyo

        prc = ((ent + mar + ant + col + cnc + jeq) / 6)
        sec = ((cen + pas + reg + tec + dec + sac + res + vel) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.latap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // lateral - ataque

        prc = ((cen + ent + mar + ant + col + jeq) / 6)
        sec = ((ctr + pas + reg + tec + cnc + dec + dmq + sac + agi + res + vel) / 11)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.latat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.latpromedio = (jug.latap + jug.latat + jug.latdf) / 3

        // lateral inverso - defensa

        prc = ((cab + ent + mar + col + fue) / 5)
        sec = ((ctr + pas + reg + tec + agr + ant + cnc + dec + sac + ser + val + agi + sal + vel) / 14)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.lindf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // lateral practico - defensa

        prc = ((ent + mar + ant + col + fue) / 5)
        sec = ((cab + agr + cnc + jeq + val) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.lprdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // libero - defensa

        prc = ((cab + ctr + ent + mar + pas + tec + col + dec + jeq + ser + sal + fue) / 12)
        sec = ((ant + cnc + val + res + vel) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.libdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // libero - apoyo

        prc = ((cab + ctr + ent + mar + pas + tec + col + dec + jeq + ser + sal + fue) / 12)
        sec = ((reg + ant + cnc + val + vis + res + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.libap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.libpromedio = (jug.libap + jug.libdf) / 2

        // buscador de espacios - ataque

        prc = ((rem + ant + cnc + dec + dmq + ser + equ) / 7)
        sec = ((ctr + tec + sac + ace + res) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.bdeat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista - defensa

        prc = ((ent + col + cnc + dec + jeq) / 5)
        sec = ((ctr + mar + pas + tec + agr + ant + sac + ser + res) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctcdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista - apoyo

        prc = ((ctr + ent + pas + dec + jeq) / 5)
        sec = ((tec + ant + cnc + dmq + sac + ser + val + res) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctcap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista - ataque

        prc = ((ctr + pas + dec + dmq) / 4)
        sec = ((ent + tec + tle + ant + jeq + sac + ser + vis + ace + res) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ctcat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.ctcpromedio = (jug.ctcdf + jug.ctcap + jug.ctcat) / 3

        // centrocampista de banda - defensa

        prc = ((ent + pas + col + cnc + dec + jeq + sac) / 7)
        sec = ((cen + ctr + mar + tec + ant + ser + res) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cmbdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista de banda - apoyo

        prc = ((ent + pas + dec + jeq + sac + res) / 6)
        sec = ((cen + ctr + tec + ant + col + cnc + dmq + ser + vis) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cmbap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista de banda - ataque

        prc = ((cen + ctr + pas + dec + jeq + sac + res) / 7)
        sec = ((ent + tec + ant + dmq + ser + vis) / 6)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cmbat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.cmbpromedio = (jug.cmbdf + jug.cmbap + jug.cmbat) / 3

        // centrocampista recuperador - defensa

        prc = ((ent + agr + ant + jeq + sac + res) / 6)
        sec = ((mar + col + cnc + val + agi + fue + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.recdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // centrocampista recuperador - apoyo

        prc = ((ent + agr + ant + jeq + sac + res) / 6)
        sec = ((mar + pas + cnc + val + agi + fue + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.recap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.recpromedio = (jug.recap + jug.recdf) / 2

        // centrocampista todoterreno

        prc = ((ent + pas + dmq + jeq + sac + res) / 6)
        sec = ((ctr + reg + rem + tec + tle + agr + ant + col + dec + ser + ace + equ + fue + vel) / 14)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.cttap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero interior - apoyo

        prc = ((ctr + reg + rem + tec + dmq + ace + agi) / 7)
        sec = ((pas + tle + ant + sac + ser + tal + vis + equ + res + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dliap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero interior - ataque

        prc = ((ctr + reg + rem + tec + ant + dmq + ace + agi) / 8)
        sec = ((pas + tle + sac + ser + tal + equ + res + vel) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dliat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dlipromedio = (jug.dliap + jug.dliat) / 2

        // delantero objetivo escorado - apoyo

        prc = ((cab + jeq + val + sal + fue) / 5)
        sec = ((cen + ctr + ant + dmq + sac + equ + res) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.doeap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero objetivo escorado - ataque

        prc = ((cab + dmq + val + sal + fue) / 5)
        sec = ((cen + ctr + rem + ant + jeq + sac + equ + res) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.doeat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.doepromedio = (jug.doeap + jug.doeat) / 2

        // delantero sorpresa - ataque

        prc = ((ctr + reg + rem + ant + dmq + ser + ace) / 7)
        sec = ((pas + tec + cnc + dec + sac + agi + equ + res + vel) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dsrat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // enganche - apoyo

        prc = ((ctr + pas + tec + dec + ser + vis) / 6)
        sec = ((reg + ant + dmq + jeq + tal + agi) / 6)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.engap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // extremo - apoyo

        prc = ((cen + reg + tec + ace + agi) / 5)
        sec = ((ctr + pas + dmq + sac + equ + res + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.extap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // extremo - ataque

        prc = ((cen + reg + tec + ace + agi) / 5)
        sec = ((ctr + pas + ant + dmq + sac + tal + equ + res + vel) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.extat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.extpromedio = (jug.extap + jug.extat) / 2

        // extremo defensivo - defensa

        prc = ((tec + ant + col + dmq + jeq + sac + res) / 7)
        sec = ((cen + ctr + ent + mar + reg + agr + cnc + dec + ace) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.exddf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // extremo defensivo - apoyo

        prc = ((cen + tec + dmq + jeq + sac + res) / 6)
        sec = ((ctr + ent + mar + pas + reg + agr + ant + col + cnc + dec + ser + ace) / 12)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.exdap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.exdpromedio = (jug.exddf + jug.exdap) / 2

        // extremo inverso - apoyo

        prc = ((cen + pas + reg + tec + ace + agi) / 6)
        sec = ((ctr + tle + dec + dmq + sac + ser + vis + equ + res + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.exiap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // extremo inverso - ataque

        prc = ((cen + pas + reg + tec + ace + agi) / 6)
        sec = ((ctr + tle + ant + dec + dmq + sac + ser + tal + vis + equ + res + vel) / 12)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.exiat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.exipromedio = (jug.exiap + jug.exiat) / 2

        // interior mixto - apoyo

        prc = ((ctr + ent + pas + col + dec + jeq + res) / 7)
        sec = ((tec + ant + cnc + dmq + sac + ser + vis) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.imxap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // mediapunta - apoyo

        prc = ((ctr + pas + tec + tle + ant + dec + dmq + tal) / 8)
        sec = ((reg + ser + vis + agi) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mptap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // mediapunta - ataque

        prc = ((ctr + pas + reg + tec + tle + ant + dec + dmq + tal) / 9)
        sec = ((rem + ser + vis + agi) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mptat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.mptpromedio = (jug.mptap + jug.mptat) / 2

        // mediocierre - defensa

        prc = ((ent + mar + ant + col + cnc + dec + jeq + ser) / 8)
        sec = ((ctr + pas + agr + sac + val + sal + fue + res) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mcidf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // mediocentro - defensa

        prc = ((ent + ant + col + cnc + jeq) / 5)
        sec = ((mar + pas + agr + dec + sac + ser + fue + res) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mdcdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // mediocentro - apoyo

        prc = ((ent + ant + col + cnc + jeq) / 5)
        sec = ((ctr + mar + pas + agr + dec + sac + ser + fue + res) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mdcap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.mdcpromedio = (jug.mdcap + jug.mdcdf) / 2

        // mezzala - apoyo

        prc = ((pas + tec + dec + dmq + sac + ace) / 6)
        sec = ((ctr + ent + reg + tle + ant + ser + vis + equ + res) / 9)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mzzap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // mezzala - ataque

        prc = ((pas + reg + tec + dec + dmq + sac + vis + ace) / 8)
        sec = ((ctr + rem + tle + ant + ser + tal + equ + res) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.mzzat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.mzzpromedio = (jug.mzzap + jug.mzzat) / 2

        // organizador adelantado - apoyo

        prc = ((ctr + pas + tec + dec + dmq + jeq + ser + vis) / 8)
        sec = ((reg + ant + tal + agi) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.oadap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // organizador adelantado - ataque

        prc = ((ctr + pas + tec + dec + dmq + jeq + ser + vis) / 8)
        sec = ((reg + ant + tal + ace + agi) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.oadat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.oadpromedio = (jug.oadap + jug.oadat) / 2

        // organizador de banda - apoyo

        prc = ((ctr + pas + tec + dec + jeq + ser + vis) / 7)
        sec = ((reg + dmq + agi) / 3)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ogbap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // organizador de banda - ataque

        prc = ((ctr + pas + reg + tec + dec + dmq + jeq + ser + vis) / 9)
        sec = ((ant + tal + ace + agi) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ogbat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.ogbpromedio = (jug.ogbap + jug.ogbat) / 2

        // organizador intinerante - apoyo

        prc = ((ctr + pas + tec + ant + dec + dmq + jeq + sac + ser + vis + ace + res) / 12)
        sec = ((reg + tle + col + cnc + agi + equ + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.oitap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // pivote defensivo - defensa

        prc = ((ent + mar + ant + col + cnc + dec) / 6)
        sec = ((jeq + ser + fue) / 3)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pvddf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // pivote organizador - defensa

        prc = ((ctr + pas + tec + dec + jeq + ser + vis) / 7)
        sec = ((ent + ant + col + equ) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pvodf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // pivote organizador - apoyo

        prc = ((ctr + pas + tec + dec + jeq + ser + vis) / 7)
        sec = ((ant + col + dmq + equ) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.pvoap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.pvopromedio = (jug.pvodf + jug.pvoap) / 2

        // regista - apoyo

        prc = ((ctr + pas + tec + dec + dmq + jeq + ser + tal + vis) / 9)
        sec = ((reg + tle + ant + equ) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.regap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // segundo volante - apoyo

        prc = ((ent + mar + pas + col + dmq + sac + res + vel) / 8)
        sec = ((ctr + rem + tle + ant + cnc + dec + ser + ace + equ + fue) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.sgvap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // segundo volante - ataque

        prc = ((ent + pas + rem + tle + ant + col + dmq + sac + res + vel) / 10)
        sec = ((ctr + mar + cnc + dec + ser + ace + equ + fue) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.sgvat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.sgvpromedio = (jug.sgvap + jug.sgvat) / 2

        // ariete - ataque

        prc = ((rem + ant + dmq + ser) / 4)
        sec = ((cab + ctr + tec + dec + ace) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.ariat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero avanzado - ataque

        prc = ((ctr + reg + rem + tec + dmq + ser + ace) / 7)
        sec = ((pas + ant + dec + sac + agi + equ + res + vel) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dlaat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero completo - apoyo

        prc = ((cab + ctr + pas + reg + tec + tle + ant + dec + dmq + ser + vis + ace + agi + fue) / 14)
        sec = ((rem + jeq + sac + sal + equ + res + vel) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dlcap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero completo - ataque

        prc = ((cab + ctr + reg + rem + tec + ant + dmq + ser + ace + agi + fue) / 11)
        sec = ((pas + tle + dec + jeq + sac + vis + sal + equ + res + vel) / 10)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dlcat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dlcpromedio = (jug.dlcap + jug.dlcat) / 2

        // delantero objetivo - apoyo

        prc = ((cab + jeq + val + sal + equ + fue) / 6)
        sec = ((ctr + rem + agr + ant + dec + dmq + ser) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dloap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero objetivo - ataque

        prc = ((cab + rem + dmq + ser + val + sal + equ + fue) / 8)
        sec = ((ctr + agr + ant + dec + jeq) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dloat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dlopromedio = (jug.dloap + jug.dloat) / 2

        // delantero presionante - defensa

        prc = ((agr + ant + dec + jeq + sac + val + ace + res + vel) / 9)
        sec = ((ctr + cnc + ser + agi + equ + fue) / 6)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dprdf = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero presionante - apoyo

        prc = ((agr + ant + dec + jeq + sac + val + ace + res + vel) / 9)
        sec = ((ctr + pas + cnc + dmq + ser + agi + equ + fue) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dprap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // delantero presionante - ataque

        prc = ((agr + ant + dmq + jeq + sac + val + ace + res + vel) / 9)
        sec = ((ctr + rem + cnc + dec + ser + agi + equ + fue) / 8)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.dprat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.dprpromedio = (jug.dprdf + jug.dprap + jug.dprat) / 3

        // falso nueve - apoyo

        prc = ((ctr + pas + reg + tec + dec + dmq + ser + vis + ace + agi) / 10)
        sec = ((rem + ant + jeq + tal + equ) / 5)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.fnvap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // segundo delantero - apoyo

        prc = ((ctr + pas + tec + dec + dmq + jeq + ser) / 7)
        sec = ((rem + ant + tal + vis + equ + fue) / 6)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.sgdap = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5

        // segundo delantero - ataque

        prc = ((ctr + pas + tec + dec + dmq + jeq + ser) / 7)
        sec = ((reg + rem + ant + tal + vis + equ + fue) / 7)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.sgdat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
        jug.sgdpromedio = (jug.sgdap + jug.sgdat) / 2

        //trequartista - ataque

        prc = ((ctr + pas + reg + tec + dec + dmq + ser + tal + vis + ace) / 10)
        sec = ((rem + ant + agi + equ) / 4)
        trc = ((atributosTotal / 47) - (prc - sec) / 2)

        jug.tqtat = (prc * porcentajePrimario + sec * porcentajeSecundario + trc * porcentajeTerciario) * 5
}

let calculadorDeRoles = (jugadores) => {

   
    for (jug of jugadores) {
        //ATRIBUTOS PORTEROS - 11
        aer = jug.alcanceAereo
        blo = jug.blocaje
        com = jug.comunicacion
        exc = jug.excentricidad
        pun = jug.punos
        mdo = jug.mandoEnElArea
        ref = jug.reflejos
        sld = jug.salidas
        sqm = jug.saqueConLaMano
        sqp = jug.saqueDePuerta
        uvu = jug.unoContraUno
        //ATRIBUTOS TECNICOS - 14 
        cab = jug.cabeceo
        cen = jug.centros
        ctr = jug.control
        ent = jug.entradas
        mar = jug.marcaje
        pas = jug.pases
        pen = jug.penales
        reg = jug.regate
        rem = jug.remate
        sqe = jug.saqueDeEsquinas
        sql = jug.saqueLargo
        tec = jug.tecnica
        tle = jug.tirosLejanos
        tli = jug.tiroLibres
        //ATRIBUTOS MENTALES - 14
        agr = jug.agresividad
        ant = jug.anticipacion
        col = jug.colocacion
        cnc = jug.concentracion
        dec = jug.decisiones
        dmq = jug.desmarques
        det = jug.determinacion
        jeq = jug.juegoEnEquipo
        lid = jug.liderazgo
        sac = jug.sacrificio
        ser = jug.serenidad
        tal = jug.talento
        val = jug.valentia
        vis = jug.vision
        //ATRIBUTOS FISICOS - 8
        ace = jug.aceleracion
        agi = jug.agilidad
        sal = jug.salto
        equ = jug.equilibrio
        fue = jug.fuerza
        rfi = jug.recuperacionFisica
        res = jug.resistencia
        vel = jug.velocidad
        
        
        calculandoRoles()

    }


}

let impresionDeJugadores = (jugadores, pos, puestoRequerido) => {

    listaDeJugadores = []
    for (j of jugadores) {
        if (j.posiciones != 'POR') {
            let defensa = 0
            let apoyo = 0
            let ataque = 0
            let promedio = 0

            pos == 'defensa central' && (defensa = j.dfcdf.toFixed(1), apoyo = j.dfctp.toFixed(1), ataque = j.dfcco.toFixed(1), promedio = j.dfcpromedio.toFixed(1))
            pos == 'defensa con toque' && (defensa = j.dftdf.toFixed(1), apoyo = j.dfttp.toFixed(1), ataque = j.dftco.toFixed(1), promedio = j.dftpromedio.toFixed(1))
            pos == 'central lateral' && (defensa = j.cltdf.toFixed(1), apoyo = j.cltap.toFixed(1), ataque = j.cltat.toFixed(1), promedio = j.cltpromedio.toFixed(1))
            pos == 'central practico' && (defensa = j.ctpdf.toFixed(1), apoyo = j.ctptp.toFixed(1), ataque = j.ctpco.toFixed(1), promedio = j.ctppromedio.toFixed(1))
            pos == 'libero' && (defensa = j.libdf.toFixed(1), apoyo = j.libap.toFixed(1), ataque = '-', promedio = j.libpromedio.toFixed(1))

            pos == 'carrilero' && (defensa = j.cardf.toFixed(1), apoyo = j.carap.toFixed(1), ataque = j.carat.toFixed(1), promedio = j.carpromedio.toFixed(1))
            pos == 'carrilero completo' && (defensa = '-', apoyo = j.ccmap.toFixed(1), ataque = j.ccmat.toFixed(1), promedio = j.ccmpromedio.toFixed(1))
            pos == 'carrilero inverso' && (defensa = j.cindf.toFixed(1), apoyo = j.cinap.toFixed(1), ataque = j.cinat.toFixed(1), promedio = j.cinpromedio.toFixed(1))
            pos == 'lateral' && (defensa = j.latdf.toFixed(1), apoyo = j.latap.toFixed(1), ataque = j.latat.toFixed(1), promedio = j.latpromedio.toFixed(1))
            pos == 'lateral inverso' && (defensa = j.lindf.toFixed(1), apoyo = '-', ataque = '-', promedio = j.lindf.toFixed(1))
            pos == 'lateral practico' && (defensa = j.lprdf.toFixed(1), apoyo = '-', ataque = '-', promedio = j.lprdf.toFixed(1))

            pos == 'centrocampista' && (defensa = j.ctcdf.toFixed(1), apoyo = j.ctcap.toFixed(1), ataque = j.ctcat.toFixed(1), promedio = j.ctcpromedio.toFixed(1))
            pos == 'centrocampista de banda' && (defensa = j.cmbdf.toFixed(1), apoyo = j.cmbap.toFixed(1), ataque = j.cmbat.toFixed(1), promedio = j.cmbpromedio.toFixed(1))
            pos == 'centrocampista recuperador' && (defensa = j.recdf.toFixed(1), apoyo = j.recap.toFixed(1), ataque = '-', promedio = j.recpromedio.toFixed(1))
            pos == 'centrocampista todoterreno' && (defensa = '-', apoyo = j.cttap.toFixed(1), ataque = '-', promedio = j.cttap.toFixed(1))
            pos == 'delantero interior' && (defensa = '-', apoyo = j.dliap.toFixed(1), ataque = j.dliat.toFixed(1), promedio = j.dlipromedio.toFixed(1))
            pos == 'delantero objetivo escorado' && (defensa = '-', apoyo = j.doeap.toFixed(1), ataque = j.doeat.toFixed(1), promedio = j.doepromedio.toFixed(1))
            pos == 'delantero sorpresa' && (defensa = '-', apoyo = '-', ataque = j.dsrat.toFixed(1), promedio = j.dsrat.toFixed(1))
            pos == 'enganche' && (defensa = '-', apoyo = j.engap.toFixed(1), ataque = '-', promedio = j.engap.toFixed(1))
            pos == 'extremo' && (defensa = '-', apoyo = j.extap.toFixed(1), ataque = j.extat.toFixed(1), promedio = j.extpromedio.toFixed(1))
            pos == 'extremo defensivo' && (defensa = j.exddf.toFixed(1), apoyo = j.exdap.toFixed(1), ataque = '-', promedio = j.exdpromedio.toFixed(1))
            pos == 'extremo inverso' && (defensa = '-', apoyo = j.exiap.toFixed(1), ataque = j.exiat.toFixed(1), promedio = j.exipromedio.toFixed(1))
            pos == 'interior mixto' && (defensa = '-', apoyo = j.imxap.toFixed(1), ataque = '-', promedio = j.imxap.toFixed(1))
            pos == 'mediapunta' && (defensa = '-', apoyo = j.mptap.toFixed(1), ataque = j.mptat.toFixed(1), promedio = j.mptpromedio.toFixed(1))
            pos == 'medio cierre' && (defensa = j.mcidf.toFixed(1), apoyo = '-', ataque = '-', promedio = j.mcidf.toFixed(1))
            pos == 'mediocentro' && (defensa = j.mdcdf.toFixed(1 ), apoyo = j.mdcap.toFixed(1), ataque = '-', promedio = j.mdcpromedio.toFixed(1))
            pos == 'mezzala' && (defensa = '-', apoyo = j.mzzap.toFixed(1), ataque = j.mzzat.toFixed(1), promedio = j.mzzpromedio.toFixed(1))
            pos == 'organizador adelantado' && (defensa = '-', apoyo = j.oadap.toFixed(1), ataque = j.oadat.toFixed(1), promedio = j.oadpromedio.toFixed(1))
            pos == 'organizador de banda' && (defensa = '-', apoyo = j.ogbap.toFixed(1), ataque = j.ogbat.toFixed(1), promedio = j.ogbpromedio.toFixed(1))
            pos == 'organizador intinerante' && (defensa = '-', apoyo = j.oitap.toFixed(1), ataque = '-', promedio = j.oitap.toFixed(1))
            pos == 'pivote defensivo' && (defensa = j.pvddf.toFixed(1), apoyo = '-', ataque = '-', promedio = j.pvddf.toFixed(1))
            pos == 'pivote organizador' && (defensa = j.pvodf.toFixed(1), apoyo = j.pvoap.toFixed(1), ataque = '-', promedio = j.pvopromedio.toFixed(1))
            pos == 'regista' && (defensa = '-', apoyo = j.regap.toFixed(1), ataque = '-', promedio = j.regap.toFixed(1))
            pos == 'segundo volante' && (defensa = '-', apoyo = j.sgvap.toFixed(1), ataque = j.sgvat.toFixed(1), promedio = j.sgvpromedio.toFixed(1))
            pos == 'ariete' && (defensa = '-', apoyo = '-', ataque = j.ariat.toFixed(1), promedio = j.ariat.toFixed(1))
            pos == 'delantero avanzado' && (defensa = '-', apoyo = '-', ataque = j.dlaat.toFixed(1), promedio = j.dlaat.toFixed(1))
            pos == 'delantero completo' && (defensa = '-', apoyo = j.dlcap.toFixed(1), ataque = j.dlcat.toFixed(1), promedio = j.dlcpromedio.toFixed(1))
            pos == 'delantero objetivo' && (defensa = '-', apoyo = j.dloap.toFixed(1), ataque = j.dloat.toFixed(1), promedio = j.dlopromedio.toFixed(1))
            pos == 'delantero presionante' && (defensa = j.dprdf.toFixed(1), apoyo = j.dprap.toFixed(1), ataque = j.dprat.toFixed(1), promedio = j.dprpromedio.toFixed(1))
            pos == 'falso 9' && (defensa = '-', apoyo = j.fnvap.toFixed(1), ataque = '-', promedio = j.fnvap.toFixed(1))
            pos == 'segundo delantero' && (defensa = '-', apoyo = j.sgdap.toFixed(1), ataque = j.sgdat.toFixed(1), promedio = j.sgdpromedio.toFixed(1))
            pos == 'trequartista' && (defensa = '-', apoyo = '-', ataque = j.tqtat.toFixed(1), promedio = j.tqtat.toFixed(1))
            pos == 'buscador de espacios' && (defensa = '-', apoyo = '-', ataque = j.bdeat.toFixed(1), promedio = j.bdeat.toFixed(1))

            puesto = ''
            j.posiciones.includes('DF') && (puesto += 'defensor')
            j.posiciones.includes('CR') && (puesto += 'defensor')
            j.posiciones.includes('MC') && (puesto += 'medio')
            j.posiciones.includes('ME') && (puesto += 'medio')
            j.posiciones.includes('MP') && (puesto += 'medio')
            j.posiciones.includes('DL') && (puesto += 'delantero')

            let id = j.nombre.replace(/'/g, "")
            id = `${id}-${j.edad}`
            


            let jug = {
                id,
                nombre: j.nombre,
                posicion: j.posiciones,
                edad: j.edad,
                defensa,
                apoyo,
                ataque,
                promedio,
                puesto,
                atributos: j
            }
            listaDeJugadores.push(jug)
        }
    }

    
    listaDeJugadores.sort((a, b) => b.promedio - a.promedio)
    printDatos.style.display = 'block'
    printDatos.innerHTML = `<h2>${pos}</h2>`
    
    if(pos == 'central practico' || pos == 'defensa central' || pos == 'defensa con toque'){
        printDatos.innerHTML = `<div class="player">
<div class="name titulo">Nombre (POS)</div>
<div class="data titulo">Prom.</div>
<div class="data titulo">DEFENSA</div>
<div class="data titulo">TAPON</div>
<div class="data titulo">CUBRIR</div>
</div>`
    }else{
        printDatos.innerHTML = `<div class="player">
<div class="name titulo">Nombre (POS)</div>
<div class="data titulo">Prom.</div>
<div class="data titulo">DEFENSA</div>
<div class="data titulo">APOYO</div>
<div class="data titulo">ATAQUE</div>
</div>`
    }

    for (j of listaDeJugadores) {
        let posAcorde = j.puesto.includes(puestoRequerido) ? 'bien' : 'mal'
        let targetEdad = j.edad < 19.1 ? 'juvenil' : ''
            printDatos.innerHTML += `<div class="player ${posAcorde}">
            <div class="name ${targetEdad}" onclick="dataJugador('${j.id}')">${j.nombre} -${j.edad}-<p>(${j.posicion})</p></div>
            <div class="data">${j.promedio}</div>
            <div class="data">${j.defensa}</div>
            <div class="data">${j.apoyo}</div>
            <div class="data">${j.ataque}</div>
            </div>`
    }



}
let dataJugador = (nombreDelJugador) => {

    let jugadorBuscado = listaDeJugadores.find(a => a.id == nombreDelJugador)
    console.log(jugadorBuscado)

    const jugadorModal = document.getElementById('jugadorIndividual')

    document.querySelector('.blur-container').style.display = 'block'
    jugadorModal.innerHTML = `<h2>${jugadorBuscado.nombre}</h2>
    <h3>Defensa Central</h3>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.cltpromedio)}"><div class="name">Central Lateral</div><div class="data">${jugadorBuscado.atributos.cltpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.ctppromedio)}"><div class="name">Central Practico</div><div class="data">${jugadorBuscado.atributos.ctppromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dfcpromedio)}"><div class="name">Defensa Central</div><div class="data">${jugadorBuscado.atributos.dfcpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dftpromedio)}"><div class="name">Defensa con Toque</div><div class="data">${jugadorBuscado.atributos.dftpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.libpromedio)}"><div class="name">Libero</div><div class="data">${jugadorBuscado.atributos.libpromedio.toFixed(2)}</div></div>
    <h3>Defensa de Banda</h3>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.carpromedio)}"><div class="name">Carrilero</div><div class="data">${jugadorBuscado.atributos.carpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.ccmpromedio)}"><div class="name">Carrilero Completo</div><div class="data">${jugadorBuscado.atributos.ccmpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.cinpromedio)}"><div class="name">Carrilero Inverso</div><div class="data">${jugadorBuscado.atributos.cinpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.latpromedio)}"><div class="name">Lateral</div><div class="data">${jugadorBuscado.atributos.latpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.lindf)}"><div class="name">Lateral Inverso</div><div class="data">${jugadorBuscado.atributos.lindf.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.lprdf)}"><div class="name">Lateral Practico</div><div class="data">${jugadorBuscado.atributos.lprdf.toFixed(2)}</div></div>
    <h3>Mediocampo Central</h3>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.ctcpromedio)}"><div class="name">Centrocampista</div><div class="data">${jugadorBuscado.atributos.ctcpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.recpromedio)}"><div class="name">Centrocampista Recuperador</div><div class="data">${jugadorBuscado.atributos.recpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.cttap)}"><div class="name">Centrocampista Todoterreno</div><div class="data">${jugadorBuscado.atributos.cttap.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.engap)}"><div class="name">Enganche</div><div class="data">${jugadorBuscado.atributos.engap.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.imxap)}"><div class="name">Interior Mixto</div><div class="data">${jugadorBuscado.atributos.imxap.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.mptpromedio)}"><div class="name">Mediapunta</div><div class="data">${jugadorBuscado.atributos.mptpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.mcidf)}"><div class="name">Medio Cierre</div><div class="data">${jugadorBuscado.atributos.mcidf.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.mdcpromedio)}"><div class="name">Mediocentro</div><div class="data">${jugadorBuscado.atributos.mdcpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.mzzpromedio)}"><div class="name">Mezzala</div><div class="data">${jugadorBuscado.atributos.mzzpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.oitap)}"><div class="name">Organizador Intinerante</div><div class="data">${jugadorBuscado.atributos.oitap.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.oadpromedio)}"><div class="name">Organizador Adelantado</div><div class="data">${jugadorBuscado.atributos.oadpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.pvddf)}"><div class="name">Pivote Defensivo</div><div class="data">${jugadorBuscado.atributos.pvddf.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.pvopromedio)}"><div class="name">Pivote Organizador</div><div class="data">${jugadorBuscado.atributos.pvopromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.regap)}"><div class="name">Regista</div><div class="data">${jugadorBuscado.atributos.regap.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.sgvpromedio)}"><div class="name">Segundo Volante</div><div class="data">${jugadorBuscado.atributos.sgvpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dsrat)}"><div class="name">Delantero Sorpresa</div><div class="data">${jugadorBuscado.atributos.dsrat.toFixed(2)}</div></div>
    <h3>Mediocampo de Banda</h3>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.bdeat)}"><div class="name">Buscador de Espacios</div><div class="data">${jugadorBuscado.atributos.bdeat.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.cmbpromedio)}"><div class="name">Centrocampista de Banda</div><div class="data">${jugadorBuscado.atributos.cmbpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dlipromedio)}"><div class="name">Delantero Interior</div><div class="data">${jugadorBuscado.atributos.dlipromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.doepromedio)}"><div class="name">Delantero Objetivo Escorado</div><div class="data">${jugadorBuscado.atributos.doepromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.extpromedio)}"><div class="name">Extremo</div><div class="data">${jugadorBuscado.atributos.extpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.exdpromedio)}"><div class="name">Extremo Defensivo</div><div class="data">${jugadorBuscado.atributos.exdpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.exipromedio)}"><div class="name">Extremo Inverso</div><div class="data">${jugadorBuscado.atributos.exipromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.ogbpromedio)}"><div class="name">Organizador de Banda</div><div class="data">${jugadorBuscado.atributos.ogbpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.tqtat)}"><div class="name">Trequartista</div><div class="data">${jugadorBuscado.atributos.tqtat.toFixed(2)}</div></div>
    <h3>Delantero</h3>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.ariat)}"><div class="name">Ariete</div><div class="data">${jugadorBuscado.atributos.ariat.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dlaat)}"><div class="name">Delantero Avanzado</div><div class="data">${jugadorBuscado.atributos.dlaat.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dlcpromedio)}"><div class="name">Delantero Completo</div><div class="data">${jugadorBuscado.atributos.dlcpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dlopromedio)}"><div class="name">Delantero Objetivo</div><div class="data">${jugadorBuscado.atributos.dlopromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.dprpromedio)}"><div class="name">Delantero Presionante</div><div class="data">${jugadorBuscado.atributos.dprpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.sgdpromedio)}"><div class="name">Segundo Delantero</div><div class="data">${jugadorBuscado.atributos.sgdpromedio.toFixed(2)}</div></div>
    <div class="player ${poniendoValor(jugadorBuscado.atributos.fnvap)}"><div class="name">Falso Nueve</div><div class="data">${jugadorBuscado.atributos.fnvap.toFixed(2)}</div></div>
    <button onclick="cerrarModal('jugadorIndividual')">Cerrar</button>
    `

    jugadorModal.style.display = 'flex'
}

let impresionDeArqueros = (jugadores) => {

    let arqueros = []

    for (j of jugadores) {
        j.posiciones == 'POR' && arqueros.push(j)
    }

    arqueros.sort((a, b) => b.porpromedio - a.porpromedio)
    printDatos.style.display = 'block'
    printDatos.innerHTML = `<div class="player">
<div class="name titulo">Nombre</div>
<div class="data titulo">Prom.</div>
<div class="data titulo">POR - DF</div>
<div class="data titulo">PCI - DF</div>
<div class="data titulo">PCI - AP</div>
<div class="data titulo">PCI - AT</div>
</div>`

    for (gk of arqueros) {
        printDatos.innerHTML += `<div class="player">
<div class="name">${gk.nombre}</div>
<div class="data">${gk.porpromedio.toFixed(1)}</div>
<div class="data">${gk.pordf.toFixed(1)}</div>
<div class="data">${gk.pcidf.toFixed(1)}</div>
<div class="data">${gk.pciap.toFixed(1)}</div>
<div class="data">${gk.pciat.toFixed(1)}</div>
</div>`
    }


}

function abrirModal() {
    let modal = document.getElementById('cargaExitosa');
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal(boxacerrar) {
    let modal = document.getElementById(boxacerrar);
    document.querySelector('.blur-container') && (document.querySelector('.blur-container').style.display = 'none')
    modal.style.display = 'none';
}


function cargarArchivo() {
    let input = document.getElementById('fileInput');
    let file = input.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let contenidoHTML = e.target.result;

            const parser = new DOMParser();
            const listado = parser.parseFromString(contenidoHTML, 'text/html');

            const jugadores = listado.querySelectorAll('tr')

            let numeroDeVuelta = 0
            let plantilla = []

            for (linea of jugadores) {

                const datoJugador = linea.querySelectorAll('td')
                let jugador = {}
                let numeroDeDato = 0
                for (dato of datoJugador) {
                    numeroDeDato == 0 && (jugador.id = numeroDeVuelta)
                    numeroDeDato == 2 && (jugador.nombre = dato.innerHTML)
                    numeroDeDato == 3 && (jugador.edad = parseInt(dato.innerHTML))
                    numeroDeDato == 4 && (jugador.nacionalidad = dato.innerHTML)
                    numeroDeDato == 7 && (jugador.alcanceAereo = parseInt(dato.innerHTML))
                    numeroDeDato == 8 && (jugador.blocaje = parseInt(dato.innerHTML))
                    numeroDeDato == 9 && (jugador.comunicacion = parseInt(dato.innerHTML))
                    numeroDeDato == 10 && (jugador.excentricidad = parseInt(dato.innerHTML))
                    numeroDeDato == 11 && (jugador.punos = parseInt(dato.innerHTML))
                    numeroDeDato == 12 && (jugador.mandoEnElArea = parseInt(dato.innerHTML))
                    numeroDeDato == 13 && (jugador.reflejos = parseInt(dato.innerHTML))
                    numeroDeDato == 14 && (jugador.salidas = parseInt(dato.innerHTML))
                    numeroDeDato == 15 && (jugador.saqueConLaMano = parseInt(dato.innerHTML))
                    numeroDeDato == 16 && (jugador.saqueDePuerta = parseInt(dato.innerHTML))
                    numeroDeDato == 17 && (jugador.unoContraUno = parseInt(dato.innerHTML))
                    numeroDeDato == 18 && (jugador.cabeceo = parseInt(dato.innerHTML))
                    numeroDeDato == 19 && (jugador.centros = parseInt(dato.innerHTML))
                    numeroDeDato == 20 && (jugador.control = parseInt(dato.innerHTML))
                    numeroDeDato == 21 && (jugador.entradas = parseInt(dato.innerHTML))
                    numeroDeDato == 22 && (jugador.marcaje = parseInt(dato.innerHTML))
                    numeroDeDato == 23 && (jugador.pases = parseInt(dato.innerHTML))
                    numeroDeDato == 24 && (jugador.penales = parseInt(dato.innerHTML))
                    numeroDeDato == 25 && (jugador.saqueDeEsquinas = parseInt(dato.innerHTML))
                    numeroDeDato == 26 && (jugador.regate = parseInt(dato.innerHTML))
                    numeroDeDato == 27 && (jugador.remate = parseInt(dato.innerHTML))
                    numeroDeDato == 28 && (jugador.tiroLibres = parseInt(dato.innerHTML))
                    numeroDeDato == 29 && (jugador.tirosLejanos = parseInt(dato.innerHTML))
                    numeroDeDato == 30 && (jugador.saqueLargo = parseInt(dato.innerHTML))
                    numeroDeDato == 31 && (jugador.tecnica = parseInt(dato.innerHTML))
                    numeroDeDato == 32 && (jugador.agresividad = parseInt(dato.innerHTML))
                    numeroDeDato == 33 && (jugador.anticipacion = parseInt(dato.innerHTML))
                    numeroDeDato == 34 && (jugador.valentia = parseInt(dato.innerHTML))
                    numeroDeDato == 35 && (jugador.serenidad = parseInt(dato.innerHTML))
                    numeroDeDato == 36 && (jugador.concentracion = parseInt(dato.innerHTML))
                    numeroDeDato == 37 && (jugador.decisiones = parseInt(dato.innerHTML))
                    numeroDeDato == 38 && (jugador.determinacion = parseInt(dato.innerHTML))
                    numeroDeDato == 39 && (jugador.talento = parseInt(dato.innerHTML))
                    numeroDeDato == 40 && (jugador.liderazgo = parseInt(dato.innerHTML))
                    numeroDeDato == 41 && (jugador.desmarques = parseInt(dato.innerHTML))
                    numeroDeDato == 42 && (jugador.colocacion = parseInt(dato.innerHTML))
                    numeroDeDato == 43 && (jugador.juegoEnEquipo = parseInt(dato.innerHTML))
                    numeroDeDato == 44 && (jugador.vision = parseInt(dato.innerHTML))
                    numeroDeDato == 45 && (jugador.sacrificio = parseInt(dato.innerHTML))
                    numeroDeDato == 46 && (jugador.aceleracion = parseInt(dato.innerHTML))
                    numeroDeDato == 47 && (jugador.agilidad = parseInt(dato.innerHTML))
                    numeroDeDato == 48 && (jugador.equilibrio = parseInt(dato.innerHTML))
                    numeroDeDato == 49 && (jugador.salto = parseInt(dato.innerHTML))
                    numeroDeDato == 50 && (jugador.recuperacionFisica = parseInt(dato.innerHTML))
                    numeroDeDato == 51 && (jugador.velocidad = parseInt(dato.innerHTML))
                    numeroDeDato == 52 && (jugador.resistencia = parseInt(dato.innerHTML))
                    numeroDeDato == 53 && (jugador.fuerza = parseInt(dato.innerHTML))
                    numeroDeDato == 54 && (jugador.posiciones = dato.innerHTML)

                    numeroDeDato++
                }
                jugador.nombre != undefined && plantilla.push(jugador)
                numeroDeVuelta++
            }


            calculadorDeRoles(plantilla)
            document.getElementById('porteros').addEventListener('click', () => impresionDeArqueros(plantilla))
            let botones = document.querySelectorAll('.btn')

            for (i = 1; i < botones.length; i++) {
                botones[i].addEventListener('click', (e) => {
                    let posicion = e.target.innerHTML.toLowerCase()
                    let puesto = e.target.dataset.puesto
                    impresionDeJugadores(plantilla, posicion,puesto)
                })
            }

        };
        abrirModal()

        reader.readAsText(file);
    } else {
        alert("Por favor, selecciona un archivo HTML.");
    }
}

let poniendoValor = (valor) => {
    let status = valor < 48 ? 'muyMalo' : valor < 57 ? 'malo' : valor < 65 ? 'regular' : valor < 77 ? 'bueno' : 'muyBueno'

    return status
}

let calcularJugador = () => {

    let inputs = document.querySelectorAll('input')
    
    for( i = 0 ; i < inputs.length; i++){
        inputs[i].value == "" && (inputs[i].value = 3)
        inputs[i].value < 1 && (inputs[i].value = 1)
        inputs[i].value > 20 && (inputs[i].value = 20)
    }

    let inputControl = parseInt(document.getElementById('inputControlGK').value) > parseInt(document.getElementById('inputControl').value) ? parseInt(document.getElementById('inputControlGK').value) : parseInt(document.getElementById('inputControl').value)
    let inputPases = parseInt(document.getElementById('inputPasesGK').value) > parseInt(document.getElementById('inputPases').value) ? parseInt(document.getElementById('inputPasesGK').value) : parseInt(document.getElementById('inputPases').value)

    jug = {}

         //ATRIBUTOS PORTEROS - 11
      aer = parseInt(document.getElementById('inputAlcanceAereo').value);
      blo = parseInt(document.getElementById('inputBlocaje').value);
      com = parseInt(document.getElementById('inputComunicacion').value);
      exc = parseInt(document.getElementById('inputExcentricidad').value);
      pun = parseInt(document.getElementById('inputPunos').value);
      mdo = parseInt(document.getElementById('inputMandoArea').value);
      ref = parseInt(document.getElementById('inputReflejos').value);
      sld = parseInt(document.getElementById('inputSalidas').value);
      sqm = parseInt(document.getElementById('inputSaqueMano').value);
      sqp = parseInt(document.getElementById('inputSaquePuerta').value);
      uvu = parseInt(document.getElementById('inputUnoVsUno').value);
     //ATRIBUTOS TECNICOS - 14 
      cab = parseInt(document.getElementById('inputCabeceo').value);
      cen = parseInt(document.getElementById('inputCentros').value);
      ctr = inputControl;
      ent = parseInt(document.getElementById('inputEntradas').value);
      mar = parseInt(document.getElementById('inputMarcaje').value);
      pas = inputPases;
      pen = parseInt(document.getElementById('inputPenales').value);
      reg = parseInt(document.getElementById('inputRegate').value);
      rem = parseInt(document.getElementById('inputRemate').value);
      sqe = parseInt(document.getElementById('inputSaqueEsquina').value);
      sql = parseInt(document.getElementById('inputSaquesLargos').value);
      tec = parseInt(document.getElementById('inputTecnica').value);
      tle = parseInt(document.getElementById('inputTiroLejano').value);
      tli = parseInt(document.getElementById('inputTiroLibre').value);
     //ATRIBUTOS MENTALES - 14
      agr = parseInt(document.getElementById('inputAgresividad').value);
      ant = parseInt(document.getElementById('inputAnticipacion').value);
      col = parseInt(document.getElementById('inputColocacion').value);
      cnc = parseInt(document.getElementById('inputConcentracion').value);
      dec = parseInt(document.getElementById('inputDecisiones').value);
      dmq = parseInt(document.getElementById('inputDesmarques').value);
      det = parseInt(document.getElementById('inputDeterminacion').value);
      jeq = parseInt(document.getElementById('inputJuegoEquipo').value);
      lid = parseInt(document.getElementById('inputLiderazgo').value);
      sac = parseInt(document.getElementById('inputSacrificio').value);
      ser = parseInt(document.getElementById('inputSerenidad').value);
      tal = parseInt(document.getElementById('inputTalento').value);
      val = parseInt(document.getElementById('inputValentia').value);
      vis = parseInt(document.getElementById('inputVision').value);
     //ATRIBUTOS FISICOS - 8
      ace = parseInt(document.getElementById('inputAceleracion').value);
      agi = parseInt(document.getElementById('inputAgilidad').value);
      sal = parseInt(document.getElementById('inputAlcanceSalto').value);
      equ = parseInt(document.getElementById('inputEquilibrio').value);
      fue = parseInt(document.getElementById('inputFuerza').value);
      rfi = parseInt(document.getElementById('inputRecuperacionFisica').value);
      res = parseInt(document.getElementById('inputResistencia').value);
      vel = parseInt(document.getElementById('inputVelocidad').value);

    calculandoRoles()
    console.log(jug)
    
    document.getElementById('printPosiciones').innerHTML = `
        <h2>Arqueros</h2>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Rol</div>
            <div class="valorDeRol">Defensa</div>
            <div class="valorDeRol">Apoyo</div>
            <div class="valorDeRol">Ataque</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Portero</div>
            <div class="valorDeRol ${poniendoValor(jug.pordf)}">${jug.pordf.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Portero Cierre</div>
            <div class="valorDeRol ${poniendoValor(jug.pcidf)}">${jug.pcidf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.pciap)}">${jug.pciap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.pciat)}">${jug.pciat.toFixed(2)}</div>
        </div>

        <h2>Defensas Centrales</h2>

        <div class="lineaDeRol">
            <div class="nombreDeRol">Rol</div>
            <div class="valorDeRol">Defensa</div>
            <div class="valorDeRol">Apoyo / Tapon</div>
            <div class="valorDeRol">Ataque / Cubrir</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Defensa Central</div>
            <div class="valorDeRol ${poniendoValor(jug.dfcdf)}">${jug.dfcdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dfctp)}">${jug.dfctp.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dfcco)}">${jug.dfcco.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Libero</div>
            <div class="valorDeRol ${poniendoValor(jug.libdf)}">${jug.libdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.libap)}">${jug.libap.toFixed(2)}</div>
            <div class="valorDeRol ">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Defensa con Toque</div>
            <div class="valorDeRol ${poniendoValor(jug.dftdf)}">${jug.dftdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dfttp)}">${jug.dfttp.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dftco)}">${jug.dftco.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Central Practico</div>
            <div class="valorDeRol ${poniendoValor(jug.ctpdf)}">${jug.ctpdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ctptp)}">${jug.ctptp.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ctpco)}">${jug.ctpco.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Central Lateral</div>
            <div class="valorDeRol ${poniendoValor(jug.cltdf)}">${jug.cltdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cltap)}">${jug.cltap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cltat)}">${jug.cltat.toFixed(2)}</div>
        </div>
        
        <h2>Defensores de Banda</h2>

        <div class="lineaDeRol">
            <div class="nombreDeRol">Rol</div>
            <div class="valorDeRol">Defensa</div>
            <div class="valorDeRol">Apoyo</div>
            <div class="valorDeRol">Ataque</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Lateral</div>
            <div class="valorDeRol ${poniendoValor(jug.latdf)}">${jug.latdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.latap)}">${jug.latap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.latat)}">${jug.latat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Carrilero</div>
            <div class="valorDeRol ${poniendoValor(jug.cardf)}">${jug.cardf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.carap)}">${jug.carap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.carat)}">${jug.carat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Lateral Practico</div>
            <div class="valorDeRol ${poniendoValor(jug.cltdf)}">${jug.cltdf.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Carrilero Completo</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.ccmap)}">${jug.ccmap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ccmat)}">${jug.ccmat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Carrilero Inverso</div>
            <div class="valorDeRol ${poniendoValor(jug.cindf)}">${jug.cindf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cinap)}">${jug.cinap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cinat)}">${jug.cinat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Lateral Inverso</div>
            <div class="valorDeRol ${poniendoValor(jug.lindf)}">${jug.lindf.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
        </div>

        <h2>Mediocampistas y Mediapuntas Centrales</h2>

        <div class="lineaDeRol">
            <div class="nombreDeRol">Rol</div>
            <div class="valorDeRol">Defensa</div>
            <div class="valorDeRol">Apoyo</div>
            <div class="valorDeRol">Ataque</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Mediocentro</div>
            <div class="valorDeRol ${poniendoValor(jug.mdcdf)}">${jug.mdcdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.mdcap)}">${jug.mdcap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Pivote Organizador</div>
            <div class="valorDeRol ${poniendoValor(jug.pvodf)}">${jug.pvodf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.pvoap)}">${jug.pvoap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Centrocampista Recuperador</div>
            <div class="valorDeRol ${poniendoValor(jug.recdf)}">${jug.recdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.recap)}">${jug.recap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Pivote Defensivo</div>
            <div class="valorDeRol ${poniendoValor(jug.pvddf)}">${jug.pvddf.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Medio Cierre</div>
            <div class="valorDeRol ${poniendoValor(jug.mcidf)}">${jug.mcidf.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Regista</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.regap)}">${jug.regap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Organizador Intinerante</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.oitap)}">${jug.oitap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Segundo Volante</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.sgvap)}">${jug.sgvap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.sgvat)}">${jug.sgvat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Centrocampista</div>
            <div class="valorDeRol ${poniendoValor(jug.ctcdf)}">${jug.ctcdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ctcap)}">${jug.ctcap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ctcat)}">${jug.ctcat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Centrocampista Todoterreno</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.cttap)}">${jug.cttap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Organizador Adelantado</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.oadap)}">${jug.oadap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.oadat)}">${jug.oadat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Mezzala</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.mzzap)}">${jug.mzzap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.mzzat)}">${jug.mzzat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Interior Mixto</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.imxap)}">${jug.imxap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Mediapunta</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.mptap)}">${jug.mptap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.mptat)}">${jug.mptat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Trequartista</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.tqtat)}">${jug.tqtat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Enganche</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.engap)}">${jug.engap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Sorpresa</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.dsrat)}">${jug.dsrat.toFixed(2)}</div>
        </div>

        <h2>Mediocampistas y Mediapuntas de Banda</h2>

        <div class="lineaDeRol">
            <div class="nombreDeRol">Rol</div>
            <div class="valorDeRol">Defensa</div>
            <div class="valorDeRol">Apoyo</div>
            <div class="valorDeRol">Ataque</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Centrocampista de Banda</div>
            <div class="valorDeRol ${poniendoValor(jug.cmbdf)}">${jug.cmbdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cmbap)}">${jug.cmbap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.cmbat)}">${jug.cmbat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Extremo</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.extap)}">${jug.extap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.extat)}">${jug.extat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Extremo Defensivo</div>
            <div class="valorDeRol ${poniendoValor(jug.exddf)}">${jug.exddf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.exdap)}">${jug.exdap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Organizador Banda</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.ogbap)}">${jug.ogbap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.ogbat)}">${jug.ogbat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Extremo Inverso</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.exiap)}">${jug.exiap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.exiat)}">${jug.exiat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Interior</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.dliap)}">${jug.dliap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dliat)}">${jug.dliat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Objetivo Escorado</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.doeap)}">${jug.doeap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.doeat)}">${jug.doeat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Buscador de Espacios</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.bdeat)}">${jug.bdeat.toFixed(2)}</div>
        </div>

        <h2>Delanteros</h2>

        <div class="lineaDeRol">
            <div class="nombreDeRol">Segundo Delantero</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.sgdap)}">${jug.sgdap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.sgdat)}">${jug.sgdat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Avanzado</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.dlaat)}">${jug.dlaat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Objetivo</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.dloap)}">${jug.dloap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dloat)}">${jug.dloat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Ariete</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.ariat)}">${jug.ariat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Completo</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.dlcap)}">${jug.dlcap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dlcat)}">${jug.dlcat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Delantero Presionante</div>
            <div class="valorDeRol ${poniendoValor(jug.dprdf)}">${jug.dprdf.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dprap)}">${jug.dprap.toFixed(2)}</div>
            <div class="valorDeRol ${poniendoValor(jug.dprat)}">${jug.dprat.toFixed(2)}</div>
        </div>
        <div class="lineaDeRol">
            <div class="nombreDeRol">Falso 9</div>
            <div class="valorDeRol">-</div>
            <div class="valorDeRol ${poniendoValor(jug.fnvap)}">${jug.fnvap.toFixed(2)}</div>
            <div class="valorDeRol">-</div>
        </div>
        `

}

document.getElementById('botonCalculador') && document.getElementById('botonCalculador').addEventListener('click', () => calcularJugador())


