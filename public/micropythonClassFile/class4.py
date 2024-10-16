# Importaciones Básicas
from machine import Pin, ADC, PWM
from time import sleep

# Ejemplo 1: Lectura de un Potenciómetro
adc = ADC(Pin(28))  # Configura el pin 28 como entrada analógica para el potenciómetro
while True:
    analog_value = adc.read_u16()  # Lectura del valor analógico
    print(f"Valor análogo: {analog_value}")
    sleep(1)

# Ejemplo 2: Voltaje desde el Potenciómetro
voltage = analog_value * (3.3 / 65535)  # Calcula el voltaje a partir del valor analógico
print(f"Voltage: {voltage}")

# Ejemplo 3: Control de un Servomotor
pwm = PWM(Pin(15))  # Configura el pin 15 para salida de PWM
pwm.freq(50)  # Establece la frecuencia a 50 Hz
while True:
    pot_value = adc.read_u16()
    angle = int(pot_value * 180 / 65535)  # Mapea el valor a un rango de 0 a 180
    duty_cycle = int((angle / 180 * 102) + 26)  # Ajuste según el servo
    pwm.duty(duty_cycle)  # Establece el ciclo de trabajo del PWM
    sleep(0.1)

# Ejemplo 4: Control de Varios LEDs
led1 = Pin(6, Pin.OUT)
led2 = Pin(7, Pin.OUT)
led3 = Pin(8, Pin.OUT)
led4 = Pin(9, Pin.OUT)
while True:
    analog_value = adc.read_u16() / 65535
    led1.off(); led2.off(); led3.off(); led4.off()
    if analog_value > 0.25:
        led1.on()
    if analog_value > 0.50:
        led2.on()
    if analog_value > 0.75:
        led3.on()
    if analog_value > 0.90:
        led4.on()
    sleep(0.1)

# Listas y Bucle for
"""
Listas en Python
Las listas son colecciones de elementos que pueden ser de diferentes tipos. Se definen utilizando corchetes [] 
y permiten almacenar múltiples valores en una sola variable. Por ejemplo:
"""
LEDS = [Pin(6, Pin.OUT), Pin(7, Pin.OUT), Pin(8, Pin.OUT)]

"""
Bucle for
El bucle for se utiliza para iterar sobre elementos en una lista o rango. 
Aquí hay un ejemplo de su uso:
"""
for i in range(3):
    LEDS[i].off()  # Apaga cada LED en la lista

# Uso de funciones
"""
Las funciones permiten organizar el código y reutilizar bloques de código. 
Aquí hay un ejemplo de cómo definir una función para encender LEDs:
"""

# Bucle principal que utiliza la función
while True:
    analog_value = adc.read_u16() / 65535

    # Bucle for para recorrer los Leds y desactivarlos
    for i in range(len(LEDS)):
        LEDS[i].off()  # Apagar todos los LEDs
    
    if analog_value <= 0.33:
        LEDS[0].on()
    elif analog_value > 0.66:
        LEDS[2].on()
    else:
        LEDS[1].on()
    sleep(0.1)

