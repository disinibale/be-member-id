# Backend Application for Member.id Award Application

This backend application is built using TypeScript and Express, with PostgreSQL as the database. It provides authentication and award-related APIs.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm
- PostgreSQL database

## API Structure
```
|-- /api/v1/auth
|-- /api/v1/auth/login
|-- /api/v1/awards (Protected Routes - Need Authentication)
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/disinibale/be-member-id.git
cd be-member-id
```

### Copy the .env.example file
``` bash
cp .env.example .env
```
Then change the `.env` variable based on your needs

### Install the Node Modules Dependencies
```
npm install
```

### Run the application 
To run the application you can simply run these commands in your terminal/command prompt
```
npm run dev
```

## Summary
### Run this Back-End service with the Front-End 
To run the whole application, you have to simply clone and install the Front-End application in this Link : [Front-End Repository](https://www.github.com/disinibale/fe-member-id)