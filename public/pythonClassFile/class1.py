# comentarios

# Cuando escribes un "#" tienes la posibilidad de escribir comentarios en una sola linea de código en tu programa.

"""
            si quieres comentarios muchos más extensos
            y tener la posibilidad de comentar
            en varias lineas de código, 
            vas a tener que usar triple comillas para comentar
"""





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








# len() - (lenght - longitud) - Calcular el largo de nuestro dato 

# Dentro de python tenemos una función dedicado a obtener la longitud del dato que agregamos dentro del paréntesis de esta función.
# Ejemplo:
print(len("matemáticas")) 
# En la terminal nos va a mostrar la cantidad de caracteres que hay en este texto (string).
# en este caso es 11 y lo retorna como un tipo de dato number(número)




# Ya sabiendo estas 3 funciones tenemos una cierta cantidad de aplicaciones en la que se puede aplicar en python
# te daré solo 2 ejemplos ya que deberás ver como hacer los ejercicios que existen en la página, si no los pudiste hacer
# no te preocues, posiblemente lo veremos en clases pero recuerda que estos ejercicios están echos para que practiques, 
# retengas el contenido de las clases y puedas tener las herramientas para aplicar en futuros proyectos!


print("Bienvenido "+ input("dime tu nombre") + " al curso de python!")
# En esta linea de código tenemos algo que se llama "concatenación", es simplemente unir varios tipos de datos con un + o con otro caracter.
# al ejecutarse lo que va hacer es primero leer la función input ya que print tiene que mostrar todo lo que está dentro del paréntesis.
# Como tenemos un input y este lo debe escribir el usuario, primero se tiene que rellenar los inputs para mostrar en pantalla todo el contenido.
# Entonces lo que hará es ejecutar primero el o los inputs y luego muestra en pantalla todo el contenido.



print(input("dime tu nombre: ")," contiene ",len(input("escribe de nuevo el nombre: "))," letras")
# En esta línea de código es un poco diferente, vemos que está haciendo una unión de varios datos pero en vez de usar "+", usamos una coma ",".
# Si lo hacemos de la forma anterior nos va a provocar un error, esto es porque la función len() nos retorna un tipo de dato number(número) 
# cuando queremos unir tipos de datos diferentes con "+" el programa de python no va a entender que es lo que tiene que hacer para unirlos.
# esto lo van a entender mejor en la clase 2.