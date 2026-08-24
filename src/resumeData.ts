let resumeData = {
  content: {
    home: "Hjem",
    about: "Om",
    competence: "Kompetanse",
    cv: "CV",
    portfolio: "Portefølje",
    contact: "Kontakt",
    desc: "Fullstackutvikler med skaperglede for software",
    title: "Senior IT-konsulent og daglig leder i Fyr Consulting AS",
    availability: "For tiden engasjert hos KulturIT",
    about_header: "Om Kristian",
    about_short: "Har en mastergrad i informatikk fra NTNU med spesialisering i kunstig intelligens.",
    about_long: "Kristian er en erfaren og allsidig fullstackutvikler som trives både med selvstendig ansvar og i tverrfaglige team. Han arbeider gjerne på tvers av frontend, backend, database og infrastruktur, og deler aktivt kunnskap med andre utviklere.\n\n Han har en praktisk og målrettet tilnærming til utvikling og legger vekt på å levere robuste, vedlikeholdbare løsninger som dekker reelle behov. Kristian samarbeider tett med både brukere og forretning, og har erfaring fra hele produktløpet – fra behovsanalyse og løsningsdesign til utvikling, produksjonssetting og videre forbedring.",
    contact_header: "Kontaktinformasjon",
    contact_name: "Kristian Ekle ",
    contact_address: "Oslo, Norway",
    contact_email: "kristian.ekle@fyrconsulting.no",
    featured_header: "Fremhevet kompetanse",
    cv_promo: "Mer utfyllende informasjon i fullstendig CV, tilgjengelig på flere språk, ",
    cv_link: "pdf her",
    resume_header: "Prosjekter",
    resume_contributions: "Bidrag",
    education_header: "Utdannelse",
    work_header: "Arbeid",
    publications_header: "Publiseringer",
    courses_header: "Kurs",
    portfolie_header: "Et utdrag av tidligere prosjekter.",
    lead: "Ta gjerne kontakt på epost eller på linkedin."
  },
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kristian-ekle-3150836b/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/krekle",
      className: "fa fa-github",
    },
    {
      name: "cv",
      url: "CVKristianEkle_web.pdf",
      className: "fa fa-file-pdf-o",
    },
  ],
  featured: [
    {
      name: "JavaScript & TypeScript",
      description:
        "Mye erfaring med JavaScript fra utdannelse og i fra kundeprosjekter. God kontroll på rammeverk som React, Angular eller Express.js og bruk av for eksempel Webpack, npm, lintere og automatiserte tester.",
    },
    {
      name: "Java",
      description:
        "Erfaring med Java fra NTNU og prosjekter hos Visma og Buypass. God kjennskap til Spring Boot, blant annet for utvikling av mikrotjenester, API-er, autentisering og databaseintegrasjoner.",
    },
    {
      name: "C# & .NET",
      description:
        "Jobbet tidligere i en C#/.NET-avdeling i Bouvet og bidro til fagmiljøet rundt Azure og Microsoft-teknologier. God kjennskap til C#, .NET, ASP.NET, NuGet og Azure fra flere prosjekter hos Sporveien og Avinor. Har blant annet levert backend-API-er, Windows-tjenester og beregninger i Azure Functions.",
    },
    {
      name: "Python",
      description:
        "Har benyttet Python i flere prosjekter til maskinlæring, optimalisering, API-er og beregninger i AWS Lambda og Azure Functions. Han har også erfaring med FastAPI, Django, Flask og Bottle fra kundeprosjekter, egne prosjekter og studietiden.",
    },
    {
      name: "Infrastruktur og CI/CD",
      description:
        "God erfaring med utvikling av CI/CD-pipelines i blant annet Jenkins, Azure DevOps og GitLab. Tar ofte ansvar for produksjonssetting og har erfaring med containeriserte løsninger både lokalt og i skyen med Docker og Kubernetes.",
    },
  ],
  projects: [
    {
      version: 3,
      CompanyName: "KulturIT",
      ProjectName: "Primus",
      ProjectDescription:
        "Primus er KulturITs system for forvaltning av museumssamlinger og kulturhistoriske data.",
      Contribution:
        "Som senior fullstackutvikler arbeider Kristian hovedsakelig med å gjøre langtidskjørende prosesser og deployments raskere, sikrere og mer stabile. Arbeidet spenner over backend, database, infrastruktur og frontend, med vekt på målrettede forbedringer i eksisterende løsninger.",
      Roles: [
        {
          Name: "Senior fullstackutvikler",
          Description:
            "Kristian kombinerer utvikling av ny funksjonalitet med løpende forbedring av et komplekst system med mange integrasjoner og kundemiljøer.",
        },
      ],
      Bullets: [
        "Reduserte kjøretiden for en kritisk prosess fra 36 til 4,5 timer gjennom målrettet optimalisering av kode og database",
        "Gjorde import-, migrerings- og reindekseringsjobber mer robuste og stabile med bedre feilhåndtering, tidsavbrudd og fremdriftslogging",
        "Optimaliserte en rekke tunge databasespørringer og bidro til raskere og mer forutsigbar behandling",
        "Utviklet dvalemodus på tvers av frontend, backend og infrastruktur, slik at applikasjoner kan skaleres ned når de ikke er i bruk og vekkes ved behov",
        "Etablerte felles monitorering med logger, traces og metrikker, og utviklet ny funksjonalitet i Python og Angular",
      ],
      Tech: [
        "Python", "Flask", "FastAPI", "PostgreSQL", "Solr", "TypeScript", "Angular", "Docker", "Kubernetes", "Helm", "GitLab CI/CD", "OpenTelemetry"
      ],
      Start: "01.09.2025",
      End: "Pågående",
    },
    {
      version: 3,
      CompanyName: "NBIM",
      ProjectName: "Norges Bank Investment Management",
      ProjectDescription:
        "Formålet med Norges Bank Investment Management, Oljefondet,  er å sikre en langsiktig forvaltning av inntektene fra Norges olje- og gassressurser, slik at formuen kommer både dagens og fremtidige generasjoner til gode. Fondets formelle navn er Statens pensjonsfond utland.",
      Contribution:
        "Som fullstackutvikler hos NBIM jobbet Kristian med løsninger som visualiserte, tilgjengeliggjorde og analyserte data for porteføljeforvaltere. Han arbeidet i et utviklingsteam som samarbeidet tett med porteføljeforvaltere, tradere og andre interessenter. Arbeidet omfattet blant annet AWS-infrastruktur, API-er, langtidskjørende analysejobber og visualisering i Angular.",
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "",
        },
      ],
      Bullets: [
        "Utviklet backendløsninger i Python Fast API",
        "Videreutviklet C# .NET Core Applikasjon",
        "Utviklet webapp i Angular 18",        
        "Skisserte og implementerte overgang til containeriserte kjøremiljøer i AWS",
        "Bidro til migrering fra en eldre database til Snowflake i alle lag av løsningene",
        "Jobbet med infrastruktur og CI/CD-pipelines i GitHub og AWS",
        "Jobbet med monitorering av logger og traces med OpenTelemetry i AWS",
      ],
      Tech: [
        "Python", "FastAPI", "Snowflake", "AWS", "TypeScript", "Angular", "JavaScript", "Docker", "Opentelemetry", "Numpy", "Pandas", "RxJS", "AWS Aurora", "AWS Cloudformation", "AWS Lambda", "AWS Batch", "Github", "HTML/CSS", "Grafana", "Git", "Pip", "NPM"
      ],
      Start: "01.11.2023",
      End: "01.06.2025",
    },
    {
      version: 3,
      CompanyName: "Buypass",
      ProjectName: "Buypass FIDO2 Identity Services",
      ProjectDescription:
        "Buypass utviklet en løsning for sikker pålogging og brukerhåndtering på høyeste sikkerhetsnivå, eIDas høy, med FIDO2 teknologi. Løsningen blir nå brukt av flere kunder av Buypass i kommune-, farmasi- og helsesektor. Det er også mulig å bruke løsningen til pålogging av offentlige tjenester som Nav og Skatteetaten gjennom ID-porten.",
      Contribution:
        "Kristian jobbet med flere aspekter av Buypass FIDO2 Identity-løsningen, bl.a. infrastruktur, servicelag, og som hovedansvarlig for frontendapplikasjoner. Han utviklet flere applikasjoner og mikrotjenester i Spring-boot, selvbetjeningsløsninger, backofficeløsninger og påloggingsskjermer for bl.a. ID-porten i webteknologier og skrev Logstash pipelines som sendte meldinger fra Kafka til ElasticSearch. ",
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Som fullstackutvikler jobbet Kristian med alle lag i teknologistacken, han lagde apper i JavaScript og React, backend apier, mikroservices og MVC løsninger i Spring-Boot, samt docker/kubernetes og nginx filservere. Han jobbet også en del med eventer i kafka, logstash og elasticsearch til auditlogging og rapporter.",
        },
        {
          Name: "Frontendansvarlig",
          Description:
            'Kristian var ansvarlig for frontend i sitt team hos Buypass. Han utviklet React-applikasjoner, JavaScript-komponenter for MVC-løsninger og gjenbrukbare komponentbiblioteker med Web Components. Han samarbeidet tett med UX og forretning om brukervennlige løsninger og deltok i et frontendforum for et felles designsystem basert på Figma, Storybook og React.',
        },
      ],
      Bullets: [
        "Skrev backendløsninger og mikrotjenester i Spring Boot",
        "Utviklet webapplikasjoner og selvbetjeningsløsninger i samarbeid med UX og forretning",
        "Deltok i løsningsdesign og arkitektur for hendelsessystemet og en flerleietakerversjon av FIDO2 Identity Services",
        "Utviklet løsninger som publiserte, konsumerte, overvåket og visualiserte hendelser og revisjonslogger i Kafka",
        "Utviklet en JavaScript-løsning som integrerte med WebAuthn og CTAP for autentisering med fysiske FIDO2-nøkler",
        "Gjennomførte et pilotprosjekt for produksjonssetting i Kubernetes som senere ble tatt i bruk",
        "Deltok i revisjonsprosesser for å få løsningen sertifisert på høyeste nivå, eIDAS høy",
      ],
      Tech: [
        "Java",
        "Spring-Boot",
        "Spring security",
        "OIDC",
        "Fido2",
        "Rancher",
        "Docker",
        "Kubernetes",
        "TypeScript",
        "React",
        "LDAP",
        "git",
        "gitlab",
        "gitlab-pipelines",
        "CI/CD",
        "Logstash",
        "Elasticsearch",
        "Kafka",
        "Azure",
        "Blob Storage",
        "Web Components",
        "Nginx",
        "HTML/CSS",
        "Figma",
        "Webpack",
        "NPM",
      ],
      Start: "01.09.2020",
      End: "01.05.2023",
    },
    {
      version: 3,
      CompanyName: "Buypass",
      ProjectName: "Id-kontroll med digital passleser",
      ProjectDescription:
        "Utstedelse av elektronisk ID krever normalt at en operatør kontrollerer brukerens pass ved fysisk oppmøte. Under koronapandemien ønsket Digitaliseringsdirektoratet en løsning for fjernbasert ID-kontroll, og Buypass utviklet en metode der brukere kunne autentisere seg mot offentlige tjenester ved hjelp av en digital passleser.",
      Contribution:
        "Kristian ble engasjert av Buypass til å gå inn som fullstackutvikler i et team med mye kompetanse på sikkerhet og kryptografi, hvor han var ansvarlig for å utvikle en applikasjon i React for idkontroll av brukere og betaling, samt tilhørende API for pålogging med OIDC, kommunikasjon med backendtjenester og integrasjon mot Nets Passport Reader.",
      Bullets: [
        "Utviklet webapp i React for bestilling, id-verifikasjon og betaling av elektronisk id ",
        "Skrev API og tjenester i Spring-Boot ",
        "Lagde CI/CD pipelines og konfigurerte Docker, Docker-compose, traefik og nginx for deployment og sikkerhet ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "I denne rollen utviklet Kristian en webapplikasjon med React-frontend og Spring Boot-backend for ID-kontroll ved utstedelse av elektronisk ID. Løsningen integrerte med Folkeregisteret, Nets Passport Reader og en betalingsløsning. Han samarbeidet tett med et tverrfaglig team og UX-ansvarlig om en brukervennlig løsning.",
        },
      ],
      Tech: [
        "React",
        "Java",
        "Spring-Boot",
        "Rancher",
        "Docker",
        "Docker-compose",
        "TypeScript",
        "JavaScript",
        "OIDC",
        "git",
        "gitlab",
        "gitlab-pipelines",
        "HTML/CSS",
        "Figma",
        "Webpack",
        "NPM",
      ],
      Start: "01.05.2020",
      End: "01.09.2020",
    },
    {
      version: 3,
      CompanyName: "Avinor",
      ProjectName: "Digitalt Infosenter / InfoKiosk",
      ProjectDescription:
        "Avinor ønsket å avlaste informasjonsskrankene ved å gjøre svar på vanlige spørsmål digitalt tilgjengelige. Kristian var del av teamet som utviklet en digital informasjonskiosk, først for Oslo lufthavn og senere for flere norske flyplasser.",
      Contribution:
        "Kristian jobbet i et lite, smidig team med tre utviklere og en designer, med hyppige tilbakemeldinger fra kunden og sluttbrukere. Løsningen bestod av webapplikasjoner i React, en backend i C# og ASP.NET Core og flere Azure-tjenester for pålogging, datalagring og produksjonssetting.",
      Bullets: [
        "Utviklet C# ASP.NET Core backend med Entity Framework mot Azure CosmosDB",
        "Utviklet av infokiosk i React med touchstøtte, med bl.a. kart, rutetider og artikkelsystem ",
        "Utviklet backofficeløsning i React med mulighet for å redigere innhold i infokiosk per fysiske enhet, med friteksteditering i Markdown ",
        "Deltok i å utarbeide løsningsdesign og arkitektur for systemet",
        "CI/CD pipelines og konfigurasjon av Docker for deployment til Azure Kubernetes ",
        "Utviklet en CI/CD-pipeline som provisjonerte nødvendig Azure-infrastruktur som kode (IaC)",
        "Bidro også til utplukking av hardware, 3D-printing og oppsett av den fysiske infokiosken ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Kristian implementerte løsningen i samarbeid med kunden og UX. Han jobbet i alle lag av løsningen – database, C#, React og Azure – og bidro sammen med teamet til systemarkitektur og applikasjonsdesign.",
        },
      ],
      Tech: [
        "React",
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "Azure",
        "Azure DevOps",
        "Azure CosmosDB",
        "GraphQL",
        "Typescript",
        "JavaScript",
        "git",
        "Lerna",
        "Webpack",
        "NPM",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "HTML/CSS",
        "Figma",
      ],
      Start: "01.10.2019",
      End: "01.05.2020",
    },
    {
      version: 3,
      CompanyName: "Sporveien",
      ProjectName: "Geometritoget",
      ProjectDescription:
        "Geometritoget er en t-banevogn med over 30 sensorer som blant annet måler sporvidde, kurver, vindskjevhet og akselerasjon. Toget dekker normalt hele spornettet annenhver uke. Sporveien etablerte et lite team for å hente inn, dekode og analysere sensordata slik at vedlikeholdsansvarlige kunne følge feilutvikling, motta varsler om avvik og se gjennomsnittshastigheter i skinnenettet.",
      Contribution:
        "Kristian var prosjektets eneste tekniske ressurs og hadde ansvar for løsningsdesign og implementering. Han utviklet tjenester for å dekode, transformere og overføre sensordata mellom toget, lokale servere og skyløsninger.",
      Bullets: [
        "Utviklet C#-tjenester som overførte sensordata fra toget via 4G-nettet til AWS S3",
        "Benyttet Python for å konvertere sensordata fra et proprietært binærsystem brukt av sensorleverandør ",
        "Utviklet AWS Lambda-funksjoner som transformerte data ved nye hendelser",
        "Utviklet ETL-pipelines i Databricks mot AWS DynamoDB og AWS Redshift for behandling av store datamengder",
        "Utarbeidet løsningsdesign for systemets arkitektur som ble presentert og akseptert i Arkitekturforum ",
        "Utviklet en React-applikasjon for visualisering av sensordata, satt opp i AWS gjennom CI/CD-pipelines",
        "Besøkte jevnlig verkstedhallen for å feilsøke systemet på vognen ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Som eneste utvikler jobbet Kristian i alle deler av teknologistacken. Han utviklet tjenester og skript som konverterte, lastet og arkiverte spordata i AWS, skrev ETL-prosedyrer i Databricks og tilgjengeliggjorde data for rapporter og frontendvisninger.",
        },
        {
          Name: "Arkitekt",
          Description:
            "Kristian utformet løsningen med utgangspunkt i Sporveiens eksisterende infrastruktur og tjenesteportefølje for å sikre en smidig overlevering. Arkitekturen ble presentert for og godkjent av Sporveiens arkitekturforum og øvrige forretning.",
        },
      ],
      Tech: [
        "C#",
        "AWS",
        "IoT",
        "git",
        "Python",
        "Tableau",
        "AWS Redshift",
        "AWS S3",
        "AWS Lambda",
        "Databricks",
        "PySpark",
        "Big Data",
        "Datavarehus",
        "React",
        "TypeScript",
        "HTML/CSS",
        "Webpack",
        "NPM",
      ],
      Start: "01.12.2018",
      End: "01.01.2020",
    },
    {
      version: 3,
      CompanyName: "Sporveien",
      ProjectName: "Prediktivt vedlikehold av Sporvekslere",
      ProjectDescription:
        "Sporveien kjøpte og installerte nye sporvekslere med en sensor for måling og rapportering av nøyaktig strømforbruk med høy oppløsning. Planen var å undersøke om det var mulig å predikere vedlikeholdsbehov basert på denne dataen. ",
      Contribution:
        "Kristian ble engasjert for å prototype en løsning som kunne bruke denne dataen til å analysere, visualisere og varsle dersom loggførte strømtrekk på sporvekslinger i t-banenettet er utenom det vanlige og tilsa at det var behov for vedlikehold. Som eneste utvikler på prosjektet utviklet han en løsning med Angular7 og Python Flask backend for visualisering servert fra Azure. Analyse og databehandling ble gjort i WebJobs, Azure Function, Blob storage og Azure CosmosDB. ",
      Bullets: [
        "Skrev C#-kode kjørt i Azure Functions og WebJobs som brukte algoritmer fra signalbehandling og statistikk til å analysere sporvekslinger ",
        "Utviklet system i Azure Functions som varslet dersom vekslinger var utenfor normalen ",
        "Utviklet en webapplikasjon for visualisering, satt opp i Azure gjennom CI/CD-pipelines",
        "Besøkte sporskinner for å lage data til scenarioer hvor sporvekling feilet ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Som utvikler var Kristian ansvarlig for å utvikle og sette opp de ulike elementene i løsningen i Python, C#, Angular og i Azure. For å predikere behovet for vedlikehold brukte Kristian algoritmer fra signalbehandling samt AI/ML til å analysere data. Han var også ute i 'felten' for å se på sporvekslere og lage treningsdata for algoritmene. Resultatet ble visualisert i en frontend skrevet i Angular, og det ble utsendt varslinger fra Azure på potensielle vedlikeholdsbehov.",
        },
      ],
      Tech: [
        "Python",
        "C#",
        "Azure",
        "Azure CosmosDB",
        "Azure Blobstorage",
        "Azure Function",
        "Angular",
        "TypeScript",
        "git",
        "Webpack",
        "NPM",
      ],
      Start: "01.10.2019",
      End: "01.05.2020",
    },
    {
      version: 3,
      CompanyName: "Sporveien",
      ProjectName: "IVO - Individstyring av Vognparken",
      ProjectDescription:
        "Planlegging av regelstyrt ettersyn for t-banevogner er en kompleks oppgave som påvirkes av blant annet kjørelengde, rutevalg, parkering og uforutsett vedlikehold. IVO-prosjektet undersøkte hvordan digitale verktøy og maskinlæring kunne optimalisere planleggingen og redusere antall ubrukte kilometer. Forprosjektet resulterte i en PoC som dannet grunnlag for videre prosjektforslag og en patentsøknad.",
      Contribution:
        "Kristian jobbet med alle delene av systemet, og var i lengre tid eneste utvikler på prosjektet. Problemet viste seg å være svært komplekst og det ble oppdelt i flere subproblemer som ble løst av skreddersydde optimaliseringsrutiner skrevet som Evolusjonære algoritmer i Python og reinforcementlærning i Tensorflow. Videre jobbet han med integrasjoner mot kjernesystemer for å hente ut nødvendig informasjon som kilometerstand og ruteplan.",
      Bullets: [
        "Skrev evolusjonære algoritmer i Python for å utarbeide ruteallokering for å treffe optimale verksteddatoer ",
        'Utviklet “et spill” av reglene for rangering på depot og brukte reinforcement learning til å trene modeller som lærte seg å rangere tog på for å treffe allokert rutevalg. Modellene ble trent ved å "spille" over lengre tid i AWS EC2 ',
        "Holdt presentasjoner om systemet på Make data smart Again ",
        "Skrev rapporter og utarbeidet arkitektur for fullskala implementasjon som ble brukt til patentsøknad ",
        "Flere besøk på t-banehallen for å forstå domenet ",
        "Tkinter GUI for visualisering av modeller mens de rangerer vogner ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Han jobbet med å utvikle modeller for IVO, itegrasjoner mot kildedata og oppsett av server samt CI/CD mot maskinjer i amazon. Videre jobbet han med datamodeller og optimeringsalgoritmer for løsningen. I en iterativ prosess bidro Kristian til å utvikle og teste hypoteser og modeller.",
        },
        {
          Name: "Arkitekt",
          Description:
            "Som Arkitekt jobbet han med å identiﬁsere nødvendige komponenter for IVO, utarbeiding av arkitekturskisser og estimering av prosjektets omfang i timer og personell. Gjennom en forberedende fase mellom proof-of-concept og utviklingsløp jobbet Kristian med å koordinere valg av teknologi og plattform med tanke på prosjektets og kundes behov. ",
        },
      ],
      Tech: [
        "Python",
        "Reinforcement Learning",
        "Genetisk Algoritme",
        "DEAP",
        "Ray",
        "Azure DevOps",
        "AWS EC2",
        "git",
      ],
      Start: "01.09.2017",
      End: "01.10.2018",
    },

    {
      version: 3,
      CompanyName: "Tine",
      ProjectName: "TineMatsans Chatbot",
      ProjectDescription:
        "TINE ønsket å undersøke om en chatbot kunne hjelpe kunder med å finne oppskrifter basert på preferanser og tilgjengelige ingredienser. Prosjektet tok utgangspunkt i TINEs eksisterende nettside og oppskriftsdatabase.",
      Contribution:
        "Kristian ble engasjert som utvikler på en PoC som koblet Microsoft Bot Framework til deler av samme backend og database som oppskriftsnettsiden brukte. Chatboten ble satt opp i Azure og kunne integreres med blant annet Slack, Skype og nettsider. Prosjektet var vellykket, og TINE valgte å gå videre med løsningen.",
      Bullets: [
        "Utviklet og satte opp en chatbot med Microsoft Bot Framework og dialoger fra Wit.ai",
        "Hentet oppskrifter og bildeinfo fra GraphQL som kunne vises i chat-dialogen ",
      ],
      Roles: [
        {
          Name: "Fullstackutvikler",
          Description:
            "Kristian jobbet med GraphQL-integrasjoner, oppsett av Bot Framework og utforming av kort som visualiserte oppskrifter i dialogen.",
        },
      ],
      Tech: [
        "Node.js",
        "GraphQL",
        "Microsoft Bot Framework",
        "javascript",
        "git",
      ],
      Start: "01.08.2017",
      End: "01.09.2017",
    },
    {
      version: 3,
      CompanyName: "Visma",
      ProjectName: "Visma Autopay",
      ProjectDescription:
        "AutoPay er en helautomatisk betalingstjeneste som tar hånd om alle inn- og utgående betalinger for et ubegrenset antall kunder. Alle kunder som økonomisystem fra Visma kan benytte Visma AutoPay for automatisk transport av betalingsdata begge veier mellom regnskapsprogram og datamottaker (for eksempel BBS, DnB NOR, Nordea eller Fokus Bank).",
      Contribution:
        "Kristian jobbet som utvikler i AutoPay i et team på 8–12 personer. Han startet som sommerstudent med ansvar for å undersøke modernisering av frontend og tilhørende API med AngularJS. Visma valgte å gå videre med løsningen, og Kristian fortsatte implementeringen ved siden av studiene på NTNU frem til han ble uteksaminert.",
      Bullets: [
        "Gjennomførte en suksessfull PoC av ny frontend i Angular  ",
        "Implementering av ny frontend og tilhørende API som tok over for Java MVC-løsning ",
      ],
      Roles: [
        {
          Name: "Utvikler",
          Description:
            "Som utvikler jobbet Kristian med frontend i AngularJS og et tilhørende API i Java og JSF.",
        },
      ],
      Tech: [
        "Java",
        "JavaServer Faces",
        "Angular.js",
        "Karma",
        "Jasmin",
        "Javascript",
        "Java",
        "Jenkins",
        "SVN",
        "Selenium",
        "HTML/CSS",
        "Figma"
      ],
      Start: "01.06.2015",
      End: "01.06.2017",
    },
    {
      version: 3,
      CompanyName: "Direktoratet for forvaltning og IKT (DIFI)",
      ProjectName: "Doffin-data, eLæring i staten, App for ID-porten eID",
      ProjectDescription:
        "Direktoratet for forvaltning og IKT (Difi) tok hvert år inn sommerstudenter med relevant teknologiutdanning til Dificamp. Programmet ga utviklerne ekstra kapasitet til å utforske ny teknologi og arbeide med løsninger det ellers var begrenset tid til.",
      Contribution:
        "Kristian jobbet sommeren 2014 hos Difi i Leikanger. I løpet av to måneder bidro han til en e-læringsplattform i Moodle, indeksering og tilgjengeliggjøring av Doffin-data med Elasticsearch og Spring Boot, samt en Android-app for bruk av MinID som elektronisk ID.",
      Bullets: [
        "Utviklet utvidelser til e-læringsplattformen Moodle for utstedelse av diplom og verifikasjon etter gjennomført kurs",
        "Indekserte ti år med Doffin-data i Elasticsearch og tilgjengeliggjorde dataene gjennom et API i Spring Boot",
        "Utviklet PoC for ID-porten eID på Android som lagret autentisert bruker etter pålogging med ID-Porten ",
      ],
      Roles: [
        {
          Name: "Utvikler",
          Description:
            "Kristian jobbet i flere lag av løsningene, blant annet med Spring Boot-backender, Android-applikasjoner og Elasticsearch-infrastruktur.",
        },
      ],
      Tech: [
        "elastic search",
        "angular",
        "java",
        "spring boot",
        "javascript",
        "android",
        "java",
        "spring boot",
        "PHP",
        "git",
        "HTML/CSS",
      ],
      Start: "01.06.2014",
      End: "01.08.2014",
      Description:
        "ID-porten var en mobil applikasjon for Android som gjorde det mulig å logge inn med ID-porten og lagre autentiseringen på mobilen på en sikker måte. Innloggingen kunne så bli brukt av andre applikasjoner på samme måte som man ofte bruker sin google eller facebook konto. Før at innloggingen kunne huskes, krevde applikasjonen at mobilen måtte låses med passord eller pin. Om ikke krevde applikasjonen innlogging for hvert bruk. Applikasjonen var en 'proof of concept' brukt for å demonstrere sikkerheten bak en slik løsning. Konseptet ble videre brukt til utvikling av AltInn appen.",
    },
    {
      CompanyName: "NTNUi Dans",
      ProjectName: "www.ntnuisdans.no",
      Roles: ["Utvikler"],
      Tech: [
        "Python",
        "Flask",
        "JavaScript",
        "SQLAlchemy",
        "PostgreSQL",
        "Nginx",
        "uWSGI",
      ],
      Start: "01.01.2013",
      End: "01.01.2016",
      Description:
        "NTNUiDans.no er en nettportal og publiseringsløsning for studentgruppen NTNUi Dans. Løsningen håndterer blant annet innhold, arrangementer, treninger, brukere, instruktører, sertifisering og betaling av treningsavgift. Prosjektet var et kundestyrt bachelorprosjekt der Kristian arbeidet i et team på åtte personer. Portalen ble utviklet i Python og Flask, med Stripe for betaling og SQLAlchemy og PostgreSQL i datalaget.",
    },
    {
      CompanyName: "NTNUi Squash",
      ProjectName: "www.ntnuisquash.no",
      Roles: ["Utvikler"],
      Tech: [
        "Python",
        "Flask",
        "JavaScript",
        "SQLAlchemy",
        "PostgreSQL",
        "Nginx",
        "uWSGI",
      ],
      Start: "01.09.2013",
      End: "01.08.2015",
      Description:
        "NTNUiSquash.no er portalen for studentgruppen NTNUi Squash. Kristian utviklet løsningen mens han var webansvarlig i gruppen. Portalen inneholdt administrasjon av brukere, nyheter og treninger, og gjorde det mulig å reservere og bekrefte oppmøte på ukentlige treninger. Ledige plasser ble automatisk gjort tilgjengelige dersom oppmøte ikke var bekreftet fem dager før treningen.",
    },
  ],
  education: [
    {
      UniversityName: "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      specialization:
        "Master of Science (MSc), Informatikk, Kunstig Intelligens",
      MonthOfPassing: "Juni",
      YearOfPassing: "2017",
      Achievements: "",
    },
    {
      UniversityName: "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      specialization: "Bachelor of Science (BSc), Informatikk",
      MonthOfPassing: "Juni",
      YearOfPassing: "2015",
      Achievements: "",
    },
  ],
  work: [
    {
      CompanyName: "Fyr Consulting",
      specialization: "Senior IT-konsulent og daglig leder",
      MonthOfLeaving: "Mai 2020",
      YearOfLeaving: " -",
      Achievements:
        "Som IT-konsulent i Fyr Consulting har Kristian arbeidet for Buypass, NBIM og KulturIT. Han er for tiden engasjert hos KulturIT.",
    },
    {
      CompanyName: "Bouvet",
      specialization: "IT Konsulent",
      MonthOfLeaving: "August 2017 -",
      YearOfLeaving: "Mai 2020",
      Achievements:
        "Gjennom sin jobb hos bouvet var Kristian utleid på flere prosjekter hos kunder som: Tine, Sporveien og Avinor",
    },
    {
      CompanyName: "Visma Software Autopay",
      specialization: "Systemutvikler",
      MonthOfLeaving: "Juni 2015",
      YearOfLeaving: " - Juni 2017",
      Achievements:
        "Kristian jobbet deltid hos Visma under studiene og fulltid i sommerperiodene fra 2015.",
    },
    {
      CompanyName: "Direktoratet for forvaltning og IKT (Difi)",
      specialization: "Systemutvikler",
      YearOfLeaving: " - August 2014",
      MonthOfLeaving: "Juni 2014",
      Achievements: "Kristian jobbet hos Difi i et engasjement sommeren 2014.",
    },
  ],
  publications: [
    {
      Type: "Workshop",
      Name: "NDC Oslo: Maskinlæring og kunstig intelligens",
      Description:
        "Kristian avhold workshop på NDC Oslo om bruk av AI/ML for utviklere",
      Time: "Jun 2018",
    },
    {
      Type: "Foredrag",
      Name: "Make Data Smart Again",
      Description:
        "Kristian holdt foredrag om ML algoritmene utviklet og brukt i prosjekt IVO hos Sporveien",
      Time: "Jun 2018",
    },
    {
      Type: "Foredrag",
      Name: "Yggdrasil: Kunstig intelligens og maskinlæring",
      Description:
        "Kristian avhold presentasjon om hva AI/ML for designere på Yggdrasilkonferansen",
      Time: "Apr 2018",
    },
    {
      Type: "Publikasjon",
      Name: "Self-Modifying Dynamical Systems for Reservoir Computing",
      Description: "Masteroppgave i kunstig intelligens på NTNU Gløshaugen",
      Time: "Jun 2017",
    },
  ],
  courses: [
    {
      Type: "Course",
      Name: "Arkitektskolen",
      Description:
        "Kurs for løsningsarkitekter over flere moduler som; Estimering, Krav, CI/CD, DevOps, GDPR, etc..",
      Time: "Høst 2019",
    },
  ],
  portfolio: [
    {
      name: "Avkastning på Oljefondet i kroner",
      description:
        "Verdien på norges fond host 2024",
      imgurl: "images/portfolio/nbim.png",
    },
    {
      name: "Pålogging med Buypass Identity & passordløs FIDO2-teknologi hos Altinn",
      description:
        "Påloggingsskjerm som bruker Buypass Identity & passordløs FIDO2-teknologi ",
      imgurl: "images/portfolio/fido2.jpg",
    },
    {
      name: "Buypass Identity & passordløs FIDO2-teknologi ",
      description:
        "ID kontroll med digital passleser og registrering av fysisk FIDO2-nøkkel",
      imgurl: "images/portfolio/bpaltinn.png",
    },
    {
      name: "AviKiosk",
      description: "Digitalt Infosenter for reisende på flyplass",
      imgurl: "images/portfolio/avinor-osl.png",
    },
    {
      name: "AviKiosk",
      description: "Digitalt Infosenter for reisende på flyplass",
      imgurl: "images/portfolio/avinor-trdcrop.png",
    },
    {
      name: "Verktøy for visualisering av potensielle feil på spornettet",
      description:
        "Verktøy for visualisering av potensielle feil på spornettet",
      imgurl: "images/portfolio/geofeil.jpg",
    },
    {
      name: "Verktøy for trening og visualisering av modeller",
      description: "Optimalisering av Rangering og Dispatching av tbanevogner",
      imgurl: "images/portfolio/base-agent.gif",
    },
    {
      name: "Rangeringsmodul",
      description:
        "Rangering av tbanevogner ved AI trent med reinforcement learning",
      imgurl: "images/portfolio/rl-sporveien6.gif",
    },
    {
      name: "Overvåkning av sensordata",
      description: "Overvåkning av sporgeometri for tbanenettet",
      imgurl: "images/portfolio/geometri.jpg",
    },
    {
      name: "Prediktiv vedlikehold av Sporvekslere",
      description: "Analyse og varsling av feil på sporvekslere",
      imgurl: "images/portfolio/psv.jpg",
    },
    {
      name: "Sporveien IVO",
      description: "Optimalisering av rute allokering med EA",
      imgurl: "images/portfolio/genetic.png",
    },
    {
      name: "Visma Autopay",
      description: "Skjerm fra Visma Autopay",
      imgurl: "images/portfolio/visma.png",
    },
    {
      name: "NTNUi Dans",
      description: "Side for påmelding, innhold og betaling for NTNUi Dans",
      imgurl: "images/portfolio/ntnuidans.png",
    },
    {
      name: "Difi App for ID-porten eID",
      description:
        "Android app utviklet hos Difi for eID etter pålogging med ID-porten",
      imgurl: "images/portfolio/difi-app.png",
    },
    {
      name: "NTNUi Squash",
      description: "CMS og medlemsside for NTNUi Squash",
      imgurl: "images/portfolio/ntnuisquash.png",
    },
  ],
};

export default resumeData;
