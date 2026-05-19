# 🎓 EduBot - AI College Enquiry Chatbot

![EduBot Preview](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-HTML5_|_CSS3_|_Vanilla_JS-blue?style=for-the-badge)

EduBot is a sleek, responsive, and intelligent frontend web application designed to act as a virtual assistant for **People University**. It instantly provides users with comprehensive details about admissions, courses, fee structures, hostel accommodations, scholarships, and campus facilities.

## ✨ Features

- **⚡ Instant Responses:** Real-time query resolution without any backend delays.
- **🧠 Keyword-Based Intent Detection:** Smartly analyzes user input to provide the most relevant answers from its Knowledge Base (KB).
- **📱 Fully Responsive Design:** Beautifully crafted UI that works flawlessly on desktop, tablet, and mobile devices.
- **🎨 Modern Glassmorphism UI:** Features an aesthetically pleasing dark-mode interface with ambient glowing orbs, micro-animations, and dynamic sidebars.
- **📊 Contextual Info Panel:** A dynamic right-hand panel that automatically updates with "Quick Reference" stats based on the topic being discussed.
- **💬 Quick Reply Chips:** Interactive suggestion chips to guide users through common questions effortlessly.

## 🛠️ Technology Stack

- **HTML5:** Semantic structuring and accessibility.
- **CSS3:** Custom properties (variables), Flexbox/Grid layouts, glassmorphism effects, and CSS animations. 
- **Vanilla JavaScript:** DOM manipulation, event handling, and a custom lightweight NLP intent detection system. No external libraries or frameworks were used!

## 🚀 Live Demo

*(Note: Add your GitHub Pages link here once hosted! Example: [Live Demo](https://yourusername.github.io/College-Chatbot))*

## 💡 How It Works

The chatbot uses a localized Knowledge Base (`KB`) object containing predefined intents (`admissions`, `courses`, `btech`, `mba`, `fees`, etc.). When a user submits a message, the `detectIntent()` function scans the input for matching keywords and assigns a score. The bot then replies with the highest-scoring intent's HTML response and triggers the contextual info panel.

## 📂 Project Structure

- `index.html`: The core layout, sidebar navigation, chat window, and info panel.
- `style.css`: All aesthetic styles, responsive media queries, and animations.
- `script.js`: The chatbot logic, Knowledge Base data, and DOM event listeners.

## 👨‍💻 Local Setup

Since this is a completely static project, no complex environment setup is required!
1. Clone the repository to your local machine.
2. Open the folder.
3. Simply double-click `index.html` to open it in your default web browser.

---
*Designed & Developed with ❤️ for improving student experiences.*
