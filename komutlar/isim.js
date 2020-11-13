const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  
 
    const embed = new Discord.MessageEmbed()
   .setColor('BLUE')
    .setImage(`https://cache.gametracker.com/server_info/185.193.165.235:27015/b_560_95_1.png`) 
    message.channel.send(embed)

  
  };

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ['gt'],
  permLevel: 0
};

exports.help = {
  name: "gametracker",
  description: "Bot i",
  usage: "istatistik"
};