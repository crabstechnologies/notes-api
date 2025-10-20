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

---

## ⚙️ Running the App

# Development mode (auto-reloads)
```bash
yarn start:dev

# Production build
```bash
yarn build
yarn start:prod

---

## 🌱 Seeding Sample Data

You can prefill the database with example notes:

```bash
yarn seed

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

You’ll find example tests under src/notes/notes.service.spec.ts.

---

## 🧩 Project Structure

src
├── app.module.ts             # Root module
├── main.ts                   # Entry point + Swagger setup
└── notes
    ├── dto                   # Data transfer objects (validation)
    ├── entities              # TypeORM entities
    ├── notes.controller.ts
    ├── notes.module.ts
    └── notes.service.ts

---

## 🧠 Learning Objectives

This project demonstrates:
- Clean modular design in NestJS
- DTO + validation + transformation flow
- Database persistence with TypeORM
- Swagger documentation automation
- Dependency injection and testing with Jest

---

## ⭐ If you like this project, consider giving it a star on GitHub — it helps others discover learning-friendly NestJS examples!