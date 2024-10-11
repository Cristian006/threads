export const entities = [
  {
    "id": 1,
    "name": "E. Howard Hunt",
    "attributes": {
      "role": "CIA officer",
      "involvement": "Alleged deathbed confession implicating involvement in JFK assassination"
    }
  },
  {
    "id": 2,
    "name": "David Atlee Phillips",
    "attributes": {
      "role": "CIA officer",
      "involvement": "Alleged links with Lee Harvey Oswald"
    }
  },
  {
    "id": 3,
    "name": "JFK",
    "attributes": {
      "role": "President of the United States",
      "involvement": "Assassination victim"
    }
  },
  {
    "id": 4,
    "name": "Warren Commission",
    "attributes": {
      "role": "Investigative body",
      "involvement": "Concluded Lee Harvey Oswald acted alone in JFK's assassination"
    }
  },
  {
    "id": 5,
    "name": "House Select Committee on Assassinations",
    "attributes": {
      "role": "Investigative body",
      "involvement": "Concluded JFK assassination was likely the result of a conspiracy"
    }
  },
  {
    "id": 6,
    "name": "CIA",
    "attributes": {
      "role": "Intelligence agency",
      "involvement": "Denies any involvement in JFK's assassination"
    }
  },
  {
    "id": 7,
    "name": "Declassified documents",
    "attributes": {
      "role": "Archival material",
      "involvement": "Contain information related to JFK assassination but no conclusive evidence of CIA involvement"
    }
  }
];

export const events = [
  {
    "title": "JFK Assassination",
    "date": "1963-11-22",
    "parties": [1, 2, 3, 6],
    "approxStart": "1963-11-22",
    "approxEnd": "1963-11-22",
    "source": "National Archives",
    "description": "President John F. Kennedy was assassinated in Dallas, Texas, leading to widespread shock and mourning."
  },
  {
    "title": "Establishment of Warren Commission",
    "date": "1963-11-29",
    "approxStart": "1963-11-29",
    "approxEnd": "1963-11-29",
    "parties": [3, 4],
    "source": "History.com",
    "description": "The Warren Commission was established to investigate the assassination of JFK."
  },
  {
    "title": "Warren Commission Investigation",
    "date": "1963-12-01",
    "approxStart": "1963-12-01",
    "approxEnd": "1964-09-24",
    "parties": [4],
    "source": "U.S. Government Publishing Office",
    "description": "The Warren Commission conducted an extensive investigation to determine the details and the perpetrator of the JFK assassination."
  },
  {
    "title": "Warren Commission's Findings Released",
    "date": "1964-09-27",
    "approxStart": "1964-09-27",
    "approxEnd": "1964-09-27",
    "parties": [4],
    "source": "U.S. Government Publishing Office",
    "description": "The findings of the Warren Commission were released, concluding that Lee Harvey Oswald acted alone in assassinating President Kennedy."
  },
  {
    "title": "Period of Public Doubt and Private Investigations",
    "date": "1964-10-01",
    "approxStart": "1964-10-01",
    "approxEnd": "1976-09-01",
    "parties": [1, 2, 6],
    "source": "Various Independent Researchers",
    "description": "This period marked increasing public skepticism towards the official reports and a number of private investigations."
  },
  {
    "title": "JFK's Intent to Restructure the CIA",
    "date": "1961-04-01",
    "approxStart": "1961-04-01",
    "parties": [1],
    "approxEnd": "1961-04-01",
    "source": "JFK Library",
    "description": "Following the Bay of Pigs invasion, President Kennedy expressed a desire to 'scatter the CIA to the winds.'"
  },
  {
    "title": "Establishment of House Select Committee on Assassinations",
    "date": "1976-09-01",
    "approxStart": "1976-09-01",
    "approxEnd": "1976-09-01",
    "parties": [5],
    "source": "U.S. House of Representatives",
    "description": "The House Select Committee on Assassinations was set up to investigate the killings of JFK and Martin Luther King Jr."
  },
  {
    "title": "HSCA Investigation",
    "date": "1976-09-02",
    "approxStart": "1976-09-02",
    "approxEnd": "1979-01-03",
    "parties": [5],
    "source": "U.S. House of Representatives",
    "description": "The HSCA conducted further investigations into the assassinations, uncovering additional evidence."
  },
  {
    "title": "HSCA Findings Released",
    "date": "1979-01-03",
    "approxStart": "1979-01-03",
    "approxEnd": "1979-01-03",
    "parties": [5],
    "source": "U.S. House of Representatives",
    "description": "The HSCA released its findings, suggesting the likelihood of conspiracy in the JFK assassination."
  },
  {
    "title": "Ongoing Debate and Analysis",
    "date": "1979-01-04",
    "approxStart": "1979-01-04",
    "approxEnd": "2024-04-13",
    "parties": [1, 2, 5, 6, 7],
    "source": "Various Academic and Independent Sources",
    "description": "Debate and analysis over the JFK assassination continue, with new theories and evidence frequently emerging."
  },
  {
    "title": "Release and Analysis of Declassified Documents",
    "date": "2017-10-26",
    "approxStart": "2017-10-26",
    "approxEnd": "2017-10-26",
    "parties": [7],
    "source": "National Archives",
    "description": "Newly declassified documents related to the JFK assassination were released, providing more insights and fueling further analysis."
  },
  {
    "title": "Hunt's Alleged Deathbed Confession",
    "date": "2007-01-01",
    "approxStart": "2007-01-01",
    "approxEnd": "2007-01-01",
    "parties": [1],
    "source": "Rolling Stone Magazine",
    "description": "E. Howard Hunt, a former CIA officer, allegedly made a confession on his deathbed, claiming knowledge of a CIA conspiracy to kill JFK."
  },
  {
    "title": "AZC Registration under FARA",
    "parties": [1],
    "date": "1962-11-21",
    "approxStart": "1962-11-21",
    "approxEnd": "1962-11-21",
    "source": "Department of Justice",
    "description": "The American Zionist Council was asked to register as a foreign agent under the Foreign Agents Registration Act, reflecting JFK's push for more transparency in foreign influences."
  }
]