module.exports = (message, client) => {
  const { content } = message;
  const text = content.replace(/(?:\r\n|\r|\n)/g, ' ');
  if (/(^!*today)/gim.test(content) && /(^!*yesterday)/gim.test(content)) {
    const statusArray = text
      .split(/yesterday|today/gi)
      .map((item) => item.trim());
    message.reply('I wrote down! :)');
    client.channels.cache.get(`720538151038353520`)
      .send(`Here is the daily message of @${message.author.username}
         :white_check_mark: You did yesterday: ${statusArray[1] || 'nothing'}
         :tools: You going to do today: ${statusArray[2] || 'nothing'}`);
  } else if (
    /(^!*сьогодні)/gim.test(content) &&
    /(^!*вчора)/gim.test(content)
  ) {
    const statusArray = text
      .split(/вчора|сьогодні/gi)
      .map((item) => item.trim());
    message.reply('Записав! :)');
    client.channels.cache.get(`720538151038353520`)
      .send(`Ось щоденне повідомлення від @${message.author.username}
     :white_check_mark: Я зробив вчора: ${statusArray[1] || 'нічого'}
     :tools: Я збираюся зробити сьогодні: ${statusArray[2] || 'нічого'}`);
  }
};
