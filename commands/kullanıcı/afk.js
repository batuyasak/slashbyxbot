const { SlashCommandBuilder } = require('@discordjs/builders')
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});
const db = require('croxydb')
const { MessageActionRow, MessageButton, MessageEmbed } =require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('afk')
    .setDescription('Afk olursun.')
    .addStringOption(option => 
        option.setName('sebep')
        .setDescription('Bir sebep belirt')
        .setRequired(true)
      ),
  async execute (interaction) {
    const kisi = db.fetch(`afkid_${interaction.user.id}_${interaction.guild.id}`);
    if (kisi) return;
    const sebep = interaction.options.getString('sebep');
      let kullanıcı = interaction.guild.members.cache.get(interaction.user.id);
      const b = kullanıcı.displayName;
   await db.set(`afkzaman_${interaction.user.id}`, tarih)
      await db.set(
        `afkSebep_${interaction.user.id}_${interaction.guild.id}`,
        "Sebep Girilmemiş"
      );
      await db.set(
        `afkid_${interaction.user.id}_${interaction.guild.id}`,
        interaction.user.id
      );
      await db.set(`afkAd_${interaction.user.id}_${interaction.guild.id}`, b);
   
      const a = await db.fetch(
        `afkSebep_${interaction.user.id}_${interaction.guild.id}`
      );
   const embed = new MessageEmbed()
   .setDescription(`Başarıyla Afk Oldunuz \n Sebep: ${a}`)
   .setColor("BLUE")
   interaction.reply({embeds:[embed]});
   
      interaction.member.setNickname(`[AFK] ` + b);
      await db.set(`afkSebep_${interaction.user.id}_${interaction.guild.id}`, sebep);
      await db.set(
        `afkid_${interaction.user.id}_${interaction.guild.id}`,
        interaction.user.id
      );
      await db.set(`afkAd_${interaction.user.id}_${interaction.guild.id}`, b);
   
      const embed1 = new MessageEmbed()
   .setDescription(`Başarıyla Afk Oldunuz \n Sebep: ${a}`)
   .setColor("BLUE")
   interaction.reply({embeds:[embed1]});
   
   interaction.member.setNickname(`[AFK] ` + b);
  }
}