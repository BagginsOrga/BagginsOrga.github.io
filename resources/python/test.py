from youtube_search import YoutubeSearch

results = YoutubeSearch('thirtyvirus', max_results=10).to_json()

import json

data = results


with open('data.json', 'w') as outfile:
    json.dump(data, outfile)

print(results)

# returns a json string

########################################

#results = YoutubeSearch('search terms', max_results=10).to_dict()

#print(results)
# returns a dictionary