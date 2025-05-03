# MMC Sales Lookup App

This is a full-stack car sales lookup application built with **Next.js**, **React**, and **MySQL**. Users can:

- Search for salespeople based on retail price and date
- Find the most or least expensive car sold on a given date
- Look up a car sale by VIN and view transaction details

## 🚀 Features

- Three distinct queries, each with its own form and API route
- React + Tailwind CSS frontend
- Next.js API routes for server-side database access
- MySQL backend (must be running and populated)

---

## 🧑‍💻 Setup Instructions

### Prerequisites

- Node.js v22+
- [pnpm](https://pnpm.io/) (install via: `corepack enable`)
- A running MySQL server with your car sales database and tables

---

### 1. Clone the Repository

```bash
git clone https://github.com/michael-kudrik/mmc-database-project.git
cd mmc-app
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Environment Variables

Create a file called .env.local in the client/ directory:
```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=your_database_name
```
Do not commit this file to Git obv. 

### 4. Run the App
```bash
pnpm dev
```
The frontend + backend API will be available at:
`http://localhost:3000`

## 📁 Project Structure

```bash
├── pages/
│   ├── index.js               # Home page
│   ├── query1.js              # Query 1: by price & date
│   ├── query2.js              # Query 2: most/least expensive
│   ├── query3.js              # Query 3: by VIN
│   ├── _app.js                # Global app setup
│   ├── _document.js           # this was where i edited the fonts
│   └── api/
│       └── sales/
│           ├── by-price.js   # backend for query1
│           ├── most-least.js # query2 
│           └── by-vin.js     #query3
├── styles/
│   └── globals.css
├── public/                    
├── .env.local                 # this is where you should store your database credentials
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── postcss.config.mjs
└── next.config.mjs

#the rest of these things are just part of NextJS, React, TailwindCSS, or contain packages
```



