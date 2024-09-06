# Inicializar el inventario como una lista vacía
inventario = []

def agregar_producto(nombre, cantidad, precio):
    producto = {"nombre": nombre, "cantidad": cantidad, "precio": precio}
    inventario.append(producto)
    print(f"Producto '{nombre}' agregado con éxito.")

def listar_productos():
    if inventario:
        print("\nInventario de Productos:")
        for producto in inventario:
            print(f"Nombre: {producto['nombre']}, Cantidad: {producto['cantidad']}, Precio por unidad: ${producto['precio']:.2f}")
    else:
        print("\nEl inventario está vacío.")

def buscar_producto(nombre):
    for producto in inventario:
        if producto['nombre'].lower() == nombre.lower():
            print(f"\nProducto encontrado: Nombre: {producto['nombre']}, Cantidad: {producto['cantidad']}, Precio por unidad: ${producto['precio']:.2f}")
            return producto 
    print(f"\nProducto '{nombre}' no encontrado en el inventario.")
    return None 

def actualizar_producto(nombre):
    producto = buscar_producto(nombre)
    if producto:
        nueva_cantidad = int(input(f"Ingrese la nueva cantidad para '{nombre}': "))
        nuevo_precio = float(input(f"Ingrese el nuevo precio para '{nombre}': "))
        producto['cantidad'] = nueva_cantidad
        producto['precio'] = nuevo_precio
        print(f"Producto '{nombre}' actualizado con éxito.")

def eliminar_producto(nombre):
    producto = buscar_producto(nombre)
    if producto:
        inventario.remove(producto)
        print(f"Producto '{nombre}' eliminado del inventario.")

def calcular_valor_total():
    valor_total = sum(producto['cantidad'] * producto['precio'] for producto in inventario)
    print(f"\nEl valor total del inventario es: ${valor_total:.2f}")

def menu():
    while True:
        print("\n--- Menú del Inventario ---")
        print("1. Agregar Producto")
        print("2. Listar Productos")
        print("3. Buscar Producto")
        print("4. Actualizar Producto")
        print("5. Eliminar Producto")
        print("6. Calcular Valor Total del Inventario")
        print("7. Salir")
        opcion = input("Selecciona una opción (1-7): ")

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
            nombre = input("Ingresa el nombre del producto a actualizar: ")
            actualizar_producto(nombre)
        elif opcion == '5':
            nombre = input("Ingresa el nombre del producto a eliminar: ")
            eliminar_producto(nombre)
        elif opcion == '6':
            calcular_valor_total()
        elif opcion == '7':
            print("Saliendo del sistema de inventario.")
            break
        else:
            print("Opción no válida. Inténtalo de nuevo.")

# Ejecutar el menú principal
menu()