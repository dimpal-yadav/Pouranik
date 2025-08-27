# 📚Pouranik - Read. Share. Connect.

A cozy digital library and community corner for every reader.
Discover books, join reading circles, track your goals, and share your love for stories, all in one open-source platform.

---

## What's Pouranik?

**Pouranik** is an open-source book exploration and reading habit platform designed for people who believe books are more than just words, they’re experiences.
Whether you love self-help, fantasy, biographies, technology, or ancient literature, **Pouranik** is your place to connect with stories and people who share your passion..

---

## Why the name **"Pouranik"**?

The word **Paurāṇika** comes from Sanskrit, meaning **ancient, mythical, or timeless.**

We chose this name because stories, whether from ancient scriptures or modern fiction, are timeless.  
**Pouranik** is built on that idea: to help people connect with the magic of reading, share thoughts, and grow together through books.

---

## Features

- **Book Search** – Explore titles from Google Books and Open Library APIs
- **Genre-based Browsing** – Fiction, Self-Help, Technology, and more
- **Book Detail Pages** – Summaries, ratings, and user reviews
- **Community Reviews** – Share and read opinions from other readers
- **Book Clubs & Groups** – Build your own reading circles
- **Reading Goals & Timer Tracker** – Stay on track with your habits
- **User Profiles & Shelves** – Organize books as To-Read, Currently Reading, or Finished
- **Language & Accessibility Support** – For a global community
- **Coming Soon** **– Real-time group messaging, event planning for clubs, and more**

Want to help bring these features to life? **Scroll to the contributions section!**

---

## Why Pouranik is Unique
- **More than a Library**– It’s a community-driven reading journey.
- **Social Reading Experience** – Book clubs, group chats, and collaborative goals.
- **Sustainable Reading** – Buy/sell second-hand books, reducing waste.
- **Habit Tracking Built-in** – Integrated timers and progress tracking to help you finish books.
- **Inclusive for All** – Multi-language support and accessibility-first design.

---

## Future Scope
* AI-powered Book Recommendations based on your reading patterns.
* Gamified Reading Challenges with badges and leaderboards.
* Event Scheduling for online/offline book discussions.
* Integration with E-Readers for direct progress syncing.
* Advanced Search & Filters (by author, publication date, ratings).
* Personalized Feed showing updates from your groups and interests.
* Voice Book Reviews for accessibility and engagement.

---

## Tech Stack

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Frontend | React + Tailwind CSS               |
| API      | Google Books API / OpenLibrary API |
| Backend  | Node.js + Express (planned)        |
| Database | MongoDB / Firebase (planned)       |
| Hosting  | Vercel / Render                    |

---
## 📂 Project Structure

```
Pouranik/
├── .github/                     
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── custom.md
│   │   └── feature_request.md
│   └── workflows/
│       ├── cicd.yaml
│       ├── greetings.yaml
│       └── update_contributors.yaml
├── backend/                     
│   ├── Controllers/             
│   │   ├── book.controller.js
│   │   ├── genbook.controller.js
│   │   ├── review.controller.js
│   │   └── user.controller.js
│   ├── DBConfig/                # Database connection logic
│   │   └── dbConnect.js
│   ├── Middlewares/             # Authentication and middleware logic
│   │   └── auth.js
│   ├── Models/                  # Mongoose schemas/models
│   │   ├── bookrev.model.js
│   │   └── user.model.js
│   ├── Routes/                  # API route definitions
│   │   ├── books.route.js
│   │   ├── genbook.route.js
│   │   ├── index.js
│   │   ├── reviews.route.js
│   │   └── user.route.js
│   ├── .env.example
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
frontend/
├── public/                               # Public static files
├── src/                                  # Source code root
│   ├── assets/                           # Images, icons, and animation assets
│   │   ├── _animation/                   # Animation JSON/Lottie files
│   │   ├── book-club.png
│   │   ├── cover.png
│   │   ├── fantasy.png
│   │   ├── mystery.png
│   │   ├── react.svg
│   │   ├── romance.png
│   │   ├── science-fic.png
│   │   └── young-adult.png
│   ├── components/                       # Reusable React components
│   │   ├── _global/                      # Common app-wide components
│   │   ├── Library_components/           # UI elements for user library/book management
│   │   ├── ReadingTracker/               # Reading tracking components
│   │   ├── Reviews/                      # Book review display/form components
│   │   ├── AuthForm.jsx
│   │   ├── AuthorRecommendation.jsx
│   │   ├── BookCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoBookFound.jsx
│   │   ├── NoCover.jsx
│   │   ├── Pagination.jsx
│   │   ├── QuickFilters.jsx
│   │   ├── SearchAutocomplete.jsx
│   │   ├── SortAndFilterControls.jsx
│   │   └── TourOverlay.jsx
│   ├── pages/                            # Top-level route/page components
│   │   ├── about.jsx
│   │   ├── AISummarySection.jsx
│   │   ├── AnalyticsPage.jsx
│   │   ├── BookDetail.jsx
│   │   ├── club.css
│   │   ├── ClubPage.jsx
│   │   ├── community.css
│   │   ├── Community.jsx
│   │   ├── Explore.jsx
│   │   ├── Explore.module.css
│   │   ├── Genres.css
│   │   ├── Genres.jsx
│   │   ├── Home.jsx
│   │   ├── Library.jsx
│   │   ├── Reviews.jsx
│   │   ├── SignIn.jsx
│   │   └── TimerPage.jsx
│   ├── routes/                           # App-level routing configuration
│   │   └── AppRoutes.jsx
│   ├── services/                         # Network/API service modules
│   │   ├── AISummaryService.js
│   │   ├── bookService.js
│   │   └── tokenRefresher.js
│   ├── utils/                            # Utility/helper functions
│   │   └── filterPreferences.js
│   ├── App.css                           # Global app CSS
│   ├── App.jsx                           # Root React app component
│   ├── index.css                         # Additional global CSS
│   ├── main.jsx                          # React/Vite entry point
│   └── .env.example                      # Example env variables for frontend
├── .env.example                          # Project-wide env config example
├── .gitignore                            # Git ignore rules (frontend)
├── .nmrc                                 # Node version manager config
├── eslint.config.js                      # ESLint configuration
├── index.html                            # Main HTML file for Vite build
├── package-lock.json                     # NPM lock file
├── package.json                          # NPM dependencies/scripts
├── README.md                             # Frontend documentation
├── SETUP.md                              # Setup instructions
├── tailwind.config.js                    # Tailwind CSS configuration
├── vercel.json                           # Vercel deployment configuration
├── vite.config.js                        # Vite build configuration

├── pr_artifacts/                # PR-specific assets
│   └── (pr_#116/)
├── .gitignore
├── API_KEY_SETUP_GUIDE.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── contributors.png
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── SECURITY.md
└── setup.sh

```
---

## 🤝 How to Contribute
Pouranik welcomes book lovers, devs, and designers!  
Bug fixes, features, UI polish—you help us grow.

Start here:  
<a href="https://github.com/BhaktiMore18/Pouranik/blob/main/CONTRIBUTING.md">
<strong>Contribute to Pouranik →</strong>
</a>

---

### 🙌 **Thank You, Contributors!**
> Thank you once again to all our contributors! Your efforts are truly appreciated. 💖👏
<a href="https://github.com/bhaktimore18/pouranik/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bhaktimore18/Pouranik" />
</a>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

##  Maintainers

- Maintained with ❤️ by the **Pouranik Core Team**  
  Lead: [@bhaktimore18](https://github.com/BhaktiMore18)

---

##  Inspired By...

Every reader who ever felt seen in a story. Let's build this platform for curious minds across the world.

---

>  If you like this project, consider giving it a star and sharing it with friends!

<p align="center">
  <a href="#top" style="font-size: 18px; padding: 8px 16px; display: inline-block; border: 1px solid #ccc; border-radius: 6px; text-decoration: none;">
    ⬆️ Back to Top
  </a>
</p>

