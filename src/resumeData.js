let resumeData = {
  "socialLinks": [
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/kristian-ekle-3150836b/",
      "className": "fa fa-linkedin"
    },
    {
      "name": "github",
      "url": "http://github.com/krekle",
      "className": "fa fa-github"
    },
    {
      "name": "cv",
      "url": "CV_KristianEkle.pdf",
      "className": "fa fa-file-pdf-o"
    }
  ],
  "featured": [
    {"Name": "Java", "Description": "Kristian har erfaring med Java fra sin tid på NTNU og i sitt arbeid hos Visma og Buypass AS. Han har god kjennskap til SpringBoot, som han blant annet har brukt til å skrive mange mikrotjenester og frontends med ulike formål og mekanismer som APIer, autentisering, proxy, database, osv."},
    {"Name": "JavaScript", "Description": "Kristian har mye erfaring med JavaScript fra utdannelsen og flere kundeprosjekter. Blant annet i form av frontendrammeverk som React eller Angular, og i utviklingsmiljø som bruker teknologi og byggverktøy som TypeScript, npm, lintere og automatiserte tester."},
    {"Name": "C# & .NET", "Description": "Kristian jobbet tidligere i en C#/.NET avdeling i Bouvet og bidro mye til fagmiljøet rundt Azure og Microsoft-teknologier. Han er godt kjent med C#, .NET, nuget og Azure fra flere tidligere prosjekter hos Sporveien og Avinor. Han har blant annet levert løsninger til backend APIer, Windows services, samt kalkulasjoner i Azure Functions, med C# og .NET core."},
    {"Name": "Python", "Description": "Kristian har brukt Python i flere prosjekter hos Sporveien; til maskinlæring og optimaliseringsoppgaver, APIer og kalkulasjoner i AWS Lamdas og Azure Functions. Han har også erfaring med Django, Flask og Bottle til hobbyprosjekter og fra studietiden, blant annet for utvikling av nettsider til linjeforeningen/NTNUI-grupper."},
    {"Name": "Infrastruktur og CI/CD", "Description": "I de fleste prosjektene Kristian har vært en del av har han hatt ansvaret for eller bidratt i utvikling av CI/CD pipelines, enten via script i Jenkins, i Azure DevOps eller i GitLab pipelines. Han tar ofte ansvar for deployment av applikasjoner og har erfaring med å prodsette løsninger on-prem eller i skyen med Docker/Kubernetes"},
  ],
  "projects": [
    {
      "version": 2,
      "CompanyName": "Buypass",
      "ProjectName": "Buypass Identity Fido2 og brukerhåndtering for kommune, helse og farmasisektoren",
      "ProjectDescription": "Buypass er et norsk selskap som tilbyr blant annet betaling og tillitstjenester som autentisering og brukerhåndtering. Fido2 er en ny standard for passordløs autentisering på web. Buypass leverer en løsning for autentisering og brukerhåndtering hvor man kan bruke en fysisk nøkkel til å logge på systemer. Løsningen er levert hos flere kunder i kommune- helse- og farmasisektoren. Løsningen gjør det mulig feks logge på statlige tjenester via med FIDO2-nøkkel via ID-porten",
      "Roles": [
        {'Name': 'Frontendansvarlig', 'Description': 'Kristian var ansvarlig for frontend i sitt team hos Buypass. I denne rollen utviklet han React applikasjoner, "vanilla" Javascript componenter i frontend for MVC løsninger og gjenbrukbare komponentbiblioteker i Web Components som resten av teamet kunne bruke. Han samarbeidet også mye med UX of forretning for å lage brukervennlige og estetiske skjermer. Han deltok også på frontendforum, som var et initiativ til samles rundt et felles designsystem laget i Figma, Storybook og React'}, 
        {'Name': 'Fullstackutvikler', 'Description': 'Som fullstackutvikler jobbet Kristian med alle lag i teknologistacken, han lagde apper i JavaScript og React, backend apier, mikroservices og MVC løsninger i Spring-Boot, samt docker/kubernetes og nginx filservere. Han jobbet også en del med eventer i kafka, logstash og elasticsearch til auditlogging og rapporter.'},
      ],
      "Contribution": "Kristian jobbet som utvikler av systemet, han jobbet primært på web applikasjoner for styring av fido2-nøkler, personalia og id-kontroll av personell. Men og en del med event systemet som sendte meldinger over kafka til logstash og videre til elasticsearch. Meldingene ble brukt til rapportering og fakturering. Han bidro også med produksjonsetting, konfigureringg og monitorering av løsningene",
      "Tech": ['Web Components', 'Java', 'Spring-Boot', 'Spring security', 'OIDC', 'Fido2', 'Rancher', 'Docker', 'Kubernetes', 'typescript', 'LDAP', 'git', 'gitlab', 'gitlab-pipelines', 'CI/CD', 'Logstash', 'Elasticsearch', 'Kafka', 'Azure', 'Blob Storage', 'Nginx'],
      "Start": "01.09.2019",
      "End": "01.05.2023"
    },
    {
      "version": 2,
      "CompanyName": "Buypass",
      "ProjectName": "Id-kontroll med digital passleser",
      "ProjectDescription": "Buypass er et norsk selskap som tilbyr blant annet betaling og tillitstjenester som autentisering og brukerhåndtering. Løsningen for digital id-kontroll ble laget på bestilling fra digitaliserings direktoratet som et alternativ til fysisk oppmøte, som var relevant under covid19 pandemien. Kristian jobbet som utvikler med ansvar for web-klient og api-laget for løsningen. Løsningen ble brukt som alternativ autentiseringsinstrument på feks nav.no.",
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': 'I denne rollen utviklet Kristian en webapplikajson med React frontend og backend i Spring-Boot. Applikasjonen gikk ut på å gjennomføre en id-kontroll av brukere for utstedelse av elektronisk id. Kristian samarbeidet med et kryssfaglig team til å lage en app som brukte integrasjon mot folkeregisteret og en app fra .Nets som leser data fra moderne pass til å gjennomføre en biometrisk id-kontroll. Kristian var også ansvarlig for å integrere mot betalingsløsning etter gjennomført kontroll. Han samarbeidet direkte med UX-ansvarlig iterativt for å gjøre applikajsonene estetiske og brukervennlige.'}, 
      ],
      "Tech": ['React', 'Java', 'Spring-Boot', 'Rancher', 'Docker', 'Docker-compose', 'typescript', 'OIDC', 'git', 'gitlab', 'gitlab-pipelines'],
      "Start": "01.05.2020",
      "End": "01.09.2020",
      "Contribution": "Kristian jobbet som fullstackutvikler av systemet, men han var ansvarlig for frontend. Han bidro også med 'containerisering' produksjonsetting, konfigureringg og monitorering av løsningene",
      
    },
    {
      "version": 2,
      "CompanyName": "Avinor",
      "ProjectName": "Digitalt Infosenter / InfoKiosk",
      "ProjectDescription": "Avinor er et norsk statlig selskap, og Norges største eier av flyplasser. Selskapet driver 44 flyplasser, hvorav 12 eies av Forsvaret. Norge har i de siste årene opplevd en økning i turisme, en trend som forventes å fortsette å øke. Dette har blitt en stor belastning for de ansatte ved informasjonssenteret i ankomsthallen.  Dette har gjort det nødvendig å endre informasjonssenteret for å kunne håndtere flere turister raskere. Etter en innsiktsundersøkelse så vi at de mest stilte spørsmålene kan løses digitalt, som kan frigjøre tid og senke stressnivået for både besøkende og ansatte. Kristian deltok i et team før å disse utfordringene, første fase var å sette opp en informasjons-kiosk for Oslo Lufthavn. I prosjektets fase 2 rulles løsningen ut på andre norske flyplasser. ",
      "Contribution": "Kristian jobbet i et lite utviklingsteam på 3 utviklere og 1 designer. Løsningen besto en React-app som ble kjørt på en fysisk installasjon i form av en touchskjerm infokiosk, og en backoffice app hvor Avinor ansatte kan endre innhold på de ulike flyplassens i en admin-webapp. Teamet og Kristian var ansvarlig for oppsett, utvikling og utrulling av systemet. Infokiosken kunne bla bistå reisende med flyplasskart, rutetider og ruteplanlegging for buss, tog og taxi, severdigheter og evt driftsmeldinger. Informasjonsskioskene er nå installert i Oslo, Stavanger, Bergen og Trondheim.",
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Kristian jobbet med implementering av løsningen basert på kundens spesifikasjon i samarbeid med UX. Han kodet i alle lagene av løsningen: Database, C#, React og i Azure. Han jobbet med resten av teamt i å utarbeide systemarkitektur og design av applikasjonene."}, 
      ],
      "Tech": ['React', 'C#', '.NET Core', 'Azure', 'Azure DevOps', 'CosmosDB', 'GraphQL', 'Typescript', 'git', 'CI/CD', 'Docker', 'Kubernetes'],
      "Start": "01.10.2019",
      "End": "01.05.2020",
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
      "CompanyName": "Fyr Consulting",
      "specialization": "IT Konsulent og Daglig leder",
      "MonthOfLeaving": "Mai",
      "YearOfLeaving": "2020",
      "Achievements": "Gjennom sitt arbeid som it-konsulten i Fyr Consulting er Kristian på prosjekt hos Buypass"
    },
    {
      "CompanyName": "Bouvet",
      "specialization": "IT Konsulent",
      "MonthOfLeaving": "Mai",
      "YearOfLeaving": "2020",
      "Achievements": "Gjennom sin jobb hos bouvet var Kristian utleid på flere prosjekter hos kunder som: Tine, Sporveien og Avinor"
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
    {
      "name": "Pålogging med Buypass Identity & passordløs FIDO2-teknologi hos Altinn",
      "description": "Påloggingsskjerm som bruker Buypass Identity & passordløs FIDO2-teknologi ",
      "imgurl": "images/portfolio/bpaltinn.png"
    },
  ]
}

export default resumeData