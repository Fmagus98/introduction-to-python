# excepcion en error de nombre - NameError
try:
    # Código que puede generar un NameError
    print(x)
except NameError as e:
    print("Se produjo un NameError:", e)
    
# excepcion en error de tipo de dato - typeError
try:
    # Código que puede generar un TypeError
    x = 10
    y = "5"
    z = x + y
except TypeError as e:
    print("Se produjo un TypeError:", e)
    
# excepcion en error de valores - valueError
try:
    # Código que puede generar un ValueError
    num = int("abc")
except ValueError as e:
    print("Se produjo un ValueError:", e)

# excepcion en error de atributos - AtributteError
try:
    # Código que puede generar un AttributeError
    lista = [1, 2, 3]
    print(lista.length)
except AttributeError as e:
    print("Se produjo un AttributeError:", e)

# excepcion en error de clave - KeyError
try:
    # Código que puede generar un KeyError
    diccionario = {"clave": "valor"}
    print(diccionario["key"])
except KeyError as e:
    print("Se produjo un KeyError:", e)
    
# excepcion en error de divisiones entre cero - ZeroDivisionError
try: 
    # Código que puede generar un ZeroDivisionError
    resultado = 10 / 0
except ZeroDivisionError as e:
    print("Se produjo un ZeroDivisionError:", e)

# excepcion en error de archivo - FileNotFoundError
try:
    # Código que puede generar un FileNotFoundError
    archivo = open("archivo_inexistente.txt", "r")
    contenido = archivo.read()
    archivo.close()
except FileNotFoundError as e:
    print("Se produjo un FileNotFoundError:", e)

# abrir/cerrar archivos
archivo = open("archivo.txt", "r", encoding="utf-8 ") # abre el archivo, el encoding es para que reconozca caracteres que solo usa latam(ñ,á,é,í,ó,ú,ü
archivo.close()

# leer archivos
archivo = open("archivo.txt", "r", encoding="utf-8 ") # abre el archivo, el encoding es para que reconozca caracteres que solo usa latam(ñ,á,é,í,ó,ú,ü)
contenido = archivo.read()
print(contenido)
archivo.close()

# elimina todo el contenido y lo reemplaza por lo que escribas en el método write
archivo = open("archivo.txt", "w")
archivo.write("hola")
archivo.close()

# Agrega contenido al archivo
archivo = open("archivo.txt", "a")
archivo.write("hola")
archivo.close()

# renombrar archivos
import os 
os.rename("archivo_actual", "archivo_modificado")

# eliminar archivos
import os
os.remove("archivos.txt")
