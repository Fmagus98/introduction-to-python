# Variable

# Estructura de una variable

nombre = "Gustavo"
# nombre:  Es la declaración de una variable. Se le puede escribir cualquier nombre y con el nombre que escribamos podemos llamar a lo que contiene dentro
# = : Es la asignación que le damos para igualar la variable al tipo de dato que queremos almacenar.
# "Gustavo" : Es el tipo de dato que va a contener, en este caso es un texto (string)


# Aplicaiones de una variable

# Podemos llamarlo las veces que queramos a la variable.
# En este caso hicimos que imprimiera lo que contiene la variable saludo 2 veces
saludo = "hola ramiro"
print(nombre)
print(nombre)

# Podemos reemplazar el contenido de la variable.
# En este caso cuando queremos imprimir la variable nombre, en el primer print va a mostrar "Pedro" y en el siguiente "josé" porque le cambiamos el contenido a la variable.
nombre = "Pedro"
print(nombre)
nombre = "José"
print(nombre)

# Tipos de datos
# Dentro de una variable se pueden almacenar tipos de datos, en esta clase solo vamos a ver tipos de datos primitivos.

# tipo de datos: bool - boolean - booleano
# Es el tipo de dato más primitivo y se comporta de forma binaria (0 - False, 1 - True )
# Este tipo de datos nos servirá para comparaciones y control de flujo.

# Ejemplo
# Internamente la variable comparacion va a contener True, esto es porque la comparacion es verdadera, 5 es mayor a 3.
# Cuando imprimimos en pantalla nos va a dar True.
comparacion = 5 > 3
print(comparacion)

# int/integer/entero - float/decimal
# Estos 2 tipos de datos ( int - float ) nos servirá especialmente para hacer operaciones aritméticas.

# int : representa los números enteros
# float : representa los números decimáles por lo cual también fracciones.

# Ejemplos de int

numero_int = 43
numero_int_2 = 4+2
numero_int_3 = 98125*2

# ejemplos de float

numero_float = 4.6
numero_float_2 = 42/2
numero_float_3 = 1262/36


# string/cadena de texto/texto
# Este tipo de dato se caracteriza por poder escribir caracteres alfanuméricos.
# Ten en cuenta que cuando escribas un número con este tipo de dato, no vas a poder hacer una operación aritmética

# Ejemplos

texto = 'Ejemplo de string con comillas simples'

texto_2 = "Ejemplo de string con doble comillas"

texto_3 = """Ejemplo de string 
            con varias lineas
            de
            código al utilizar triple comillas """

texto_4 = "Ejemplo de string utilizando 'comillas simples' dentro de comillas dobles"

texto_5 = 'Ejemplo de string utilizando "comillas dobles" dentro de comillas simples'


# operadores
# Los operadores son símbolos especiales que realizan operaciones en valores y variables. 
# Las expresiones, por otro lado, son combinaciones de valores, variables y operadores que Python puede evaluar y dar un resultado.

# operadores aritméticos
#Estos operadores se utilizan para realizar operaciones matemáticas básicas como:
# la suma (+), la resta (-), la multiplicación (*), la división (/), el módulo (%) y la potencia (**). 

# Ejemplos
suma = 5 + 3 # resultado 8           
resta = 10 - 25 # resultado -15 
multiplicacion = 6 * 9 # resultado 54
division = 4 / 8 # resultado 0.5
modulo = 4 % 2 # resultado 0 
potenciacion = 2**5 # resultado 32

# operadores de comparación
# Se utilizan para comparar dos valores y devolver un valor booleano ( verdadero/True o falso/False ) como resultado. 
# Algunos operadores de comparación comunes son el igual a (==), el distinto a (!=), mayor que (>), menor que (<), mayor o igual que (>=) y menor o igual que (<=).

# Ejemplos
igual = 53 == 44 # resultado False
distinto = 64 != 35 # resultado True
menor = 26 < 1 # resultado False
menor_igual = 65 <= 22 # resultado False
mayor = 87 > 32 # resultado True
mayor_igual = 53 >= 37 # resultado True

# operadores lógicos
# Se utilizan para combinar valores booleanos y devolver un valor booleano como resultado. 
# Los operadores lógicos más comunes son "and", "or" y "not".

# And
# Este operador solo devuelve True si las 2 comparaciones da True.

# Ejemplos
operador_and = 53 == 2 and 43 == "43" # resultado False  
operador_and2 = 64 == 12 and  54 > 34 # resultado False 
operador_and3 = 5 == 5 and 86 < 103 # resultado True 

# Or
# Este operador devuelve True si una de las 2 comparaciones da True.

# Ejemplos
operador_or = 65 > 3 or 34 == 4 # resultado True
operador_or2 = 23 > 63 or 63 <= 5 # resultado False
operador_or3 = 85 > 7 or "game" == "game" # resultado True

# Not
# Este operador invierte el valor booleano.

# Ejemplos
operador_not = not 65 > 3  # resultado False
operador_not2 = not(23 > 63) or 63 <= 5 # resultado True
operador_not3 = 85 > 7 and not("gallina" == "pato") # resultado True





# Conversiones comúnes en tipos de datos
# Hay veces que necesitamos convertir tipos de datos en otro para hacer alguna tarea, para ello tenemos estas funciones:

# int()
# La función int() convierte cualquier tipo de dato a int

# Ejemplo
# Ahora en la variable conversion_int va a contener 74 (tipo de dato int) en vez de "74" (tipo de dato string) 
numero = "74"
conversion_int =int(numero)



# float()
# La función float() convierte cualquier tipo de dato a float

# Ejemplo
# Ahora en la variable conversion_float va a contener 25.4 (tipo de dato float) en vez de "25.4" (tipo de dato string) 
numero = "25.4"
conversion_float =float(numero)



# str()
# La función str() convierte cualquier tipo de dato a string

# Ejemplo
# Ahora en la variable conversion_str va a contener 2534 (tipo de dato int) en vez de "2534" (tipo de dato string) 
numero = 2534
conversion_str =str(numero)



# bool()
# La función bool() convierte cualquier tipo de dato a booleano

# Ejemplo
# Ahora en la variable conversion_bool va a contener 2534 (tipo de dato int) en vez de "2534" (tipo de dato string) 
numero = 2534
conversion_float =str(numero)

# Conversion de tipos de datos string
# Cuando queramos concatenas varios tipos de datos en un solo string vamos a tener problemas porque python no va a entender como unir los tipos de datos como un string.
# Para ello tenemos varias maneras de hacer y son:

# f - string
# Es una función que me permite unir varias variables de diferente tipo en un solo texto
# se usa la letra f antes de crear un string y dentro del string se usar llaves {} para indicar las variables o tipos de datos diferentes a string que va a contener este texto.

# Ejemplo:
edad = 13
print( f"hola me llamo tamara y tengo {13} años")  

# Format 
# Es un método que se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. 
# Estos marcadores de posición se definen utilizando llaves en la cadena y se reemplazan por los valores correspondientes.

# Ejemplo

nombre = "Pria"
apellido = "Yaelc"
print("me llamo {} {}".format(nombre,apellido))


#repr()
# El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. 
# Estos marcadores de posición se definen utilizando llaves en la cadena y se reemplazan por los valores correspondientes.

# Ejemplo

numero = 4355
direccion ="Av. 9 de julio"
print("la dirección es:" + direccion + " " + repr(numero))







# Métodos de string (cadena)
# Los métodos de string permiten realizar diversas operaciones y manipulaciones en ellas. 
# Estos métodos te permiten modificar, buscar, validar y transformar cadenas de texto de manera eficiente. 
# Aquí hay algunas funcionalidades clave de los métodos de cadena en Python:

# Upper
# Convierte una cadena en mayúsculas.

# Ejemplo:
texto = "métodos de string"
print(texto.upper()) # resultado "MÉTODOS DE STRING"



# Lower
# Convierte una cadena en minúscula.

# Ejemplo:
texto = "BASE DE DATOS"
print(texto.upper()) # resultado "base de datos"



# islower
# Verifica si contiene todos sus caracteres en minúscula.

# Ejemplo:
texto = "La terminal"
print(texto.islower()) # resultado False



# isupper
# Verifica si contiene todos sus caracteres en minúscula.

# Ejemplo:
texto = "FENIX"
print(texto.isUpper()) # resultado True



# isdigit
# Verifica si contiene todos sus caracteres números.

# Ejemplo:
texto = "-6326"
print(texto.isdigit()) # resultado False, esto es porque ( - ) no es un número.



# isalpha
# Verifica si contiene todos sus caracteres letras.

# Ejemplo:
texto = "hufweovwaohgekvroiajgduyweffew"
print(texto.isdigit()) # resultado True



# Capitalize
# Se utiliza para devolver una copia de la cadena con el primer carácter en mayúscula y el resto en minúscula.

# Ejemplo
pais = "argentina"
print(pais.capitalize()) # resultado "Argentina"



# Center
# Se utiliza para centrar una cadena dentro de un ancho determinado.

titulo_centrado = "Las últimas novedades en tecnologías"
print(titulo_centrado.center(38)) # resultado " Las últimas novedades en tecnologías ", el largo original del string era 36, como yo puse 38 me dá un espacio en el inicio y final del string para llenar el largo del string
print(titulo_centrado.center(38,"-")) # resultado "-Las últimas novedades en tecnologías-", el largo original del string era 36, como yo puse 38 me dá un guión en el inicio y final del string para llenar el largo del string



# Strip
# Se utiliza para eliminar caracteres en el inicio y final del string.

nombre_strip1 = "                         Fernanda "
nombre_strip2 = "----------Julieta---"
print(titulo_centrado.strip()) # resultado "Fernanda"
print(titulo_centrado.strip("-")) # resultado "Julieta"



# Count
#  Se utiliza para contar el número de apariciones de una subcadena dentro de una cadena

# Ejemplo
animal_repetido = "Pato pato Pato PATO pAtO PaTo"
print(texto.count("pato")) # resultado 2



# Endswith
# Se utiliza para verificar si una cadena termina con una subcadena específica, devuelve un valor booleano ( True - False).

# Ejemplo
animal = "oso pardo"
print(texto.endswith("ardo")) # resultado True 

