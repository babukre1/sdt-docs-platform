# SomNOG9 — Workshop Schedule

**Track:** Microservices & Full-Stack Engineering  
**Dates:** September 19 – 21, 2026

---

## Day 1 — Saturday, September 19, 2026

| Time | Content | Facilitator |
|---|---|---|
| 08:00 – 08:30 | Patch Distribution & On-site Registration | All |
| 08:30 – 09:30 | Opening Remarks & Welcome to the SomNOG9 Event | All |
| 09:30 – 10:00 | ☕ Tea Break | All |
| 10:00 – 10:15 | Introduction to the Track | Mohamed A. |
| 10:15 – 10:30 | **Group Formations** — sub-dividing teams (SDG1–SDG8) to own specific services (Auth, Event Catalog, Registration, Notifications, Workshop & Participant Registrations) | Bashir Ahmed |
| 10:30 – 11:00 | **Monolith vs Microservices Architecture** • SDLC • Why microservices are used, service isolation rules, when to transition • Service boundaries for the SomNOG Event platform | Mohamed A. |
| 11:00 – 11:30 | Introduction to Git and Branching | Bashir Ahmed |
| 11:30 – 12:30 | **Database Design & Prisma Setup** • Introduction to PostgreSQL • Relational concepts and normalization • Designing the Event Management System schema • Entity relationships: Users, Events, Notifications | Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil |
| 12:30 – 13:30 | 🍽️ Lunch & Prayers | Break |
| 13:30 – 15:30 | **Hands-on: Authentication Service (Backend)** — full live build of the Auth Service backend | Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil |
| 15:30 – 16:00 | 🕌 Prayer & Tea Break | — |
| 16:00 – 17:00 | **Group Work — Session 1** | Bashir Ahmed |
| 17:00 – 17:30 | Day 1 Recap (Quiz) | Abubakar Ali |

### Group Work — Session 1 tasks
- Clone the NestJS starter template from the shared GitHub repo
- Rename the project to their service name (e.g. `event-creation-service`)
- Install Prisma and configure `DATABASE_URL`
- Write initial Prisma schema models for their domain
- Run `prisma migrate dev --name init`
- Set up basic module, controller, and service using the `nest g` CLI
- Commit and push to the group GitHub branch

---

## Day 2 — Sunday, September 20, 2026

| Time | Content | Facilitator |
|---|---|---|
| 08:00 – 10:00 | **Hands-on: Authentication Service (Frontend)** — full live build of the Next.js auth frontend: login page, register page, auth context/provider, protected route middleware, role-based UI rendering | Hassan Omar Mohamed, Sumaya Sugal |
| 10:00 – 10:30 | ☕ Tea Break | All |
| 10:30 – 11:15 | **Hands-on: Notification Service (Backend)** — standalone NestJS notification microservice: Nodemailer setup, HTML email templates, event-driven triggers for application acceptance/rejection, dynamic content injection | Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil |
| 11:15 – 12:40 | **Hands-on: Event & Workshop Registration Service (Backend)** — event creation, applicant submission flow, application status, organizer review endpoints, filtering and pagination, emitting notification events, unit testing | Mohamed Abdirahman Ahmed, Abdullahi Ali Tahlil |
| 12:40 – 13:30 | 🕌 Prayer & Lunch Break | All |
| 13:30 – 15:30 | **Group Work — Session 2** | Bashir Ahmed |
| 15:30 – 16:00 | 🕌 Prayer & Tea Break | All |
| 16:00 – 17:15 | **Group Work — Session 2 (continues)** | Bashir Ahmed |
| 17:15 – 17:45 | Day 2 Recap (Quiz) | Abubakar Ali |

### Group Work — Session 2 checklist
- All core CRUD endpoints implemented and returning correct HTTP status codes
- DTOs created with `class-validator` decorators for all inputs
- Global exception filter applied, custom error messages returned
- Pagination and filtering on list endpoints — `/items?page=1&limit=10&filter=value`
- At least 2 Jest unit tests for the primary service (e.g. `create()` and `findAll()`)
- All endpoints tested manually via REST Client or a Postman collection
- Code pushed to GitHub with a meaningful commit message

---

## Day 3 — Monday, September 21, 2026

| Time | Content | Facilitator |
|---|---|---|
| 08:00 – 10:00 | **Hands-on: Event Registration Service (Frontend)** — multi-step application form, application status page, organizer review dashboard | Hassan Omar Mohamed, Sumaya Sugal |
| 10:00 – 10:30 | ☕ Tea Break | All |
| 10:30 – 11:30 | **Containerization with Docker** • Dockerfile for NestJS and Next.js, multi-stage builds • Docker Compose for the full stack (services + PostgreSQL + Redis) • Environment variable management, inter-service networking | Mas'ud |
| 11:30 – 12:40 | **Hands-on: CI/CD Pipeline with GitHub Actions** • Workflow YAML structure, trigger events (push to `main`) • Automated testing (`npm run test`) and build steps • Deployment to a VPS or cloud platform (DigitalOcean) • Environment secrets management in GitHub | Mas'ud |
| 12:40 – 13:30 | 🕌 Prayer & Lunch Break | All |
| 13:40 – 15:30 | **Group Work — Session 3 (Part 1)** | Bashir Ahmed |
| 15:30 – 16:00 | 🕌 Prayer & Tea Break | All |
| 16:00 – 16:30 | **Group Work — Session 3 (Part 2)** — groups prepare their 5-minute demo: what the service does, architecture decisions, one working endpoint demo, one unit test run | Bashir Ahmed |
| 16:30 – 17:00 | **Group Presentations & Track Wrap-up** — 5-minute demo + Q&A per group, track closing remarks | All |
| 17:00 – 17:30 | Day 3 Recap (Quiz) | Abubakar Ali |

---

