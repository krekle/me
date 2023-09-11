(this["webpackJsonpkrekle-portfolio"]=this["webpackJsonpkrekle-portfolio"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(6),o=r.n(i),s=(r(13),r(1)),l=r(2),m=r(4),g=r(3),d=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.resumeData;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{id:"home"},a.a.createElement("nav",{id:"nav-wrap"},a.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),a.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),a.a.createElement("ul",{id:"nav",className:"nav"},a.a.createElement("li",{className:"current"},a.a.createElement("a",{className:"smoothscroll",href:"#home"},"Hjem")),a.a.createElement("li",null,a.a.createElement("a",{className:"smoothscroll",href:"#about"},"Om")),a.a.createElement("li",null,a.a.createElement("a",{className:"smoothscroll",href:"#featured"},"Kompetanse")),a.a.createElement("li",null,a.a.createElement("a",{className:"smoothscroll",href:"#resume"},"CV")),a.a.createElement("li",null,a.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portef\xf8lje")),a.a.createElement("li",null,a.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Kontakt")))),a.a.createElement("div",{className:"row banner"},a.a.createElement("div",{className:"banner-text"},a.a.createElement("img",{className:"banner-img",src:"images/avatar.png",alt:""}),a.a.createElement("h1",{className:"responsive-headline"},"Kristian Ekle."),a.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"Fullstackutvikler med skaperglede for software",a.a.createElement("br",null),"Daglig leder / Senior IT-konsulent i Fyr Consulting AS."),a.a.createElement("hr",null),a.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return a.a.createElement("li",{key:e.name},a.a.createElement("a",{href:e.url,target:"_blank"},a.a.createElement("i",{className:e.className})))})))),a.a.createElement("p",null,"For tiden p\xe5 pappaperm med Iben, ledig for nytt oppdrag september 2023")),a.a.createElement("p",{className:"scrolldown"},a.a.createElement("a",{className:"smoothscroll",href:"#about"},a.a.createElement("i",{className:"icon-down-circle"})))))}}]),r}(n.Component),p=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){this.props.resumeData;return a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"three columns"},a.a.createElement("img",{className:"profile-pic",src:"images/profile.jpg",alt:""})),a.a.createElement("div",{className:"nine columns main-col"},a.a.createElement("h2",null,"Om Kristian"),a.a.createElement("p",null,"Har en mastergrad i informatikk fra NTNU med spesialisering i kunstig intelligens.",a.a.createElement("br",null)),a.a.createElement("p",null,"Fullstackutvikler som har bred erfaring fra blant annet frontendrammeverk som React, Java, C# og Python. Jobber med alle lag i stacken og gjerne med features fra konsept til kj\xf8rende l\xf8sning.",a.a.createElement("br",null),a.a.createElement("br",null),"Tidligere kunder og kollegaer ville beskrevet Kristian som en selvdreven og allsidig utvikler som like gjerne jobber med frontend, backend, infrastruktur, ETL-pipelines eller skyteknologier i AWS eller Azure. For han er det viktig \xe5 levere gode, vedlikeholdbare l\xf8sninger som passer inn i eksisterende portef\xf8lje. Kristian liker godt \xe5 sette seg inn i nye teknologier og verkt\xf8y, og han bidrar ofte p\xe5 arbeidsoppgaver som faller litt imellom to stoler for at teamet skal lykkes.",a.a.createElement("br",null),a.a.createElement("br",null),"Han opptatt av- og har erfaring i \xe5 jobbe tett sammen med foretningen for \xe5 utvikle l\xf8sninger som gir verdi for han kunder. I den forbindelse har Kristian erfaring med \xe5 jobbe brukersentrert i prosjekter med mye endring."),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"columns contact-details"},a.a.createElement("h2",null,"Kontaktinformasjon"),a.a.createElement("p",{className:"address"},a.a.createElement("span",null,"Kristian Ekle"),a.a.createElement("br",null),a.a.createElement("span",null,"Oslo, Norge"),a.a.createElement("br",null),a.a.createElement("span",null,"kristian.ekle@gmail.com"),a.a.createElement("br",null)))))))}}]),r}(n.Component),c=r(7);function k(e){var t=a.a.useState(!1),r=Object(c.a)(t,2),n=r[0],i=r[1],o=a.a.useCallback((function(){i(!n)}));return a.a.createElement("div",{className:"feature"},a.a.createElement("div",{className:"feature-title"},a.a.createElement("h6",{onClick:o},e.name),a.a.createElement("i",{class:n?"fa fa-caret-down":"fa fa-caret-right","aria-hidden":"true"})),a.a.createElement("p",{className:n?"expand":"collapse"},e.description))}var u=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.resumeData;return a.a.createElement("section",{id:"featured"},a.a.createElement("div",{className:"row featured"},a.a.createElement("div",{className:"three columns header-col"},a.a.createElement("h1",null,a.a.createElement("span",null,"Fremhevet kompetanse"))),a.a.createElement("div",{className:"nine columns main-col"},e.featured&&e.featured.map((function(e){return a.a.createElement(k,{name:e.Name,description:e.Description})})),a.a.createElement("br",null),"Mer utfyllende informasjon tilgjengelig i fullstendig CV, pdf ",a.a.createElement("a",{href:"CV_KristianEkle.pdf"},"her"),".")))}}]),r}(n.Component),v=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.resumeData;return a.a.createElement("section",{id:"resume"},a.a.createElement("div",{className:"row projects"},a.a.createElement("div",{className:"three columns header-col"},a.a.createElement("h1",null,a.a.createElement("span",null,"Prosjekter"))),a.a.createElement("div",{className:"nine columns main-col"},e.projects&&e.projects.map((function(e){return e.version&&e.version>=2?a.a.createElement("div",{className:"row item project"},a.a.createElement("div",{className:"twelve columns"},a.a.createElement("h3",{className:"project-title"},e.ProjectName),a.a.createElement("p",{className:"details"},a.a.createElement("h5",null,e.CompanyName),a.a.createElement("em",{className:"date"},e.Start," ",a.a.createElement("span",null,"-")," ",e.End)),a.a.createElement("div",{className:"project-roles"},e.Roles.map((function(e,t){return a.a.createElement("em",{className:"project-role"},e.Name)}))),a.a.createElement("p",null,e.ProjectDescription),a.a.createElement("p",null,e.Contribution),3===e.version?a.a.createElement(a.a.Fragment,null,a.a.createElement("h6",null,"Bidrag"),a.a.createElement("ul",{className:"contributions"},e.Bullets.map((function(e){return a.a.createElement("li",null,e)})))):a.a.createElement(a.a.Fragment,null),e.Roles.map((function(e){return a.a.createElement("div",null,a.a.createElement("h6",null,e.Name),a.a.createElement("p",null,e.Description))})),e.Tech&&a.a.createElement("div",{className:"chips-dus"},e.Tech.map((function(e){return a.a.createElement("div",{className:"chip dus"},e)}))))):a.a.createElement("div",{className:"row item project"},a.a.createElement("div",{className:"twelve columns"},a.a.createElement("h3",{className:"project-title"},e.ProjectName),a.a.createElement("p",{className:"details"},a.a.createElement("h5",null,e.CompanyName),a.a.createElement("em",{className:"date"},e.Start," ",a.a.createElement("span",null,"-")," ",e.End)),a.a.createElement("p",null,e.Description),e.Tech&&a.a.createElement("div",{className:"chips-dus"},e.Tech.map((function(e){return a.a.createElement("div",{className:"chip dus"},e)})))))})))),a.a.createElement("div",{className:"row education"},a.a.createElement("div",{className:"three columns header-col"},a.a.createElement("h1",null,a.a.createElement("span",null,"Utdannelse"))),a.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return a.a.createElement("div",{className:"row item"},a.a.createElement("div",{className:"twelve columns"},a.a.createElement("h3",null,e.UniversityName),a.a.createElement("p",{className:"info"},e.specialization,a.a.createElement("span",null,"\u2022")," ",a.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),a.a.createElement("p",null,e.Achievements)))})))),a.a.createElement("div",{className:"row work"},a.a.createElement("div",{className:"three columns header-col"},a.a.createElement("h1",null,a.a.createElement("span",null,"Arbeid"))),a.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return a.a.createElement("div",{className:"row item"},a.a.createElement("div",{className:"twelve columns"},a.a.createElement("h3",null,e.CompanyName),a.a.createElement("p",{className:"info"},e.specialization,a.a.createElement("span",null,"\u2022")," ",a.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),a.a.createElement("p",null,e.Achievements)))})))))}}]),r}(n.Component),f=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.resumeData;return a.a.createElement("section",{id:"portfolio"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"twelve columns collapsed"},a.a.createElement("h1",null,"Et utdrag av tidligere prosjekter."),a.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return a.a.createElement("div",{className:"columns portfolio-item"},a.a.createElement("div",{className:"item-wrap"},a.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),a.a.createElement("div",{className:"overlay"},a.a.createElement("div",{className:"portfolio-item-meta"},a.a.createElement("h5",null,e.name),a.a.createElement("p",null,e.description)))))}))))))}}]),r}(n.Component),b=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){this.props.resumeData;return a.a.createElement("section",{id:"contact"},a.a.createElement("div",{className:"row section-head"},a.a.createElement("div",{className:"ten columns"},a.a.createElement("p",{className:"lead"},"Ta gjerne kontakt p\xe5 epost eller p\xe5 linkedin."))),a.a.createElement("div",{className:"row"},a.a.createElement("aside",{className:"eigth columns footer-widgets"},a.a.createElement("div",{className:"widget"},a.a.createElement("h4",null,a.a.createElement("a",{href:"mailto:kristian.ekle@fyrconsulting.no"},"kristian.ekle@fyrconsulting.no"))))),a.a.createElement("div",{className:"row"},a.a.createElement("aside",{className:"eigth columns footer-widgets"},a.a.createElement("div",{className:"widget"},a.a.createElement("h4",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/kristian-ekle-3150836b/"},"Linkedin"))))))}}]),r}(n.Component),h=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.resumeData;return a.a.createElement("footer",null,a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"twelve columns"},a.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:e.url},a.a.createElement("i",{className:e.className})))})))),a.a.createElement("div",{id:"go-top"},a.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},a.a.createElement("i",{className:"icon-up-open"})))))}}]),r}(n.Component),j={socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/kristian-ekle-3150836b/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/krekle",className:"fa fa-github"},{name:"cv",url:"CV_KristianEkle.pdf",className:"fa fa-file-pdf-o"}],featured:[{Name:"JavaScript",Description:"Mye erfaring med JavaScript fra utdannelse og i fra kundeprosjekter. God kontroll p\xe5 rammeverk som React, Angular eller Express.js og bruk av for eksempel Webpack, npm, lintere og automatiserte tester."},{Name:"Java",Description:"Erfaring  i Java fra NTNU og hos Visma og Buypass. God kjennskap til Spring-Boot, for eksempel til \xe5 skrive mikrotjenester og backends med ulike form\xe5l, som APIer, autentisering, proxy, database, osv."},{Name:"C# & .NET",Description:"Jobbet tidligere i en C#/.NET avdeling i Bouvet og bidro mye til fagmilj\xf8et rundt Azure og Microsoft-teknologier. Godt kjent med C#, .NET, nuget og Azure fra flere prosjekter hos Sporveien og Avinor. Har blant annet levert backend APIer, Windows services, samt kalkulasjoner i Azure Functions, med C# og .NET Core."},{Name:"Python",Description:"Har benyttet Python i flere prosjekter hos Sporveien; til maskinl\xe6ring og optimaliseringsoppgaver, APIer, samt kalkulasjoner i AWS Lamdas og Azure Functions. Han har ogs\xe5 erfaring med Django, Flask og Bottle fra hobbyprosjekter og studietiden, blant annet for utvikling av nettsider til linjeforeningen/NTNUI-grupper. "},{Name:"Infrastruktur og CI/CD",Description:"God kontroll p\xe5 utvikling av CI/CD pipelines, enten via script i Jenkins, i Azure DevOps eller i GitLab pipelines. Tar ofte ansvar for deployment av applikasjoner og har erfaring med \xe5 produksjonssette l\xf8sninger on-prem eller i skyen med Docker/Kubernetes."}],projects:[{version:3,CompanyName:"Buypass",ProjectName:"Buypass FIDO2 Identity Services",ProjectDescription:"Buypass utviklet en l\xf8sning for sikker p\xe5logging og brukerh\xe5ndtering p\xe5 h\xf8yeste sikkerhetsniv\xe5, eIDas h\xf8y, med FIDO2 teknologi. L\xf8sningen blir n\xe5 brukt av flere kunder av Buypass i kommune-, farmasi- og helsesektor. Det er ogs\xe5 mulig \xe5 bruke l\xf8sningen til p\xe5logging av offentlige tjenester som Nav og Skatteetaten gjennom ID-porten.",Contribution:"Kristian jobbet med flere aspekter av Buypass FIDO2 Identity-l\xf8sningen, bl.a. infrastruktur, servicelag, og som hovedansvarlig for frontendapplikasjoner. Han utviklet flere applikasjoner og mikrotjenester i Spring-boot, selvbetjeningsl\xf8sninger, backofficel\xf8sninger og p\xe5loggingsskjermer for bl.a. ID-porten i webteknologier og skrev Logstash pipelines som sendte meldinger fra Kafka til ElasticSearch. ",Roles:[{Name:"Fullstackutvikler",Description:"Som fullstackutvikler jobbet Kristian med alle lag i teknologistacken, han lagde apper i JavaScript og React, backend apier, mikroservices og MVC l\xf8sninger i Spring-Boot, samt docker/kubernetes og nginx filservere. Han jobbet ogs\xe5 en del med eventer i kafka, logstash og elasticsearch til auditlogging og rapporter."},{Name:"Frontendansvarlig",Description:'Kristian var ansvarlig for frontend i sitt team hos Buypass. I denne rollen utviklet han React applikasjoner, "vanilla" Javascript componenter i frontend for MVC l\xf8sninger og gjenbrukbare komponentbiblioteker i Web Components som resten av teamet kunne bruke. Han samarbeidet ogs\xe5 mye med UX of forretning for \xe5 lage brukervennlige og estetiske skjermer. Han deltok ogs\xe5 p\xe5 frontendforum, som var et initiativ til samles rundt et felles designsystem laget i Figma, Storybook og React'}],Bullets:["Skrev backendl\xf8sninger og mikrotjenester i Spring-Boot ","Utviklet webapper og selvbetjeningsl\xf8sninger i samr\xe5d med UX og forretning ","Deltok i l\xf8sningsdesign av eventsystem og multi-tenantversjon av FIDO2 identity services ","Skrev l\xf8sninger som publiserte, konsumerte, monitorerte og visualiserte events og auditlogs i Kafka ","Pilotprosjekt for deploying av applikasjoner til Kubernetes som senere ble adoptert  "],Tech:["Web Components","Java","Spring-Boot","Spring security","OIDC","Fido2","Rancher","Docker","Kubernetes","typescript","LDAP","git","gitlab","gitlab-pipelines","CI/CD","Logstash","Elasticsearch","Kafka","Azure","Blob Storage","Nginx"],Start:"01.09.2019",End:"01.05.2023"},{version:3,CompanyName:"Buypass",ProjectName:"Id-kontroll med digital passleser",ProjectDescription:"For \xe5 f\xe5 utestedet en elektronisk ID er det n\xf8dvendig \xe5 gjennomf\xf8re en id-kontroll hvor en operat\xf8r gj\xf8r en kontroll av pass, dette krever fysisk oppm\xf8te. Spesielt under korona-pandemien var det \xf8nskelig med en l\xf8sning for remote id-kontroll. P\xe5 oppdrag fra Digitaliseringsdirektoratet satte Buypass i gang med \xe5 lage en m\xe5te for brukere \xe5 autentisere seg mot offentlige tjenester gjennom en digital passleser.",Contribution:"Kristian ble engasjert av Buypass til \xe5 g\xe5 inn som fullstackutvikler i et team med mye kompetanse p\xe5 sikkerhet og kryptografi, hvor han var ansvarlig for \xe5 utvikle en applikasjon i React for idkontroll av brukere og betaling, samt tilh\xf8rende API for p\xe5logging med OIDC, kommunikasjon med backendtjenester og integrasjon mot Nets Passport Reader.",Bullets:["Utviklet webapp i React for bestilling, id-verifikasjon og betaling av elektronisk id ","Skrev API og tjenester i Spring-Boot ","Lagde CI/CD pipelines og konfigurerte Docker, Docker-compose, traefik og nginx for deployment og sikkerhet "],Roles:[{Name:"Fullstackutvikler",Description:"I denne rollen utviklet Kristian en webapplikajson med React frontend og backend i Spring-Boot. Applikasjonen gikk ut p\xe5 \xe5 gjennomf\xf8re en id-kontroll av brukere for utstedelse av elektronisk id. Kristian samarbeidet med et kryssfaglig team til \xe5 lage en app som brukte integrasjon mot folkeregisteret og en app fra .Nets som leser data fra moderne pass til \xe5 gjennomf\xf8re en biometrisk id-kontroll. Kristian var ogs\xe5 ansvarlig for \xe5 integrere mot betalingsl\xf8sning etter gjennomf\xf8rt kontroll. Han samarbeidet direkte med UX-ansvarlig iterativt for \xe5 gj\xf8re applikajsonene estetiske og brukervennlige."}],Tech:["React","Java","Spring-Boot","Rancher","Docker","Docker-compose","TypeScript","JavaScript","OIDC","git","gitlab","gitlab-pipelines"],Start:"01.05.2020",End:"01.09.2020"},{version:3,CompanyName:"Avinor",ProjectName:"Digitalt Infosenter / InfoKiosk",ProjectDescription:"Avinor et behov for \xe5 bist\xe5 de ansatte ved informasjonsskrankene p\xe5 sine flyplasserog s\xe5 at de mest stilte sp\xf8rsm\xe5lene kunne l\xf8ses digitalt, det ville redusere ressursbehovet ved informasjonsskrankene.  Kristian var del av team som skulle l\xf8se dette problemet, f\xf8rste fase var \xe5 sette opp en digital informasjonskiosk for Oslo Lufthavn. I prosjektets fase 2 ble l\xf8sningen utrullet p\xe5 andre norske flyplasser. ",Contribution:"Kristian jobbet i et lite smidig team best\xe5ende av tre utviklere og en designer som beveget seg hurtig, med hypping feedback fra kunde og sluttbrukere. L\xf8sningen bestod av webapplikasjoner i React, backend i C# ASP. NET Core og brukte flere tjenester fra Azure til p\xe5logging, datapersistering, og deployment.",Bullets:["Utviklet av infokiosk i React med touchst\xf8tte, med bl.a. kart, rutetider og artikkelsystem ","Utviklet backofficel\xf8sning i React med mulighet for \xe5 redigere innhold i infokiosk per fysiske enhet, med friteksteditering i Markdown ","CI/CD pipelines og konfigurasjon av Docker for deployment til Azure Kubernetes ","CI/CD pipeline som provisjonerte n\xf8dvendig infrastrukture i Azure infrastructure as code (IaC) ","Bidro ogs\xe5 til utplukking av hardware, 3D-printing og oppsett av den fysiske infokiosken "],Roles:[{Name:"Fullstackutvikler",Description:"Kristian jobbet med implementering av l\xf8sningen basert p\xe5 kundens spesifikasjon i samarbeid med UX. Han kodet i alle lagene av l\xf8sningen: Database, C#, React og i Azure. Han jobbet med resten av teamt i \xe5 utarbeide systemarkitektur og design av applikasjonene."}],Tech:["React","C#","ASP.NET Core","Azure","Azure DevOps","CosmosDB","GraphQL","Typescript","JavaScript","git","CI/CD","Docker","Kubernetes"],Start:"01.10.2019",End:"01.05.2020"},{version:3,CompanyName:"Sporveien",ProjectName:"Geometritoget",ProjectDescription:"Geometritoget er en t-banevogn utstyrt med over 30 sensorer som m\xe5ler verdier for blant annet sporvidde, kurve, vindskjevhet, akselerometer, m.m. Toget vil ved normal bruk dekke hele spornettet per 2 uker. Sporveien etablerte et lite team for \xe5 hente ned, dekode og analysere denne dataen med \xf8nske om \xe5 kunne si noe om vedlikeholdsbehov til spornettet. Dataen fra geometritoget skal gj\xf8re det mulig for de som er ansvarlige for vedlikehold av infrastrukturen i Sporveien \xe5 se p\xe5 trending av feil, f\xe5 varsel dersom en sensor fanger opp m\xe5linger som er utenfor terskelverdier, samt se p\xe5 gjennomsnittlige hastigheter p\xe5 hele skinnenettet. ",Contribution:"Kristian ble engasjert i dette prosjektet som eneste tekniske ressurs. Han var ansvarlig for l\xf8sningsdesign og implementering av softwarel\xf8sningen for systemet, og utviklet ulike tjenester for dataprosessering p\xe5 servere og i sky for \xe5 dekode, transformere og overf\xf8re data til ulike systemer.",Bullets:["Skrev tjenester i C# services som overf\xf8rte sensordata fra toget over 4g-nettet til AWS S3","Benyttet Python for \xe5 konvertere sensordata fra et propriet\xe6rt bin\xe6rsystem brukt av sensorleverand\xf8r ","Skrev og satt opp AWS Lambdas til \xe5 agere p\xe5 events til \xe5 transformere data  ","Utviklet ETL pipelines i Databricks mot AWS DynamoDB og AWS Redshift til prosessering av store datamengder ","Utarbeidet l\xf8sningsdesign for systemets arkitektur som ble presentert og akseptert i Arkitekturforum ","Bes\xf8kte jevnlig verkstedhallen for \xe5 feils\xf8ke systemet p\xe5 vognen "],Roles:[{Name:"Fullstackutvikler",Description:"Som eneste utvikler jobbet Kristian med alle ledd av teknologistacken. Han utviklet services og script i C# og AWS Lambda som konverterte, lastet og arkiverte spordata i AWS S3 og Redshift, skrev ETL prosedyrer i databricks som transformerte data. Tilgjengeliggjorde data for rapporter i Tableau og skrev frontendl\xf8sninger i Angular"},{Name:"Arkitekt",Description:"En del av prosjektet var \xe5 designe systemet med utgangspunkt i Sporveiens eksisterende infrastruktur og tjenesteportef\xf8lje, for \xe5 f\xe5 en smidig handover ved ferdigstillelse. Kristian designet dette systemet og presenterte det for Sporveiens 'arkitektur forum' og \xf8vrige forretning for godkjennelse f\xf8r det ble videreutviklet."}],Tech:["C#","AWS","IoT","git","Python","Tableau","AWS Redshift","AWS S3","AWS Lambda","Databricks","PySpark","Big Data","Datavarehus","Angular","TypeScript"],Start:"01.12.2018",End:"01.01.2020"},{version:3,CompanyName:"Sporveien",ProjectName:"Prediktivt vedlikehold av Sporvekslere",ProjectDescription:"Sporveien kj\xf8pte og installerte nye sporvekslere med en sensor for m\xe5ling og rapportering av n\xf8yaktig str\xf8mforbruk med h\xf8y oppl\xf8sning. Planen var \xe5 unders\xf8ke om det var mulig \xe5 predikere vedlikeholdsbehov basert p\xe5 denne dataen. ",Contribution:"Kristian ble engasjert for \xe5 prototype en l\xf8sning som kunne bruke denne dataen til \xe5 analysere, visualisere og varsle dersom loggf\xf8rte str\xf8mtrekk p\xe5 sporvekslinger i t-banenettet er utenom det vanlige og tilsa at det var behov for vedlikehold. Som eneste utvikler p\xe5 prosjektet utviklet han en l\xf8sning med Angular7 og Python Flask backend for visualisering servert fra Azure. Analyse og databehandling ble gjort i WebJobs, Azure Function, Blob storage og Azure CosmosDB. ",Bullets:["Skrev C#-kode kj\xf8rt i Azure Functions og WebJobs som brukte algoritmer fra signalbehandling og statistikk til \xe5 analysere sporvekslinger ","Utviklet system i Azure Functions som varslet dersom vekslinger var utenfor normalen ","Utviklet webapp for visualiseringer, deployet i CI/CD pipelines til Azure ","Bes\xf8kte sporskinner for \xe5 lage data til scenarioer hvor sporvekling feilet "],Roles:[{Name:"Fullstackutvikler",Description:"Som utvikler var Kristian ansvarlig for \xe5 utvikle og sette opp de ulike elementene i l\xf8sningen i Python, C#, Angular og i Azure. For \xe5 predikere behovet for vedlikehold brukte Kristian algoritmer fra signalbehandling samt AI/ML til \xe5 analysere data. Han var ogs\xe5 ute i 'felten' for \xe5 se p\xe5 sporvekslere og lage treningsdata for algoritmene. Resultatet ble visualisert i en frontend skrevet i Angular, og det ble utsendt varslinger fra Azure p\xe5 potensielle vedlikeholdsbehov."}],Tech:["Python","C#","Azure","Azure CosmosDB","Azure Blobstorage","Azure Function","Angular","typescript","git"],Start:"01.10.2018",End:"01.03.2019"},{version:3,CompanyName:"Sporveien",ProjectName:"IVO - Individstyring av Vognparken",ProjectDescription:"H\xe5ndtering og bestilling av t-banevogner for regelstyrt ettersyn ved T-baneverkstedet p\xe5 Ryen i Oslo er en kompleks manuell oppgave. Denne oppgaven involverer ekspertise innen domenet, da t-banevognene m\xe5 inn til ettersyn basert p\xe5 ulike vedlikeholdsbehov som kan skyldes b\xe5de tidsforl\xf8p og kj\xf8rte kilometer. Av \xf8konomiske hensyn er det \xf8nskelig \xe5 maksimere antall kilometer en vogn kan kj\xf8re f\xf8r ettersyn, da ubrukte kilometer representerer betydelige kostnader over vognens levetid. Dette er en utfordrende oppgave grunnet den komplekse kombinasjonen av faktorer som p\xe5virker en vogns tilstand, inkludert rutevalg, parkeringsstruktur, uforutsett vedlikehold og rengj\xf8ring.  Prosjektet kalt IVO (Individstyring av vognparken), hvor et forprosjekt ble etablert for \xe5 utforske muligheten for \xe5 utvikle digitale verkt\xf8y for \xe5 optimalisere planleggingen av ettersyn og styringen av t-banevogner. Kristian ble engasjert som utvikler og data scientist, for \xe5 unders\xf8ke om AI/ML-teknikker kunne l\xf8se denne utfordringen. Forprosjektet resulterte i en Proof of Concept (PoC) som dannet grunnlaget for fremtidige prosjektforslag og patents\xf8knad.",Contribution:"Kristian jobbet med flere alle delene av systemet, og var i lengre tid eneste utvikler p\xe5 prosjektet. Problemet viste seg \xe5 v\xe6re sv\xe6rt komplekst og det ble oppdelt i flere subproblemer som ble l\xf8st av skreddersydde optimaliseringsrutiner skrevet som Evolusjon\xe6re algoritmer i Python og reinforcementl\xe6rning i Tensorflow. Videre jobbet han med integrasjoner mot kjernesystemer for \xe5 hente ut n\xf8dvendig informasjon som kilometerstand og ruteplan.",Bullets:["Skrev evolusjon\xe6re algoritmer i Python for \xe5 utarbeide ruteallokering for \xe5 treffe optimale verksteddatoer ",'Utviklet \u201cet spill\u201d av reglene for rangering p\xe5 depot og brukte reinforcement learning til \xe5 trene modeller som l\xe6rte seg \xe5 rangere tog p\xe5 for \xe5 treffe allokert rutevalg. Modellene ble trent ved \xe5 "spille" over lengre tid i AWS EC2 ',"Holdt presentasjoner om systemet p\xe5 Make data smart Again ","Skrev rapporter og utarbeidet arkitektur for fullskala prosjekt som ble brukt til patents\xf8knad ","Flere bes\xf8k p\xe5 t-banehallen for \xe5 forst\xe5 domenet ","Tkinter GUI for visualisering av modeller mens de rangerer vogner "],Roles:[{Name:"Fullstackutvikler",Description:"Han jobbet med \xe5 utvikle modeller for IVO, itegrasjoner mot kildedata og oppsett av server samt CI/CD mot maskinjer i amazon. Videre jobbet han med datamodeller og optimeringsalgoritmer for l\xf8sningen. I en iterativ prosess bidro Kristian til \xe5 utvikle og teste hypoteser og modeller."},{Name:"Arkitekt",Description:"Som Arkitekt jobbet han med \xe5 identi\ufb01sere n\xf8dvendige komponenter for IVO, utarbeiding av arkitekturskisser og estimering av prosjektets omfang i timer og personell. Gjennom en forberedende fase mellom proof-of-concept og utviklingsl\xf8p jobbet Kristian med \xe5 koordinere valg av teknologi og plattform med tanke p\xe5 prosjektets og kundes behov. "}],Tech:["Python","Reinforcement Learning","Genetisk Algoritme","DEAP","Ray","Azure DevOps","AWS EC2","git"],Start:"01.09.2017",End:"01.10.2018"},{version:3,CompanyName:"Tine",ProjectName:"TineMatsans Chatbot",ProjectDescription:"I forbindelse med videreutvikling av nettsiden og oppskriftsdatabasen til Tines var det \xf8nskelig \xe5 se om det var mulig \xe5 bruke ChatBot-teknologi til \xe5 lage en smart chat bot som kunne interagere med kunder for \xe5 foresl\xe5 matoppskrifter fra oppskriftsdatabasen, smartsans, basert p\xe5 deres preferanser og tilgjengelige ingredienser.",Contribution:"Kristian ble engasjer som utvikler for \xe5 jobbe p\xe5 en PoC (Proof of concept) som gikk ut p\xe5 \xe5 koble Microsoft Bot Framework opp mot deler av samme backend og database som oppskriftsnettsiden brukte. Botten ble deployet p\xe5 Azure og kunne integreres med ulike klienter, som Slack, Skype eller p\xe5 nettsider. Prosjektet var vellykket og TINE valgte \xe5 g\xe5 videre med chatboten.",Bullets:["Brukte og deployet chatbot laget i Microsoft BotFramework trent med dialoger trent i wit.ai  ","Hentet oppskrifter og bildeinfo fra GraphQL som kunne vises i chat-dialogen "],Roles:[{Name:"Fullstackutvikler",Description:"Som utvilkler jobbet Kristian med integrasjoner mot n\xf8dvendig kildedata i GraphQL, oppsett av Bot Framework og design av card som ble brukt til \xe5 visualisere oppskrifter i chat-dialogene."}],Tech:["node.js","GraphQL","Microsoft Bot Framework","javascript","git"],Start:"01.08.2017",End:"01.09.2017"},{version:3,CompanyName:"Visma",ProjectName:"Visma Autopay",ProjectDescription:"AutoPay er en helautomatisk betalingstjeneste som tar h\xe5nd om alle inn- og utg\xe5ende betalinger for et ubegrenset antall kunder. Alle kunder som \xf8konomisystem fra Visma kan benytte Visma AutoPay for automatisk transport av betalingsdata begge veier mellom regnskapsprogram og datamottaker (for eksempel BBS, DnB NOR, Nordea eller Fokus Bank).",Contribution:"Kristian jobbet som utvikler i AutoPay i et team p\xe5 8-12 personer, han starter sin rolle der som sommer-student som skulle se p\xe5 modernisering av frontend-l\xf8sningen og bakenforliggende api med Angular.js. Det ble besluttet \xe5 g\xe5 videre med angular som ny l\xf8sning for frontend og Kristian fortsatte \xe5 jobbe hos Autopay med implementering av ny frontend ved siden av studiene p\xe5 NTNU til han ble uteksaminert.",Bullets:["Gjennomf\xf8rte en suksessfull PoC av ny frontend i Angular  ","Implementering av ny frontend og tilh\xf8rende API som tok over for Java MVC-l\xf8sning "],Roles:[{Name:"Utvikler",Description:"Som utvikler jobbet Kristian med frontend i Angualr.js og bakenforliggende API i Java JSF"}],Tech:["Java EE","JavaServer Faces","Angular.js","Karma","Jasmin","Javascript","Java","Jenkins","SVN","Selenium"],Start:"01.06.2015",End:"01.06.2017"},{version:3,CompanyName:"Direktoratet for forvaltning og IKT (DIFI)",ProjectName:"Doffin-data, eL\xe6ring i staten, App for ID-porten eID",ProjectDescription:"Direktoratet for forvaltning og ikt (Difi) tar hvert \xe5r inn sommerstudenter med relevant p\xe5g\xe5ende utdannelse i fra data-linjer p\xe5 universiter og h\xf8yskoler i Norge til \u201cDificamp\u201d.  Dificamp gir utviklerne i difi ekstra kapasitet til \xe5 teste ut nye teknologi eller til \xe5 jobbe med l\xf8sninger som det ellers ikke er tid til. ",Contribution:"Kristian jobbet sommeren 2014 hos Difi i Leikanger. Han jobbet p\xe5 tre forskjellige applikasjoner og systemer i l\xf8pet av 2 m\xe5neder; 'E-l\xe6ringsplatform i PHP Moodle for kurs og el\xe6ring til bruk i staten', 'Indeksering og tilgjengeliggj\xf8ring av Doffin-data (data over offentlig anbud) i Elasticsearch og Spring boot' og 'Android app for inkludering av ID-porten MinId som en eID'",Bullets:["Utviklet egne plugins til eL\xe6ringsplatforment moodle for utstedelse av diplom/verifikasjon etter gjennomf\xf8rt kurs ","Indeksering av 10\xe5r med doffindata i Elasticsearch som ble tilgjengeligjort med api i Spring-Boot ","Utviklet PoC for ID-porten eID p\xe5 Android som lagret autentisert bruker etter p\xe5logging med ID-Porten "],Roles:[{Name:"Utvikler",Description:"Som utvikler jobbet Kristian alle lagene i de forskjellige l\xf8sningene. SpringBoot backends, Android applikasjoner og infrastrukturoppgaver i Elasticsearch"}],Tech:["elastic search","angular","java","spring boot","javascript","android","java","spring boot","PHP","git","HTML/CSS"],Start:"01.06.2014",End:"01.08.2014",Description:"ID-porten var en mobil applikasjon for Android som gjorde det mulig \xe5 logge inn med ID-porten og lagre autentiseringen p\xe5 mobilen p\xe5 en sikker m\xe5te. Innloggingen kunne s\xe5 bli brukt av andre applikasjoner p\xe5 samme m\xe5te som man ofte bruker sin google eller facebook konto. F\xf8r at innloggingen kunne huskes, krevde applikasjonen at mobilen m\xe5tte l\xe5ses med passord eller pin. Om ikke krevde applikasjonen innlogging for hvert bruk. Applikasjonen var en 'proof of concept' brukt for \xe5 demonstrere sikkerheten bak en slik l\xf8sning. Konseptet ble videre brukt til utvikling av AltInn appen."},{CompanyName:"NTNUi Dans",ProjectName:"www.ntnuisdans.no",Roles:["Utvikler"],Tech:["Python","Flask","javascript","SQL Alrchemy","PostgrSQL","nginx","uwsgi"],Start:"01.01.2013",End:"01.01.2016",Description:"NTNUiDans.no er web portalen for studentgruppe som driver med dans under NTNUi paraplyen. Systemet er en web portal og CMS med administrasjons-side for h\xe5ndtering av innhold, arrangement, treninger, brukere, instrukt\xf8rer, instrukt\xf8r sertifisering og betaling av treningskontigent. Prosjektet var et kundestyrt bachelor-prosjekt hvor Kristian arbeidet i et team p\xe5 8 personer. Web portalen ble utviklet i rammeverket Flask i programmeringsspr\xe5ket Python. Betalingsl\xf8sningen ble laget med rammeverket Stripe og databaselaget ble laget ved hjelp av SQLAlchemy og PostgreSQL. www.ntnuidans.no"},{CompanyName:"NTNUi Squash",ProjectName:"www.ntnuisquash.no",Roles:["Utvikler"],Tech:["Python","Flask","javascript","SQL Alrchemy","PostgrSQL","nginx","uwsgi"],Start:"01.09.2013",End:"01.08.2015",Description:"NTNUiSquash.no er portalen til studentgruppen som driver med Squash under NTNUi paraplyen. Systemet er ansvarlig for h\xe5ndtering av brukere, nyheter og reservering og p\xe5melding p\xe5 ukentlige treninger. Nettsiden ble utviklet av Kristian mens han hadde verv som web ansvarlig i NTNUiSquash. Da den gamle nettsiden var gammel og utdatert, ble styret enige om at en ny nettside var n\xf8dvendig. Nettsiden ble utviklet som et CMS, med administrasjonside for h\xe5ndtering av brukere, nyheter og treninger. For sluttbrukere ble nettsiden brukt til \xe5 reservere ukentlige treninger for et semester i gangen, samt bekrefte oppm\xf8te p\xe5 disse treningene. Om oppm\xf8te ikke er bekreftet 5 dager f\xf8r treningdatoen blir den tilgjengelig for alle brukere, hvor den som melder seg p\xe5 f\xf8rst blir tildelt plassen for den enkelte treningen."}],education:[{UniversityName:"Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",specialization:"Master of Science (MSc), Informatikk, Kunstig Intelligens",MonthOfPassing:"Juni",YearOfPassing:"2017",Achievements:"Some Achievements"},{UniversityName:"Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",specialization:"Bacelor of Science (BSc) Informatikk",MonthOfPassing:"Juni",YearOfPassing:"2015",Achievements:"Some Achievements"}],work:[{CompanyName:"Fyr Consulting",specialization:"IT Konsulent og Daglig leder",MonthOfLeaving:"Mai",YearOfLeaving:"2020",Achievements:"Gjennom sitt arbeid som it-konsulten i Fyr Consulting er Kristian p\xe5 prosjekt hos Buypass"},{CompanyName:"Bouvet",specialization:"IT Konsulent",MonthOfLeaving:"Mai",YearOfLeaving:"2020",Achievements:"Gjennom sin jobb hos bouvet var Kristian utleid p\xe5 flere prosjekter hos kunder som: Tine, Sporveien og Avinor"},{CompanyName:"Visma Software Autopay",specialization:"Systemutvikler",MonthOfLeaving:"Juni",YearOfLeaving:"2017",Achievements:"Kristian jobbet deltid hos Visma mens han studerte og fulltid p\xe5 sommerne siden 2015."},{CompanyName:"Direktoratet for forvaltning og IKT (Difi)",specialization:"Systemutvikler",MonthOfLeaving:"Juni",YearOfLeaving:"2014",Achievements:"Kristian jobbet hos Difi i et engasjement sommeren 2014."}],portfolio:[{name:"Verkt\xf8y for visualisering av potensielle feil p\xe5 spornettet",description:"Verkt\xf8y for visualisering av potensielle feil p\xe5 spornettet",imgurl:"images/portfolio/geofeil.jpg"},{name:"Verkt\xf8y for trening og visualisering av modeller",description:"Optimalisering av Rangering og Dispatching av tbanevogner",imgurl:"images/portfolio/base-agent.gif"},{name:"AviKiosk",description:"Digitalt Infosenter for reisende p\xe5 flyplass",imgurl:"images/portfolio/avinor-osl.png"},{name:"Rangeringsmodul",description:"Rangering av tbanevogner ved AI trent med reinforcement learning",imgurl:"images/portfolio/rl-sporveien6.gif"},{name:"Overv\xe5kning av sensordata",description:"Overv\xe5kning av sporgeometri for tbanenettet",imgurl:"images/portfolio/geometri.jpg"},{name:"NTNUi Squash",description:"CMS og medlemsside for NTNUi Squash",imgurl:"images/portfolio/ntnuisquash.png"},{name:"NTNUi Dans",description:"Side for p\xe5melding, innhold og betaling for NTNUi Dans",imgurl:"images/portfolio/ntnuidans.png"},{name:"Prediktiv vedlikehold av Sporvekslere",description:"Analyse og varsling av feil p\xe5 sporvekslere",imgurl:"images/portfolio/psv.jpg"},{name:"P\xe5logging med Buypass Identity & passordl\xf8s FIDO2-teknologi hos Altinn",description:"P\xe5loggingsskjerm som bruker Buypass Identity & passordl\xf8s FIDO2-teknologi ",imgurl:"images/portfolio/bpaltinn.png"}]},E=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,{resumeData:j}),a.a.createElement(p,{resumeData:j}),a.a.createElement(u,{resumeData:j}),a.a.createElement(v,{resumeData:j}),a.a.createElement(f,{resumeData:j}),a.a.createElement(b,{resumeData:j}),a.a.createElement(h,{resumeData:j}))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7375782a.chunk.js.map