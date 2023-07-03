# creación de lista
# lista = list("perro") # método 1
# print(lista) # respuesta ["p","e","r","r","o"]
# lista2 = ["perro", "gato", "caballo", "loro"] # método 2
# print(lista2) # respuesta ["perro", "gato", "caballo", "loro"]

# indexación en lista 

# listaIndex = ["Hernan", "Laura", "Pedro", "Kevin", "Maria", "Keila"]
# print(listaIndex[0]) # respuesta "Hernan"
# print(listaIndex[1]) # respuesta "Laura"
# print(listaIndex[2]) # respuesta "Pedro"
# print(listaIndex[3]) # respuesta "Kevin"
# print(listaIndex[4]) # respuesta "Maria"
# print(listaIndex[5]) # respuesta "Keila"
# print(listaIndex[-1]) # respuesta "Keila" - muestra el último elemento de la lista
# print(listaIndex[-2]) # respuesta "Maria" - muestra el anteúltimo elemento de la lista 

# modificación por índice

# listaIndex[0] = "Gabriel" # modificacion del valor en el índice 0
# print(listaIndex) # respuesta ["Gabriel", "Laura", "Pedro", "Kevin", "Maria", "Keila"]

# segmentación - slicing

# numeros = [1 , 4 , 5 , 62 , 246 , 44 , 643 , 74 , 65 , 1]
# print(numeros[3:6]) # respuesta [62 , 246 , 44] - muestra desde el índice 3 hasta el 5
# print(numeros[3:]) # respuesta [62 , 246 , 44 , 643 , 74 , 65 , 1] - muestra desde el índice 3 hasta el último índice
# print(numeros[:5]) # respuesta [1, 4, 5, 62, 246] - muestra desde el índice 0 hasta el índice 4
# print(numeros[::]) # respuesta [1, 4, 5, 62, 246, 44, 643, 74, 65, 1] - muestra todos los elementos

# copia de lista
# lista_original=["tae kwon do" , "karate" , "capoeira" , "judo"]
    # forma incorrecta:
# lista_copia_incorrecta = lista_original # no deben hacerlo así ya que modificarán también el original
    # forma correcta
# lista_copia_correcta = lista_original.copy()


# métodos de lista
# lista_caracteres = ["auto" , "moto" , "camión"]
# lista_numeros = [1 , 4 , 6 , 7 , 46 , 26 , 64]

    # append - añade un elemento al final
# lista_caracteres.append("tractor")
# print(lista_caracteres) # respuesta ["auto" , "moto" , "camión" , "tractor"]
# lista_caracteres.append(53)
# print(lista_numeros) # respuesta [1 , 4 , 6 , 7 , 46 , 26 , 64 , 53]

    # extend - añade varios elementos al final
# lista_caracteres.extend(("cuatriciclo" , "lancha" , "barco"))
# print(lista_caracteres) # respuesta ["auto" , "moto" , "camión" , "cuatriciclo" , "lancha" , "barco"]
# lista_caracteres.extend((43,62,73,86))
# print(lista_numeros) # respuesta [1 , 4 , 6 , 7 , 46 , 26 , 64 , 53 , 64 , 43 , 62 , 73 , 86]

    # insert - añade un elemento en un índice específico sin eliminar el que estaba ubicado incialmente ahí, solo lo corre a la derecha
# lista_caracteres.insert(1,"lancha")
# print(lista_caracteres) # respuesta ["auto" , "lancha" , "moto" , "camión"]

    # remove - eliminar un elemento por el valor
# lista_caracteres.remove("auto")
# print(lista_caracteres) # respuesta ["moto" , "camión"]

    # pop - elimina un elemento por su índice.
# lista_caracteres.pop()
# print(lista_caracteres) # respuesta ["auto" , "moto"]
# lista_caracteres.pop(1)
# print(lista_caracteres) # respuesta ["auto" , "camion"]

    # index - devuelve el índice del elemento encontrado
# print(lista_caracteres.index("auto")) # respuesta 0

    # count - cuenta las veces que está el elemento dentro de la lista
# print(lista_caracteres.count("auto")) # respuesta 1

    # clear - eliminar todos los elementos de la lista
# lista_caracteres.clear()
# print(lista_caracteres) # respuesta []

# funciones en listas

    # len - retorna el largo de la lista
# print(len(lista_caracteres)) # respuesta 3

    # max - retorna el valor máximo del elemento en la lista
# print(max(lista_caracteres)) # respuesta moto

    # min - retorna el valor mínimo del elemetno en la lista
# print(min(lista_caracteres)) # respuesta auto

    # sum - suma todos los elementos de la lista
# print(sum(lista_numeros)) # respuesta 154

    # sort / sorted / reverse - revierte de forma ascendente o descendente modificando la lista original
# lista_caracteres.sort()
# print(lista_caracteres) # respuesta ['auto', 'camión', 'moto'] - orden ascendente
# lista_caracteres.sort(reverse=True)
# print(lista_caracteres) # respuesta ['moto', 'camión', 'auto']
# lista_nueva1 = sorted(lista_caracteres)
# print(lista_nueva1) # respuesta ['auto', 'camión', 'moto']
# lista_nueva2 = sorted(lista_caracteres, reverse = True)
# print(lista_nueva2) # respuesta ['moto', 'camión', 'auto']
tupla_en_lista = [("Juan", 25, 170), ("María", 30, 160), ("Pedro", 20, 170)] # tupla en lista
# resultado = sorted(tupla_en_lista,  key=lambda x: (-x[2], x[1])) # organiza la lista en base al número del índice 2 en cada tupla
# print(resultado) # [('Pedro', 20, 170), ('Juan', 25, 170), ('María', 30, 160)]


    # reversed - ordena los elementos de la lista de forma descendente y no modifica la lista original. 
# lista_invertida = list(reversed(lista_caracteres))
# print(lista_invertida) # respuesta ['camión', 'moto', 'auto']


# tuplas
# creación de tuplas
# tupla = tuple("perro") # método 1
# print(lista) # respuesta ("p","e","r","r","o")
# tupla2 = ("perro", "gato", "caballo", "loro") # método 2
# print(lista2) # respuesta ["perro", "gato", "caballo", "loro"]

# indexación en tupla

# tuplaIndex = ("Hernan", "Laura", "Pedro", "Kevin", "Maria", "Keila")
# print(tuplaIndex[0]) # respuesta "Hernan"
# print(tuplaIndex[1]) # respuesta "Laura"
# print(tuplaIndex[2]) # respuesta "Pedro"
# print(tuplaIndex[3]) # respuesta "Kevin"
# print(tuplaIndex[4]) # respuesta "Maria"
# print(tuplaIndex[5]) # respuesta "Keila"
# print(tuplaIndex[-1]) # respuesta "Keila" - muestra el último elemento de la tupla
# print(tuplaIndex[-2]) # respuesta "Maria" - muestra el anteúltimo elemento de la tupla 

#  segmentación - slicing

# tupla_numeros = (1 , 4 , 5 , 62 , 246 , 44 , 643 , 74 , 65 , 1)
# print(tupla_numeros[3:6]) # respuesta (62 , 246 , 44) - muestra desde el índice 3 hasta el 5
# print(tupla_numeros[3:]) # respuesta (62 , 246 , 44 , 643 , 74 , 65 , 1) - muestra desde el índice 3 hasta el último índice
# print(tupla_numeros[:5]) # respuesta (1, 4, 5, 62, 246) - muestra desde el índice 0 hasta el índice 4
# print(tupla_numeros[::]) # respuesta (1, 4, 5, 62, 246, 44, 643, 74, 65, 1) - muestra todos los elementos


# modificación de tupla
# no se pueden modificar, esa es la diferencia entre lista y tupla


# concatenación +
    
# tupla_concatenada = ("camisa", "pantalón") + ("medias", "zapatillas")
# print(tupla_concatenada) # respuesta ("camisa", "pantalón" ,"medias" , "zapatillas")

# repetición

# print(tupla_numeros*2) # respuesta (1, 4, 5, 62, 246, 44, 643, 74, 65, 1, 1, 4, 5, 62, 246, 44, 643, 74, 65, 1)

# conversion lista - tupla / tupla - lista

# tupla_a_lista = list(["yasmin", "mariana", "tomás", "franco"])
# print(tupla_a_lista) # respuesta ("yasmin", "mariana", "tomás", "franco")
# lista_a_tupla = tuple(("yasmin", "mariana", "tomás", "franco"))
# print(lista_a_tupla) # respuesta ["yasmin", "mariana", "tomás", "franco"]

#  for 

    # for en lista
# lista_for = ["lunes" , "martes" , "miercoles"]

# for dias in lista_for:
#     print(dias)
    # respuesta 
    # lunes
    # martes
    # miercoles

    # for en tupla
# tupla_for = ("jueves" , "viernes" , "sabado" , "domingo")

# for dias in tupla_for:
    # print(dias)
    # respuesta 
    # jueves
    # viernes
    # sabado
    # domingo


