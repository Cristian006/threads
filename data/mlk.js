export const entities = [
  {
    "id": 1,
    "name": "Martin Luther King Jr.",
    "attributes": {
      "role": "Victim",
      "involvement": "Assassinated"
    }
  },
  {
    "id": 2,
    "name": "James Earl Ray",
    "attributes": {
      "role": "Accused",
      "involvement": "Convicted of assassination, later recanted confession"
    }
  },
  {
    "id": 3,
    "name": "J. Edgar Hoover",
    "attributes": {
      "role": "FBI Director",
      "involvement": "Suspected of using FBI resources to discredit MLK"
    }
  },
  {
    "id": 4,
    "name": "CIA",
    "attributes": {
      "role": "Intelligence Agency",
      "involvement": "Suspected involvement"
    }
  },
  {
    "id": 5,
    "name": "FBI",
    "attributes": {
      "role": "Federal Bureau",
      "involvement": "Suspected involvement"
    }
  },
  {
    "id": 6,
    "name": "Memphis Police Department",
    "attributes": {
      "role": "Local Law Enforcement",
      "involvement": "Suspected involvement"
    }
  },
  {
    "id": 7,
    "name": "U.S. Army",
    "attributes": {
      "role": "Military",
      "involvement": "Suspected involvement"
    }
  },
  {
    "id": 8,
    "name": "Loyd Jowers",
    "attributes": {
      "role": "Businessman",
      "involvement": "Claimed to have participated in conspiracy to assassinate MLK"
    }
  },
  {
    "id": 9,
    "name": "King Family",
    "attributes": {
      "role": "Family/Plaintiffs",
      "involvement": "Filed civil lawsuit alleging conspiracy in MLK's assassination"
    }
  }
];

export const events = [
  {
    "title": "Assassination of Martin Luther King Jr.",
    "source": "History.com",
    "date": "1968-04-04T18:00:00Z",
    "approxStart": "1968-04-04T17:00:00Z",
    "approxEnd": "1968-04-04T19:00:00Z",
    "parties": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "title": "Arrest of James Earl Ray",
    "source": "Britannica",
    "date": "1968-06-08",
    "approxStart": "1968-06-08T12:00:00Z",
    "approxEnd": "1968-06-08T15:00:00Z",
    "parties": [2]
  },
  {
    "title": "Conviction of James Earl Ray",
    "source": "Britannica",
    "date": "1969-03-10",
    "approxStart": "1969-03-10T09:00:00Z",
    "approxEnd": "1969-03-10T11:00:00Z",
    "parties": [2]
  },
  {
    "title": "James Earl Ray's recantation of his confession",
    "source": "New York Times",
    "date": "1969-03-13",
    "approxStart": "1969-03-13T09:00:00Z",
    "approxEnd": "1969-03-13T11:00:00Z",
    "parties": [2]
  },
  {
    "title": "House Select Committee on Assassinations",
    "source": "U.S. House of Representatives Archives",
    "date": "1979-12",
    "approxStart": "1978-09-01T00:00:00Z",
    "approxEnd": "1979-12-31T23:59:59Z",
    "parties": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "title": "Civil Lawsuit King Family vs Jowers",
    "source": "Washington Post",
    "date": "1999-12-08",
    "approxStart": "1999-12-08T09:00:00Z",
    "approxEnd": "1999-12-08T17:00:00Z",
    "parties": [1, 2, 8, 9]
  },
  {
    "title": "FBI Surveillance of Martin Luther King Jr.",
    "source": "FBI.gov",
    "date": "1960s",
    "approxStart": "1960-01-01T00:00:00Z",
    "approxEnd": "1969-12-31T23:59:59Z",
    "parties": [1, 5]
  },
  {
    "title": "King's Speech Against the Vietnam War",
    "source": "Stanford University",
    "date": "1967-04-04",
    "approxStart": "1967-04-04T12:00:00Z",
    "approxEnd": "1967-04-04T14:00:00Z",
    "parties": [1]
  }
]


