import pandas as pd

def concatenate_name_artist(csv_file, name, artist):
    df = pd.read_csv(csv_file)
    result = df[name] + " - " + df[artist]
    enumerated_result = '\n'.join([f"{i + 1}. {song}" for i, song in enumerate(result.tolist())])
    return enumerated_result

# Ejemplo de uso:
csv_file = '/Users/ionikullock/Desktop/TD_IV/Trabajo Practico /Spotify-Project/Datasets/Tecno.csv'
name = 'name'
artist = 'artist'

result = concatenate_name_artist(csv_file, name, artist)
print("El resultado es:")
print(result)
