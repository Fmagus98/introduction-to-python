export const class1Code = [

    `

print("Bienvenido al curso de introducción a python")

`,
`

# comentario en una sola linea de código

"""
    comentario 
    en 
    varias
    líneas 
    de 
    código
"""

'''comentario
en varias
lineas 
de
código
'''

`,
`

input("Escribe tu nombre: ")
    
`,
`

print(len("Programación"))
    
`
]

export const class2Code = [
    
    `

# booleano/boolean - bool
# True  --> 1
# False --> 0

# booleano básico
mayor_de_edad = True
menor_de_edad = False

# booleano en comparaciónes

edad_minima = 18
edad = 14
edad_válidar = edad>=edad_minima

# la variable edad_valida conrtiene internamente "False" ya que edad no es mayor o igual a edad_minima

`,
`

# int - integer (número entero) / float - decimal (número decimal)

# int

int1 = 43 
int2 = 14 + 23 
int3 = 14 - 94
int4 = 54 * 4

# float
float1 = 35.3
float2 = 14.5 + 23.5
float3 = 14 - 23.4
float4 = 14 / 23
float5 = 54 * 0.4

`,
`

# Str - string - cadena de texto

# string ''
string = 'cadena de texto con comillas simples'

# string ""
string = "cadena de texto con comillas dobles"

# string """cadena de texto
                con
                comillas triples
"""

# las comillas triples se utilizará cuando queramos escribir un string en varias lineas de texto.

`,
`

# código de python

variable1 = "cadena de texto"
variable2 = 24
variable3 = 75.73
variable4 = True
print(type(variable1)) # salida de terminal --> <class 'str'>
print(type(variable2)) # salida de terminal --> <class 'int'>
print(type(variable3)) # salida de terminal --> <class 'float'>
print(type(variable4)) # salida de terminal --> <class 'bool'>

`,
`

# Operadores aritméticos

# Suma
num1 = 5
num2 = 3
resultado = num1 + num2 # resultado = 8

# resta
num1 = 5
num2 = 3
resultado = num1 - num2 # resultado = 8

# multiplicación
num1 = 3
num2 = 7
resultado = num1*num2 # resultado = 21

# división

num1 = 35
num2 = 7
resultado1 = num1/num2 # resultado = 2.33...............5
resultado2 = num1//num2 # resultado = 5

# módulo 

num1 = 3
num2 = 7
resultado = num1%num2 # resultado = 3

# potenciación

num1 = 5
num2 = 3
resultado = num1**num2 # resultado = 125

`,
`

# Operadores de comparación

# variables

num1 = 5
num2 = 3
num3 = 3

# igual a
resultado = num1 == num2 # False

# diferente a 
resultado = num1 != num2 # True

# mayor que
resultado = num1 > num2 # True

# menor que
resultado = num1 < num2 # False

# mayor o igual que
resultado = num2 >= num3 # True

# menor o igual que
resultado = num1 <= num2 # False
    
`,
`

# Operadores logicos

# variables
condicion1 = False
condicion2 = True

# and devuelve true si son los 2 verdaderos
resultado1 = condicion1 and condicion2  # False
resultado1 = condicion1 or condicion2  # True
resultado1 = not condicion2  # False
        
`,
`
            
# Conversiones comunes en tipos de datos

# conversion a int
variable = "10"
resultado = int(variable) # resultado = 10

# conversion a float
variable = "64.3"
resultado = float(variable) # resultado = 64.3"

# conversion a string
variable = 54
resultado = str(variable) # resultado = "54"

# conversion a booleano
variable = 0
variable = bool(variable) # resultado = False


`,
`
                
# F-string

# variable con tipo de dato int
numero2 = 46

# variable con tipo de dato float
numero1 = 35.5

# print
print(f'la suma de {numero1} + {numero2} es {numero1 + numero2}')
# salida: la suma de 35.5 + 46 es 81.5

                
                
`,
`
    
# format

# variable con tipo de dato str
variable = "Rodrigo"

# variable con tipo de dato int
edad = 35
    
# print
print('me llamo {} y tengo {} anios'.format(variable, edad)) # salida: me llamo Rodrigo y tengo 35 años")


`,
`
    
# Repr

# variable con tipo de dato int
int = 5

# variable con tipo de dato float
float = 35.7

# variable con tipo de dato str
string = "horas"

# variable con tipo de dato booleano
bool = True

# print
print(repr(int)) # salida: '5'
print(repr(bool)      # salida: 'True'
print(repr(string))  # salida: 'horas'
print(repr(float))  # salida: '35.7'
    
    
`,
`

# Lower ()

# variable con tipo de dato str
estado_civil = "SolTero"
documento = "DNI"
estado_civil_lower = estado_civil.lower()
documento_lower = documento.lower()

# print
print(estado_civil_lower) # salida: soltero
print(documento_lower)   # salida: dni


`,
`
        
# Upper()

# variable con tipo de dato str
texto1 = "bienvenidos"
texto2 = "Hola a todos!"
texto1_upper = texto1.upper()
texto2_upper = texto2.upper()

# print
print(texto1_upper) # salida: BIENVENIDOS
print(texto2_upper) # salida: HOLA A TODOS!
        

`,
`
        
# isLower()

# variable con tipo de dato str
texto1 = "HOLA"
texto2 = "hola"
texto1_islower = texto1.islower()
texto2_islower = texto2.islower()

# print
print(texto1_islower) # salida: False
print(texto2_islower) # salida: True

        
`,
`

# isUpper()

# variable con tipo de dato string
texto1 = "BIENVENIDOS!"
texto2 = "Hola a todos!"
texto1_isupper = texto1.isupper()
texto2_isupper = texto2.isupper()

# print
print(texto1_isupper) # salida: True
print(texto2_isupper) # salida: False

`,
`

# isDigit()

# variable con tipo de dato str
texto1 = "123"
texto2 = "539f54ihsb9"
texto3 = "-53"
texto4 = "14.9"

# print

# variable con método isdigit
print(texto1.isdigit()) # salida: True
print(texto2.isdigit()) # salida: False
print(texto3.isdigit()) # salida: False
print(texto4.isdigit()) # salida: False


`,
`

# isAlpha()

# variable con tipo de dato str
texto1 = "hola"
texto2 = ""
texto3 = "hp245"
texto4 = "bienvenido!"

# print


`,
`

# Capitalize()

# variable con tipo de dato str 

pais = "argentina"
nombre = "rOdrigo"
pais_capitalize = pais.capitalize()
nombre_capitalize = nombre.capitalize()

# print

print(pais_capitalize) # salida: Argentina
print(nombre_capitalize) # salida: Rodrigo


`,
`

# Center()

# variable con tipo de dato str     
titulo = "Clase2 - Variables"
numero = 29
caracter ="-"
titulo_centrado = titulo.center(numero)
titulo_centrado2 = titulo.center(numero, caracter)

# print
print(titulo_centrado) # salida: "     Clase2 - Variables      "
print(titulo_centrado2) # salida: "-----Clase2 - Variables-----" 


`,
`

# Strip()

# variable con tipo de dato str
texto1 = "    texto1    "
texto2 = "------texto2-------"
texto3 = "??????!!!!!texto3!!!!!!!???"
texto4 = "!!!texto4!!!"

# variable con método strip

texto1_strip = texto1.strip()
texto2_strip = texto2.strip("-")
texto3_strip = texto3.strip("?!")
texto4_lstrip = texto3.lstrip("!")
texto4_rstrip = texto3.rstrip("!")

print(texto1_strip)  # salida: "texto1"
print(texto2_strip)  # salida: "texto2"
print(texto3_strip)  # salida: "texto3"
print(texto4_lstrip) # salida: "texto4!!!"
print(texto4_rstrip) # salida: "!!!texto4"


`,
`

Count()

# variable con tipo de dato string
texto = "ana ana ana ana ana agustina"
subcadena = "ana"

# variable con método count
cantidad = texto.count(subcadena)

print(cantidad) # resultado 5


`,
`

Endswith()

# variable con tipo de dato strinh

texto = "agustina"
subcadena = "ina"
subcadena2 = "agus"

# variable con método endswith
texto_end1 = texto.endswith(subcadena)
texto_end2 = texto.endswith(subcadena2)

print(texto_end1) # resultado True
print(texto_end2) # resultado False

`,
`
    
numero1 = 32
numero2 = 53

if numero1<numero2:
    print(f"{numero1} es menor que {numero2}") 
    
# resultado 32 es menor que 53

`
]

export const class3Code =
[
    `
    
numero1 = 75
numero2 = 53

if numero1<numero2:
    print(f"{numero1} es menor que {numero2}") 
else:
    print(f"{numero1} no es menor que {numero2}") 

    # resultado 75 no es menor que 53

`,
`
    
numero1 = 75
numero2 = 53

if numero1<numero2:
    print(f"{numero1} es menor que {numero2}") 
else:
    print(f"{numero1} no es menor que {numero2}") 

    # resultado 75 no es menor que 53

`,
`
    
numero1 = 75
numero2 = 53
    
if numero1<numero2:
    print(f"{numero1} es menor que {numero2}") 
elif numero1 == numero2:
    print(f"{numero1} es igual a {numero2}")    
else:
    print(f"{numero1} no es menor que {numero2}") 
    
# resultado 75 no es menor que 53

`,
`
    
numero1 = 1
    
while numero1 < 10:
    print(numero1) 
    numero1 += 1 # esto hace incrementar el valor de la variable numero1
    

`,
`

while True:
    numero1 = int(input("ingrese el primer numero: "))
    numero2 = int(input("ingrese el segundo numero: "))
    print("la suma de los dos numeros es: ", numero1 + numero2)
    
    respuesta = input("desea continuar? (s/n): ") # pide una respuesta (s/n)
    
    if respuesta == "n":
        break    # break hace que el bucle se detenga

`,
`

mensaje = "Hola mundo!"

for caracter in mensaje:
    print(caracter)

`,
`

frase = "hola como estás?"

buscador_letra = any( letra =="e" for letra in frase )
    print(buscador_letra)


`,
`

for i in range(1,5):
    print(i)


`,
`

numeros = [0,124,41,62,32,43]

for numero in numeros:
    print(numero)

`,
`

tupla = (1,2,3,4,5)

for elemento in tupla:
    print(elemento)

`,
`

contrasena = ""
mayus = False
minus = False
num = False

while (mayus == False) or (minus ==False) or (num == False) or contrasena == "":
    print("Tu contraseña debe contener al menos una mayúscula, un minúscula y un número, por favor ingreses de nuevo la contraseña")
    contrasena = input("Escriba su contraseña: ")
    mayus = any(caracter.isupper() for caracter in contrasena)
    minus = any(caracter.islower() for caracter in contrasena)
    num = any(caracter.isdigit() for caracter in contrasena)

print ("Contraseña válida")

`
]


export const class4Code =
[
    `
# Funciones

"""Concepto

Función básica

def nombre_de_la_funcion():
    ejecución de código
    return # return es opcional

nombre_de_la_función()


Función con parámetros

def nombre_de_la_funcion(parametros):
    ejecución de código
    return # return es opcional

nombre_de_la_función(parametros)
"""

# ejemplo

# Función básica

def saludo():
    nombre = "gustavo" # esta variable solo existe dentro de la función, por fuera no.
    return print("hola", nombre)

saludo() #llamada de la función

# Función con parámetros
num1 = 39
num2 = 42

def suma(n1, n2):
    return print(n1+n2)

suma(num1,num2)


`,
`
    
def saludar(nombre):
    print("!Hola, " + nombre + "!")
    
pi = 3.14159    

`,
`

import mi_modulo

mi_modulo.saludar("juan")
print(mi_modulo.pi)


`,
`
    
from mi_modulo import saludar, pi

saludar("Juan")
print(pi)

`,
`
import math

`,
`
import math

x = 3.7
print(math.ceil(x)) # Redondeohacia arriba: 4
print(math.floor(x)) # Redondeo hacia abajo: 3
print(math.trunc(x)) # Truncamiento: 3

`,
`
    
import math

angulo = math.pi / 4

print(math.sin(angulo))  # seno
print(math.asin(angulo)) # arcoseno
print(math.cos(angulo))  # coseno
print(math.acos(angulo))  # arcocoseno
print(math.tan(angulo))  # tangente
print(math.atan(angulo))  # arcotangente

`,
`

import math # importanción del módulo math

# Seno hiperbólico
result = math.sinh(x)
print(result)

# Coseno hiperbólico
result = math.cosh(x)
print(result)

# Tangente hiperbólico
result = math.tanh(x)
print(result)

# Arcoseno hiperbólico
result = math.asinh(x)
print(result)

# Arcocoseno hiperbólico
result = math.acosh(x)
print(result)

# Arcotangente hiperbólico
result = math.atanh(x)
print(result)

`,
`

import math # importación del módulo math

# exponencial
x = 2.0
result = math.exp(x)
print(result)

# exponencial personalizado
x = 2.0
y = 3.0
result = math.pow(x, y)
print(result)

# logaritmo natural
x = 10.0
result = math.log(x)

# logaritmo en base 10
x = 100.0
result = math.log10(x)
print(result)

# logaritmo en base personalizada
x = 16.0
base = 2.0
result = math.log(x, base)
print(result)

# raiz cuadrada
x = 16.0
result = math.sqrt(x)
print(result)
    
`,
`

import random

random_number = random.random()
print(random_number) # Resultado: un número aleatorio de punto flotante entre 1.0 y 10.0

`,
`

import random # importar módulo random

# Generar un número aleatorio dentro de un rango específico

random_number = random.randint(1, 100)
print(random_number) # Resultado: un número aleatorio entre 1 y 100 (incluidos).


`,
`

import random # importar módulo random

# Generar un número aleatorio del punto flotante dentro de un rango específico.

random_number = random.uniform(1.0,10.0)
print(random_number) # Resultado: un número aleatorio de punto flotante entre 1.0 y 10.0

`,
`

import random # importar módulo random

# Elegir un elemento aleatorio de una lista.

my_list = ['manzana', 'banana', 'naranja', 'pera']
random_element = random.choice(my_list)
print(random_element) # Resultado: un número aleatorio de la lista

`,
`

import random # importar módulo random

# Barajar (mezclar) una lista

my_list = [1, 2, 3, 4, 5]
random.shuffle(my_list)
print(my_list) # Resultado: una lista de elementos aleatorios

`,
`

import datetime

# Obtener la fecha y hora actuales

current_Datetime = datetime.datetime.now()
print(current_Datetime) # Resultado: la fecha y hora actuales

`,
`

import datetime

date = datetime.date(2023, 6, 8)
print(date) # Resultado: 2023-06-08

`,
`

import datetime

time = datetime.time(12, 30, 45)
print(time) # Resultado: 12:30:45

`,
`

import datetime

datetime_obj = datetime.datetime(2023, 6, 8, 12, 30, 45)
print(datetime_obj) # Resultado: 2023-06-08 12:30:45

`,
`

import datetime

datetime_obj = datetime.datetime(2023, 6, 8, 12, 30, 45)
formatted_datetime = datetime_obj.strftime("%Y-%m-%d %H:%M:%S")
print(formatted_datetime) # Resultado: 2023-06-08 12:30:45

`,
`

import datetime

datetime_obj = datetime.datetime(2023, 6, 8, 12, 30, 45)
print(datetime_obj.year)  # year - año. Resultado: 2023
print(datetime_obj.month) # month - mes. Resultado: 6
print(datetime_obj.day)   # day - día. Resultado: 8
print(datetime_obj.hour)  # hour - hora. Resultado: 12
print(datetime_obj.minute) # minute - minuto. Resultado: 30
print(datetime_obj.second) # second - segundo. Resultado: 45
print(datetime_obj.microsecond) # microsecond - microsegundo. Resultado: 0

`
]

export const class5Code =
[
    `
# Estructura de lista

lista = ["Argentina", "Colombia", "Brasil", "Venezuela", "Honduras"]
#           0             1          2           3            4      <--- indices

`,
`
    
animales = ["cabra", "delfin", "tigre", "koala", "jirafa", "elefante" ]
print(animales) # resultado ["cabra", "delfin", "tigre", "koala", "jirafa", "elefante"]
print(animales[0]) # resultado cabra
print(animales[1]) # resultado delfin
print(animales[2]) # resultado tigre
print(animales[3]) # resultado koala
print(animales[4]) # resultado jirafa
print(animales[5]) # resultado elefante 

`,
`

plataformas = ["netflix", "HBO MAX", "prime Video", "disney+", "star+"]
plataformas[4] = "Paramount" # reemplazo de elemento del indice 4 "star+" a "Paramount"
print(plataformas)

`,
`

# slicing

numeros = [1,2,3,4,5,6,7,8,9,10]
sublista = numeros[2:6] # obtiene los elementos desde el indice 2 hasta el indice 5 (excluyendo el 6)
print(sublista) # resultado: [3,4,5,6]

`,
`

lista = [1,5,3]
lista_2 = lista.copy() # 1° método para copiar una lista
lista_3 = lista[:] # 2° método para copiar una lista
lista.extend(lista_2) # agrega lo que contiene lista_2
lista_2[0] = 543 # modificación del indice 0 en lista_2
lista_3.append(4) # agrega un elemento al final de la lista_3
print(lista) # resultado: [1, 5, 3, 1, 5, 3]
print(lista_2) # resultado: [543, 5, 3]
print(lista_3) # resultado: [1, 5, 3, 4]

`,
`

# append
numeros = [56,3,6,14,343,412,52,1,53]
numeros.append(4) # agrega un elemento al final de la lista, en este caso es un tipo de dato int (4)
print(numeros) # resultado: [56, 3, 6, 14, 343, 412, 52, 1, 53, 4]

# extend
numeros2 = [56,3,6,14,343,412,52,1,53]
numeros2.extend((51,85,76,738,28,2364)) # agrega varios elementos al final de la lista
print(numeros2) # respuesta [56, 3, 6, 14, 343, 412, 52, 1, 53 4, 51, 85, 76, 738, 28, 2364]

`,
`
    
lista = [72,95,86,576,75,35,6,47]
lista.insert(3,5) # inserta el elemento 5 en el indice 3 de la lista.
print(lista) # resultado: [72, 95, 86, 5, 576, 75, 35, 6, 47]

# El método insert no elimina el elemento original de la lista
# solo reemplaza la posicion del indice y los elementos siguientes a este elemento se posicionan al siguiente índice

`,
`

# remove

nombre = ["Hernán", "Jorge", "Julieta", "Luis", "Oriana", "Diego", "Tamara", "Jorge"]
nombre.remove("Jorge") # recorre la lista y el primer elemento que encuentre "Jorge" lo elimina pero solo ese elemento 
print(nombre) # resultado: ["Hernán", "Julieta", "Luis", "Oriana", "Diego", "Tamara", "Jorge"]

# El método remove tienes que tener cuidado,
# ya que si no encuentra el elemento, esto nos provocará un error grave en el programa y dejará de ejecutar (ValueError).

`,
`

# pop

telefonos = ["Samsung S23+", "Motorola G9 plus", "Samsung A01", "Motorola E13", "Alcatel 3H plus", "Samsung A23"]
telefonos.pop() # elimina el último elemento de la lista
print(telefonos) # resultado: ["Samsung S23+", "Motorola G9 plus", "Samsung A01", "Motorola E13", "Alcatel 3H plus"]
telefonos.pop(1) # elimina el elemento del indice 1 de la lista
print(telefonos) # resultado: ["Samsung S23+", "Samsung A01", "Motorola E13", "Alcatel 3H plus"]
    
# El método pop tienes que tener cuidado,
# ya que si no encuentra el elemento, esto nos provocará un error grave en el programa y dejará de ejecutar (IndexError).

`,
`

# clear

fruta = ["cereza", "jacarandá", "manzana", "granada", "arandano", "pera", "frutilla"]
indice = fruta.index("pera") # devuelve el número del índice que contiene el elemento "pera"
print(indice) # resultado: 5

indice2 = fruta.index("manzana",0,3) # devuelve el número del índice que contiene el elemento "manzana"
print(indice2) # resultado: 2

`,
`

# Count

frutas = ["manzana", "platano", "naranja", "manzana", "uva", "manzana"]
contador = frutas.count("manzana")
print(contador) # resultado: 3

`,
`

# clear

lista = ["manzana", "frutilla", "manzana", "limon"] # lista
lsita.clear() # este elemento elimina todo el contenido de la lista
print(lista)

`,
`

# len

autos = ["Audi", "Mercedez Benz", "Toyota", "Nissan", "Fiat", "Volkswagen", "Renault"]
longitud = len(autos)
print(longitud) # resultado: 7

`,
`

# max

lista = [1,5,42,27,457,34,5,754,75,5] # lista de números
print(max(lista)) # encuentra el valor más alto de la lista. respuesta: 754

lista =["a","b","c","d","e"] # lista de caracteres
print(max(lista)) # encuentra el valor más alto de la lista de caracteres (ASCII). respuesta: "e"

`,
`

# min

lista = [41,54,36,53,47,264,6,1,0,463] # lista de números
print(min(lista)) # encuentra el valor más bajo de la lista. respuesta: 0

lista = ["ferrari","hyundai","suzuki","lamborghini"] # lista de caracteres
print(min(lista)) # encuentra el valor más bajo de la lista de caracteres. respuesta ferrari

`,
`

# sum

lista = [1,5,42,27,457,34,5,754,75,5] # lista de números
print(sum(lista)) # suma todos los valores de la lista. respuesta 1405

`,
`

# sort / sorted

generos = ["jazz", "rock nacional", "trap", "tango", "barroco", "ballenato", "bossa nova" ]

generos.sort() # ordena la lista de forma ascendente
print(generos) # resultado: ["ballenato", "barroco", "bossa nova", "jazz", "rock nacional", "tango", "trap"]

generos.sort(reverse=True) # ordena la lista de forma descendente
print(generos) # resultado: ["trap", "tango", "rock nacional", "jazz", "bossa nova", "barroco", "ballenato"]

generos_sorted = sorted(generos) # crea una nueva lista y ordena la lista de forma ascendente
print(generos_sorted) # resultado: ["ballenato", "barroco", "bossa nova", "jazz", "rock nacional", "tango", "trap"]
generos_sorted2 = sorted(generos , reverse = True) # crea una nueva lista y ordena la lista de forma descendente
print(generos_sorted2) # resultado: ["trap", "tango", "rock nacional", "jazz", "bossa nova", "barroco", "ballenato"]

# Método sort
# Si intentas ordenar una ilsta con elementos de diferentes tipos, se generará un error TypeError.

# Método sorted
# se utiliza para ordenar los elementos de una lista y devuelve una nueva lista ordenada sin modificar la lista original

`,
`

# reversed

lista = ["hernan", "matilda", "julian", "Matias", "pablo"] # lista de nombres
lista_invertida = list(reversed(lista))
print(lista_invertida) # invierte la posicion de los elementos de la lista
print(lista) # la lista original no se invierte

`,
`

# Tupla

tupla = ("router CNC", "cortadora laser", "impresora 3d" )
#             0                1                 2         <---- posicionamiento

`,
`

# indexación

tupla = ("3", "84", "43", "81", "63", "57")
print([0]) # resultado: 3
print([1]) # resultado: 84
print([2]) # resultado: 43
print([3]) # resultado: 81
print([4]) # resultado: 63
print([5]) # resultado: 57

`,
`

# segmentación

tupla = ("3", "84", "43", "81", "63", "57")
print(tupla[:]) # resultado: ("3", "84", "43", "81", "63", "57")
print(tupla[1:3]) # resultado ("84", "43")
print(tupla[0:5]) # resultado ("3", "84", "43", "81", "63")
print(tupla[3:6]) # resultado ("81", "63", "57")

`,
`

# Concatenación

tupla = ("3", "84", "43", "81", "63", "57")
tupla2 = ("63", "38", "37", "14", "33", "75")
tupla_concat = tupla + tupla2
print(tupla_concat) # resultado: ("3", "84", "43", "81", "63", "57", "63", "38", "37", "14", "33", "75")

`,
`

# repetición

tupla = ("3", "84")
print(tupla*2) # resultado: ("3", "84", "3", "84")
print(tupla*3) # resultado: ("3", "84", "3", "84", "3", "84")

`,
`

# Conversión

tupla = ("23", "84", "67", "45" )
print(tupla) # respuesta ("23", "84", "67", "45")
lista = list(tupla) # conversión de tupla a lista
lista.pop() # respuesta [ "23", "84", "67" ]
tupla = tuple(lista) # conversión de lista a tupla
print(tupla) # respuesta ("23", "84", "67")

`
]

