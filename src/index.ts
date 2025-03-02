import { Client, Collection, GatewayIntentBits } from "discord.js";
import loadApplicationFiles from "./loader/app";
import config from "./config";
import deployCommands from "./loader/interactionCommands";
import createMongoConnection from "./mongodb";
import debug from "./utils/debug";

export interface WarmeriseDcApp extends Client {
  commands: Collection<string, any>;
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
}) as WarmeriseDcApp;

client.commands = new Collection();

client
  .login(config.app.token)
  .then(async () => {
    debug("Logged as", client.user?.username);
    await createMongoConnection();
    await loadApplicationFiles(client);
    await deployCommands(client.commands);
  })
  .catch((err) => {
    console.error(`An error occurred while logging in: ${err}`);
  });
