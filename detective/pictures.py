import requests
from bs4 import BeautifulSoup


entities = [
  {
    "id": "Rodney-Jones",
    "name": "Rodney Jones",
    "type": "person",
    "knownAs": "Lil Rod",
    "role": "Music Producer",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEZjjueBl6cDtE_odFLb2nJ9L8hAnX9SKOpY5PrbvkmB4TAMqvEC-d_V87WA&s",
    "associations": {
      "Sean-Combs": "Produced songs for",
      "Justin-Combs": "Witness to shooting",
      "Yung-Miami": "Assault by relation",
      "Cuba-Gooding-Jr": "Encountered on yacht"
    },
    "dob": "unknown"
  },
  {
    "id": "Sean-Combs",
    "name": "Sean Combs",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDG0qpYclSLhz7qtmYyIwmTrTXRV8xLc6fs8Zg7y5wV7z75Uui4Ful4ZEQYc&s",
    "type": "person",
    "knownAs": "Diddy",
    "role": "Music Producer",
    "associations": {
      "Rodney-Jones": "Producer on his album and alleged harasser",
      "Justin-Combs": "Son",
      "Yung-Miami": "Associate through Miami events",
      "Faheem-Muhammad": "Head of security"
    },
    "dob": "1969-11-04"
  },
  {
    "id": "The-Love-Album-Off-the-Grid",
    "name": "The Love Album: Off the Grid",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZq1sSPBDRLZOr9d8-x9Oe_jMlzMC2R43Cgt8CgQkA3pIhZCo_yeP8ZkK1g&s",
    "type": "album",
    "associations": {
      "Rodney-Jones": "Produced by",
      "Sean-Combs": "Main Artist"
    }
  },
  {
    "id": "Justin-Combs",
    "name": "Justin Combs",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwd4wa2WxNUz1zRw9qDQrPVvWMO7jP1xu4m0BXsWgSvm5Zg8nXtwpTd7v3A&s",
    "type": "person",
    "role": "unknown",
    "associations": {
      "Sean-Combs": "Son",
      "Rodney-Jones": "Present at recording studio incident"
    },
    "dob": "1993-12-30"
  },
  {
    "id": "G",
    "name": "G",
    "type": "person",
    "role": "unknown",
    "associations": {
      "Rodney-Jones": "Assisted during shooting",
      "Sean-Combs": "Involved in studio shooting",
      "Justin-Combs": "Friend involved in argument"
    },
    "dob": "unknown"
  },
  {
    "id": "Kristina-Khorram",
    "name": "Kristina Khorram",
    "type": "person",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvaT90dSIZ745lpRbMfM_7gde7dWRr6HGgendieN8_KNJQ2XLdE6_0575nPg&s",
    "knownAs": "KK",
    "role": "Chief of Staff",
    "associations": {
      "Rodney-Jones": "Reported harassment to",
      "Sean-Combs": "Employee"
    },
    "dob": "unknown"
  },
  {
    "id": "Steven-Aaron-Jordan",
    "name": "Steven Aaron Jordan",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYaWSf6tAyIddGlxIy5tIcEx6qWUQqcpa3qIDbuO2ytTuSfk2dL-5Vbf3_WE&s",
    "type": "person",
    "knownAs": "Stevie J",
    "role": "Music Producer",
    "associations": {
      "Rodney-Jones": "Admired by",
      "Sean-Combs": "Business associate"
    },
    "dob": "1973-11-02"
  },
  {
    "id": "Yung-Miami",
    "name": "Yung Miami",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8abqs4ljsYClD-jLM63br_9dBYwlmegkKS1TO57Q4fZrPQtV-XJWzannBiw&s",
    "type": "person",
    "role": "Music Artist",
    "associations": {
      "Rodney-Jones": "Assault by relation in her presence",
      "Sean-Combs": "Associate"
    },
    "dob": "1994-02-11"
  },
  {
    "id": "Cuba-Gooding-Jr",
    "name": "Cuba Gooding Jr.",
    "type": "person",
    "role": "Actor",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTHvWGbw9ANwklOXTdzP7XAJq6NpCNP-m1Jua3Ct6kwS6FdFGU_XbOgP7cg&s",
    "associations": {
      "Rodney-Jones": "Made advances towards"
    },
    "dob": "1968-01-02"
  },
  {
    "id": "Faheem-Muhammad",
    "name": "Faheem Muhammad",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRfDOpm1nYVDHa1dzZMxtKYBI25XQ6E4CUxkwUG2KsQw-BV6C_NVxukfMVg&s",
    "type": "person",
    "role": "Head of Security",
    "associations": {
      "Sean-Combs": "Employee",
      "Rodney-Jones": "Involved in intimidation via employer"
    },
    "dob": "unknown"
  }
]

def get_first_image_url(search_query):
    # Google Images URL with the search query
    url = f"https://www.google.com/search?hl=en&q={search_query}&tbm=isch"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all <img> tags with an ID that matches the pattern "dimg_*"
    images = soup.find_all('img')
    
    # Extract the 'src' attribute of each image
    image_urls = [img['src'] for img in images if img.get('src').startswith("https")]
    
    return image_urls[0] if image_urls else "No image found."

def add_image_urls_to_entities(entities):
    for entity in entities:
        # Use the entity's 'name' for the image search
        entity['imageUrl'] = get_first_image_url(entity['name'])

add_image_urls_to_entities(entities)

# Print entities to see the added image URLs
for entity in entities:
    print(f"{entity['name']}: {entity.get('imageUrl')}")