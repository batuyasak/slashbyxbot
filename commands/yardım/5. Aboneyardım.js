const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const prefix = "/"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('aboneyardım')
    .setDescription('aboneyardım komutlarını gösterir'),
  async execute (interaction) {
    interaction.reply({
        embeds:[
          new MessageEmbed()
          .setColor("#001a78")
          .setTitle("**  » ByX Bot  **")
          .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
          .setDescription(`
          **» Bağlantılar** 
          **[Destek Sunucusu](https://discord.gg/sfD68Gujc5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[](https://jokerbybot.fun/)** **•** **[]()**
          Bir komut hakkında detaylı __yardım için__: **${prefix}yardım**
          
          **Abone KOMUTLARIM**;
          **☄️ ${prefix}abonesistem log**  → **Abone logunu ayarlarsınız.**
          
          **☄️ ${prefix}abone**  → **Abone rolü verirsiniz.**
          
          **☄️ ${prefix}abonesistem yetkili**  → **Abone Rolünü verecek yetkili rolünü ayarlarsınız.**
          
          **☄️ ${prefix}abonesistem rol**  → **Abone rolünü ayarlarsınız.**
          
          **☄️ ${prefix}abonesistem ayarlar**  → **Abone sistemi ayarlarınızı gösterir.**
          
          **☄️ ${prefix}abonesistem sıfırla**  → **Sunucudaki abonesistemini sıfırlarsınız**
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