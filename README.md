# Water Bucket Challenge

​

## Índice

​

- [WaterBucketChallenge](#waterbucket-challenge)
  - [Instalación](#instalacion)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Resumen del desarrollo del proyecto](#2-resumen-del-desarrollo-del-proyecto)
  - [4. Carpetas que encontrarás en el repositorio](#4-carpetas-que-encontrarás-en-el-repositorio)
  - [SRC](#src)
    - [App](#app)
    - [Components](#components)
    - [README](#readme)

​

# Instalación

```bash
git clone https://github.com/loregunner/water-bucket-challenge.git
```

## Instalar dependencias

```bash
yarn install  o npm install
```

```bash
yarn run dev  o npm run dev
```

## 1. Preámbulo

​
Este proyecto tiene como enfoque principal el realizar una solución para el "Water bucket challenge" el cual es un algoritmo que se basa en resolver el clásico acertijo de las jarras de agua. El desafio consiste en usar dos jarras con capacidades diferentes (X galones y Y galones) para medir Z galones de agua.

## 2. Resumen del desarrollo del proyecto

Para la solución del reto, se trabajo con react - vite - typescript, este con la idea de trabajar con los requerimientos tecnicos necesarios, el algoritmo de Euclides fue con el que se trabajo principalmente ya que su objetivop principal es encontrar el máximo comúnm divisor (MCD) de números enteros y uno de los requerimientos era que los números ingresados fueran enteros mayores a cero, además que dos números enteros positivos se dividen repetidamente y usa el residuo. También se utilizo el (BFS) Bread first search que consiste en explorar nodos nivel por nivel comenzando desde el nodo raiz y explora todos los nodos vecionos de ese nodo antes de pasar al siguiente nivel, Utiliza una cola (FIFO) para llevarel seguimiento de los nodos que necesita explorar.

## 4. Framework - Librería - Lenguaje

|            | Descripción                                                                                                        |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| ReactJS    | Es una librería de JavaScript                                                                                      |
| Vite       | Herramienta de construcción y desarrollo de aplicaciones                                                           |
| Typescript | TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y funciones avanzadas a JavaScript |

## 5. Carpetas que encontrarás en el repositorio

## SRC

### App

| Archivo | Descripción                         |
| :------ | :---------------------------------- |
| App.tsx | Pagína inicial del proyecto         |
| App.css | Css global utilizado en el proyecto |

### Components

| Archivo         | Descripción                                |
| :-------------- | :----------------------------------------- |
| Water.tsx       | Componente principal de las jarras de agua |
| Water.utils.tsx | Funciones principales del reto, MCD y BFS  |

### README

​
| Archivo | Descripción |
| :-------- | :---------------------------- |
| readme.md | Documentación general del proyecto |
