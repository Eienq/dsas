const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  
 
    const embed = new Discord.MessageEmbed()
   .setColor('BLUE')
    .setDescription(`https://www.gametracker.com/server_info/185.193.165.235:27015/`) 
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