# Declara las variables que necesitas
producto_seleccionado = ""
nombre_producto = ""
precio_producto = 0
cantidad = 0
impuesto_incluido = ""
impuesto = 0

# crea un bucle while para que escoja la opción correcta
while producto_seleccionado != "1" and producto_seleccionado != "2" and producto_seleccionado !="3":
    producto_seleccionado = input("Selecciona un producto (1-3):\n1_ Arroz = $1000\n2_ Carne picada = $6000\n3_ Tomate = $2000\n")

# crea un bucle while para que no escoja un número negativo
while cantidad < 1 :
    cantidad = int(input("Ingresa la cantidad que deseas comprar: "))

# crea un bucle while para que escoja la opción correcta
while impuesto_incluido != "s" and impuesto_incluido != "n":
    impuesto_incluido = input("¿Deseas incluir impuestos? (s/n): ")
    print(impuesto_incluido != "n")
    print(impuesto_incluido != "s")

if producto_seleccionado == "1":
    nombre_producto = "Arroz"
    precio_producto = 1000
elif producto_seleccionado == "2":
    nombre_producto = "Carne picada"
    precio_producto = 6000
elif producto_seleccionado == "3":
    nombre_producto = "Tomate"
    precio_producto = 2000

# Cálculo
subtotal = precio_producto * cantidad

if impuesto_incluido.lower() == 's':
    impuesto = subtotal * 0.21  # Ejemplo con 21% de IVA

total = subtotal + impuesto

# Salida de datos
print(f"Detalle de tu compra: {nombre_producto} x {cantidad}")
print(f"Subtotal: ${subtotal}")
print(f"Impuesto: ${impuesto}")
print(f"Total a pagar: ${total}")
