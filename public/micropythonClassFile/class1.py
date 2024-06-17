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
