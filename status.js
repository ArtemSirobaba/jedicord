module.exports = (message, client) => {
  const { content } = message;
  if (content.includes('Грогу')) {
    message.reply('Записав! :)');
    client.channels.cache.get(`813380135200751637`)
      .send(`Ось тижневе повідомлення від @${message.author.username}:
      ${content.replace(/Грогу(,)?( +)?(\n)?/gim, '')}`);
  }
};