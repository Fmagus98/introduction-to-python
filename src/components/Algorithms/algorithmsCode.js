export const searchAlgorithms = [
    {
        "id": "1",
        "name": "Búsqueda Lineal (Sequential Search)",
        "description": "La búsqueda lineal es fácil de entender e implementar, pero su eficiencia puede ser limitada, especialmente en listas muy grandes, ya que su tiempo de ejecución es proporcional al tamaño de la lista en el peor de los casos. Sin embargo, es útil cuando la lista no está ordenada o cuando solo necesitas buscar en una lista pequeña.",
        "steps": [
            "1_ La función linear_search recorre la lista arr utilizando un bucle for que itera sobre los índices de la lista, obtenidos mediante range(len(arr)).",
            "2_ En cada iteración, compara el elemento en la posición actual (arr[i]) con el elemento buscado (target).",
            "3_ Si el elemento actual coincide con el elemento buscado, la función retorna el índice (i) donde se encontró el elemento en la lista. Si no se encuentra el elemento, se devuelve -1.",
            "4_ Se proporciona un ejemplo de uso donde se crea una lista arr y se define un elemento a buscar (target). Se llama a la función linear_search con estos argumentos y se imprime el resultado."
        ],
        "code": `
def linear_search(arr, target):
    for i in range(len(arr)):
    if arr[i] == target:
        return i  # Retorna el índice del elemento si se encuentra
    return -1  # Retorna -1 si el elemento no está en la lista
    
# Ejemplo de uso
arr = [1, 5, 8, 12, 16, 20]
target = 12
print(linear_search(arr, target))  # Salida: 3

` },
    {
        "id": "2",
        "name": "Búsqueda Binaria (Binary Search)",
        "description": "Es un algoritmo eficiente para encontrar un elemento específico en una lista ordenada. Funciona dividiendo repetidamente a la mitad la parte de la lista donde podría encontrarse el elemento, hasta reducir el rango de búsqueda a un solo elemento.",
        "steps": [
            "1_ Se inicializan dos variables 'low' y 'high' que representan los índices inferior y superior de la sección de la lista en la que se está buscando el elemento.",
            "2_ Se entra en un bucle while que se ejecuta mientras el índice inferior'low'sea menor o igual al índice superior 'high'.",
            "3_ En cada iteración del bucle, se calcula el índice medio 'mid' de la sección actual.",
            "4_ Se compara el valor en el índice medio 'arr[mid]' con el elemento buscado 'target'.\n - Si son iguales, significa que se ha encontrado el elemento y se devuelve su índice mid.\n - Si el valor en el índice medio es menor que el elemento buscado, se ajusta el índice inferior low para que sea igual a mid + 1, ya que el elemento buscado debe estar en la mitad superior de la sección.\n - Si el valor en el índice medio es mayor que el elemento buscado, se ajusta el índice superior high para que sea igual a mid - 1, ya que el elemento buscado debe estar en la mitad inferior de la sección.",
            "5_ Después de salir del bucle while, si no se encuentra el elemento, la función devuelve -1.",
            "6_ Se proporciona un ejemplo de uso donde se define una lista arr ordenada y un elemento a buscar (target). Se llama a la función 'binary_search' con estos argumentos y se imprime el resultado.",
            "7_ En el ejemplo dado, se espera que la salida sea '3', lo que indica que el elemento '7' se encuentra en la posición '3' de la lista arr."
        ],
        "code": `
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
    
# Asumiendo que arr está ordenado
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
print(binary_search(arr, target))  # Salida: 3

    `
    },
    {
        "id": "3",
        "name": "Búsqueda Interpolada (Interpolation Search)",
        "description": "Es un algoritmo eficiente para encontrar un elemento específico en una lista ordenada. Funciona dividiendo repetidamente a la mitad la parte de la lista donde podría encontrarse el elemento, hasta reducir el rango de búsqueda a un solo elemento.",
        "steps": [
            "1_ Se inicializan dos variables, low y high, que representan los límites de la sección de la lista en la que se está realizando la búsqueda.",
            "2_ Se entra en un bucle while que se ejecuta mientras 'low' es menor o igual a 'high', y mientras el elemento buscado (target) está dentro del rango de valores de la sección de la lista actual.",
            "3_ Se calcula la posición estimada (pos) del elemento buscado utilizando la fórmula de interpolación: \n pos = low + ((target - arr[low]) * (high - low)) // (arr[high] - arr[low]). \n Esta fórmula estima la posición del elemento buscado dentro del rango del arreglo.",
            "4_ Se compara el valor en la posición estimada arr[pos] con el elemento buscado (target).\n - Si son iguales, significa que se ha encontrado el elemento y se devuelve su índice 'pos'. \n - Si el valor en la posición estimada es menor que el elemento buscado, se ajusta el límite inferior (low) para que sea igual a 'pos + 1', ya que el elemento buscado debe estar en la mitad superior de la sección. \n - Si el valor en la posición estimada es mayor que el elemento buscado, se ajusta el límite superior (high) para que sea igual a 'pos - 1', ya que el elemento buscado debe estar en la mitad inferior de la sección.",
            "5_ Después de salir del bucle while, si no se encuentra el elemento, la función devuelve -1.",
            "6_ Se proporciona un ejemplo de uso donde se define una lista 'arr' ordenada y un elemento a buscar (target). Se llama a la función 'interpolation_search' con estos argumentos y se imprime el resultado.",
            "7_ En el ejemplo dado, se espera que la salida sea '3', lo que indica que el elemento '7' se encuentra en la posición '3' de la lista 'arr'."
        ],
        "code": `
def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high and target >= arr[low] and target <= arr[high]:
        # Fórmula para estimar la posición
        pos = low + ((target - arr[low]) * (high - low)) // (arr[high] - arr[low])
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    return -1
    
# Asumiendo que arr está ordenado
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
print(interpolation_search(arr, target))  # Salida: 3

    `
    },
    {
        "id": "4",
        "name": "Búsqueda Exponencial (Exponential Search)",
        "description": "Este algoritmo es una variante de la búsqueda binaria que funciona mejor para listas ordenadas de manera uniforme. Aunque su nombre puede sugerir que es un enfoque de búsqueda rápida, su eficiencia depende del tamaño de la lista y de la ubicación del elemento buscado.",
        "steps": [
            "1_ Inicialización: Comienza verificando si el primer elemento de la lista 'arr' es igual al objetivo 'target'. Si es así, devuelve 0, indicando que el objetivo se encuentra en la primera posición de la lista.",
            "2_ Incremento del tamaño del rango: Si el objetivo no se encuentra en la primera posición, la función incrementa exponencialmente el tamaño del rango hasta encontrar un rango que contenga al menos un elemento mayor o igual al objetivo. Esto se logra en un bucle while donde 'n' se multiplica por 2 hasta que se cumpla una de las siguientes condiciones: 'n' sea mayor o igual a la longitud de la lista 'arr' o el elemento en la posición 'n' de la lista sea mayor que el objetivo.",
            "3_ Búsqueda binaria en el rango identificado: Una vez que se identifica un rango adecuado, se realiza una búsqueda binaria dentro de ese rango utilizando la función 'binary_search'. Esta función recibe como entrada el subarreglo de 'arr' desde el inicio hasta el mínimo entre 'n' y la longitud de 'arr' y el objetivo 'target'.",
            "4_ Retorno del resultado: Si el objetivo se encuentra dentro del rango identificado, se devuelve su índice en la lista 'arr'. Si no se encuentra en el rango, se devuelve -1, indicando que el objetivo no está presente en la lista.",
        ],
        "code": `
def exponential_search(arr, target):
    if arr[0] == target:
        return 0
    
    n = 1
    while n < len(arr) and arr[n] <= target:
        n *= 2
    
    return binary_search(arr[:min(n, len(arr))], target)
    
# Función de búsqueda binaria (puedes reutilizar la anteriormente definida)
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
    
arr = [1, 2, 3, 4, 5]
target = 3
print(exponential_search(arr, target))  # Output: 2
    
    `
    }
]

export const sortingAlgorithms = [
    {
        "id": "1",
        "name": "Burbuja (Bubble sort)",
        "description": "El Bubble Sort (ordenamiento de burbuja) es uno de los algoritmos de ordenamiento más simples y fáciles de entender. Funciona comparando repetidamente los elementos adyacentes de una lista y cambiándolos de posición si están en el orden incorrecto. Este proceso continúa hasta que no se requieren más intercambios, lo que significa que la lista está ordenada.",
        "steps": [
            "1_ Itera sobre todos los elementos de la lista.",
            "2_ En cada iteración externa, los últimos 'i' elementos ya están en su lugar correcto, por lo que se puede reducir el rango de elementos que se comparan y cambian en cada iteración interna.",
            "3_ En cada iteración interna, compara los elementos adyacentes de la lista y los intercambia si el elemento actual es mayor que el siguiente elemento.",
            "4_ Repite las iteraciones externas e internas hasta que no se realicen más intercambios en una iteración completa, lo que indica que la lista está ordenada."
        ],
        "code": `
def bubble_sort(arr):
    n = len(arr)
    # Itera sobre todos los elementos de la lista
    for i in range(n):
        # Last i elementos ya están en su lugar correcto
        for j in range(0, n-i-1):
            # Intercambia si el elemento encontrado es mayor que el siguiente elemento
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    
# Ejemplo de uso
arr = [64, 34, 25, 12, 22, 11, 90]
print("Lista original:", arr)
bubble_sort(arr)
print("Lista ordenada:", arr) #[11, 12, 22, 25, 34, 64, 90]
    
`
    },
    {
        "id": "2",
        "name": "Ordenamiento por Selección (Selection Sort)",
        "description": "El algoritmo de ordenamiento por selección (Selection Sort) es un método simple e intuitivo que divide la lista de elementos en dos partes: una sublista ordenada y otra sublista desordenada. Funciona seleccionando repetidamente el elemento más pequeño de la sublista desordenada y moviéndolo al principio de la sublista ordenada.",
        "steps": [
            "1_ Itera sobre todos los elementos de la lista.",
            "2_ En cada iteración, encuentra el elemento mínimo en la porción no ordenada de la lista.",
            "3_ Intercambia el elemento mínimo encontrado con el primer elemento de la porción no ordenada, colocándolo en su posición correcta en la lista ordenada.",
            "4_ Repite este proceso hasta que todos los elementos estén en su posición correcta."
        ],
        "code": `
def selection_sort(arr):
    n = len(arr)
    # Itera sobre todos los elementos de la lista
    for i in range(n):
        # Encuentra el elemento mínimo en la porción no ordenada de la lista
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Intercambia el elemento mínimo con el primer elemento de la porción no ordenada
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
# Ejemplo de uso
arr = [64, 25, 12, 22, 11]
print("Lista original:", arr)
selection_sort(arr)
print("Lista ordenada:", arr)
    

    `
    },
    {
        "id": "3",
        "name": "Ordenamiento por Inserción (Insertion Sort)",
        "description": "El algoritmo de inserción es eficiente para listas pequeñas o casi ordenadas. Sin embargo, su rendimiento puede disminuir significativamente para listas grandes o completamente desordenadas, ya que tiene una complejidad temporal de O(n^2) en el peor de los casos.",
        "steps": [
            "1_ Itera sobre todos los elementos de la lista, comenzando desde el segundo elemento (índice 1).",
            "2_ En cada iteración, guarda el valor del elemento actual en la variable key para su inserción posterior",
            "3_ Inicializa el índice j como el índice del elemento anterior al valor actual.",
            "4_ Dentro de un bucle while, mueve los elementos mayores que key una posición hacia adelante para hacer espacio para la inserción del valor key.",
            "5_ Inserta el valor key en la posición adecuada en la lista ordenada.",
            "6_ Repite este proceso hasta que todos los elementos estén en su posición correcta.",
        ],
        "code": `
def insertion_sort(arr):
    # Itera sobre todos los elementos de la lista
    for i in range(1, len(arr)):
        key = arr[i]  # Guarda el valor actual para inserción
        j = i - 1  # Inicializa el índice del elemento anterior al valor actual
    
        # Mueve los elementos de arr[0..i-1] que son mayores que key
        # a una posición adelante de su posición actual
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key  # Inserta el valor guardado en la posición adecuada
    
# Ejemplo de uso
arr = [12, 11, 13, 5, 6]
print("Lista original:", arr)
insertion_sort(arr)
print("Lista ordenada:", arr)
        
    `
    },
    {
        "id": "4",
        "name": "Ordenamiento por fusión (Merge sort)",
        "description": "El algoritmo de fusión es eficiente porque divide la lista en mitades logarítmicas y luego fusiona las sublistas en tiempo lineal. Su complejidad temporal es O(n log n) en el peor y en el mejor de los casos, lo que lo hace adecuado para ordenar grandes conjuntos de datos. Además, es estable, lo que significa que conserva el orden relativo de elementos con claves iguales.",
        "steps": [
            "1_ División de la lista: La función divide la lista de entrada en dos mitades aproximadamente iguales, encontrando el punto medio 'mid'. Esto se hace utilizando el operador de división entera '//'.",
            "2_ Ordenamiento recursivo: Llama recursivamente a merge_sort en las dos mitades de la lista, L y R, para ordenarlas.",
            "3_ Fusión de sublistas: Después de que las dos mitades estén ordenadas, fusiona las sublistas ordenadas 'L' y 'R' en una sola lista ordenada 'arr'. Utiliza tres índices 'i', 'j' y 'k' para rastrear los elementos de las sublistas.",
            "4_ Comparación y fusión: Itera sobre las sublistas 'L' y 'R' simultáneamente. En cada paso, compara los elementos actuales de 'L' y 'R', y coloca el elemento más pequeño en la posición 'k' de 'arr'. Incrementa los índices 'i', 'j' o 'k' según corresponda.",
            "5_ Manejo de elementos sobrantes: Después de que una de las sublistas se haya agotado, copia los elementos restantes de la otra sublista a 'arr'.",
            "6_ Ejemplo de uso: Se proporciona un ejemplo de uso al final del código, donde se crea una lista desordenada 'arr', se aplica 'merge_sort' para ordenarla y luego se imprime la lista ordenada."
        ],
        "code": `
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2  # Encuentra el punto medio de la lista
        L = arr[:mid]        # Divide la lista en dos mitades
        R = arr[mid:]
    
        merge_sort(L)        # Ordena la primera mitad de la lista
        merge_sort(R)        # Ordena la segunda mitad de la lista
    
        i = j = k = 0
    
        # Fusiona las dos sublistas en una lista ordenada
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
    
        # Asegúrate de que no queden elementos sin fusionar en L
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
    
        # Asegúrate de que no queden elementos sin fusionar en R
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    
# Ejemplo de uso
arr = [12, 11, 13, 5, 6, 7]
print("Lista original:", arr)
merge_sort(arr)
print("Lista ordenada:", arr)
    
    `
    }
    ,
    {
        "id": "5",
        "name": "Ordenamiento Rápido (Quick Sort)",
        "description": "El Bubble Sort (ordenamiento de burbuja) es uno de los algoritmos de ordenamiento más simples y fáciles de entender. Funciona comparando repetidamente los elementos adyacentes de una lista y cambiándolos de posición si están en el orden incorrecto. Este proceso continúa hasta que no se requieren más intercambios, lo que significa que la lista está ordenada.",
        "steps": [
            "1_ Caso Base: La función quick_sort primero verifica si la longitud de la lista arr es menor o igual a 1. Si es así, devuelve la lista sin cambios, ya que una lista con 0 o 1 elementos ya está ordenada.",
            "2_ Elección del Pivote: Si la lista tiene más de un elemento, la función elige el primer elemento pivot como el pivote para dividir la lista.",
            "3_ División de la Lista: La función divide la lista en dos sublistas: una lista less_than_pivot que contiene todos los elementos menores o iguales que el pivote, y otra lista greater_than_pivot que contiene todos los elementos mayores que el pivote.",
            "4_ Llamadas Recursivas: La función realiza llamadas recursivas a quick_sort en las sublistas less_than_pivot y greater_than_pivot. Esto ordena cada sublista utilizando el mismo proceso.",
            "5_ Combinación de Resultados: Finalmente, la función combina las sublistas ordenadas less_than_pivot, el pivote y greater_than_pivot en una sola lista ordenada. Se devuelve esta lista ordenada como resultado.",
        ],
        "code": `
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        less_than_pivot = [x for x in arr[1:] if x <= pivot]
        greater_than_pivot = [x for x in arr[1:] if x > pivot]
        return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)
    
# Ejemplo de uso
arr = [12, 11, 13, 5, 6, 7]
print("Lista original:", arr)
sorted_arr = quick_sort(arr)
print("Lista ordenada:", sorted_arr)
    
` },
    {
        "id": "6",
        "name": "Ordenamiento por montones (Heap sort)",
        "description": "El algoritmo de ordenamiento Heap Sort es altamente eficiente para grandes conjuntos de datos debido a su complejidad temporal de O(n log n) tanto en el peor caso como en el caso promedio. Esta eficiencia lo convierte en una opción ideal para manejar grandes volúmenes de datos.",
        "steps": [
            "1_ Itera sobre todos los elementos de la lista.",
            "2_ En cada iteración, encuentra el elemento mínimo en la porción no ordenada de la lista.",
            "3_ Intercambia el elemento mínimo encontrado con el primer elemento de la porción no ordenada, colocándolo en su posición correcta en la lista ordenada.",
            "4_ Repite este proceso hasta que todos los elementos estén en su posición correcta."
        ],
        "code": `
def heapify(arr, n, i):
    largest = i  # Inicializa el nodo raíz como el más grande
    l = 2 * i + 1  # Índice del hijo izquierdo
    r = 2 * i + 2  # Índice del hijo derecho
    
    # Comprueba si el hijo izquierdo existe y es mayor que el nodo raíz
    if l < n and arr[l] > arr[largest]:
        largest = l
    
    # Comprueba si el hijo derecho existe y es mayor que el nodo raíz o el hijo izquierdo
    if r < n and arr[r] > arr[largest]:
        largest = r
    
    # Si el nodo raíz no es el más grande, intercambia con el más grande y sigue heapificando hacia abajo
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
    
    
def heap_sort(arr):
    n = len(arr)
    
    # Construye un max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extrae elementos uno por uno del heap
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # Intercambia el elemento máximo con el último elemento
        heapify(arr, i, 0)  # Heapify la raíz reducida
    
# Ejemplo de uso
arr = [12, 11, 13, 5, 6, 7]
print("Lista original:", arr)
heap_sort(arr)
print("Lista ordenada:", arr)
    

`
    },
    {
        "id": "7",
        "name": "Ordenamiento por conteo (Counting sort)",
        "description": "Este algoritmo cuenta el número de elementos distintos en la lista y los organiza en función de su frecuencia de aparición.",
        "steps": [
            "1_ Encontrar el rango de valores en el array: El algoritmo comienza encontrando el valor máximo y mínimo en el array para determinar el rango de elementos presentes.",
            "2_ Inicializar un array de conteo: Se crea un array de conteo con ceros, donde cada índice representa un valor en el rango de elementos.",
            "3_ Contabilizar la frecuencia de cada elemento: Se recorre el array de entrada y se incrementa el conteo de cada elemento en el array de conteo.",
            "4_ Reconstruir el array ordenado: Se itera sobre el array de conteo y se reconstruye el array original en orden ascendente utilizando la información del array de conteo. Se actualiza el índice de forma adecuada para manejar elementos con frecuencia mayor que uno.",
        ],
        "code": `
def counting_sort(arr):
    # Encuentra el rango de valores en el array
    max_value = max(arr)
    min_value = min(arr)
    range_of_elements = max_value - min_value + 1
    
    # Inicializa un array de conteo con ceros
    count = [0] * range_of_elements
    
    # Contabiliza la frecuencia de cada elemento
    for num in arr:
        count[num - min_value] += 1
    
    # Reconstruye el array ordenado
    index = 0
    for i in range(range_of_elements):
        for j in range(count[i]):
            arr[index] = i + min_value
            index += 1
    
# Ejemplo de uso
arr = [4, 2, 2, 8, 3, 3, 1]
print("Lista original:", arr)
counting_sort(arr)
print("Lista ordenada:", arr)
    

`
    },
    {
        "id": "8",
        "name": "Radix (Radix sort)",
        "description": "Este algoritmo organiza los elementos de la lista en base al valor de sus dígitos individuales, comenzando por el dígito menos significativo y avanzando hasta el más significativo.",
        "steps": [
            "1_ Encontrar el número máximo: Se encuentra el número máximo en la lista para determinar el número de dígitos.",
            "2_ Aplicar counting sort: Se aplica counting_sort para cada dígito, comenzando por el dígito menos significativo (exp = 1), hasta que se haya procesado el dígito más significativo de todos los números.",
            "3_ Inicialización: Se inicializan listas para almacenar la salida (output) y el conteo de cada dígito (count).",
            "4_ Conteo de frecuencia: Se itera sobre los elementos de arr y se cuenta la frecuencia de cada dígito en el rango dado.",
            "5_ Modificación del conteo: Se modifica el conteo para tener la posición real de cada dígito en la salida.",
            "6_ Construcción de la lista de salida: Se construye la lista de salida utilizando los conteos acumulados.",
            "7_ Copia de la lista de salida: Se copia la lista de salida a la lista original arr."
        ],
        "code": `
def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # Contar la frecuencia de los dígitos en el rango dado
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    # Modificar el conteo para tener la posición real de este dígito en la salida
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Construir la lista de salida
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    # Copiar la lista de salida a la lista original
    for i in range(n):
        arr[i] = output[i]


def radix_sort(arr):
    # Encontrar el número máximo para determinar el número de dígitos
    max_value = max(arr)
    
    # Aplicar counting sort para cada dígito, comenzando por el dígito menos significativo
    exp = 1
    while max_value // exp > 0:
        counting_sort(arr, exp)
        exp *= 10


# Ejemplo de uso
arr = [170, 45, 75, 90, 802, 24, 2, 66]
print("Lista original:", arr)
radix_sort(arr)
print("Lista ordenada:", arr)


`
    }
]

export const graphAlgorithms =
    [
        {
            "id": "1",
            "name": "Búsqueda en profundidad (DFS)",
            "description": "La Búsqueda en Profundidad (DFS) es un algoritmo utilizado para recorrer o buscar en un grafo de manera recursiva. Comienza en un nodo inicial y explora tanto como sea posible a lo largo de cada rama antes de retroceder.",
            "steps": [
                "1_ Marcar el nodo actual como visitado.",
                "2_ Para cada nodo vecino no visitado del nodo actual, llamar recursivamente a DFS en ese nodo.",
                "3_ Repetir el paso 2 hasta que se hayan visitado todos los nodos alcanzables desde el nodo inicial."
            ],
            "code": `
def dfs(graph, node, visited):
    visited[node] = True
    print("Visitando nodo:", node)

    for neighbor in graph[node]:
        if not visited[neighbor]:
            dfs(graph, neighbor, visited)
# Ejemplo de uso
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

visited = {node: False for node in graph}
dfs(graph, 'A', visited)
`
        },
        {
            "id": "2",
            "name": "Búsqueda en anchura (BFS)",
            "description": "La Búsqueda en Anchura (BFS) es otro algoritmo para recorrer o buscar en un grafo. Comienza en un nodo inicial y explora todos los nodos vecinos antes de pasar a los nodos vecinos de estos nodos.",
            "steps": [
                "1_ Marcar el nodo inicial como visitado y agregarlo a la cola.",
                "2_ Mientras la cola no esté vacía, sacar un nodo de la cola.",
                "3_ Para cada vecino no visitado de ese nodo, marcarlo como visitado y agregarlo a la cola.",
                "4_ Repetir los pasos 2 y 3 hasta que la cola esté vacía."
            ],
            "code": `
from collections import deque

def bfs(graph, start):
    visited = {node: False for node in graph}
    queue = deque([start])
    visited[start] = True

    while queue:
        node = queue.popleft()
        print("Visitando nodo:", node)

        for neighbor in graph[node]:
            if not visited[neighbor]:
                queue.append(neighbor)
                visited[neighbor] = True

# Ejemplo de uso
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

bfs(graph, 'A')
`
        },
        {
            "id": "3",
            "name": "Algoritmo de Dijkstra",
            "description": "El Algoritmo de Dijkstra se utiliza para encontrar el camino más corto desde un nodo inicial a todos los demás nodos en un grafo ponderado y dirigido.",
            "steps": [
                "1_ Inicializar un diccionario de distancias con el nodo inicial como 0 y los demás nodos como infinito.",
                "2_ Inicializar un conjunto de nodos no visitados.",
                "3_ Mientras haya nodos no visitados:\n- Seleccionar el nodo no visitado con la menor distancia.\n- Marcarlo como visitado.\n- Para cada vecino no visitado del nodo seleccionado, actualizar su distancia si es menor que la distancia actual."
            ],
            "code": `
import heapq

def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    visited = set()
    heap = [(0, start)]

    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_node in visited:
            continue
        visited.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    
    return distances
        
# Ejemplo de uso
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'C': 2, 'D': 1},
    'C': {'A': 3, 'B': 2, 'D': 3},
    'D': {'B': 1, 'C': 3}
}

distances = dijkstra(graph, 'A')
print("Distancias más cortas desde A:", distances)
`
        },
        {
            "id": "4",
            "name": "Algoritmo de Bellman-Ford",
            "description": "El Algoritmo de Bellman-Ford se utiliza para encontrar el camino más corto desde un nodo inicial a todos los demás nodos en un grafo ponderado y dirigido, incluso cuando hay aristas de peso negativo.",
            "steps": [
                "1_ Inicializar un diccionario de distancias con el nodo inicial como 0 y los demás nodos como infinito.",
                "2_ Para cada arista del grafo, relajar la arista (actualizar la distancia si es menor que la actual).",
                "3_ Repetir el paso 2 (n-1) veces, donde n es el número de nodos.",
                "4_ Verificar si hay un ciclo de peso negativo."
            ],
            "code": `
def bellman_ford(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
        
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor, weight in graph[node].items():
                if distances[node] + weight < distances[neighbor]:
                    distances[neighbor] = distances[node] + weight
        
    # Verificar ciclos de peso negativo
    for node in graph:
        for neighbor, weight in graph[node].items():
            if distances[node] + weight < distances[neighbor]:
                return "El grafo contiene un ciclo de peso negativo."
                        
    return distances
        
# Ejemplo de uso
graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'C': 3, 'D': 2, 'E': 2},
    'C': {},
    'D': {'B': 1, 'C': 5},
    'E': {'D': -3}
}
    
distances = bellman_ford(graph, 'A')
print("Distancias más cortas desde A:", distances)
`
        },
        {
            "id": "5",
            "name": "Algoritmo de Floyd-Warshall",
            "description": "El Algoritmo de Floyd-Warshall se utiliza para encontrar los caminos más cortos entre todos los pares de nodos en un grafo ponderado y dirigido o no dirigido. Es eficiente para grafos pequeños a medianos, pero no es adecuado para grafos muy grandes debido a su complejidad temporal de O(n^3).",
            "steps": [
                "1_ Inicializar una matriz de distancias con las distancias entre cada par de nodos.",
                "2_ Para cada par de nodos (i, j), considerar todos los nodos intermedios k y actualizar la distancia (i, j) si la distancia (i, k) + (k, j) es menor que la distancia actual (i, j)."
            ],
            "code": `
def floyd_warshall(graph):
    nodes = list(graph.keys())
    n = len(nodes)
    distances = {i: {j: float('infinity') for j in nodes} for i in nodes}
        
    for node in nodes:
        distances[node][node] = 0
            for neighbor, weight in graph[node].items():
                distances[node][neighbor] = weight
    
    for k in nodes:
        for i in nodes:
            for j in nodes:
                distances[i][j] = min(distances[i][j], distances[i][k] + distances[k][j])
        
    return distances
        
# Ejemplo de uso
graph = {
    'A': {'B': 3, 'C': 8, 'E': -4},
    'B': {'D': 1, 'E': 7},
    'C': {'B': 4},
    'D': {'A': 2, 'C': -5},
    'E': {'D': 6}
}

distances = floyd_warshall(graph)
print("Matriz de distancias entre todos los pares de nodos:")
for node1 in distances:
    for node2 in distances[node1]:
        print(f"{node1} -> {node2}: {distances[node1][node2]}")
`
        },
        {
            "id": "6",
            "name": "Algoritmo de Kruskal",
            "description": "El Algoritmo de Kruskal se utiliza para encontrar el árbol de expansión mínima de un grafo ponderado y no dirigido. Comienza con un conjunto de aristas vacío y va agregando aristas en orden de menor a mayor peso, evitando la formación de ciclos.",
            "steps": [
                "1_ Ordenar todas las aristas del grafo en orden ascendente según su peso.",
                "2_ Inicializar un bosque (conjunto de árboles) vacío.",
                "3_ Para cada arista en orden de menor a mayor peso:",
                "4_ Si agregar la arista al bosque no forma un ciclo, agregarla al bosque."
            ],
            "code": `
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
            
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
            
    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            if self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            else:
                self.parent[root_x] = root_y
                if self.rank[root_x] == self.rank[root_y]:
                    self.rank[root_y] += 1

def kruskal(graph):
    edges = []
    for node in graph:
        for neighbor, weight in graph[node].items():
            edges.append((weight, node, neighbor))
        
    edges.sort()
    uf = UnionFind(len(graph))
    mst = []
        
    for weight, node1, node2 in edges:
        if uf.find(node1) != uf.find(node2):
            uf.union(node1, node2)
            mst.append((node1, node2, weight))
            
    return mst
        
# Ejemplo de uso
graph = {
    'A': {'B': 7, 'D': 5},
    'B': {'A': 7, 'C': 8, 'D': 9, 'E': 7},
    'C': {'B': 8, 'E': 5},
    'D': {'A': 5, 'B': 9, 'E': 15, 'F': 6},
    'E': {'B': 7, 'C': 5, 'D': 15, 'F': 8},
    'F': {'D': 6, 'E': 8}
}
        
minimum_spanning_tree = kruskal(graph)
print("Árbol de expansión mínima (Kruskal):")
for edge in minimum_spanning_tree:
    print(f"{edge[0]} -- {edge[1]}: {edge[2]}")
`
        },
        {
            "id": "7",
            "name": "Algoritmo de Prim",
            "description": "El Algoritmo de Prim se utiliza para encontrar el árbol de expansión mínima de un grafo ponderado y no dirigido. Comienza con un nodo inicial y va agregando la arista más corta que conecta el árbol actual con un nodo no incluido.",
            "steps": [
                "1_ Inicializar un conjunto de nodos no visitados y una lista de aristas.",
                "2_ Inicializar un diccionario de distancias con el nodo inicial como 0 y los demás nodos como infinito.",
                "3_ Mientras haya nodos no visitados:",
                "4_ Seleccionar el nodo no visitado con la menor distancia.",
                "5_ Marcarlo como visitado y agregar su arista más corta al árbol de expansión."
            ],
            "code": `
import heapq

def prim(graph, start):
    mst = []
    visited = set()
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    heap = [(0, start)]

    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_node in visited:
            continue
        visited.add(current_node)

        if current_node != start:
            mst.append((current_node, graph[current_node]['parent'], current_distance))
        
        for neighbor, weight in graph[current_node].items():
            if neighbor not in visited and weight < distances[neighbor]:
                distances[neighbor] = weight
                heapq.heappush(heap, (weight, neighbor))
                graph[neighbor]['parent'] = current_node
        
    return mst

# Ejemplo de uso
graph = {
    'A': {'B': 2, 'D': 3},
    'B': {'A': 2, 'D': 1, 'E': 1},
    'C': {'D': 2, 'E': 4, 'F': 5},
    'D': {'A': 3, 'B': 1, 'C': 2, 'E': 1},
    'E': {'B': 1, 'C': 4, 'D': 1, 'F': 1},
    'F': {'C': 5, 'E': 1}
}

minimum_spanning_tree = prim(graph, 'A')
print("Árbol de expansión mínima (Prim):")
for edge in minimum_spanning_tree:
    print(f"{edge[0]} -- {edge[1]}: {edge[2]}")
`
        }
    ]

export const treeAlgorithms = [
        {
            "id": "1",
            "name": "Recorrido en orden",
            "description": "El recorrido en orden es un algoritmo que visita los nodos de un árbol binario en el siguiente orden: primero el nodo izquierdo, luego el nodo raíz y finalmente el nodo derecho. Es útil para obtener los elementos de un árbol ordenados de menor a mayor.",
            "steps": [
                "1_ Si el nodo actual no está vacío, realizar recorrido en orden del subárbol izquierdo.",
                "2_ Visitar el nodo actual e imprimir su valor.",
                "3_ Realizar recorrido en orden del subárbol derecho."
            ],
            "code": `
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
    
def inorder_traversal(root):
    result = []
    def inorder_helper(node):
        if node:
            inorder_helper(node.left)
            result.append(node.value)
            inorder_helper(node.right)
    inorder_helper(root)
    return result
    
# Ejemplo de uso
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
print("Recorrido en orden:", inorder_traversal(root))
`
        },
        {
            "id": "2",
            "name": "Recorrido en preorden",
            "description": "El recorrido en preorden es un algoritmo que visita los nodos de un árbol binario en el siguiente orden: primero el nodo raíz, luego el nodo izquierdo y finalmente el nodo derecho.",
            "steps": [
                "1_ Visitar el nodo actual e imprimir su valor.",
                "2_ Si el nodo actual tiene un hijo izquierdo, realizar recorrido en preorden del subárbol izquierdo.",
                "3_ Si el nodo actual tiene un hijo derecho, realizar recorrido en preorden del subárbol derecho."
            ],
            "code": `
def preorder_traversal(root):
    result = []
    def preorder_helper(node):
        if node:
            result.append(node.value)
            preorder_helper(node.left)
            preorder_helper(node.right)
    preorder_helper(root)
    return result
    
# Ejemplo de uso
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
print("Recorrido en preorden:", preorder_traversal(root))
`
        },
        {
            "id": "3",
            "name": "Recorrido en postorden",
            "description": "El recorrido en postorden es un algoritmo que visita los nodos de un árbol binario en el siguiente orden: primero el nodo izquierdo, luego el nodo derecho y finalmente el nodo raíz.",
            "steps": [
                "1_ Si el nodo actual tiene un hijo izquierdo, realizar recorrido en postorden del subárbol izquierdo.",
                "2_ Si el nodo actual tiene un hijo derecho, realizar recorrido en postorden del subárbol derecho.",
                "3_ Visitar el nodo actual e imprimir su valor."
            ],
            "code": `
def postorder_traversal(root):
    result = []
    def postorder_helper(node):
        if node:
            postorder_helper(node.left)
            postorder_helper(node.right)
            result.append(node.value)
        postorder_helper(root)
        return result

# Ejemplo de uso
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
print("Recorrido en postorden:", postorder_traversal(root))
`
        },
        {
            "id": "4",
            "name": "Árbol de búsqueda binaria",
            "description": "Un árbol de búsqueda binaria es una estructura de datos de árbol donde cada nodo tiene a lo sumo dos hijos, llamados hijo izquierdo y hijo derecho, y donde para cada nodo, todos los elementos en el subárbol izquierdo son menores o iguales al nodo, y todos los elementos en el subárbol derecho son mayores al nodo.",
            "steps": [
                "1_ Insertar un nuevo nodo:",
                "   - Si el árbol está vacío, el nuevo nodo se convierte en la raíz.",
                "   - Si el valor del nodo es menor que el valor del nodo actual, se mueve al subárbol izquierdo.",
                "   - Si el valor del nodo es mayor que el valor del nodo actual, se mueve al subárbol derecho.",
                "2_ Buscar un valor en el árbol:",
                "   - Comenzando desde la raíz, se compara el valor con el valor del nodo actual.",
                "   - Si es igual, se ha encontrado el valor.",
                "   - Si es menor, se busca en el subárbol izquierdo.",
                "   - Si es mayor, se busca en el subárbol derecho.",
                "3_ Eliminar un nodo:",
                "   - Si el nodo a eliminar es una hoja, simplemente se elimina.",
                "   - Si el nodo tiene un hijo, el hijo reemplaza al nodo.",
                "   - Si el nodo tiene dos hijos, se encuentra el sucesor inmediato (el menor valor en el subárbol derecho) y se reemplaza con el nodo a eliminar."
            ],
            "code": `
class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BinarySearchTree(value)
            else:
                self.left.insert(value)
        elif value > self.value:
            if self.right is None:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)

    def search(self, value):
        if value == self.value:
            return True
        elif value < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(value)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(value)

    def delete(self, value):
        if value < self.value:
            if self.left:
                self.left = self.left.delete(value)
        elif value > self.value:
            if self.right:
                self.right = self.right.delete(value)
        else:
            if self.left is None:
                return self.right
            elif self.right is None:
                return self.left
            else:
                min_value = self.right.find_min()
                self.value = min_value
                self.right = self.right.delete(min_value)
            return self

    def find_min(self):
        current = self
        while current.left is not None:
            current = current.left
            return current.value

# Ejemplo de uso
bst = BinarySearchTree(50)
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)

print("Árbol de búsqueda binaria:")
print("Buscar 40:", bst.search(40))
print("Buscar 90:", bst.search(90))
print("Eliminar 30:")
bst.delete(30)
print("Buscar 30:", bst.search(30))
`
        },
        {
            "id": "5",
            "name": "Árbol AVL",
            "description": "Un árbol AVL es un árbol de búsqueda binaria balanceado en el que la diferencia de alturas entre el subárbol izquierdo y el subárbol derecho de cualquier nodo es como máximo 1. Esto asegura que la altura del árbol sea logarítmica y mejora el tiempo de búsqueda, inserción y eliminación en comparación con un árbol binario de búsqueda estándar.",
            "steps": [
                "1_ Insertar un nuevo nodo:",
                "   - Se inserta el nodo como en un árbol de búsqueda binaria estándar.",
                "   - Después de la inserción, se verifica el equilibrio de los nodos en el camino desde el nodo insertado hasta la raíz.",
                "   - Si la altura del subárbol izquierdo es mayor en más de 1 unidad que la altura del subárbol derecho, se realiza una rotación a la derecha.",
                "   - Si la altura del subárbol derecho es mayor en más de 1 unidad que la altura del subárbol izquierdo, se realiza una rotación a la izquierda.",
                "2_ Eliminar un nodo:",
                "   - Se elimina el nodo como en un árbol de búsqueda binaria estándar.",
                "   - Después de la eliminación, se verifica el equilibrio de los nodos en el camino desde el nodo eliminado hasta la raíz."
            ],
            "code": `
class TreeNodeAVL:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1
        
class AVLTree:
    def getHeight(self, node):
        if not node:
            return 0
        return node.height
        
    def getBalance(self, node):
        if not node:
            return 0
        return self.getHeight(node.left) - self.getHeight(node.right)
        
    def rightRotate(self, y):
        x = y.left
        T = x.right
        
        # Realiza la rotación
        x.right = y
        y.left = T
        
        # Actualiza alturas
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))
        x.height = 1 + max(self.getHeight(x.left), self.getHeight(x.right))
        
        return x
    
    def leftRotate(self, x):
        y = x.right
        T = y.left
        
        # Realiza la rotación
        y.left = x
        x.right = T
        
        # Actualiza alturas
        x.height = 1 + max(self.getHeight(x.left), self.getHeight(x.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))
        
        return y

    def insert(self, root, value):
        if not root:
            return TreeNodeAVL(value)
        elif value < root.value:
            root.left = self.insert(root.left, value)
        else:
            root.right = self.insert(root.right, value)
            
        # Actualiza la altura del nodo actual
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))
            
        # Obtén el factor de equilibrio del nodo
        balance = self.getBalance(root)
            
        # Caso izquierda izquierda
        if balance > 1 and value < root.left.value:
            return self.rightRotate(root)
        
        # Caso derecha derecha
        if balance < -1 and value > root.right.value:
            return self.leftRotate(root)
        
        # Caso izquierda derecha
        if balance > 1 and value > root.left.value:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)
        
        # Caso derecha izquierda
        if balance < -1 and value < root.right.value:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)
        
        return root

    def minValueNode(self, root):
        current = root
        while current.left is not None:
            current = current.left
        return current

    def delete(self, root, value):
        if not root:
            return root
            
        # Elimina como en un árbol de búsqueda binaria estándar
        if value < root.value:
            root.left = self.delete(root.left, value)
        elif value > root.value:
            root.right = self.delete(root.right, value)
        else:
        # Nodo con uno o ningún hijo
            if root.left is None:
                temp = root.right
                root = None
                return temp
            elif root.right is None:
                temp = root.left
                root = None
                return temp
            
            # Nodo con dos hijos: encuentra el sucesor inmediato
            temp = self.minValueNode(root.right)
            root.value = temp.value
            root.right = self.delete(root.right, temp.value)
            
        # Si el árbol tenía solo un nodo
        if root is None:
            return root
            
        # Actualiza la altura del nodo actual
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))
            
        # Obtén el factor de equilibrio del nodo
        balance = self.getBalance(root)
            
        # Caso izquierda izquierda
        if balance > 1 and self.getBalance(root.left) >= 0:
            return self.rightRotate(root)
            
        # Caso izquierda derecha
        if balance > 1 and self.getBalance(root.left) < 0:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)
            
        # Caso derecha derecha
        if balance < -1 and self.getBalance(root.right) <= 0:
            return self.leftRotate(root)
            
        # Caso derecha izquierda
        if balance < -1 and self.getBalance(root.right) > 0:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)
        
        return root

# Ejemplo de uso
avl = AVLTree()
root = None
values = [9, 5, 10, 0, 6, 11, -1, 1, 2]
for value in values:
root = avl.insert(root, value)

print("Árbol AVL después de inserciones:")
print("Recorrido en inorden:", inorder_traversal(root))

root = avl.delete(root, 10)
print("Árbol AVL después de eliminar 10:")
print("Recorrido en inorden:", inorder_traversal(root))
`
        },
        {
            "id": "6",
            "name": "Árbol B",
            "description": "Un árbol B es un árbol de búsqueda balanceado donde cada nodo puede tener un número variable de claves y subárboles. Se utiliza principalmente en sistemas de bases de datos y sistemas de archivos para proporcionar una estructura eficiente para la búsqueda y la recuperación de datos.",
            "steps": [
                "1_ Insertar un nuevo valor:",
                "   - Comenzando desde la raíz, encuentra el nodo adecuado para insertar el nuevo valor.",
                "   - Si el nodo tiene espacio, simplemente inserta el valor y mantiene el orden dentro del nodo.",
                "   - Si el nodo está lleno, divide el nodo en dos y redistribuye las claves y los punteros de manera que se mantenga el orden.",
                "2_ Eliminar un valor:",
                "   - Encuentra el valor a eliminar y el nodo que lo contiene.",
                "   - Si el nodo es una hoja, simplemente elimina el valor.",
                "   - Si el nodo no es una hoja, encuentra el predecesor inmediato o el sucesor inmediato y lo reemplaza."
            ],
            "code": `
# Implementación de un Árbol B omitida por brevedad, debido a su complejidad.
# Aquí se proporciona un ejemplo de uso con una librería o implementación existente.
    
# Ejemplo de uso con la librería 'bintrees'
from bintrees import FastRBTree
    
# Crear un árbol B
btree = FastRBTree()
    
# Insertar valores
btree[3] = "Tres"
btree[1] = "Uno"
btree[5] = "Cinco"
btree[2] = "Dos"
btree[4] = "Cuatro"
    
# Obtener elementos ordenados
print("Elementos ordenados:", list(btree.items()))
    
# Eliminar un valor
del btree[2]
print("Elementos después de eliminar 2:", list(btree.items()))
`
        },
        {
            "id": "7",
            "name": "Árbol B+",
            "description": "Un árbol B+ es una variante del árbol B en el que todas las claves se encuentran en las hojas, mientras que los nodos internos solo contienen claves para guiar la búsqueda. Esto mejora el rendimiento en consultas que requieren recorrer varias claves contiguas, como en bases de datos.",
            "steps": [
                "1_ Insertar un nuevo valor:",
                "   - Similar al árbol B, encuentra el nodo adecuado para insertar el nuevo valor.",
                "   - Si el nodo tiene espacio, simplemente inserta el valor y mantiene el orden dentro del nodo.",
                "   - Si el nodo está lleno, divide el nodo en dos y redistribuye las claves y los punteros de manera que se mantenga el orden.",
                "   - Si la hoja está llena, crea un nuevo nodo hoja y actualiza los punteros de los nodos internos para apuntar al nuevo nodo.",
                "2_ Eliminar un valor:",
                "   - Similar al árbol B, encuentra el valor a eliminar y el nodo que lo contiene.",
                "   - Si el nodo es una hoja, simplemente elimina el valor.",
                "   - Si el nodo no es una hoja, encuentra el predecesor inmediato o el sucesor inmediato y lo reemplaza."
            ],
            "code": `
# Implementación de un Árbol B+ omitida por brevedad, debido a su complejidad.
# Aquí se proporciona un ejemplo de uso con una librería o implementación existente.
    
# Ejemplo de uso con la librería 'bplustree'
from bplustree import BPlusTree
    
# Crear un árbol B+
bplustree = BPlusTree(order=3)
    
# Insertar valores
bplustree[3] = "Tres"
bplustree[1] = "Uno"
bplustree[5] = "Cinco"
bplustree[2] = "Dos"
bplustree[4] = "Cuatro"
    
# Obtener elementos ordenados
print("Elementos ordenados:", list(bplustree.items()))
    
# Eliminar un valor
del bplustree[2]
print("Elementos después de eliminar 2:", list(bplustree.items()))
`
        },
        {
            "id": "8",
            "name": "Árbol de segmentos",
            "description": "Un árbol de segmentos es una estructura de datos que permite consultar y actualizar un conjunto de valores en un rango específico de índices en un arreglo. Es útil para realizar operaciones como encontrar la suma, el mínimo o el máximo en un rango de elementos de un arreglo en tiempo logarítmico.",
            "steps": [
                "1_ Construcción del árbol de segmentos:",
                "   - Divide el arreglo en segmentos y construye un árbol binario completo con los segmentos como hojas.",
                "   - Cada nodo interno representa la unión de sus dos hijos.",
                "   - Los nodos contienen información sobre el rango que representan.",
                "2_ Consulta de un rango:",
                "   - Comienza en la raíz del árbol y desciende según el rango de consulta.",
                "   - Si el rango del nodo actual está completamente dentro del rango de consulta, se devuelve el valor almacenado en el nodo.",
                "   - Si el rango del nodo actual se cruza con el rango de consulta, se divide y se continúa la búsqueda en los nodos hijos.",
                "   - Se combina la información de los nodos hijos según sea necesario para responder a la consulta.",
                "3_ Actualización de un valor:",
                "   - Similar a la consulta, se desciende en el árbol hasta llegar al nodo que contiene el índice a actualizar.",
                "   - Se actualiza el valor en el nodo y se actualizan los valores de los nodos padres según sea necesario para mantener la estructura del árbol de segmentos."
            ],
            "code": `
class SegmentTree:
    def __init__(self, arr):
        self.arr = arr
        self.tree = [0] * (4 * len(arr))
        self.build(0, 0, len(arr) - 1)
    
    def build(self, node, start, end):
        if start == end:
            self.tree[node] = self.arr[start]
        else:
            mid = (start + end) // 2
            self.build(2 * node + 1, start, mid)
            self.build(2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
            
        mid = (start + end) // 2
        left_sum = self.query(2 * node + 1, start, mid, l, r)
        right_sum = self.query(2 * node + 2, mid + 1, end, l, r)
        return left_sum + right_sum
        
    def update(self, node, start, end, idx, val):
        if start == end:
            self.arr[idx] = val
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if start <= idx <= mid:
                self.update(2 * node + 1, start, mid, idx, val)
            else:
                self.update(2 * node + 2, mid + 1, end, idx, val)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]
    
# Ejemplo de uso
arr = [1, 3, 5, 7, 9, 11]
segment_tree = SegmentTree(arr)

    # Consulta de un rango
print("Suma en el rango [1, 4]:", segment_tree.query(0, 0, len(arr) - 1, 1, 4))

# Actualización de un valor
segment_tree.update(0, 0, len(arr) - 1, 2, 6)
print("Suma en el rango [1, 4] después de actualizar el valor en el índice 2 a 6:", segment_tree.query(0, 0, len(arr) - 1, 1, 4))
`
        }
]