const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
    constructor(nombre, reputacion = 7, nivelChisme = 2) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.nombre}: Hace preguntas aparentemente profesionales a los compañeros de trabajo`);
        
        const incremento = Math.random() * 1.5;
        this._setNivelChisme(this.getNivelChisme() + incremento);
        
        const incrementoReputacion = Math.random() * 0.5;
        this._setReputacion(this.getReputacion() + incrementoReputacion);
    }

    contarChisme() {
        console.log(`${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo`);
        
        const incrementoChisme = Math.random() * 1.5 + 0.5;
        const incrementoReputacion = Math.random() * 0.8;
        
        this._setNivelChisme(this.getNivelChisme() + incrementoChisme);
        this._setReputacion(this.getReputacion() + incrementoReputacion);
    }
}

module.exports = CompaneraCuriosa;