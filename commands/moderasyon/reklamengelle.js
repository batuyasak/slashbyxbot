const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, Permissions } = require('discord.js')
const db = require("croxydb");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('reklamengel')
    .setDescription('reklamengel kanalı ayarlarsınız.')
    .addSubcommand(subcommand => 
      subcommand
       .setName("açık")
       .setDescription("reklamengel Sitemini Açarsınız")
      )
      .addSubcommand(subcommand => 
        subcommand
         .setName("kapalı")
         .setDescription("reklamengel sistemini kapatırsın.")
        ),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Yönetici` Yetkisi Olması Gerek.', true))
      }
    if(interaction.options.getSubcommand() === "açık") {
        if(db.has(`reklam_${interaction.guild.id}`)) return interaction.reply(`Sistem zaten açık.`)
        db.set(`reklam_${interaction.guild.id}`, 'acik')
        const embed1 = new MessageEmbed()
        .setDescription('Reklam Engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların reklamı engellenmicektir.')
        .setColor("RED")
        .setAuthor(`${interaction.client.user.username} BOT`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
        interaction.reply({embeds:[embed1]}).then(setTimeout(() => interaction.deleteReply(), 6000))
        }else if
        (interaction.options.getSubcommand() === "kapalı") {
    if(!db.has(`reklam_${interaction.guild.id}`)) return interaction.reply(`Sistem zaten kapalı.`)
    db.delete(`reklam_${interaction.guild.id}`)
    const embed2 = new MessageEmbed()
    .setDescription('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    .setColor("RED")
    .setAuthor(`${interaction.client.user.username} BOT`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
    interaction.reply({embeds:[embed2]}).then(setTimeout(() => interaction.deleteReply(), 6000))
        }
  }
}