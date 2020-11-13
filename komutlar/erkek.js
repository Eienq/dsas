const Discord = require("discord.js");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {
  let ip = "185.193.165.74"
 
  
  Gamedig.query({
    type: 'csgo',
    host: ip
    
    
}).then((state) => {
    const embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
    .setFooter(``,client.user.avatarURL)
    .setAuthor('Csgo Sunucu Bilgi')
    .setDescription(`**Sunucu Adı:** ${state.name}_\n\n**Online Kişi: ** ${state.players.length}/${state.maxplayers} \n\n **Map: ** ${state.map}\n\n **Ping**: **${state.ping}`)
    message.channel.send(embed).then(fc => fc.delete(7000));
    
}).catch((error) => {
    message.channel.send("Server Offline").then(fc => fc.delete(7000));
    console.log("Server Çevrim Dışı");
});
  
  };

exports.conf = {  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: "cssunucubilgi",
  description: "Bot i",
  usage: "istatistik"
};