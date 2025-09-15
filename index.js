const chalk = require('chalk');
const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');

function mostrarEstadisticas(chismosa, ronda) {
    const reputacion = chismosa.getReputacion();
    const nivelChisme = chismosa.getNivelChisme();
    
    let reputacionTexto = '';
    let chismeTexto = '';
    
    if (reputacion >= 7) {
        reputacionTexto = chalk.hex('#FFA500')(`Reputación: ${reputacion.toFixed(2)}/10`);
    } else if (reputacion <= 3) {
        reputacionTexto = chalk.black(`Reputación: ${reputacion.toFixed(2)}/10`);
    } else {
        reputacionTexto = chalk.white(`Reputación: ${reputacion.toFixed(2)}/10`);
    }
    
    if (nivelChisme >= 8) {
        chismeTexto = chalk.magenta(`Nivel de Chisme: ${nivelChisme.toFixed(2)}/10`);
    } else {
        chismeTexto = chalk.white(`Nivel de Chisme: ${nivelChisme.toFixed(2)}/10`);
    }
    
    console.log(`\n--- Estadísticas de ${chismosa.nombre} (Ronda ${ronda}) ---`);
    console.log(reputacionTexto);
    console.log(chismeTexto);
}

function determinarGanadora(chismosas) {
    let ganadora = chismosas[0];
    let maxNivel = ganadora.getNivelChisme();
    
    for (let chismosa of chismosas) {
        if (chismosa.getNivelChisme() > maxNivel) {
            maxNivel = chismosa.getNivelChisme();
            ganadora = chismosa;
        }
    }
    
    return ganadora;
}

function iniciarBatallaChismes() {
    console.log('🗣️  ¡BATALLA DE CHISMES - REINAS DEL CHISME! 🗣️\n');
    console.log('===============================================\n');
    
    const chismosas = [
        new TiaVecina('Doña Carmen'),
        new CompaneraCuriosa('María del Trabajo'),
        new EstudianteEspia('Sofía la Espía')
    ];
    
    for (let ronda = 1; ronda <= 2; ronda++) {
        console.log(`\n🔥 RONDA ${ronda} 🔥`);
        console.log('================\n');
        
        for (let chismosa of chismosas) {
            console.log(`--- Turno de ${chismosa.nombre} ---`);
            chismosa.recolectarInfo();
            chismosa.contarChisme();
            mostrarEstadisticas(chismosa, ronda);
            console.log('');
        }
    }
    
    console.log('\n🏆 RESULTADOS FINALES 🏆');
    console.log('========================\n');
    
    const ganadora = determinarGanadora(chismosas);
    
    console.log('Estadísticas finales de todas las chismosas:');
    for (let chismosa of chismosas) {
        const esGanadora = chismosa === ganadora;
        const prefijo = esGanadora ? '👑 ' : '   ';
        console.log(`${prefijo}${chismosa.nombre}:`);
        console.log(`     Reputación: ${chismosa.getReputacion().toFixed(2)}/10`);
        console.log(`     Nivel Chisme: ${chismosa.getNivelChisme().toFixed(2)}/10`);
        if (esGanadora) {
            console.log('     ' + chalk.magenta('🎉 ¡CHISME MÁS VIRAL! 🎉'));
        }
        console.log('');
    }
}

iniciarBatallaChismes();