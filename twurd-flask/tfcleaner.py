import pandas as pd
import re
from nltk.tokenize import word_tokenize
import json
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

df = pd.read_csv('D:\Documents\Twurd\Twurd_temp\\all_annotated.tsv', sep='\t', header=0)
# print(df.columns)

df = df[df['Definitely English'] == 1]
df.drop(df.columns[[4,5,6,7,8,9]], axis=1, inplace=True)
# print(len(df))

freq = {}
# print(df.iloc[1,[1,3]])

def remove_emojis(data): #https://stackoverflow.com/a/58356570
    emoj = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
        u"\U00002500-\U00002BEF"  # chinese char
        u"\U00002702-\U000027B0"
        u"\U00002702-\U000027B0"
        u"\U000024C2-\U0001F251"
        u"\U0001f926-\U0001f937"
        u"\U00010000-\U0010ffff"
        u"\u2640-\u2642" 
        u"\u2600-\u2B55"
        u"\u200d"
        u"\u23cf"
        u"\u23e9"
        u"\u231a"
        u"\ufe0f"  # dingbats
        u"\u3030"
                      "]+", re.UNICODE)
    return re.sub(emoj, ' ', data)

def clean(tweet): #https://stackoverflow.com/q/64719706
    tweet = re.sub(r"(?:\@|http?\://|\\n|https?\://|www)\S+", "", tweet)
    tweet = remove_emojis(tweet)
    regex = re.compile('[^a-zA-Z ]')
    #First parameter is the replacement, second parameter is your input string
    tweet = regex.sub('', tweet)
    tweet = tweet.lower()
    #Out: 'abdE'
    tweetlist = word_tokenize(tweet)
    return tweetlist

def cleanstr(tweet): #https://stackoverflow.com/q/64719706
    tweet = re.sub(r"(?:\@|http?\://|\\n|https?\://|www)\S+", "", tweet)
    tweet = remove_emojis(tweet)
    regex = re.compile('[^a-zA-Z ]')
    #First parameter is the replacement, second parameter is your input string
    tweet = regex.sub('', tweet)
    tweet = tweet.lower()
    return tweet

for index, row in df.iterrows():
    country = row["Country"]
    # print(country)
    if country not in freq:
        # print("Adding country " + str(country))
        freq[country] = ""
    if country in freq:
        # print(clean(row['Tweet']))
        freq[country] += ' ' + ' '.join(clean(row['Tweet']))

with open('./Twurd_temp/tftext.json', 'w') as f:
    json.dump(freq, f)
    
textset = []
for k in freq:
    textset.append(freq[k])
    
# print(textset)

vec = TfidfVectorizer(analyzer='word', stop_words='english')
vecdata = vec.fit_transform(textset)
tokens = vec.get_feature_names_out()

dfVec = pd.DataFrame(data=vecdata.toarray(), index=freq.keys(), columns = tokens)
print(dfVec)

print(dfVec.idxmax(axis=1))
print(dfVec.apply(lambda s, n: pd.Series(s.nlargest(n).index), axis=1, n=9))