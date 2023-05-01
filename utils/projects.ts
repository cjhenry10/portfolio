const projects = [
  {
    id: 0,
    title: 'Front-End Quiz App',
    description: 'Users can take or create questions based on writing HTML, CSS, or JavaScript.',
    skills: ['react', 'ts', 'css', 'next', 'mongo'],
    buttons: [
      {
        buttonTitle: 'Live',
        buttonLink: 'https://quiz-app-cjhenry10-gmailcom.vercel.app/',
      },
    ],
  },
  {
    id: 1,
    title: 'Help Desk Wizard',
    description: 'A full-stack ticketing system complete with users, groups, and tickets. Also built with MUI and Django.',
    skills: ['react', 'js', 'css', 'mongo', 'python'],
    buttons: [
      {
        buttonTitle: 'Code',
        buttonLink: 'https://github.com/cjhenry10/capstone-ui',
      },
      {
        buttonTitle: 'More',
        buttonLink: '/help-desk-wizard',
      },
    ],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'This is the website you are currently on. Hosting powered by Vercel.',
    skills: ['react', 'ts', 'css', 'next'],
    buttons: [
      {
        buttonTitle: 'Code',
        buttonLink: 'https://github.com/cjhenry10/portfolio',
      },
    ],
  },
  {
    id: 3,
    title: 'Dark Souls Matching Game',
    description: 'Dark Souls-themed card matching game that kills you if you don\'t win in a certain number of attempts.',
    skills: ['html', 'css', 'js'],
    buttons: [
      {
        buttonTitle: 'Live',
        buttonLink: 'https://wd2-module-9-final-03-project-game-3-match-g-connorhenry2.asuwd1su21.repl.co/',
      },
      {
        buttonTitle: 'Code',
        buttonLink: 'https://replit.com/@ASUWD1SU21/WD2-Module-9-Final-03-Project-Game-3-Match-G-ConnorHenry2',
      },
    ],
  },
  {
    id: 4,
    title: 'Raspberry Pi Weather Monitoring',
    description: 'Using Python libraries for the Raspberry Pi along with JavaScript WebSocket, I created a self-hosted website that displays the temperature, air pressure, and humidity.',
    skills: ['python', 'html', 'css', 'js'],
    buttons: [
      {
        buttonTitle: 'More',
        buttonLink: '/pi-weather',
      }
    ],
  },
  {
    id: 5,
    title: 'Ticketing System Database Design',
    description: 'This report is a database design for a ticketing system. The report includes diagrams and some example queries on the database in both Microsoft Sql Server and Couchbase.',
    skills: ['sql', 'mssql'],
    buttons: [
      {
        buttonTitle: 'More',
        buttonLink: '/ticket-db',
      },
    ],
  },
  {
    id: 6,
    title: 'Loan Tracking Application',
    description: 'Using the MVC architectural pattern, I built a full-stack loan tracking application.',
    skills: ['html', 'js', 'express', 'mongo'],
    buttons: [
      {
        buttonTitle: 'Code',
        buttonLink: 'https://github.com/cjhenry10/IFT458',
      },
      {
        buttonTitle: 'More XX',
        buttonLink: '',
      },
    ],
  },
  {
    id: 7,
    title: 'Stock Prediction LSTM Neural Network',
    description: 'Using five-year historical stock data from Yahoo Finance, I trained a model to predict the 30-day future of ^NYA, the NYSE Composite Index.',
    skills: ['python', 'ml'],
    buttons: [
      {
        buttonTitle: 'Code',
        buttonLink: 'https://github.com/cjhenry10/big-data-ai',
      },
      {
        buttonTitle: 'More XX',
        buttonLink: '',
      },
    ],
  },
  {
    id: 8,
    title: 'AWS Capstone Project',
    description: 'At the end of the AWS Academy Cloud Architecting course, I deployed an application to the cloud running on MySQL RDS and an Auto Scaling Group of EC2 instances spread across two availability zones.',
    skills: ['aws'],
    buttons: [
      {
        buttonTitle: 'More',
        buttonLink: '/aws-capstone',
      }
    ],
  },
  {
    id: 9,
    title: 'Product Outdates Database',
    description: 'This report shows the design and development of a retail product management database.',
    skills: ['sql', 'mssql'],
    buttons: [
      {
        buttonTitle: 'More',
        buttonLink: '/retail-db',
      }
    ],
  },
];

export default projects;