const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, Permissions } = require('discord.js')
const { simpleEmbed } = require('../../utilities')
const db = require("croxydb")
const prefix = "/"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('otorol')
    .setDescription('Otorol kanalı ayarlarsınız.')
    .addSubcommand(subcommand => 
      subcommand
       .setName("açık")
       .setDescription("Otorol Sitemini Açarsınız")
       .addRoleOption(option => 
        option.setName('rol')
        .setDescription('Bir rol seç.')
        .setRequired(true))
       .addChannelOption(option =>
        option.setName('kanal')
          .setDescription('Bir kanal seç.')
          .setRequired(true)),
      )
      .addSubcommand(subcommand => 
        subcommand
         .setName("kapalı")
         .setDescription("Otorol sistemini kapatırsın.")
        ),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `ROLLERİ YÖNET` Yetkisi Olması Gerek.', true))
    }
if(interaction.options.getSubcommand() === "açık") {
  const rol = interaction.options.getRole('rol');
  const kanal = interaction.options.getChannel('kanal');
  const otorolrol = new MessageEmbed()
  .setColor(`RED`)
  .setAuthor('Rol Belirt')
  .setDescription(`<a:hayr:848280058069123082>  | **Lütfen Bir Rol Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
  .setThumbnail(interaction.client.user.avatarURL)   

if(!rol) return interaction.reply({embeds:[otorolrol]})

  const otorolkanal = new MessageEmbed()
  .setColor(`RED`)
  .setAuthor('Kanal Belirt')
  .setDescription(`<a:hayr:848280058069123082>  | **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
  .setThumbnail(interaction.client.user.avatarURL)   
  
if(!kanal) return interaction.reply({embeds:[otorolkanal]})

   const otoroll = new MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`<a:onay:848278750851498006> | Otorol ${rol} Ayarlandı Mesaj Kanalı ${kanal} Olarak Ayarlandı`)
  .setThumbnail(interaction.client.user.avatarURL)   
  

interaction.reply({embeds:[otoroll]})


db.set(`otoRL_${interaction.guild.id}`, rol.id)  
db.set(`otoRK_${interaction.guild.id}`, kanal.id)
} else if(interaction.options.getSubcommand() === "kapalı") {
  const rol = db.fetch(`otoRL_${interaction.guild.id}`) 
 
    const otorolztnkapa = new MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`<a:onay:848278750851498006>  | Bu Özellik Zaten Kapalı`)
    .setThumbnail(interaction.client.user.avatarURL)  
 if(!rol) return interaction.reply({embeds:[otorolztnkapa]})
 
     const otorolkapat = new MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`<a:onay:848278750851498006>  | **Otorol Sistemi Başarılı Bir Şekilde Kapatıldı**`)
    .setThumbnail(interaction.client.user.avatarURL)   
  interaction.reply({embeds:[otorolkapat]})

 
  db.delete(`otoRL_${interaction.guild.id}`)  
  db.delete(`otoRK_${interaction.guild.id}`) 
  db.delete(`otoRM_${interaction.guild.id}`) 

}

}
}