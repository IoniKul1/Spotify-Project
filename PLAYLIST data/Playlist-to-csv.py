import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import pandas as pd

# Spotify Developer Account Credentials
cid = 'aaa1e24438294503bab201233ccc60fe'
secret = '88067912de5c4fca973d1a0774f77c7d'

# Number columns, used for the recommender
number_cols = ['valence', 'acousticness', 'danceability', 'duration_ms', 'energy',
               'instrumentalness', 'key', 'liveness', 'loudness', 'mode', 'popularity', 'speechiness', 'tempo']


def convert_json_into_df(results, sp):

    ids = []

    for item in results['tracks']['items']:
        track = item['track']['id']
        ids.append(track)

    song_meta = {'id': [], 'album': [], 'name': [],
                 'artist': [], 'explicit': [], 'popularity': []}

    for song_id in ids:
        # get song's meta data
        meta = sp.track(song_id)

        # song id
        song_meta['id'].append(song_id)

        # album name
        album = meta['album']['name']
        song_meta['album'] += [album]

        # song name
        song = meta['name']
        song_meta['name'] += [song]

        # artists name
        s = ', '
        artist = s.join([singer_name['name'] for singer_name in meta['artists']])
        song_meta['artist'] += [artist]

        # explicit: lyrics could be considered offensive or unsuitable for children
        explicit = meta['explicit']
        song_meta['explicit'].append(explicit)

        # song popularity
        popularity = meta['popularity']
        song_meta['popularity'].append(popularity)

    song_meta_df = pd.DataFrame.from_dict(song_meta)

    # check the song feature
    features = sp.audio_features(song_meta['id'])
    # change dictionary to dataframe
    features_df = pd.DataFrame.from_dict(features)

    # convert milliseconds to mins
    # duration_ms: The duration of the track in milliseconds.
    # 1 minute = 60 seconds = 60 × 1000 milliseconds = 60,000 ms
    features_df['duration_ms'] = features_df['duration_ms'] / 60000

    # combine two dataframe
    final_df = song_meta_df.merge(features_df)
    return final_df



def main():
    # Connect to API
    client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    df = convert_json_into_df(results=sp.playlist('6BYPaZUqpwvFos99CdXo1g?si'), sp=sp)
    df.to_csv("TechnoGlobal2.csv", index=False)    

if __name__ == '__main__':
    main()

#Cachengue
#https://open.spotify.com/playlist/730nssfu4RYu0l23ciXGSV?si=c38f89a342d24ce9

#Techno
#https://open.spotify.com/playlist/4ehe0ydNTdpDjsq6Cs5Y1R?si=68026061b788418e
#https://open.spotify.com/playlist/7cLua2vBmBZsQQYoPXNduD?si=8c4888cffb204240

#Lofi
#https://open.spotify.com/playlist/4jX2YpicQ3Src59p5lKTxZ?si=1a2636b0c30c42dc

#Rock
#https://open.spotify.com/playlist/7mXkjesmnmemzKZautoTiX?si=8f9a2919c4364636

#Alternative
#https://open.spotify.com/playlist/7cQqricErf9g3qes99dssZ?si=95b252dc8ace4d22

#Rap
#https://open.spotify.com/playlist/42FQPDeODQRj9SL4SJgL78?si=sy5OMeWjT6aKmwEKyJ76mg

#https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=1170bd74a5ce4a06

#https://open.spotify.com/playlist/6BYPaZUqpwvFos99CdXo1g?si=253178a5ce5f4236