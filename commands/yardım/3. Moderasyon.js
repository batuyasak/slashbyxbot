const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const prefix = "/"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('moderasyon')
    .setDescription('Moderasyon komutlarını gösterir'),
  async execute (interaction) {
    let pages = [
    new MessageEmbed()
    .setTitle(`Moderasyon Komutları`)
            .setColor("#001a78")
            .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
            .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
            .setDescription(`**» Bağlantılar** 
                **[Destek Sunucusu](https://discord.gg/ZpnRDnFQgj)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[](https://jokerbybot.fun/)** **•** **[]()**
                Bir komut hakkında detaylı __yardım için__: **${prefix}yardım**
                
                **• Komutlar**         
              > ☄️**${prefix}reklamengelle açık/kapalı** →  Sunucuda Reklam Yapılmasına İzin Verilmez.

              > ☄️**${prefix}yavaşmod** →  Kanalın Kaç Saniyede Bir Yazcağını Ayarlarsın.

              > ☄️**${prefix}hg-bb açık/kapalı** → hg-bb Mesajı İçin Kanal Ayarlarsın.

              > ☄️**${prefix}otorol açık/kapalı** → OtoRol ve kanal ayarlarsın.

              > ☄️**${prefix}yazıengel açık/kapalı** → Bir kanala resim attırırsınız.

              > ☄️**${prefix}nick** → Bir kişinin kullanıcı adını değiştirirsin.`)
            ,
            new MessageEmbed()
            .setTitle('**Moderasyon Komutları**')
          .setColor("#001a78")
          .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
          .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
            .setDescription(`
          **» Bağlantılar** 
          **[Destek Sunucusu](https://discord.gg/ZpnRDnFQgj)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[](https://jokerbybot.fun/)** **•** **[]()**
          Bir komut hakkında detaylı __yardım için__: **${prefix}yardım**
          
          **• Komutlar**
> ☄️**${prefix}sil** → Yazdığınız miktarda mesajı siler. (14 gün önceki mesajları silemez) 

> ☄️**${prefix}taşı** → Bir kişiyi başka kanala taşır.

> ☄️**${prefix}toplutaşı** → Bir kanaldaki kişileri başka kanala taşır.

> ☄️**${prefix}modlog** → Log kanalı ayarlarsınız..

> ☄️**${prefix}ban** → Etiketlediğiniz kişiyi sunucudan banlarsınız.

> ☄️**${prefix}kick** → Etiketlediğiniz kişiyi sunucudan atarsınız.

> ☄️**${prefix}unban** → Birisinin banını açarsınız.

> ☄️**${prefix}sunucubilgi** →  Sunucu hakkında bilgi verir`),
         
];

pagination(pages)
function pagination (value) {
 
  let page = 0;

  let embed = interaction.reply({ 
    embeds: [value[0]],
    components: [
      new MessageActionRow().addComponents(
        new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: true }),
        new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: true }),
        new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: false }),
        new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: false }),
        new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
      ),
    ],
  }).then(async () => {

    let fetch = await interaction.fetchReply();

    fetch.createMessageComponentCollector({ componentType: 'BUTTON', filter: (clicker) => clicker.user.id == interaction.user.id }).on('collect', async (button) => {

      if (button.customId == 'delete') {

        interaction.deleteReply();

        await button.deferUpdate();

      } else if (button.customId == 'first') {

        page = 0;

        interaction.editReply({ 
          embeds: [value[page]],
          components: [
            new MessageActionRow().addComponents(
              new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: true }),
              new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: true }),
              new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: false }),
              new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: false }),
              new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
            ),
          ],
        });

        await button.deferUpdate();

      } else if (button.customId == 'previous') {

        page--

        if (page == 0) {

          interaction.editReply({ 
            embeds: [value[page]],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: true }),
                new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: true }),
                new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: false }),
                new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
              ),
            ],
          });

          await button.deferUpdate();

        } else if (page !== 0) {

          interaction.editReply({ 
            embeds: [value[page]],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: false }),
                new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
              ),
            ],
          });

          await button.deferUpdate();
        };

      } else if (button.customId == 'next') {

        page++

        if (page == value.length -1) {

          interaction.editReply({ 
            embeds: [value[page]],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: true }),
                new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: true }),
                new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
              ),
            ],
          });

          await button.deferUpdate();

        } else if (page !== value.length -1) {

          interaction.editReply({ 
            embeds: [value[page]],
            components: [
              new MessageActionRow().addComponents(
                new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: false }),
                new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: false }),
                new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
              ),
            ],
          });

          await button.deferUpdate();
        };

      } else if (button.customId == 'last') {

        page = value.length -1

        interaction.editReply({ 
          embeds: [value[page]],
          components: [
            new MessageActionRow().addComponents(
              new MessageButton({ style: 'PRIMARY', label: '<<', customId: 'first', disabled: false }),
              new MessageButton({ style: 'PRIMARY', label: '<', customId: 'previous', disabled: false }),
              new MessageButton({ style: 'PRIMARY', label: '>', customId: 'next', disabled: true }),
              new MessageButton({ style: 'PRIMARY', label: '>>', customId: 'last', disabled: true }),
              new MessageButton({ style: 'DANGER', label: 'Delete', customId: 'delete', disabled: false }),
            ),
          ],
        });

        await button.deferUpdate();
      };
    });
  });

  return embed;
};
}
}