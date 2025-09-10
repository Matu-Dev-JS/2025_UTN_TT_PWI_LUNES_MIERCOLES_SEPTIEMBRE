## Aprendiendo el camino del desarrollador 🐱‍👤

## HTML5

# Sintaxis:

Html tiene etiquetas, las etiquetas pueden ser de 2 tipos:

## Etiquetas de Cierre / Apertura y Cierre
Tienen una parte que es la apertura y otra parte que es el cierre
Tienen la capacidad de contener cosas

Ejemplo:
<padre></padre>
<hijo></hijo>
<button>Click me!</button>
<button> <img/> </button> Esta etiqueta de boton contiene una imagen

## Etiquetas de Autocierre
No tienen parte de cierre y pueden o no tener "/" (No hace ningun cambio no tenerla).
No pueden contener cosas

Ejemplo: 
<autocierre/> Esta forma es la vieja forma de hacer etiquetas de autocierre
<test> Esta forma es nueva, vino con HTML5

## ELEMENTOS:
Los elementos es una lista de palabras definidas por el lenguaje, cada elemento tiene un significado/ funcionalidad y naturaleza / tipo

Por ejemplo:

<img>
- Elemento: img
- Significado / funcionalidad: Colocar una imagen
- Naturaleza / tipo: autocierre

<button></button>
- Elemento: button
- Significado / funcionalidad: Crea un boton en la pagina
- Naturaliza / tipo: de cierre

<h1></h1>
- Elemento: h1
- Significado / funcionalidad: Crea un titulo en la pagina
- Naturaliza / tipo: de cierre

## Anidamiento / Nesting
Es la capacidad de que una etiqueta pueda 'atrapar' / 'encerrar' una etiqueta dentro de otra

Que tipo de etiquetas pueden hacer nesting? de cierre
Puedo tener anidado mas de un hijo? SI, no hay limite en cuantos hijos quieras anidar

Ejemplo:
La etiqueta IMG esta anidada dentro de boton
<button> <img/> </button>

Ejemplo:
- Abuelo anido a padre
- Padre anido a 2 <hijo>
- Los hijos son hermanos
<abuelo><padre><hijo></hijo> <hijo></hijo></padre></abuelo>

## Buena practica: Indentación

Es la practica recomendada para marcar la jerarquia (quien en padre de quien) en el codigo HTML
El hijo debera tener 1 tabulacion respecto al padre
1 Tabulacion es igual a una x cantidad de espacios

<padre>
    <hijo>
    </hijo>
    <hijo>
    </hijo>
</padre>


## Extensiones:
Me permiten customizar mi VSC con aplicaciones creadas por la comunidad

- Indent rainbow
- auto close tag
- auto rename tag


## RECOMENDACION:

- Recordar guardar el archivo con control + s
