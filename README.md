
# Tic-Tac-Toe

A responsive two-player Tic-Tac-Toe web application built with React, JavaScript, and CSS. This project was developed as part of the CoLearn Software Engineer Internship technical assessment.

## Overview

The application allows two players to compete on a 3x3 board, automatically detects winning combinations and draws, and tracks scores across multiple rounds.

The project focuses on clean game logic, efficient state management, and a responsive user interface.

## Features

- Local two-player gameplay
- Automatic player turn switching
- Winner and draw detection
- Prevention of invalid moves
- Real-time scoreboard
- Restart game without losing scores
- Reset scoreboard
- Responsive desktop and mobile layout
- Accessible game controls

## Tech Stack

- React
- JavaScript (ES6+)
- CSS3
- Vite
- Vercel (Deployment)

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chipmunk17/tic-tac-toe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tic-tac-toe
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

## Implementation Highlights

- React useState for managing the game board, player turns, and scores.
- Immutable state updates using the spread operator.
- Derived values for winner and draw detection.
- Functional state updates for reliable score tracking.
- CSS Grid, Flexbox, and media queries for responsive design.

## Live Demo

Coming soon.

## Author

Alvin Lawrence
