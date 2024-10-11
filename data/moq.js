// COVID-19 Response Timeline from First Incident

const earlyOutbreakEvents = [
    {
      id: 1,
      source: 'Early Outbreak and Detection',
      name: 'First Cases Reported in Wuhan, China',
      start: '2019-12-31',
      end: '2019-12-31',
    },
    {
      id: 2,
      source: 'Early Outbreak and Detection',
      name: 'China Identifies Novel Coronavirus as Cause',
      start: '2020-01-07',
      end: '2020-01-07',
    },
    {
      id: 3,
      source: 'Early Outbreak and Detection',
      name: 'First Death Reported in Wuhan',
      start: '2020-01-11',
      end: '2020-01-11',
    },
  ];
  
  const globalSpreadAndWHOResponseEvents = [
    {
      id: 4,
      source: 'Global Spread and WHO Response',
      name: 'First Case Outside China (Thailand)',
      start: '2020-01-13',
      end: '2020-01-13',
    },
    {
      id: 5,
      source: 'Global Spread and WHO Response',
      name: 'WHO Declares Public Health Emergency of International Concern',
      start: '2020-01-30',
      end: '2020-01-30',
    },
    {
      id: 6,
      source: 'Global Spread and WHO Response',
      name: 'WHO Declares COVID-19 a Pandemic',
      start: '2020-03-11',
      end: '2020-03-11',
    },
  ];
  
  const nationalLockdownsAndRestrictionsEvents = [
    {
      id: 7,
      source: 'National Lockdowns and Restrictions',
      name: 'Italy Imposes Nationwide Lockdown',
      start: '2020-03-09',
      end: '2020-03-09',
    },
    {
      id: 8,
      source: 'National Lockdowns and Restrictions',
      name: 'U.S. Declares National Emergency',
      start: '2020-03-13',
      end: '2020-03-13',
    },
    {
      id: 9,
      source: 'National Lockdowns and Restrictions',
      name: 'India Announces Nationwide Lockdown',
      start: '2020-03-24',
      end: '2020-03-24',
    },
  ];
  
  const vaccineDevelopmentEvents = [
    {
      id: 10,
      source: 'Vaccine Development',
      name: 'Moderna Begins Phase 1 Vaccine Trials',
      start: '2020-03-16',
      end: '2020-03-16',
    },
    {
      id: 11,
      source: 'Vaccine Development',
      name: 'Pfizer-BioNTech Vaccine Receives Emergency Use Authorization in the U.K.',
      start: '2020-12-02',
      end: '2020-12-02',
    },
    {
      id: 12,
      source: 'Vaccine Development',
      name: 'WHO Lists Pfizer-BioNTech Vaccine for Emergency Use',
      start: '2020-12-31',
      end: '2020-12-31',
    },
  ];
  
  const economicImpactAndStimulusEvents = [
    {
      id: 13,
      source: 'Economic Impact and Stimulus Measures',
      name: 'Global Stock Markets Crash',
      start: '2020-03-09',
      end: '2020-03-16',
    },
    {
      id: 14,
      source: 'Economic Impact and Stimulus Measures',
      name: 'U.S. Passes $2 Trillion Stimulus Package',
      start: '2020-03-27',
      end: '2020-03-27',
    },
    {
      id: 15,
      source: 'Economic Impact and Stimulus Measures',
      name: 'IMF Announces Global Recession',
      start: '2020-04-14',
      end: '2020-04-14',
    },
  ];
  
  const ongoingManagementAndVariantsEvents = [
    {
      id: 16,
      source: 'Ongoing Management and Variants',
      name: 'First Case of COVID-19 Variant Detected in the U.K.',
      start: '2020-09-20',
      end: '2020-09-20',
    },
    {
      id: 17,
      source: 'Ongoing Management and Variants',
      name: 'WHO Labels Variant B.1.1.7 as Variant of Concern',
      start: '2020-12-18',
      end: '2020-12-18',
    },
    {
      id: 18,
      source: 'Ongoing Management and Variants',
      name: 'Global Vaccination Campaigns Intensify',
      start: '2021-01-01',
      end: '2021-12-31',
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
    },
    {
      id: 2,
      source: 'Election and Early Presidency',
      name: 'Inauguration of John F. Kennedy',
      start: '1961-01-20',
      end: '1961-01-20',
    },
    {
      id: 3,
      source: 'Election and Early Presidency',
      name: 'Kennedy’s New Frontier Speech',
      start: '1960-07-15',
      end: '1960-07-15',
    },
  ];
  
  const foreignPolicyChallengesEvents = [
    {
      id: 4,
      source: 'Foreign Policy Challenges',
      name: 'Bay of Pigs Invasion',
      start: '1961-04-17',
      end: '1961-04-19',
    },
    {
      id: 5,
      source: 'Foreign Policy Challenges',
      name: 'Vienna Summit Between Kennedy and Khrushchev',
      start: '1961-06-04',
      end: '1961-06-04',
    },
    {
      id: 6,
      source: 'Foreign Policy Challenges',
      name: 'Cuban Missile Crisis',
      start: '1962-10-16',
      end: '1962-10-28',
    },
  ];
  
  const leeHarveyOswaldEvents = [
    {
      id: 7,
      source: 'Lee Harvey Oswald Background',
      name: 'Lee Harvey Oswald Defects to the Soviet Union',
      start: '1959-10-16',
      end: '1959-10-16',
    },
    {
      id: 8,
      source: 'Lee Harvey Oswald Background',
      name: 'Lee Harvey Oswald Returns to the United States',
      start: '1962-06-13',
      end: '1962-06-13',
    },
    {
      id: 9,
      source: 'Lee Harvey Oswald Background',
      name: 'Oswald’s Attempted Assassination of General Edwin Walker',
      start: '1963-04-10',
      end: '1963-04-10',
    },
  ];
  
  const texasTripPreparationEvents = [
    {
      id: 10,
      source: 'Preparation for Texas Trip',
      name: 'Announcement of Kennedy’s Texas Tour',
      start: '1963-09-26',
      end: '1963-09-26',
    },
    {
      id: 11,
      source: 'Preparation for Texas Trip',
      name: 'Publication of the Dallas Motorcade Route',
      start: '1963-11-19',
      end: '1963-11-19',
    },
    {
      id: 12,
      source: 'Preparation for Texas Trip',
      name: 'Security Concerns Discussed for Dallas Visit',
      start: '1963-11-18',
      end: '1963-11-21',
    },
  ];
  
  const civilRightsMovementEvents = [
    {
      id: 13,
      source: 'Civil Rights Movement',
      name: 'Birmingham Campaign',
      start: '1963-04-03',
      end: '1963-05-10',
    },
    {
      id: 14,
      source: 'Civil Rights Movement',
      name: 'Kennedy Proposes Civil Rights Act',
      start: '1963-06-11',
      end: '1963-06-11',
    },
    {
      id: 15,
      source: 'Civil Rights Movement',
      name: 'March on Washington for Jobs and Freedom',
      start: '1963-08-28',
      end: '1963-08-28',
    },
  ];
  
  const vietnamAndPeaceEffortsEvents = [
    {
      id: 16,
      source: 'Vietnam and Peace Efforts',
      name: 'Kennedy’s Peace Speech at American University',
      start: '1963-06-10',
      end: '1963-06-10',
    },
    {
      id: 17,
      source: 'Vietnam and Peace Efforts',
      name: 'Partial Nuclear Test Ban Treaty Signed',
      start: '1963-08-05',
      end: '1963-08-05',
    },
    {
      id: 18,
      source: 'Vietnam and Peace Efforts',
      name: 'Ngo Dinh Diem Assassinated in South Vietnam',
      start: '1963-11-02',
      end: '1963-11-02',
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


  // Timeline Events of Major Empires

const romanEmpireEvents = [
    {
      id: 1,
      source: 'Roman Empire',
      name: 'Founding of Rome',
      start: '-0753-04-21',
      end: '-0753-04-21',
    },
    {
      id: 2,
      source: 'Roman Empire',
      name: 'Roman Republic Established',
      start: '-0509-01-01',
      end: '-0509-01-01',
    },
    {
      id: 3,
      source: 'Roman Empire',
      name: 'Julius Caesar Assassinated',
      start: '-0044-03-15',
      end: '-0044-03-15',
    },
    {
      id: 4,
      source: 'Roman Empire',
      name: 'Augustus Becomes First Roman Emperor',
      start: '-0027-01-16',
      end: '-0027-01-16',
    },
    {
      id: 5,
      source: 'Roman Empire',
      name: 'Edict of Milan Issued',
      start: '0313-02-01',
      end: '0313-02-01',
    },
    {
      id: 6,
      source: 'Roman Empire',
      name: 'Fall of Western Roman Empire',
      start: '0476-09-04',
      end: '0476-09-04',
    },
  ];
  
  const chineseDynastiesEvents = [
    {
      id: 7,
      source: 'Chinese Dynasties',
      name: 'Shang Dynasty Established',
      start: '-1600-01-01',
      end: '-1600-01-01',
    },
    {
      id: 8,
      source: 'Chinese Dynasties',
      name: 'Zhou Dynasty Begins',
      start: '-1046-01-01',
      end: '-1046-01-01',
    },
    {
      id: 9,
      source: 'Chinese Dynasties',
      name: 'Qin Dynasty Unifies China',
      start: '-0221-01-01',
      end: '-0221-01-01',
    },
    {
      id: 10,
      source: 'Chinese Dynasties',
      name: 'Han Dynasty Founded',
      start: '-0206-01-01',
      end: '-0206-01-01',
    },
    {
      id: 11,
      source: 'Chinese Dynasties',
      name: 'Tang Dynasty Established',
      start: '0618-06-18',
      end: '0618-06-18',
    },
    {
      id: 12,
      source: 'Chinese Dynasties',
      name: 'Ming Dynasty Begins',
      start: '1368-01-23',
      end: '1368-01-23',
    },
    {
      id: 13,
      source: 'Chinese Dynasties',
      name: 'Qing Dynasty Founded',
      start: '1636-01-01',
      end: '1636-01-01',
    },
    {
      id: 14,
      source: 'Chinese Dynasties',
      name: 'End of Qing Dynasty',
      start: '1912-02-12',
      end: '1912-02-12',
    },
  ];
  
  const aztecEmpireEvents = [
    {
      id: 15,
      source: 'Aztec Empire',
      name: 'Founding of Tenochtitlan',
      start: '1325-03-13',
      end: '1325-03-13',
    },
    {
      id: 16,
      source: 'Aztec Empire',
      name: 'Triple Alliance Formed',
      start: '1428-01-01',
      end: '1428-01-01',
    },
    {
      id: 17,
      source: 'Aztec Empire',
      name: 'Montezuma II Becomes Emperor',
      start: '1502-01-01',
      end: '1502-01-01',
    },
    {
      id: 18,
      source: 'Aztec Empire',
      name: 'Spanish Conquest Begins',
      start: '1519-02-18',
      end: '1519-02-18',
    },
    {
      id: 19,
      source: 'Aztec Empire',
      name: 'Fall of Tenochtitlan',
      start: '1521-08-13',
      end: '1521-08-13',
    },
  ];
  
  const egyptianEmpireEvents = [
    {
      id: 20,
      source: 'Egyptian Empire',
      name: 'First Dynasty Founded by Narmer',
      start: '-03150-01-01',
      end: '-03150-01-01',
    },
    {
      id: 21,
      source: 'Egyptian Empire',
      name: 'Construction of the Great Pyramid of Giza',
      start: '-02560-01-01',
      end: '-02560-01-01',
    },
    {
      id: 22,
      source: 'Egyptian Empire',
      name: 'Reign of Hatshepsut',
      start: '-01476-01-01',
      end: '-01458-01-01',
    },
    {
      id: 23,
      source: 'Egyptian Empire',
      name: 'Reign of Akhenaten and Nefertiti',
      start: '-01355-01-01',
      end: '-01339-01-01',
    },
    {
      id: 24,
      source: 'Egyptian Empire',
      name: 'Reign of Tutankhamun',
      start: '-01334-01-01',
      end: '-01325-01-01',
    },
    {
      id: 25,
      source: 'Egyptian Empire',
      name: 'Egypt Becomes a Roman Province',
      start: '-0030-01-01',
      end: '-0030-01-01',
    },
  ];
  
  const persianEmpireEvents = [
    {
      id: 26,
      source: 'Persian Empire',
      name: 'Cyrus the Great Founds the Achaemenid Empire',
      start: '-0550-01-01',
      end: '-0550-01-01',
    },
    {
      id: 27,
      source: 'Persian Empire',
      name: 'Darius I Becomes King',
      start: '-0522-01-01',
      end: '-0522-01-01',
    },
    {
      id: 28,
      source: 'Persian Empire',
      name: 'Battle of Marathon',
      start: '-0490-09-12',
      end: '-0490-09-12',
    },
    {
      id: 29,
      source: 'Persian Empire',
      name: 'Alexander the Great Conquers Persia',
      start: '-0330-01-01',
      end: '-0330-01-01',
    },
  ];
  
  const mongolEmpireEvents = [
    {
      id: 30,
      source: 'Mongol Empire',
      name: 'Genghis Khan Unites Mongol Tribes',
      start: '1206-01-01',
      end: '1206-01-01',
    },
    {
      id: 31,
      source: 'Mongol Empire',
      name: 'Death of Genghis Khan',
      start: '1227-08-18',
      end: '1227-08-18',
    },
    {
      id: 32,
      source: 'Mongol Empire',
      name: 'Mongol Invasion of Europe Begins',
      start: '1236-01-01',
      end: '1236-01-01',
    },
    {
      id: 33,
      source: 'Mongol Empire',
      name: 'Division of the Mongol Empire',
      start: '1294-01-01',
      end: '1294-01-01',
    },
  ];
  
  const ottomanEmpireEvents = [
    {
      id: 34,
      source: 'Ottoman Empire',
      name: 'Founding of the Ottoman Empire',
      start: '1299-01-01',
      end: '1299-01-01',
    },
    {
      id: 35,
      source: 'Ottoman Empire',
      name: 'Conquest of Constantinople',
      start: '1453-05-29',
      end: '1453-05-29',
    },
    {
      id: 36,
      source: 'Ottoman Empire',
      name: 'Siege of Vienna',
      start: '1529-09-27',
      end: '1529-10-15',
    },
    {
      id: 37,
      source: 'Ottoman Empire',
      name: 'Dissolution of the Ottoman Empire',
      start: '1922-11-01',
      end: '1922-11-01',
    },
  ];
  
  const britishEmpireEvents = [
    {
      id: 38,
      source: 'British Empire',
      name: 'Defeat of the Spanish Armada',
      start: '1588-08-08',
      end: '1588-08-08',
    },
    {
      id: 39,
      source: 'British Empire',
      name: 'Establishment of the East India Company',
      start: '1600-12-31',
      end: '1600-12-31',
    },
    {
      id: 40,
      source: 'British Empire',
      name: 'Act of Union Between England and Scotland',
      start: '1707-05-01',
      end: '1707-05-01',
    },
    {
      id: 41,
      source: 'British Empire',
      name: 'Declaration of Independence by American Colonies',
      start: '1776-07-04',
      end: '1776-07-04',
    },
    {
      id: 42,
      source: 'British Empire',
      name: 'End of British Rule in India',
      start: '1947-08-15',
      end: '1947-08-15',
    },
  ];
  
  export const empireEvents = [
    ...romanEmpireEvents,
    ...chineseDynastiesEvents,
    ...aztecEmpireEvents,
    ...egyptianEmpireEvents,
    ...persianEmpireEvents,
    ...mongolEmpireEvents,
    ...ottomanEmpireEvents,
    ...britishEmpireEvents,
  ];
  