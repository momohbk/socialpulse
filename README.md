# SocialPulse

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![MIT](https://img.shields.io/badge/License-MIT-green.svg)

> **Unified social media analytics dashboard aggregating data from Instagram, Twitter, LinkedIn, and TikTok with AI-generated insights and custom report builder.**

## Key Features

- **Multi-Platform Analytics** — Aggregate metrics from Instagram, Twitter, LinkedIn, and TikTok in a single dashboard.
- **AI-Generated Insights** — Automatically surface trends, anomalies, and content recommendations powered by AI.
- **Custom Report Builder** — Drag-and-drop report builder with exportable PDF and CSV reports.
- **Real-Time Sync** — Live data updates via Firebase Firestore with offline support.
- **Engagement Tracking** — Monitor likes, shares, comments, impressions, and follower growth over time.
- **Team Collaboration** — Role-based access control with shared workspaces and comment threads.
- **Scheduled Reports** — Automate recurring reports delivered via email or Slack.
- **Dark / Light Mode** — Fully themed UI with persistent preference.

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 18, Vite, Redux Toolkit, React Router v6 |
| UI       | Recharts, Lucide React, CSS Modules |
| Forms    | React Hook Form, Date-fns |
| Backend  | Firebase (Auth, Firestore, Functions, Hosting) |
| CI/CD    | GitHub Actions |

## Screenshots

![Dashboard Overview](screenshots/dashboard.png)
![Analytics View](screenshots/analytics.png)
![Report Builder](screenshots/reports.png)

## Installation

```bash
# Clone the repository
git clone https://github.com/momohbk/socialpulse.git
cd socialpulse

# Install dependencies
npm install

# Start development server
npm run dev
```

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Create a new project (or select existing).
3. Enable **Authentication**, **Firestore Database**, and **Cloud Functions**.
4. Register a web app and copy the Firebase config object.
5. Create `src/config/firebase.local.js` (it is gitignored):

```js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

6. Update `src/config/firebase.js` to import from the local config (or set environment variables).

## Project Structure

```
socialpulse/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   │   └── firebase.js
│   ├── hooks/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Analytics.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       ├── analyticsSlice.js
│   │       └── authSlice.js
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── firebase.json
├── index.html
├── LICENSE
├── package.json
└── vite.config.js
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
