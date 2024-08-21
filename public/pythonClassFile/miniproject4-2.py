import math

def suma(num1, num2):
    return num1 + num2

def resta(num1, num2):
    return num1 - num2

def multiplicacion(num1, num2):
    return num1 * num2

def division(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        return "Error: División por cero"

def potencia(base, exponente):
    return base ** exponente

def raiz_cuadrada(num):
    if num >= 0:
        return math.sqrt(num)
    else:
        return "Error: No se puede calcular la raíz de un número negativo"

def logaritmo(base, num):
    if base > 0 and num > 0:
        return math.log(num, base)
    else:
        return "Error: Logaritmo indefinido"

