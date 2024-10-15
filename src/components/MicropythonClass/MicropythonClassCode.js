export const class1MCode = [
    `from machine import Pin`,
    `from machine import Pin\nimport time`,
    `from machine import Pin\nimport time\nprint("Led encendido")`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)\ntime.sleep(2)\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)`
]

export const class2MCode = [
    `print("hola")`,
    `led = int(input("1_ Activar led 2_ Desactivar Led   "))\nprint(led)`,
    `from machine import Pin\nled = int(input("1_ Activar led 2_ Desactivar Led "))\nprint(led)\n\nif led ==1:\n    Pin("LED",Pin.OUT).value(1)\nelif led == 2:\n    Pin("LED",Pin.OUT).value(0)`,
   ]

export const class3MCode = [
    `from machine import Pin\nimport utime\nboton = Pin(3,Pin.IN,Pin.PULL_UP)\nwhile True:\n    print(boton.value())\n    utime.sleep(2)`,
    `from machine import Pin\nfrom time import sleep\n\nboton = Pin(5, Pin.IN, Pin.PULL_DOWN)\n\nwhile True:\n    if boton.value():\n        print("Botón presionado")\n    else:\n        print("Botón no presionado")\n\n    sleep(1) `,
    `from machine import Pin\nimport time\n\nled = Pin(15, Pin.OUT)  # Configura el GPIO 15 como salida\n\nwhile True:\n    led.on()  # Enciende el LED\n    time.sleep(1)  # Espera 1 segundo\n    led.off()  # Apaga el LED\n    time.sleep(1)  # Espera 1 segundo`,
    `import machine\nimport time\n\nbutton = machine.Pin(6, machine.Pin.IN, machine.Pin.PULL_UP)\nled= machine.Pin(22, machine.Pin.OUT)\n\nwhile True:\n    print("estado:", button.value())\n    if(button.value()== 0):\n        led.value(1)\n        time.sleep(0.1)\n    else:\n        led.value(0)`
] 

export const class4MCode = [
    `from machine import Pin, ADC # Importación de ADC\nfrom time import sleep`,
    `from machine import Pin, ADC # Importación de ADC\nfrom time import sleep\n\n# crea el objeto ADC para manipular el potenciometro.\nadc = ADC(Pin(28))\n# Nota: los pins GPIO que soportan ADC son solamente los Pin 26-28\n`,
    `from machine import Pin, ADC # Importación de ADC\nfrom time import sleep\n\n# crea el objeto ADC para manipular el potenciometro.\nadc = ADC(Pin(28))\n# Nota: los pins GPIO que soportan ADC son solamente los Pin 26-28\n\nwhile True:\n    # lectura de valor análogo desde el potenciometro\n    analog_value = adc.read_u16()\n    print(f"Valor análogo(duty cycle): {analog_value}")\n\n    # Valor de voltaje desde el potenciometro\n    voltage = analog_value * (3.3 / 65535)\n    print(f"Voltage: {voltage}")\n\n    print("==========")\n    sleep(1)`,
    `from machine import Pin, ADC, PWM # Importación de ADC\nfrom time import sleep\n\n# crea el objeto ADC para manipular el potenciometro.\nadc = ADC(Pin(28))\n\nwhile True:\n    # lectura de valor análogo desde el potenciometro\n    analog_value = adc.read_u16()\n    print(f"Valor análogo(duty cycle): {analog_value}")\n\n    # Valor de voltaje desde el potenciometro\n    voltage = analog_value * (3.3 / 65535)\n    print(f"Voltage: {voltage}")\n\n    print("==========")\n    sleep(1)`,
    `from machine import Pin, ADC, PWM # Importación de ADC\nfrom time import sleep\n\n# crea el objeto ADC para manipular el potenciometro.\nadc = ADC(Pin(28))\n\n# Crear objeto PWM en un pin específico\npwm = PWM(Pin(15)) # Pin 15 para salida de PWM\n\n# Establecer la frecuencia a 1KHz (1000Hz)\npwm.freq(1000)\n\nwhile True:\n    # lectura de valor análogo desde el potenciometro\n    analog_value = adc.read_u16()\n    print(f"Valor análogo(duty cycle): {analog_value}")\n\n    # Valor de voltaje desde el potenciometro\n    voltage = analog_value * (3.3 / 65535)\n    print(f"Voltage: {voltage}")\n\n    print("==========")\n    sleep(1)`,
    `from machine import Pin, ADC, PWM # Importación de ADC\nfrom time import sleep\n\n# crea el objeto ADC para manipular el potenciometro.\nadc = ADC(Pin(28))\n\n# Crear objeto PWM en un pin específico\npwm = PWM(Pin(15)) # Pin 15 para salida de PWM\n\n# Establecer la frecuencia a 1KHz (1000Hz)\npwm.freq(1000)\n\nwhile True:\n    # lectura de valor análogo desde el potenciometro\n    analog_value = adc.read_u16()\n    print(f"Valor análogo(duty cycle): {analog_value}")\n    pwm.duty_u16(analog_value)  # valor de intensidad de led\n\n    # Valor de voltaje desde el potenciometro\n    voltage = analog_value * (3.3 / 65535)\n    print(f"Voltage: {voltage}")\n\n    print("==========")\n    sleep(1)`,
] 