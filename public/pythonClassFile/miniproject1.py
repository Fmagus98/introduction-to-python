total_cuenta = float(input("Ingrese el total de la cuenta: $"))
porcentaje_propina = float(input("Ingrese el porcentaje de propina que desea dejar (%): "))
    
propina = total_cuenta * (porcentaje_propina / 100)
total_con_propina = total_cuenta + propina
    
print(f"Propina: ${propina:.2f}")
print(f"Total con propina: ${total_con_propina:.2f}")
