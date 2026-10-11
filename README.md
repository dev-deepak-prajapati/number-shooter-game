# 🎮 Number Shooter Game

A lightweight, browser-based interactive mini-game built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Test your speed and reflexes by matching target numbers before the timer runs out!

---

## ✨ Features

- **Dynamic Number Grid:** Automatically generates 25 random number circles on every round.
- **Timed Gameplay:** 60-second countdown challenge that keeps players on their toes.
- **Score Tracking:** Earn 10 points for every successful match.
- **Interactive Game Over Screen:** Displays your final score with an instant restart button.
- **Modern UI/UX:** Clean, card-based layout styled with CSS Flexbox, custom box shadows, and Google Fonts (`Poppins`).

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup structure.
- **CSS3:** Custom styling, layout design using Flexbox, and responsive media queries.
- **JavaScript (ES6+):** DOM manipulation, event delegation, timer management via `setInterval`, and random number generation logic.

---

## 🚀 Getting Started

To run this project locally on your machine, follow these simple steps:

1. **Clone or Download** this repository to your local computer.
2. Ensure you have the following three files in the same directory:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern web browser (or use the **Live Server** extension in VS Code for hot-reloading).

---

## 🕹️ How to Play

1. Look at the **Target** number displayed in the top header.
2. Scan the grid of circles below and click the circle that matches the **Target** number.
3. Every correct match increases your **Score** by 10 points and instantly generates a new target and number grid.
4. Try to score as high as possible before the **Time** runs out!
5. Click **Restart** on the Game Over screen to play again.

---

## 📂 Project Structure

```text
number-shooter-game/
│
├── index.html    # Main HTML structure
├── style.css     # Styling, layouts, and animations
└── script.js     # Game logic, timer, score, and event listeners
