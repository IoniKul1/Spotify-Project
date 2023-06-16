def calcular_promedio(lista):
    if len(lista) == 0:
        return 0  # Manejar caso especial cuando la lista está vacía

    suma = sum(lista)
    promedio = suma / len(lista)
    return promedio

# Ejemplo de uso
valores = [49.23333 , 49.23334]
promedio = calcular_promedio(valores)
print(f"El promedio de la lista {valores} es: {promedio}")
