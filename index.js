const telegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
const logger = require('node-logger').createLogger('development.log')

dotenv.config();
const bot = new telegramBot(process.env.BOT_TOKEN, {polling: true})

bot.onText(/\echo( |@.+ )(.+)/, (msg, match) => {
	const chatId = msg.chat.id
	const resp = match[2]

	bot.sendMessage(chatId, resp);
})

bot.onText(/\oi/, (msg, match) => {
	const chatId = msg.chat.id
	const resp = match[1]

	bot.sendMessage(chatId, resp);
})

bot.on('message', (msg) => {
	logger.info(JSON.stringify(msg))
})

const func = `(msg, match) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, 'testim');
}`

bot.onText(/\/teste/, eval(func));