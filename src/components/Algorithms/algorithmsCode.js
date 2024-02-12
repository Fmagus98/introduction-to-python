export const algorithmsSearch = [
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
        "steps": ["1_ Se inicializan dos variables 'low' y 'high' que representan los índices inferior y superior de la sección de la lista en la que se está buscando el elemento.",
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