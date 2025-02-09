# Entorno Virtual
# Un entorno virtual en Python es un espacio aislado donde puedes instalar paquetes y dependencias sin afectar la configuración global 
# de Python en tu sistema. Esto es especialmente útil para evitar conflictos entre diferentes proyectos que requieren distintas versiones
# de las mismas bibliotecas.

# 1. Instalar venv
# Primero debemos instalar una libreria llamada "virtualenv" esta va a ser la encargada para poder realizar entornos virtuales en python.
# para instalarlo debemos poner en la terminal "pip install virtualenv"

# 2. Crear un entorno virtual
# Desde la terminal o línea de comandos, navega hasta tu carpeta de proyecto y ejecuta:
# python -m venv venv

# Esto crea una carpeta llamada 'venv' que contendrá los archivos del entorno virtual.

# 3. Activar el entorno virtual
# En Windows:
# venv\Scripts\activate
# En Mac/Linux:
# source venv/bin/activate

# Una vez activado, verás que la terminal muestra algo como (venv), indicando que estás trabajando dentro del entorno virtual.

# 3. Instalar Flet
# Dentro del entorno activado, instala Flet escribiendo en la terminal:
# pip install flet

# ------------------------------------------------------------------------------
# Primeros pasos con Flet

# Comentarios - Para poder hacer comentarios en tu código debes escribir un # al principio de la linea de código

# importación de FLet
# Para importar el módulo "flet" debemos escribir en nuestro archivo "import flet as ft"

# Ejecución de Flet

# Primero debemos crear una función llamada "main".
# Estructura:
# def main(page: ft.Page):  # Define la función principal`,
#     page.title = "Mi App en Flet"  # Cambia el título de la ventana`,
#     page.add(ft.Text("¡Hola, mundo en Flet!"))  # Agrega un texto a la página`,
# ft.app(target=main)  # Inicia la aplicación llamando a 'main'`,

# Title: es la propiedad en la que podemos indicarle el nombre de nuestra aplicación
# add: es la propiedad para agregar elementos a nuestra aplicación
# fs.app(target=main): Es la ejecución de la función principal

# Para ejecutar la aplicación debemos poner en la terminal "python" seguido del nombre del archivo. ej: python main.py
# Si queres ejecutar en el navegador la app, debes escribir en la terminal "flet run --web" seguido del nombre del archivo, ej: flet run --web main.py
