const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
 name: 'autosent',
 version: '10.0.4',
 hasPermssion: 0,
 credits: 'Priyansh Rajput (Modified by SUJON)',
 description: 'Automatically sends funny-love mixed messages based on time (BD Time)',
 commandCategory: 'group',
 usages: '',
 cooldowns: 3
};

const messages = [
 { time: '12:00 AM', message: '⌚ সময়: ১২:০০ AM,\n💌 “তোমার স্বপ্নে আসতে দেরি হলে মাফ কইরো, রাস্তায় প্যাট্রোল শেষ হইছিল।”' },
 { time: '1:00 AM', message: '⌚ সময়: ১:০০ AM,\n😴 “প্রেমিকা ঘুমালে শান্তি, না ঘুমালে ইনবক্সে টর্নেডো।”' },
 { time: '2:00 AM', message: '⌚ সময়: ২:০০ AM,\n💤 “যার সাথে চ্যাট করো সে ঘুমিয়ে পড়লে বুঝবা—তোমার রোমান্স একতরফা।”' },
 { time: '3:00 AM', message: '⌚ সময়: ৩:০০ AM,\n👻 “রাত ৩টার প্রেম মানেই Ghosting এর পূর্বাভাস!”' },
 { time: '4:00 AM', message: '⌚ সময়: ৪:০০ AM,\n🌅 “ভোরের হাওয়া আর এক্স এর স্মৃতি—দুটোই ঠান্ডা লাগে!”' },
 { time: '5:00 AM', message: '⌚ সময়: ৫:০০ AM,\n🐓 “সে সকালে ওঠে না, কিন্তু স্বপ্নে প্রেম করে ঠিকই!”' },
 { time: '6:00 AM', message: '⌚ সময়: ৬:০০ AM,\n🌤️ “সকাল শুরু হোক তোমার মেসেজ দিয়ে—not স্নুজ বাটনে চাপ দিয়ে!”' },
 { time: '7:00 AM', message: '⌚ সময়: ৭:০০ AM,\n💘 “সকাল সকাল তুমি ছাড়া কফিও বিস্বাদ লাগে!”' },
 { time: '8:00 AM', message: '⌚ সময়: ৮:০০ AM,\n😎 “তোমার হাসির চাইতে বেশি তাজা কিছুই নাই—চা-ও না!”' },
 { time: '9:00 AM', message: '⌚ সময়: ৯:০০ AM,\n📱 “তুমি যদি অফিসে যাও, আমি তোমার লাঞ্চবক্সের নোট—মিস ইউ!”' },
 { time: '10:00 AM', message: '⌚ সময়: ১০:০০ AM,\n😂 “যারা প্রেম করে অফিসে বসে বসে, তাদের বসও প্রেমে পড়ে... চাকরির সাথে!”' },
 { time: '11:00 AM', message: '⌚ সময়: ১১:০০ AM,\n💔 “তোমার সাথে রাগ করলেও চেক করি তুমি Seen দিছো কিনা!”' },
 { time: '12:00 PM', message: '⌚ সময়: ১২:০০ PM,\n🍛 “দুপুরের খাওয়ার চাইতেও তোর মেসেজ বেশি তৃপ্তির!”' },
 { time: '1:00 PM', message: '⌚ সময়: ১:০০ PM,\n😪 “যে ভালোবাসে সে ঘুমেও তোমার নাম নেয়—আমি নাকি ঘুমিয়ে হাঁসি!”' },
 { time: '2:00 PM', message: '⌚ সময়: ২:০০ PM,\n🤳 “তোমার DP না দেখলে আমার ঘুম আসে না—আমিও জানি এটা ওভার অ্যাক্টিং।”' },
 { time: '3:00 PM', message: '⌚ সময়: ৩:০০ PM,\n😴 “ঘুমে দেখি তুমি পাশে, ঘুম ভাঙলেই দেখি পিলো কাঁপছে!”' },
 { time: '4:00 PM', message: '⌚ সময়: ৪:০০ PM,\n🍵 “তুমি চায়ের কাপের মতো—গরম গরম, মিষ্টি মিষ্টি আর ভীষণ নেশাদার!”' },
 { time: '5:00 PM', message: '⌚ সময়: ৫:০০ PM,\n🧠 “প্রেমে পড়া মানে IQ ডাউনলোড, আর Breakup মানে আবার ইন্সটল!”' },
 { time: '6:00 PM', message: '⌚ সময়: ৬:০০ PM,\n🕌 “নামাজ পড়ো, নয়তো প্রেমিকা ছাড়বে না—মাও!”' },
 { time: '7:00 PM', message: '⌚ সময়: ৭:০০ PM,\n🌇 “সূর্য ডুবে যাচ্ছে, কিন্তু তোমার ইনবক্স এখনো Seen ছাড়া!”' },
 { time: '8:00 PM', message: '⌚ সময়: ৮:০০ PM,\n🎧 “তোমার ভয়েস মেসেজ মানেই ঘুমের ওষুধ—তাও মজার!”' },
 { time: '9:00 PM', message: '⌚ সময়: ৯:০০ PM,\n😌 “রাত মানেই Pillow + Mobile + তোমার পুরনো মেসেজ পড়ে কান্না!”' },
 { time: '10:00 PM', message: '⌚ সময়: ১০:০০ PM,\n📵 “তুমি রেগে গেলে আমার WiFi-ও Disconnect হয়ে যায় মনে হয়!”' },
 { time: '11:00 PM', message: '⌚ সময়: ১১:০০ PM,\n💤 “শুভ রাত্রি বলো, নাহলে আমি ঘুমাতে পারি না—তুমি না বললে নিন্দ্রাও রাগ করে!”' },
];

module.exports.onLoad = ({ api }) => {
 console.log(chalk.green.bold('✅ AutoSent Funny-Love Module Loaded (BD Time)'));

 messages.forEach(({ time, message }) => {
   const [hour, minute, period] = time.split(/[: ]/);
   let hour24 = parseInt(hour);
   if (period === 'PM' && hour !== '12') hour24 += 12;
   if (period === 'AM' && hour === '12') hour24 = 0;

   const rule = new schedule.RecurrenceRule();
   rule.tz = 'Asia/Dhaka';
   rule.hour = hour24;
   rule.minute = parseInt(minute);

   schedule.scheduleJob(rule, () => {
     if (!global.data?.allThreadID) return;
     global.data.allThreadID.forEach(threadID => {
       api.sendMessage(message, threadID, (err) => {
         if (err) console.error(`❌ Error sending message to ${threadID}:`, err);
       });
     });
   });
 });

};

module.exports.run = () => {};
