export type Session = {
  time: string;
  title: string;
  facilitator: string;
};

export type WorkshopDay = {
  day: string;
  date: string;
  sessions: Session[];
  followUp?: {
    title: string;
    items: string[];
  };
};

export const schedule: WorkshopDay[] = [
  {
    day: "Day 1",
    date: "Saturday, 19 September 2026",
    sessions: [
      {time: "08:00 – 08:30", title: "Patch Distribution & On-site Registration", facilitator: "All"},
      {time: "08:30 – 09:30", title: "Opening Remarks & Welcome to the SomNOG9 Event", facilitator: "All"},
      {time: "09:30 – 10:00", title: "☕ Tea Break", facilitator: "All"},
      {time: "10:00 – 10:15", title: "Introduction to the Track", facilitator: "Mohamed A."},
      {
        time: "10:15 – 10:30",
        title: "Group Formations — sub-dividing teams (SDG1–SDG8) to own specific services (Auth, Event Catalog, Registration, Notifications, Workshop & Participant Registrations)",
        facilitator: "Bashir Ahmed",
      },
      {
        time: "10:30 – 11:00",
        title: "Monolith vs Microservices Architecture • SDLC • Why microservices are used, service isolation rules, when to transition • Service boundaries for the SomNOG Event platform",
        facilitator: "Mohamed A.",
      },
      {time: "11:00 – 11:30", title: "Introduction to Git and Branching", facilitator: "Bashir Ahmed"},
      {
        time: "11:30 – 12:30",
        title: "Database Design & Prisma Setup • Introduction to PostgreSQL • Relational concepts and normalization • Designing the Event Management System schema • Entity relationships: Users, Events, Notifications",
        facilitator: "Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil",
      },
      {time: "12:30 – 13:30", title: "🍽️ Lunch & Prayers", facilitator: "Break"},
      {
        time: "13:30 – 15:30",
        title: "Hands-on: Authentication Service (Backend) — full live build of the Auth Service backend",
        facilitator: "Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil",
      },
      {time: "15:30 – 16:00", title: "🕌 Prayer & Tea Break", facilitator: "—"},
      {time: "16:00 – 17:00", title: "Group Work — Session 1", facilitator: "Bashir Ahmed"},
      {time: "17:00 – 17:30", title: "Day 1 Recap (Quiz)", facilitator: "Abubakar Ali"},
    ],
    followUp: {
      title: "Group Work — Session 1 tasks",
      items: [
        "Clone the NestJS starter template from the shared GitHub repo",
        "Rename the project to their service name (e.g. event-creation-service)",
        "Install Prisma and configure DATABASE_URL",
        "Write initial Prisma schema models for their domain",
        "Run prisma migrate dev --name init",
        "Set up basic module, controller, and service using the nest g CLI",
        "Commit and push to the group GitHub branch",
      ],
    },
  },
  {
    day: "Day 2",
    date: "Sunday, 20 September 2026",
    sessions: [
      {
        time: "08:00 – 10:00",
        title: "Hands-on: Authentication Service (Frontend) — full live build of the Next.js auth frontend: login page, register page, auth context/provider, protected route middleware, role-based UI rendering",
        facilitator: "Hassan Omar Mohamed, Sumaya Sugal",
      },
      {time: "10:00 – 10:30", title: "☕ Tea Break", facilitator: "All"},
      {
        time: "10:30 – 11:15",
        title: "Hands-on: Notification Service (Backend) — standalone NestJS notification microservice: Nodemailer setup, HTML email templates, event-driven triggers for application acceptance/rejection, dynamic content injection",
        facilitator: "Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil",
      },
      {
        time: "11:15 – 12:40",
        title: "Hands-on: Event & Workshop Registration Service (Backend) — event creation, applicant submission flow, application status, organizer review endpoints, filtering and pagination, emitting notification events, unit testing",
        facilitator: "Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil",
      },
      {time: "12:40 – 13:30", title: "🕌 Prayer & Lunch Break", facilitator: "All"},
      {time: "13:30 – 15:30", title: "Group Work — Session 2", facilitator: "Bashir Ahmed"},
      {time: "15:30 – 16:00", title: "🕌 Prayer & Tea Break", facilitator: "All"},
      {time: "16:00 – 17:15", title: "Group Work — Session 2 (continues)", facilitator: "Bashir Ahmed"},
      {time: "17:15 – 17:45", title: "Day 2 Recap (Quiz)", facilitator: "Abubakar Ali"},
    ],
    followUp: {
      title: "Group Work — Session 2 checklist",
      items: [
        "All core CRUD endpoints implemented and returning correct HTTP status codes",
        "DTOs created with class-validator decorators for all inputs",
        "Global exception filter applied, custom error messages returned",
        "Pagination and filtering on list endpoints — /items?page=1&limit=10&filter=value",
        "At least 2 Jest unit tests for the primary service (e.g. create() and findAll())",
        "All endpoints tested manually via REST Client or a Postman collection",
        "Code pushed to GitHub with a meaningful commit message",
      ],
    },
  },
  {
    day: "Day 3",
    date: "Monday, 21 September 2026",
    sessions: [
      {
        time: "08:00 – 10:00",
        title: "Hands-on: Event Registration Service (Frontend) — multi-step application form, application status page, organizer review dashboard",
        facilitator: "Hassan Omar Mohamed, Sumaya Sugal",
      },
      {time: "10:00 – 10:30", title: "☕ Tea Break", facilitator: "All"},
      {
        time: "10:30 – 11:30",
        title: "Containerization with Docker • Dockerfile for NestJS and Next.js, multi-stage builds • Docker Compose for the full stack (services + PostgreSQL + Redis) • Environment variable management, inter-service networking",
        facilitator: "Mas'ud",
      },
      {
        time: "11:30 – 12:40",
        title: "Hands-on: CI/CD Pipeline with GitHub Actions • Workflow YAML structure, trigger events (push to main) • Automated testing (npm run test) and build steps • Deployment to a VPS or cloud platform (DigitalOcean) • Environment secrets management in GitHub",
        facilitator: "Mas'ud",
      },
      {time: "12:40 – 13:30", title: "🕌 Prayer & Lunch Break", facilitator: "All"},
      {time: "13:40 – 15:30", title: "Group Work — Session 3 (Part 1)", facilitator: "Bashir Ahmed"},
      {time: "15:30 – 16:00", title: "🕌 Prayer & Tea Break", facilitator: "All"},
      {
        time: "16:00 – 16:30",
        title: "Group Work — Session 3 (Part 2) — groups prepare their 5-minute demo: what the service does, architecture decisions, one working endpoint demo, one unit test run",
        facilitator: "Bashir Ahmed",
      },
      {
        time: "16:30 – 17:00",
        title: "Group Presentations & Track Wrap-up — 5-minute demo + Q&A per group, track closing remarks",
        facilitator: "All",
      },
      {time: "17:00 – 17:30", title: "Day 3 Recap (Quiz)", facilitator: "Abubakar Ali"},
    ],
  },
];
