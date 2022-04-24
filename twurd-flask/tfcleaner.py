import pandas as pd
import re, json, pprint, os
import json
import pprint
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
import numpy as np
from flask_pymongo import  MongoClient
from dotenv import load_dotenv



load_dotenv()
client = MongoClient(os.getenv('MONGO_CLIENT'), tls=True, tlsAllowInvalidCertificates=True)
db = client["DaRealDeal"]
collection = db["states"]
# for doc in collection.find():
#     pprint.pprint(doc)
# print(collection.find_one()['state'])

textset = []
states = []

for doc in collection.find():
    textset.append(doc['combined_text'])
    states.append(doc['state'])
    
vec = TfidfVectorizer(analyzer='word', stop_words='english')
cvec = CountVectorizer(analyzer='word', stop_words='english')
vecdata = vec.fit_transform(textset)
cvecdata = cvec.fit_transform(textset)
tokens = vec.get_feature_names_out()
ctokens = vec.get_feature_names_out()

dfVec = pd.DataFrame(data=vecdata.toarray(), index=states, columns = tokens)
dfcVec = pd.DataFrame(data=cvecdata.toarray(), index=states, columns = tokens)

print(dfcVec)
# print(dfVec.idxmax(axis=1))
top9 = dfVec.apply(lambda s, n: pd.Series(s.nlargest(n).index), axis=1, n=9)
print(top9)
# print(dfcVec.apply(lambda s, n: pd.Series(s.nlargest(n).index), axis=1, n=9))

data = {'Alaska': {'words': ['kulayrosasangbukas', 'apply'], 'freq': [2,1]}}

# for i in range(len(top9.columns())):
#     for j in range(len(i)):
#         print(top9.iloc[[i,j]])

for i in top9:
    for j in i:
        print(j)
