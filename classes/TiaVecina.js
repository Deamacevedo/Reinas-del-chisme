const Chismosa = require('./Chismosa');

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion = 5, nivelChisme = 3) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.nombre}: Aprovecha la reunión del barrio para escuchar discretamente`);
        
        const incremento = Math.random() * 2;
        this._setNivelChisme(this.getNivelChisme() + incremento);
    }

    contarChisme() {
        console.log(`${this.nombre}: Difunde el chisme mientras ofrece café`);
        
        const incrementoChisme = Math.random() * 3 + 1;
        const cambioReputacion = Math.random() > 0.6 ? -1 : 0.5;
        
        this._setNivelChisme(this.getNivelChisme() + incrementoChisme);
        this._setReputacion(this.getReputacion() + cambioReputacion);
    }
}

module.exports = TiaVecina;