# Taller POO - Reinas del Chisme

Modelar un sistema de *chismosas prfesionales*, donde cada tipo de reina del chisme recolecta información y difunde chismes con su estilo único. Se debe simular una “batalla de chismes” que determine quién logra hacer el chisme más viral.

---

### 📁 Estructura del proyecto (Ejemplo)

```
batalla-chismes/
├── classes/
│   ├── Chismosa.js
│   ├── TiaVecina.js
│   ├── CompaneraCuriosa.js
│   └── EstudianteEspia.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## Especificaciones de clases

### Clase abstracta `Chismosa`

- Propiedades privadas: `#reputacion`, `#nivelChisme`
- Constructor: `nombre, reputacion, nivelChisme`
- Métodos:
    - `recolectarInfo()` → ❌ abstracto
    - `contarChisme()` → ❌ abstracto
    - `getReputacion()` → retorna reputación
    - `getNivelChisme()` → retorna nivel del chisme

> No se puede instanciar directamente. Los métodos abstractos deben ser sobreescritos por las subclases.
> 
> 
> Se lanza error si no se implementan correctamente.
> 

---

### Subclase `TiaVecina`

- `recolectarInfo()` imprime: `Aprovecha la reunión del barrio para escuchar discretamente`
- `contarChisme()` imprime: `Difunde el chisme mientras ofrece café`
- Aumenta mucho el nivel del chisme, pero también su reputación puede verse afectada si exagera.

---

### Subclase `CompaneraCuriosa`

- `recolectarInfo()` imprime: `Hace preguntas aparentemente profesionales a los compañeros de trabajo`
- `contarChisme()` imprime: `Comenta el chisme como ejemplo de vida en el trabajo`
- Gana reputación, pero su chisme sube lento de nivel.

---

### Subclase `EstudianteEspia`

- `recolectarInfo()` imprime: `Lee chats ajenos desde el último puesto del salón`
- `contarChisme()` imprime: `Filtra el chisme por estados en WhatsApp`
- Su nivel de chisme sube rápido, pero puede perder reputación si es descubierta.

---

### Archivo `index.js` (Punto de entrada)

- Crear un arreglo de diferentes tipos de chismosas
- Cada una recolecta información y cuenta un chisme
- Mostrar estadísticas finales: reputación y nivel de chisme
- Usar una librería para formatear salidas (por ejemplo `chalk`):
    - 🟣 Morado para chismes virales
    - 🟠 Naranja para reputación alta
    - ⚫ Negro para reputación baja o cancelación

---

## Reglas adicionales

- El nivel de chisme va de 0 a 10.
- La reputación va de 0 a 10.
- Simular al menos 2 rondas por chismosa.
- Usar `Math.random()` para modificar valores según el resultado de cada acción.
- El chisme más viral es el que tiene mayor `nivelChisme`.

---

## Entrega

Entregar link del repositorio con hash incluido. Se permite trabajar en parejas.

---

## Plazo de entrega

**Domingo 14 de septiembre a las 11:59:59 p.m.**

---

⚠️ Es posible usar las librería NPM de su elección siempre y cuando no se involucre con ningún proceso que tenga que ver con el modelado de las clases y sus métodos.