const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, MessageButton, MessageActionRow,Permissions} = require('discord.js')
const db = require("croxydb");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('birisini banlarsınız')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true))
          .addStringOption(option => 
            option.setName('sebep')
            .setDescription('Bir sebep belirt')
            .setRequired(true)
          ),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Üyeleri Engelle` Yetkisi Olması Gerek.', true))
    }
    const user = interaction.options.getUser('kişi') || interaction.mentions.users.first()
    let sebep = interaction.options.getString('sebep');
    if(!sebep) return interaction.reply({embeds:[ new MessageEmbed()
        .setDescription(`Banlama Sebebini Belirt`)
        .setColor('BLACK')]})
        let modlog = db.fetch(`modlog_${interaction.guild.id}`)
    let member = interaction.guild.members.cache.get(user.id); 
            if(!member) return interaction.reply({embeds:[ new MessageEmbed()
                .setDescription(`Banlamak istediğin kullanıcıyı etiketle veya id belirt.`)
                .setColor('BLACK')]})
    
            
          await interaction.guild.members.ban(member, { reason: sebep }).catch(() => {
            interaction.reply({embeds:[new MessageEmbed().setDescription("Üyeyi banlayamazsınız üyenin yetkisi benden yüksek veya benim yetkim yok.")]})
        })
           embed_4 = new MessageEmbed()
         .setColor('BLACK')
         .setAuthor("BAN LOG")
         .setFooter(`${interaction.client.user.username} Bot Destek`  , interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
         .addField('Banlanan', `<@${user.id}> (\`${user.id}\`)`)
         .addField('Banlayan yetkili', `<@${interaction.user.id}>`)
         .addField('Ban Sebebi', `**\`${sebep}\`**`)
         interaction.reply({embeds:[embed_4]}).then(setTimeout(() => interaction.deleteReply(), 6000))
         if (modlog) interaction.guild.channels.cache.get(modlog).send({embeds:[embed_4]}).catch()
        
  
    }	
    }