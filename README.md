![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FF6C37?style=for-the-badge&logo=typeorm&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 🧠 Notes API — NestJS + TypeORM + SQLite

A clean, production-ready **REST API** built with **NestJS**, demonstrating how to design a modular, well-documented backend service using **TypeORM**, **SQLite**, and **Swagger**.  
This project is beginner-friendly but follows industry best practices — perfect for learning or showcasing your backend skills.

---

## 🚀 Features

✅ **CRUD Operations**     — Create, Read, Update, Delete notes  
✅ **Validation**          — Strong input validation using `class-validator`  
✅ **Auto Docs**           — Built-in Swagger UI (`/docs`)  
✅ **TypeORM Integration** — SQLite for simplicity (zero setup)  
✅ **Seed Script**         — Preloads demo data for quick testing  
✅ **Unit Tests**          — Example service test with Jest  
✅ **Clean Architecture**  — Organized modules, DTOs, and entities

---

## 🧰 Tech Stack

| Layer             | Technology                           |
|-------------------|--------------------------------------|
| Framework         | [NestJS](https://nestjs.com/)        |
| ORM               | [TypeORM](https://typeorm.io/)       |
| Database          | SQLite                               |
| Validation        | class-validator / class-transformer  |
| Documentation     | Swagger (OpenAPI)                    |
| Testing           | Jest                                 |
| Package Manager   | Yarn                                 |

---

## 📦 Installation

Clone and install dependencies:

```bash
git clone https://github.com/<your-username>/notes-api.git
cd notes-api
yarn install
```
---

## ⚙️ Running the App

# Development mode (auto-reloads)
```bash
yarn start:dev
```
# Production build
```bash
yarn build
yarn start:prod
```
### Database schema sync (TypeORM)

TypeORM's automatic schema sync is controlled via the `TYPEORM_SYNC` environment
variable:

```bash
# .env (local development)
TYPEORM_SYNC=true
```For production deployments the flag **must** be set to `false` to protect data
migrations. The provided `yarn start:prod` script already enforces this by
running `TYPEORM_SYNC=false node dist/main`. If you use a different process
manager, make sure to export the variable yourself (for Windows PowerShell use
`$env:TYPEORM_SYNC = 'false'`).
---

## 🌱 Seeding Sample Data

You can prefill the database with example notes:

```bash
yarn seed
```
This will insert two demo notes:
“Welcome” — first seeded note ✨
“Second” — edit or delete it in Thunder Client!

---

## 🔍 API Endpoints Overview

| Method  | Endpoint    | Description         |
|---------|-------------|---------------------|
| POST    | /notes      | Create a new note   |
| GET     | /notes      | Get all notes       |
| GET     | /notes/:id  | Get a specific note |
| PATCH   | /notes/:id  | Update a note       |
| DELETE  | /notes/:id  | Delete a note       |

---

## 🧪 Testing

```bash
yarn test
```
You’ll find example tests under src/notes/notes.service.spec.ts.

---

## 🧩 Project Structure
```bash
src
├── app.module.ts             # Root module
├── main.ts                   # Entry point + Swagger setup
└── notes
    ├── dto                   # Data transfer objects (validation)
    ├── entities              # TypeORM entities
    ├── notes.controller.ts
    ├── notes.module.ts
    └── notes.service.ts
```
---

## 🧠 Learning Objectives

This project demonstrates:
<ul>
    <li>Clean modular design in NestJS</li>
    <li>DTO + validation + transformation flow</li>
    <li>Database persistence with TypeORM</li>
    <li>Swagger documentation automation</li>
    <li>Dependency injection and testing with Jest</li>
</ul>

---

## ⭐ If you like this project, consider giving it a star on GitHub, it helps others discover learning-friendly NestJS examples!
