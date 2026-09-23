# 💼 Job Portle

A full-stack **Job Portal Web Application** built with the MERN Stack — connecting job seekers with employers on a single, seamless platform.

<br/>

## 🌐 Live Demo
> 🔗 _https://job-portle-complete.vercel.app/Add your deployed link here_

<br/>

## ✨ Features

**For Job Seekers**
- 🔍 Browse and search jobs by role, location, or category
- 📄 Apply to jobs directly through the platform
- 👤 Manage profile and track applications

**For Employers**
- 📝 Post and manage job listings
- 👥 View applicants for each posting

**Authentication**
- 🔐 JWT-based secure login & signup
- 🛡️ Role-based access control (Job Seeker / Employer)
- 🔒 Protected routes on frontend and backend

<br/>

## 🛠️ Tech Stack

- **Frontend** — React.js, CSS
- **Backend** — Node.js, Express.js
- **Database** — MongoDB
- **Auth** — JWT (JSON Web Tokens)
- **API** — RESTful API

<br/>

## 📁 Project Structure

```
job-portle-complete/
├── frontend/                 # React.js client
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
└── backend/                  # Node.js + Express server
    ├── routes/
    ├── models/
    ├── controllers/
    ├── middleware/
    └── server.js
```

<br/>

## ⚙️ Getting Started

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vanshikavashistha/job-portle-complete.git
cd job-portle-complete
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

```bash
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

> App runs at **http://localhost:3000** 🎉

<br/>

## 🔌 API Endpoints

**Auth**
```
POST   /api/auth/register     Register new user
POST   /api/auth/login        Login user
```

**Jobs**
```
GET    /api/jobs              Get all listings
GET    /api/jobs/:id          Get single job
POST   /api/jobs              Create job (Employer only)
PUT    /api/jobs/:id          Update listing
DELETE /api/jobs/:id          Delete listing
```

**Applications**
```
POST   /api/applications      Apply for a job
GET    /api/applications/me   Get my applications
```

<br/>

## 🤝 Contributing

1. Fork the project
2. Create your branch — `git checkout -b feature/YourFeature`
3. Commit changes — `git commit -m 'Add YourFeature'`
4. Push — `git push origin feature/YourFeature`
5. Open a Pull Request

<br/>
