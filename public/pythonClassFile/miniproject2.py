# Conversión de kilogramos a libras
kilogramos = int(input("Ingresa la cantidad de kilos que quieras convertir: "))
libras = kilogramos * 2.20462

# Conversión de kilómetros a millas
kilometros = int(input("Ingresa la cantidad de kilometros que quieras convertir: "))
millas = kilometros * 0.621371

# Conversión de litros a galones
litros = int(input("Ingresa la cantidad de litros que quieras convertir: "))
galones = litros * 0.264172

# Mostrar resultados
print(f"{kilogramos} kg son {libras:.2f} libras")
print(f"{kilometros} km son {millas:.2f} millas")
print(f"{litros} litros son {galones:.2f} galones")