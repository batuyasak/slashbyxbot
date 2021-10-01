const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('kaçcm')
    .setDescription('Ölçersin :D'),
  async execute (interaction) {

    if(!interaction.channel.nsfw) return interaction.reply({embeds:[new MessageEmbed()
        .setDescription('Sadece NSFW kanallarda kullanabilirsiniz', true)
        .setColor("BLUE")
        ]});
      
      interaction.reply({embeds:[
        new MessageEmbed()
      .setDescription('Hemen Bakıyorum Abi 1 Saniye...')
    ]}).then(message => {
         var espriler = [' **Senin Malafatın  18CM ** :eggplant: ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:'];
            var espri = espriler[Math.floor(Math.random() * espriler.length)];
            interaction.editReply({embeds:[
                new MessageEmbed()
              .setDescription(`${espri}`)
            ]});
       });

  }}