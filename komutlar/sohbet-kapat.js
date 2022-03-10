const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  const embed = new Discord.MessageEmbed()
  .setDescription("**Sohbet kanalı kapatıldı!**")
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "kapat ac",
  usage: "prefix + sohbet-kapat"
};