# Peregrine — Book Borrowing Platform

## 📚 Project Name

**Peregrine**

Peregrine is a modern book borrowing and library management web application built with **Next.js**. Users can explore books by category, search for books, view detailed book information, create an account, log in securely, manage their profile, and borrow books.

---

## 🌐 Live URL

**Live Website:**
https://your-project-name.vercel.app

---

## 🎯 Purpose

The purpose of Peregrine is to provide a simple and user-friendly online platform where users can discover books, explore different categories, view detailed information about books, and manage their borrowing activities.

The application also includes authentication and profile management so that users can securely access personalized features.

---

## ✨ Key Features

### 🔐 Authentication

- User registration
- User login and logout
- Google authentication
- Secure session handling using Better Auth
- Protected user-specific pages
- Automatic display of logged-in user's name
- Authentication-aware navigation

### 📖 Book Browsing

- Browse all available books
- Featured Books section
- Popular Books section
- Book categories
- Category-based filtering
- Search books by title or relevant information
- Book cards with:
  - Cover image
  - Title
  - Author
  - Rating
  - Details button

### 📕 Book Details

- Dedicated details page for each book
- Book cover
- Book title
- Author information
- Available quantity
- Rating
- Detailed book description
- Borrow Book button
- View all books from the same category

### 👤 User Profile

- Personalized profile page
- Display user's name and email
- Profile picture
- Update profile information
- Update profile picture URL
- User-specific account information

### 🧭 Navigation

- Home
- All Books
- My Profile
- Login / Logout
- Responsive navigation structure

### 🏠 Home Page

- New Arrivals / Latest Books
- Featured Books
- Popular Books
- Membership information
- How Membership Works section
- Footer with navigation and social links

### 📱 User-Friendly Interface

- Clean and modern library-style UI
- Responsive layout
- Card-based book presentation
- Category navigation
- Search interface
- Interactive buttons and navigation
- Consistent color scheme and typography

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **DaisyUI**
- **MongoDB**
- **Better Auth**
- **React Icons**

---

## 📦 NPM Packages Used

The project uses the following major npm packages:

- `next` — React framework for building the application
- `react` — UI library
- `react-form-hook` — form management
- `better-auth` — Authentication and session management
- `mongodb` — MongoDB database integration
- `react-icons` — Icons used throughout the interface
- `tailwindcss` — Utility-first CSS framework
- `daisyui` — UI component library for Tailwind CSS
- `react-fast-marquee` — Used for scrolling/marquee content

---

## 📂 Main Functional Pages

| Page                    | Description                |
| ----------------------- | -------------------------- |
| `/`                     | Home page                  |
| `/login`                | User login                 |
| `/registration`         | New user registration      |
| `/all-books`            | Browse all books           |
| `/all-books/[category]` | Browse books by category   |
| `/books/[id]`           | Individual book details    |
| `/profile`              | User profile               |
| `/update-profile`       | Update profile information |

---

## 🔎 Book Categories

The application currently supports categories such as:

- Story
- Tech
- Science
- Philosophy
- History

---

## 🔑 Authentication

Authentication is implemented using **Better Auth** with support for:

- Email/password authentication
- Google authentication
- Session management
- User account information
- Protected routes

User information is stored and managed through **MongoDB**.

---

## 💾 Data Management

Book information is maintained using JSON data, while authentication and user-related information are handled through MongoDB and Better Auth.

The application separates book browsing functionality from user authentication and profile management to keep the project organized and maintainable.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd your-project-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file and add the required environment variables for MongoDB, Better Auth, and Google authentication.

Example:

```env
AUTH_DB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> Do not commit `.env.local` or any secret credentials to GitHub.

### 5. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## ☁️ Deployment

The project can be deployed using **Vercel**.

Before deploying, make sure the required environment variables are added to the Vercel project settings.

---

## 📌 Project Highlights

Peregrine demonstrates practical implementation of:

- Next.js App Router
- Client and server-side functionality
- User authentication
- Google OAuth
- MongoDB integration
- Protected user pages
- Dynamic book details
- Category filtering
- Search functionality
- User profile management
- Responsive UI design
- Reusable React components
- Tailwind CSS styling

---

## 👨‍💻 Developer

**Peregrine — Book Borrowing Platform**

Built as a modern web application using Next.js, React, MongoDB, and Better Auth.

---

## 📄 License

This project is developed for educational and portfolio purposes.
