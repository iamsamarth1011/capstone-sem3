# 🚀 Finora – AI-Powered Finance Management Platform

Finora is a full-stack personal finance management system designed to simplify expense tracking, automate insights, and help users make smarter financial decisions. The platform will include AI-powered receipt scanning, analytics, charts, and subscription plans — but currently, the **JWT Authentication system** has been implemented.

---

## 📌 Current Project Status

🎯 **Completed:**  
✔ User Signup & Login APIs  
✔ Password hashing using bcrypt  
✔ JWT-based Authentication & Protected Routes  
✔ MongoDB User Storage  
✔ Postman-tested APIs

🛠 **Upcoming Features:**  
AI-powered receipt scanning, transaction CRUD, reporting dashboards, Stripe subscriptions, CSV import, and more.

---

## 🧠 Problem Statement

Managing income and expenses manually is inefficient, error-prone, and time-consuming. People often struggle to:

- Track spending habits
- Categorize expenses properly
- Analyze financial trends
- Maintain receipts securely

**Finora** solves these challenges by offering an AI-driven platform that will automate financial tracking and give personalized insights to support better financial decisions.

---

## 🏗 System Architecture

```
Frontend  →  Backend API  →  MongoDB Database
```

| Layer      | Tech Stack |
|------------|------------|
| Frontend   | React.js, TailwindCSS (Planned) |
| Backend    | Node.js, Express.js |
| Database   | MongoDB Atlas |
| Auth       | JWT-based authentication |
| AI (Upcoming) | Google Gemini API |
| Payments (Upcoming) | Stripe API |
| Hosting (Planned) | Vercel + Render |

---

## 🔐 Authentication Features (Implemented)

| Feature | Description |
|--------|-------------|
| User Registration | Create account using name, email, password |
| Login | Verify credentials and generate JWT |
| Password Hashing | Secure hashing via bcrypt |
| Protected Routes | Middleware to validate tokens |

---

## 📡 API Endpoints (Implemented)

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/signup` | POST | Register a new user | Public |
| `/api/auth/login` | POST | Authenticate and return JWT token | Public |
| `/api/user/profile` *(optional if created)* | GET | Fetch logged-in user details | Auth Required |

---

## 🧪 Testing with Postman

1. Run the server
2. Test Signup:
   - `POST /api/auth/signup`
   - Body (JSON):
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "mypassword"
     }
     ```
3. Test Login:
   - `POST /api/auth/login`
   - Body (JSON):
     ```json
     {
       "email": "john@example.com",
       "password": "mypassword"
     }
     ```
4. Use returned JWT token in `Authorization → Bearer Token` to access protected routes.

---

## 📁 Project Structure

```
finora-backend/
│
├─ src/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  └─ server.js
│
├─ .env
├─ package.json
└─ README.md
```

---

## ⚙ Environment Variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ▶ Running the Backend

```bash
# Clone repository
git clone https://github.com/yourusername/finora.git

# Navigate
cd finora-backend

# Install dependencies
npm install

# Start server
npm run dev
```

---

## 📌 Roadmap (Next Steps)

| Priority | Feature |
|---------|---------|
| 🔜 | CRUD for transactions |
| 🔜 | Filters, sorting & pagination |
| 🔜 | AI receipt scanning (Google Gemini) |
| 🔜 | Monthly AI-generated report |
| 🔜 | Expense visualization charts |
| 🔜 | CSV Import transactions |
| 🔜 | Recurring payments (Cron jobs) |
| 🔜 | Stripe Subscription/Upgrade |
| 🔜 | Deploy to cloud |

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📜 License

MIT License © 2025 Your Name

---

## ⭐ Support the Project

If you like the project, please ⭐ star the repo and share feedback!
