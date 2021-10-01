const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, Permissions } = require('discord.js')
const db = require("croxydb");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('modlog')
    .setDescription('Log kanalı ayarlarsınız.')
    .addSubcommand(subcommand => 
      subcommand
       .setName("açık")
       .setDescription("Log Sitemini Açarsınız")
       .addChannelOption(option =>
        option.setName('kanal')
          .setDescription('Bir kanal seç.')
          .setRequired(true)),
      )
      .addSubcommand(subcommand => 
        subcommand
         .setName("kapalı")
         .setDescription("Log sistemini kapatırsın.")
        ),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Yönetici` Yetkisi Olması Gerek.', true))
    }
if(interaction.options.getSubcommand() === "açık") {
var kanal = interaction.options.getChannel('kanal')
const embed4 = new MessageEmbed()
  .setDescription("Kanal Belirtmen Gerek!!")
  .setColor("BLUE")
if(!kanal) return interaction.reply({embeds:[embed4]})
db.set(`modlog_${interaction.guild.id}`, kanal.id)
const embed2 = new MessageEmbed()
  .setDescription(`Modlog kanalı başarılı ile <#${kanal.id}> olarak ayarlandı!`)
  .setColor("BLUE")
return interaction.reply({embeds:[embed2]})
} else if(interaction.options.getSubcommand() === "kapalı") {
  if(db.has(`modlog_${interaction.guild.id}`)) {
  db.delete(`modlog_${interaction.guild.id}`)
  const embed = new MessageEmbed()
 .setTitle(`Başarılı`)
 .setDescription(`Log sistemi kapatıldı.`)
 .setColor("GREEN")
 .setTimestamp()
  return interaction.reply({ embeds: [embed] })
  } else {
   const embed = new MessageEmbed()
   .setTitle(`Error`)
   .setDescription(`Log sistemi etkin değil.`)
   .setColor("RED")
   .setTimestamp()
    return interaction.reply({ embeds: [embed] })
  }

}

}
}