# ---- condicionales ---- 


# if
# if inicia una condiciónal. 
# si esta condición se cumple, se ejecuta las lineas de código que están dentro de la condición.
# te daré un ejemplo:

x = 42 # variable x 

if x>6: # creación de condicional: si la variable x es mayor que 6, esta condición se vuelve True y ejecuta las líneas de código
    print("3 es mayor que 6") # linea de código si se cumple la condición, debe tener un espacio al principio para que python sepa que esta linea de código está adentro de la condición.


# if - else
# con if y else podrás realizar ejecuciones diferentes dependiendo si la condición es verdadera o falsa
# nunca podrás usar else sin realizar primero un if, además que solo una vez podrás usar a los 2 dentro de la condicional.
# te daré un ejemplo:

x = 10 # variable x

if x % 2 == 0:  # inicio de condicional. condición if - si al dividir por 2 el resto me da 0, ejecuta la siguiente linea de código.
    print("x es par") # ejecución de código si la condición if se cumple
else: # condicion else, en el caso de que si al dividir por 2 el resto no me da 0, ejecuta la siguiente linea de código
    print("x es impar") # ejecución de código si la condición if no se cumple



# if - elif - else
# con if y else podrás realizar ejecuciones diferentes dependiendo si la condición es verdadera o falsa.
# pero con elif podrás crear más condiciones dentro de una condicional.
# te daré un ejemplo

x = 10 # variable x

if x > 0: # inicio de condicional, if - si la variable x es mayor a 0
    print("x es positivo")  # ejecución de código si la condición if se cumple
elif x < 0: # condicion elif, en el caso de que si if es falso y sea x >0, ejecuta la siguiente linea de código
    print("x es negativo")  # ejecución de código si la condición elif se cumple
else: # condicion else, en el caso de que si if y elif sea falso, ejecuta la siguiente linea de código
    print("x es cero") # ejecución de código si ninguna de las otras condiciones no se cumplen.

# Match
numero = int(input("introduce un número: "))
match numero:
    case 0:
        print("Cero")
    case 1:
        print("Uno")
    case 2 | 3:
        print("Dos o tres")
    case 4:
        print("Cuatro")
    case _ if numero < 0:
        print("Es un número negativo")
    case _:
        print("No es 0,1,2,3,4 o un número negativo")



# ---- bucles ----

# while
# while es un bucle que repetirá un bloque de código si la condicional se sigue cumpliendo
# te daré varios ejemplos:

# ejemplo 1
contador = 0 # variable contador

while contador < 5: # bucle while con condicional - si la variable contador es menor que 5, ejecuta el siguiente código 
    print("El contador es:", contador) 
    contador += 1 # modificacion de la variable contador
    # bloque de código que ejecuta si la condion se cumple

# ejemplo 2

respuesta = "" # variable respuesta

while respuesta != "salir": # condición del bucle, si la variable respuesta no contiene "salir", este código se va a ejecutar
    respuesta = input("Escribe 'salir' para terminar el bucle: ") # ingreso de usuario
    print("Tu respuesta fue:", respuesta) # muestra en la terminal la respuesta

# ejemplo 3

numero = 1 # variable numero

while numero < 1000: # condición del bucle, si numero es menor que 100, se ejecuta el código
    print(numero) # muestra en la terminal el número de la variable numero
    numero *= 2 # va multiplicando por 2 el valor de numero


# ejemplo 4

suma = 0 # variable suma
contador = 1 #variable contador

while contador <= 10: # condición del bucle, si contador es menor o igual a 10, se ejecuta el código
    suma += contador # la variable suma va sumando los valores que retorna la variable contador
    contador += 1 # la variable contador va sumando

print("La suma total es:", suma) # muestra en pantalla el total de la sumatoria.


# for
# for es un bucle al igual que while con la particularidad de que este puede recorrer por dentro de los elementos en una variable.
# ya no ejecuta el código por medio de una condicional, sino que ejecutará el codigo hasta terminar de recorrer una variable o un rango de valores.
# te daré unos ejemplos:

# ejemplo 1

mensaje = "Hola, mundo!" # variable mensaje con tipo de dato string -(texto en cadena)

for caracter in mensaje: # bucle for que recorre caracter por caracter en la variable mensaje
    print(caracter) # muestra en la terminal el caracter que hay en cada bucle.    

# ejemplo 2

for numero in range(1, 6): # bucle for que ejecuta el código por medio de un rango entre 1 y 6 y la variable numero contiene el valor del rango
    print(numero) # muestra en la terminal el valor de numero


# los siguientes ejemplos lo veremos en siguientes clases

# ejemplo 3

frutas = ["manzana", "banana", "naranja"] # variable con listas
for fruta in frutas: # recorre la lista por elementos
    print(fruta) # imprime en pantalla el elemento
    
# ejemplo 4

personas = [
    {"nombre": "Juan", "edad": 30},
    {"nombre": "María", "edad": 25},
    {"nombre": "Carlos", "edad": 35}
] # variable con diccionario

for persona in personas: # bucle for que recorre todos los objetos
    print(persona["nombre"], "tiene", persona["edad"], "años.") # muestra en la terminal los datos de cada objeto