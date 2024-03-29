const Discord = require('discord.js');
const schedule = require('node-schedule');
const status = require('./status');

require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

const prefix = '!';

client.on('ready', () => {
  console.log('Grogu is ready!');

  schedule.scheduleJob('0 9 * * 1', () => {
    //https://crontab.guru/
    client.channels.cache.get(`817392453308907561`).send(`@everyone 
Як пройшов твій тиждень?
Що корисного ти вивчив(-ла)/зробив(-ла)?
Які плани на наступний тиждень?
----------------------------
Приклад відповіді:
Грогу, Тиждень пройшов насичено, вивчив декілька нових ліб до Vue.js.
Весь наступний тиждень буду правити баги.
("Грогу" - обов'язково)`);
  });
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.mentions.users.get('815193302831595551') !== undefined) {
    status(message, client);
  }

  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ready') {
    message.reply('yes');
  } else if (command === 'time') {
    message.reply(new Date().toString());
  } else if (command === 'nice') {
    message.reply('Thanks');
  } else if (command === 'count') {
    const numArgs = args.map((item) => +item);
    const sum = numArgs.reduce((a, b) => a + b, 0);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});
