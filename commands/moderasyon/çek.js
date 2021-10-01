const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { GuildMember, Permissions } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('taşı')
    .setDescription('Belirtilen kullanıcıyı belirtilen kanala taşır.')
    .addMentionableOption(option =>
      option.setName('kişi')
        .setDescription('Kullanıcı hareket edecek.')
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('kanal')
        .setDescription('Taşınacak kanal.')
        .setRequired(true)),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MOVE_MEMBERS)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Üyeleri Taşı` Yetkisi Olması Gerek.', true))
    }
    const user = interaction.options.getMentionable('kişi')
    const channel = interaction.options.getChannel('kanal')

    if (!channel.isVoice()) {
      return await interaction.reply(simpleEmbed('Yalnızca bir ses kanalı belirtebilirsiniz!', true))
    }
    if (!(user instanceof GuildMember)) {
      return await interaction.reply(simpleEmbed('Yalnızca geçerli bir kullanıcı belirtebilirsiniz!', true))
    }

    await user.voice.setChannel(channel)
    await interaction.reply(simpleEmbed(`Etkilenmiş kişi taşındı: \`${user.displayName}\` \`${channel.name}\`.`))
  }
}
