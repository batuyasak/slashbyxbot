const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { stripIndents } = require("common-tags");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('soygunyap')
    .setDescription('Bankadan para çalarsın.'),
  async execute (interaction) {
    const CrewSoygun = [
        "52 ABD Doları Soydun",
        "31 ABD Doları Soydun",
        "tüühh be polis geldi gaç!",
        "6 BAD Doları  Soydun",
        "436 ABD Doları  Soydun",
        "643 ABD Doları  Soydun",
        "531 ABD Doları Soydun!",
        "213 ABD Doları Soydun",
        "2.234 ABD Doları Soydun",
        "3.456 ABD Doları Soydun",
        "2.765 ABD Doları Soydun",
        "9.324 ABD Doları Soydun",
        "24.768 ABD Doları Soydun",
        "31.234 ABD Doları Soydun",
        "234.876 ABD Doları Soydun",
        "453.345 ABD Doları Soydun",
        "654.865 ABD Doları Soydun",
        "734.763 ABD Doları Soydun",
        "931.573 ABD Doları Soydun",
        "311.645 ABD Doları Soydun",
        "Büyük vurgun yaptın toplam 1.000.0000 ABD Doları wwOOOOww",
      ];
      
      
        const soygun = CrewSoygun[Math.floor(Math.random() * CrewSoygun.length)];
        interaction.reply(
        
        "**Soygunun yapılacağı mekan seciliyor..**"
        
        ).then(
        function(i){
        interaction.editReply("**mekan bulundu.**") 
        interaction.editReply({embeds:[
          new MessageEmbed()
            .setTitle('**Soygunu yaptın ve şimdi harcama zamanı**')
          .setDescription('')
            .addField('**Bankadan soyduğun para miktarı :**',soygun)
          .setColor('RED')
          
          
          ]})
        })
        
  }}