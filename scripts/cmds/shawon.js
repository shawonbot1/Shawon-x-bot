const axios = require("axios");

module.exports = {
  config: {
    name: "Shawon",
    version: "1.0",
    author: "💋𝗠𝗢𝗦𝗧𝗔𝗞𝗜𝗠 × 𝗕𝗔𝐃𝐇𝗢𝐍💀",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const input = event.body?.toLowerCase();
    const triggers = ["Shawon", "Sara baby tmr boss ke", "tmr boss ke", "Shawon ke", "tomar boss ke"];

    const replies = [
`𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 𝗦𝗛𝗔𝗪𝗢𝗡
╔                            ╗  
《 ⚙️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 》
╚                            ╝
╔═ ══════════════ ═╗
     🛡️ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️ 
  𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑: 𝗦𝗛𝗔𝗪𝗢𝗡 
╚═ ══════════════ ═╝

═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═

✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗥𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  

💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙
— 𝗦𝗔𝗥𝗔 𝗕𝗔𝗕𝗬

👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑:𝗦𝗛𝗔𝗪𝗢𝗡
📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅  𝐎𝐍𝐋𝐈𝐍𝐄
📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: 𝗦𝗔𝗥𝗔 𝗕𝗔𝗕𝗬
🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0 
➤ 𝐏𝐫𝐞𝐟𝐢𝐱: _  

📘 COMMANDS: 148 
🔐 ADMINS ONLINE: ∞ 
🌍 USERS: ∞

👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞:𝗦𝗛𝗔𝗪𝗢𝗡
🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌
🎓 𝐒𝐓𝐔𝐃𝐘: 𝐂𝐋𝐀𝐒𝐒 11
🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈
🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗕𝗔𝗥𝗚𝗨𝗡𝗔, 𝗕𝗔𝗥𝗚𝗨𝗡𝗔 

📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:
📸 IG: ❌
📘 FB:𝗦𝗛𝗔𝗪𝗢𝗡  / 
📨 TG: +8801623876759
▶️ YT: shawon_bhai_yt
🎮 Discord: ❌
📧 Email: shawoneditor62@gmail.com
📱 Phone/WhatsApp: +8801623876759

📅 LAST RESTART: 2025-04-25
🌐 SERVER ID: #83472`
    ];

    if (triggers.includes(input)) {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      const fileUrl = "";

      try {
        const response = await axios.get(fileUrl, { responseType: "stream" });
        return message.reply({
          body: randomReply,
          attachment: response.data
        });
      } catch (err) {
        return message.reply(randomReply + "\n\n(Attachment failed to load)");
      }
    }
  }
};
