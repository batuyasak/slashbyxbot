const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow, Permissions} = require('discord.js')
const db = require("croxydb");
const { simpleEmbed } = require('../../utilities')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('birisini kicklersiniz.')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true))
          .addStringOption(option => 
            option.setName('sebep')
            .setDescription('Bir sebep belirt')
          ),
  async execute (interaction) {
let modlog = db.fetch(`modlog_${interaction.guild.id}`)
const user = interaction.options.getUser('kişi') 
 if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
  return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Üyeleri At` Yetkisi Olması Gerek.', true))
}
let sebep = interaction.options.getString('sebep');
if(!sebep) return interaction.reply({embeds:[ new MessageEmbed()
  .setDescription(`Atma sebebi belirt.`)
  .setColor('BLACK')]}) 
if(!interaction.guild.members.cache.get(user.id).kickable) return interaction.reply("Bu kişi atamam çünkü yetkisi benden yüksek veya ```Kullanıcı At``` Yetkim yok!");
interaction.guild.members.cache.get(user.id).kick(sebep);


const log = new MessageEmbed()
.setColor('BLACK')
	 .setAuthor("KICK LOG")
    .setFooter(`${interaction.client.user.username} DESTEK`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
	 .addField('Atılan kişi', `<@${user.id}> (\`${user.id}\`)`)
	 .addField('Atan yetkili', `<@${interaction.user.id}>`)
	 .addField('Sebep', `**\`${sebep}\`**`)
     interaction.reply({embeds:[log]}).then(setTimeout(() => interaction.deleteReply(), 6000))
     if (modlog) interaction.guild.channels.cache.get(modlog).send({embeds:[log]}).catch()
  
  }
}