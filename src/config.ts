import dotenv from "dotenv";
import createCookieString from "./utils/createCookieString";
import loadEnviroment from "./loader/enviroment";

const env = process.env.NODE_ENV;

loadEnviroment(env || "development");

if (!process.env.MONGO_URI) {
  throw new Error("Database connection is not set");
}

if (!process.env.DISCORD_TOKEN) {
  throw new Error("Discord token is not set");
}

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("Discord client id is not set");
}

if (!process.env.APPAUTHOR_ID) {
  throw new Error("App author id is not set");
}

if (!process.env.PHPSESSID) {
  console.warn("PHPSESSID is not set");
}

const config = {
  status: {
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
  },

  db: {
    uri: process.env.MONGO_URI,
  },
  warmerise: {
    urls: {
      base: process.env.DOMAIN,
      profile: process.env.DOMAIN + "/profile",
      members: process.env.DOMAIN + "/members?displayName=",
      matchmaking: process.env.DOMAIN + "/Warmerise/Matchmaking/",
      join: process.env.DOMAIN + "/join?",
    },
    auth: {
      headers: {
        end4_language: "en",
        end4_locale: "en_US",
        PHPSESSID: process.env.PHPSESSID || "",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
    },
  },
  app: {
    token: process.env.DISCORD_TOKEN,
    clientId: process.env.DISCORD_CLIENT_ID,
    authorId: process.env.APPAUTHOR_ID,
  },
};

export const cookie = createCookieString(config.warmerise.auth.headers);

export default config;
