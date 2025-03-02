import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import PhpSession from "../mongodb/models/phpsessionModel";
import config from "../config";

const command = {
  data: new SlashCommandBuilder()
    .setName("session")
    .setDescription("Set the session for application")
    .addStringOption((option) =>
      option
        .setName("session")
        .setDescription("The session to set")
        .setRequired(true)
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    try {
      await interaction.deferReply({ ephemeral: true });

      const session = interaction.options.getString("session");

      if (!session) {
        return interaction.editReply({
          content: "Please provide a valid session",
        });
      }

      // check if author is app author
      if (interaction.user.id !== config.app.authorId) {
        return interaction.editReply({
          content: "You are not authorized to use this command",
        });
      }

      // find session and update if not create
      const phpSession = await PhpSession.findOneAndUpdate(
        { sessionId: session },
        { sessionId: session },
        { new: true, upsert: true }
      );

      if (!phpSession) {
        return interaction.editReply({ content: "Failed to set session" });
      }

      interaction.editReply({ content: `Session set successfully` });
    } catch (error) {
      throw error;
    }
  },
};

export default command;
