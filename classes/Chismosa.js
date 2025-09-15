class Chismosa {
    #reputacion;
    #nivelChisme;

    constructor(nombre, reputacion, nivelChisme) {
        if (this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase abstracta Chismosa directamente");
        }
        
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    recolectarInfo() {
        throw new Error("El método recolectarInfo() debe ser implementado por la subclase");
    }

    contarChisme() {
        throw new Error("El método contarChisme() debe ser implementado por la subclase");
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    _setReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, valor));
    }

    _setNivelChisme(valor) {
        this.#nivelChisme = Math.max(0, Math.min(10, valor));
    }
}

module.exports = Chismosa;