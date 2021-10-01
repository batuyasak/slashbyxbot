const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botun Geçikme Süresini Ölçer.'),
  async execute (interaction) {
    const message = await interaction.reply({ embeds: [new MessageEmbed().setDescription('Ping Ölçülüyor...')], fetchReply: true })
    const ping = message.createdTimestamp - interaction.createdTimestamp
    await interaction.editReply(simpleEmbed(`Ping: ${ping}ms | API Gecikmesi: ${Math.round(interaction.client.ws.ping)}ms`))
  }
}
