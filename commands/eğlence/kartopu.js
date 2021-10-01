const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('kartopu')
    .setDescription('Birine kartopu fırlatırsın.')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true)),
  async execute (interaction) {

    let kartopu = interaction.options.getMember('kişi');
    if (kartopu.length < 1) {
    return interaction.reply('Kime kartopu atmak isterin ya isim yaz yada etiketle!');
        } else {
            interaction.reply('<=====     ❄️')
          .then(nmsg => interaction.editReply('<=====    ❄️'))
.then(nmsg => interaction.editReply('<====    ❄️'))
          .then(nmsg => interaction.editReply('<====    ❄️'))
.then(nmsg => nmsg.edit('<===   ❄️'))
          .then(nmsg => interaction.editReply('<===   ❄️'))
.then(nmsg => interaction.editReply('<==  ❄️'))
          .then(nmsg => interaction.editReply('<==  ❄️'))
.then(nmsg => interaction.editReply('<= ❄️'))
          .then(nmsg => interaction.editReply('<= ❄️'))
.then(nmsg => interaction.editReply('❄️'))
          .then(nmsg => interaction.editReply('❄️'))
.then(nmsg => interaction.editReply(`${kartopu} artık ⛄ oldu.`));

        }
  }
}