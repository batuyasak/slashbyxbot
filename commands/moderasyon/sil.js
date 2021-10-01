const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed, sleep } = require('../../utilities')
const { Permissions } = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('sil')
    .setDescription('Belirtilen miktarda iletiyi temizler.')
    .addIntegerOption(option =>
      option.setName('miktar')
        .setDescription('Temizlenecek mesaj miktarı.')
        .setRequired(true)),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisi Olması Gerek.', true))
    }
    let amount = interaction.options.getInteger('miktar')
    if (amount < 1 || amount > 100) {
      return await interaction.reply(simpleEmbed('Sadece 1-100 arası mesaj silebilirsiniz!', true))
    }
    amount = amount.toString()
    await interaction.channel.messages.fetch({ limit: amount }).then(messages => {
      interaction.channel.bulkDelete(messages)
    })
    await interaction.reply(simpleEmbed(`${amount} Mesaj sildim.`))
    await sleep(5000)
    await interaction.deleteReply()
  }
}
