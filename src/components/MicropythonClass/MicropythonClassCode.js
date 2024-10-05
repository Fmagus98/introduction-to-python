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