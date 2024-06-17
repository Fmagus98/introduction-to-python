# creación de diccionarios
diccionario = {"nombre":"Hernán"} # método 1
diccionario2 = dict({"nombre":"Mariana"}) #método 2

# manipulación de diccionario

diccionario_manipulacion = {"nombre": "gustavo", "edad": 54, "altura": 1.74, "discapacidad":False}
print(diccionario_manipulacion["nombre"]) # resultado gustavo
print(diccionario_manipulacion["edad"]) # resultado 54
print(diccionario_manipulacion["altura"]) # resultado 1.74
print(diccionario_manipulacion["discapacidad"]) # resultado False

# modificaciones de elementos

diccionario_modificacion = {"marca":"Honda", "modelo": "CR-V", "motor": "turbo 1L DOHC con inyección directa e intercooler", "airbags": 5, "colores": ["Platinum White Pearl","luna Silver Metalic"]}
diccionario_modificacion["motor"] = "turbo 1.5L DOHC con inyección directa e intercooler"
diccionario_modificacion["airbags"] = 6
diccionario_modificacion["colores"][0] = "Perla blanca platino"
diccionario_modificacion["colores"][1] = "Luna plata metalizada"
print(diccionario_modificacion) # respuesta {'marca': 'Honda', 'modelo': 'CR-V', 'motor': 'turbo 1.5L DOHC con inyección directa e intercooler', 'airbags': 6, 'colores': ['Perla blanca platino', 'Luna plata metalizada']}

# métodos de diccionarios

    # keys() - retorna una lista con todas las claves del diccionario
diccionario_keys = {"nombre": "Rafael", "apellido": "Lopez"}
print(diccionario_keys.keys()) # resultado dict_keys(['nombre', 'apellido'])

    # values() - retorna una lista con todos los valores del diccionario
diccionario_values =  {"nombre": "Rodrigo", "apellido": "Martinez"}
print(diccionario_values.values()) # resultado dict_values(['Rodrigo', 'Martinez'])

    # items() retorna una lista de tuplas con los pares clave-valor del diccionario.
diccionario_items = {"nombre": "Rodrigo", "apellido": "Martinez"} 
print(diccionario_values.values()) # respuesta dict_values(['Rodrigo', 'Martinez'])

    # get() retorna el valor asociado a una clave, o un valor predeterminado si la clave no existe.
diccionario_get = {"producto": "Manzana", "categoria": "Frutas", "precio": 42}
get1 = diccionario_get.get("producto", "no se ha encontrado")
get2 = diccionario_get.get("subcategoria", "no se ha encontrado")
print(get1) # resultado Manzana
print(get2) # resultado no se ha encontrado

    # update(diccionario2) combina dos diccionarios, actualizando las claves existentes y agregando nuevas claves.
diccionario_update1 = {"producto": "pera", "categoria": "frutas"}
diccionario_update2 = {"producto": "Piña", "precio": 43}
diccionario_update1.update(diccionario_update2)
print(diccionario_update1) # resultado {'producto': 'Piña', 'categoria': 'frutas', 'precio': 43}

    # pop(clave, [valor_predeterminado]) elimina y retorna el valor asociado a una clave.
diccionario_pop = {"nombre": "agustina", "apellido":"gaitán"}
nombre = diccionario_pop.pop("nombre", "no existe nombre")
edad = diccionario_pop.pop("edad", "no existe edad")
print(nombre) # resultado agustina
print(edad) # resultado no existe
print(diccionario_pop) # respuesta {'apellido': 'gaitán'}

    # popitem() - elimina el último clave-valor
diccionario_popitem = {"deporte": "tenis", "partidos_ganados": 54, "partidos_ perdido": 13, "partidos_empatados:": 8}
diccionario_popitem.popitem()
diccionario_popitem.popitem()
diccionario_popitem.popitem()
print(diccionario_popitem) # resultado {"deporte":"tenis"}
    
    # clear() - elimina todas las clave - valor del diccionario
diciconario_clear = {"lenguage": "Python", "Framework": "Django"}
diciconario_clear.clear()
print(diciconario_clear) # respuesta {}

    # copy() - crea una copia del diccionario sin efectar a la original
diccionario = {"producto": "Manzana", "categoria": "Frutas", "precio": 42}
diccionario_copy = diccionario.copy()
diccionario_copy.clear()
print(diccionario) # resultado {'producto': 'Manzana', 'categoria': 'Frutas', 'precio': 42}
print(diccionario_copy) # resultado {}

    # fromkeys () - retorna un nuevo diccionario con las claves del iterable proporcionado y el mismo valor opcional para todas las claves.
claves = ["a", "b", "c"]
valor = 0
diccionario = dict.fromkeys(claves,0) # creación de diccionario con claves del mismo valor
print(diccionario) # respuesta {'a': 0, 'b': 0, 'c': 0}

# creación de conjunto - set 
conjunto = {5,43,2,1,6,7,9} # método 1
conjunto2 = set({5,4,3,2,1,7,9,0}) # método 2


# métodos de conjuntos

    # add () - agrega un elemento al conjunto
conjunto_add = {"Rafael","Rodrigo"}
conjunto_add.add("Julio")
print(conjunto_add) # resultado {"Rafael", "Rodrigo", "Julio"}

    # update(conjunto2) combina dos conjuntos.
conjunto_update1 = {"pera","frutilla"}
conjunto_update2 = {"pera", "limón"}
conjunto_update1.update(conjunto_update2)
print(conjunto_update1) # resultado {'pera','frutilla','limón'}

    # pop() - elimina el último elemento
conjunto_pop = {"tenis", "basquet","handball","paddle"}
conjunto_pop.pop()
conjunto_pop.pop()
conjunto_pop.pop()
print(conjunto_pop) # resultado {"tenis"}
    
    # clear() - elimina todas las clave - valor del conjunto
conjunto_clear = {"Python", "Javascript","C#"}
conjunto_clear.clear()
print(conjunto_clear) # respuesta {}

    # copy() - crea una copia del conjunto sin efectar a la original
conjunto = {"Manzana", "Pera"}
conjunto_copy = conjunto.copy()
conjunto_copy.clear()
print(conjunto) # resultado {'Manzana', 'Pera'}
print(conjunto_copy) # resultado {}

    # remove() - elimina un elemento específico del conjunto.
conjunto_remove = {"Python", "Javascript","C#"}
conjunto_remove.remove("Python")
print(conjunto_remove) # respuesta {"Javascript", "C#"}

    # discard() - elimina un elemento, en caso de no existir no va a provocar un error
conjunto_discard = {"Python", "Javascript","C#"}
conjunto_discard.discard("Java")
print(conjunto_discard) # respuesta {"Python", "Javascript","C#"}

    # union(otro_conjunto) - Devuelve un nuevo conjunto que es la unión de dos conjuntos.
conjunto = {"Python", "Javascript","C#"}
union = conjunto.union({"Java", "C++"})
print(conjunto) # respuesta {"Python", "Javascript","C#","Java", "C++"}

    # intersection(otro_conjunto) - Devuelve un nuevo conjunto que es la intersección de dos conjuntos.
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto2 = {"karolina", "gustavo", "mariana", "luis"}
interseccion = conjunto.intersection(conjunto2)
print(interseccion) # respuesta {'karolina', 'luis'}

    # difference(otro_conjunto) - Devuelve un nuevo conjunto que es la diferencia entre dos conjuntos.
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto2 = {"karolina", "gustavo", "mariana", "luis"}
diferencia = conjunto.difference(conjunto2)
print(diferencia) # respuesta {'patricia', 'roberto'}

    # symmetric_difference(otro_conjunto) - Devuelve un nuevo conjunto que es la diferencia simétrica entre dos conjuntos.
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto2 = {"karolina", "gustavo", "mariana", "luis"}
diferencia_simetrica = conjunto.symmetric_difference(conjunto2)
print(diferencia_simetrica) # respuesta {'patricia', 'mariana', 'gustavo'.'roberto'}

    # issubset(otro_conjunto) - Verifica si el conjunto actual es un subconjunto del otro conjunto.
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto2 = {"karolina", "gustavo", "mariana", "luis"}
diferencia_booleano = conjunto.issubset(conjunto2)
print(diferencia_booleano) # respuesta False

    # issuperset(otro_conjunto) - Verifica si el conjunto actual es un superconjunto del otro conjunto.
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto2 = {"karolina", "gustavo", "mariana", "luis"}
print(conjunto.issuperset(conjunto2)) # respuesta False

    # clear - elimina todos los elementos del conjunto
conjunto = {"patricia", "karolina", "luis", "roberto"}
conjunto.clear() 
print(conjunto) # respuesta set()





