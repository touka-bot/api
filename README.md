# api
Unofficial 4anime API.

# How to get Access
Please join our [Discord Server](https://discord.gg/tvDXKZSzqd) and post a message containing the following Information into #api-access:
1. What do you plan to do with the API?
2. How many users do you expect to use your Service?
3. How many requests per Week do you expect to send?
4. Additional Information about your Service (e.g. Features, Security measures, Data Collection, ...)
5. The Domain/IP, you're planning to use in order to send Requests

# Usage
This API Builds on top of each Request, so if you've used the `search` request, use the *same* Keyword (not the selected Anime title) as your Input in the `episodes` request.
The selected Title should be selected through the `:index` Value and should be the Index of the Array containing the title in the `search` response.
The same applies for the `videourl` request.
## Response Type

All Responses from the API are plain `text` responses.

#### Base URL
```http://4c3711.xyz:3000/fluid/api/v1```

## Get Search Results

URL: ```/search/:title```

Input Types: 

      :title
            type: String
      
Response: `Array`

Error Case ` "" `

Example: `[ "https://asite.to/title1", "https://asite.to/title2", "https://asite.to/title3" ]`


## Get Episodes

URL: ```/search/:title/:index```

Input Types: 

      :title
            type: String
      
      :index
            type: Integer
      
Response: `Array`

Error Case ` "" `

Example: `[ "https://asite.to/episode1", "https://asite.to/episode2", "https://asite.to/episode3" ]`


## Get Video URL

URL: ```/search/:title/:index/episodes/:episode```

Input Types: 

      :title
            type: String
      
      :index
            type: Integer
      
      :episode
            type: Integer
      
Response: `String`

Error Case ` "No Video found" || "" `

Example: `https://asite.to/video.mp4`
