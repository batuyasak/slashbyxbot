const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, Permissions } = require('discord.js')
const db = require("croxydb");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('abonesistem')
    .setDescription('abonesistemi ayarlarsınız.')
    .addSubcommand(subcommand => 
      subcommand.setName("rol")
       .setDescription("Rolü ayarlarsınız")
       .addRoleOption(option =>
        option.setName('rol')
          .setDescription('Bir rol seç.')
          .setRequired(true)),
      )
      .addSubcommand(subcommand => 
        subcommand.setName("yetkili")
         .setDescription("Bir yetkili ayarlarsınız.")
         .addRoleOption(option =>
          option.setName('rol')
            .setDescription('Bir rol seç.')
            .setRequired(true)),
        )
        .addSubcommand(subcommand => 
            subcommand.setName("log")
             .setDescription("Bir log kanalı ayarlarsınız.")
             .addChannelOption(option =>
              option.setName('kanal')
                .setDescription('Bir kanal seç.')
                .setRequired(true)),
            )
            .addSubcommand(subcommand => 
                subcommand.setName("ayarlar")
                 .setDescription("Ayarladığın ayarları görürsün."),
                )
      .addSubcommand(subcommand => 
        subcommand
         .setName("sıfırla")
         .setDescription("AboneSistemini sıfırlarsınız.")
        ),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Yönetici` Yetkisi Olması Gerek.', true))
    }
if(interaction.options.getSubcommand() === "rol") {
var rol = interaction.options.getRole('rol')
const embedd = new MessageEmbed()
.setTitle('ByX BOT HATA')
.setDescription('Lütfen abone rolünü belirtiniz!')
if(!rol) return interaction.reply({embeds:[embedd]})
db.set(`abonerol_${interaction.guild.id}`, rol.id)
const embeddd = new MessageEmbed()
.setTitle('BAŞARI İLE AYARLANDI')
.setDescription(`Abone rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
return interaction.reply({embeds:[embeddd]})
} else if(interaction.options.getSubcommand() === "yetkili") {
 var rol = interaction.options.getRole('rol')
 const embedd = new MessageEmbed()
 .setTitle('ByX BOT HATA')
 .setDescription(`Lütfen abone yetkili rolüü belirtiniz!`)
 if(!rol) return interaction.reply({embeds:[embedd]})
 db.set(`aboneyetkili_${interaction.guild.id}`, rol.id)
 const tamamdır = new MessageEmbed()
 .setTitle('BAŞARI İLE AYARLANDI')
 .setDescription(`Abone yetkili rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
 return interaction.reply({embeds:[tamamdır]})
}else if(interaction.options.getSubcommand() === "log") {
    var kanal = interaction.options.getChannel('kanal')
    const embedd = new MessageEmbed()
    .setTitle('ByX BOT HATA')
    .setDescription(`Lütfen abone log kanalını belirtiniz!`)
    if(!kanal) return interaction.reply({embeds:[embedd]})
    db.set(`abonelog_${interaction.guild.id}`, kanal.id)
    const tamammı = new MessageEmbed()
    .setTitle('BAŞARI İLE AYARLANDI')
    .setDescription(`Abone log kanalı <#${kanal.id}> olarak ayarlandı!`)
    return interaction.reply({embeds:[tamammı]})
}else if(interaction.options.getSubcommand() === "ayarlar") {
    let logvar = db.fetch(`abonelog_${interaction.guild.id}`)
    if(logvar == logvar) {var log = `<#` + logvar + `>`}
    if(logvar == undefined) {var log = "ayarlanmamış"}
    let rolvar = db.fetch(`abonerol_${interaction.guild.id}`)
    if(rolvar == rolvar) {var rol = `<@&` + rolvar + `>`}
    if(rolvar == undefined) {var rol = "ayarlanmamış"}
    let yetkilivar = db.fetch(`aboneyetkili_${interaction.guild.id}`)
    if(yetkilivar == yetkilivar) {var yetkili = `<@&` + yetkilivar + `>`}
    if(yetkilivar == undefined) {var yetkili = "ayarlanmamış"}
    const embeddd = new MessageEmbed()
    .setTitle(' **__Abone Sistemi ayarları__** ')
    .setDescription(`<a:Ayarlar:856664377704579092>  Abone rolü: ${rol} \n \n <a:Ayarlar:856664377704579092>  Abone log kanalı: ${log} \n \n <a:Ayarlar:856664377704579092>  Abone yetkili rolü: ${yetkili}`)
    return interaction.reply({embeds:[embeddd]})
}else if(interaction.options.getSubcommand() === "sıfırla") {
    db.delete(`abonerol_${interaction.guild.id}`)
    db.delete(`aboneyetkili_${interaction.guild.id}`)
    db.delete(`abonelog_${interaction.guild.id}`)
        const embed = new MessageEmbed()
      .setColor('BLACK')
      .setTitle(`${interaction.client.user.username} | 🦾 Abone Sistemi 🛠️`)
      .setDescription(`<a:tik:848279569454334003>  Bot'un bu sunucudaki \`Abonesistemi\` veritabanı sıfırlandı!`)
     .setFooter(`${interaction.user.username} istedi!`)
      .setTimestamp()
        interaction.reply({embeds:[embed]})
          
}

}
}