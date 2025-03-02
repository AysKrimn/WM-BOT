import dotenv from "dotenv";
import debug from "../utils/debug";
import path from "path";

const loadEnviroment = (nodeEnv: string) => {
  debug("current working directory", process.cwd());

  // load env based on NODE_ENV
  switch (nodeEnv) {
    case "development":
      dotenv.config({
        path: path.join(process.cwd(), ".env.dev"),
      });
      debug("Loaded .env.dev");
      break;
    case "production":
      dotenv.config({
        path: path.join(process.cwd(), ".env"),
      });
      debug("Loaded .env");
      break;
    default:
      throw new Error("Invalid NODE_ENV");
  }
};

export default loadEnviroment;
