import pandas as pd

def concatenate_name_artist(csv_file, name, artist):
    df = pd.read_csv(csv_file)
    result = df[name] + " - " + df[artist]
    return result.tolist()

# Ejemplo de uso:
csv_file = '/Users/ionikullock/Desktop/TD_IV/Trabajo Practico /Spotify-Project/Datasets/Alternative.csv'
name = 'name'
artist = 'artist'

result = concatenate_name_artist(csv_file, name, artist)
print("El resultado es:", result)
