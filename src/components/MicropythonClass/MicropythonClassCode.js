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
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)`,
    `from machine import Pin\nimport time\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)\ntime.sleep(2)\nprint("Led encendido")\nPin("LED",Pin.OUT).value(1)\ntime.sleep(2)\nprint("Led apagado")\nPin("LED",pin.OUT).value(0)`
]
