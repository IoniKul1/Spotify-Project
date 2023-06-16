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
resultado = pd.DataFrame({'nombre de la cancion': data['name'],'artista': data['artist'] ,'promedio': promedio_por_cancion})

# Solicitar el rango numérico
rango_inferior = float(input("Ingrese el rango inferior: "))
rango_superior = float(input("Ingrese el rango superior: "))

# Filtrar el resultado según el rango numérico
resultado_filtrado = resultado.query(f"promedio >= {rango_inferior} and promedio <= {rango_superior}")

# Mostrar el resultado filtrado
print(resultado_filtrado)
