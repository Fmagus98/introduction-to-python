usuarios = []
roles_disponibles = ["Jefe", "Encargado", "Operador"]

def agregar_usuario(nombre, rol):
    if rol.capitalize() in roles_disponibles:
        usuario = (nombre, rol)
        usuarios.append(usuario)
        print(f"Usuario '{nombre}' con rol '{rol}' agregado con éxito.")
    else:
        print(f"Error: El rol '{rol}' no es válido. Roles válidos: {roles_disponibles}")

def listar_usuarios():
    if usuarios:
        print("\nLista de Usuarios y Roles:")
        for usuario in usuarios:
            print(f"Usuario: {usuario[0]}, Rol: {usuario[1]}")
    else:
        print("\nNo hay usuarios en el sistema.")

def listar_roles():
    print("\nRoles Disponibles:")
    for rol in roles_disponibles:
        print(f"- {rol}")

def menu():
    while True:
        print("\n--- Menú de Gestión de Usuarios ---")
        print("1. Agregar Usuario")
        print("2. Listar Usuarios")
        print("3. Listar Roles Disponibles")
        print("4. Salir")
        opcion = input("Selecciona una opción (1-4): ")

        if opcion == '1':
            nombre = input("Ingresa el nombre del usuario: ")
            rol = input("Ingresa el rol del usuario: ")
            agregar_usuario(nombre, rol)
        elif opcion == '2':
            listar_usuarios()
        elif opcion == '3':
            listar_roles()
        elif opcion == '4':
            print("Saliendo del sistema de gestión de usuarios.")
            break
        else:
            print("Opción no válida. Inténtalo de nuevo.")

# Ejecutar el menú principal
menu()
