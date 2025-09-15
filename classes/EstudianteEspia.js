const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
    constructor(nombre, reputacion = 6, nivelChisme = 4) {
        super(nombre, reputacion, nivelChisme);
    }

    recolectarInfo() {
        console.log(`${this.nombre}: Lee chats ajenos desde el último puesto del salón`);
        
        const incremento = Math.random() * 2.5 + 0.5;
        this._setNivelChisme(this.getNivelChisme() + incremento);
    }

    contarChisme() {
        console.log(`${this.nombre}: Filtra el chisme por estados en WhatsApp`);
        
        const incrementoChisme = Math.random() * 2.5 + 1;
        const cambioReputacion = Math.random() > 0.7 ? -1.5 : 0.2;
        
        this._setNivelChisme(this.getNivelChisme() + incrementoChisme);
        this._setReputacion(this.getReputacion() + cambioReputacion);
    }
}

module.exports = EstudianteEspia;