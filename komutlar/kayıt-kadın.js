const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["779999144566849547", "780159285312749619"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("779999144566849547"))) return message.reply(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
  
const kayıtlı = message.guild.roles.cache.find(r => r.id === '780001230814445569')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '779999655428882432')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send('Bir Kullanıcı Belirt.')
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen kullanıcı ile Üst/Aynı pozisyonda bulunuyorsunuz.')
const x = message.guild.member(member)
let bilgi = db.get(`yetkili.${member.id}`);
  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

let tag = "❃"
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt.`)
if(!yas) return message.channel.send(`Bir Yaş Belirt.`)
  
  
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kayıtlı)
x.roles.remove(kayıtsız)
  

  
const embed = new dc.MessageEmbed()
.setDescription(`
<a:radeniayildiz:781082441808871434> ${member} Adlı Kullanıcı <@${message.author.id}> Tarafından Kayıt Edildi.
<a:radeniayildiz:781082441808871434> Kullanıcının Adı \`${tag} ${isim} | ${yas}\` Olarak Güncellendi ${kayıtlı} Rolü Verildi
`)
.setColor('#ffffff')
.setFooter(`Toplam Kayıt ${toplami} Sayısına Ulaştın`)
message.channel.send(embed)

  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadın", "k", "woman", "girl"],
    permLevel: 0
};

exports.help = {
    name: "kadın"
}

