# Inicializar el inventario como una lista vacía
inventario = []

def agregar_producto(nombre, cantidad, precio):
    # Crear una tupla para el nuevo producto
    producto = (nombre, cantidad, precio)
    # Agregar la tupla a la lista del inventario
    inventario.append(producto)
    print(f"Producto '{nombre}' agregado con éxito.")

def listar_productos():
    if inventario:
        print("\nInventario de Productos:")
        for producto in inventario:
            print(f"Nombre: {producto[0]}, Cantidad: {producto[1]}, Precio por unidad: ${producto[2]:.2f}")
    else:
        print("\nEl inventario está vacío.")

def buscar_producto(nombre):
    for producto in inventario:
        if producto[0].lower() == nombre.lower():
            print(f"\nProducto encontrado: Nombre: {producto[0]}, Cantidad: {producto[1]}, Precio por unidad: ${producto[2]:.2f}")
            return
    print(f"\nProducto '{nombre}' no encontrado en el inventario.")

def calcular_valor_total():
    valor_total = sum(producto[1] * producto[2] for producto in inventario)
    print(f"\nEl valor total del inventario es: ${valor_total:.2f}")

def menu():
    while True:
        print("\n--- Menú del Inventario ---")
        print("1. Agregar Producto")
        print("2. Listar Productos")
        print("3. Buscar Producto")
        print("4. Calcular Valor Total del Inventario")
        print("5. Salir")
        opcion = input("Selecciona una opción (1-5): ")

        if opcion == '1':
            nombre = input("Ingresa el nombre del producto: ")
            cantidad = int(input("Ingresa la cantidad: "))
            precio = float(input("Ingresa el precio por unidad: "))
            agregar_producto(nombre, cantidad, precio)
        elif opcion == '2':
            listar_productos()
        elif opcion == '3':
            nombre = input("Ingresa el nombre del producto a buscar: ")
            buscar_producto(nombre)
        elif opcion == '4':
            calcular_valor_total()
        elif opcion == '5':
            print("Saliendo del sistema de inventario.")
            break
        else:
            print("Opción no válida. Inténtalo de nuevo.")

# Ejecutar el menú principal
menu()
