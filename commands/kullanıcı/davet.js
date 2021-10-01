const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('davet')
    .setDescription('Botun davet linkini atar.'),
  async execute (interaction) {


    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setURL("https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands")
            .setLabel('Botun Davet Linki')
            .setStyle('LINK'),

    );

const NARCOSEMBED = new MessageEmbed()

.setColor("#910000")
.setTitle("**  » ByX Bot  **")
.setDescription(`

• Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz.** Herhangi bir **bug/hata** bulursanız [/bug-bildir](https://discord.gg/49tbuHJBbA) ile bize iletebilirsiniz.

• Sunucuma nasıl eklerim?
Sunucuna eklemek istiyorsan aşağıdaki butona basarak veya [buraya tıklayarak](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands) ekleyebilirsin.

• Destek Sunucumuz
[Destek Sunucusuna](https://discord.gg/49tbuHJBbA) katılarak sizde güzel sohbetlere katılabilirsiniz!

© ByX | Tüm hakları saklıdır.
`)
interaction.reply({embeds: [NARCOSEMBED] , components: [row]});
  }
}