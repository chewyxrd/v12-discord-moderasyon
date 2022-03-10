const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()
.then;   
const chewyhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`
!afk - komut bakımda, yakında eklenecektir!
!avatar
!çek
!emoji-ekle
!git
!sil
!sohbet-aç
!sohbet-kapat
`) 
        .setFooter("Developed by Chewy")
message.channel.send(chewyhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };