const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, GuildMember, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kanal-id')
    .setDescription('Belirtiğiniz kanalın idsini verir.')
    .addChannelOption(option => 
        option.setName('kanal')
    .setDescription('Bir kanal seç.')
    .setRequired(true)),
  async execute (interaction) {
    const kanal = interaction.options.getChannel('kanal');
    if (!kanal) return interaction.reply(`Yanlış yazdın dostum Doğru kullanım : **/kanalid #kanal**`)
    interaction.reply(kanal.id)
  }}