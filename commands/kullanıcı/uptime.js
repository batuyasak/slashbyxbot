const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Botun ne kadar süredir çalıştığını söyler.'),
  async execute (interaction) {
    let totalSeconds = (interaction.client.uptime / 1000)
    const days = Math.floor(totalSeconds / 86400)
    totalSeconds %= 86400
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)

    await interaction.reply(simpleEmbed(` ${days} Gün, ${hours} Saat, ${minutes} Dakika ve ${seconds} Saniye'dir Aktif.`))
  }
}
