let resumeData = {
  "socialLinks": [
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/rahul-bhatia-67ba08121/",
      "className": "fa fa-linkedin"
    },
    {
      "name": "github",
      "url": "http://github.com/krekle",
      "className": "fa fa-github"
    }
  ],
  "projects": [
    {
      "CompanyName": "Avinor",
      "ProjectName": "Digitalt Infosenter / InfoKiosk",
      "Roles": ['Utvikler'],
      "Tech": ['React', 'C#', '.NET Core', 'Azure', 'Azure DevOps', 'GraphQL', 'typescript', 'git'],
      "Start": "01.10.2019",
      "End": "01.05.2020",
      "Description": "Avinor er et norsk statlig selskap, og Norges største eier av flyplasser. Selskapet driver 44 flyplasser, hvorav 12 eies av Forsvaret. I tillegg eier selskapet sikkerhetsinstallasjoner av ulike slag, deriblant radarer, radiofyr, fjernstyrte basestasjoner for flyradiosambandet, og kontrollsentraler. I 2003 ble Avinor oppført som aksjeselskap heleid av staten. Eierskapet forvaltes av Samferdselsdepartementet. Etter hvert som Norge blir et mer og mer populært reisemål, har det økende antallet turister til Oslo lufthavn hver sommer blitt en stor belastning for de ansatte ved informasjonssenteret i ankomsthallen. Denne trenden fortsetter, blant annet fordi et kinesisk flyselskap åpner en rute første gang direkte fra Beijing til Oslo fra midten av mai. Dette har gjort det nødvendig å endre informasjonssenteret for å kunne håndtere flere turister raskere. Etter en innsiktsundersøkelse så vi at de mest stilte spørsmålene kan løses digitalt, som kan frigjøre tid og senke stressnivået for både besøkende og ansatte. Bouvet dannet et team for å løse disse utfordringene, der første fase var å sette opp en informasjons-kiosk for Oslo Lufthavn. I prosjektets fase 2 rulles løsningen ut på andre norske flyplasser. Kristian har vært med på design og utvikling av systemet.."
    },
    {
      "CompanyName": "Sporveien",
      "ProjectName": "Geometritoget",
      "Roles": ['Utvikler', 'Arkitekt'],
      "Tech": ['C#', 'AWS', 'IoT', 'git', 'Python', 'Tableau', 'AWS Redshift', 'AWS S3', 'AWS Lambda', 'Databricks', 'PySpark', 'Big Data', 'Datavarehus', 'Angular', 'typescript'],
      "Start": "01.12.2018",
      "End": "01.01.2020",
      "Description": "Geometritoget er en MX3000 t-banevogn som er utstyrt med over 30 sensorer som måler verdier for blant annet: sporvidde, kurve, vindskjevhet, akselerometer, etc. Toget nyttes som en vanlig t-banevogn som i løpet av en tidsperiode på ca 2 uker vil kjøre alle tbanenettets linjer mens det samler data om sporgeometrien til sporet. Kristian var ansvarlig for design og implementering av softwareløsningen for dette systemet. Dataen fra toget måtte konverteres fra et proprietært binærformat som leverandør av sensorer benyttet til noe mer standard som kunne analyseres og visualiseres. Videre måtte dataen arkiveres i skyen S3 og DynamoDB og berikes og analyseres før innsetting i Redshift databarehus, fra hvor den til slutt ble tilgjengeligjort i analyseverktøyet tableua web. Dataen fra geometritoget skal gjøre det mulig for de som er ansvarlige for vedlikehold av infrastrukturen i Sporveien å; se på trending av feil, få varsel dersom en sensor fanger opp målinger som er utenfor terskelverdier, se på gjennomsnittlige hastigheter på hele skinnenettet. Blant annet."
    },
    {
      "CompanyName": "Sporveien",
      "ProjectName": "Prediktivt vedlikehold av Sporvekslere",
      "Roles": ['Utvikler', 'Arkitekt'],
      "Tech": ['Python', 'C#', 'Azure', 'Azure CosmosDB', 'Azure Blobstorage', 'Azure Function', 'Angular', 'typescript', 'git'],
      "Start": "01.10.2018",
      "End": "01.03.2019",
      "Description": "Vedlikehold av infrastruktur i drift krever mye penger og tid. Å gjennomføre for mange unødvendige vedlikehold koster mye penger - for få vedlikehold fører kostbar svikt av utstyr i operasjon. Det er derfor ønskelig med støttesystemer som kan monitorere utsyr og varsle når vedlikehold er nødvendig. I den forbindelse har Kristian jobbet på prosjekt hos Sporveien for å prototype en løsning som kan visualisere og varsle dersom loggførte strømtrekk på sporvekslinger i t-banenettet er utenom det vanlige. Dette gjøres ved å benytte algoritmer fra signalbehandling og statistikk til å se på kurven til strømtrekket for å avgjøre hvorvidt den representerer en 'frisk' veksling eller ikke. Løsningen er laget med Angular7 og Python Flask backend for visualisering og grensesnitt servert fra Azure. Analyse og databehandling gjøres i WebJobs, Azure Function, Blob storage og Azure CosmosDB."
    },
    {
      "CompanyName": "Sporveien",
      "ProjectName": "IVO - Individstyring av Vognparken",
      "Roles": ['Utvikler', 'Arkitekt'],
      "Tech": ['Python', 'Reinforcement Learning', 'Genetisk Algoritme', 'DEAP', 'Ray', 'Azure DevOps', 'AWS EC2', 'git'],
      "Start": "01.09.2017",
      "End": "01.10.2018",
      "Description": "Individstyring av vognparken (IVO) er system for planlegging av ettersyn, flåtestyring og rangering for t-banevogner i drift og på depot for Sporveien. Målsetningen med løsningen er å bedre treffe ettersynsdatoer for å unngå tapte penger ved ubrukte kilometer. IVO startet som en del av prosjekt DRIV, som siden oppstarten høsten 2015 har DRIV-prosjektet utviklet flere informasjonsløsninger som benyttes på T-banens hovedverksted og oppstillingsplass på Ryen. Kort fortalt gir løsningene informasjon om hvor en vogn befinner seg, i hvilken tilstand den er i og hva som skal skje med vogna. DRIV arbeider etter Lean Startup-metodikken med tett brukerdialog og -involvering, hypotesedrevet eksperimentering, iterativ utvikling og evaluering direkte på verkstedsgulvet. Prototyping skal sikre høy nytteverdi og god forankring blant ledere og brukere på verkstedet, redusere risiko og minimere behovet for store forhåndsinvesteringer. IVO (Individstyring av vognparken) er et system som skal bistå de ansatte på sporveien med å planlegge ettersyn og styre t-banevogner slik at man får bedre kontroll på kilometerpåløpet mellom ettersyn. IVO er et system som består av 2 kjernekomponenter: Verkstedplan Er sansvarlig for å optimalisere verkstedplanen og gi vogner daglige kilometer-måltall som de må kjøre for å treffe verkstedtiden sin. Verkstedplan bruker genetiske algoritmer for å lage optimale planer. Utviklet i python med rammeverket Deap. Rangering Assistent Bruker data om utgående ruter og innkommende vogner til å anbefale parkering, forflytning og utkjøring på depot slik at vogner treffer sine kilometer måltall og dermed treffer sine oppsatte verkstedtider. Bruker reinforcement learning til å trene opp modeller. Utviklet i python med rammeverkene tensorflow og ray. Disse komponentene utgjør den operative delen av IVO, i tillegg er det er omkringliggende system bestående av integrasjoner mot kildesystemer, api'er som gjør data tilgjengelig for eksterne systemer og en database hvor resultater fra kjernekomponenter blir lagret og kildedata blir beriket ved å aggregere data fra flere kilder."
    },

    {
      "CompanyName": "Tine",
      "ProjectName": "TineMatsans Chatbot",
      "Roles": ['Utvikler'],
      "Tech": ['node.js', 'GraphQL', 'Microsoft Bot Framework', 'javascript', 'git'],
      "Start": "01.08.2017",
      "End": "01.09.2017",
      "Description": "Det er utviklet og leverte et proof of concept på en chatbot til TINE. Chatboten gir middagsforslag basert på ingredienser en ønsker eller har fra før. Løsningen ble levert på Microsoft Bot Framework, slik at vi enkelt kunne integrere med ulike chat klienter som Slack, Skype eller direkte på en nettside. Prosjektet var et eksperiment og TINE valgte å gå videre med chatbot ideen. "
    },
    {
      "CompanyName": "Visma",
      "ProjectName": "Visma Autopay",
      "Roles": ['Utvikler'],
      "Tech": ['Java EE', 'JavaServer Faces', 'Angular.js', 'Karma', 'Jasmin', 'Javascript', 'Java', 'Jenkins', 'SVN', 'Selenium'],
      "Start": "01.06.2015",
      "End": "01.06.2017",
      "Description": "AutoPay er en helautomatisk betalingstjeneste som tar hånd om all inn- og utgående betalinger for et ubegrenset antall kunder. Alle kunder som benytter Visma Business Regnskapsbyra kan benytte Visma AutoPay for automatisk transport av betalingsdata begge veier mellom regnskapsprogram og datamottaker (for eksempel BBS, DnB NOR, Nordea eller Fokus Bank)."
    },
    {
      "CompanyName": "NTNUi Dans",
      "ProjectName": "www.ntnuisdans.no",
      "Roles": ['Utvikler'],
      "Tech": ['Python', 'Flask', 'javascript', 'SQL Alrchemy', 'PostgrSQL', 'nginx', 'uwsgi'],
      "Start": "01.01.2013",
      "End": "01.01.2016",
      "Description": "NTNUiDans.no er web portalen for studentgruppe som driver med dans under NTNUi paraplyen. Systemet er en web portal og CMS med administrasjons-side for håndtering av innhold, arrangement, treninger, brukere, instruktører, instruktør sertifisering og betaling av treningskontigent. Prosjektet var et kundestyrt bachelor-prosjekt hvor Kristian arbeidet i et team på 8 personer. Web portalen ble utviklet i rammeverket Flask i programmeringsspråket Python. Betalingsløsningen ble laget med rammeverket Stripe og databaselaget ble laget ved hjelp av SQLAlchemy og PostgreSQL. www.ntnuidans.no"
    },
    {
      "CompanyName": "NTNUi Squash",
      "ProjectName": "www.ntnuisquash.no",
      "Roles": ['Utvikler'],
      "Tech": ['Python', 'Flask', 'javascript', 'SQL Alrchemy', 'PostgrSQL', 'nginx', 'uwsgi'],
      "Start": "01.09.2013",
      "End": "01.08.2015",
      "Description": "NTNUiSquash.no er portalen til studentgruppen som driver med Squash under NTNUi paraplyen. Systemet er ansvarlig for håndtering av brukere, nyheter og reservering og påmelding på ukentlige treninger. Nettsiden ble utviklet av Kristian mens han hadde verv som web ansvarlig i NTNUiSquash. Da den gamle nettsiden var gammel og utdatert, ble styret enige om at en ny nettside var nødvendig. Nettsiden ble utviklet som et CMS, med administrasjonside for håndtering av brukere, nyheter og treninger. For sluttbrukere ble nettsiden brukt til å reservere ukentlige treninger for et semester i gangen, samt bekrefte oppmøte på disse treningene. Om oppmøte ikke er bekreftet 5 dager før treningdatoen blir den tilgjengelig for alle brukere, hvor den som melder seg på først blir tildelt plassen for den enkelte treningen."
    },
    {
      "CompanyName": "Direktoratet for forvaltning og IKT (DIFI)",
      "ProjectName": "Oppslagsverk for offentlige kunngjøringer (Doffin)",
      "Roles": ['Utvikler'],
      "Tech": ['elastic search', 'angular', 'java', 'spring boot', 'javascript'],
      "Start": "01.06.2014",
      "End": "01.08.2014",
      "Description": "ID-porten var en mobil applikasjon for Android som gjorde det mulig å logge inn med ID-porten og lagre autentiseringen på mobilen på en sikker måte. Innloggingen kunne så bli brukt av andre applikasjoner på samme måte som man ofte bruker sin google eller facebook konto. Før at innloggingen kunne huskes, krevde applikasjonen at mobilen måtte låses med passord eller pin. Om ikke krevde applikasjonen innlogging for hvert bruk. Applikasjonen var en 'proof of concept' brukt for å demonstrere sikkerheten bak en slik løsning. Konseptet ble videre brukt til utvikling av AltInn appen."
    },
    {
      "CompanyName": "Direktoratet for forvaltning og IKT (DIFI)",
      "ProjectName": "Oppslagsverk for offentlige kunngjøringer (Doffin)",
      "Roles": ['Utvikler'],
      "Tech": ['android', 'java', 'spring boot'],
      "Start": "01.06.2014",
      "End": "01.08.2014",
      "Description": "Doffin er et system for oppslag i den nasjonale kunngjøringsdatabasen for offentlig anskaffelser. Systemet ble utviklet som en PoC i over en sommer av studenter ved Direktoratet for forvaltning og IKT (DIFI). Prosjektet ble utviklet med java backend, elasticsearch for søking i oppslag og angular ble brukt til å vise resultater frontend."
    }
  ],
  "education": [
    {
      "UniversityName": "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      "specialization": "Master of Science (MSc), Informatikk, Kunstig Intelligens",
      "MonthOfPassing": "Juni",
      "YearOfPassing": "2017",
      "Achievements": "Some Achievements"
    },
    {
      "UniversityName": "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      "specialization": "Bacelor of Science (BSc) Informatikk",
      "MonthOfPassing": "Juni",
      "YearOfPassing": "2015",
      "Achievements": "Some Achievements"
    }
  ],
  "work": [
    {
      "CompanyName": "Bouvet",
      "specialization": "IT Konsulent",
      "MonthOfLeaving": "Mai",
      "YearOfLeaving": "2020",
      "Achievements": "Gjennom sin jobb hos bouvet var Kristian utleid på flere prosjekter hos kunder som: Tine, Sproveien og Avinor"
    },
    {
      "CompanyName": "Visma Software Autopay",
      "specialization": "Systemutvikler",
      "MonthOfLeaving": "Juni",
      "YearOfLeaving": "2017",
      "Achievements": "Kristian jobbet deltid hos Visma mens han studerte og fulltid på sommerne siden 2015."
    },
    {
      "CompanyName": "Direktoratet for forvaltning og IKT (Difi)",
      "specialization": "Systemutvikler",
      "MonthOfLeaving": "Juni",
      "YearOfLeaving": "2014",
      "Achievements": "Kristian jobbet hos Difi i et engasjement sommeren 2014."
    }
  ],
  "skillsDescription": "Your skills here",
  "skills": [
    {
      "skillname": "HTML5"
    },
    {
      "skillname": "CSS"
    },
    {
      "skillname": "Reactjs"
    }
  ],
  "portfolio": [
    {
      "name": "Verktøy for visualisering av potensielle feil på spornettet",
      "description": "Verktøy for visualisering av potensielle feil på spornettet",
      "imgurl": "images/portfolio/geofeil.jpg"
    },
    {
      "name": "Verktøy for trening og visualisering av modeller",
      "description": "Optimalisering av Rangering og Dispatching av tbanevogner",
      "imgurl": "images/portfolio/base-agent.gif"
    },
    {
      "name": "AviKiosk",
      "description": "Digitalt Infosenter for reisende på flyplass",
      "imgurl": "images/portfolio/avinor-osl.png"
    },
    {
      "name": "Rangeringsmodul",
      "description": "Rangering av tbanevogner ved AI trent med reinforcement learning",
      "imgurl": "images/portfolio/rl-sporveien6.gif"
    },
    {
      "name": "Overvåkning av sensordata",
      "description": "Overvåkning av sporgeometri for tbanenettet",
      "imgurl": "images/portfolio/geometri.jpg"
    },
    {
      "name": "NTNUi Squash",
      "description": "CMS og medlemsside for NTNUi Squash",
      "imgurl": "images/portfolio/ntnuisquash.png"
    },
    {
      "name": "NTNUi Dans",
      "description": "Side for påmelding, innhold og betaling for NTNUi Dans",
      "imgurl": "images/portfolio/ntnuidans.png"
    },
    {
      "name": "Prediktiv vedlikehold av Sporvekslere",
      "description": "Analyse og varsling av feil på sporvekslere",
      "imgurl": "images/portfolio/psv.jpg"
    },
  ]
}

export default resumeData