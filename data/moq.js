// COVID-19 Response Timeline from First Incident

const earlyOutbreakEvents = [
    {
      id: 1,
      source: 'Early Outbreak and Detection',
      name: 'First Cases Reported in Wuhan, China',
      start: '2019-12-31',
      end: '2019-12-31',
      entities: ['Wuhan', 'China', 'SARS-CoV-2', 'World Health Organization', 'Huanan Seafood Market'],
    },
    {
      id: 2,
      source: 'Early Outbreak and Detection',
      name: 'China Identifies Novel Coronavirus as Cause',
      start: '2020-01-07',
      end: '2020-01-07',
      entities: ['China', 'SARS-CoV-2', 'World Health Organization', 'Chinese Center for Disease Control and Prevention'],
    },
    {
      id: 3,
      source: 'Early Outbreak and Detection',
      name: 'First Death Reported in Wuhan',
      start: '2020-01-11',
      end: '2020-01-11',
      entities: ['Wuhan', 'China', 'SARS-CoV-2', 'World Health Organization'],
    },
  ];
  
  const globalSpreadAndWHOResponseEvents = [
    {
      id: 4,
      source: 'Global Spread and WHO Response',
      name: 'First Case Outside China (Thailand)',
      start: '2020-01-13',
      end: '2020-01-13',
      entities: ['Thailand', 'China', 'SARS-CoV-2', 'World Health Organization'],
    },
    {
      id: 5,
      source: 'Global Spread and WHO Response',
      name: 'WHO Declares Public Health Emergency of International Concern',
      start: '2020-01-30',
      end: '2020-01-30',
      entities: ['World Health Organization', 'Tedros Adhanom', 'SARS-CoV-2', 'United Nations'],
    },
    {
      id: 6,
      source: 'Global Spread and WHO Response',
      name: 'WHO Declares COVID-19 a Pandemic',
      start: '2020-03-11',
      end: '2020-03-11',
      entities: ['World Health Organization', 'Tedros Adhanom', 'SARS-CoV-2', 'United Nations'],
    },
  ];
  
  const nationalLockdownsAndRestrictionsEvents = [
    {
      id: 7,
      source: 'National Lockdowns and Restrictions',
      name: 'Italy Imposes Nationwide Lockdown',
      start: '2020-03-09',
      end: '2020-03-09',
      entities: ['Italy', 'Giuseppe Conte', 'European Union', 'SARS-CoV-2'],
    },
    {
      id: 8,
      source: 'National Lockdowns and Restrictions',
      name: 'U.S. Declares National Emergency',
      start: '2020-03-13',
      end: '2020-03-13',
      entities: ['United States', 'Donald Trump', 'SARS-CoV-2', 'Centers for Disease Control and Prevention'],
    },
    {
      id: 9,
      source: 'National Lockdowns and Restrictions',
      name: 'India Announces Nationwide Lockdown',
      start: '2020-03-24',
      end: '2020-03-24',
      entities: ['India', 'Narendra Modi', 'SARS-CoV-2'],
    },
  ];
  
  const vaccineDevelopmentEvents = [
    {
      id: 10,
      source: 'Vaccine Development',
      name: 'Moderna Begins Phase 1 Vaccine Trials',
      start: '2020-03-16',
      end: '2020-03-16',
      entities: ['Moderna', 'United States', 'National Institutes of Health', 'mRNA vaccine'],
    },
    {
      id: 11,
      source: 'Vaccine Development',
      name: 'Pfizer-BioNTech Vaccine Receives Emergency Use Authorization in the U.K.',
      start: '2020-12-02',
      end: '2020-12-02',
      entities: ['Pfizer', 'BioNTech', 'United Kingdom', 'mRNA vaccine', 'MHRA'],
    },
    {
      id: 12,
      source: 'Vaccine Development',
      name: 'WHO Lists Pfizer-BioNTech Vaccine for Emergency Use',
      start: '2020-12-31',
      end: '2020-12-31',
      entities: ['World Health Organization', 'Pfizer', 'BioNTech', 'mRNA vaccine'],
    },
  ];
  
  const economicImpactAndStimulusEvents = [
    {
      id: 13,
      source: 'Economic Impact and Stimulus Measures',
      name: 'Global Stock Markets Crash',
      start: '2020-03-09',
      end: '2020-03-16',
      entities: ['New York Stock Exchange', 'NASDAQ', 'S&P 500', 'Dow Jones Industrial Average'],
    },
    {
      id: 14,
      source: 'Economic Impact and Stimulus Measures',
      name: 'U.S. Passes $2 Trillion Stimulus Package',
      start: '2020-03-27',
      end: '2020-03-27',
      entities: ['United States', 'Donald Trump', 'CARES Act', 'U.S. Congress'],
    },
    {
      id: 15,
      source: 'Economic Impact and Stimulus Measures',
      name: 'IMF Announces Global Recession',
      start: '2020-04-14',
      end: '2020-04-14',
      entities: ['International Monetary Fund', 'World Bank', 'Global Economy'],
    },
  ];
  
  const ongoingManagementAndVariantsEvents = [
    {
      id: 16,
      source: 'Ongoing Management and Variants',
      name: 'First Case of COVID-19 Variant Detected in the U.K.',
      start: '2020-09-20',
      end: '2020-09-20',
      entities: ['United Kingdom', 'Alpha variant', 'SARS-CoV-2', 'Public Health England'],
    },
    {
      id: 17,
      source: 'Ongoing Management and Variants',
      name: 'WHO Labels Variant B.1.1.7 as Variant of Concern',
      start: '2020-12-18',
      end: '2020-12-18',
      entities: ['World Health Organization', 'Alpha variant', 'SARS-CoV-2'],
    },
    {
      id: 18,
      source: 'Ongoing Management and Variants',
      name: 'Global Vaccination Campaigns Intensify',
      start: '2021-01-01',
      end: '2021-12-31',
      entities: ['World Health Organization', 'Pfizer', 'Moderna', 'AstraZeneca', 'Johnson & Johnson'],
    },
  ];
  
  export const covidEvents = [
    ...earlyOutbreakEvents,
    ...globalSpreadAndWHOResponseEvents,
    ...nationalLockdownsAndRestrictionsEvents,
    ...vaccineDevelopmentEvents,
    ...economicImpactAndStimulusEvents,
    ...ongoingManagementAndVariantsEvents,
  ];
  

  // Events Leading to the Assassination of JFK

const electionAndPresidencyEvents = [
    {
      id: 1,
      source: 'Election and Early Presidency',
      name: 'John F. Kennedy Elected as President',
      start: '1960-11-08',
      end: '1960-11-08',
      entities: ['John F. Kennedy', 'Richard Nixon', 'United States', 'Democratic Party', 'Republican Party'],
    },
    {
      id: 2,
      source: 'Election and Early Presidency',
      name: 'Inauguration of John F. Kennedy',
      start: '1961-01-20',
      end: '1961-01-20',
      entities: ['John F. Kennedy', 'Lyndon B. Johnson', 'United States Capitol', 'Washington D.C.'],
    },
    {
      id: 3,
      source: 'Election and Early Presidency',
      name: 'Kennedy’s New Frontier Speech',
      start: '1960-07-15',
      end: '1960-07-15',
      entities: ['John F. Kennedy', 'Democratic National Convention', 'Los Angeles'],
    },
  ];
  
  const foreignPolicyChallengesEvents = [
    {
      id: 4,
      source: 'Foreign Policy Challenges',
      name: 'Bay of Pigs Invasion',
      start: '1961-04-17',
      end: '1961-04-19',
      entities: ['Cuba', 'Fidel Castro', 'CIA', 'John F. Kennedy', 'Soviet Union'],
    },
    {
      id: 5,
      source: 'Foreign Policy Challenges',
      name: 'Vienna Summit Between Kennedy and Khrushchev',
      start: '1961-06-04',
      end: '1961-06-04',
      entities: ['John F. Kennedy', 'Nikita Khrushchev', 'Vienna', 'Cold War', 'Soviet Union'],
    },
    {
      id: 6,
      source: 'Foreign Policy Challenges',
      name: 'Cuban Missile Crisis',
      start: '1962-10-16',
      end: '1962-10-28',
      entities: ['John F. Kennedy', 'Nikita Khrushchev', 'Fidel Castro', 'Cuba', 'Soviet Union', 'United States'],
    },
  ];
  
  const leeHarveyOswaldEvents = [
    {
      id: 7,
      source: 'Lee Harvey Oswald Background',
      name: 'Lee Harvey Oswald Defects to the Soviet Union',
      start: '1959-10-16',
      end: '1959-10-16',
      entities: ['Lee Harvey Oswald', 'Soviet Union', 'KGB', 'United States'],
    },
    {
      id: 8,
      source: 'Lee Harvey Oswald Background',
      name: 'Lee Harvey Oswald Returns to the United States',
      start: '1962-06-13',
      end: '1962-06-13',
      entities: ['Lee Harvey Oswald', 'Marina Oswald', 'Soviet Union', 'United States'],
    },
    {
      id: 9,
      source: 'Lee Harvey Oswald Background',
      name: 'Oswald’s Attempted Assassination of General Edwin Walker',
      start: '1963-04-10',
      end: '1963-04-10',
      entities: ['Lee Harvey Oswald', 'Edwin Walker', 'Dallas', 'Texas'],
    },
  ];
  
  const texasTripPreparationEvents = [
    {
      id: 10,
      source: 'Preparation for Texas Trip',
      name: 'Announcement of Kennedy’s Texas Tour',
      start: '1963-09-26',
      end: '1963-09-26',
      entities: ['John F. Kennedy', 'Texas', 'Lyndon B. Johnson', 'Democratic Party'],
    },
    {
      id: 11,
      source: 'Preparation for Texas Trip',
      name: 'Publication of the Dallas Motorcade Route',
      start: '1963-11-19',
      end: '1963-11-19',
      entities: ['John F. Kennedy', 'Dallas', 'Texas', 'Secret Service'],
    },
    {
      id: 12,
      source: 'Preparation for Texas Trip',
      name: 'Security Concerns Discussed for Dallas Visit',
      start: '1963-11-18',
      end: '1963-11-21',
      entities: ['John F. Kennedy', 'Secret Service', 'Dallas Police Department', 'Texas'],
    },
  ];
  
  const civilRightsMovementEvents = [
    {
      id: 13,
      source: 'Civil Rights Movement',
      name: 'Birmingham Campaign',
      start: '1963-04-03',
      end: '1963-05-10',
      entities: ['Martin Luther King Jr.', 'Birmingham', 'Alabama', 'Civil Rights Movement'],
    },
    {
      id: 14,
      source: 'Civil Rights Movement',
      name: 'Kennedy Proposes Civil Rights Act',
      start: '1963-06-11',
      end: '1963-06-11',
      entities: ['John F. Kennedy', 'Civil Rights Act', 'United States Congress', 'Civil Rights Movement'],
    },
    {
      id: 15,
      source: 'Civil Rights Movement',
      name: 'March on Washington for Jobs and Freedom',
      start: '1963-08-28',
      end: '1963-08-28',
      entities: ['Martin Luther King Jr.', 'Washington D.C.', 'Civil Rights Movement', 'John F. Kennedy'],
    },
  ];
  
  const vietnamAndPeaceEffortsEvents = [
    {
      id: 16,
      source: 'Vietnam and Peace Efforts',
      name: 'Kennedy’s Peace Speech at American University',
      start: '1963-06-10',
      end: '1963-06-10',
      entities: ['John F. Kennedy', 'American University', 'Cold War', 'Soviet Union'],
    },
    {
      id: 17,
      source: 'Vietnam and Peace Efforts',
      name: 'Partial Nuclear Test Ban Treaty Signed',
      start: '1963-08-05',
      end: '1963-08-05',
      entities: ['John F. Kennedy', 'Nikita Khrushchev', 'United States', 'Soviet Union', 'United Kingdom'],
    },
    {
      id: 18,
      source: 'Vietnam and Peace Efforts',
      name: 'Ngo Dinh Diem Assassinated in South Vietnam',
      start: '1963-11-02',
      end: '1963-11-02',
      entities: ['Ngo Dinh Diem', 'South Vietnam', 'United States', 'CIA', 'John F. Kennedy'],
    },
  ];
  
  export const jfkEvents = [
    ...electionAndPresidencyEvents,
    ...foreignPolicyChallengesEvents,
    ...leeHarveyOswaldEvents,
    ...texasTripPreparationEvents,
    ...civilRightsMovementEvents,
    ...vietnamAndPeaceEffortsEvents,
  ];
