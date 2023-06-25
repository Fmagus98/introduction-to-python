# funciones

# Las funciones nos sirven para evitar repetir código, tener un código más limpio y que el código pueda ser reutilizable
# las funciones por lo general van a tener un solo propósito, en el caso de querer tener más proceso debes empezar a modularizar en funciones más chicas
# así crearas funciones más sostenibles a largo plaza cuando debas modificar el código.
# te mostraré algunos tipos de funciones:


# funciones incorporadas
# Estas funciones son nativas del lenguage python, nos servirán para un propósito en especial.
# Estos son unos ejemplos de funciones nativas de python:

print("hola") # la función print deja mostrar en la terminal lo que contiene 
len("hola") # la funcion len retorna la cantidad de caracteres de un tipo de dato
input("escribe un número") # la funcion input da la posibilidad de que el usuario de una entrada de dato (string)

# funciones definidas por el usuario(user-defined functions)
# Son funciones creadas por el programador para realizar una tarea específica. 
# Estas funciones se definen utilizando la palabra clave "def" seguida del nombre de la función y los parámetros que acepta. Por ejemplo:

def saludar():
    print("hola")
# para llamar la funcion "saludar" debemos escribir el nombre de la función seguido de paréntesis:
saludar()

# dentro de las funciones definidas tendrémos funciones con parámetros
# esto hace que una función sea reutilizable, ya que podemos retornar un resultado diferente por medio de parámetros
# por ejemplo:

def suma(a, b):
    resultado = a + b
    print(resultado)
    
suma(3,5) # al llamar la función, el 3 va a reemplazar el parámetro "a" y el 5 el parámetro "b" dando de resultado 8 

# también dentro de las funciones tenemos return
# return nos servirá a la hora de retornar un solo valor en la función.
# por ejemplo:

def usuario (nom, ap, est ):
    datos = f"nombre:{nom} apellido:{ap} estado civil:{est}"
    return datos

dato = usuario("gustavo", "lopez", "soltero") 
# ahora tenemos guardado en la variable dato un tipo de dato
# en este caso es un string diciendo "nombre:gustavo apellido:lopez estado civil:soltero"



# módulos

# los módulos son simplemente archivos.py ajeno a nuestro archivo en donde estamos programando.
# cuando nuestro proyecto empieza a ser más complejo, vamos a tener que empezar a modularizar nuestro proyecto.
# se debe hacer ya que de esta manera es mucho más facil modificar el código en un lugar específico.

# cuando tengamos nuestro proyectos en varios archivos.py tenemos que conectar estos archivos de alguna forma.
# para ello debemos que usar import seguido del nombre del archivo
# por ejemplo:

# supongamos que en otro archivo tenemos nuestro código y se llama calculadora.py, para traerlo debemos escribir:
import calculadora

# lo que va hacer ahí es importar el archivo calculadora.py.
# en este caso va a importar completamente el código de nuestro archivo calcualdora.py
# en el caso que queramos obtener solo algunas funciones y/o variables, debemos hacerlo de esta manera
from sumar,restar,multiplicar import calculadora  

# lo que hacemos ahí es importar las funciones sumar,restar y multiplicar dentro de nuestro archivo calculadora.py


# modulos nativos de python

# también existen archivos.py nativos del lenguage python, solo que no estan importados
# esto es debido a que de esta manera es mucho más ligero a la hora de programar en python y no es tan pesado para procesar con el lenguage de python.
# para importar estos módulos debemos usar import al igual que antes
# hay mucho más módulos nativos de python pero te mostraré alguno de ellos:

# Math
# El módulo math proporciona funciones y constantes matemáticas para realizar cálculos numéricos. 
# Para utilizar el módulo math, debes importarlo al principio de tu código de la siguiente manera:

import math

# te mostraré algunas de las funciones de math

#redondeo de números flotantes
    
math.ceil(4.5) # lo redondea hacia arriba, resultado: 5
math.floor(4.9) # lo redondea hacia abajo, resultado: 4
math.trunc(5.55) # lo trunca y elimina el decimál, resultado: 4

# Funciones trigonométricas
angulo = math.py/4
math.sin(angulo) # devuelve el seno del ángulo
math.asin(angulo) # devuelve el arcoseno del ángulo
math.cos(angulo) # devuelve el coseno del ángulo
math.acos(angulo) # devuelve el arcoseno del ángulo
math.tan(angulo) # devuelve la tangente del ángulo
math.atan(angulo) # devuelve el arcotangente del ángulo

# funciones hiperbólicas
math.sinh(angulo) # devuelve el seno hiperbólico del ángulo
math.asinh(angulo) # devuelve el arcoseno hiperbólico del ángulo
math.cosh(angulo) # devuelve el coseno hiperbólico del ángulo
math.acosh(angulo) # devuelve el arcoseno hiperbólico del ángulo
math.tanh(angulo) # devuelve la tangente hiperbólica del ángulo
math.atanh(angulo) # devuelve el arcotangente hiperbólico del ángulo

# Funciones exponenciales y logarítmicas

math.exp(2) # muestra el exponente de 2
math.pow(2,3) # muestra el exponente de 2 elevado a la 3
math.log(10,3) # muestra el logaritmo de 10 en base 3
math.log10(4) # muestra el logartimo en base 10 de 4
math.sqrt(10) # raiz cuadrada de 10

# Random
# El módulo random en Python proporciona funciones para generar números pseudoaleatorios.
# para importarlo debemos usar import random:

import random

# Dentro de este módulo tiene varias funcionalidades como:
# random
numero_random = random.random() # la variable número va a contener un número random entre 0 y 1 
numero_rango = random.randint(1,100) # contiene número aleatorio en un rango entre el número entero 1 y 100
numero_flotante = random.uniform(1.0, 10.0) # contiene u número aleatorio flotante entre 1.0 y 10.0
numero_choice = random.choice([1,4,6,5,7,38,8,384,2]) # contiene uno de los elementos de la lista
numero_shuffle = random.shuffle([1,2,3,4,5,6,7]) # mezcla la posicion de cada elemento de la lista de forma aleatoria.


# Datetime
# El módulo datetime permite trabajar con fechas, dias, horas, minutos, segundos, milésimas y realizar operaciones relacionadas con el tiempo
# para importarlo debemos escribir import datetime

import datetime

# aquí te mostraré algunos ejemplos.

fecha_actual = datetime.datetime.now() # muestra la hora actual
fecha_específica = datetime.date(2000,5,4) # muestra aa/mm/dd específico
hora_especifica = datetime.time(12,10,42) # muestra hh/mm/ss
fecha_y_hora = datetime.datetime(2023,6,8,12,30,45) # muestra fecha y hora
fecha_string = fecha_y_hora.strftime("%Y/%m/%d %H:%M:%S") # muestra en un string "2023/6/8 12:30:45"
anio = fecha_y_hora.year # muestra el año
mes = fecha_y_hora.month # muestra el mes
dias = fecha_y_hora.day # muestra el día
horas = fecha_y_hora.hour # muestra las horas
minutos = fecha_y_hora.minute # muestra losminutos
segundos = fecha_y_hora.second # muestra los segundos
microsegundos = fecha_y_hora.microsecond # muestra los microsegundos
