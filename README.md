# api
Unofficial 4anime API.

# Usage
## Response Type

All Responses from the API are plain `text` responses.

#### Base URL
```http://notsetup.yet/fluid/api/v1```

## Get Search Results

URL: ```/search/:title```

Input Types: 

      :title `String`
      
Response: `Array`

Example: `[ "https://asite.to/title1", "https://asite.to/title2", "https://asite.to/title3" ]`


## Get Episodes

URL: ```/search/:title/:index```

Input Types: 

      :title `String`
      
      :index `Integer`
      
Response: `Array`

Example: `[ "https://asite.to/episode1", "https://asite.to/episode2", "https://asite.to/episode3" ]`


## Get Video URL

URL: ```/search/:title/:index/episodes/:episode```

Input Types: 

      :title `String`
      
      :index `Integer`
      
      :episode `Integer`
      
Response: `String`

Example: `https://asite.to/video.mp4`
