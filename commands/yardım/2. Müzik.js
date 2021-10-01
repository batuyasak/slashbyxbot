const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const prefix = "/"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('müzik')
    .setDescription('Müzik Komutlarını Gösterir'),
  async execute (interaction) {
    interaction.reply({
      embeds:[
        new MessageEmbed()
        .setAuthor('Müzik Komut Listesi')
        .setColor('BLUE')
        .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
        .setDescription(`
        **» Bağlantılar** 
    **[Destek Sunucusu](https://discord.gg/sfD68Gujc5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[](https://jokerbybot.fun/)** **•** **[]()**
    Bir komut hakkında detaylı __yardım için__: **${prefix}yardım**
        __**PLAY**__
       > <a:mzik:851253427706789888> **${prefix}play** → Çalmak istediğiniz Şarkıyı Başlatır.\n
        __**LOOP**__
        > <a:mzik:851253427706789888> **${prefix}loop** → Çalan Şarkıyı Tekrarlar.\n
        __**STOP**__
        > <a:mzik:851253427706789888> **${prefix}stop** → Çalan Şarkıyı Durdur.\n
        __**VOLUME**__
        > <a:mzik:851253427706789888> **${prefix}volume** → Botun Ses Düzeyini Ayarlar.\n
        __**SKİP**__
        > <a:mzik:851253427706789888> **${prefix}skip** → Bir Sonraki Şarkıya Geçer.\n
        __**PAUSE**__
        > <a:mzik:851253427706789888> **${prefix}pause** → Çalan Şarkıyı Durdurur.\n
        __**RESUME**__
        > <a:mzik:851253427706789888> **${prefix}resume** → Çalan Şarkıyı Devam Ettirir.\n
        __**NOW PLAYİNG**__
        > <a:mzik:851253427706789888> **${prefix}np** → Çalan Şarkıyı Gösterir.\n
        __**JOİN**__
        > <a:mzik:851253427706789888> **${prefix}join** → Kanala Girer.\n
        __**lEAVE**__
        > <a:mzik:851253427706789888> **${prefix}leave** → Kanaldan Çıkar.\n
        __**ClearOrder**__
        > <a:mzik:851253427706789888> **${prefix}clearorder** → Kanaldan Çıkar.\n
        `)
    ],
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
