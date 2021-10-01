const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, GuildMember, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('id')
    .setDescription('Belirtiğiniz kişinin idsini verir.')
    .addUserOption(option => 
        option.setName('kişi')
    .setDescription('Bir kişi seç.')
    .setRequired(true)),
  async execute (interaction) {
    const kişi = interaction.options.getUser('kişi');
    const embed = new MessageEmbed()
.setDescription(`**${kişi}** adlı kişinin ID numarası: **${kişi.id}** idir.`)
.setColor("RANDOM")
.setAuthor(`${interaction.client.user.username} BOT`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
.setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
interaction.reply({embeds:[embed]});
    }
}