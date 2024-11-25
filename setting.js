//+--------[ Including Of Module ]--------+//
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const ZetXD = new require('./lib/functions')
const ZetStyle = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
}));
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');};
//+--------[ Statement Of Module ]--------+//
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
const Xaphicalips = "`"
//+---------[ Bot Settings ]---------+//
global.ownername = 'Xyroo Aphocalips'
global.owner = ['966548012436'] //Ubah Nomor Mu
global.botname = '𝐙𝐞͢𝐮ᯭ𝐬 ᝄ 𝐀𝐩𝐡͢𝐨𝐜ᯭ𝐚𝐥𝐢͢𝐩𝐬 𐱃'
global.packname = 'Aphocalips Travazap'
global.author = `Xyroo Aphocalips`
global.hiasan = `	◦  `
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'YourSessions' 
global.sp = '⭔' 
global.wlcm = []
global.wlcmm = []
global.gris = '`'
global.wm = `Lost For Infomation !`
global.agency = '⾕ᝄ좀ᝄ厷ᝄ츈'
global.sticker1 = "\n\n\nXyroo"
global.sticker2 = "Xyroo Aphoclp 🎭"
//+---------[ Bot System ]---------+//
global.adana = '9999999999'
global.aqris = 'https://telegra.ph/file/1701509104e6531c8a4d1.jpg'
global.aovo = null
global.agopay = null

global.mess = { 
wait: `test`
}
//+---------[ Text Of Bug]---------+//
global.bug = {
   aaa: "🦠⃟⃟⃟​ᬁ𝐙͜𝐄͡𝐔͢𝐒 𝐀͡𝐏͜𝐇𝐎͡𝐂𝐀͢𝐋𝐈͜𝐏͡𝐒 ⃝⃝𝛞🎭𝐃̸𝐨͢𝐦͡𝐢𝐧͜𝐚𝐭͝𝐞͢𝐄̈́ͯͯͯͯ𝐯͠𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠",
   bbb: "🦠⃟⃟⃟​ᬁ𝐙͜𝐄͡𝐔͢𝐒 𝐀͡𝐏͜𝐇𝐎͡𝐂𝐀͢𝐋𝐈͜𝐏͡𝐒 ⃝⃝𝛞🎭𝐕̸𝐨͢𝐢͡𝐝͜𝐄͝𝐭͢𝐂̈́ͯͯͯͯ",
   ccc: "🦠⃟⃟⃟​ᬁ𝐙͜𝐄͡𝐔͢𝐒 𝐀͡𝐏͜𝐇𝐎͡𝐂𝐀͢𝐋𝐈͜𝐏͡𝐒 ⃝⃝𝛞🎭𝐖̸𝐢𝐥͢𝐥𝐃͡𝐢𝐞͜𝐖͝𝐢𝐭͢𝐡𝐘̈́ͯͯͯͯ𝐨͠𝐮"
};
module.exports = { bug }
//+---------[ Bot System ]---------+//
global.autobio = false // AutoBio
global.autoread = false //autoread
//+---------[ Store Database ]---------+//
global.namaStore = 'Xyroo Store'
global.ownerStore = 'Xyroo Exsentry'
//+---------[ Panel Database ]---------+//
global.domain = '' // Domain
global.apikey2 = '' // Plta
global.capikey2 = '' // Pltc
global.eggsnya = '15' // Value Egg
global.location = '1' // ID Locate
global.apilinode = ''
global.apitokendo = ''
//+---------[ Social Media ]---------+//
global.my = {
saluran: "https://whatsapp.com/channel/0029VajfzLhD38CPHcGHwm04",
idCH: "120363297561254824@newsletter",
youtube: "https://www.youtube.com/@zetxcza",
telegram: "https://t.me/zetxcza",
Instagram: "https://www.instagram.com/zxv.zet?igsh=d2k3bmw4OWxxcjM0"
   }  
global.url = "https://www.youtube.com/@zetxcza"
//+---------[ System Text ]---------+//
global.Func = ZetXD
global.mess = {
ban: '<!> Your Number Has Been Banned From Our Database!', 
badm: '<!> Bots Must Be Admins First!',
regis: '<!> Your Number Is Not In Our Database, Please Register First!',
premium: '<!> Can Only Be Accessed By PremiumUsers',
search: '</> Please Wait, Looking For It. . .',
done: '</> The Operation Was A Perfect Success!',
bugwait: '</> Sending Bug. . .',
success: '</> The Operation Was A Perfect Success!',
admin: '<!> Can Only Be Accessed By Admin',
owner: '<!> Can Only Be Accessed By The Owner',
group: '<!> This Feature Can Only Be Accessed In Groups',
private: '<!> This Feature Can Only Be Accesses In PrivateChat',
bot: '<!> Can Only Be Accessed By The BotUser',
wait: '</> Please Wait. . .',
getdata: '</> Scraping MetaData. . .',
fail: `<!> Can\`t Get MetaData.`,
error: '<?> System Error! Please Contact Developer Bot.',
errorF: '<?> System Error! This Feature is Still Under Development.'
}
//+---------[ User Limit System ]---------+//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//+--------------------------------------+//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})