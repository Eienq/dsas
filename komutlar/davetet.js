const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(":gem: Ewerx İnvite Davet Menüsü")
  .setDescription("  \n \n **Botun Davet Linki** \n [Davet Et](https://discord.com/oauth2/authorize?client_id=823971558753566774&scope=bot&permissions=8) \n \n **Ewerex İnvite Destek Sunucusu** \n [Destek Sunucusu](https://discord.gg/fsqnmYrcB8) \n \n **__Daha Fazlası İçin Botu Sunucunuza Eklemeyi Unutmayın!__** ")
  .setImage(`https://cdn.discordapp.com/attachments/789815101963108412/823997970004312114/350kb.gif`)
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};