const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const {Permissions} = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('toplutaşı')
    .setDescription('Tüm kullanıcıları ilk kanaldan ikinci kanala taşır.')
    .addChannelOption(option =>
      option.setName('kanal1')
        .setDescription('Taşınacak kanal.')
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('kanal2')
        .setDescription('Taşınacak kanal.')
        .setRequired(true)),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MOVE_MEMBERS)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Üyeleri Taşı` Yetkisi Olması Gerek.', true))
    }
    const channel1 = interaction.options.getChannel('kanal1')
    const channel2 = interaction.options.getChannel('kanal2')

    if (!channel1.isVoice() || !channel2.isVoice()) {
      return await interaction.reply(simpleEmbed('Yalnızca bir ses kanalı belirtebilirsiniz!', true))
    }

    for (const user of channel1.members) {
      await user[1].voice.setChannel(channel2)
    }

    await interaction.reply(simpleEmbed(`Tüm kullanıcılar şuradan taşındı: \`${channel1.name}\` \`${channel2.name}\`.`))
  }
}
