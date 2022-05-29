/**
   * Created By LoRD.
   * Contact Me on wa.me/919778383987
   * Follow https://github.com/Lord-official
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«ᴍᴜɴᴀᴠɪʀ🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/D9bWZaPoqYII2559NgGRUx'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtu.be/loTpfSez1g4'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/munavir'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'MUNAVIR'
// Other
global.watermark = '𝙼𝚁-𝙼𝙳🍻'
global.owner = ['918590822912']
global.premium = ['918590822912']
global.packname = '𝙼𝚁-𝙼𝙳'
global.author = 'ꪶᴍᴜɴᴀᴠɪʀ☆'
global.sessionName = 'lord'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'ᴡᴀɪᴛ ᴀ ꜱᴇᴄᴏɴᴅ..',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
