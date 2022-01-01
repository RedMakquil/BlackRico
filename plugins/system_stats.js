const Draco = require('queenamdi-public');
const Rico = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let Work_Mode = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '💃 BLACK RICO CMD PANEL'
if (Config.LANG == 'EN') SYSDTXT = '💃 BLACK RICO CMD PANEL'

var VER = ''
if (Config.LANG == 'SI') VER = '🧬 BLACK RICO VERSION'
if (Config.LANG == 'EN') VER = '🧬 BLACK RICO VERSION'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '```Hey There! Bot Online now. 💖♥️```\n\n*Developer:* ```Cyber Draco```\n\n*ʙᴏᴛ ɪɴsᴛᴀʟʟ sɪᴛᴇ:* https://github.com/CyberDraco/BlackRico\n\n```Thank You For Using Black Rico💃💖```/n ʙᴜᴛᴛᴏɴs ᴄᴏᴅᴇᴅ ʙʏ ᴅɪɴᴜᴋᴀ'
else MSG = Config.ALIVEMSG


Rico.addCommand({pattern: 'alive', fromMe: Work_Mode, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    await Draco.amdi_setup()
    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'versiondraco', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'RICO', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ʙʟᴀᴄᴋ ʀɪᴄᴏ ʙᴜᴛᴛᴏɴ ᴠᴇʀsɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))


Rico.addCommand({pattern: 'versiondraco', fromMe: Work_Mode, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await Draco.amdi_setup()
    await message.client.sendMessage(message.jid, 
        `*🧬 Black Rico Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://github.com/CyberDraco/BlackRico`
   , MessageType.text, {quoted: message.data});
    
}));