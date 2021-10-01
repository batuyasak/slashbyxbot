const fs = require('fs')
const path = require('path')
const { Client, Collection, Intents,MessageEmbed } = require('discord.js')
const { Player } = require('discord-music-player')
const db = require('croxydb')

// Check if running in Heroku
let token = process.env.token
if (!token) {
  const config = require('./config.json')
  token = config.token
}

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
module.exports = client;
const player = new Player(client, { volume: 50 })
client.player = player

// Add command files
client.commands = new Collection()
const commandFiles = []

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute)
    } else {
      commandFiles.push(absolute)
    }
  }
}
getFilesRecursively('./commands/')

for (const file of commandFiles) {
  const command = require(`./${file}`)
  client.commands.set(command.data.name, command)
}

// Add event files
const clientEventFiles = fs.readdirSync('./events/client').filter(file => file.endsWith('.js'))
const playerEventFiles = fs.readdirSync('./events/player').filter(file => file.endsWith('.js'))

for (const file of clientEventFiles) {
  const event = require(`./events/client/${file}`)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

for (const file of playerEventFiles) {
  const event = require(`./events/player/${file}`)
  client.player.on(event.name, (...args) => event.execute(...args))
}

// Login
//hg-bb\\
client.on("guildMemberAdd", async member => {
  var hgbb = await db.fetch(`hgmesaj_${member.guild.id}`)
  if(!hgbb) return;
  const embed = new MessageEmbed()
  .setTitle('Merhaba Hoşgeldin!')
  .setDescription(`<@${member.id}> sunucumuza katıldı hoşgeldin aramıza!`)
  .setColor('GREEN')
  client.channels.cache.get(hgbb).send({embeds:[embed]});
 })
 
 client.on("guildMemberRemove", async member => {
  var hgbb = await db.fetch(`hgmesaj_${member.guild.id}`)
  if(!hgbb) return;
  const embed = new MessageEmbed()
  .setTitle('Üzdün kanka!')
  .setDescription(`<@${member.id}> sunucumuzdan Ayrıldı Görüşürüz!`)
  .setColor('RED')
  client.channels.cache.get(hgbb).send({embeds:[embed]});
 })
 //hg-bb\\
 //etiket-prefix\\
 client.on('messageCreate', async message =>{
  if(message.author.bot) return; 
    if (
      message.content == `<@${client.user.id}>` ||
      message.content == `<@!${client.user.id}>`
    ) {
      return message.reply({embeds:[
        new MessageEmbed()
          .setColor("BLACK")
          .setAuthor(`${client.user.username}`)
          .setDescription(`Beni Kullanmak İçin Prefixim Şudur **Prefix'im: / **
  
  **__/yardım Yazarak Komutlarıma Bakabilirsin__**

  **eğer beni bu linkten eklemediysen bu linkten ekle**

  **[DAVET](https://discord.com/api/oauth2/authorize?client_id=838421251046244383&permissions=8&scope=applications.commands%20bot)**

  **Unutma bunu açmazsan komutlarımı kullanamazsın** 
         `)
         .setImage("https://cdn.discordapp.com/attachments/887804583559172147/890347519790419991/RyyelaavFC.gif")
      ]});
    }
  })
  //etiket-prefix\\
  //otorol\\
client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;
    const otorolmesaj = new MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`<a:onay:848278750851498006> | <@!`+ member.user.id +`> Adlı Kullanıcıya <@&`+ rol +`> Rolü Verildi`)
  if (!mesaj) {
    client.channels.cache
    .get(kanal)
    .send({embeds:[otorolmesaj]});
    return member.roles.add(rol);
  }
 });
 //otorol\\
 //reklamengel\\
client.on("messageCreate", msg => {
if(!msg.guild) return
if(!db.has(`reklam_${msg.guild.id}`)) return;
       const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
       if (reklam.some(word => msg.content.includes(word))) {
         try {
           if(!msg.member.permissions.has("BAN_MEMBERS")) {
                 msg.delete();
             const embed = new MessageEmbed()
             .setDescription('**Bu Sunucuda** `Reklam Engelle`** Açıktır Reklam Yapamasın!**')
             .setColor("RED")
                   return msg.reply({embeds:[embed]}).then((sent) => {setTimeout(() => {sent.delete();}, 8000);});
  

                                            

           }              
         } catch(err) {
           console.log(err);
         }
       }
   });
//reklamengel\\
//Yazı-engel\\
client.on('messageCreate', async msg =>{
 
  let Channel = await db.fetch(`yazıengel_${msg.guild.id}`);
 
  if (msg.channel.id !== Channel) return;
 
  if(msg.reference) return;
    
  if(msg.attachments.size == 0){
  
  if(msg.author.bot) return;
  
  msg.delete({timeout:500})
  
  msg.channel.send({embeds:[new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(msg.author.username, msg.author.avatarURL())
  .setDescription(`Bu Kanala Sadece Resim Atabilirsin.`)
 ]}).then((sent) => {setTimeout(() => {sent.delete();}, 6000);});
  
 }
  if(msg.attachments.size > 0 ){
  msg.attachments.forEach(atch=>{
   if(atch.url.endsWith('.webp')||atch.url.endsWith('.png')||atch.url.endsWith('.jpeg')||atch.url.endsWith('.jpg'))
   if(atch.url.endsWith('.gif')){
    }
  })
 }
 })
 //Yazı-engel\\
 //AFK//
client.on("messageCreate" , async msg => {
  let user = msg.mentions.users.first();
 let afk = msg.mentions.users.first()

 const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)

 const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
if(afk){
   var zaman = db.fetch(`afkzaman_${user.id}`);
  const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
  const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
  if(msg.content.includes(kisi3)){
const embed3 = new MessageEmbed()
.setDescription(`❗️ Bu kullanıcı; \n ${zaman} \n tarihinden beri AFK! \n\n**Sebebi;**\n \`\`\`${sebep}\`\`\``)
.setColor("BLUE")
   msg.reply({embeds:[embed3]});
  }
}
 if(msg.author.id === kisi){
const embed4 = new MessageEmbed()
.setDescription(`Afk'lıktan Çıktınız.`)
.setColor("BLUE")
   msg.reply({embeds:[embed4]});
 db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
 db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
 db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
  msg.member.setNickname(isim)
  
}

});
//AFK//
client.login(token)
