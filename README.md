# Node.js Warmerise-Bot
It is an application that communicates with the Discord API and retrieves profile data and matchmaking data from the game Warmerise.

## 🛠️ Getting Started

#### Step 1: Initial Setup
- Clone the repository: `git clone https://github.com/AysKrimn/WM-BOT.git`
- Navigate to root folder
- Install dependencies: `npm ci`

#### Step 2: ⚙️ Environment Configuration
- Create `.env` in the root folder this will be used for your production settings
- Create `.env.local` in the root folder this will be used for your local development settings
- Fill in necessary environment variables sample can be found in `.env.template`

#### Step 3: 🚀 Running the Project
- Development Mode: `docker-compose -f docker-compose.dev.yml up --build -d`
- Production Mode: `docker-compose up --build -d`


## 💡 Docker Compose Useful Commands

```
  For local development mode
```

| Command | Description |
| :-------- | :------- | 
| `docker-compose -f docker-compose.dev.yml build`  | Build the project |
| `docker-compose -f docker-compose.dev.yml up`  | Starts the project |
| `docker-compose -f docker-compose.dev.yml down`  | Stops the project |
| `docker-compose -f docker-compose.dev.yml watch`  | Auto build when you save file |

```
  For production mode
```

| Command | Description |
| :-------- | :------- | 
| `docker-compose build`  | Build the project |
| `docker-compose  up`  | Starts the project |
| `docker-compose  down`  | Stops the project |

<hr>

![](image/img.png)
