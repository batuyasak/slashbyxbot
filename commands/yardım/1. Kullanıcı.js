const { SlashCommandBuilder } = require('@discordjs/builders')
const fs = require('fs')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const prefix = "/"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('kullanıcı')
    .setDescription('Kullanıcı komutlarını gösterir'),
  async execute (interaction) {
    let pages = [
        new MessageEmbed()
        .setTitle(`Kullanıcı Komutları`)
        .setColor("#001a78")
        .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
        .setDescription(`**» Bağlantılar** 
            **[Destek Sunucusu](https://discord.gg/ZpnRDnFQgj)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[](https://jokerbybot.fun/)** **•** **[]()**
            Bir komut hakkında detaylı __yardım için__: **yardım**
            
            **• Komutlar**         
            > ☄️**${prefix}izle yt** → Youtube Üzerinden Bir Şey İzlersin.
            > ☄️**${prefix}afk** → AFK Kalırsın.
            > ☄️**${prefix}avatar** → Etiketlediğin birisinin avatarını gösterir.
            > ☄️**${prefix}sunucuresmi** → Sunucu resmini gösterir.
            > ☄️**${prefix}ping** → Botun Pingine Bakarsın. 
            > ☄️**${prefix}davet** → beni sunucuna ekle.`)
        ,
        new MessageEmbed()
        .setTitle('**Kullanıcı Komutları**')
      .setColor("#001a78")
      .setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setImage("https://cdn.discordapp.com/attachments/437565714107203585/877633253018853386/standard_2.gif" )
        .setDescription(`
      **» Bağlantılar** 
      **[Destek Sunucusu](https://discord.gg/ZpnRDnFQgj)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=bot%20applications.commands)** **•** **[Web-Site](https://jokerbybot.fun/)** **•** **[]()**
      Bir komut hakkında detaylı __yardım için__: **${prefix}yardım**
      
      **• Komutlar**
      > ☄️**${prefix}bug-bildir** → Yazdığınız bug'u yapımcılarıma bildirir.
      > ☄️**${prefix}istek-kod** → Yazdığınız istek kodu yapımcılarıma bildirir.
      > ☄️**${prefix}istatistik** → Botun İstatistiğini Gösterir.
      > ☄️**${prefix}id** → İstediğin bi kişinin ID sini alır.
      > ☄️**${prefix}kanal-id** → Etiketlediğin kanalın ID sini atar.
      > ☄️**${prefix}davet-oluştur** → Sunucunun davet linkini oluşturur.`),

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