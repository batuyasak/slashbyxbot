const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, Permissions } = require('discord.js')
const db = require("croxydb");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('yazıengel')
    .setDescription('yazıengel kanalı ayarlarsınız.')
    .addSubcommand(subcommand => 
      subcommand
       .setName("açık")
       .setDescription("yazıengel Sitemini Açarsınız")
       .addChannelOption(option =>
        option.setName('kanal')
          .setDescription('Bir kanal seç.')
          .setRequired(true)),
      )
      .addSubcommand(subcommand => 
        subcommand
         .setName("kapalı")
         .setDescription("yazıengel sistemini kapatırsın.")
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
db.set(`yazıengel_${interaction.guild.id}`, kanal.id)
return interaction.reply({embeds:[
  new MessageEmbed()
  .setDescription(`yazıengel kanalı başarılı ile <#${kanal.id}> olarak ayarlandı!`)
  .setColor("BLUE")
]})
} else if(interaction.options.getSubcommand() === "kapalı") {
    if(db.has(`yazıengel_${interaction.guild.id}`)){
    db.delete(`yazıengel_${interaction.guild.id}`)
    return interaction.reply({embeds:[
        new MessageEmbed()
        .setDescription("Başarıyla Sıfırlandı")
          .setColor("BLUE")
        ]})


    }
}
}
}