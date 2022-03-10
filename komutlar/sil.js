const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Ne kadar mesaj sileceğim?`);
  message.delete();
  let sayı = Number(args[0]);
  let silinenmiktar = 0;
  for (var i = 0; i < (Math.floor(sayı/100)); i++) {
   message.channel.bulkDelete(100).then(r => silinenmiktar+=r.size);
   sayı = sayı-100;
  };
  if (sayı > 0)  message.channel.bulkDelete(sayı).then(r => silinenmiktar+=r.size);
  message.channel.send(` **\`\`${args[0]}\`\` Adet mesaj sildim.**`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = { 
  name: 'sil', 
  description: 'Belirtilen miktarda mesajı siler.',
  usage: 'sil',
};