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
    {"Name": "JavaScript", "Description": "Mye erfaring med JavaScript fra utdannelse og i fra kundeprosjekter. God kontroll på rammeverk som React, Angular eller Express.js og bruk av for eksempel Webpack, npm, lintere og automatiserte tester."},
    {"Name": "Java", "Description": "Erfaring  i Java fra NTNU og hos Visma og Buypass. God kjennskap til Spring-Boot, for eksempel til å skrive mikrotjenester og backends med ulike formål, som APIer, autentisering, proxy, database, osv."},
    {"Name": "C# & .NET", "Description": "Jobbet tidligere i en C#/.NET avdeling i Bouvet og bidro mye til fagmiljøet rundt Azure og Microsoft-teknologier. Godt kjent med C#, .NET, ASP.NET, nuget og Azure fra flere prosjekter hos Sporveien og Avinor. Har blant annet levert backend APIer, Windows services, samt kalkulasjoner i Azure Functions, med C# og .NET Core."},
    {"Name": "Python", "Description": "Har benyttet Python i flere prosjekter hos Sporveien; til maskinlæring og optimaliseringsoppgaver, APIer, samt kalkulasjoner i AWS Lamdas og Azure Functions. Han har også erfaring med Django, Flask og Bottle fra hobbyprosjekter og studietiden, blant annet for utvikling av nettsider til linjeforeningen/NTNUI-grupper. "},
    {"Name": "Infrastruktur og CI/CD", "Description": "God kontroll på utvikling av CI/CD pipelines, enten via script i Jenkins, i Azure DevOps eller i GitLab pipelines. Tar ofte ansvar for deployment av applikasjoner og har erfaring med å produksjonssette løsninger on-prem eller i skyen med Docker/Kubernetes."},
  ],
  "projects": [
    {
      "version": 3,
      "CompanyName": "Buypass",
      "ProjectName": "Buypass FIDO2 Identity Services",
      "ProjectDescription": "Buypass utviklet en løsning for sikker pålogging og brukerhåndtering på høyeste sikkerhetsnivå, eIDas høy, med FIDO2 teknologi. Løsningen blir nå brukt av flere kunder av Buypass i kommune-, farmasi- og helsesektor. Det er også mulig å bruke løsningen til pålogging av offentlige tjenester som Nav og Skatteetaten gjennom ID-porten.",
      "Contribution": "Kristian jobbet med flere aspekter av Buypass FIDO2 Identity-løsningen, bl.a. infrastruktur, servicelag, og som hovedansvarlig for frontendapplikasjoner. Han utviklet flere applikasjoner og mikrotjenester i Spring-boot, selvbetjeningsløsninger, backofficeløsninger og påloggingsskjermer for bl.a. ID-porten i webteknologier og skrev Logstash pipelines som sendte meldinger fra Kafka til ElasticSearch. ",
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': 'Som fullstackutvikler jobbet Kristian med alle lag i teknologistacken, han lagde apper i JavaScript og React, backend apier, mikroservices og MVC løsninger i Spring-Boot, samt docker/kubernetes og nginx filservere. Han jobbet også en del med eventer i kafka, logstash og elasticsearch til auditlogging og rapporter.'},
        {'Name': 'Frontendansvarlig', 'Description': 'Kristian var ansvarlig for frontend i sitt team hos Buypass. I denne rollen utviklet han React applikasjoner, "vanilla" Javascript componenter i frontend for MVC løsninger og gjenbrukbare komponentbiblioteker i Web Components som resten av teamet kunne bruke. Han samarbeidet også mye med UX of forretning for å lage brukervennlige og estetiske skjermer. Han deltok også på frontendforum, som var et initiativ til samles rundt et felles designsystem laget i Figma, Storybook og React'}, 
      ],
      "Bullets": [
        'Skrev backendløsninger og mikrotjenester i Spring-Boot ',
        'Utviklet webapper og selvbetjeningsløsninger i samråd med UX og forretning ',
        'Deltok i løsningsdesign og arkitektur av eventsystem og multi-tenantversjon av FIDO2 identity services ',
        'Skrev løsninger som publiserte, konsumerte, monitorerte og visualiserte events og auditlogs i Kafka ',
        'Pilotprosjekt for deploying av applikasjoner til Kubernetes som senere ble adoptert  '
      ],
      "Tech": ['Web Components', 'Java', 'Spring-Boot', 'Spring security', 'OIDC', 'Fido2', 'Rancher', 'Docker', 'Kubernetes', 'typescript', 'LDAP', 'git', 'gitlab', 'gitlab-pipelines', 'CI/CD', 'Logstash', 'Elasticsearch', 'Kafka', 'Azure', 'Blob Storage', 'Nginx'],
      "Start": "01.09.2019",
      "End": "01.05.2023"
    },
    {
      "version": 3,
      "CompanyName": "Buypass",
      "ProjectName": "Id-kontroll med digital passleser",
      "ProjectDescription": "For å få utestedet en elektronisk ID er det nødvendig å gjennomføre en id-kontroll hvor en operatør gjør en kontroll av pass, dette krever fysisk oppmøte. Spesielt under korona-pandemien var det ønskelig med en løsning for remote id-kontroll. På oppdrag fra Digitaliseringsdirektoratet satte Buypass i gang med å lage en måte for brukere å autentisere seg mot offentlige tjenester gjennom en digital passleser.",
      "Contribution": "Kristian ble engasjert av Buypass til å gå inn som fullstackutvikler i et team med mye kompetanse på sikkerhet og kryptografi, hvor han var ansvarlig for å utvikle en applikasjon i React for idkontroll av brukere og betaling, samt tilhørende API for pålogging med OIDC, kommunikasjon med backendtjenester og integrasjon mot Nets Passport Reader.",
      "Bullets": [
        'Utviklet webapp i React for bestilling, id-verifikasjon og betaling av elektronisk id ',
        'Skrev API og tjenester i Spring-Boot ',
        'Lagde CI/CD pipelines og konfigurerte Docker, Docker-compose, traefik og nginx for deployment og sikkerhet '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': 'I denne rollen utviklet Kristian en webapplikajson med React frontend og backend i Spring-Boot. Applikasjonen gikk ut på å gjennomføre en id-kontroll av brukere for utstedelse av elektronisk id. Kristian samarbeidet med et kryssfaglig team til å lage en app som brukte integrasjon mot folkeregisteret og en app fra .Nets som leser data fra moderne pass til å gjennomføre en biometrisk id-kontroll. Kristian var også ansvarlig for å integrere mot betalingsløsning etter gjennomført kontroll. Han samarbeidet direkte med UX-ansvarlig iterativt for å gjøre applikajsonene estetiske og brukervennlige.'}, 
      ],
      "Tech": ['React', 'Java', 'Spring-Boot', 'Rancher', 'Docker', 'Docker-compose', 'TypeScript', 'JavaScript', 'OIDC', 'git', 'gitlab', 'gitlab-pipelines'],
      "Start": "01.05.2020",
      "End": "01.09.2020",
      
    },
    {
      "version": 3,
      "CompanyName": "Avinor",
      "ProjectName": "Digitalt Infosenter / InfoKiosk",
      "ProjectDescription": "Avinor et behov for å bistå de ansatte ved informasjonsskrankene på sine flyplasserog så at de mest stilte spørsmålene kunne løses digitalt, det ville redusere ressursbehovet ved informasjonsskrankene.  Kristian var del av team som skulle løse dette problemet, første fase var å sette opp en digital informasjonskiosk for Oslo Lufthavn. I prosjektets fase 2 ble løsningen utrullet på andre norske flyplasser. ",
      "Contribution": "Kristian jobbet i et lite smidig team bestående av tre utviklere og en designer som beveget seg hurtig, med hypping feedback fra kunde og sluttbrukere. Løsningen bestod av webapplikasjoner i React, backend i C# ASP. NET Core og brukte flere tjenester fra Azure til pålogging, datapersistering, og deployment.",
      "Bullets": [
        'Utviklet av infokiosk i React med touchstøtte, med bl.a. kart, rutetider og artikkelsystem ',
        'Utviklet backofficeløsning i React med mulighet for å redigere innhold i infokiosk per fysiske enhet, med friteksteditering i Markdown ',
        'Deltok i å utarbeide løsningsdesign og arkitektur for systemet',
        'CI/CD pipelines og konfigurasjon av Docker for deployment til Azure Kubernetes ',
        'CI/CD pipeline som provisjonerte nødvendig infrastrukture i Azure infrastructure as code (IaC) ',
        'Bidro også til utplukking av hardware, 3D-printing og oppsett av den fysiske infokiosken '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Kristian jobbet med implementering av løsningen basert på kundens spesifikasjon i samarbeid med UX. Han kodet i alle lagene av løsningen: Database, C#, React og i Azure. Han jobbet med resten av teamt i å utarbeide systemarkitektur og design av applikasjonene."}, 
      ],
      "Tech": ['React', 'C#', 'ASP.NET Core', 'Azure', 'Azure DevOps', 'CosmosDB', 'GraphQL', 'Typescript', 'JavaScript', 'git', 'CI/CD', 'Docker', 'Kubernetes'],
      "Start": "01.10.2019",
      "End": "01.05.2020",
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "Geometritoget",
      "ProjectDescription": "Geometritoget er en t-banevogn utstyrt med over 30 sensorer som måler verdier for blant annet sporvidde, kurve, vindskjevhet, akselerometer, m.m. Toget vil ved normal bruk dekke hele spornettet per 2 uker. Sporveien etablerte et lite team for å hente ned, dekode og analysere denne dataen med ønske om å kunne si noe om vedlikeholdsbehov til spornettet. Dataen fra geometritoget skal gjøre det mulig for de som er ansvarlige for vedlikehold av infrastrukturen i Sporveien å se på trending av feil, få varsel dersom en sensor fanger opp målinger som er utenfor terskelverdier, samt se på gjennomsnittlige hastigheter på hele skinnenettet. ",
      "Contribution": "Kristian ble engasjert i dette prosjektet som eneste tekniske ressurs. Han var ansvarlig for løsningsdesign og implementering av softwareløsningen for systemet, og utviklet ulike tjenester for dataprosessering på servere og i sky for å dekode, transformere og overføre data til ulike systemer.",
      "Bullets": [
        'Skrev tjenester i C# services som overførte sensordata fra toget over 4g-nettet til AWS S3',
        'Benyttet Python for å konvertere sensordata fra et proprietært binærsystem brukt av sensorleverandør ',
        'Skrev og satt opp AWS Lambdas til å agere på events til å transformere data  ',
        'Utviklet ETL pipelines i Databricks mot AWS DynamoDB og AWS Redshift til prosessering av store datamengder ',
        'Utarbeidet løsningsdesign for systemets arkitektur som ble presentert og akseptert i Arkitekturforum ',
        'Utviklet webapp i React for visualiseringer av sensordata, deployet med CI/CD pipelines til AWS',
        'Besøkte jevnlig verkstedhallen for å feilsøke systemet på vognen '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Som eneste utvikler jobbet Kristian med alle ledd av teknologistacken. Han utviklet services og script i C# og AWS Lambda som konverterte, lastet og arkiverte spordata i AWS S3 og Redshift, skrev ETL prosedyrer i databricks som transformerte data. Tilgjengeliggjorde data for rapporter i Tableau og skrev frontendløsninger i Angular"}, 
        {'Name': 'Arkitekt', 'Description': "En del av prosjektet var å designe systemet med utgangspunkt i Sporveiens eksisterende infrastruktur og tjenesteportefølje, for å få en smidig handover ved ferdigstillelse. Kristian designet dette systemet og presenterte det for Sporveiens 'arkitektur forum' og øvrige forretning for godkjennelse før det ble videreutviklet."}, 
      ],
      "Tech": ['C#', 'AWS', 'IoT', 'git', 'Python', 'Tableau', 'AWS Redshift', 'AWS S3', 'AWS Lambda', 'Databricks', 'PySpark', 'Big Data', 'Datavarehus', 'React', 'TypeScript'],
      "Start": "01.12.2018",
      "End": "01.01.2020",
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "Prediktivt vedlikehold av Sporvekslere",
      "ProjectDescription": "Sporveien kjøpte og installerte nye sporvekslere med en sensor for måling og rapportering av nøyaktig strømforbruk med høy oppløsning. Planen var å undersøke om det var mulig å predikere vedlikeholdsbehov basert på denne dataen. ",
      "Contribution": "Kristian ble engasjert for å prototype en løsning som kunne bruke denne dataen til å analysere, visualisere og varsle dersom loggførte strømtrekk på sporvekslinger i t-banenettet er utenom det vanlige og tilsa at det var behov for vedlikehold. Som eneste utvikler på prosjektet utviklet han en løsning med Angular7 og Python Flask backend for visualisering servert fra Azure. Analyse og databehandling ble gjort i WebJobs, Azure Function, Blob storage og Azure CosmosDB. ",
      "Bullets": [
        'Skrev C#-kode kjørt i Azure Functions og WebJobs som brukte algoritmer fra signalbehandling og statistikk til å analysere sporvekslinger ',
        'Utviklet system i Azure Functions som varslet dersom vekslinger var utenfor normalen ',
        'Utviklet webapp for visualiseringer, deployet i CI/CD pipelines til Azure',
        'Besøkte sporskinner for å lage data til scenarioer hvor sporvekling feilet '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Som utvikler var Kristian ansvarlig for å utvikle og sette opp de ulike elementene i løsningen i Python, C#, Angular og i Azure. For å predikere behovet for vedlikehold brukte Kristian algoritmer fra signalbehandling samt AI/ML til å analysere data. Han var også ute i 'felten' for å se på sporvekslere og lage treningsdata for algoritmene. Resultatet ble visualisert i en frontend skrevet i Angular, og det ble utsendt varslinger fra Azure på potensielle vedlikeholdsbehov."}, 
      ],
      "Tech": ['Python', 'C#', 'Azure', 'Azure CosmosDB', 'Azure Blobstorage', 'Azure Function', 'Angular', 'typescript', 'git'],
      "Start": "01.10.2018",
      "End": "01.03.2019",
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "IVO - Individstyring av Vognparken",
      "ProjectDescription": "Håndtering og bestilling av t-banevogner for regelstyrt ettersyn ved T-baneverkstedet på Ryen i Oslo er en kompleks manuell oppgave. Denne oppgaven involverer ekspertise innen domenet, da t-banevognene må inn til ettersyn basert på ulike vedlikeholdsbehov som kan skyldes både tidsforløp og kjørte kilometer. Av økonomiske hensyn er det ønskelig å maksimere antall kilometer en vogn kan kjøre før ettersyn, da ubrukte kilometer representerer betydelige kostnader over vognens levetid. Dette er en utfordrende oppgave grunnet den komplekse kombinasjonen av faktorer som påvirker en vogns tilstand, inkludert rutevalg, parkeringsstruktur, uforutsett vedlikehold og rengjøring.  Prosjektet kalt IVO (Individstyring av vognparken), hvor et forprosjekt ble etablert for å utforske muligheten for å utvikle digitale verktøy for å optimalisere planleggingen av ettersyn og styringen av t-banevogner. Kristian ble engasjert som utvikler og data scientist, for å undersøke om AI/ML-teknikker kunne løse denne utfordringen. Forprosjektet resulterte i en Proof of Concept (PoC) som dannet grunnlaget for fremtidige prosjektforslag og patentsøknad.",
      "Contribution": "Kristian jobbet med alle delene av systemet, og var i lengre tid eneste utvikler på prosjektet. Problemet viste seg å være svært komplekst og det ble oppdelt i flere subproblemer som ble løst av skreddersydde optimaliseringsrutiner skrevet som Evolusjonære algoritmer i Python og reinforcementlærning i Tensorflow. Videre jobbet han med integrasjoner mot kjernesystemer for å hente ut nødvendig informasjon som kilometerstand og ruteplan.",
      "Bullets": [
        'Skrev evolusjonære algoritmer i Python for å utarbeide ruteallokering for å treffe optimale verksteddatoer ',
        'Utviklet “et spill” av reglene for rangering på depot og brukte reinforcement learning til å trene modeller som lærte seg å rangere tog på for å treffe allokert rutevalg. Modellene ble trent ved å "spille" over lengre tid i AWS EC2 ',
        'Holdt presentasjoner om systemet på Make data smart Again ',
        'Skrev rapporter og utarbeidet arkitektur for fullskala prosjekt som ble brukt til patentsøknad ',
        'Flere besøk på t-banehallen for å forstå domenet ',
        'Tkinter GUI for visualisering av modeller mens de rangerer vogner '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Han jobbet med å utvikle modeller for IVO, itegrasjoner mot kildedata og oppsett av server samt CI/CD mot maskinjer i amazon. Videre jobbet han med datamodeller og optimeringsalgoritmer for løsningen. I en iterativ prosess bidro Kristian til å utvikle og teste hypoteser og modeller."}, 
        {'Name': 'Arkitekt', 'Description': "Som Arkitekt jobbet han med å identiﬁsere nødvendige komponenter for IVO, utarbeiding av arkitekturskisser og estimering av prosjektets omfang i timer og personell. Gjennom en forberedende fase mellom proof-of-concept og utviklingsløp jobbet Kristian med å koordinere valg av teknologi og plattform med tanke på prosjektets og kundes behov. "}, 
      ],
      "Tech": ['Python', 'Reinforcement Learning', 'Genetisk Algoritme', 'DEAP', 'Ray', 'Azure DevOps', 'AWS EC2', 'git'],
      "Start": "01.09.2017",
      "End": "01.10.2018",
    },

    {
      "version": 3,
      "CompanyName": "Tine",
      "ProjectName": "TineMatsans Chatbot",
      "ProjectDescription": "I forbindelse med videreutvikling av nettsiden og oppskriftsdatabasen til Tines var det ønskelig å se om det var mulig å bruke ChatBot-teknologi til å lage en smart chat bot som kunne interagere med kunder for å foreslå matoppskrifter fra oppskriftsdatabasen, smartsans, basert på deres preferanser og tilgjengelige ingredienser.",
      "Contribution": "Kristian ble engasjer som utvikler for å jobbe på en PoC (Proof of concept) som gikk ut på å koble Microsoft Bot Framework opp mot deler av samme backend og database som oppskriftsnettsiden brukte. Botten ble deployet på Azure og kunne integreres med ulike klienter, som Slack, Skype eller på nettsider. Prosjektet var vellykket og TINE valgte å gå videre med chatboten.",
      "Bullets": [
        'Utviklet og deployet chatbot laget i Microsoft BotFramework trent med dialoger trent i wit.ai  ',
        'Hentet oppskrifter og bildeinfo fra GraphQL som kunne vises i chat-dialogen '
      ],
      "Roles": [
        {'Name': 'Fullstackutvikler', 'Description': "Som utvilkler jobbet Kristian med integrasjoner mot nødvendig kildedata i GraphQL, oppsett av Bot Framework og design av card som ble brukt til å visualisere oppskrifter i chat-dialogene."}, 
      ],
      "Tech": ['node.js', 'GraphQL', 'Microsoft Bot Framework', 'javascript', 'git'],
      "Start": "01.08.2017",
      "End": "01.09.2017",
    },
    {
      "version": 3,
      "CompanyName": "Visma",
      "ProjectName": "Visma Autopay",
      "ProjectDescription": "AutoPay er en helautomatisk betalingstjeneste som tar hånd om alle inn- og utgående betalinger for et ubegrenset antall kunder. Alle kunder som økonomisystem fra Visma kan benytte Visma AutoPay for automatisk transport av betalingsdata begge veier mellom regnskapsprogram og datamottaker (for eksempel BBS, DnB NOR, Nordea eller Fokus Bank).",
      "Contribution": "Kristian jobbet som utvikler i AutoPay i et team på 8-12 personer, han starter sin rolle der som sommer-student som skulle se på modernisering av frontend-løsningen og bakenforliggende api med Angular.js. Det ble besluttet å gå videre med angular som ny løsning for frontend og Kristian fortsatte å jobbe hos Autopay med implementering av ny frontend ved siden av studiene på NTNU til han ble uteksaminert.",
      "Bullets": [
        'Gjennomførte en suksessfull PoC av ny frontend i Angular  ',
        'Implementering av ny frontend og tilhørende API som tok over for Java MVC-løsning '
      ],
      "Roles": [
        {'Name': 'Utvikler', 'Description': "Som utvikler jobbet Kristian med frontend i Angualr.js og bakenforliggende API i Java JSF"}, 
      ],
      "Tech": ['Java EE', 'JavaServer Faces', 'Angular.js', 'Karma', 'Jasmin', 'Javascript', 'Java', 'Jenkins', 'SVN', 'Selenium'],
      "Start": "01.06.2015",
      "End": "01.06.2017",
    },
    {
      "version": 3,
      "CompanyName": "Direktoratet for forvaltning og IKT (DIFI)",
      "ProjectName": "Doffin-data, eLæring i staten, App for ID-porten eID",
      "ProjectDescription": "Direktoratet for forvaltning og ikt (Difi) tar hvert år inn sommerstudenter med relevant pågående utdannelse i fra data-linjer på universiter og høyskoler i Norge til “Dificamp”.  Dificamp gir utviklerne i difi ekstra kapasitet til å teste ut nye teknologi eller til å jobbe med løsninger som det ellers ikke er tid til. ",
      "Contribution": "Kristian jobbet sommeren 2014 hos Difi i Leikanger. Han jobbet på tre forskjellige applikasjoner og systemer i løpet av 2 måneder; 'E-læringsplatform i PHP Moodle for kurs og elæring til bruk i staten', 'Indeksering og tilgjengeliggjøring av Doffin-data (data over offentlig anbud) i Elasticsearch og Spring boot' og 'Android app for inkludering av ID-porten MinId som en eID'",
      "Bullets": [
        'Utviklet egne plugins til eLæringsplatforment moodle for utstedelse av diplom/verifikasjon etter gjennomført kurs ',
        'Indeksering av 10år med doffindata i Elasticsearch som ble tilgjengeligjort med api i Spring-Boot ',
        'Utviklet PoC for ID-porten eID på Android som lagret autentisert bruker etter pålogging med ID-Porten '
      ],
      "Roles": [
        {'Name': 'Utvikler', 'Description': "Som utvikler jobbet Kristian alle lagene i de forskjellige løsningene. SpringBoot backends, Android applikasjoner og infrastrukturoppgaver i Elasticsearch"}, 
      ],
      "Tech": ['elastic search', 'angular', 'java', 'spring boot', 'javascript', 'android', 'java', 'spring boot', 'PHP', 'git', 'HTML/CSS'],
      "Start": "01.06.2014",
      "End": "01.08.2014",
      "Description": "ID-porten var en mobil applikasjon for Android som gjorde det mulig å logge inn med ID-porten og lagre autentiseringen på mobilen på en sikker måte. Innloggingen kunne så bli brukt av andre applikasjoner på samme måte som man ofte bruker sin google eller facebook konto. Før at innloggingen kunne huskes, krevde applikasjonen at mobilen måtte låses med passord eller pin. Om ikke krevde applikasjonen innlogging for hvert bruk. Applikasjonen var en 'proof of concept' brukt for å demonstrere sikkerheten bak en slik løsning. Konseptet ble videre brukt til utvikling av AltInn appen."
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