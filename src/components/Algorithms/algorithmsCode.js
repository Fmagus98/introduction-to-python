export const SearchAlgorithms = [
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

export const graphAlgorithms = [
    {
        "id": "1",
        "name": "Búsqueda en profundidad (Depth-First Search, DFS)",
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