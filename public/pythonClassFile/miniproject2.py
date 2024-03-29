import random

numero_aleatorio = random.randint(0,20)
intentos = 5
while True:
    if intentos == 0:
        print("Perdiste, te quedaste sin intentos!")
        break
    else:
        numero = int(input("Ingresa un numero entre 0 y 20: "))
        if numero == numero_aleatorio and intentos > 0:
            print("Ganaste!")
            break
        elif numero > numero_aleatorio and intentos > 0:
            intentos -= 1
            print("Mas bajo")
        elif numero < numero_aleatorio and intentos > 0:
            print("Mas alto")
            intentos -= 1