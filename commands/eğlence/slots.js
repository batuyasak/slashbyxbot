const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { stripIndents } = require("common-tags");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('slots')
    .setDescription('Slots oyununu oynarsın.'),
  async execute (interaction) {
    const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

    var FwhyCode = slots[Math.floor(Math.random() * slots.length)];
    var FwhyCode2 = slots[Math.floor(Math.random() * slots.length)];
    var FwhyCode3 = slots[Math.floor(Math.random() * slots.length)];
    
      if (FwhyCode === FwhyCode2 && FwhyCode === FwhyCode) { return interaction.reply(stripIndents`**Tebrikler, kazandınız! \nÖdülün 1 Öpüçük ** \n\n${FwhyCode} **:** ${FwhyCode2} **:** ${FwhyCode3}`);
    
      } else {
       return interaction.reply(stripIndents`**Eyvah, kaybettin!** \n\n${FwhyCode} **:** ${FwhyCode2} **:** ${FwhyCode3}`);
      }
  }}