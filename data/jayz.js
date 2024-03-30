const artists = [
  {
    "id": "JayZ",
    "artist": "Jay-Z",
    "name": "Shawn Corey Carter",
    "dob": "1969-12-04",
    "img": "https://blendedent.com/wp-content/uploads/2012/03/jay-z.jpg",
    "profession": "Rapper, Songwriter, Producer, Entrepreneur"
  },
  {
    "id": "Beyonce",
    "artist": "Beyoncé",
    "name": "Beyoncé Giselle Knowles-Carter",
    "dob": "1981-09-04",
    "img": "https://i.pinimg.com/564x/44/f8/72/44f8721b4bf433a0ce16b02d9c131e9c.jpg",
    "profession": "Singer, Songwriter, Actress, Producer"
  },
  {
    "id": "Rihanna",
    "artist": "Rihanna",
    "name": "Robyn Rihanna Fenty",
    "dob": "1988-02-20",
    "img": "https://i.pinimg.com/736x/32/10/2d/32102d5249b63ebd5720aac68ead8abf.jpg",
    "profession": "Singer, Actress, Fashion Designer, Businesswoman"
  },
  {
    "id": "Puff-Daddy",
    "artist": "Puff Daddy",
    "name": "Sean Combs",
    "dob": "1969-11-04",
    "img": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMdRjibGS6Ok/v1/1650x2200.jpg",
    "profession": "Rapper, Singer, Songwriter, Record Producer, Entrepreneur"
  },
  {
    "id": "Big-Daddy-Kane",
    "artist": "Big Daddy Kane",
    "name": "Antonio Hardy",
    "dob": "1968-09-10",
    "profession": "Rapper, Songwriter, Actor",
    "img": "https://i0.wp.com/whomagvideovision.com/images/interviews/BigDaddyKane.jpg"
  },
  {
    "id": "Damon-Dash",
    "artist": "Damon Dash",
    "name": "Damon Anthony Dash",
    "dob": "1971-05-03",
    "profession": "Entrepreneur, Record Executive, Film Producer",
    "img": "https://imageio.forbes.com/blogs-images/julianmitchell/files/2017/08/dame-dash-portrait-e1502905377854.jpg?height=856&width=640&fit=bounds"
  },
  {
    "id": "Kareem-Burke",
    "artist": "Kareem Burke",
    "name": "Kareem Biggs Burke",
    "dob": "1974-01-19",
    "profession": "Record Executive, Entrepreneur",
    "img": "https://s3.amazonaws.com/allprograms/wp-content/uploads/2021/12/24101319/Copy-of-YB-Blog-Featured-Image-2022-04-07T092925.437.gif"
  },
  {
    "id": "Casandra-Ventura",
    "artist": "Cassie",
    "name": "Casandra Ventura",
    "dob": "1986-08-26",
    "profession": "Singer, Dancer, Actress, Model",
    "img": "https://live.staticflickr.com/2844/33381620912_4b95c82341_c.jpg"
  },
  {
    "id": "Lil-Rod",
    "artist": "Lil Rod",
    "name": "Rodney Jones Jr.",
    "dob": "1986-08-26",
    "proffession": "Record Producer",
    "img": "https://i.dailymail.co.uk/1s/2024/02/27/02/81753573-13129313-image-a-3_1709000648988.jpg"
  },
  {
    "id": "Cathy-White",
    "artist": "Cathy White",
    "name": "Cathy White",
    "dob": "1982-07-03",
    "proffession": "Mistress",
    "relation": "JayZ Mistress",
    "img": "",
  },
  {
    "id": "Liz-Crokin",
    "artist": "Liz Crokin",
    "name": "Liz Crokin",
    "dob": "",
    "proffession": "",
    "relation": "",
    "img": ""
  }
]

const events = [
  {
    "date": "2005-02-13",
    "event": "Signing",
    "title": "Rihanna signs to def jam records",
    "artists": ["JayZ", "Rihanna"]
  },
  {
    "date": "1994-06-05",
    "event": "Recording",
    "title": "JayZ recording with Big Daddy Kane",
    "artists": ["JayZ", "Big-Daddy-Kane"]
  },
  {
    "date": "1995-08-21",
    "event": "Business",
    "title": "JayZ co-founds Roc-A-Fella Records",
    "artists": ["JayZ", "Damon-Dash", "Kareem-Burke"]
  },
  {
    "date": "1996-06-25",
    "event": "Album Release",
    "title": "JayZ releases The Reasonable Doubt",
    "artists": ["JayZ"]
  },
  {
    "date": "1999-03-10",
    "event": "Meeting",
    "title": "Beyonce and JayZ meet at MTV Spring Break Festival",
    "artists": ["Beyonce", "JayZ"]
  },
  {
    "date": "2001-11-01",
    "event": "Confirmation",
    "title": "Beyonce and JayZ confirm their relationship on Vanity Fair",
    "artists": ["Beyonce", "JayZ"]
  },
  {
    "date": "2001-09-11",
    "event": "Album Release",
    "title": "JayZ releases The Blueprint",
    "artists": ["JayZ"]
  },
  {
    "date": "2011-09-01",
    "event": "Reporter",
    "title": "Reporter reaches out to JayZ's Mistress",
    "description": "A reporter reached out to talk about the affair",
    "artists": ["JayZ"]
  },
  {
    "date": "2011-09-01",
    "event": "Death",
    "description": "Cathy Michelle White Dies of a brain annyurism in Harlem, N.Y.",
    "artists": ["Cathy-White", "JayZ"],
    "links": [{
      "title": "Legacy.com",
      "url": "https://www.legacy.com/obituaries/name/cathy-white-obituary?pid=153510251"
    }]
  },
  {
    "date": "2023-11-16",
    "artists": ["Casandra-Ventura", "Puff-Daddy"],
    "title": "Ventura vs. Combs Lawsuit",
    "description": "Ventura accused Combs of physical abuse, rape, and coercion into sexual acts with others, spanning their relationship from 2007 to 2018.",
    "event_type": "Allegation",
    "tags": ["Legal"]
  },
  {
    "date": "2024-03-25",
    "artists": ["Puff-Daddy"],
    "title": "Homeland Security Raids",
    "description": "Searches conducted at Combs' residences in Los Angeles and Miami, linked to a sex trafficking investigation.",
    "event": "Raid",
    "tags": ["Law Enforcement"]
  },
  {
    "date": "2024-02-26",
    "artists": ["Lil-Rod", "Puff-Daddy"],
    "title": "Jones Jr. vs. Combs Lawsuit",
    "description": "Producer Rodney Jones Jr. files a lawsuit alleging sexual assault by Combs.",
    "event_type": ["Legal"]
  }
]

export { events, artists }