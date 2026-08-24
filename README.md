# 🎬 CineVerse

**CineVerse** is a full-stack movie discovery web application built with the **MERN Stack**. It provides users with a modern and responsive platform to explore movies, search for titles, view detailed movie information, watch trailers, manage their watchlist, and securely manage their accounts.

🔴 **Live Demo:** https://cine-verse-4rr2.vercel.app/

📂 **GitHub Repository:** https://github.com/HassanNadeem502/CineVerse

---

## 📖 About the Project

CineVerse is a real-world full-stack movie application designed to provide an engaging movie discovery experience.

The application integrates the **TMDB API** to fetch movie data and provides features such as movie discovery, search, detailed movie information, cast details, trailers, and personalized watchlists.

It also includes a complete user authentication system with **JWT authentication, OTP-based email verification, password recovery, profile image uploads, and Cloudinary storage**.

The project demonstrates the development of a complete MERN application, including frontend development, backend APIs, database integration, authentication, external API integration, cloud storage, and deployment.

---

## ✨ Features

### 🎬 Movie Discovery

* Browse and explore movies
* Trending movies
* Popular movies
* Upcoming movies
* Top-rated movies
* Movie search
* Detailed movie information
* Movie cast information
* Movie genres
* Movie ratings and release information
* Watch movie trailers

### ❤️ Watchlist

* Add movies to watchlist
* Remove movies from watchlist
* View personalized watchlist
* Watch movies directly from the watchlist

### 🔐 Authentication & Account Management

* User registration
* Secure user login
* JWT-based authentication
* OTP-based email verification
* Forgot password functionality
* Reset password functionality
* User profile management
* Profile image upload

### ☁️ Cloud & External Services

* TMDB API for movie data
* Cloudinary for profile image storage
* Resend for email delivery

### 📱 User Experience

* Responsive user interface
* Modern dark-themed design
* Interactive movie cards
* Responsive navigation
* Search functionality
* Trailer modal
* Smooth movie browsing experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Resend

### External Services

* **TMDB API** — Movie data
* **Cloudinary** — Profile image storage
* **Resend** — Email delivery

---

## 📸 Screenshots

### 🏠 Home & Movie Search

![CineVerse Home](./screenshots/home-search.png)

### 🎬 Movie Listing

![CineVerse Movie Listing](./screenshots/movie-listing.png)

### 📄 Movie Details

![CineVerse Movie Details](./screenshots/movie-details.png)

### ❤️ Watchlist

![CineVerse Watchlist](./screenshots/watchlist.png)

### ▶️ Movie Trailer

![CineVerse Movie Trailer](./screenshots/movie-trailer.png)

---

## 📁 Project Structure

```text
CineVerse/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── screenshots/
│   ├── home-search.png
│   ├── movie-listing.png
│   ├── movie-details.png
│   ├── watchlist.png
│   └── movie-trailer.png
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/HassanNadeem502/CineVerse.git
```

### 2. Navigate to the Project

```bash
cd CineVerse
```

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Backend` directory and configure the required environment variables.

Start the development server:

```bash
npm run dev
```

### 4. Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `Backend` directory.

**Never commit your `.env` file or expose secret credentials publicly.**

Example configuration:

```env
PORT=your_port
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=your_jwt_expiration

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

TMDB_API_KEY=your_tmdb_api_key
TMDB_BASE_URL=your_tmdb_base_url

RESEND_API_KEY=your_resend_api_key
```

### Environment Variables Used

| Variable                | Purpose                             |
| ----------------------- | ----------------------------------- |
| `PORT`                  | Backend server port                 |
| `MONGODB_URI`           | MongoDB database connection         |
| `JWT_SECRET`            | JWT authentication secret           |
| `JWT_EXPIRES_IN`        | JWT expiration configuration        |
| `EMAIL_USER`            | Email configuration                 |
| `EMAIL_PASS`            | Email authentication configuration  |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud configuration      |
| `CLOUDINARY_API_KEY`    | Cloudinary API authentication       |
| `CLOUDINARY_API_SECRET` | Cloudinary API authentication       |
| `TMDB_API_KEY`          | TMDB API authentication             |
| `TMDB_BASE_URL`         | TMDB API base URL                   |
| `RESEND_API_KEY`        | Resend email service authentication |

---

## 🚀 Deployment

CineVerse has been deployed as a full-stack application and is available online.

🔴 **Live Application:** https://cine-verse-4rr2.vercel.app/

The project uses external services for production functionality, including:

* TMDB API
* MongoDB
* Cloudinary
* Resend

---

## 🔮 Future Improvements

Some planned improvements for CineVerse include:

* Advanced movie filtering
* Personalized movie recommendations
* More advanced search functionality
* Improved user profile features
* Enhanced movie discovery experience
* Additional user personalization features
* Admin dashboard
* Additional movie-related functionality

---

## 👨‍💻 Author

### Hassan Nadeem

**Full Stack MERN Developer**

I build modern, responsive, and full-stack web applications using technologies such as React, Node.js, Express, MongoDB, and related modern web technologies.

**GitHub:**
https://github.com/HassanNadeem502

**LinkedIn:**
https://www.linkedin.com/in/hassan-nadeem-424263399/

---

## 📄 License

This project was created for **learning, development, and portfolio purposes**.
