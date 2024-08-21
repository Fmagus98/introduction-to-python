import funciones_operaciones as calc

def main():
    print("Bienvenido a la Calculadora Avanzada")
    print("Operaciones disponibles:")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Potencia")
    print("6. Raíz Cuadrada")

    opcion = int(input("Selecciona una operación (1-7): "))
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))

    if opcion == 1:
        print("Resultado:", calc.suma(num1, num2))
    elif opcion == 2:
        print("Resultado:", calc.resta(num1, num2))
    elif opcion == 3:
        print("Resultado:", calc.multiplicacion(num1, num2))
    elif opcion == 4:
        print("Resultado:", calc.division(num1, num2))
    elif opcion == 5:
        base = float(input("Ingresa la base: "))
        exponente = float(input("Ingresa el exponente: "))
        print("Resultado:", calc.potencia(base, exponente))
    elif opcion == 6:
        num = float(input("Ingresa el número: "))
        print("Resultado:", calc.raiz_cuadrada(num))
    else:
        print("Opción no válida")

if __name__ == "__main__":
    main()
