import pandas as pd
# Cargar el archivo CSV
data = pd.read_csv('/Users/ionikullock/Desktop/TD_IV/Trabajo Practico /Spotify-Project/PLAYLIST data/RapGlobal.csv')
# Aplicar las transformaciones a cada variable
data['valence'] = data['valence'] * 100
data['danceability'] = data['danceability'] * 100
data['energy'] = data['energy'] * 100
data['instrumentalness'] = data['instrumentalness'] * 100
data['popularity'] = data['popularity']
data['speechiness'] = data['speechiness'] * 100

# Calcular el promedio por cada canción
promedio_por_cancion = data[['valence', 'danceability', 'energy', 'instrumentalness', 'popularity', 'speechiness']].mean(axis=1)

# Crear un DataFrame con el nombre de la canción y el promedio
resultado = pd.DataFrame({'nombre de la cancion': data['name'], 'promedio': promedio_por_cancion})

# Solicitar el nombre de la canción
nombre_cancion = input("Ingrese el nombre de la canción: ")

# Filtrar el resultado por el nombre de la canción ingresada
resultado_filtrado = resultado[resultado['nombre de la cancion'] == nombre_cancion]

# Verificar si se encontró la canción
if resultado_filtrado.empty:
    print("La canción no se encontró en el archivo.")
else:
    promedio = resultado_filtrado['promedio'].values[0]
    print(f"El promedio para la canción '{nombre_cancion}' es: {promedio}")
