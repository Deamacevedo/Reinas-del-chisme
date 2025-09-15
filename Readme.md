# Reinas del Chisme 🗣️

Aplicación de consola desarrollada en Node.js que simula una batalla de chismes entre diferentes tipos de chismosas profesionales usando Programación Orientada a Objetos (POO).

## 🎯 Descripción

Sistema que modela diferentes tipos de chismosas donde cada una tiene su estilo único para recolectar información y difundir chismes. La aplicación simula una "batalla de chismes" para determinar quién logra hacer el chisme más viral.

## 🚀 Instalación

1. Clona o descarga el proyecto
2. Abre la terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

## 📦 Librerías utilizadas

- **chalk**: Para mostrar colores en la consola

## ▶️ Cómo usar

Ejecuta la aplicación con:

```bash
npm start
```

o

```bash
node index.js
```

## 🏗️ Estructura del proyecto

```
Reinas del chisme/
├── classes/
│   ├── Chismosa.js          # Clase abstracta base
│   ├── TiaVecina.js         # Chismosa del barrio
│   ├── CompaneraCuriosa.js  # Chismosa del trabajo
│   └── EstudianteEspia.js   # Chismosa estudiantil
├── index.js                 # Archivo principal
├── package.json
├── .gitignore
└── README.md
```

## 🎮 Cómo funciona

1. Se crean 3 tipos de chismosas con características únicas
2. Cada chismosa participa en 2 rondas
3. En cada ronda: recolectan información y cuentan chismes
4. Los valores de reputación y nivel de chisme cambian aleatoriamente
5. Al final se determina quién tiene el chisme más viral

## 👥 Desarrolladores

- **Dylan Acevedo**
- **Jeferson López**