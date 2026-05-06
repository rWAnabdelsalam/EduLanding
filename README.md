# React Dark / Light Landing Page

A clean educational landing page built with React, Vite, and plain CSS.

## Features

- Light Mode and Dark Mode
- Theme saved in Local Storage
- Responsive Navbar, Hero, Courses, and Footer
- Smooth scrolling navigation
- Clean component structure
- Plain CSS only
- No UI libraries

## How to Run

### 1. Install Node.js

Download and install Node.js from:

https://nodejs.org

Choose the LTS version.

### 2. Open the Project Folder

Example:

If your folder is named `react-dark-light-landing`, open Command Prompt or Terminal and go to the folder:

```bash
cd EduLanding
```

If the folder is on Desktop:

```bash
cd Desktop/EduLanding
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Project

```bash
npm start
```

Then open the local link shown in the terminal, usually:

```bash
http://localhost:5173
```

## Folder Structure

```bash
EduLanding/
│
├── index.html
├── package.json
├── README.md
│
└── src/
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Courses.jsx
    │   └── Footer.jsx
    │
    ├── data/
    │   └── courses.js
    │
    ├── styles/
    │   ├── App.css
    │   ├── Navbar.css
    │   ├── Hero.css
    │   ├── Courses.css
    │   └── Footer.css
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Edit Courses

To change course titles or descriptions, edit:

```bash
src/data/courses.js
```

## Edit Colors

To change theme colors, edit:

```bash
src/styles/App.css
```
