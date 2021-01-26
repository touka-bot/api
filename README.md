# api
Unofficial 4anime API.

# How to get Access
Please join our [Discord Server]() and post a message containing the following Information into #api-access:
1. What do you plan to do with the API?
2. How many users do you expect to use your Service?
3. How many requests per Week do you expect to send?
4. Additional Information about your Service (e.g. Features, Security measures, Data Collection, ...)

# Usage
## Response Type

All Responses from the API are plain `text` responses.

#### Base URL
```http://4c3711.xyz:3000/fluid/api/v1```

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
