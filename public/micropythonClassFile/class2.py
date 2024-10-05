#------------------------------------- COMENTARIOS --------------------------------------------

# comentarios

# Cuando escribes un "#" tienes la posibilidad de escribir comentarios en una sola linea de código en tu programa.

"""
            si quieres comentarios muchos más extensos
            y tener la posibilidad de comentar
            en varias lineas de código, 
            vas a tener que usar triple comillas para comentar
"""

#----------------------------------- ENTRADA Y SALIDA DE DATOS --------------------------------

# print (mostrar en terminal) - salida de datos

# La función print() es sin duda una de las instrucciones más sencillas y que usaremos en el curso,
# ya que nos permite mostrar información por consola como mensajes, números o valores de una
# variable. para su uso solo le pasamos en los argumentos lo que deseamos mostrar en consola.
# Te daré varios ejemplos:

# Ejecución de print

print("hola") #Este print va a mostrar en la terminal un texto (string) con la palabra hola.
print(54) #Este print va a mostrar en la terminal un número (number) con el número 54.

#input (entrada desde la terminal) - entrada de datos

# La función input() permite obtener información en la terminal desde el teclado.
# Al momento de ejecutarse esta línea en la consola, esperara que ingresemos el texto que necesitemos 
# y demos un enter para continuar y guardar el valor capturado en una variable de programa.
# como todavía no vimos variables, la 'unica forma hasta ahora de mostrar en la terminal input va a ser combinandolo
# con la función print() para que nos aparezca en la terminal.
# te daré un ejemplo:

print(input("dime tu nombre: ")) 

# Cuando lo ejecutemos le mostrará al usuario en la terminal lo que escribimos dentro de la función input, en este caso es "dime tu nobre".
# Al usuario le van a dar la libertad de poder escribir el dato que necesita el input que ingresemos
# cuando escribamos y tocamos enter, se nos va a mostrar en pantalla el dato que escribió el usuario

#----------------------------------- OPERADORES --------------------------------


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
    

# Operadores logicos

# variables
condicion1 = False
condicion2 = True

# and devuelve true si son los 2 verdaderos
resultado1 = condicion1 and condicion2  # False
resultado1 = condicion1 or condicion2  # True
resultado1 = not condicion2  # False
        
# --------------------------- CONDICIONALES -----------------------------------------------

# if
# if inicia una condiciónal. 
# si esta condición se cumple, se ejecuta las lineas de código que están dentro de la condición.
# te daré un ejemplo:

x = 42 # variable x 

if x > 6: # creación de condicional: si la variable x es mayor que 6, esta condición se vuelve True y ejecuta las líneas de código
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

# Machine
# Este módulo servirá para conectar los puertos del microcontrolador 
