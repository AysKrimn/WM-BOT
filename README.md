# Node.js Warmerise-Bot
It is an application that communicates with the Discord API and retrieves profile data and matchmaking data from the game Warmerise.

## 🛠️ Getting Started

#### Step 1: Initial Setup
- Clone the repository: `git clone https://github.com/AysKrimn/Warmerise-Bot.git`
- Navigate: `cd warmerise-bot`
- Install dependencies: `npm ci`

#### Step 2: ⚙️ Environment Configuration
- Create `.env` to `docker/production` this will be used for your production settings
- Create `.env.dev` to `docker/development` this will be used for your local development settings
- Fill in necessary environment variables

#### Step 3: 🚀 Running the Project
- Development Mode: `docker-compose -f docker-compose.dev.yml up --build -d`
- Production Mode: `docker-compose up -d --build `

<hr>

![](image/img.png)
