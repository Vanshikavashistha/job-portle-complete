💼 Job Portle — Full Stack Job Portal Application
A full-stack job portal web application built with the MERN stack (MongoDB, Express.js, React, Node.js), enabling job seekers to discover opportunities and employers to post listings — all in one seamless platform.
✨ Features
👩‍💻 For Job Seekers

Browse and search job listings by role, location, or category
Apply to jobs directly through the platform
View detailed job descriptions and company info
Manage your profile and track applications

🏢 For Employers

Post new job openings with full details
Manage and update existing listings
View applicants for each posting

🔐 Authentication & Security

JWT-based authentication for secure login/signup
Role-based access control (Job Seeker / Employer)
Protected routes on both frontend and backend


🛠️ Tech Stack
LayerTechnologyFrontendReact.js, CSSBackendNode.js, Express.jsDatabaseMongoDBAuthJWT (JSON Web Tokens)APIRESTful API

📁 Project Structure
job-portle-complete/
├── frontend/          # React.js client
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── backend/           # Node.js + Express server
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md

⚙️ Getting Started
Prerequisites

Node.js (v16+)
MongoDB (local or Atlas)
npm or yarn

1. Clone the Repository
bashgit clone https://github.com/Vanshikavashistha/job-portle-complete.git
cd job-portle-complete
2. Setup Backend
bashcd backend
npm install
Create a .env file in /backend:
envPORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:
bashnpm run dev
3. Setup Frontend
bashcd ../frontend
npm install
npm start
The app will run at http://localhost:3000 🎉

🔌 API Endpoints
Auth
MethodEndpointDescriptionPOST/api/auth/registerRegister new userPOST/api/auth/loginLogin user
Jobs
MethodEndpointDescriptionGET/api/jobsGet all job listingsGET/api/jobs/:idGet single jobPOST/api/jobsCreate new job (Employer)PUT/api/jobs/:idUpdate job listingDELETE/api/jobs/:idDelete job listing
Applications
MethodEndpointDescriptionPOST/api/applicationsApply for a jobGET/api/applications/meGet my applications

🤝 Contributing
Contributions, issues and feature requests are welcome!

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
