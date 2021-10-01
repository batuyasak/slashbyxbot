const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, Permissions } = require('discord.js')
const { simpleEmbed } = require('../../utilities')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yavaşmod')
    .setDescription('Geçerli kanalın hız sınırını ayarlar.')
    .addIntegerOption(option => 
        option.setName('saniye')
        .setDescription('Saniye cinsinden yeni hız sınırı.')
        .setRequired(true)),
  async execute (interaction) {
    const seconds = interaction.options.getInteger('saniye')

    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Kanalları Yönet` Yetkisi Olması Gerek.', true))
    }

    await interaction.channel.setRateLimitPerUser(seconds)

    const embed = new MessageEmbed()
      .setAuthor('Yavaş mod ayarlandı!', interaction.member.user.displayAvatarURL())
      .setTitle(`#${interaction.channel.name}`)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`Başarıyla #${interaction.channel.name} kanal yavaşlatması ${seconds} saniye oldu.`)
      .setFooter('SuitBot', interaction.client.user.displayAvatarURL())

    await interaction.reply({ embeds: [embed] })
  }
}