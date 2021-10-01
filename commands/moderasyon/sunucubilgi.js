const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const moment = require("moment");
const useful = require("useful-tools")
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sunucubilgi')
    .setDescription('Sunucu hakkında bilgi verir.'),
  async execute (interaction) {
    const tarih = useful.tarih(interaction.guild.createdTimestamp)
    const sunucubilgi = new MessageEmbed()
      .setColor("DARK")
      .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true, size: 4096, format: 'png' }))
  .addFields({name:"👑 Sunucu Sahibi" , value: `<@${interaction.guild.ownerId}>`}, 
   { name:"🔖 Sunucu Adı", value:`${interaction.guild.name}`},
      { name:"🆔 Sunucu ID",value: `${interaction.guild.id}`},
     { name:"🗽 Üye Sayısı**", value:`${interaction.guild.memberCount}`},
      { name:"🔇 AFK Kanalı", value: `${interaction.guild.afkChannel}`},
   { name:"⏰ AFK Zaman Aşımı", value: `${interaction.guild.afkTimeout}`},
   { name:"☑ Sistem Mesaj Kanalı", value: `${interaction.guild.systemChannel}`},
  { name:"🔻 Oluşturulma Tarihi",value: `${tarih}` })
      .setThumbnail(interaction.guild.iconURL);
    return interaction.reply({embeds:[sunucubilgi]})

  }
}