const Discord = require("discord.js");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {
  let ip = "185.193.165.235"
 
  
  Gamedig.query({
    type: 'csgo',
    host: ip
    
    
}).then((state) => {
    const embed = new Discord.MessageEmbed()
   .setColor('BLUE')
    .setAuthor('Csgo Sunucu Bilgi')
    .addField(`Sunucu Adı`,` ${state.name}`)
    .addField(`Online Kişi`,`${state.players.length}/${state.maxplayers}`,true)
    .addField(`Oynanan Map`,`${state.map}`,true)
    .addField(`Sunucu Pingi`,`${state.ping}`)
    message.channel.send(embed)
    
}).catch((error) => {
    message.channel.send("Server Offline")
});
  
  };

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: "cssunucubilgi",
  description: "Bot i",
  usage: "istatistik"
};