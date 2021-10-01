const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const Discord = require('discord.js')
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('istatistik')
    .setDescription('Botun davet linkini atar.'),
  async execute (interaction) {
const embed = new MessageEmbed()
.setColor("BLACK")
    .setFooter(`ByX Bot`)
    .addField(
      " **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      " **Çalışma süresi**",
      moment
        .duration(interaction.client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
    .addField(
      "**Kullanıcılar**",
      interaction.client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      " **Sunucular**",
      interaction.client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      " **Kanallar**",
      interaction.client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("**Discord.JS sürüm**", "v" + Discord.version, true)
    .addField(" **Node.JS sürüm**", `${process.version}`, true)
    .addField("**Ping**", interaction.client.ws.ping + " ms", true) 
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)

    .setImage("https://cdn.discordapp.com/attachments/885250004866969641/888913052794253363/standard_5.gif")

interaction.reply({embeds: [embed]});
  }
}