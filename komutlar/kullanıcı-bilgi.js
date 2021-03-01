const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, tools) => {
let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
       
    const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
    
    .setThumbnail(user.avatarURL)
    
    .setTitle(`${user.username}#${user.discriminator} Kullanıcı Bilgi'si`)
    
    .addField("<a:radeniatik:781082445050806292> İsim :",`${user.username}#${user.discriminator}`, true)
    .addField("<a:radeniatik:781082445050806292> İd :", `${user.id}`, true)
    .addField("<a:radeniatik:781082445050806292> Discord Tag :", `#${user.discriminator}`, true)
    .addField("<a:radeniatik:781082445050806292> Hesap Oluşturma Tarihi :", `${moment.utc(user.createdAt).format('dddd, MMMM.Do.YYYY, ')}`, true)
    .addField("<a:radeniatik:781082445050806292> Sunucuya Katılma Tarihi :", `${moment.utc(member.joinedAt).format('dddd, MMMM.Do.YYYY')}`, true)
    .addField("<a:radeniatik:781082445050806292> Durumu :", `${user.presence.status}`, true)
  .setImage('https://cdn.discordapp.com/attachments/762314428045328385/762381656724078652/kobscode_2.gif')
    message.channel.send({embed});
    }

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['profil-bilgi','profilbilgi','kullanıcı-bilgi','kullanıcıbilgi','k-bilgi','kbilgi','kb'], 
  permLevel: 0 
};

exports.help = {
  name: 'kullanıcı-bilgi', 
  description: 'Etiketlediğin / kendi profilin hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi' 
};