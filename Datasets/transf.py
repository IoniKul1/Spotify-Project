import pandas as pd

def sum_and_divide(csv_file, column1, column2, column3, column4, column5, column6):
    df = pd.read_csv(csv_file)
    
    total = (
        df[column1].div(10) +
        df[column2].div(10) +
        df[column3].div(10) +
        df[column4].div(10) +
        df[column5].div(10) +
        df[column6].div(10)
    )
    
    return total

# Ejemplo de uso:
csv_file = 'Tecno.csv'
column1 = 'Valence'
column2 = 'Danceability'
column3 = 'Energy'
column4 = 'Instrumentalness'
column5 = 'Popularity'
column6 = 'Speachiness'

result = sum_and_divide(csv_file, column1, column2, column3, column4, column5, column6)
print("El resultado es:", result)
