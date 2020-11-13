const Discord = require("discord.js");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {
  let ip = "185.193.165.235"
  let port = "27015"
 
  
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
.setImage(`https://cache.gametracker.com/server_info/${ip}:${port}/b_350_20_692108_381007_ffffff_000000.png`)  
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