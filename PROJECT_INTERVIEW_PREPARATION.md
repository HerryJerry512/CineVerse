# PROJECT INTERVIEW PREPARATION

## 1. Project Overview

### Project name

CineVerse

### Project purpose

CineVerse is a full-stack movie discovery and user account application built with the MERN stack. The main goal is to let a user browse movie categories, view detailed information, search movies, watch trailers, manage a personal watchlist, and securely manage authentication and profile data.

Simple explanation:

- A user lands on the site
- They can explore movies
- They can sign up and log in
- They can save movies to a watchlist
- They can upload a profile image and update profile information

This is implemented across:

- Frontend: Frontend/front/src/
- Backend: Backend/
- API layer: Backend/routes/, Backend/controllers/
- Data layer: Backend/models/

### Problem being solved

The project solves a practical problem: movie fans often need a simple place to discover movies, read details, search by title, and keep a personal list of films they want to watch. It also solves the need to create a secure account flow with email verification and password reset handling.

### Target users

- Movie enthusiasts
- Users who want to browse trending, popular, upcoming, and top-rated content
- Users who want an account-based experience with a watchlist
- Users who want authentication features such as registration, verification, and password resets

### Main features

From the current codebase, the actual implemented features include:

- Home page with movie sections
- Trending, popular, top-rated, and upcoming movie categories
- Movie search in the navbar
- Movie detail page with overview, cast, trailer modal, and similar movies
- Watchlist add/remove functionality
- User registration and login
- Email OTP verification
- Forgot password and reset password flows
- Profile update and password change
- Profile image upload to Cloudinary
- TMDB integration for movie data

### Real-world use case

A user opens CineVerse, browses movies, searches for a title, clicks a movie, watches the trailer, adds it to a watchlist, creates an account, verifies email, and manages a personal profile. This is a real movie catalog and personal watchlist flow similar to entertainment applications.

Important note:
The codebase does not contain marketplace, skills, offers, requests, communication, reviews, wallet/tokens, or a dashboard concept. Those are not implemented in the current codebase. If an interviewer asks about them, the correct answer is: Not found in the current codebase.

---

## 2. Technology Stack

### 1) React

What it is:
React is a JavaScript library for building user interfaces using reusable components.

Why it was used:
The frontend is built as a component-based Single Page Application (SPA). React makes it easy to manage interface state, re-render parts of the page, and route between pages.

Where it is used:

- Frontend/front/src/App.jsx
- Frontend/front/src/pages/\*
- Frontend/front/src/components/\*
- Frontend/front/src/context/AuthContext.jsx

If removed:
The UI would need to be rebuilt with another library or plain JavaScript. The component structure and routing would become much harder to manage.

### 2) Vite

What it is:
Vite is a frontend build tool and dev server for React apps.

Why it was used:
It provides faster local development and quick builds for a modern frontend.

Where it is used:

- Frontend/front/package.json
- Frontend/front/vite.config.js

If removed:
The app would still work with another bundler, but developer experience would change and setup would be more complex.

### 3) React Router

What it is:
A library for client-side routing.

Why it was used:
The project has multiple pages like login, home, profile, movie details, category pages, and watchlist without a full page refresh.

Where it is used:

- Frontend/front/src/routes/AppRoutes.jsx
- Frontend/front/src/App.jsx
- Frontend/front/src/components/Navbar/Navbar.jsx

If removed:
Navigation and deep-linking would break. Users could not move between pages cleanly.

### 4) Tailwind CSS

What it is:
Tailwind is a utility-first CSS framework.

Why it was used:
It allows rapid styling with classes like bg-[#0B1120], rounded-2xl, text-white, and px-6.

Where it is used:

- frontend styling throughout the project
- Frontend/front/src/styles/auth.css
- JSX className values throughout the app

If removed:
The app would still work, but styling would need to be recreated using traditional CSS or component-specific styles.

### 5) Node.js

What it is:
Node.js runs JavaScript on the server.

Why it was used:
The backend is JavaScript-based and can work naturally with Express and Mongoose.

Where it is used:

- Backend/server.js
- Backend/app.js
- Backend/controllers/\*

If removed:
A different server runtime such as Python Flask or Java Spring would be needed.

### 6) Express.js

What it is:
Express is a minimal Node.js web framework for building REST APIs.

Why it was used:
The server exposes routes, handles JSON, and connects to controllers and middleware.

Where it is used:

- Backend/app.js
- Backend/routes/\*
- Backend/middleware/authMiddleware.js

If removed:
The project would lose its API layer and route handling.

### 7) MongoDB

What it is:
MongoDB is a NoSQL document database.

Why it was used:
The app stores user data and watchlist relations in a document-based database. MongoDB pairs well with Mongoose and allows flexible JSON-like documents.

Where it is used:

- Backend/config/db.js
- Backend/models/User.js
- Backend/models/Movie.js
- Backend/models/Watchlist.js

If removed:
The app would need a different database or an in-memory store; user auth and watchlist would be impossible in the current form.

### 8) Mongoose

What it is:
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

Why it was used:
It provides schemas, validation, model creation, and database queries.

Where it is used:

- Backend/models/User.js
- Backend/models/Movie.js
- Backend/models/Watchlist.js
- Backend/controllers/watchlistController.js

If removed:
Queries would need to use raw MongoDB driver code, which is more verbose and less structured.

### 9) JWT (JSON Web Token)

What it is:
JWT is a token format used for stateless authentication.

Why it was used:
After login, the backend creates a token so future requests can verify identity without sending the password every time.

Where it is used:

- Backend/controllers/authController.js
- Backend/middleware/authMiddleware.js

If removed:
The app would need a different session mechanism or cookie-based session system.

### 10) bcryptjs

What it is:
A hashing library used to hash passwords before storing them.

Why it was used:
Passwords must never be stored in plain text.

Where it is used:

- Backend/controllers/authController.js
- Backend/models/User.js indirectly through password logic

If removed:
Passwords would be insecure and not suitable for production.

### 11) Nodemailer / Resend

What it is:
Email sending tools.

Why it was used:
The project sends OTP emails for registration and password reset.

Where it is used:

- Backend/utils/sendEmail.js
- Backend/controllers/authController.js

If removed:
users would not receive verification or reset codes.

### 12) Cloudinary

What it is:
Cloudinary is an image hosting and transformation service.

Why it was used:
The app uploads user profile images and stores them externally instead of local disk.

Where it is used:

- Backend/config/cloudinary.js
- Backend/controllers/userController.js
- Backend/middleware/uploadMiddleware.js

If removed:
Profile image upload functionality would not work in the current architecture.

### 13) TMDB API

What it is:
The TMDB API provides movie metadata, cast, credits, videos, and similar content.

Why it was used:
The app is a movie catalog, so live movie data is essential.

Where it is used:

- Backend/config/tmdb.js
- Backend/Services/tmdbService.js
- Backend/utils/movieHelper.js
- Backend/controllers/movieController.js

If removed:
There would be no movie data source, and the app would not have titles, posters, ratings, or trailers.

### 14) CORS

What it is:
Cross-Origin Resource Sharing is a browser security mechanism that allows or blocks requests from different origins.

Why it was used:
The frontend and backend are separate domains/ports, so the backend must allow the frontend origin.

Where it is used:

- Backend/app.js

If removed:
The browser would likely block API calls from the frontend to the backend.

---

## 3. Complete Project Architecture

### Frontend architecture

The frontend is a React SPA under Frontend/front/src.

Main structure:

- App.jsx: wraps app in BrowserRouter and includes Navbar and Footer
- main.jsx: mounts the app and provides AuthProvider
- context/AuthContext.jsx: global auth state holder
- routes/AppRoutes.jsx: defines route mappings
- pages/: page-level screens
- components/: reusable UI pieces
- services/: API call wrappers
- hooks/useAuth.js: custom auth hook
- styles/: CSS files

Frontend responsibilities:

- Display UI
- Collect user input
- Call backend APIs
- Store login state in localStorage
- Navigate between pages
- Render movie data from TMDB-backed APIs

### Backend architecture

The backend is Node.js + Express app.

Main structure:

- app.js: application setup, middleware, route mounting
- server.js: environment config and DB connection startup
- routes/: endpoint definitions
- controllers/: route logic
- models/: MongoDB schemas
- middleware/: auth and upload security/utility middleware
- utils/: email and helper logic
- config/: environment/third-party configuration
- Services/: TMDB service helper

Backend responsibilities:

- Receive requests
- Validate inputs
- Check JWT tokens
- Query MongoDB
- Talk to external services like TMDB and Cloudinary
- Send response JSON

### Database architecture

The app uses MongoDB with Mongoose models.

Model relationships:

- User: stores authentication and profile data
- Movie: stores TMDB movie metadata and category labels
- Watchlist: joins user and movie documents

Relationship pattern:

- One user can have many watchlist entries
- One movie can be referenced by many watchlist records

This is implemented in:

- Backend/models/User.js
- Backend/models/Movie.js
- Backend/models/Watchlist.js

### Request/response flow

Simple flow:

Frontend request
-> fetch() in Frontend/front/src/services/_
-> Express route in Backend/routes/_
-> controller logic in Backend/controllers/\*
-> model query in MongoDB or external API call
-> response JSON back to frontend
-> React state updates
-> UI re-renders

Example:

- User clicks login
- Frontend sends POST /api/v1/auth/login
- Backend checks credentials
- JWT is created
- Frontend saves token in localStorage
- Protected routes later use Authorization: Bearer token

### Folder structure summary

Backend:

- app.js
- server.js
- package.json
- .env
- config/
- controllers/
- middleware/
- models/
- routes/
- Services/
- utils/

Frontend:

- src/
- components/
- context/
- hooks/
- pages/
- routes/
- services/
- styles/

### Architectural diagram

Text architecture:

Browser (React)
|
v
Frontend pages/components
|
| fetch API calls
v
Express REST API (Backend/app.js)
|
+--> authRoutes
+--> userRoutes
+--> movieRoutes
+--> watchlistRoutes
|
+--> Controllers
| |
| +--> MongoDB via Mongoose Models
| +--> TMDB API via fetchFromTMDB
| +--> Cloudinary for profile images
|
+--> JWT auth middleware
v
JSON responses to frontend

### Responsibilities of important files

- Backend/app.js: middleware setup and route registration
- Backend/server.js: DB connection and server startup
- Backend/config/db.js: MongoDB connection
- Backend/config/tmdb.js: TMDB environment variables
- Backend/config/cloudinary.js: Cloudinary configuration
- Backend/middleware/authMiddleware.js: JWT verification
- Backend/middleware/uploadMiddleware.js: file upload validation
- Backend/controllers/authController.js: registration/login/OTP/password flows
- Backend/controllers/userController.js: profile and image upload flows
- Backend/controllers/movieController.js: movie-related API endpoints
- Backend/controllers/watchlistController.js: add/remove/get watchlist
- Backend/models/User.js: user schema
- Backend/models/Movie.js: movie metadata schema
- Backend/models/Watchlist.js: join collection
- Backend/utils/sendEmail.js: OTP email sending
- Backend/Services/tmdbService.js: TMDB API wrapper
- Backend/utils/movieHelper.js: caches and formats TMDB data

---

## 4. Complete Application Flow

The user request says “dashboard → skills → offers → marketplace → requests → communication → reviews → wallet/tokens.” Those features are not in the current project. The correct approach is:

Not found in the current codebase: dashboard, skills, offers, marketplace, requests, communication, reviews, wallet, tokens.

The real flow in this project is:

User opens website
-> Navbar shows movie sections and search
-> Home page loads category lists from backend
-> User browses trending/popular/upcoming/top-rated movies
-> User can click a movie card
-> MovieDetails page fetches overview, cast, similar movies, and trailer
-> User can add a movie to watchlist if logged in
-> User can register/login through authentication pages
-> Registration creates a user and sends OTP email
-> User verifies OTP
-> User logs in and receives JWT
-> Frontend stores user + token in localStorage
-> User can access Profile page, update data, change password, upload profile image
-> User can manage Watchlist from the watchlist page

Actual implemented flow:

1. Home page loads
2. Navbar search queries TMDB via backend
3. Movie details route fetches TMDB data
4. Registration route creates user and sends OTP
5. Login route validates user and returns JWT
6. JWT is saved in localStorage
7. Protected user routes use authenticate middleware
8. Watchlist pages call protected backend endpoints

### Real app flow in simple language

- You open the movie site
- You see a homepage with categories and hero banner
- You click a movie
- The app fetches extra movie information
- You search for titles in the navbar
- You sign up or login
- The app verifies your email with an OTP
- After login, the app remembers you using a token
- You can update your profile or store favorite movies in your watchlist

---

## 5. Frontend Deep Dive

### React structure

The app is built with React components and JSX. The project uses functional components and hooks rather than class components.

Important React patterns used in the project:

- useState for local form/input state
- useEffect for side effects such as API calls and browser events
- props for passing data between components
- component composition
- custom hook useAuth.js

### Components

#### Navbar.jsx

File: Frontend/front/src/components/Navbar/Navbar.jsx
Purpose:

- Displays navigation links
- Handles search input
- Shows mobile menu
- Shows user profile menu
- Tracks user authentication state

Important logic:

- NAV_LINKS defines page routes
- useAuth gets user and logout
- useEffect listens for outside clicks to close menus
- useEffect with query triggers search after 300ms debounce-like delay

Why this matters:
This is the main navigation and global search component. It is a central feature that connects user state to the rest of the app.

#### HeroBanner.jsx

File: Frontend/front/src/components/hero/HeroBanner.jsx
Purpose:

- Displays a large background movie banner
- Shows title, rating, release year, and overview
- Has previous/next slide controls
- Has dot navigation

Important logic:

- Uses movie data passed from Home.jsx
- Builds an image URL using TMDB path format
- Renders a slideshow and button group

#### MovieCard.jsx

File: Frontend/front/src/components/movie/MovieCard.jsx
Purpose:

- Displays a movie poster card
- Shows rating
- Navigates to movie details page
- Supports remove button in watchlist pages

#### MovieSection.jsx

File: Frontend/front/src/components/movie/MovieSection.jsx
Purpose:

- Displays a horizontal scrolling section of movies
- Provides left/right slider controls
- Reuses MovieCard

#### MovieHero.jsx

File: Frontend/front/src/components/movie/MovieHero.jsx
Purpose:

- Full-size header for a movie details page
- Shows poster, rating, runtime, genres, trailer button, watchlist button

#### MovieOverview.jsx

File: Frontend/front/src/components/movie/MovieOverview.jsx
Purpose:

- Shows movie summary text under the hero section

#### CastSection.jsx

File: Frontend/front/src/components/movie/CastSection.jsx
Purpose:

- Displays cast cards in a horizontal slider

#### TrailerModal.jsx

File: Frontend/front/src/components/movie/TrailerModal.jsx
Purpose:

- Opens a modal with an embedded YouTube trailer

### Pages

#### Home.jsx

File: Frontend/front/src/pages/Home.jsx
Purpose:

- Fetches all main movie categories from backend
- Stores them in state
- Passes them to HeroBanner and MovieSection

Important flow:

- useEffect runs once on mount
- Promise.all fetches trending + popular + top rated + upcoming
- state is stored separately for each section
- hero slider rotates every 5 seconds

#### MovieCategory.jsx

File: Frontend/front/src/pages/MovieCategory.jsx
Purpose:

- Displays a category-based movie grid
- Receives a fetchMovies function as prop

#### MovieDetails.jsx

File: Frontend/front/src/pages/MovieDetails.jsx
Purpose:

- Reads movie id from route params and navigation state
- Fetches details, cast, trailer, and similar movies
- Renders a details page

#### Watchlist.jsx

File: Frontend/front/src/pages/Watchlist.jsx
Purpose:

- Fetches user watchlist
- Maps items to movie data
- Allows remove action

#### Profile.jsx

File: Frontend/front/src/pages/Profile.jsx
Purpose:

- Shows profile card, image upload, profile info form, and password reset form
- Uses user data from AuthContext

#### Register.jsx

File: Frontend/front/src/pages/Register.jsx
Purpose:

- Captures name, email, password
- Calls registerUser
- Redirects to verify-email page

#### Login.jsx

File: Frontend/front/src/pages/Login.jsx
Purpose:

- Captures email and password
- Calls loginUser
- Stores user and token using AuthContext login()

#### VerifyEmail.jsx

File: Frontend/front/src/pages/VerifyEmail.jsx
Purpose:

- Accepts email and OTP
- Calls backend verification API
- Supports resend OTP

#### ForgotPassword.jsx

File: Frontend/front/src/pages/ForgotPassword.jsx
Purpose:

- Accepts email
- Sends password reset OTP request

#### ResetPassword.jsx

File: Frontend/front/src/pages/ResetPassword.jsx
Purpose:

- Accepts email, OTP, new password
- Calls reset API

### Props

Props are used to pass data from parent to child components.
Examples:

- Home.jsx passes movie lists to HeroBanner and MovieSection
- MovieCategory.jsx receives title and fetchMovies from AppRoutes.jsx
- MovieHero.jsx receives movie and onTrailerOpen
- MovieCard.jsx receives movie, showRemoveButton, onRemove
- TrailerModal.jsx receives isOpen, onClose, trailerKey

### State

State is managed via useState in many components.
Examples:

- Register form state stores name/email/password
- Home stores trending/popular/upcoming/topRated arrays
- watchlist page stores movies and loading state
- MovieDetails stores movie, cast, similar, trailerKey, loading, error

### Hooks

#### useState

Used for local UI state and form values.
Examples in the project:

- Frontend/front/src/pages/Register.jsx
- Frontend/front/src/pages/Login.jsx
- Frontend/front/src/pages/Profile.jsx
- Frontend/front/src/context/AuthContext.jsx

#### useEffect

Used for side effects such as:

- reading localStorage on app startup
- fetching movies on page load
- auto-rotating hero banner
- closing dropdowns when clicking outside
- delayed search results after typing

Example:

- AuthContext.jsx initial loading from localStorage
- Home.jsx fetches list of categories on mount
- Navbar.jsx listens for clicks outside search/profile

#### Custom hook: useAuth

File: Frontend/front/src/hooks/useAuth.js
Purpose:

- Exposes AuthContext values to components

### Routing

Routing is defined in Frontend/front/src/routes/AppRoutes.jsx.
Routes include:

- /
- /home
- /register
- /login
- /verify-email
- /forgot-password
- /reset-password
- /profile
- /movie/:id
- /movies
- /trending
- /popular
- /upcoming
- /top-rated
- /watchlist

Important: These are frontend routes, not backend routes; the backend API base paths are under /api/v1/...

### Forms

The app uses standard HTML forms with controlled inputs.
Example:

- Register.jsx uses value and onChange to keep input state in sync
- Login.jsx does the same
- Profile.jsx has forms for profile updates and password changes
- ResetPassword.jsx accepts email, OTP, and new password

### API calls

The frontend API calls are centralized in Frontend/front/src/services/.
Examples:

- authService.js for register/login/verify/reset
- movieService.js for movie category, details, credits, search, trailer
- watchlistService.js for add/remove/get watchlist
- userService.js for profile update, password change, profile image upload

The flow is simple:

- Build URL
- Use fetch()
- Parse JSON
- Check response.ok or success flag
- Update state or show alert

### Authentication state

Authentication data is stored in AuthContext:

- user
- token
- loading
- login()
- logout()
- setUser
- setToken

This is persisted in localStorage:

- "user"
- "token"

This means the app can reload and still keep the user logged in if the data exists.

### LocalStorage/session handling

File: Frontend/front/src/context/AuthContext.jsx
When app starts:

- it reads localStorage.getItem("user")
- it reads localStorage.getItem("token")
- if both exist, it restores state

When login occurs:

- localStorage.setItem("user", JSON.stringify(userData))
- localStorage.setItem("token", tokenData)

When logout occurs:

- localStorage.removeItem("user")
- localStorage.removeItem("token")

Important note:
This is localStorage, not secure HTTP-only cookies. So tokens are stored in browser storage and are accessible by JavaScript. This is technically less secure than cookie-based JWT storage.

### Error handling

Examples:

- if the backend sends data.success === false, the frontend shows alert(data.message)
- try/catch catches network failures
- console.error logs messages
- loading state prevents duplicate requests

### Loading states

Examples:

- Register button shows Loading...
- Login button shows Logging In...
- Profile save button shows Saving...
- watchlist button shows Loading...

This pattern improves UX and prevents duplicate actions.

### Input → processing → API call → response → UI update

Example login:

1. User enters email and password in Login.jsx
2. handleSubmit is called
3. loginUser(formData) in authService.js sends POST request
4. backend validates user and returns token + user object
5. AuthContext login(userData, tokenData) stores values in localStorage and state
6. navigate("/home") is called
7. UI updates to show logged-in state in Navbar and Profile page

### Important technical pattern used in frontend

- Controlled inputs
- async/await + fetch
- error states and alerts
- route navigation
- component reuse
- localStorage session persistence

---

## 6. Backend Deep Dive

### Node.js

This project uses Node.js as the server runtime. It is the environment where Express runs and where JavaScript is executed outside the browser.

### Express

Express is used for request handling and route definitions. The app sets JSON parsing, CORS, and route mounting in Backend/app.js.

### app.js

File: Backend/app.js
Responsibilities:

- Creates Express app instance
- Configures CORS with allowed origins
- Parses JSON requests with express.json()
- Mounts routes under /api/v1/

Important code logic:

- allowedOrigins includes localhost and deployed Vercel URLs
- credentials: true allows cookies if used later
- app.use("/api/v1/auth", authRoutes)
- app.use("/api/v1/user", userRoutes)
- app.use("/api/v1/movies", movieRoutes)
- app.use("/api/v1/watchlist", watchlistRoutes)

### server.js

File: Backend/server.js
Responsibilities:

- Loads environment variables with dotenv
- Connects to MongoDB using connectDB()
- Starts the Express server on a port

Important behavior:

- dotenv.config({ path: path.resolve(\_\_dirname, ".env") }) loads environment variables from Backend/.env
- app.listen(PORT, ...) starts the server

### Routes

#### authRoutes.js

File: Backend/routes/authRoutes.js
Routes:

- POST /register
- POST /login
- POST /verify-email
- POST /resend-otp
- POST /forgot-password
- POST /reset-password

#### userRoutes.js

File: Backend/routes/userRoutes.js
Routes:

- GET /profile (protected)
- PUT /update-profile (protected)
- PUT /change-password (protected)
- PUT /profile-image (protected, upload.single("profileImage"))

#### movieRoutes.js

File: Backend/routes/movieRoutes.js
Routes:

- GET /trending
- GET /popular
- GET /top-rated
- GET /upcoming
- GET /search
- GET /:id
- GET /:id/credits
- GET /:id/similar
- GET /:id/videos

One important note:
The route definitions are ordered in a way that search and specific /:id patterns are placed before generic route handlers, but because Express matches path patterns by exact path and route order matters when the same URL path could match multiple patterns, careful ordering is important. In this file, search and /:id routes are defined before /:id/credits etc. This is a reasonable pattern.

#### watchlistRoutes.js

File: Backend/routes/watchlistRoutes.js
Routes:

- POST / (protect)
- GET / (protect)

### Controllers

#### authController.js

Responsibilities:

- register user
- hash password
- create OTP
- send OTP email
- login user
- verify OTP
- resend OTP
- forgot password
- reset password

Important functions:

- register
- login
- verifyEmail
- resendOTP
- forgotPassword
- resetPassword

#### userController.js

Responsibilities:

- getProfile
- updateProfile
- changePassword
- uploadProfileImage

#### movieController.js

Responsibilities:

- getTrendingMovies
- getPopularMovies
- getTopRatedMovies
- getUpcomingMovies
- getMovieDetails
- getMovieCredits
- getSimilarMovies
- getMovieTrailer
- searchMovies

#### watchlistController.js

Responsibilities:

- toggleWatchlist
- getUserWatchlist

### Middleware

#### authMiddleware.js

File: Backend/middleware/authMiddleware.js
Purpose:

- Read Authorization header
- Check Bearer token
- Verify JWT with JWT_SECRET
- Attach decoded user object to req.user

Implementation details:

- const authHeader = req.headers.authorization
- if missing or wrong format, return 401
- const token = authHeader.split(" ")[1]
- jwt.verify(token, process.env.JWT_SECRET)
- req.user = decoded

This is the core authentication middleware.

#### uploadMiddleware.js

File: Backend/middleware/uploadMiddleware.js
Purpose:

- Accept only image uploads
- Store files in memory
- Limit file size to 2MB

Important logic:

- multer.memoryStorage()
- fileFilter checks file.mimetype.startsWith("image/")
- limits: { fileSize: 2 _ 1024 _ 1024 }

This is used before Cloudinary upload.

### Utilities

#### sendEmail.js

File: Backend/utils/sendEmail.js
Purpose:

- send emails using Resend
- used for OTP messages

Important behavior:

- `new Resend(process.env.RESEND_API_KEY)`
- `resend.emails.send({ from, to, subject, html })`
- throws error on failure

#### tmdbService.js

File: Backend/Services/tmdbService.js
Purpose:

- central helper for TMDB requests
- handles base URL and API key
- fetches endpoints and returns JSON or empty results

Important behavior:

- If no TMDB_API_KEY, logs a warning and returns { results: [] }
- Requests use `fetch` with GET and accept: application/json

#### movieHelper.js

File: Backend/utils/movieHelper.js
Purpose:

- Checks if category movies exist in MongoDB
- If not, fetches from TMDB and saves into MongoDB
- Adds category tags using $addToSet

This is the local cache strategy.

### Error handling

The backend uses a common pattern:

- Try/catch blocks around logic
- res.status(...).json({ success: false, message: ... })
- console.error(error)
- 400 for validation issues
- 401 for auth issues
- 404 for missing records
- 500 for server errors

### Validation

This project implements some basic validation manually, not with an external validator library.
Examples:

- missing name/email/password triggers 400
- duplicate email triggers 409
- password length is not explicitly checked in register route; User schema has minlength: 6, but the controller does not enforce it before create
- verify email checks OTP and expiry
- forgot password checks email and verified status

### Authentication and authorization

Authentication:

- login creates a JWT token using user.\_id

Authorization:

- protect middleware ensures that token is required for protected routes
- req.user is then used by controllers to identify user

---

## 7. Database Deep Dive

### Model: User

File: Backend/models/User.js

Fields:

- name: String, required, trim, min 3, max 50
- email: String, required, unique, lowercase, trim
- password: String, required, min 6, max 300
- role: String, enum ["user", "admin"], default "user"
- isVerified: Boolean, default false
- profileImage: String, default ""
- verificationOTP: String, default null
- verificationOTPExpires: Date, default null
- resetPasswordOTP: String, default null
- resetPasswordOTPExpires: Date, default null
- timestamps: true

Why this design:

- Name and email are essential for account creation
- Password must be stored securely
- Role allows future admin logic
- isVerified prevents unverified users from continuing protected flows
- OTP fields are necessary for email verification and password reset
- profileImage stores Cloudinary URL

Important note:
There are two isVerified declarations in the schema. The later one overrides the earlier one. This is a real code smell and may be confusing. The final code keeps only the last declaration.

### Model: Movie

File: Backend/models/Movie.js

Fields:

- tmdbId: Number, required, unique
- title: String, required
- overview: String, default ""
- poster_path: String, default ""
- backdrop_path: String, default ""
- release_date: String, default ""
- vote_average: Number, default 0
- popularity: Number, default 0
- genre_ids: array of numbers
- adult: Boolean, default false
- original_language: String, default ""
- original_title: String, default ""
- vote_count: Number, default 0
- categories: array of strings, default []
- timestamps: true

Why this design:

- tmdbId is used to uniquely identify TMDB movies and avoid duplicates
- title, overview, poster_path, backdrop_path, ratings, and release date are the data needed for home and detail pages
- categories stores labels like "trending", "popular", "upcoming", etc.
- This is a cache-like design that stores movie data locally when fetched from TMDB

### Model: Watchlist

File: Backend/models/Watchlist.js

Fields:

- user: ObjectId ref User, required
- movie: ObjectId ref Movie, required
- timestamps: true

Unique index:

- watchlistSchema.index({ user: 1, movie: 1 }, { unique: true })

Why this design:

- A user should not save the same movie twice in the watchlist
- user and movie references create a many-to-many relationship between users and movies in a normalized way

### How data moves between models

Example movie flow:

- TMDB API returns movie data
- Backend/controller calls fetchFromTMDB
- movieHelper.js maps data into Movie schema fields
- Movie.findOneAndUpdate({ tmdbId }, { ... }, { upsert: true }) saves or updates the document
- categories are added to the movie using $addToSet
- Watchlist stores a reference to the movie document when a user adds it

Example watchlist flow:

- User sends movieId from frontend
- Backend finds movie document by tmdbId in Movie collection
- Watchlist is checked for { user, movie }
- If none exists, new Watchlist document is created linking user to movie
- getUserWatchlist uses populate("movie") to fetch full movie details for the user

### Relationships and references

- User to Watchlist: user field stores ObjectId of User
- Movie to Watchlist: movie field stores ObjectId of Movie
- populate("movie") is used in getUserWatchlist

This is a classic relational-style reference in MongoDB.

---

## 8. Authentication & Authorization

### Registration flow

Step by step:

1. Frontend Register.jsx collects name, email, password
2. Calls registerUser() from Frontend/front/src/services/authService.js
3. Backend route POST /api/v1/auth/register fires
4. authController.register validates required fields
5. Checks if email already exists
6. Hashes password with bcrypt.genSalt(10) and bcrypt.hash(password, salt)
7. Creates a 6-digit OTP and expiry timestamp
8. Creates User document with name, email, password, verificationOTP, verificationOTPExpires
9. Sends OTP email via sendEmail()
10. Returns 201 success response

Why this was implemented:

- Registration must create a secure user record
- OTP ensures email ownership before account access
- Password hashing prevents plain-text storage

### Password hashing

Implemented in Backend/controllers/authController.js while registering:

- const salt = await bcrypt.genSalt(10)
- const hashedPassword = await bcrypt.hash(password, salt)

This means the actual password in MongoDB is not the raw password.

### Email verification

When a user registers, a 6-digit OTP is generated and stored on the user.

The verification process:

- User visits VerifyEmail page
- Sends email + otp to POST /api/v1/auth/verify-email
- Backend finds user by email
- Checks if OTP matches
- Checks expiry time
- Sets user.isVerified = true
- Clears OTP fields
- Saves user

### OTP resend

Function: resendOTP in authController.js

- finds user by email
- ensures user is not already verified
- generates new OTP and expiry
- updates document
- sends email

### Login flow

1. User enters email and password
2. Login.jsx calls loginUser
3. Backend POST /api/v1/auth/login checks fields
4. Finds user by email
5. Uses bcrypt.compare(password, user.password)
6. On match, creates JWT
7. Returns JSON with token and minimal user data
8. Frontend stores token and user in AuthContext + localStorage

Important code:

- jwt.sign({ id: user.\_id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

### JWT generation

The token is created during login in authController.js

Example logic:

- payload = { id: user.\_id }
- secret = process.env.JWT_SECRET
- expiresIn = process.env.JWT_EXPIRES_IN

The token is then returned to the frontend in the response body.

### JWT verification

User actions requiring authentication use the protect middleware.

Flow:

1. Frontend sends Authorization: Bearer <token>
2. protect middleware reads header
3. Splits token from Bearer prefix
4. jwt.verify(token, process.env.JWT_SECRET)
5. Decodes payload and stores on req.user
6. Controller can access req.user.id

### Authentication middleware

File: Backend/middleware/authMiddleware.js
This middleware runs before protected routes such as:

- GET /api/v1/user/profile
- PUT /api/v1/user/update-profile
- PUT /api/v1/user/change-password
- PUT /api/v1/user/profile-image
- POST /api/v1/watchlist/
- GET /api/v1/watchlist/

If the token is missing or invalid, it returns:

- status 401
- { success: false, message: "Unauthorized. No token provided." } or "Invalid or Expired Token"

### Protected routes

These are protected by the protect middleware in route definitions.
Examples:

- userRoutes.js
- watchlistRoutes.js

This means only authenticated users can access them.

### User identification

The app identifies users primarily by the decoded JWT payload:

- { id: user.\_id }
  This object is attached to req.user.

### Logout

There is no server-side logout logic in the current codebase. The frontend simply removes values from localStorage.

File: Frontend/front/src/context/AuthContext.jsx
Implementation:

- localStorage.removeItem("user")
- localStorage.removeItem("token")
- setUser(null)
- setToken(null)

This is a client-side logout, not a server-issued token invalidation.

### Forgot password flow

1. User submits email in ForgotPassword.jsx
2. API sends POST /api/v1/auth/forgot-password
3. Backend checks if email exists and user is verified
4. Generates resetPasswordOTP and expiry
5. Stores on user
6. Sends OTP email
7. Frontend navigates to the reset-password page

### Reset password flow

1. User enters email, OTP, and new password
2. Backend finds user by email
3. Validates OTP and expiry
4. Hashes new password with bcrypt.hash
5. Updates password field
6. clears OTP and expires fields
7. saves user
8. returns success message

### Important security note

The implementation is functional but not production-grade. There is no refresh token rotation, no cookie-based session, no rate-limiting, no server-side session invalidation, and no explicit token blacklist.

---

## 9. API Documentation

### Core API table

| Method | Endpoint                        | Purpose                         | Auth Required? | Request Body / Params             | Response                   | Controller         | Route File         |
| ------ | ------------------------------- | ------------------------------- | -------------- | --------------------------------- | -------------------------- | ------------------ | ------------------ |
| POST   | /api/v1/auth/register           | Create new user + send OTP      | No             | { name, email, password }         | success + user + message   | register           | authRoutes.js      |
| POST   | /api/v1/auth/login              | Authenticate user               | No             | { email, password }               | success + token + user     | login              | authRoutes.js      |
| POST   | /api/v1/auth/verify-email       | Verify OTP                      | No             | { email, otp }                    | success + message          | verifyEmail        | authRoutes.js      |
| POST   | /api/v1/auth/resend-otp         | Send another OTP                | No             | { email }                         | success + message          | resendOTP          | authRoutes.js      |
| POST   | /api/v1/auth/forgot-password    | Send reset OTP                  | No             | { email }                         | success + message          | forgotPassword     | authRoutes.js      |
| POST   | /api/v1/auth/reset-password     | Set new password                | No             | { email, otp, newPassword }       | success + message          | resetPassword      | authRoutes.js      |
| GET    | /api/v1/user/profile            | Get current user profile        | Yes            | Authorization header              | success + user info        | getProfile         | userRoutes.js      |
| PUT    | /api/v1/user/update-profile     | Update profile                  | Yes            | { name, email }                   | success + updated user     | updateProfile      | userRoutes.js      |
| PUT    | /api/v1/user/change-password    | Change password                 | Yes            | { currentPassword, newPassword }  | success + message          | changePassword     | userRoutes.js      |
| PUT    | /api/v1/user/profile-image      | Upload profile image            | Yes            | multipart form field profileImage | success + image URL        | uploadProfileImage | userRoutes.js      |
| GET    | /api/v1/movies/trending         | Fetch trending movies           | No             | None                              | success + data             | getTrendingMovies  | movieRoutes.js     |
| GET    | /api/v1/movies/popular          | Fetch popular movies            | No             | None                              | success + data             | getPopularMovies   | movieRoutes.js     |
| GET    | /api/v1/movies/top-rated        | Fetch top rated movies          | No             | None                              | success + data             | getTopRatedMovies  | movieRoutes.js     |
| GET    | /api/v1/movies/upcoming         | Fetch upcoming movies           | No             | None                              | success + data             | getUpcomingMovies  | movieRoutes.js     |
| GET    | /api/v1/movies/search?query=... | Search movies                   | No             | query param                       | success + data             | searchMovies       | movieRoutes.js     |
| GET    | /api/v1/movies/:id              | Get movie details               | No             | id in URL                         | success + data             | getMovieDetails    | movieRoutes.js     |
| GET    | /api/v1/movies/:id/credits      | Get movie cast and credits      | No             | id in URL                         | success + data             | getMovieCredits    | movieRoutes.js     |
| GET    | /api/v1/movies/:id/similar      | Get similar movies              | No             | id in URL                         | success + data             | getSimilarMovies   | movieRoutes.js     |
| GET    | /api/v1/movies/:id/videos       | Get trailer videos              | No             | id in URL                         | success + data             | getMovieTrailer    | movieRoutes.js     |
| POST   | /api/v1/watchlist/              | Add/remove movie from watchlist | Yes            | { movieId }                       | success + action + message | toggleWatchlist    | watchlistRoutes.js |
| GET    | /api/v1/watchlist/              | Get current user watchlist      | Yes            | None                              | success + data             | getUserWatchlist   | watchlistRoutes.js |

### Most important APIs explained in detail

#### Register API

Method: POST /api/v1/auth/register
Why it matters:

- It creates the account
- It sends OTP to the user

Input:

- name
- email
- password

Response:

- success: true
- message: Registration Successful. OTP sent to your email.
- user: created user object

Controller:

- Backend/controllers/authController.js, register()

#### Login API

Method: POST /api/v1/auth/login
Purpose:

- Validate the user and issue a JWT

Input:

- email
- password

Response:

- success
- message
- token
- user: { id, name, email }

Backend logic:

- user lookup by email
- bcrypt.compare against stored hash
- JWT creation and return

#### Movie listing APIs

These endpoints return movie list data from TMDB or the local MongoDB cache.
Examples:

- /api/v1/movies/trending
- /api/v1/movies/popular
- /api/v1/movies/top-rated
- /api/v1/movies/upcoming

The backend uses `getMoviesByCategory` from Backend/utils/movieHelper.js to check the database first, then fetch from TMDB if needed.

#### Watchlist API

Method: POST /api/v1/watchlist/
Purpose:

- Add movie if not present
- Remove if already present

Input:

- movieId

The backend maps the movieId from TMDB to a stored Movie document and then creates/removes a Watchlist entry.

---

## 10. Feature-by-Feature Technical Flow

### Feature: Registration and OTP send

Purpose:
Allow a new user to register and verify their email.

How it works:
The user enters name, email, password; backend creates a user and stores a generated OTP with expiry.

Frontend:

- Frontend/front/src/pages/Register.jsx
- Frontend/front/src/services/authService.js

Backend:

- Backend/controllers/authController.js, register()
- Backend/utils/sendEmail.js

Database:

- MongoDB User document saved with email, hashed password, OTP fields

API:

- POST /api/v1/auth/register

Step-by-step flow:

- User submits form
- registerUser sends POST request
- controller checks if email already exists
- password is hashed
- OTP is generated
- email is sent via Resend
- response returns success message

Important files:

- Backend/controllers/authController.js
- Backend/models/User.js
- Backend/utils/sendEmail.js

Possible errors:

- email already exists -> 409
- missing field -> 400
- email sending failure -> 500

Security considerations:

- Password hashing
- OTP expiry
- no plain-text password storage

### Feature: Login and JWT authorization

Purpose:
Authenticate returning users and provide access to protected features.

Frontend:

- Frontend/front/src/pages/Login.jsx
- Frontend/front/src/context/AuthContext.jsx

Backend:

- authController.js, login()
- authMiddleware.js, protect()

Database:

- User document lookup by email

API:

- POST /api/v1/auth/login

Step-by-step flow:

- user enters email/password
- backend checks user and hash
- if valid, creates JWT
- frontend stores token in localStorage
- protected routes send Authorization header

Important files:

- Backend/controllers/authController.js
- Backend/middleware/authMiddleware.js

Possible errors:

- user not found -> 404
- invalid credentials -> 401
- missing token -> 401
- expired token -> 401

Security considerations:

- password compare with bcrypt
- token verification
- not secure against browser storage risk

### Feature: Movie browsing home page

Purpose:
Display movie categories and hero banners.

Frontend:

- Home.jsx
- HeroBanner.jsx
- MovieSection.jsx

Backend:

- movieController.js
- movieHelper.js
- tmdbService.js

Database:

- Movie documents used as local cache

API:

- /api/v1/movies/trending
- /api/v1/movies/popular
- /api/v1/movies/top-rated
- /api/v1/movies/upcoming

Step-by-step flow:

- Home page mounts
- Promise.all fetches categories
- backend checks MongoDB cache
- if cache missing, fetches TMDB and saves results
- UI renders movie sliders and hero banner

Important files:

- Frontend/front/src/pages/Home.jsx
- Backend/utils/movieHelper.js
- Backend/controllers/movieController.js

Possible errors:

- TMDB API unavailable
- empty results
- network failures

Security considerations:

- no direct exposure of secret key to frontend
- API key kept on backend

### Feature: Search movies

Purpose:
Let user search titles from the navbar.

Frontend:

- Navbar.jsx
- Frontend/front/src/services/movieService.js

Backend:

- searchMovies in movieController.js

Database:

- Not primarily used; calls TMDB search endpoint directly

API:

- GET /api/v1/movies/search?query=...

Step-by-step flow:

- query updates in Navbar.jsx
- after 300ms, searchMovies(query) is called
- backend calls TMDB search endpoint
- results displayed in dropdown

Important files:

- Frontend/front/src/components/Navbar/Navbar.jsx
- Backend/controllers/movieController.js

Possible errors:

- empty query, returns empty array
- no search results
- invalid network

Security considerations:

- query is URL encoded via encodeURIComponent

### Feature: Movie details and trailer

Purpose:
Show detailed movie information, cast, similar titles, and trailer.

Frontend:

- MovieDetails.jsx
- MovieHero.jsx
- MovieOverview.jsx
- CastSection.jsx
- TrailerModal.jsx

Backend:

- movieController.js endpoints for details, credits, similar, videos

Database:

- mostly TMDB data, direct response; not heavy MongoDB usage

API:

- GET /api/v1/movies/:id
- GET /api/v1/movies/:id/credits
- GET /api/v1/movies/:id/similar
- GET /api/v1/movies/:id/videos

Step-by-step flow:

- MovieDetails loads route param id
- fetches all details in parallel using Promise.all
- trailer key is found among YouTube videos
- modal opens when user clicks trailer

Important files:

- Frontend/front/src/pages/MovieDetails.jsx
- Frontend/front/src/components/movie/TrailerModal.jsx

Possible errors:

- movie not found
- no trailer available
- API fails

### Feature: Watchlist

Purpose:
Allow user to save favorite movies.

Frontend:

- MovieHero.jsx
- Watchlist.jsx
- MovieCard.jsx
- Frontend/front/src/services/watchlistService.js

Backend:

- watchlistController.js
- watchlistRoutes.js

Database:

- Movie and Watchlist models

API:

- POST /api/v1/watchlist/
- GET /api/v1/watchlist/

Step-by-step flow:

- user clicks watchlist button on movie page
- frontend sends movieId with Authorization header
- backend finds movie record by tmdbId
- checks existing user+movie pair
- creates or removes document
- frontend updates UI

Important files:

- Backend/controllers/watchlistController.js
- Backend/models/Watchlist.js
- Frontend/front/src/pages/Watchlist.jsx

Possible errors:

- missing movieId -> 400
- no token -> 401
- movie not found -> 404

Security considerations:

- protected route
- user-specific watchlist check

### Feature: Profile management and image upload

Purpose:
Let user maintain profile details and photo.

Frontend:

- Profile.jsx
- userService.js

Backend:

- userController.js
- uploadMiddleware.js
- cloudinary config

Database:

- User document updated

API:

- PUT /api/v1/user/update-profile
- PUT /api/v1/user/change-password
- PUT /api/v1/user/profile-image

Step-by-step flow:

- user edits profile data and submits
- backend finds logged-in user by req.user.id
- updates fields
- uploads image using Cloudinary stream
- saves URL into User.profileImage

Important files:

- Backend/controllers/userController.js
- Backend/config/cloudinary.js
- Frontend/front/src/pages/Profile.jsx

Possible errors:

- file missing
- invalid image type
- Cloudinary timeout or network issue
- bad token

Security considerations:

- protected routes
- upload file type validation
- restricted file size to 2MB

### Feature: Forgot password and reset password

Purpose:
Allow user to recover account access.

Frontend:

- ForgotPassword.jsx
- ResetPassword.jsx

Backend:

- authController.js, forgotPassword and resetPassword

Database:

- User stores resetPasswordOTP and expiry

API:

- POST /api/v1/auth/forgot-password
- POST /api/v1/auth/reset-password

Step-by-step flow:

- user requests reset code
- backend checks if email exists and user is verified
- new OTP is sent
- user enters OTP and new password
- password is hashed and updated

Important files:

- Backend/controllers/authController.js
- Backend/models/User.js

Possible errors:

- user not found
- email not verified
- invalid OTP
- expired OTP

Security considerations:

- OTP expiry
- hashing new password
- no email link-based reset in current implementation

---

## 11. Important Code Concepts Used

This project actually uses many standard backend and frontend concepts.

### async/await

Used everywhere in async API calls and DB logic.
Examples:

- register() in authController.js
- login() in authController.js
- getMoviesByCategory() in movieHelper.js
- fetchMovie() inside MovieDetails.jsx

### Promises

Used for asynchronous operations such as fetch requests and database operations.
Examples:

- Promise.all([ ... ]) in Home.jsx and MovieDetails.jsx
- bcrypt.hash / bcrypt.compare
- await User.create()

### try/catch

Used to handle backend and frontend failures.
Examples:

- all controller functions
- Home.jsx network fetch block
- Profile image upload block

### Middleware

Used in Express.
Examples:

- authMiddleware.js protects routes
- uploadMiddleware.js validates uploaded files before Cloudinary handling

### Destructuring

Used heavily in code.
Examples:

- const { name, email, password } = req.body
- const { id } = req.params
- const { user, logout } = useAuth()

### Modules

This project uses ES modules via type: module in package.json.
Examples:

- import express from "express"
- import User from "../models/User.js"
- export default app

### REST APIs

The backend is a REST-style API structure with endpoints under /api/v1 and standard HTTP methods.

### HTTP status codes

Used by the backend:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 409 Conflict
- 500 Internal Server Error
- 503 Service Unavailable in some upload logic

### JSON

All important responses use JSON.
Examples:

- success: false
- message: "User already exists"
- token: "..."
- user: {...}

### JWT

Used for protected API access.

### Hashing

Used with bcryptjs to hash passwords before saving them.

### Validation

Basic validation is implemented manually.
Examples:

- required fields check
- OTP match and expiry check
- file type filtering

### MongoDB ObjectId

Used in User and Watchlist models.
Example:

- user: mongoose.Schema.Types.ObjectId
- movie: mongoose.Schema.Types.ObjectId

### populate

Used in getUserWatchlist:

- Watchlist.find({ user: userId }).populate("movie")
  This loads the full movie document from the related Movie collection.

### CRUD

The project uses basic CRUD patterns:

- Create: User.create, Watchlist.create
- Read: User.findOne, Movie.find, Watchlist.find
- Update: user.save(), User.findOneAndUpdate
- Delete: Watchlist.findByIdAndDelete

### Environment variables

Used heavily for secrets and config:

- JWT_SECRET
- MONGODB_URI
- TMDB_API_KEY
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- RESEND_API_KEY

### CORS

Configured in Backend/app.js to allow specific frontend origins.

### Cookies

Not implemented as the primary auth mechanism in the current codebase.
The project uses localStorage and Authorization headers instead.

---

## 12. Security

### Security mechanisms actually present

#### Password hashing

Implemented using bcryptjs in authController.js.
Why it matters:
Even if the database is compromised, raw passwords are not exposed.

#### JWT authentication

Implemented through jwt.sign and jwt.verify.
Why it matters:
Protected routes require a valid token.

#### Validation

Basic checks are implemented manually:

- required fields
- email existence checks
- otp match and expiry checks
- file type checks for uploads
- password confirmation checks in Profile.jsx

#### CORS

Configured in Backend/app.js.
Why it matters:
Prevents unwanted cross-origin API access from unapproved origins.

#### Environment variables

Secrets are stored outside source code in .env files.
Why it matters:
Prevents hardcoding API keys and database credentials in the repo.

#### Authorization

Protect middleware checks the user token before allowing access to profile and watchlist resources.

#### File upload filtering

File type is checked in uploadMiddleware.js so only images are allowed.
File size is limited to 2MB.

### Security weaknesses or missing protections

These are important interview points:

1. No Helmet middleware

- Not found in the current codebase.
- Helmet adds response security headers.

2. No rate limiting

- Not found in the current codebase.
- Login and OTP endpoints could be brute-forced.

3. No input validation library

- No Joi, Zod, or express-validator is used.
- Validation is manual and limited.

4. JWT in localStorage

- The token is stored in browser localStorage instead of secure HttpOnly cookies.
- This is more exposed to XSS attacks.

5. No refresh token rotation

- Not found in the current codebase.
- Long-lived sessions are not managed in a robust way.

6. No CSRF protection

- Not found in the current codebase.
- This matters more when using cookies, which this project does not currently use as primary auth.

7. No server-side session invalidation

- logout is frontend-only and does not invalidate the token on server.

8. Duplicate `isVerified` field in the schema

- This is a data-model issue and can cause confusion or unexpected behavior.

9. No email rate limit or abuse prevention

- OTP generation is available without throttling.

10. No encryption at rest beyond database-level protection

- Not enough application-level details to claim strong data protection.

---

## 13. Error Handling & Debugging

### Error 1: Missing or invalid JWT

Cause:

- user did not send Authorization header or token expired

Where:

- Backend/middleware/authMiddleware.js

How to identify:

- 401 response: Unauthorized. No token provided.
- 401 response: Invalid or Expired Token

Solution:

- re-login and get a fresh token
- ensure Authorization: Bearer <token>

Prevention:

- better frontend auth state handling
- redirect user to login when token invalid

### Error 2: Duplicate email registration

Cause:

- User.findOne({ email }) finds an existing record

Where:

- Backend/controllers/authController.js in register()

How to identify:

- 409 response with message: User already exists

Solution:

- ask user to use different email or login

Prevention:

- show better form validation and messaging

### Error 3: User not found during login or password reset

Cause:

- account with that email does not exist or is not created properly

Where:

- authController.js

How to identify:

- 404 response with message: User not found

Solution:

- check email casing, DB record, and registration flow

### Error 4: Invalid OTP

Cause:

- wrong code entered, code expired, or stored OTP mismatch

Where:

- authController.js verifyEmail() and resetPassword()

How to identify:

- 400 response with invalid OTP or expired OTP

Solution:

- request a fresh OTP

### Error 5: Cloudinary upload failure

Cause:

- poor network, invalid Cloudinary config, or timeout

Where:

- Backend/controllers/userController.js uploadProfileImage()

How to identify:

- 503 or 500 with message about unable to reach Cloudinary or upload fail

Solution:

- verify environment variables and internet connectivity

### Error 6: TMDB API unavailable

Cause:

- missing TMDB_API_KEY or API network issue

Where:

- Backend/config/tmdb.js
- Backend/Services/tmdbService.js

How to identify:

- fetchFromTMDB returns empty result sets and logs warnings

Solution:

- ensure environment variables are set correctly

### Error 7: Empty watchlist or missing movie document

Cause:

- movie record missing in MongoDB or bad tmdbId

Where:

- watchlistController.js toggleWatchlist

How to identify:

- 404 message: Movie not found.

Solution:

- verify movie exists or re-sync cache

### Error 8: Unexpected server errors

Cause:

- missing DB connection, network issue, async failure, or runtime bug

Where:

- many controllers

How to identify:

- 500 response with Internal Server Error

Solution:

- inspect server logs and validate request data

### Error 9: profile image not uploading because `req.file` is missing

Cause:

- form field name mismatch or file not attached

Where:

- Backend/middleware/uploadMiddleware.js and userController.js

How to identify:

- 400 message: Please upload an image.

Solution:

- ensure frontend FormData appends "profileImage"

### Error 10: duplicate `isVerified` schema issue

Cause:

- same property declared twice in User schema

Where:

- Backend/models/User.js

How to identify:

- inspection of schema shows duplicate field names

Solution:

- remove duplicate field definition

---

## 14. Real Development Problems

### Problem 1: localStorage token storage

What could go wrong:

- XSS attacks can steal tokens
- Browser storage is less secure than HttpOnly cookies

Why it happens:

- AuthContext stores token in localStorage

How to fix it:

- store JWT in secure HttpOnly cookie
- add backend cookie support
- handle refresh tokens properly

Better implementation:

- Use secure cookies + CSRF protection and refresh rotation.

### Problem 2: userController changePassword bug risk

What could go wrong:

- `User.findById(req.user)` may pass the decoded token object instead of a clean user id value.

Why it happens:

- protect middleware sets req.user = decoded payload object, not the full user record

How to fix it:

- use `User.findById(req.user.id)`
- compare current password with `user.matchPassword(currentPassword)` if the method exists, or use bcrypt.compare

Better implementation:

- ensure full object structure and explicit type control

### Problem 3: duplicate `isVerified` field in User schema

What could go wrong:

- accidental override confusion and maintenance issues

Why it happens:

- same field is declared twice in the schema

How to fix it:

- remove one of the duplicate declarations

Better implementation:

- keep one clean schema with clear property ordering

### Problem 4: no explicit validation library

What could go wrong:

- invalid input can bypass checks or produce unclear errors

Why it happens:

- custom validation is not centralized

How to fix it:

- use Joi, Zod, or express-validator

Better implementation:

- define validation schemas per endpoint

### Problem 5: no rate limiting on auth endpoints

What could go wrong:

- brute-force login/OTP attempts

Why it happens:

- no middleware to throttle requests

How to fix it:

- add express-rate-limit

### Problem 6: no server-managed logout

What could go wrong:

- token is still valid until expiry even after logout

Why it happens:

- frontend removes token locally, but server does not track invalidation

How to fix it:

- blacklist or token store or short expiry plus refresh rotation

### Problem 7: movie cache logic may be incomplete

What could go wrong:

- categories may not always be updated correctly
- movies saved with categories but not always in the exact desired structure

Why it happens:

- movieHelper.js sets category field as a string value in the movie document while the schema says categories: [String]
- the code also uses `category` in the movie document, but the schema defines `categories` as an array

This is a mismatch.

How to fix it:

- standardize on `categories` as the schema field, not `category`

Better implementation:

- keep a single consistent field name across code and database

### Problem 8: frontend uses alert() for user messaging

What could go wrong:

- poor UX and blocking behavior

Why it happens:

- alert() is used for success and errors

How to fix it:

- replace with toast notifications such as react-hot-toast

Better implementation:

- Add centralized toast system and real validation states

### Problem 9: route ordering and path conflicts

What could go wrong:

- route patterns may conflict if more endpoints are added later

Why it happens:

- generic route definitions could catch more specific URLs if not ordered carefully

How to fix it:

- keep specific routes before generic ones and use route grouping

### Problem 10: no tests

What could go wrong:

- bugs may reach production because there is no automated regression testing

Why it happens:

- no test suite was found in the current codebase

How to fix it:

- add unit and integration tests for auth, watchlist, and movie APIs

---

## 15. Design Decisions

### Why React?

Because the frontend is interactive, component-driven, and data-heavy. React simplifies repeated UI blocks and state updates.

### Why Node.js?

Because the project uses JavaScript across frontend and backend. This reduces context switching and makes development easier.

### Why Express?

Because it is lightweight and ideal for building REST APIs quickly. It directly matches the project’s route and controller structure.

### Why MongoDB?

Because the project stores flexible document-based data such as users, movies, and watchlist links. This is a natural fit for a movie platform.

### Why JWT?

Because the app needs stateless authentication for protected routes without storing a server-side session for each user.

### Why bcryptjs?

Because password hashing is necessary for security. Plain text is unacceptable for user data.

### Why middleware?

Because Express middleware centralizes cross-cutting concerns such as authentication and file validation.

### Why REST API?

Because the frontend and backend are separate pieces, and a REST architecture is simple and easy to reason about.

### Why this folder structure?

The project separates concerns by responsibility: routes, controllers, models, config, middleware, services, utils, and frontend pages/components.

### Why this database structure?

User, Movie, and Watchlist are separated to keep concerns clean:

- User handles identity and security
- Movie stores metadata and local cache
- Watchlist links the user to the chosen movies

### Why use TMDB?

Because the app needs a reliable and rich source of movie metadata, trailers, cast, and similar content.

### Why use Cloudinary?

Because user profile images are stored externally and securely, instead of local file systems.

### Why use localStorage for auth?

Because it is the simplest state persistence mechanism for a small project. It is not the most secure option, but it is common for quick implementations.

### Why use Mongoose schemas?

Because schemas create structure and validation rules for stored MongoDB documents.

---

## 16. Interview Questions & Answers

### Beginner

1. Question: What is CineVerse?
   Short Interview Answer: CineVerse is a movie browsing and personal watchlist application built with React and Node.js.
   Detailed Explanation: It allows users to browse movie categories, view movie details, search movies, and manage an account with authentication.
   Where in my project this is implemented: Frontend/front/src/pages/Home.jsx and Backend/controllers/movieController.js.

2. Question: What does the frontend do?
   Short Interview Answer: It renders the UI and communicates with the backend API.
   Detailed Explanation: React components fetch movie data, handle forms, and show personalized states.
   Where: Frontend/front/src/App.jsx and Frontend/front/src/services/\*.

3. Question: What does the backend do?
   Short Interview Answer: It receives API requests, validates input, interacts with MongoDB, and returns JSON responses.
   Detailed Explanation: Express controllers handle login, watchlist, and movie requests.
   Where: Backend/app.js and Backend/controllers/\*.

4. Question: What is MongoDB used for here?
   Short Interview Answer: It stores user accounts, watchlist entries, and movie metadata.
   Detailed Explanation: Mongoose models define the data structure.
   Where: Backend/models/User.js and Backend/models/Watchlist.js.

5. Question: What is a watchlist?
   Short Interview Answer: It is a personal list of movies saved by a user.
   Detailed Explanation: The backend creates a Watchlist document per user/movie pair.
   Where: Backend/models/Watchlist.js and Backend/controllers/watchlistController.js.

6. Question: What is JWT?
   Short Interview Answer: It is a token used to verify a user without sending a password on every request.
   Detailed Explanation: JWT is created at login and verified with protect middleware.
   Where: Backend/controllers/authController.js and Backend/middleware/authMiddleware.js.

7. Question: What is TMDB?
   Short Interview Answer: It is the external movie database used to fetch movie posters, details, cast, and videos.
   Detailed Explanation: The app requests movie data from TMDB through the backend.
   Where: Backend/Services/tmdbService.js.

8. Question: How does the app handle image uploads?
   Short Interview Answer: It uses Multer and Cloudinary.
   Detailed Explanation: Users upload profile images which are validated and sent to Cloudinary.
   Where: Backend/middleware/uploadMiddleware.js and Backend/controllers/userController.js.

9. Question: What is the purpose of CORS?
   Short Interview Answer: It allows the frontend domain to talk to the backend safely.
   Detailed Explanation: It is configured in Backend/app.js with allowed origins.
   Where: Backend/app.js.

10. Question: What is the role of localStorage in this app?
    Short Interview Answer: It stores the logged-in user and token in the browser.
    Detailed Explanation: This keeps the user logged in after reload.
    Where: Frontend/front/src/context/AuthContext.jsx.

### Intermediate

11. Question: Why is bcrypt used for passwords?
    Short Interview Answer: To hash and protect passwords before saving them.
    Detailed Explanation: Passwords are never stored in plain text.
    Where: Backend/controllers/authController.js.

12. Question: How does the app protect routes?
    Short Interview Answer: It uses a JWT middleware called protect.
    Detailed Explanation: The middleware reads the Authorization header and verifies the token.
    Where: Backend/middleware/authMiddleware.js.

13. Question: What is the difference between frontend routes and backend routes?
    Short Interview Answer: Frontend routes manage page navigation in React; backend routes define API endpoints.
    Detailed Explanation: Frontend routes exist in AppRoutes.jsx and backend routes exist under /api/v1.
    Where: Frontend/front/src/routes/AppRoutes.jsx and Backend/routes/\*.

14. Question: How do you fetch movies in the home page?
    Short Interview Answer: The Home page uses Promise.all to call trending, popular, top-rated, and upcoming endpoints.
    Detailed Explanation: This reduces the number of sequential waits.
    Where: Frontend/front/src/pages/Home.jsx.

15. Question: Why do you use Promise.all here?
    Short Interview Answer: To fetch multiple movie lists concurrently.
    Detailed Explanation: It speeds up page load and reduces waiting time.
    Where: Home.jsx and MovieDetails.jsx.

16. Question: What is the purpose of movieHelper.js?
    Short Interview Answer: It caches TMDB movie data into MongoDB.
    Detailed Explanation: If category data is missing locally, it fetches from TMDB and stores it.
    Where: Backend/utils/movieHelper.js.

17. Question: Why is `populate("movie")` used in watchlist logic?
    Short Interview Answer: To replace the movie ObjectId with the actual movie document.
    Detailed Explanation: This makes it easy to display movie data in the watchlist page.
    Where: Backend/controllers/watchlistController.js.

18. Question: How is search implemented?
    Short Interview Answer: The navbar sends a query to the backend, which calls TMDB search.
    Detailed Explanation: The results are displayed in a dropdown UI.
    Where: Frontend/front/src/components/Navbar/Navbar.jsx and Backend/controllers/movieController.js.

19. Question: What is a model in Mongoose?
    Short Interview Answer: A model is a JavaScript class-like wrapper for a MongoDB collection.
    Detailed Explanation: It enables queries such as User.findOne() and Watchlist.create().
    Where: Backend/models/\*.js.

20. Question: How does the app identify the logged-in user in protected APIs?
    Short Interview Answer: From the decoded JWT payload attached to req.user.
    Detailed Explanation: protect middleware sets req.user = decoded, and controllers use req.user.id.
    Where: Backend/middleware/authMiddleware.js and Backend/controllers/userController.js.

21. Question: Why did the app use MongoDB and not just local storage for users?
    Short Interview Answer: Because user and watchlist data needs persistence and real database querying.
    Detailed Explanation: localStorage is not enough for secure user storage.
    Where: Backend/models/User.js and Backend/models/Watchlist.js.

22. Question: What happens if a user forgets password?
    Short Interview Answer: The app sends an OTP to their email and lets them reset the password.
    Detailed Explanation: The backend stores resetPasswordOTP and checks expiry.
    Where: Backend/controllers/authController.js.

23. Question: Why is email verification required?
    Short Interview Answer: To confirm the user owns the email before account access.
    Detailed Explanation: The app sets isVerified = true after the matching OTP is checked.
    Where: Backend/controllers/authController.js and Backend/models/User.js.

24. Question: What does `useEffect` do in the home page?
    Short Interview Answer: It loads movies on page mount and sets the slide interval.
    Detailed Explanation: This triggers asynchronous fetches and auto-rotation of the hero banner.
    Where: Frontend/front/src/pages/Home.jsx.

25. Question: What is the purpose of `authService.js`?
    Short Interview Answer: It centralizes all frontend API requests related to authentication.
    Detailed Explanation: It keeps page components simple and separates API logic from UI logic.
    Where: Frontend/front/src/services/authService.js.

### Advanced

26. Question: Explain the architecture of the movie data caching strategy.
    Short Interview Answer: The backend first checks MongoDB for cached category movies and only falls back to TMDB when needed.
    Detailed Explanation: This reduces repeated API calls and speeds up data access.
    Where: Backend/utils/movieHelper.js.

27. Question: How does the watchlist enforce uniqueness?
    Short Interview Answer: It creates a unique compound index on user and movie.
    Detailed Explanation: A user cannot add the same movie twice.
    Where: Backend/models/Watchlist.js.

28. Question: Why did the project use `populate("movie")` instead of storing raw movie objects in watchlist?
    Short Interview Answer: It normalizes the data model and keeps the Watchlist record smaller.
    Detailed Explanation: The watchlist stores references, not duplicated movie documents.
    Where: Backend/controllers/watchlistController.js.

29. Question: How does the app avoid duplicate movie records in MongoDB?
    Short Interview Answer: It uses `tmdbId` as a unique key and upserts with `findOneAndUpdate`.
    Detailed Explanation: This prevents duplicate movie entries from different category fetches.
    Where: Backend/utils/movieHelper.js.

30. Question: What is the root cause of the userController password bug risk?
    Short Interview Answer: `req.user` is a decoded JWT payload, not an entire user object, so using `findById(req.user)` is risky.
    Detailed Explanation: The code should use `req.user.id` or decode cleanly.
    Where: Backend/controllers/userController.js.

31. Question: Why do some APIs return `success: true` and others return `response.ok` checks?
    Short Interview Answer: The backend uses a custom API response pattern, and the frontend uses both a success flag and HTTP status checks.
    Detailed Explanation: This is an inconsistency to be aware of in interviews.
    Where: Frontend/front/src/services/_ and Backend/controllers/_.

32. Question: How would you improve the security of the current auth implementation?
    Short Interview Answer: Use HttpOnly cookies, refresh tokens, rate limiting, and stronger server-side session management.
    Detailed Explanation: The current implementation stores JWT in localStorage.
    Where: Frontend/front/src/context/AuthContext.jsx and Backend/middleware/authMiddleware.js.

33. Question: What is the relationship between Movie and Watchlist?
    Short Interview Answer: Watchlist stores a reference to a Movie and a User.
    Detailed Explanation: This is a many-to-many mapping pattern implemented through a join collection.
    Where: Backend/models/Watchlist.js.

34. Question: Why is `Movie.findOneAndUpdate` used instead of just create?
    Short Interview Answer: It supports upsert logic and prevents duplicates while updating latest info.
    Detailed Explanation: This is important for TMDB data refreshes.
    Where: Backend/utils/movieHelper.js.

35. Question: Explain the difference between frontend and backend validation.
    Short Interview Answer: Frontend validation improves UX; backend validation ensures security and correctness.
    Detailed Explanation: The app does basic form validation in the UI and server-side checks in controllers.
    Where: Frontend/front/src/pages/_ and Backend/controllers/_.

36. Question: What is the main tradeoff of using a local cache for movies?
    Short Interview Answer: It reduces API calls but introduces stale data and requires synchronization logic.
    Detailed Explanation: The project stores TMDB data in MongoDB and can update it on future requests.
    Where: Backend/utils/movieHelper.js.

37. Question: Why does the app need `express.json()`?
    Short Interview Answer: To parse JSON request bodies from the frontend.
    Detailed Explanation: Without it, req.body would be undefined or empty.
    Where: Backend/app.js.

38. Question: How does the app connect to MongoDB?
    Short Interview Answer: It calls mongoose.connect(process.env.MONGODB_URI) after loading environment variables.
    Detailed Explanation: This happens during server startup.
    Where: Backend/server.js and Backend/config/db.js.

39. Question: How does the app identify a file upload request in Express?
    Short Interview Answer: The route adds upload.single("profileImage") before the controller.
    Detailed Explanation: The middleware reads the file and adds req.file.
    Where: Backend/routes/userRoutes.js and Backend/middleware/uploadMiddleware.js.

40. Question: Why is TMDB data fetched through the backend instead of directly from the frontend?
    Short Interview Answer: To hide API keys and control access to external services.
    Detailed Explanation: The frontend should not expose API keys.
    Where: Backend/Services/tmdbService.js and Frontend/front/src/services/movieService.js.

### Project-specific

41. Question: Which feature is the core of this project?
    Short Interview Answer: Movie browsing with TMDB-backed data and watchlist functionality.
    Detailed Explanation: Most of the user experience revolves around categories, search, movie details, and personal watchlist actions.
    Where: Frontend/front/src/pages/Home.jsx and Backend/controllers/movieController.js.

42. Question: What makes this project feel like a real product?
    Short Interview Answer: It has authentication, search, protected routes, profile upload, and movie detail pages.
    Detailed Explanation: It is closer to a real app than a static front-end demo.
    Where throughout the codebase.

43. Question: How was the project designed around a user journey?
    Short Interview Answer: The user enters the site, browses movies, searches, logs in, manages profile, and saves favorites.
    Detailed Explanation: All pages connect through a unified route flow and auth state.
    Where: Frontend/front/src/routes/AppRoutes.jsx and AuthContext.jsx.

44. Question: Which feature best shows full-stack integration?
    Short Interview Answer: The watchlist feature demonstrates frontend + backend + database together.
    Detailed Explanation: Frontend sends movieId, backend checks identity, MongoDB stores the relationship, and watchlist is rendered back to the UI.
    Where: Backend/controllers/watchlistController.js and Frontend/front/src/pages/Watchlist.jsx.

45. Question: Which part is the strongest example of API design in this app?
    Short Interview Answer: The movie service layer and auth routes are clean examples of structured endpoints.
    Detailed Explanation: Each route has a focused responsibility and returns JSON.
    Where: Backend/routes/_ and Frontend/front/src/services/_.

46. Question: What is the purpose of the `HeroBanner` component?
    Short Interview Answer: It creates an immersive landing experience with a rotating featured movie.
    Detailed Explanation: It combines background image, title, rating, overview, and controls.
    Where: Frontend/front/src/components/hero/HeroBanner.jsx.

47. Question: Why is the `MovieDetails` page important?
    Short Interview Answer: It acts as the conversion point from browsing to engagement with a specific movie.
    Detailed Explanation: It loads details, credits, and trailer content in parallel.
    Where: Frontend/front/src/pages/MovieDetails.jsx.

48. Question: What is the role of the profile page in this project?
    Short Interview Answer: It gives the user a secure place to manage identity and profile settings.
    Detailed Explanation: It supports profile editing, password changes, and image uploads.
    Where: Frontend/front/src/pages/Profile.jsx.

49. Question: How does the app handle navigation after login?
    Short Interview Answer: After a successful login, the frontend calls navigate("/home") and stores the token.
    Detailed Explanation: This gives the user a full logged-in experience.
    Where: Frontend/front/src/pages/Login.jsx.

50. Question: Which code is likely to be reused in another app?
    Short Interview Answer: The auth flow, protected middleware, movie service layer, and watchlist pattern are reusable.
    Detailed Explanation: These are modular patterns that can transfer to other products.
    Where throughout the project.

### Backend

51. Question: What is the backend entry point?
    Short Interview Answer: Backend/server.js starts the application and connects to the database.
    Detailed Explanation: It loads environment variables and listens on a port.
    Where: Backend/server.js.

52. Question: Why is the app split into routes and controllers?
    Short Interview Answer: It keeps endpoint definitions separate from business logic.
    Detailed Explanation: This is cleaner and easier to scale.
    Where: Backend/routes/_ and Backend/controllers/_.

53. Question: How does Express parse incoming JSON?
    Short Interview Answer: app.use(express.json()) handles JSON request bodies.
    Detailed Explanation: Without it, forms and APIs would not parse properly.
    Where: Backend/app.js.

54. Question: What is the purpose of a controller file?
    Short Interview Answer: It contains request handling logic and business rules.
    Detailed Explanation: Controllers are called by routes and talk to models.
    Where: Backend/controllers/authController.js.

55. Question: Why are environment variables used for secrets?
    Short Interview Answer: To avoid hardcoding credentials into source code.
    Detailed Explanation: This includes JWT, MongoDB, Cloudinary, TMDB, and Resend keys.
    Where: Backend/server.js and config files.

56. Question: How does the backend handle a missing file upload?
    Short Interview Answer: It checks if req.file exists and returns a 400 error.
    Detailed Explanation: This is handled in uploadProfileImage().
    Where: Backend/controllers/userController.js.

57. Question: What does `console.error()` help with?
    Short Interview Answer: It helps debug runtime errors during API requests.
    Detailed Explanation: Most controllers log error details before sending a response.
    Where: Backend/controllers/\*.js.

58. Question: Why does the backend check email uniqueness before creating a user?
    Short Interview Answer: To prevent duplicate user accounts.
    Detailed Explanation: The system queries User.findOne({ email }).
    Where: Backend/controllers/authController.js.

59. Question: What is the difference between `findOne` and `findOneAndUpdate`?
    Short Interview Answer: `findOne` reads data; `findOneAndUpdate` searches and updates, often with upsert support.
    Detailed Explanation: The movie cache uses upsert to avoid duplicate records.
    Where: Backend/utils/movieHelper.js.

60. Question: What happens when the backend needs a movie by TMDB ID?
    Short Interview Answer: It looks it up in MongoDB and uses tmdbId as the unique identity.
    Detailed Explanation: This is how watchlist entries link to movie metadata.
    Where: Backend/controllers/watchlistController.js.

### Frontend

61. Question: What is the main frontend entry point?
    Short Interview Answer: main.jsx mounts the app and wraps it in AuthProvider.
    Detailed Explanation: This gives all React pages access to auth state.
    Where: Frontend/front/src/main.jsx.

62. Question: Why is there an AuthContext?
    Short Interview Answer: It centralizes auth state across the app.
    Detailed Explanation: Users and tokens are available to any component through useAuth.
    Where: Frontend/front/src/context/AuthContext.jsx.

63. Question: How does the UI know if a user is logged in?
    Short Interview Answer: The app reads user and token from context and localStorage.
    Detailed Explanation: Navbar, Profile, and protected pages react to this state.
    Where: Frontend/front/src/context/AuthContext.jsx and Navbar.jsx.

64. Question: Why does the home page use `useEffect` twice?
    Short Interview Answer: One effect loads movie data; another rotates the hero slider.
    Detailed Explanation: One is for data fetching, one is for UI behavior.
    Where: Frontend/front/src/pages/Home.jsx.

65. Question: What is the benefit of using controlled inputs in forms?
    Short Interview Answer: The component state and UI always stay in sync.
    Detailed Explanation: This makes form logic simpler and easier to manage.
    Where: Frontend/front/src/pages/Register.jsx.

66. Question: Why are forms using `onSubmit` handlers?
    Short Interview Answer: It lets the app intercept and process the form submission cleanly.
    Detailed Explanation: This is a common React pattern for form processing.
    Where: all forms in Frontend/front/src/pages/\*.

67. Question: What is the purpose of the movie category page?
    Short Interview Answer: It displays a grid of a specific category like Popular or Trending.
    Detailed Explanation: It receives a fetchMovies function and uses it to populate state.
    Where: Frontend/front/src/pages/MovieCategory.jsx.

68. Question: Why is the navigation dropdown closed on outside click?
    Short Interview Answer: To prevent UI clutter and improve user experience.
    Detailed Explanation: A `mousedown` listener closes the menu when clicked outside.
    Where: Frontend/front/src/components/Navbar/Navbar.jsx.

69. Question: How is the search dropdown implemented?
    Short Interview Answer: It filters based on input and displays result cards with poster and title.
    Detailed Explanation: The query is debounced using setTimeout.
    Where: Frontend/front/src/components/Navbar/Navbar.jsx.

70. Question: Why is the profile image upload done as FormData?
    Short Interview Answer: Because files must be sent separately from JSON.
    Detailed Explanation: FormData is the standard way to upload binary files.
    Where: Frontend/front/src/services/userService.js.

### Database

71. Question: What does the Movie schema store?
    Short Interview Answer: TMDB movie metadata ready to display in the app.
    Detailed Explanation: This includes title, overview, poster path, rating, and category labels.
    Where: Backend/models/Movie.js.

72. Question: Why is `tmdbId` unique in the Movie model?
    Short Interview Answer: It helps avoid duplicate entries across different category requests.
    Detailed Explanation: It acts as a stable external identifier.
    Where: Backend/models/Movie.js.

73. Question: Why does the Watchlist model use ObjectId references?
    Short Interview Answer: It keeps the relationship normalized and avoids duplicating user/movie objects in each watchlist item.
    Detailed Explanation: The app later uses populate() to retrieve movie details.
    Where: Backend/models/Watchlist.js.

74. Question: What is the purpose of the index on Watchlist?
    Short Interview Answer: It enforces uniqueness per user/movie pair.
    Detailed Explanation: This prevents duplicate entries.
    Where: Backend/models/Watchlist.js.

75. Question: What are timestamps used for?
    Short Interview Answer: They record createdAt and updatedAt for each document.
    Detailed Explanation: This is useful for debugging and auditing.
    Where: all Mongoose models.

76. Question: Why store `categories` as an array?
    Short Interview Answer: A movie can belong to multiple categories like trending and popular.
    Detailed Explanation: This allows flexible tag assignment.
    Where: Backend/models/Movie.js.

77. Question: What is a `ref` field in Mongoose?
    Short Interview Answer: It tells Mongoose which collection a document relates to.
    Detailed Explanation: user and movie in Watchlist are both references.
    Where: Backend/models/Watchlist.js.

78. Question: How can you tell this app uses MongoDB as a cache for TMDB data?
    Short Interview Answer: The movie helper checks MongoDB before calling TMDB and saves the data locally.
    Detailed Explanation: It is using MongoDB as a local storage layer on top of external data.
    Where: Backend/utils/movieHelper.js.

### Authentication/Security

79. Question: What happens if the JWT secret is missing?
    Short Interview Answer: JWT signing and verification will fail or produce invalid auth flows.
    Detailed Explanation: The app depends on process.env.JWT_SECRET working correctly.
    Where: Backend/controllers/authController.js and Backend/middleware/authMiddleware.js.

80. Question: Why is email verification important?
    Short Interview Answer: It reduces fake accounts and confirms account ownership.
    Detailed Explanation: Users must confirm ownership of their email before using the rest of the app's secure features.
    Where: Backend/controllers/authController.js.

81. Question: What are the risks of storing JWT in localStorage?
    Short Interview Answer: It is vulnerable to XSS attacks.
    Detailed Explanation: An attacker with script access can read localStorage values.
    Where: Frontend/front/src/context/AuthContext.jsx.

82. Question: Why is the password reset OTP considered important?
    Short Interview Answer: It protects account recovery from being abused by attackers.
    Detailed Explanation: The backend verifies both email and OTP before allowing password changes.
    Where: Backend/controllers/authController.js.

83. Question: What is the role of `bcrypt.compare` in login?
    Short Interview Answer: It compares the submitted password with the stored hash.
    Detailed Explanation: This is how the server verifies credentials without exposing the original password.
    Where: Backend/controllers/authController.js.

84. Question: Why does the system require `Authorization: Bearer ...`?
    Short Interview Answer: Because the backend middleware expects this exact header format.
    Detailed Explanation: The middleware splits the header and extracts the token.
    Where: Backend/middleware/authMiddleware.js.

85. Question: What is the strongest part of the current security design?
    Short Interview Answer: Password hashing and JWT-protected routes are the strongest implemented protections.
    Detailed Explanation: These are the most important features the project actually has.
    Where: Backend/controllers/authController.js and Backend/middleware/authMiddleware.js.

86. Question: What is the biggest missing security feature in this project?
    Short Interview Answer: A more secure session mechanism such as HttpOnly cookies and rate limiting.
    Detailed Explanation: The current design stores JWTs in localStorage and lacks throttling.
    Where: Frontend/front/src/context/AuthContext.jsx and Backend/app.js.

### Debugging

87. Question: If login fails with `User not found`, what do you check first?
    Short Interview Answer: I would verify the email, the database record, and whether the registration flow succeeded.
    Detailed Explanation: The backend does a direct User.findOne({ email }).
    Where: Backend/controllers/authController.js.

88. Question: If watchlist requests fail with 401, what is the likely issue?
    Short Interview Answer: The frontend is not sending the Authorization header or the JWT is invalid.
    Detailed Explanation: protect middleware will reject it.
    Where: Backend/middleware/authMiddleware.js and Frontend/front/src/services/watchlistService.js.

89. Question: If a profile image upload fails, what should you examine?
    Short Interview Answer: File input, FormData keys, file type, and Cloudinary config.
    Detailed Explanation: `upload.single("profileImage")` requires the correct field name.
    Where: Backend/routes/userRoutes.js and Backend/controllers/userController.js.

90. Question: If a movie page shows no details, what is the most likely cause?
    Short Interview Answer: TMDB returned no results or the route ID is wrong.
    Detailed Explanation: The page depends on `movieId` from params or navigation state.
    Where: Frontend/front/src/pages/MovieDetails.jsx and Backend/controllers/movieController.js.

91. Question: If the app says `Invalid OTP`, what do you check?
    Short Interview Answer: I would confirm the correct email and whether the OTP expired or is mismatched.
    Detailed Explanation: The backend validates against stored OTP and expiry.
    Where: Backend/controllers/authController.js.

### Architecture

92. Question: How would you describe the project's architecture in one sentence?
    Short Interview Answer: It is a React frontend connected to an Express API that stores data in MongoDB and pulls metadata from TMDB.
    Detailed Explanation: This is a typical full-stack application pattern.
    Where: Frontend/front/src and Backend/.

93. Question: Why is backend configuration split into config files?
    Short Interview Answer: To centralize environment and service setup.
    Detailed Explanation: Cloudinary, TMDB, and DB config are separated for maintainability.
    Where: Backend/config/\*.

94. Question: What part of the app is the most maintainable?
    Short Interview Answer: The service layer and controller separation are generally maintainable.
    Detailed Explanation: UI and backend responsibilities are well separated.
    Where: Frontend/front/src/services/_ and Backend/controllers/_.

95. Question: What is the biggest structural weakness in the architecture?
    Short Interview Answer: Some auth and validation patterns are not robust enough for production.
    Detailed Explanation: localStorage token storage and manual validation are the clearest areas to improve.
    Where: AuthContext.jsx, authController.js, and middleware.

96. Question: Which feature is a good example of full-stack architecture?
    Short Interview Answer: Watchlist is a good end-to-end feature because it crosses the frontend, API, database, and authentication layers.
    Detailed Explanation: It integrates all major parts of the app.
    Where: Frontend/front/src/services/watchlistService.js and Backend/controllers/watchlistController.js.

97. Question: What would happen if the backend went offline?
    Short Interview Answer: The frontend would not be able to fetch movies or authenticate users.
    Detailed Explanation: The app depends on API availability for almost all functionality.
    Where: Frontend/front/src/services/\*.

98. Question: What is the role of the `Movie` collection beyond displaying movies?
    Short Interview Answer: It acts as a cache and a normalized data source for watchlist references.
    Detailed Explanation: Movies are saved with `tmdbId` and category labels to support repeated usage.
    Where: Backend/models/Movie.js and watchlist logic.

99. Question: Why is there no admin dashboard in the codebase?
    Short Interview Answer: It is not implemented in the current project, so there is no such functionality.
    Detailed Explanation: Not found in the current codebase.
    Where: Not found in the codebase.

100.  Question: What should you say if an interviewer asks about features not in the code?
      Short Interview Answer: I should be honest and say “Not found in the current codebase.”
      Detailed Explanation: This demonstrates careful analysis and avoids inventing features that do not exist.
      Where: This project as a whole.

---

## 17. Most Likely Interview Questions

These are the 30 questions most likely to appear after an interviewer sees this project.

1. Tell me about your project.
   Answer: CineVerse is a movie discovery and watchlist app built with React, Node.js, Express, and MongoDB. Users can browse movies, search, view details, add items to a watchlist, and create accounts with OTP verification.

2. Why did you choose the MERN stack?
   Answer: The project needed a fast UI, a REST API, and a database for users and watchlists. React and Node/Express solved the frontend/backend split, and MongoDB handled flexible movie and user data.

3. How does authentication work?
   Answer: The user logs in with email and password, the server validates the password using bcrypt, and then it returns a JWT. The frontend stores the token and sends it in the Authorization header on protected routes.

4. How does JWT help in your project?
   Answer: It allows access to protected endpoints such as profile and watchlist without sending the raw password each request.

5. What is the role of MongoDB here?
   Answer: MongoDB stores users, watchlist items, and cached movie data.

6. How are movies stored?
   Answer: Movie data is pulled from TMDB and saved in MongoDB with a unique tmdbId field, so it can be reused and cached locally.

7. What is the watchlist feature?
   Answer: A logged-in user can add or remove a movie from their watchlist. The backend checks whether the watchlist entry already exists before creating one.

8. How do you secure passwords?
   Answer: Passwords are hashed with bcrypt before saving to the database.

9. How do you handle email verification?
   Answer: The app generates a one-time OTP at registration and sends it via email. The user verifies it before account activation.

10. How does the app use TMDB?
    Answer: TMDB is the source of movie metadata, posters, credits, similar titles, and videos. The backend fetches it and exposes it through the API layer.

11. What happens in the app when a movie page loads?
    Answer: The frontend fetches movie details, credits, similar movies, and trailers in parallel and renders them on the page.

12. What is the purpose of middleware in your backend?
    Answer: Middleware handles authentication and file upload validation. It sits between the request and the controller and checks conditions such as token validity and allowed file types.

13. What is the biggest challenge in this project?
    Answer: Combining movie data, auth, and user-specific actions while keeping the API clean and secure.

14. What would you improve next?
    Answer: I would add better auth security with HttpOnly cookies, rate limiting, stricter validation, and tests.

15. Why use React Router?
    Answer: It allows navigation between pages without full page reloads and supports a SPA user experience.

16. How does the frontend know whether the user is logged in?
    Answer: The AuthContext reads the saved user and token from localStorage and exposes them to the app.

17. What are the main backend routes?
    Answer: Auth routes, user routes, movie routes, and watchlist routes.

18. What is the most important controller in this project?
    Answer: authController.js because it handles registration, login, OTP verification, and password reset.

19. Why is there a watchlist model and not just an array on user?
    Answer: Because MongoDB relationships are cleaner and allow a scalable user-to-movie mapping with uniqueness guarantees.

20. What is the `protect` middleware doing?
    Answer: It checks the Authorization header, verifies the token, and attaches the decoded user to req.user.

21. How does the frontend upload a profile image?
    Answer: It creates FormData, appends the file, sends it to the protected profile-image API, and stores the Cloudinary URL in the user object.

22. How do you handle errors in the frontend?
    Answer: I use try/catch and show alerts or render error states. I also set loading states to prevent multiple requests.

23. What is your app’s main purpose in one sentence?
    Answer: It is a full-stack movie app that helps users discover movies and manage a watchlist while keeping accounts secure.

24. What are the most important models?
    Answer: User, Movie, and Watchlist.

25. Why did you name the app CineVerse?
    Answer: It fits the movie/streaming theme and projects a cinematic identity.

26. What is a real weakness of the project?
    Answer: JWT is stored in localStorage and there are no rate limits or session invalidation controls.

27. What would you do if you had more time?
    Answer: Add testing, secure cookie auth, admin features, and better input validation.

28. How are categories cached?
    Answer: The backend checks MongoDB for category movies; if absent, it calls TMDB and stores the movie metadata locally.

29. Why is the project split into separate services and controllers?
    Answer: It keeps the code organized and isolates external API work from route logic.

30. What is your biggest interview talking point with this project?
    Answer: I can explain the full stack flow: React frontend -> Express API -> MongoDB + TMDB -> JWT auth -> protected watchlist/profile features.

---

## 18. Explain My Project Like I Am In An Interview

### 30-second version

CineVerse is a full-stack movie application built with React, Node.js, Express, and MongoDB. Users can browse trending, popular, and upcoming movies, search for titles, view details and trailers, manage a watchlist, and create a secure account with email verification and password reset. The backend uses JWT and bcrypt, while the frontend stores user auth in localStorage and renders all movie pages through React Router.

### 1-minute version

CineVerse is a movie discovery platform where users can browse movies by category, search by title, view cast details, watch trailers, and add movies to a personal watchlist. On the backend, I built Express APIs that communicate with MongoDB and TMDB. User authentication is handled with JWT and bcrypt, and the app includes registration, OTP email verification, forgot password, and reset password flows. The frontend is a React app built with Vite, and it uses localStorage to keep the user logged in. The main full-stack part of the project is the watchlist and profile system, where the frontend calls protected APIs, the server verifies the token, and data is saved and retrieved from MongoDB.

### 2-minute version

CineVerse is a movie-focused full-stack web app designed to let users discover films and manage a personal library. On the frontend, I used React with React Router and reusable components like Navbar, HeroBanner, MovieSection, and MovieCard to build a cinematic browsing experience. The user can open the homepage, explore movie categories, use the search bar, click a movie to see details, and watch a trailer. The data source for the app is TMDB, and the backend exposes APIs to fetch trending, popular, upcoming, top-rated, similar, credits, and video data.

From the backend side, I built a Node.js + Express API with routes for auth, user management, movie data, and watchlist functionality. The auth flow includes registration, email verification using OTP, login, JWT generation, forgot password, and reset password. MongoDB stores user records, movie metadata, and watchlist relationships. The app uses bcrypt for password security and JWT middleware to protect user-specific endpoints. It also supports Cloudinary-based profile image uploads and uses Mongoose models such as User, Movie, and Watchlist.

### 5-minute detailed version

I built CineVerse as a full-stack movie platform to combine a modern frontend with a real backend and data model. The front end is a React app using Vite and React Router. The flow begins on the homepage, where the app loads trending, popular, top-rated, and upcoming sections from the backend. The Navbar includes search functionality and navigation links to category pages. When a user clicks a movie, the app goes to a MovieDetails page that fetches the movie details, cast, similar movies, and trailer in parallel using Promise.all. I built reusable components like HeroBanner, MovieSection, MovieCard, CastSection, and TrailerModal to make the UI consistent and modular.

On the backend, I created Express routes and controllers for auth, movie data, watchlist, and user profile. The auth system starts with registration. The server validates input, checks for duplicate emails, hashes the password with bcrypt, generates a 6-digit OTP, and sends it through Resend. The user then verifies through the OTP endpoint. Login creates a JWT with the user ID and the secret stored in environment variables. Protected routes use a middleware called protect to read the Bearer token, verify it, and attach user info to the request.

The project also includes a MongoDB layer. The User model stores authentication and profile data, the Movie model stores TMDB-integrated movie metadata, and the Watchlist model stores user-to-movie relationships. The watchlist is implemented using a compound unique index so the same movie is not added twice for the same user. When the frontend calls the watchlist API, the server finds the movie by tmdbId, checks the relationship in MongoDB, and either creates or deletes the watchlist record. The app uses `populate("movie")` when loading user watchlists so the actual movie data is returned to the frontend.

The project also integrates with TMDB for movie data and Cloudinary for profile image uploads. For images, the API uses Multer to validate file types and size, then streams the image to Cloudinary and stores the returned URL on the user document. The app is a strong example of a practical full-stack project because it combines frontend state management, route protection, database modeling, external API integration, and user-specific functionality in one product. If I were improving it, I would add secure cookie-based auth, rate limiting, more validation, and tests.

---

## 19. Mock Interview

This is a realistic mock interview with candidate answers and follow-ups.

1. Interviewer: Tell me about your project.
   Candidate: CineVerse is a movie browsing and watchlist platform built with React, Express, and MongoDB. It helps users discover films, manage a personal watchlist, and keep secure account data.
   Follow-up: What is the biggest functionality in it?
   Candidate: The movie discovery flow and watchlist integration are core.

2. Interviewer: Why did you use React?
   Candidate: It allowed me to build reusable components and manage dynamic state for forms, search, and movie pages.
   Follow-up: What would be different without React?
   Candidate: The app would become harder to structure and maintain without component-based UI.

3. Interviewer: Why use Express?
   Candidate: Express is lightweight and ideal for REST APIs, route handling, and middleware-based protection.
   Follow-up: How do you organize routes?
   Candidate: I separate them by feature: auth, user, movie, and watchlist routes.

4. Interviewer: How does auth work in your app?
   Candidate: Users register and log in; the backend validates credentials and returns a JWT.
   Follow-up: Where is the JWT created?
   Candidate: In the login controller inside authController.js.

5. Interviewer: Why bcrypt?
   Candidate: It hashes the password before storing it so plain text is not kept in MongoDB.
   Follow-up: What if you did not hash it?
   Candidate: That would be a major security issue, especially in production.

6. Interviewer: How is the user identified later?
   Candidate: Through the JWT payload attached to req.user by the auth middleware.
   Follow-up: What does the middleware check?
   Candidate: Authorization header, Bearer format, and JWT signature.

7. Interviewer: What is the role of TMDB?
   Candidate: TMDB provides movie data such as posters, details, credits, and videos.
   Follow-up: Why not call TMDB directly from the frontend?
   Candidate: To avoid exposing API keys and keep the backend as the centralized API layer.

8. Interviewer: Explain the watchlist feature.
   Candidate: The user clicks a movie watchlist button; the frontend sends the movieId with the JWT; the backend maps it to the Movie document and adds or removes a watchlist record in MongoDB.
   Follow-up: How is duplicate watchlist entry prevented?
   Candidate: With a unique compound index on user and movie.

9. Interviewer: How do you secure profile image uploads?
   Candidate: The route uses multer with image-only validation and a 2MB limit before uploading to Cloudinary.
   Follow-up: Why Cloudinary?
   Candidate: It provides a scalable external storage service rather than local server file storage.

10. Interviewer: What is your MongoDB design?
    Candidate: I use User, Movie, and Watchlist models, with Watchlist acting as a join collection between users and movies.
    Follow-up: Why not store everything in one document?
    Candidate: Because it would make updates harder and duplicate data unnecessarily.

11. Interviewer: What is the biggest design decision you made?
    Candidate: The split between frontend pages and backend API logic was important—it keeps responsibilities clear.
    Follow-up: Why is that useful?
    Candidate: It scales better and makes debugging easier.

12. Interviewer: How did you handle OTP verification?
    Candidate: The backend generates a 6-digit OTP, stores its expiry, and sends it through email. The user submits it to verify the account.
    Follow-up: What if the OTP expires?
    Candidate: The backend rejects it with a 400 response and the user can request a new OTP.

13. Interviewer: What is the purpose of middleware here?
    Candidate: It handles shared concerns such as authentication and file validation before the controller runs.
    Follow-up: Give me an example.
    Candidate: protect middleware protects profile and watchlist routes.

14. Interviewer: What is your localStorage strategy?
    Candidate: It stores user and token data after login so the app can persist the session.
    Follow-up: What is the downside?
    Candidate: It is not as secure as HttpOnly cookies because it is accessible to JavaScript.

15. Interviewer: What does your movie cache do?
    Candidate: It stores TMDB results in MongoDB so similar category requests do not need repeated external calls.
    Follow-up: What is the key field used for deduplication?
    Candidate: tmdbId.

16. Interviewer: How do you handle API errors?
    Candidate: I use try/catch, return JSON error messages, and show alerts in the frontend.
    Follow-up: What are examples of handled errors?
    Candidate: invalid credentials, invalid OTP, expired tokens, and upload failures.

17. Interviewer: What is the strongest part of your project?
    Candidate: The full-stack integration between React frontend, Express backend, MongoDB, and external services.
    Follow-up: What is the weakest part?
    Candidate: The auth mechanism could be more secure with cookies and rate limiting.

18. Interviewer: If I ask you for a security improvement, what would you mention first?
    Candidate: Replace localStorage JWT storage with HttpOnly cookies and add rate limiting for auth endpoints.
    Follow-up: Why?
    Candidate: It reduces XSS risk and prevents brute-force abuse.

19. Interviewer: What did you learn about database design?
    Candidate: Relationships matter. The Watchlist model is a clean example of linking users to movies without duplicating too much data.
    Follow-up: Why is that important?
    Candidate: It keeps the database more normalized and easier to query.

20. Interviewer: Explain the movie details page.
    Candidate: The page reads the movie id from route params, fetches details, cast, trailers, and similar movies in parallel, and renders them in one screen.
    Follow-up: Why parallel fetches?
    Candidate: To reduce the user wait time.

21. Interviewer: What does `Promise.all` do here?
    Candidate: It runs several async requests simultaneously and waits for all of them before rendering.
    Follow-up: Where is it used?
    Candidate: In Home.jsx and MovieDetails.jsx.

22. Interviewer: What is your biggest technical bug risk in the code?
    Candidate: The password change logic risks passing an object to `findById` rather than a clean user id value.
    Follow-up: How would you fix it?
    Candidate: Use `req.user.id` and ensure the JWT payload is the correct format.

23. Interviewer: What is a code smell you noticed?
    Candidate: The User schema contains duplicate `isVerified` fields.
    Follow-up: How would you fix it?
    Candidate: Remove the duplicate declaration and keep a single field definition.

24. Interviewer: What if a user does not have a trailer?
    Candidate: The app checks trailer results and sets the trailerKey only if a YouTube trailer exists; otherwise it leaves it empty.
    Follow-up: What does the UI do then?
    Candidate: The trailer button still shows, but the video may not open if the trailer is missing.

25. Interviewer: Why are environment variables important?
    Candidate: They keep secrets and credentials out of code. Without them, MongoDB, JWT, TMDB, Cloudinary, and email services would not work.
    Takeaway: They are essential to production deployment.

26. Interviewer: What is the role of the/navbar search?
    Candidate: It sends a query to the backend search API and renders matching movies in a dropdown.
    Follow-up: Why is it good UX?
    Candidate: It makes discovery faster and reduces manual browsing.

27. Interviewer: How does the app manage profile updates?
    Candidate: The profile page stores form state in React, submits it to the backend, and updates the user object after success.
    Follow-up: Is the email editable?
    Candidate: In the UI, it is read-only, which is intentional for stability.

28. Interviewer: Why is the project not just a static site?
    Candidate: It has real backend logic, database access, and user-specific flows.
    Follow-up: What makes it full-stack?
    Candidate: The separation of frontend, API, and database operations.

29. Interviewer: What would you say in your final interview summary?
    Candidate: I built a movie discovery app with auth, profile management, watchlist functionality, TMDB integration, and MongoDB-backed data flows. It demonstrates practical full-stack development and API integration.
    Follow-up: What is your strongest point?
    Candidate: I can explain how the full request lifecycle works from frontend to backend to database and back.

30. Interviewer: If asked about unsupported features, how do you respond?
    Candidate: I say “Not found in the current codebase,” because I do not invent functionality that is not implemented.
    Follow-up: Why is that good?
    Candidate: It shows honesty and technical accuracy in an interview.

---

## 20. Rapid Revision Sheet

### Project purpose

CineVerse is a movie browsing and personal watchlist app built with the MERN stack.

### Tech stack

Frontend:

- React
- Vite
- React Router
- Tailwind CSS

Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs

Third-party services:

- TMDB API
- Cloudinary
- Resend

### Architecture

Frontend React app -> fetch APIs -> Express backend -> MongoDB + TMDB -> JSON response -> UI updates

### Important APIs

- POST /api/v1/auth/register
- POST /api/v1/auth/login
- POST /api/v1/auth/verify-email
- POST /api/v1/auth/forgot-password
- POST /api/v1/auth/reset-password
- GET /api/v1/movies/trending
- GET /api/v1/movies/popular
- GET /api/v1/movies/top-rated
- GET /api/v1/movies/upcoming
- GET /api/v1/movies/search
- GET /api/v1/movies/:id
- POST /api/v1/watchlist/
- GET /api/v1/watchlist/

### Important models

- User
- Movie
- Watchlist

### Authentication flow

User enters login details -> backend checks password hash -> JWT created -> frontend stores it -> protected routes verify token -> req.user is used for identity

### Important concepts

- async/await
- Promise.all
- JWT
- bcrypt
- middleware
- Mongoose schema and model
- REST API
- populate
- FormData for file upload
- localStorage

### Most important interview answers

- This project is a full-stack movie discovery app with auth and watchlists.
- It uses React on the frontend and Express on the backend.
- TMDB provides movie data; MongoDB stores user and watchlist information.
- JWT and bcrypt provide authentication and secure password storage.
- The project demonstrates end-to-end flow from frontend request to backend processing and database retrieval.

---

## 21. Final Knowledge Checklist

Use this checklist before the interview:

[ ] I understand registration
[ ] I understand login
[ ] I understand JWT
[ ] I understand middleware
[ ] I understand API flow
[ ] I understand database models
[ ] I understand frontend API calls
[ ] I understand watchlist
[ ] I understand error handling
[ ] I can explain every major feature
[ ] I understand how TMDB is integrated
[ ] I understand how Cloudinary uploads work
[ ] I understand why MongoDB is used
[ ] I understand the difference between frontend and backend routes
[ ] I understand how OTP verification works
[ ] I understand how password reset works
[ ] I understand how protected routes are implemented
[ ] I can explain the full request lifecycle
[ ] I can explain localStorage vs token security trade-offs
[ ] I can talk about missing security protections honestly
[ ] I can speak about the real weaknesses in the project
[ ] I understand what is not implemented in this codebase
[ ] I can explain the watchlist relationship between User and Movie
[ ] I can explain React state and useEffect usage
[ ] I can explain how the movie cache works
[ ] I can describe where my code would need improvement for production

---

# WHAT I MUST KNOW BEFORE MY INTERVIEW

Memorize these points:

1. Project name and purpose: CineVerse is a movie discovery and watchlist platform.
2. Full stack: React frontend + Express backend + MongoDB + TMDB + Cloudinary.
3. Authentication flow: register -> hash password -> send OTP -> verify OTP -> login -> JWT -> protected routes.
4. Watchlist flow: user sends movieId -> backend resolves movie -> unique watchlist record -> populate movie -> UI renders watchlist.
5. TMDB integration: external movie data source for details, posters, trailers, credits, and similar movies.
6. Important models: User, Movie, Watchlist.
7. Backend protection: protect middleware verifies JWT and attaches req.user.
8. Frontend auth handling: AuthContext + localStorage holds user and token.
9. Strongest backend features: secure password hashing, OTP, JWT-protected routes, MongoDB models.
10. Biggest weaknesses: localStorage JWT, no rate limiting, no cookie-based auth, no refresh-token rotation, no tests, some schema and password-change inconsistencies.
11. Key rule in interview: say “Not found in the current codebase” when asked about features that are not implemented.
12. Most important explanation to practice: “How does a request flow from the React frontend to the Express API to MongoDB and back?”

If you are asked: “Explain this part of your project,” answer with:

- what it does
- why it was built
- where it is implemented
- how it flows end-to-end
- what the key files are
- what the security or risk considerations are

This is the most important interview habit for this project.
