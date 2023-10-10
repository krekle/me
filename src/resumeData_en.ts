let resumeData = {
  content: {
    home: "Home",
    about: "About",
    competence: "Competency",
    cv: "CV",
    portfolio: "Portfolio",
    contact: "Contact",
    desc: "Full-stack developer with a passion for software",
    title: "CEO and Senior Fullstack developer at Fyr Consulting AS",
    availability: "Currently working on a project for Specc. Available fall 2023",
    about_header: "About Kristian",
    about_short: "He holds a master's degree in computer science from NTNU with a specialization in artificial intelligence.",
    about_long: "Kristian thrives when working independently and in interdisciplinary teams. As an individual, Kristian is a very positive and engaged consultant who contributes to creating a good team environment. He takes responsibility in projects and is more than happy to share his knowledge with other developers. \n\n Previous clients and colleagues would describe Kristian as a self-driven and versatile developer who is equally comfortable working with frontend, backend, infrastructure, ETL pipelines, solution design, or cloud technologies in AWS or Azure. Moreover, he is always open to exploring new technology. For him, it's important to deliver high-quality, maintainable solutions that fit into the existing portfolio. Kristian's strength lies in his practical and goal-oriented approach to development tasks. He is a pragmatic problem solver who values efficient interaction and communication to ensure that the developed solutions align with the actual needs of the clients. He is a proponent of agile development methodology and demonstrates initiative and willingness to collaborate in both independent projects and as part of a team, where he is accustomed to taking on roles of responsibility. \n\n He is keen on and has experience in working closely with the business to develop critical business solutions that provide significant customer value. In this context, Kristian has experience working user-centered in projects with a lot of change. In several projects, he has been involved in the entire product development, from needs analysis and concept design, through the development process, to thoroughly tested solutions with successful realization of benefits.",
    contact_header: "Contact Information",
    contact_name: "Kristian Ekle",
    contact_address: "Oslo, Norway",
    contact_email: "kristian.ekle@fyrconsulting.no",
    featured_header: "Featured competency",
    cv_promo: "More detailed information available in complete CV ",
    cv_link: "here",
    resume_header: "Projects",
    resume_contributions: "Contributions",
    education_header: "Education",
    work_header: "Work",
    publications_header: "Publications",
    courses_header: "Courses",
    portfolie_header: "Snippets from some previous projects.",
    lead: "Please do not hesitate to contact me on e-mail or on LinkedIn."
  },
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kristian-ekle-3150836b/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/krekle",
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
      name: "JavaScript",
      description:
        "Extensive experience with JavaScript from education and customer projects. Proficient with frameworks like React, Angular, or Express.js and tools such as Webpack, npm, linters, and automated tests."
    },
    {
      name: "Java",
      description:
        "Experience in Java from NTNU and at Visma and Buypass. Familiar with Spring-Boot, for instance, for writing microservices and backends with various purposes, like APIs, authentication, proxy, database, etc."
    },
    {
      name: "C# & .NET",
      description:
        "Previously worked in a C#/.NET department at Bouvet and contributed significantly to the professional community around Azure and Microsoft technologies. Well-acquainted with C#, .NET, ASP.NET, nuget, and Azure from multiple projects at Sporveien and Avinor. Delivered backend APIs, Windows services, and calculations in Azure Functions using C# and .NET Core."
    },
    {
      name: "Python",
      description:
        "Used Python in several projects at Sporveien for machine learning and optimization tasks, APIs, and calculations in AWS Lambdas and Azure Functions. Also has experience with Django, Flask, and Bottle from hobby projects and academic times, especially for developing websites for student associations/NTNUI groups."
    },
    {
      name: "Infrastructure and CI/CD",
      description:
        "Proficient in developing CI/CD pipelines, either through scripts in Jenkins, in Azure DevOps, or in GitLab pipelines. Often takes responsibility for deploying applications and has experience in production setups on-premises or in the cloud with Docker/Kubernetes."
    },
  ],
  projects: [
    {
      "version": 3,
      "CompanyName": "Buypass",
      "ProjectName": "Buypass FIDO2 Identity Services",
      "ProjectDescription":
        "Buypass developed a solution for secure login and user management at the highest security level, eIDas high, using FIDO2 technology. The solution is now used by several Buypass customers in the municipal, pharmacy, and health sectors. It's also possible to use the solution for logging into public services such as Nav and the Tax Administration through ID-porten.",
      "Contribution":
        "Kristian worked on several aspects of the Buypass FIDO2 Identity solution, including infrastructure, service layer, and as the main person responsible for frontend applications. He developed several applications and microservices in Spring-boot, self-service solutions, back-office solutions, and login screens for ID-porten in web technologies and wrote Logstash pipelines that sent messages from Kafka to ElasticSearch.",
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "As a fullstack developer, Kristian worked with all layers in the technology stack, creating apps in JavaScript and React, backend APIs, microservices, and MVC solutions in Spring-Boot, as well as docker/kubernetes and nginx file servers. He also worked extensively with events in Kafka, logstash, and elasticsearch for audit logging and reports."
        },
        {
          "Name": "Frontend Lead",
          "Description":
            "Kristian was responsible for the frontend in his team at Buypass. In this role, he developed React applications, 'vanilla' Javascript components in the frontend for MVC solutions, and reusable component libraries in Web Components that the rest of the team could use. He also collaborated extensively with UX and business to create user-friendly and aesthetic screens. He also participated in the frontend forum, an initiative to gather around a common design system made in Figma, Storybook, and React."
        }
      ],
      "Bullets": [
        "Wrote backend solutions and microservices in Spring-Boot",
        "Developed web apps and self-service solutions in consultation with UX and business",
        "Participated in solution design and architecture of the event system and multi-tenant version of FIDO2 identity services",
        "Wrote solutions that published, consumed, monitored, and visualized events and audit logs in Kafka",
        "Developed a JavaScript solution that integrated with webauthn and ctap for authentication with physical FIDO2 keys",
        "Pilot project for deploying applications to Kubernetes which was later adopted",
        "Participated in audit processes to get the solution certified at the highest level, eIDAS high"
      ],
      "Tech": [
        "Java",
        "Spring-Boot",
        "Spring security",
        "OIDC",
        "Fido2",
        "Rancher",
        "Docker",
        "Kubernetes",
        "typescript",
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
        "NPM"
      ],
      "Start": "01.09.2019",
      "End": "01.05.2023"
    },
    {
      "version": 3,
      "CompanyName": "Buypass",
      "ProjectName": "ID Verification with Digital Passport Reader",
      "ProjectDescription":
        "To issue an electronic ID, it's necessary to conduct an ID verification where an operator checks the passport, requiring physical presence. Especially during the coronavirus pandemic, there was a desire for a remote ID verification solution. Commissioned by the Digitalization Directorate, Buypass began developing a method for users to authenticate themselves to public services through a digital passport reader.",
      "Contribution":
        "Kristian was engaged by Buypass to serve as a fullstack developer in a team with extensive expertise in security and cryptography. He was responsible for developing a React application for user ID verification and payment, as well as the associated API for login with OIDC, communication with backend services, and integration with the Nets Passport Reader.",
      "Bullets": [
        "Developed a web app in React for ordering, ID verification, and payment of electronic ID",
        "Wrote API and services in Spring-Boot",
        "Created CI/CD pipelines and configured Docker, Docker-compose, traefik, and nginx for deployment and security"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "In this role, Kristian developed a web application with a React frontend and a Spring-Boot backend. The application's purpose was to conduct an ID verification of users for the issuance of electronic IDs. Kristian collaborated with a cross-functional team to create an app that integrated with the national registry and an app from .Nets that reads data from modern passports to conduct a biometric ID verification. Kristian was also responsible for integrating with a payment solution after the verification was completed. He worked directly with the UX lead iteratively to make the applications aesthetic and user-friendly."
        }
      ],
      "Tech": [
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
        "NPM"
      ],
      "Start": "01.05.2020",
      "End": "01.09.2020"
    },
    {
      "version": 3,
      "CompanyName": "Avinor",
      "ProjectName": "Digital Info Center / InfoKiosk",
      "ProjectDescription":
        "Avinor identified a need to assist employees at the information desks at their airports and realized that the most frequently asked questions could be addressed digitally, reducing the resource needs at the information desks. Kristian was part of the team tasked with solving this problem; the first phase was to set up a digital information kiosk for Oslo Airport. In phase 2 of the project, the solution was rolled out to other Norwegian airports.",
      "Contribution":
        "Kristian worked in a small agile team consisting of three developers and a designer that moved quickly, with frequent feedback from the client and end-users. The solution consisted of web applications in React, a backend in C# ASP.NET Core, and utilized several Azure services for login, data persistence, and deployment.",
      "Bullets": [
        "Developed C# ASP.NET Core backend with Entity Framework for Azure CosmosDB",
        "Developed an info kiosk in React with touch support, including maps, timetables, and an article system",
        "Developed a back-office solution in React that allowed content editing in the info kiosk per physical unit, with free-text editing in Markdown",
        "Participated in developing the solution design and architecture of the system",
        "CI/CD pipelines and Docker configuration for deployment to Azure Kubernetes",
        "CI/CD pipeline that provisioned the necessary infrastructure in Azure as infrastructure as code (IaC)",
        "Also contributed to the selection of hardware, 3D printing, and setup of the physical info kiosk"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "Kristian worked on implementing the solution based on the client's specifications in collaboration with UX. He coded in all layers of the solution: Database, C#, React, and in Azure. He collaborated with the rest of the team in developing the system architecture and design of the applications."
        }
      ],
      "Tech": [
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
        "Figma"
      ],
      "Start": "01.10.2019",
      "End": "01.05.2020"
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "Geometry Train",
      "ProjectDescription":
        "The Geometry Train is a subway car equipped with over 30 sensors that measure values for track width, curve, wind skewness, accelerometer, and more. In regular use, the train covers the entire track network every 2 weeks. Sporveien established a small team to retrieve, decode, and analyze this data with the aim of determining the maintenance needs of the track network. The data from the Geometry Train allows those responsible for maintaining Sporveien's infrastructure to observe trending errors, receive alerts if a sensor captures measurements outside threshold values, and view average speeds across the entire rail network.",
      "Contribution":
        "Kristian was engaged in this project as the sole technical resource. He was responsible for the solution design and implementation of the software solution for the system, and developed various services for data processing on servers and in the cloud to decode, transform, and transfer data to different systems.",
      "Bullets": [
        "Wrote C# services that transferred sensor data from the train over the 4G network to AWS S3",
        "Used Python to convert sensor data from a proprietary binary system used by the sensor supplier",
        "Wrote and set up AWS Lambdas to act on events to transform data",
        "Developed ETL pipelines in Databricks for AWS DynamoDB and AWS Redshift for processing large amounts of data",
        "Developed the solution design for the system's architecture which was presented and accepted in the Architecture Forum",
        "Developed a web app in React for visualizations of sensor data, deployed with CI/CD pipelines to AWS",
        "Regularly visited the workshop hall to troubleshoot the system on the train"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "As the sole developer, Kristian worked with all parts of the technology stack. He developed services and scripts in C# and AWS Lambda that converted, loaded, and archived track data in AWS S3 and Redshift, wrote ETL procedures in Databricks that transformed data, made data available for reports in Tableau, and wrote frontend solutions in Angular."
        },
        {
          "Name": "Architect",
          "Description":
            "Part of the project was to design the system based on Sporveien's existing infrastructure and service portfolio, to ensure a smooth handover upon completion. Kristian designed this system and presented it to Sporveien's 'architecture forum' and the wider business for approval before further development."
        }
      ],
      "Tech": [
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
        "Data Warehouse",
        "React",
        "TypeScript",
        "HTML/CSS",
        "Webpack",
        "NPM"
      ],
      "Start": "01.12.2018",
      "End": "01.01.2020"
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "Predictive Maintenance of Track Switches",
      "ProjectDescription":
        "Sporveien purchased and installed new track switches equipped with a sensor for measuring and reporting precise power consumption at high resolution. The plan was to investigate whether it was possible to predict maintenance needs based on this data.",
      "Contribution":
        "Kristian was engaged to prototype a solution that could use this data to analyze, visualize, and alert if the logged power draw on track switches in the subway network was unusual and indicated a need for maintenance. As the sole developer on the project, he developed a solution with Angular7 and a Python Flask backend for visualization served from Azure. Analysis and data processing were done in WebJobs, Azure Function, Blob storage, and Azure CosmosDB.",
      "Bullets": [
        "Wrote C# code run in Azure Functions and WebJobs that used algorithms from signal processing and statistics to analyze track switches",
        "Developed a system in Azure Functions that alerted if switches were outside the norm",
        "Developed a web app for visualizations, deployed in CI/CD pipelines to Azure",
        "Visited tracks to create data for scenarios where track switching failed"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "As a developer, Kristian was responsible for developing and setting up the various elements of the solution in Python, C#, Angular, and in Azure. To predict maintenance needs, Kristian used algorithms from signal processing as well as AI/ML to analyze data. He also went out into the 'field' to look at track switches and create training data for the algorithms. The result was visualized in a frontend written in Angular, and notifications were sent from Azure on potential maintenance needs."
        }
      ],
      "Tech": [
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
        "NPM"
      ],
      "Start": "01.10.2019",
      "End": "01.05.2020"
    },
    {
      "version": 3,
      "CompanyName": "Sporveien",
      "ProjectName": "IVO - Individual Management of the Train Fleet",
      "ProjectDescription":
        "Handling and ordering subway cars for rule-based inspection at the Subway Workshop in Ryen, Oslo is a complex manual task. This task involves domain expertise, as subway cars must be inspected based on various maintenance needs that can be due to both time elapsed and miles driven. For economic reasons, it's desirable to maximize the number of kilometers a car can drive before inspection, as unused kilometers represent significant costs over the car's lifespan. This is a challenging task due to the complex combination of factors affecting a car's condition, including route choice, parking structure, unforeseen maintenance, and cleaning. The project called IVO (Individual Management of the Train Fleet) was initiated to explore the possibility of developing digital tools to optimize the planning of inspections and the management of subway cars. Kristian was engaged as a developer and data scientist to investigate if AI/ML techniques could address this challenge. The preliminary project resulted in a Proof of Concept (PoC) that formed the basis for future project proposals and a patent application.",
      "Contribution":
        "Kristian worked on all parts of the system and was for a long time the only developer on the project. The problem turned out to be very complex and was divided into several sub-problems that were solved by custom optimization routines written as Evolutionary algorithms in Python and reinforcement learning in Tensorflow. He also worked with integrations to core systems to retrieve necessary information such as mileage and route plan.",
      "Bullets": [
        "Wrote evolutionary algorithms in Python to develop route allocation to hit optimal workshop dates",
        'Developed a “game” of the rules for ranking at the depot and used reinforcement learning to train models that learned to rank trains to hit the allocated route choice. The models were trained by "playing" over an extended period in AWS EC2',
        "Gave presentations about the system at Make Data Smart Again",
        "Wrote reports and developed architecture for full-scale implementation used for patent application",
        "Multiple visits to the subway hall to understand the domain",
        "Tkinter GUI for visualizing models while ranking cars"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "He worked on developing models for IVO, integrations against source data, and server setup as well as CI/CD against machines in Amazon. He also worked with data models and optimization algorithms for the solution. In an iterative process, Kristian contributed to developing and testing hypotheses and models."
        },
        {
          "Name": "Architect",
          "Description":
            "As an Architect, he worked on identifying necessary components for IVO, drafting architectural sketches, and estimating the project's scope in hours and personnel. Through a preparatory phase between proof-of-concept and development, Kristian coordinated technology and platform choices considering the project's and customer's needs."
        }
      ],
      "Tech": [
        "Python",
        "Reinforcement Learning",
        "Genetic Algorithm",
        "DEAP",
        "Ray",
        "Azure DevOps",
        "AWS EC2",
        "git"
      ],
      "Start": "01.09.2017",
      "End": "01.10.2018"
    },
    {
      "version": 3,
      "CompanyName": "Tine",
      "ProjectName": "TineMatsans Chatbot",
      "ProjectDescription":
        "In connection with the further development of the website and the recipe database of Tine's, there was an interest in exploring the possibility of using ChatBot technology to create a smart chatbot that could interact with customers to suggest food recipes from the recipe database, smartsans, based on their preferences and available ingredients.",
      "Contribution":
        "Kristian was engaged as a developer to work on a PoC (Proof of Concept) that involved connecting the Microsoft Bot Framework to parts of the same backend and database that the recipe website used. The bot was deployed on Azure and could be integrated with various clients, such as Slack, Skype, or on websites. The project was successful, and TINE chose to proceed with the chatbot.",
      "Bullets": [
        "Developed and deployed a chatbot made in Microsoft BotFramework trained with dialogs in wit.ai",
        "Retrieved recipes and image info from GraphQL that could be displayed in the chat dialog"
      ],
      "Roles": [
        {
          "Name": "Fullstack Developer",
          "Description":
            "As a developer, Kristian worked with integrations against necessary source data in GraphQL, setup of the Bot Framework, and design of cards used to visualize recipes in chat dialogs."
        }
      ],
      "Tech": [
        "node.js",
        "GraphQL",
        "Microsoft Bot Framework",
        "javascript",
        "git"
      ],
      "Start": "01.08.2017",
      "End": "01.09.2017"
    },
    {
      "version": 3,
      "CompanyName": "Visma",
      "ProjectName": "Visma Autopay",
      "ProjectDescription":
        "AutoPay is a fully automatic payment service that handles all incoming and outgoing payments for an unlimited number of customers. All customers using the financial system from Visma can utilize Visma AutoPay for automatic transport of payment data both ways between the accounting program and the data recipient (for example, BBS, DnB NOR, Nordea, or Fokus Bank).",
      "Contribution":
        "Kristian worked as a developer in AutoPay in a team of 8-12 people; he started his role there as a summer intern looking into modernizing the frontend solution and the underlying API with Angular.js. It was decided to proceed with Angular as the new frontend solution, and Kristian continued to work at Autopay implementing the new frontend alongside his studies at NTNU until he graduated.",
      "Bullets": [
        "Successfully conducted a PoC of the new frontend in Angular",
        "Implementation of the new frontend and the associated API that replaced the Java MVC solution"
      ],
      "Roles": [
        {
          "Name": "Developer",
          "Description":
            "As a developer, Kristian worked with the frontend in Angular.js and the underlying API in Java JSF."
        }
      ],
      "Tech": [
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
        "HTML/CSS"
      ],
      "Start": "01.06.2015",
      "End": "01.06.2017"
    },
    {
      "version": 3,
      "CompanyName": "Directorate for Management and ICT (DIFI)",
      "ProjectName": "Doffin-data, eLearning in the state, App for ID-porten eID",
      "ProjectDescription":
        "The Directorate for Management and ICT (Difi) annually takes in summer students with relevant ongoing education from computer science courses at universities and colleges in Norway for “Dificamp”. Dificamp provides the developers at Difi with extra capacity to test out new technology or to work on solutions that they otherwise wouldn't have time for.",
      "Contribution":
        "Kristian worked in the summer of 2014 at Difi in Leikanger. He worked on three different applications and systems over 2 months; 'E-learning platform in PHP Moodle for courses and e-learning for use in the state', 'Indexing and making available Doffin-data (data on public tenders) in Elasticsearch and Spring boot', and 'Android app for including the ID-porten MinId as an eID'.",
      "Bullets": [
        "Developed custom plugins for the eLearning platform Moodle for issuing diplomas/verification after completing a course",
        "Indexed 10 years of Doffin data in Elasticsearch which was made available with an API in Spring-Boot",
        "Developed a PoC for ID-porten eID on Android that stored an authenticated user after logging in with ID-Porten"
      ],
      "Roles": [
        {
          "Name": "Developer",
          "Description":
            "As a developer, Kristian worked on all layers of the different solutions. SpringBoot backends, Android applications, and infrastructure tasks in Elasticsearch."
        }
      ],
      "Tech": [
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
        "HTML/CSS"
      ],
      "Start": "01.06.2014",
      "End": "01.08.2014",
      "Description":
        "ID-porten was a mobile application for Android that allowed users to log in with ID-porten and securely store the authentication on the mobile. The login could then be used by other applications in the same way that one often uses their Google or Facebook account. For the login to be remembered, the application required the mobile to be locked with a password or pin. If not, the application required a login for each use. The application was a 'proof of concept' used to demonstrate the security behind such a solution. The concept was later used in the development of the AltInn app."
    },
    {
      "CompanyName": "NTNUi Dance",
      "ProjectName": "www.ntnuisdans.no",
      "Roles": ["Developer"],
      "Tech": [
        "Python",
        "Flask",
        "javascript",
        "SQL Alrchemy",
        "PostgrSQL",
        "nginx",
        "uwsgi"
      ],
      "Start": "01.01.2013",
      "End": "01.01.2016",
      "Description":
        "NTNUiDans.no is the web portal for the student group involved in dance under the NTNUi umbrella. The system is a web portal and CMS with an administration page for managing content, events, training sessions, users, instructors, instructor certification, and payment of training fees. The project was a customer-driven bachelor project where Kristian worked in a team of 8 people. The web portal was developed in the Flask framework in the Python programming language. The payment solution was made with the Stripe framework, and the database layer was created using SQLAlchemy and PostgreSQL. www.ntnuidans.no"
    },
    {
      "CompanyName": "NTNUi Squash",
      "ProjectName": "www.ntnuisquash.no",
      "Roles": ["Developer"],
      "Tech": [
        "Python",
        "Flask",
        "javascript",
        "SQL Alrchemy",
        "PostgrSQL",
        "nginx",
        "uwsgi"
      ],
      "Start": "01.09.2013",
      "End": "01.08.2015",
      "Description":
        "NTNUiSquash.no is the portal for the student group involved in Squash under the NTNUi umbrella. The system is responsible for managing users, news, and reservations and registration for weekly training sessions. The website was developed by Kristian while he held the position of web manager in NTNUiSquash. As the old website was old and outdated, the board agreed that a new website was necessary. The website was developed as a CMS, with an administration page for managing users, news, and training sessions. For end-users, the website was used to reserve weekly training sessions for a semester at a time, and to confirm attendance at these training sessions. If attendance is not confirmed 5 days before the training date, it becomes available to all users, where the first to sign up is assigned the spot for that particular training session."
    }
  ],
  education: [
        {
          "UniversityName": "Norwegian University of Science and Technology (NTNU)",
          "specialization": "Master of Science (MSc), Computer Science, Artificial Intelligence",
          "MonthOfPassing": "June",
          "YearOfPassing": "2017",
          "Achievements": "Some Achievements"
        },
        {
          "UniversityName": "Norwegian University of Science and Technology (NTNU)",
          "specialization": "Bachelor of Science (BSc) Computer Science",
          "MonthOfPassing": "June",
          "YearOfPassing": "2015",
          "Achievements": "Some Achievements"
        }
  ],  
  work: [
    {
      "CompanyName": "Fyr Consulting",
      "specialization": "IT Consultant and Managing Director",
      "MonthOfLeaving": "May",
      "YearOfLeaving": "2020",
      "Achievements": "Through his work as an IT consultant at Fyr Consulting, Kristian is on a project with Buypass."
    },
    {
      "CompanyName": "Bouvet",
      "specialization": "IT Consultant",
      "MonthOfLeaving": "May",
      "YearOfLeaving": "2020",
      "Achievements": "Through his job at Bouvet, Kristian was outsourced to several projects with clients such as: Tine, Sporveien, and Avinor."
    },
    {
      "CompanyName": "Visma Software Autopay",
      "specialization": "System Developer",
      "MonthOfLeaving": "June",
      "YearOfLeaving": "2017",
      "Achievements": "Kristian worked part-time at Visma while studying and full-time during the summers since 2015."
    },
    {
      "CompanyName": "Directorate for Management and ICT (Difi)",
      "specialization": "System Developer",
      "MonthOfLeaving": "June",
      "YearOfLeaving": "2014",
      "Achievements": "Kristian worked at Difi in a commitment during the summer of 2014."
    }
  ],
  publications : [
    {
      "Type": "Workshop",
      "Name": "NDC Oslo: Machine Learning and Artificial Intelligence",
      "Description": "Kristian held a workshop at NDC Oslo on the use of AI/ML for developers.",
      "Time": "Jun 2018"
    },
    {
      "Type": "Lecture",
      "Name": "Make Data Smart Again",
      "Description": "Kristian gave a lecture on the ML algorithms developed and used in the IVO project at Sporveien.",
      "Time": "Jun 2018"
    },
    {
      "Type": "Lecture",
      "Name": "Yggdrasil: Artificial Intelligence and Machine Learning",
      "Description": "Kristian held a presentation on what AI/ML is for designers at the Yggdrasil conference.",
      "Time": "Apr 2018"
    },
    {
      "Type": "Publication",
      "Name": "Self-Modifying Dynamical Systems for Reservoir Computing",
      "Description": "Master's thesis in artificial intelligence at NTNU Gløshaugen.",
      "Time": "Jun 2017"
    }
  ],
  courses: [
    {
      "Type": "Course",
      "Name": "Architecture School",
      "Description": "Course for solution architects across several modules such as; Estimation, Requirements, CI/CD, DevOps, GDPR, etc..",
      "Time": "Fall 2019"
    }
  ],
  portfolio: [
    {
      "name": "Login with Buypass Identity & passwordless FIDO2 technology at Altinn",
      "description": "Login screen using Buypass Identity & passwordless FIDO2 technology",
      "imgurl": "images/portfolio/fido2.jpg"
    },
    {
      "name": "Buypass Identity & passwordless FIDO2 technology",
      "description": "ID control with digital card reader and registration of physical FIDO2 key",
      "imgurl": "images/portfolio/bpaltinn.png"
    },
    {
      "name": "AviKiosk",
      "description": "Digital Information Center for travelers at the airport",
      "imgurl": "images/portfolio/avinor-osl.png"
    },
    {
      "name": "AviKiosk",
      "description": "Digital Information Center for travelers at the airport",
      "imgurl": "images/portfolio/avinor-trdcrop.png"
    },
    {
      "name": "Tool for visualizing potential errors on the rail network",
      "description": "Tool for visualizing potential errors on the rail network",
      "imgurl": "images/portfolio/geofeil.jpg"
    },
    {
      "name": "Tool for training and visualization of models",
      "description": "Optimization of Ranking and Dispatching of subway cars",
      "imgurl": "images/portfolio/base-agent.gif"
    },
    {
      "name": "Ranking module",
      "description": "Ranking of subway cars by AI trained with reinforcement learning",
      "imgurl": "images/portfolio/rl-sporveien6.gif"
    },
    {
      "name": "Sensor data monitoring",
      "description": "Monitoring of track geometry for the subway network",
      "imgurl": "images/portfolio/geometri.jpg"
    },
    {
      "name": "Predictive maintenance of Track Switches",
      "description": "Analysis and alerting of errors on track switches",
      "imgurl": "images/portfolio/psv.jpg"
    },
    {
      "name": "Sporveien IVO",
      "description": "Optimization of route allocation with EA",
      "imgurl": "images/portfolio/genetic.png"
    },
    {
      "name": "Visma Autopay",
      "description": "Screen from Visma Autopay",
      "imgurl": "images/portfolio/visma.png"
    },
    {
      "name": "NTNUi Dance",
      "description": "Page for registration, content, and payment for NTNUi Dance",
      "imgurl": "images/portfolio/ntnuidans.png"
    },
    {
      "name": "Difi App for ID-porten eID",
      "description": "Android app developed at Difi for eID after logging in with ID-porten",
      "imgurl": "images/portfolio/difi-app.png"
    },
    {
      "name": "NTNUi Squash",
      "description": "CMS and member page for NTNUi Squash",
      "imgurl": "images/portfolio/ntnuisquash.png"
    }
  ],
};

export default resumeData;
