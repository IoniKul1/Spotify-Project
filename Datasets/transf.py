import pandas as pd

def sum_and_divide(csv_file, column1, column2, column3, column4, column5, column6):
    df = pd.read_csv(csv_file)
    
    lista=[]

    val = df[column1].sum()*(10)
    dan = df[column2].sum()*(10)
    ene = df[column3].sum()*(10)
    ins = df[column4].sum()*(10)
    pop = df[column5].sum()/(10)
    spe = df[column6].sum()*(10)
    
    lista.append(val)
    lista.append(dan)
    lista.append(ene)
    lista.append(ins)
    lista.append(pop)
    lista.append(spe)

    return lista

# Ejemplo de uso:
csv_file = '/Users/ionikullock/Desktop/TD_IV/Trabajo Practico /Spotify-Project/Datasets/Alternative.csv'
column1 = 'valence'
column2 = 'danceability'
column3 = 'energy'
column4 = 'instrumentalness'
column5 = 'popularity'
column6 = 'speechiness'

result = sum_and_divide(csv_file, column1, column2, column3, column4, column5, column6)
print("El resultado es:", result)
