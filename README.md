# 🎉 Event Registration Portal (Frontend Only)

A simple and elegant event registration portal built using **React (Vite)** and **EmailJS**, designed for clubs or organizations to display events and collect registrations **without any backend**.

---
## Youtube Link
[text](https://youtu.be/Pn9vw-C_MHs)

## 🚀 Features

✅ Display upcoming events with images, descriptions, and venue details  
✅ Register button opens a **modal form** for registration  
✅ Sends registration details (name, email, team name, event) via **EmailJS**  
✅ Shows success or error messages after form submission  
✅ Clean, responsive UI built with **Tailwind CSS**

---

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Create a .env File (in the project root)
Add your EmailJS credentials (you’ll get these from https://www.emailjs.com):

ini
Copy code
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
⚠️ Make sure your variable names start with VITE_ — Vite only exposes those to the frontend.

📧 EmailJS Setup
Create a free account on EmailJS

Create a new service (e.g. Gmail or Outlook)

Create an email template — include variables like:

nginx
Copy code
from_name
email
team_name
event_name
Copy the Service ID, Template ID, and Public Key into your .env file.

▶️ Run the App
Start the local development server:

bash
Copy code
npm run dev
Then open your browser and go to:

arduino
Copy code
http://localhost:5173
🧩 Tech Stack
⚛️ React + Vite

💨 Tailwind CSS

✉️ EmailJS

🧠 React Hooks (useState, props)