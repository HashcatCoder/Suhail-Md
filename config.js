const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Delhi,India."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Panda:Panda@panda.1ibreli.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ཐི༏ཋྀᗷᑌTTEᖇᖴᒪYཐི༏ཋྀ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918877753308";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,918xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,918xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918877753308,918xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_25_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImE4T3BUdEVENWViNnYzczNCQWxHdEtPOEQwL1pnY09RL0RubDVsS2psZ3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTUwOTU5MTQwODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwNjhCOTIwNDdCNDlCMjIyQTBFQTlFODA4MTY4NEU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjMwODczNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4Yll4REVqOFNWbW5uWEF5TllGekNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJmOTQ1YTFlLTZjNDAtNDQxNy1iMGU4LWE0M2MwYzEwMDY0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE4NCxcbiAgICAgIDIyMyxcbiAgICAgIDE0MixcbiAgICAgIDk1LFxuICAgICAgMTY4LFxuICAgICAgMTQsXG4gICAgICAxMTcsXG4gICAgICAyMjMsXG4gICAgICAxNjYsXG4gICAgICAyMTMsXG4gICAgICAyMyxcbiAgICAgIDE5LFxuICAgICAgMTQ0LFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMTM0LFxuICAgICAgMjQ5LFxuICAgICAgMjUwLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDEyMixcbiAgICAgIDE4MCxcbiAgICAgIDIyMSxcbiAgICAgIDIxNSxcbiAgICAgIDE4NCxcbiAgICAgIDExMCxcbiAgICAgIDM4LFxuICAgICAgMjQ2LFxuICAgICAgOTUsXG4gICAgICAxODcsXG4gICAgICA0LFxuICAgICAgNjUsXG4gICAgICAxNDcsXG4gICAgICA5OCxcbiAgICAgIDIwNCxcbiAgICAgIDE1NSxcbiAgICAgIDEyNixcbiAgICAgIDE5LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN3pzUVVROXBXenNnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ2UE1waUtobllMNlc2aHVjejMwbHpFOUNFbU5wSmJ6cDN5aldrQ3ZxaTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3dSVmloZ3RaVjVXT1hsdmxNSFhYVSt0eVRyaXlTV0t2UGRIUnhwN21oaE04YVJ0L0NNeWpZTkdibFZHbzZQdHczTldhZDNRaFJJZWwxc2tPTWYwRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWpqODFnc1JHOHh6WFNxdWRiQ3d5Syt2RHZINU9La2ovWXhJZlZlWkNWYnlVMDBkdktJK0luZUxxMVJHVnNtTUpZNHpBRG9VZXZkRFovQ0srd2FtaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNTA5NTkxNDA4Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHlsZXJcIixcbiAgICBcImxpZFwiOiBcIjE3OTg1MjE5MTc4MDk3Mzo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTUwOTU5MTQwODI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjMwODcyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk0NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiREp3K2VBTll4M05CdUJpazRnaDhRb1R3aGlURGNvSTVBTFhFcEhEa2NqWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTMwMzQyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTQ2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFlkR2RoOGlhK0RSZS9XZUFOUllscno3V1E2Y0Z1SG1TQnlVNVpWSEpqYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTMwMzQyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjMwNjcxNzk1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "```ཐི༏ཋྀ```" , // ```『ᗷᑌTTEᖇᖴᒪY』``` ", //*『ཐི༏ཋྀ • ♡』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᗷᑌTTEᖇᖴᒪY",
  ownername:process.env.OWNER_NAME|| "It'x Onymousཐི༏ཋྀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
