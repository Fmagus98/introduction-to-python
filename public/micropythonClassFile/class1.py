# ------------------ Machine --------------------------------
# Para poder acceder a las funcionalidades de la Raspberry pi pico w, debemos utilizar una importación llamada "machine"
import machine

# Para traer solamente los accesos a los puertos de la Raspberry pi pico w, debemos utilizar la importación "machine" de esta forma
from machine import Pin

# Para traer el Led interno que tiene la Raspberry pi pico w debemos utilizar la función Pin del modulo machine.
# Luego dentro de lafunción agregamos el parámetro "Led"(para indicar el led interno) seguido del parámetro Pin.OUT(indicando que es un puerto de salida).
# Luego se le agrega un valor (value) 0 para apagar el Led y 1 para prender
  
Pin("LED",Pin.OUT).value(1)

# Time
# 
import time

time.sleep(2)

# ------------------------ Primer Programa -------------------------------------------
from machine import Pin
import time
print("Led encendido")
Pin("LED",Pin.OUT).value(1)
time.sleep(2)
print("Led apagado")
Pin("LED",Pin.OUT).value(0)
time.sleep(2)
print("Led encendido")
Pin("LED",Pin.OUT).value(1)
time.sleep(2)
print("Led apagado")
Pin("LED",Pin.OUT).value(0)



