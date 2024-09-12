headers = {
    "x-nxopen-api-key": "test_c9cbd0b4e288c4a4baf33f79d24626cb5435076d09e380d66c602405d4841a7eefe8d04e6d233bd35cf2fabdeb93fb0d"
  }
  
  characterName = "유튜브어린이"
  urlString = "https://open.api.nexon.com/maplestory/v1/id?character_name=%EC%9C%A0%ED%8A%9C%EB%B8%8C%EC%96%B4%EB%A6%B0%EC%9D%B4" + characterName
  response = requests.get(urlString, headers = headers)
  
  print(response.json())