/* Codded by @BLACKRICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - DINUKA
*/

const Rico = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');



if (Config.LANG == 'EN') {
Rico.addCommand({pattern: 'admin$', fromMe: true, delowndinukacmd: false, desc: 'all admin command'}, (async (message, match) => {
     
await message.sendMessage(`*✨✨♔♕ADMIN COMMAND♕♔✨✨*`);
  
}));
