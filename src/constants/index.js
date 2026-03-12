export const myProjects = [
  {
    id: 1,
    title: "Visualize",
    description:
      "An interactive data‑visualization web app that converts CSVs and APIs into shareable, customizable dashboards and visual reports.",
    subDescription: [
      "Built a responsive React frontend that lets users upload datasets, choose chart types, configure visualizations (filters, legends, tooltips), and save projects.",
      "Implemented performant charts and custom interactions using D3.js (with fallback Chart.js components) for zooming, brushing, and animated transitions.",
      "Created a Node.js/Express backend to parse and validate uploads, run aggregations, and provide an API for saved dashboards and user projects.",
      "Added user accounts and project persistence so dashboards can be exported, shared via links, or embedded; included role-based access for private projects.",
      "Containerized the full stack and configured CI/CD to automatically build, test, and deploy preview environments for pull requests.",
    ],
    href: "https://visualaize-six.vercel.app",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/visualize.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 2,
    title: "News Article Research",
    description:
      "An end‑to‑end news ingestion and analysis tool that scrapes articles, extracts insights, and surfaces trends with semantic search and clustering.",
    subDescription: [
      "Built a scraping pipeline (RSS and targeted site crawlers) to fetch and normalize article content and metadata on a scheduled basis.",
      "Implemented NLP processing for cleaning, named‑entity recognition, topic modeling, and sentiment analysis using spaCy and transformer embeddings.",
      "Created semantic search and similarity indexing (FAISS or Elasticsearch) to cluster related articles and enable fast relevance queries and trend discovery.",
      "Exposed data via a FastAPI backend and a React UI with interactive timelines, cluster visualizations, keyword filters, and an article viewer with exportable reports.",
      "Containerized pipeline components and set up CI/CD to run scheduled ingestion jobs, with logging and basic observability for pipeline health.",
    ],
    href: "https://8vxiryxuz56z2fzzxhmcie.streamlit.app/",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/news-research.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 5,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
    ],
  },
  {
    id: 3,
    title: "LawTool5",
    description:
      "An AI‑assisted legal research and document analysis tool that extracts clauses, summarizes contracts, and enables fast semantic search across case files.",
    subDescription: [
      "Built a document ingestion pipeline to upload and OCR PDFs, normalize content, and extract metadata (case name, date, parties).",
      "Implemented NLP features for clause extraction, contract summarization, and named‑entity recognition using transformer embeddings and spaCy.",
      "Added semantic search and similarity ranking so users can find precedent clauses and related cases quickly (FAISS/Elasticsearch).",
      "Created an annotation UI for lawyers to tag excerpts, save snippets, and generate shareable summaries or exportable reports.",
      "Deployed the backend as an API with role‑based access, audit logging, and a React frontend for interactive review workflows.",
    ],
    href: "",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/lawtool5.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Real Estate Listing Manager",
    description:
      "A property listing management platform for agents and landlords to create, manage, and publish real estate listings with image galleries and location search.",
    subDescription: [
      "Implemented full CRUD for property listings with support for images, floor plans, amenities, and rich descriptions.",
      "Added geolocation search and map views (filter by radius, price, bedrooms), plus sorting and saved searches for users.",
      "Built an admin dashboard for listing approvals, analytics on views & leads, and automated email notifications for inquiries.",
      "Integrated image upload and resizing, plus CSV import/export to bulk upload listings from partners or MLS feeds.",
      "Secured endpoints with authentication/authorization and containerized the app for reproducible deployments.",
    ],
    href: "",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/real-estate.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 5,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
    ],
  },
  {
    id: 5,
    title: "EV Vehicle Demand Prediction",
    description:
      "A data‑driven model and dashboard that predicts electric vehicle (EV) adoption and demand across regions using demographic, economic, and charging‑infrastructure features.",
    subDescription: [
      "Collected and cleaned datasets from public sources (vehicle registrations, charging station locations, census and economic indicators).",
      "Engineered features and trained forecasting models (XGBoost and LSTM experiments) to predict demand at city/region level.",
      "Evaluated models with time‑series cross‑validation and produced explainability reports (SHAP) for feature importance.",
      "Built an interactive dashboard to visualize demand forecasts, confidence intervals, and what‑if scenarios for infrastructure planning.",
      "Packaged model as a REST API for integration with planning tools and scheduled retraining jobs in CI/CD.",
    ],
    href: "",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/ev-prediction.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Airline Booking App",
    description:
      "A multi‑step flight search and booking application with seat selection, booking management, and payment integration.",
    subDescription: [
      "Implemented flight search and availability engine with filtering (dates, stops, price, carriers) and optimizations for fast queries.",
      "Built booking flows including passenger details, seat selection UI, booking confirmation, and booking history for users.",
      "Integrated payment processing (Stripe) and implemented transactional booking/deallocation logic to avoid double bookings.",
      "Added admin interfaces for flight schedule management, fare rules, and simple reporting on bookings and revenue.",
      "Deployed as a microservice‑style app with separate services for search, booking, and payments; included end‑to‑end tests and containerized orchestration.",
    ],
    href: "",
    githubHref: "https://github.com/priyanshu5ingh",
    logo: "",
    image: "/assets/projects/airline-booking.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "Kubernetes",
        path: "/assets/logos/kubernetes.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919380305821",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshu5ingh/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/priyanshu5ingh/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/priyanshu5ingh",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "X",
    href: "https://x.com/priyanshu5ingh5",
    icon: "/assets/socials/x.svg",
  },
];

export const experiences = [
  {
    title: "Development Team Member",
    job: "Vikasana",
    date: "Mar 2025 - Present",
    contents: [
      "Collaborate with cross-functional teams on campus initiatives and technical projects, contributing to web development and DevOps workflows.",
      "Participate in code reviews, feature planning, and deployment automation to improve project delivery timelines.",
      "Support community-driven initiatives by building and maintaining technical solutions for the organization.",
    ],
  },
  {
    title: "Open-Source Contributor",
    job: "GirlScript Summer of Code",
    date: "Jul 2025 - Feb 2026",
    contents: [
      "Contributed to multiple open-source projects, implementing features, fixing bugs, and improving documentation for community-driven repositories.",
      "Gained hands-on experience with GitHub workflows, issue management, pull requests, and collaborative development practices.",
      "Earned GSSoC contributor badges and Postman Student Expert certification, demonstrating proficiency in API testing and optimization.",
      "Collaborated with maintainers and fellow contributors to deliver high-quality code improvements and feature enhancements.",
    ],
  },
  {
    title: "Cloud Computing Intern",
    job: "Pinnacle Labs",
    date: "Jun 2025 - Aug 2025",
    contents: [
      "Developed cloud-based real-time solutions and gained hands-on experience with cloud computing tools and platforms.",
      "Worked on infrastructure automation, deployment pipelines, and cloud resource management using AWS services.",
      "Implemented monitoring and logging solutions to ensure system reliability and performance optimization.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    job: "InternPro",
    date: "Jun 2025 - Aug 2025",
    contents: [
      "Developed a modern, full-stack real estate listing management platform using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Designed and implemented RESTful APIs for property listing CRUD operations with secure authentication and authorization.",
      "Built responsive UI components with React and integrated geolocation features for property search and filtering.",
      "Deployed the application with containerization and CI/CD practices for streamlined development and production workflows.",
    ],
  },
  {
    title: "AR Development Intern",
    job: "Snap Inc.",
    date: "Jun 2023 - Jan 2024",
    contents: [
      "Served as a Snapchat Opinion Leader, building a hyperlocal community on campus through Augmented Reality (AR) experiences.",
      "Created and promoted AR lenses and filters, engaging with student communities to drive platform adoption and creative expression.",
      "Developed communication and leadership skills through campus events, workshops, and AR content creation initiatives.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const resumeData = {
  filePath: "/assets/Priyanshu-Singh-Resume.pdf",
};
