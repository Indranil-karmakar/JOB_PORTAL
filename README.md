# 💼 Job Portal

A full-stack job portal application that connects job seekers with recruiters. This platform allows users to browse job listings, apply for positions, and manage their profiles, while recruiters can post jobs, manage companies, and review applicants.

---

## ✨ Features

### For Job Seekers
- **User Authentication**: Secure signup and login with JWT-based authentication
- **Job Browsing**: Browse and search available job positions with detailed descriptions
- **Job Applications**: Apply for jobs and track application status
- **User Profile**: Create and maintain a comprehensive profile with skills, resume, and portfolio
- **Application History**: View all applied jobs and their statuses
- **Advanced Filtering**: Filter jobs by category, location, and other criteria

### For Recruiters
- **Company Management**: Create and manage company profiles
- **Job Posting**: Post new job openings with detailed descriptions and requirements
- **Application Management**: View and manage applicants for posted jobs
- **Admin Dashboard**: Access to admin panel for managing jobs and companies
- **Recruiter Profile**: Maintain recruiter profile and company information

### General Features
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS
- **Dark Mode Support**: Built-in theme switching capability
- **Cloud Storage**: Profile photos and resumes uploaded to Cloudinary
- **Real-time Notifications**: Toast notifications using Sonner
- **State Management**: Redux Toolkit for efficient state management
- **Modern UI Components**: Radix UI components for accessible and beautiful interface

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcryptjs for password hashing
- **File Upload**: Multer for file handling, Cloudinary for cloud storage
- **Validation**: Custom middleware for data validation
- **Development**: Nodemon for hot-reload during development

### Frontend
- **Framework**: React 18 with Vite as build tool
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Redux Toolkit with Redux Persist
- **HTTP Client**: Axios for API requests
- **Routing**: React Router v6
- **UI Components**: Radix UI with custom styling
- **Forms & Input**: Custom form components with validation
- **Animations**: Framer Motion for smooth animations
- **Carousel**: Embla Carousel for image carousels
- **Notifications**: Sonner for toast notifications

---

## 📁 Project Structure

```
job-portal/
├── backend/
│   ├── controllers/          # Route handlers and business logic
│   │   ├── user.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── application.controller.js
│   ├── models/              # Mongoose schemas
│   │   ├── user.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── application.model.js
│   ├── routes/              # API routes
│   │   ├── user.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── application.route.js
│   ├── middlewares/         # Custom middlewares
│   │   ├── isAuthenticated.js
│   │   └── multer.js
│   ├── utils/               # Utility functions
│   │   ├── db.js           # Database connection
│   │   ├── cloudinary.js   # Cloud storage configuration
│   │   ├── datauri.js      # File URI conversion
│   │   └── constants.js    # App constants
│   ├── index.js            # Server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx                    # Landing page
│   │   │   ├── Jobs.jsx                    # Job listings
│   │   │   ├── Browse.jsx                  # Job browsing with filters
│   │   │   ├── Profile.jsx                 # User profile management
│   │   │   ├── JobDescription.jsx          # Job detail view
│   │   │   ├── AppliedJobTable.jsx         # Applied jobs history
│   │   │   ├── LatestJobs.jsx              # Recent jobs showcase
│   │   │   ├── CategoryCarousel.jsx        # Category browsing
│   │   │   ├── FilterCard.jsx              # Job filters
│   │   │   ├── shared/                     # Shared components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── auth/                       # Authentication pages
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   ├── admin/                      # Admin/Recruiter pages
│   │   │   │   ├── Companies.jsx           # Company listings
│   │   │   │   ├── CompanyCreate.jsx       # Create company
│   │   │   │   ├── CompanySetup.jsx        # Edit company
│   │   │   │   ├── AdminJobs.jsx           # Posted jobs
│   │   │   │   ├── PostJob.jsx             # Create job posting
│   │   │   │   ├── Applicants.jsx          # View applicants
│   │   │   │   ├── ProtectedRoute.jsx      # Route protection
│   │   │   │   ├── AdminJobsTable.jsx
│   │   │   │   ├── ApplicantsTable.jsx
│   │   │   │   └── CompaniesTable.jsx
│   │   │   └── ui/                         # Radix UI components
│   │   │       ├── button.jsx
│   │   │       ├── input.jsx
│   │   │       ├── dialog.jsx
│   │   │       ├── select.jsx
│   │   │       └── [other UI components]
│   │   ├── hooks/                          # Custom React hooks
│   │   │   ├── useGetAllJobs.jsx
│   │   │   ├── useGetAllCompanies.jsx
│   │   │   ├── useGetAppliedJobs.jsx
│   │   │   ├── useGetAllAdminJobs.jsx
│   │   │   └── useGetCompanyById.jsx
│   │   ├── redux/                          # Redux store configuration
│   │   │   ├── authSlice.js
│   │   │   ├── jobSlice.js
│   │   │   ├── companySlice.js
│   │   │   ├── applicationSlice.js
│   │   │   └── store.js
│   │   ├── utils/                          # Utility functions
│   │   │   └── constant.js
│   │   ├── lib/                            # Helper libraries
│   │   │   └── utils.js
│   │   ├── App.jsx                         # Main app component
│   │   ├── main.jsx                        # React entry point
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── vite.config.js                      # Vite configuration
│   ├── tailwind.config.js                  # Tailwind CSS configuration
│   ├── postcss.config.js                   # PostCSS configuration
│   ├── package.json
│   └── jsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)

### Environment Setup

#### Backend Configuration
Create a `.env` file in the `backend/` directory:

```env
# Database
MONGO_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary (Optional - for profile photos)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Port
PORT=5000
```

#### Frontend Configuration
Create a `.env.local` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000
```

### Installation

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### Running the Application

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend will start at `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will start at `http://localhost:5173`

### Build for Production
```bash
# Frontend
cd frontend
npm run build
npm run preview
```

---

## 📚 API Endpoints

### User Routes (`/api/v1/user`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /profile/:id` - Get user profile
- `PUT /profile/update` - Update user profile
- `GET /profile/update` - Get profile update page

### Company Routes (`/api/v1/company`)
- `GET /get` - Get all companies
- `GET /:id` - Get company by ID
- `POST /register` - Create new company
- `PUT /:id` - Update company details

### Job Routes (`/api/v1/job`)
- `GET /get` - Get all jobs
- `GET /:id` - Get job by ID
- `POST /post` - Post new job (recruiter only)
- `PUT /:id` - Update job details (recruiter only)
- `DELETE /:id` - Delete job (recruiter only)

### Application Routes (`/api/v1/application`)
- `GET /get` - Get all applications for recruiter
- `GET /:id` - Get applications for specific job
- `POST /apply/:id` - Apply for a job
- `PUT /:id/status` - Update application status

---

## 🔐 Authentication Flow

1. User registers with email and password
2. Password is hashed using bcryptjs
3. JWT token is generated upon login
4. Token is stored in HTTP-only cookie for security
5. Protected routes verify token before allowing access

---

## 🎨 User Roles

### Student (Job Seeker)
- Browse and search jobs
- Apply for jobs
- Manage profile and resume
- Track application status

### Recruiter
- Create and manage company profile
- Post and manage job listings
- Review and manage applicants
- Access to admin dashboard

---

## 📦 Database Models

### User Model
- Authentication fields (email, password, role)
- Profile information (name, phone, bio, skills)
- Resume storage (file URL and original name)
- Company reference (for recruiters)

### Company Model
- Company name and description
- Logo and website
- User reference (recruiter)
- Created and updated timestamps

### Job Model
- Job title, description, requirements
- Salary and job type information
- Position and experience level
- Company reference
- Created by recruiter information

### Application Model
- User and job references
- Application status (pending, accepted, rejected)
- Created and updated timestamps

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙋 Support

For support, issues, or questions:
- Open an issue on GitHub
- Contact the development team

---

## 🎯 Future Enhancements

- [ ] Email verification for user registration
- [ ] Advanced job recommendations based on user skills
- [ ] Interview scheduling system
- [ ] Messaging between recruiters and candidates
- [ ] Job save/bookmark feature
- [ ] Application filters and analytics dashboard
- [ ] Payment integration for premium features
- [ ] Mobile app development
- [ ] AI-powered resume parser

---

## 🏆 Built With

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Radix UI](https://www.radix-ui.com/)

---

**Happy Job Hunting! 🚀**
