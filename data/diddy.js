export const entities = [
  {
    "id": "rodney-jones",
    "name": "Rodney Jones",
    "type": "person",
    "description": "Music producer",
    "subType": "producer",
    "knownAs": "Lil Rod",
    "role": "Music Producer",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEZjjueBl6cDtE_odFLb2nJ9L8hAnX9SKOpY5PrbvkmB4TAMqvEC-d_V87WA&s",
    "associations": {
      "sean-combs": "Produced songs for",
      "justin-combs": "Witness to shooting",
      "yung-miami": "Assault by relation",
      "cuba-gooding-jr": "Encountered on yacht"
    },
    "dob": "1956-08-30"
  },
  {
    "id": "sean-combs",
    "name": "Sean Combs",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDG0qpYclSLhz7qtmYyIwmTrTXRV8xLc6fs8Zg7y5wV7z75Uui4Ful4ZEQYc&s",
    "type": "person",
    "knownAs": "Diddy",
    "role": "Music Producer",
    "associations": {
      "rodney-jones": "Producer on his album and alleged harasser",
      "justin-combs": "Son",
      "yung-miami": "Associate through Miami events",
      "faheem-muhammad": "Head of security"
    },
    "dob": "1969-11-04"
  },
  {
    "id": "The-Love-Album-Off-the-Grid",
    "name": "The Love Album: Off the Grid",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZq1sSPBDRLZOr9d8-x9Oe_jMlzMC2R43Cgt8CgQkA3pIhZCo_yeP8ZkK1g&s",
    "type": "album",
    "associations": {
      "rodney-jones": "Produced by",
      "sean-combs": "Main Artist"
    },
    "dob": "2023-09-15"
  },
  {
    "id": "G",
    "name": "G",
    "type": "person",
    "role": "unknown",
    "associations": {
      "rodney-jones": "Assisted during shooting",
      "sean-combs": "Involved in studio shooting",
      "justin-combs": "Friend involved in argument"
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
      "rodney-jones": "Reported harassment to",
      "sean-combs": "Employee"
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
      "rodney-jones": "Admired by",
      "sean-combs": "Business associate"
    },
    "dob": "1973-11-02"
  },
  {
    "id": "yung-miami",
    "name": "Yung Miami",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8abqs4ljsYClD-jLM63br_9dBYwlmegkKS1TO57Q4fZrPQtV-XJWzannBiw&s",
    "type": "person",
    "role": "Music Artist",
    "associations": {
      "rodney-jones": "Assault by relation in her presence",
      "sean-combs": "Associate"
    },
    "dob": "1994-02-11"
  },
  {
    "id": "cuba-gooding-jr",
    "name": "Cuba Gooding Jr.",
    "type": "person",
    "role": "Actor",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTHvWGbw9ANwklOXTdzP7XAJq6NpCNP-m1Jua3Ct6kwS6FdFGU_XbOgP7cg&s",
    "associations": {
      "rodney-jones": "Made advances towards"
    },
    "dob": "1968-01-02"
  },
  {
    "id": "faheem-muhammad",
    "name": "Faheem Muhammad",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRfDOpm1nYVDHa1dzZMxtKYBI25XQ6E4CUxkwUG2KsQw-BV6C_NVxukfMVg&s",
    "type": "person",
    "role": "Head of Security",
    "associations": {
      "sean-combs": "Employee",
      "rodney-jones": "Involved in intimidation via employer"
    },
    "dob": "unknown"
  },
  {
    "id": "aaron-hall",
    "name": "Aaron Hall",
    "description": "R&B singer",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "joi-dickerson",
    "name": "Joi Dickerson",
    "description": "unknown",
    "type": "person",
    "subType": "unknown"
  },
  {
    "id": "craig-mack",
    "name": "Craig Mack",
    "description": "Rapper",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "the-notorious-b-i-g",
    "name": "The Notorious B.I.G",
    "description": "Rapper",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "mase",
    "name": "Mase",
    "description": "Rapper",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "the-lox",
    "name": "The Lox",
    "description": "Rap group",
    "type": "person",
    "subType": "group"
  },
  {
    "id": "faith-evans",
    "name": "Faith Evans",
    "description": "Singer",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "steve-stoute",
    "name": "Steve Stoute",
    "description": "Record executive",
    "type": "person",
    "subType": "executive"
  },
  {
    "id": "jennifer-lopez",
    "name": "Jennifer Lopez",
    "description": "Singer, actress",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "shyme",
    "name": "Shyne",
    "description": "Rapper",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "roger-mills",
    "name": "Roger Mills",
    "description": "Local TV host",
    "type": "person",
    "subType": "host"
  },
  {
    "id": "harve-pierre",
    "name": "Harve Pierre",
    "description": "Former president of Bad Boy Records",
    "type": "person",
    "subType": "executive"
  },
  {
    "id": "casandra-ventura",
    "name": "Casandra Ventura",
    "description": "Singer",
    "type": "person",
    "subType": "artist",
    "associations": {
      "sean-combs": "accuser",
      "bad-boy-entertainment": "victim-company",
      "bad-boy-records": "victim-company"
    },
  },
  {
    "id": "gerard-rechnitzer",
    "name": "Gerard Rechnitzer",
    "description": "unknown",
    "type": "person",
    "subType": "unknown"
  },
  {
    "id": "laurieann-gibson",
    "name": "Laurieann Gibson",
    "description": "Choreographer, dancer",
    "type": "person",
    "subType": "choreographer"
  },
  {
    "id": "michael-bivins",
    "name": "Michael Bivins",
    "description": "Singer, member of New Edition",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "kid-cudi",
    "name": "Kid Cudi",
    "description": "Rapper",
    "type": "person",
    "subType": "artist"
  },
  {
    "id": "justin-combs",
    "name": "Justin Dior Combs",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwd4wa2WxNUz1zRw9qDQrPVvWMO7jP1xu4m0BXsWgSvm5Zg8nXtwpTd7v3A&s",
    "type": "person",
    "role": "unknown",
    "description": "Sean Combs' son",
    "type": "person",
    "subType": "family",
    "associations": {
      "sean-combs": "Son",
      "rodney-jones": "Present at recording studio incident"
    },
    "dob": "1993-12-30"
  },
  {
    "id": "eric-adams",
    "name": "Eric Adams",
    "description": "Mayor of New York City",
    "type": "person",
    "subType": "politician"
  },
  {
    "id": "tiffany-red",
    "name": "Tiffany Red",
    "description": "Songwriter",
    "type": "person",
    "subType": "songwriter"
  },
  {
    "id": "benjamin-brafman",
    "name": "Benjamin Brafman",
    "description": "Sean Combs' attorney",
    "type": "person",
    "subType": "attorney"
  }
];

export const events = [
  {
    "date": "September 2022 - November 2023",
    "title": "Rodney Jones Produces Songs for Sean Combs' Love Album",
    "description": "Rodney Jones, a musical prodigy known as \"Lil Rod\", produced nine songs on Sean Combs' rhythm and blues album titled \"The Love Album: Off the Grid\". During this period, Jones lived with Combs for extended periods, including holidays and birthdays, at Combs' residences in Los Angeles, California, New York City, and Miami. This collaboration marked a significant period in Jones' career but also led to detrimental impacts on his life.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "The-Love-Album-Off-the-Grid"
    ],
    "approxStart": "2022-09-01",
    "approxEnd": "2023-11-30"
  },
  {
    "date": "September 12, 2022",
    "title": "Chalice Recording Studios Shooting",
    "description": "At a writers and producers camp held by Sean Combs at Chalice Recording Studio in Los Angeles, a heated conversation among Combs, his son Justin Combs, and Justin's friend 'G' resulted in gunshots. Rodney Jones, who was nearby, witnessed 'G' being shot and assisted him until the ambulance arrived. Subsequently, Sean Combs coerced Jones to misinform the police about the circumstances of the shooting.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "justin-combs",
      "G"
    ],
    "approxStart": "2022-09-12"
  },
  {
    "date": "September 2022 - November 2023",
    "title": "Rodney Jones' Sexual Harassment by Sean Combs",
    "description": "Throughout his tenure living with Sean Combs, Rodney Jones faced unsolicited and unauthorized sexual advances from Combs, including groping and forced exposure to Combs' nudity. These incidents took place across multiple locations, including Los Angeles, New York, Florida, and the US Virgin Islands. Jones reported his discomfort to Combs' Chief of Staff, Kristina Khorram, without any corrective action taken.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "Kristina-Khorram"
    ],
    "approxStart": "2022-09-01",
    "approxEnd": "2023-11-30"
  },
  {
    "date": "September 2022 - November 2023",
    "title": "Attempted Grooming of Rodney Jones by Sean Combs",
    "description": "Sean Combs allegedly attempted to groom Rodney Jones into engaging in homosexual activities, exploiting Jones' admiration for music producer Steven Aaron Jordan (Stevie J). This behavior included unsolicited sexual advances and manipulation.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "Steven-Aaron-Jordan"
    ],
    "approxStart": "2022-09-01",
    "approxEnd": "2023-11-30"
  },
  {
    "date": "Thanksgiving Day, 2022",
    "title": "Sexual Assault by Yung Miami’s Cousin",
    "description": "On Thanksgiving Day 2022, while Rodney Jones was in Sean Combs' house in Miami, Florida, he was sexually assaulted by Yung Miami's cousin. Combs, allegedly intoxicated, had previously offered cocaine to Jones. Jones believes that Combs had orchestrated the assault. Despite Jones' attempts to resist, Yung Miami’s cousin persisted, following Jones and attempting to engage in sexual acts both in the restroom and in the presence of others.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "yung-miami"
    ],
    "approxStart": "2022-11-24"
  },
  {
    "date": "February 4, 2023",
    "title": "Forced Procurement and Engagement with Sex Workers",
    "description": "Sean Combs allegedly forced Rodney Jones to solicit sex workers and engage in sex acts for his pleasure. On February 4, 2023, Combs directed Jones to bring prostitutes and sex workers to his home in Miami, Florida. Moreover, Jones believes Combs drugged him, leading to Jones waking up disoriented alongside Combs and two sex workers.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "sex workers",
      "prostitutes"
    ],
    "approxStart": "2023-02-04"
  },
  {
    "date": "Thanksgiving 2022, and February 2023",
    "title": "Coercion into Soliciting Sex Workers and Drugging Incidents",
    "description": "Rodney Jones was subjected to manipulation and coercion by Sean Combs into soliciting sex workers, as detailed in two incidents. One on Thanksgiving 2022, involving cocaine and solicitation of sex workers at a Miami club named Booby Trap on the River, and another incident involving drugging and unsolicited sex acts.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "Rodney Jones",
      "sean-combs",
      "DeForrest Taylor",
      "sex workers"
    ],
    "approxStart": "2022-11-23",
    "approxEnd": "2023-02-28"
  },
  {
    "date": "July 2, 2023",
    "title": "Listening Party Incident Involving Underage Girls and Drugged Alcohol",
    "description": "At a listening party held at Sean Combs' California home, the producer required Rodney Jones to solicit female sex workers for the event, attended by various individuals including an R&B artist and Justin Combs. During this party, underage girls were present and were forced to consume DeLeon liquor, which was allegedly laced with ecstasy by Sean Combs. Despite attempting to leave, Rodney Jones was coerced into staying by Combs, who took away Jones's car keys. The event ultimately led to Jones passing out and waking up naked next to a sex worker.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "justin-combs"
    ],
    "approxStart": "2023-07-02"
  },
  {
    "date": "Undisclosed",
    "title": "Encounter with Cuba Gooding Jr. on Sean Combs’ Yacht",
    "description": "Rodney Jones was introduced to actor Cuba Gooding Jr. by Sean Combs while on Combs' yacht. This introduction allegedly led to an uncomfortable encounter where Gooding Jr. made unsolicited physical advances towards Jones. These actions, detailed through video evidence, included touching, groping, and fondling of Jones, despite his evident discomfort and eventual rejection of the advances.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "Cuba-Gooding Jr."
    ]
  },
  {
    "date": "Between September 2022 - November 2023",
    "title": "Non-compensation for Work on \"The Love Album\"",
    "description": "Rodney Jones claims he was not compensated for his significant contributions to \"The Love Album: Off the Grid\", despite producing nine songs for the album. The dispute over compensation and rightful claims to publishing and royalties exemplifies the broader issues of deceptive business practices and the exploitation of creatives by Sean Combs and other defendants associated with the project.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs"
    ],
    "approxStart": "2022-09-01",
    "approxEnd": "2023-11-30"
  },
  {
    "date": "Not specified",
    "title": "Threats and Intimidation by Sean Combs",
    "description": "Rodney Jones' complaint outlines a pattern of threats and emotional manipulation by Sean Combs, including physical harm and display of firearms. This account paints a picture of an atmosphere of fear and control, reinforced by incidents such as the shooting at Chalice Recording Studios and Combs' boasts about his influence in the music industry and law enforcement, particularly noting the power of his head of security, Faheem Muhammad.",
    "source": "Diddy v. Jones Sexual Assault Complaint Feb 2024",
    "parties": [
      "rodney-jones",
      "sean-combs",
      "faheem-muhammad",
      "G"
    ]
  },
  {
    "date": "November 16, 2023",
    "title": "Filing of Lawsuit by Casandra Ventura Against Sean Combs and Associates",
    "description": "Casandra Ventura files a lawsuit against Sean Combs (also known as Puff Daddy, P. Diddy, or Diddy), Bad Boy Entertainment, Bad Boy Records, Epic Records, Combs Enterprises, LLC, and Doe Corporations 1-10. The filing alleges over a decade of violent behavior, sex trafficking, and a range of abuses by Mr. Combs towards Ms. Ventura, where she describes her relation with Combs as a cycle of abuse and violence.",
    "source": "United States District Court Filing, Southern District of New York",
    "parties": ["casandra-ventura", "sean-combs", "Bad-Boy-Entertainment", "Bad-Boy-Records", "Epic-Records", "Combs-Enterprises-LLC", "Doe-Corporations-1-10"],
    "approxStart": "2023-11-16"
  },
  {
    "date": "2022",
    "title": "Sean Combs Acknowledges Casandra Ventura at BET Awards",
    "description": "During the BET Awards where Sean Combs received the Lifetime Achievement Award, he acknowledged several individuals, including Casandra Ventura, for being supportive during the 'dark times'.",
    "source": "United States District Court Filing, Southern District of New York",
    "parties": ["sean-combs", "casandra-ventura"],
    "approxStart": "2022-01-01",
    "approxEnd": "2022-12-31"
  },
  {
    "date": "Alleged incidents occurred over a decade following their meeting in 2005",
    "title": "Detailed Allegations of Abuse and Trafficking Against Sean Combs",
    "description": "Casandra Ventura alleged severe abuse and sex trafficking by Sean Combs, including rape, physical assaults, threats, forced involvement with sex workers, drug and alcohol abuse, and manipulation. This cycle of violence and control extended over a decade, with Combs allegedly exercising control over Ventura's personal and professional life.",
    "source": "United States District Court Filing, Southern District of New York",
    "parties": ["casandra-ventura", "sean-combs", "Bad-Boy-Entertainment", "Bad-Boy-Records"],
    "approxStart": "2005-01-01",
    "approxEnd": "2015-12-31",
    "requiresInvestigation": true
  },
  {
    "date": "Filed on December 6, 2023",
    "title": "Fifth Lawsuit Filed Against Sean Combs Involving Allegations of Sex Trafficking and Gang Rape",
    "description": "Jane Doe alleges that she was sex trafficked and gang-raped by Sean Combs, Harve Pierre, and an unidentified third assailant in 2003 when she was only 17 years old. The incident took place at Daddy’s House Recording Studio, owned and operated by Sean Combs.",
    "source": "United States District Court Filing, Southern District of New York",
    "parties": ["Jane Doe", "sean-combs", "harve-pierre", "Third-Assailant", "Daddys-House-Recordings-Inc", "Bad-Boy-Entertainment-Holdings-Inc"],
    "approxStart": "2023-12-06"
  },
  {
    "date": "Following the filing by Casandra Ventura in November 2023",
    "title": "Cascade of Lawsuits and Allegations Unfold Against Sean Combs",
    "description": "Following Casandra Ventura's lawsuit against Sean Combs, additional lawsuits have been filed, including allegations of drugging and sexual assault by Joi Dickerson-Neal, and another lawsuit alleging forced nonconsensual sex involving Combs and singer Aaron Hall. A fourth lawsuit targets Combs’s companies and Harve Pierre, alleging sexual assault by Pierre.",
    "source": "United States District Court Filing, Southern District of New York",
    "parties": ["Casandra-Ventura", "joi-dickerson", "aaron-hall", "harve-pierre", "sean-combs", "Bad-Boy-Entertainment-Holdings-Inc"],
    "approxStart": "2023-11-16",
    "requiresInvestigation": true
  },
  {
    "date": "1990",
    "title": "Start of music industry career",
    "approxStart": "1990-01-01",
    "approxEnd": "1990-12-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs starts his music industry career as an intern at Uptown Records working under executive Andre Harrell."
  },
  {
    "date": "1990/1991",
    "title": "Alleged sexual assault",
    "approxStart": "1990-01-01",
    "approxEnd": "1991-12-31",
    "parties": [
      "sean-combs",
      "aaron-hall"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "According to a November 2023 lawsuit, Combs and the R&B singer Aaron Hall allegedly sexually assault an unnamed victim and a friend after a music industry event, then beat her several days later when confronted."
  },
  {
    "date": "1991",
    "title": "Alleged drug and sexual assault",
    "approxStart": "1991-01-01",
    "approxEnd": "1991-12-31",
    "parties": [
      "sean-combs",
      "joi-dickerson"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "According to a November 2023 lawsuit, Combs allegedly drugs, sexually assaults and videotapes 19-year-old Joi Dickerson, after going on a date with him."
  },
  {
    "date": "1993",
    "title": "Start of Bad Boy Records",
    "approxStart": "1993-01-01",
    "approxEnd": "1993-12-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "After being fired from his duties at Uptown Records, Combs starts his own label, Bad Boy Records. The label grows in popularity and notoriety over the course of the decade, breaking the careers of Craig Mack, The Notorious B.I.G, Mase, The Lox, Faith Evans and more."
  },
  {
    "date": "1996",
    "title": "Criminal mischief conviction",
    "approxStart": "1996-01-01",
    "approxEnd": "1996-12-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs is found guilty of criminal mischief for threatening a photographer from the New York Post with a gun."
  },
  {
    "date": "1998",
    "title": "Start of Hamptons all-white parties",
    "approxStart": "1998-01-01",
    "approxEnd": "1998-12-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs starts throwing his annual Hamptons all-white parties that come to be known as so lavish and exclusive, he earns the rep of being a \"modern-day Gatsby.\""
  },
  {
    "date": "April 16, 1999",
    "title": "Arrest for assault and criminal mischief",
    "approxStart": "1999-04-16",
    "approxEnd": "1999-04-16",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs is arrested and charged with two felonies — second-degree assault and criminal mischief — in the beating of record executive Steve Stoute, who says Combs and two bodyguards beat him with their fists, a telephone, a champagne bottle and a chair. When Combs publicly apologizes, Stoute asks for the charges to be dismissed. (Combs reportedly pays Stoute $500,000.) The assault charge is dropped, Combs pleads guilty to the lesser charge of harassment, and he is sentenced to one day of anger management classes."
  },
  {
    "date": "Dec. 27, 1999",
    "title": "Arrest in Club New York shooting",
    "approxStart": "1999-12-27",
    "approxEnd": "1999-12-27",
    "parties": [
      "sean-combs",
      "jennifer-lopez",
      "shyme"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs, along with then-girlfriend Jennifer Lopez and rapper Shyne, are arrested in relation to a shooting at Club New York. Combs is charged for weapons violations but is ultimately acquitted."
  },
  {
    "date": "March 2000",
    "title": "Start of Making The Band",
    "approxStart": "2000-03-01",
    "approxEnd": "2000-03-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "The first season of Making The Band airs on ABC, then later MTV. The reality TV competition centers Combs as he searches for new talent to put together in a band. Running for 12 seasons total, the show later became a cultural staple for MTV, and, through it, Combs created bands like Day26 and Danity Kane, all signed to Bad Boy Records."
  },
  {
    "date": "March 26, 2001",
    "title": "Assault lawsuit",
    "approxStart": "2001-03-26",
    "approxEnd": "2001-03-26",
    "parties": [
      "sean-combs",
      "roger-mills"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In a lawsuit, local TV host Roger Mills sues Combs, accusing him of assault, false imprisonment, destruction of property, intentional infliction of emotional distress and a civil conspiracy, in an exchange where Combs' entourage roughed him up and destroyed his camera. \"As we have yet to be served with this complaint, we are unable to comment on specific allegations,\" a Combs spokesperson said in a statement. \"However, any claim that Mr. Combs participated in any wrongdoing is totally false. Furthermore, facilitating the press with this baseless complaint is a blatant attempt to exploit Mr. Combs' celebrity for media attention.\" A jury finds in favor of Combs in 2004."
  },
  {
    "date": "2003",
    "title": "Alleged gang rape",
    "approxStart": "2003-01-01",
    "approxEnd": "2003-12-31",
    "parties": [
      "sean-combs",
      "harve-pierre"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "According to a December 2023 lawsuit, Combs, his former Bad Boy Records president, Harve Pierre, and a third unidentified man allegedly gangrape an unnamed 17-year-old victim at a Manhattan recording studio."
  },
  {
    "date": "July 6, 2004",
    "title": "Declaration of Independence possession",
    "approxStart": "2004-07-06",
    "approxEnd": "2004-07-06",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs arrives at his annual Hamptons all-white party in possession of the Declaration of Independence, marking a new level of fortune and braggadocio for the mogul."
  },
  {
    "date": "2005",
    "title": "Meeting with Cassie Ventura",
    "approxStart": "2005-01-01",
    "approxEnd": "2005-12-31",
    "parties": [
      "sean-combs",
      "casandra-ventura"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs and the singer Cassie Ventura meet for the first time and Combs expresses interest in wanting to sign her to his label. Ventura is 19 years old and Combs is 37."
  },
  {
    "date": "February 2006",
    "title": "Start of Cassie Ventura's Bad Boy Records deal",
    "approxStart": "2006-02-01",
    "approxEnd": "2006-02-28",
    "parties": [
      "sean-combs",
      "casandra-ventura"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Ventura signed a 10-album deal with Bad Boy Entertainment. Her debut single \"Me & U\" is released and her self-titled album drops the same year. According to a November 2023 lawsuit, Combs' \"vicious cycle of abuse\" begins here."
  },
  {
    "date": "Oct. 24, 2007",
    "title": "Ciroc Vodka marketing ambassador",
    "approxStart": "2007-10-24",
    "approxEnd": "2007-10-24",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs becomes a marketing ambassador and stakeholder in Ciroc Vodka by beverage maker Diageo. Sales of the vodka skyrocket and Combs becomes synonymous with the brand."
  },
  {
    "date": "March 6, 2007",
    "title": "Assault lawsuit",
    "approxStart": "2007-03-06",
    "approxEnd": "2007-03-06",
    "parties": [
      "sean-combs",
      "gerard-rechnitzer"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In a lawsuit, Gerard Rechnitzer alleges that Combs punched him, pushed his girlfriend and tried to spit on another woman outside Teddy's nightclub at the Hollywood Roosevelt Hotel. In a statement, Combs' attorney, Benjamin Brafman, says, \"It's just another example of an opportunist seeking to fabricate a lawsuit based on a flat-out lie to try to take advantage of Mr. Combs' celebrity status.\" The case is settled out of court in March 2008, the terms undisclosed."
  },
  {
    "date": "May 11, 2007",
    "title": "Threatening with a chair lawsuit",
    "approxStart": "2007-05-11",
    "approxEnd": "2007-05-11",
    "parties": [
      "sean-combs",
      "laurieann-gibson",
      "michael-bivins"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In a complaint to the police, Combs' Making the Band co-star Laurieann Gibson alleges that he threatened her with a chair while New Edition's Michael Bivins held her in place. Combs' attorney, Brafman, claims Gibson overreacted to theatrics performed for the cameras. (Sources claimed to The New York Daily News that he yelled for the cameras to be turned off.) \"This is just another example of a false accusation by someone trying to take advantage of Sean's success and celebrity status,\" Brafman says."
  },
  {
    "date": "2010",
    "title": "Control of Cassie Ventura's life",
    "approxStart": "2010-01-01",
    "approxEnd": "2010-12-31",
    "parties": [
      "sean-combs",
      "casandra-ventura"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In the November 2023 suit, Ventura claims all aspects of her life were \"controlled by either Mr. Combs or his management companies.\" She claims he paid for her apartment and all living expenses and that he had access to her medical records: \"For instance, when Ms. Ventura began experiencing memory loss — potentially due to excessive drug use and/or head injuries caused by Mr. Combs's beatings, as described below — her MRI results were provided directly to Mr. Combs. Mr. Combs also repeatedly arranged for his staff to drive Ms. Ventura to certain doctors' appointments. In this way, Mr. Combs exerted ownership over Ms. Ventura.\""
  },
  {
    "date": "February 2012",
    "title": "Alleged threat to blow up Kid Cudi's car",
    "approxStart": "2012-02-01",
    "approxEnd": "2012-02-28",
    "parties": [
      "sean-combs",
      "kid-cudi"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In the November 2023 suit, Ventura alleges that Combs said he was going to blow up the car of rapper Kid Cudi, whom Ventura was dating at the time, \"and that he wanted to ensure that Kid Cudi was home with his friends when it happened. Around that time, Kid Cudi's car exploded in his driveway.\" Kid Cudi, in a statement to The New York Times, corroborated the account."
  },
  {
    "date": "Oct. 21, 2013",
    "title": "Launch of Revolt TV",
    "approxStart": "2013-10-21",
    "approxEnd": "2013-10-21",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs launches his cable news network, Revolt TV. The network later expands into the radio, digital and film space."
  },
  {
    "date": "Jan. 8, 2014",
    "title": "DeLeon Tequila joint venture",
    "approxStart": "2014-01-08",
    "approxEnd": "2014-01-08",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs announces a new joint venture with Diageo, DeLeon Tequila, and again becomes synonymous with a liquor brand."
  },
  {
    "date": "2015",
    "title": "20th anniversary of Bad Boy Records",
    "approxStart": "2015-01-01",
    "approxEnd": "2015-12-31",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs celebrates the 20th anniversary of Bad Boy Records with a box set and a tour featuring the label's legacy signees."
  },
  {
    "date": "September 2018",
    "title": "Alleged forced sex and rape",
    "approxStart": "2018-09-01",
    "approxEnd": "2018-09-30",
    "parties": [
      "sean-combs",
      "casandra-ventura"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "After multiple attempts to sever ties with Combs, Ventura says she met with him to have dinner and believed it was to talk of concluding her Bad Boy contract and \"have a discussion about concluding their relationship for good.\" But after the dinner, Ventura alleged he forced himself into her apartment and forcibly raped her. From her November 2023 suit: \"Soon thereafter, Ms. Ventura took steps to completely separate herself from her long-time abuser, including by leaving the home that he paid for and returning the car he purchased for her.\""
  },
  {
    "date": "June 26, 2022",
    "title": "Lifetime Achievement Award",
    "approxStart": "2022-06-26",
    "approxEnd": "2022-06-26",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs receives a Lifetime Achievement Award at the 2022 BET Awards and performs a medley of his hits with special guest stars during the awards ceremony."
  },
  {
    "date": "Oct. 28, 2022",
    "title": "Forbes billionaire status",
    "approxStart": "2022-10-28",
    "approxEnd": "2022-10-28",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Forbes reports that Combs is a certified billionaire thanks to his deals with Diageo, Revolt TV and music business ventures."
  },
  {
    "date": "2022 - 2023",
    "title": "Alleged groping, drug use and sex work solicitation",
    "approxStart": "2022-01-01",
    "approxEnd": "2023-12-31",
    "parties": [
      "sean-combs",
      "rodney-jones",
      "justin-dior-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In a February 2024 lawsuit, producer Rodney \"Lil Rod\" Jones, a former producer of Combs who worked with him on his latest release, The Love Album: Off the Grid, alleges that the music mogul groped him repeatedly and during the duration of making the album, Combs forced Jones to solicit sex workers, take illegal drugs and more. The suit names others close to Combs, including Combs' son, Justin Dior Combs, and high-ranking members of Motown Records and Universal Music Group, as co-defendants."
  },
  {
    "date": "Sept. 15, 2023",
    "title": "Key to the city",
    "approxStart": "2023-09-15",
    "approxEnd": "2023-09-15",
    "parties": [
      "sean-combs",
      "eric-adams"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs receives a key to the city from New York Mayor Eric Adams."
  },
  {
    "date": "Nov. 16, 2023",
    "title": "Cassie Ventura's sexual misconduct lawsuit",
    "approxStart": "2023-11-16",
    "approxEnd": "2023-11-16",
    "parties": [
      "sean-combs",
      "casandra-ventura",
      "tiffany-red"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Ventura accuses Diddy of years of sexual misconduct, harassment, sex trafficking and rape. Ventura's allegations lasted for the entirety of their working and personal relationship. Ventura files the civil suit in New York Superior Court under the state's Adult Survivors Act, a New York law permitting victims of sexual abuse a one-year window to file civil action regardless of the statute of limitations of the crimes themselves. (Tiffany Red, a songwriter and one of Cassie's collaborators, later publicly corroborates her claims.) Combs, via his attorney, Benjamin Brafman, told The New York Times, \"Mr. Combs vehemently denies these offensive and outrageous allegations. For the past six months, Mr. Combs has been subjected to Ms. Ventura's persistent demand of $30 million, under the threat of writing a damaging book about their relationship, which was unequivocally rejected as blatant blackmail. Despite withdrawing her initial threat, Ms. Ventura has now resorted to filing a lawsuit riddled with baseless and outrageous lies, aiming to tarnish Mr. Combs's reputation and seeking a payday.\" One day after the public filing of her suit, Ventura and Combs settle outside of court for an undisclosed amount. In a statement, Ventura says, \"I have decided to resolve this matter amicably on terms that I have some level of control\" while Combs' statement read \"I wish Cassie and her family all the best. Love.\""
  },
  {
    "date": "Nov. 23, 2023",
    "title": "Additional sexual misconduct lawsuits",
    "approxStart": "2023-11-23",
    "approxEnd": "2023-11-23",
    "parties": [
      "sean-combs",
      "joi-dickerson"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "One day before the window for filing suits under the Adult Survivors Act is set to close, two separate lawsuits alleging misconduct in the early 1990s are filed against Combs in New York Superior Court: one by Joi Dickerson and the other by an unnamed plaintiff."
  },
  {
    "date": "Nov. 28, 2023",
    "title": "Temporary step down from Revolt TV",
    "approxStart": "2023-11-28",
    "approxEnd": "2023-11-28",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Combs temporarily steps down as chairman of Revolt TV amid the lawsuits."
  },
  {
    "date": "Dec. 6, 2023",
    "title": "Gang rape allegation",
    "approxStart": "2023-12-06",
    "approxEnd": "2023-12-06",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "The unnamed fourth person comes forward accusing Combs and others of gang rape in 2003."
  },
  {
    "date": "Dec. 6, 2023",
    "title": "Combs denies allegations",
    "approxStart": "2023-12-06",
    "approxEnd": "2023-12-06",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "After only speaking through his attorney up until this point, Combs denies the accusations via his Instagram account, writing \"Enough is Enough.\""
  },
  {
    "date": "Dec. 10, 2023",
    "title": "Brands sever ties with Combs' Empower Global",
    "approxStart": "2023-12-10",
    "approxEnd": "2023-12-10",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In response to the accusations, 18 brands sever ties with Combs' Black-owned e-commerce venture, Empower Global."
  },
  {
    "date": "Dec. 11, 2023",
    "title": "Petition to rescind Grammy nomination",
    "approxStart": "2023-12-11",
    "approxEnd": "2023-12-11",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "A public petition started by feminist and survivor advocacy group UltraViolet circulates calling The Recording Academy to rescind Combs' 2024 Grammy nomination for progressive R&B album amid the sexual abuse allegations."
  },
  {
    "date": "Dec. 11, 2023",
    "title": "Recording Academy statement",
    "approxStart": "2023-12-11",
    "approxEnd": "2023-12-11",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "The Recording Academy releases a statement in response to Diddy's 2024 Grammy nomination and the allegations: \"We are taking this matter very seriously and we are in the process of evaluating it with the time and care that it deserves.\""
  },
  {
    "date": "Dec. 13, 2023",
    "title": "Reality show project scrapped",
    "approxStart": "2023-12-13",
    "approxEnd": "2023-12-13",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "In response to the accusations, streaming network Hulu scraps a reality show project featuring Combs that was previously in development and centered around the mogul and his family."
  },
  {
    "date": "Jan. 12, 2024",
    "title": "Combs will not attend Grammys",
    "approxStart": "2024-01-12",
    "approxEnd": "2024-01-12",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "A representative for Combs tells The Hollywood Reporter the mogul won't be in attendance at the Grammys. He was subsequently absent from the ceremony and all public events leading up to the awards."
  },
  {
    "date": "Jan. 16, 2024",
    "title": "Diageo and Combs end partnership",
    "approxStart": "2024-01-16",
    "approxEnd": "2024-01-16",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Diageo and Combs resolve their legal lawsuit around marketing of products and officially end their working relationship."
  },
  {
    "date": "Feb. 26, 2024",
    "title": "Fifth assault lawsuit",
    "approxStart": "2024-02-26",
    "approxEnd": "2024-02-26",
    "parties": [
      "sean-combs",
      "rodney-jones"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "The fifth assault lawsuit is filed against Combs by Rodney \"Lil Rod\" Jones. Combs' lawyer denies the allegations, claiming, \"We have overwhelming, indisputable proof that his claims are complete lies.\""
  },
  {
    "date": "March 25, 2024",
    "title": "Federal agents raid Combs' homes",
    "approxStart": "2024-03-25",
    "approxEnd": "2024-03-25",
    "parties": [
      "sean-combs"
    ],
    "source": "NPR Music News",
    "link": "https://www.npr.org/2024/02/29/1234684758/sean-combs-diddy-allegations-timeline",
    "description": "Homes in Los Angeles and Miami associated with Combs are raided by federal agents, including Homeland Security Investigative officials, as part of what authorities referred to as \"an ongoing investigation.\""
  }
];