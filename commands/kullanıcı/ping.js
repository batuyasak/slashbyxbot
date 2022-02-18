const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botun Geçikme Süresini Ölçer.'),
  async execute (interaction) {
    const ping =  interaction.createdTimestamp
    await interaction.reply(simpleEmbed(`Ping: ${ping}ms | API Gecikmesi: ${Math.round(interaction.client.ws.ping)}ms`))
  }
}
