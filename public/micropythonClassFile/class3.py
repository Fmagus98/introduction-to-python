# WHILE
# El bucle while ejecuta repetidamente un bloque de código siempre que una condición sea verdadera. 
# La condición se verifica antes de cada iteración, y si es verdadera, se ejecuta el bloque de código. 
# Si la condición se vuelve falsa en algún momento, se sale del bucle y se continúa con la siguiente instrucción después del bucle. 
# Aquí tienes ejemplos de bucle while:

# 1 - Bucle while con condicional

numero1 = 1
    
while numero1 < 10: # hasta que numero1 no sea >= a 10, no va a finalizar el bucle.
    print(numero1) 
    numero1 += 1 # esto hace incrementar el valor de la variable numero1
    


# 2 - Bucle while True

while True: # Al no haber una condicional, el bucle se repetirá indefinidamente
    numero1 = int(input("ingrese el primer numero: "))
    numero2 = int(input("ingrese el segundo numero: "))
    print("la suma de los dos numeros es: ", numero1 + numero2)
    
    respuesta = input("desea continuar? (s/n): ") # pide una respuesta (s/n)
    
    if respuesta == "n":
        break    # break hace que el bucle se detenga


# Botones
# un botón es un componente físico que se utiliza como entrada digital. 
# Cuando el botón es presionado o soltado, cambia el estado de un pin GPIO (General Purpose Input/Output), permitiendo que el microcontrolador detecte e interactúe con eventos del mundo físico.

# Con la función Pin vas a indicar que pin quieres utilizar en tu raspberry pi pico para utilizar un botón
# en este ejemplo utilizaré el pin GPIO3 y debemos indicar que este Pin es un puerto de entrada ( Pin.IN ) y la acción que hará este botón ( PULL_UP/PULL_DOWN)

# PULL_UP 
from machine import Pin
import utime
boton = Pin(3,Pin.IN,Pin.PULL_UP)
while True:
    print(boton.value())
    utime.sleep(2)

# PULL_DOWN
from machine import Pin
from time import sleep

boton = Pin(5, Pin.IN, Pin.PULL_DOWN)

while True:
    if boton.value():
        print("Botón presionado")
    else:
        print("Botón no presionado")
    
    sleep(1)


# LED
# Los LEDs básicos son dispositivos de dos pines: un ánodo (+) y un cátodo (-). 
# Para encender y apagar un LED en MicroPython, simplemente se conecta el ánodo a un pin GPIO configurado como salida y el cátodo a tierra (GND). 
# Se puede controlar encendiéndolo o apagándolo con comandos sencillos.


from machine import Pin
import time

led = Pin(15, Pin.OUT)  # Configura el GPIO 15 como salida

while True:
    led.on()  # Enciende el LED
    time.sleep(1)  # Espera 1 segundo
    led.off()  # Apaga el LED
    time.sleep(1)  # Espera 1 segundo`