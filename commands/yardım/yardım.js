const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Yardım Komutlarını Gösterir'),
  async execute (interaction) {
    interaction.reply({
      embeds:[
        new MessageEmbed()
    .setColor("#001a78")
    .setTitle("**  » ByX Bot  **")
    .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
    .setDescription(`
    **» Bağlantılar** 
    **[Destek Sunucusu](https://discord.gg/sfD68Gujc5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[Web-Site](https://jokerbybot.fun/)** **•** **[]()**
    Bir komut hakkında detaylı __yardım için__: **yardım**
    
    **• Komutlar**
    > ☄️**/kullanıcı** → Kullanıcı komutları.\n
    > ☄️**/moderasyon** → Moderasyon komutları.\n
    > ☄️**/aboneyardım** → Ayarlamalı Abone Rol Sistemi \n
    > ☄️**/eğlence** → Eğlence Komutları.\n
    > ☄️**/müzik** → Müzik Komutları.\n
    `)],
      components:[
      new MessageActionRow()
        .addComponents(
                new MessageButton()
                .setURL('https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands')
                .setLabel('Bot Davet')
                .setStyle('LINK'),
        )
        ]})
        
        }
      }
