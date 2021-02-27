const Discord = require('discord.js');
const schedule = require('node-schedule');

require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

const prefix = '!';

client.on('ready', () => {
  console.log('Jedicord is ready!');

  const date = { hour: 10, minute: 00 };

  schedule.scheduleJob(date, () => {
    client.channels.cache.get(`813380135200751637`).send(`@everyone 
    What did you do yesterday? 
    What will you do today? 
    Are there any blockers or impediments preventing you from doing your work?`);
  });
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ready') {
    message.reply('yes');
  } else if (command === 'time') {
    message.reply(new Date().toLocaleString());
  } else if (command === 'nice') {
    message.reply('Thanks');
  } else if (command === 'count') {

    const numArgs = args.map((item) => +item);
    const sum = numArgs.reduce((a, b) => a + b, 0);

    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  } else if (command === 'nice') {
    message.reply('Thanks');
  } else if (command === 'nice') {
    message.reply('Thanks');
  } else if (command === 'jedi-daily') {
    const text = message.content
      .replace(/(?:\r\n|\r|\n)/g, ' ')
      .split(/Yesterday|Today|Blockers/gi)
      .map((item) => item.trim());

    client.channels.cache.get(`720538151038353520`).send(
      `Here is the daily message of @${message.author.username}
      :white_check_mark: You did yesterday: ${text[1]}
      :tools: You going to do today: ${text[2]}
      :sos: Your blockers: ${text[3]}`
    );
    //message.reply('not today, pal')
  }
});
