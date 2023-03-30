var telegramBot = require('node-telegram-bot-api');
var token = '5940223741:AAFr1CRmw3N7lrvdMSSEuzlpZ-9hwN08wwY';//token of a bot
var api = new telegramBot(token, { polling: true });



//Bot commands
api.onText(/\/help/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "This bot has 6 commands:\n" +
        "/DApps\n/DeFi\n/marketUpdates\n/web3community");
});
api.onText(/\/start/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "They call me @blockchainEcosystem_bot. " +
        "Welcome to our blockchain ecosystem bot!" + 
        "Stay up-to-date with the latest events and trends in the world of blockchain technology." + 
        "Get instant access to real-time market data, " + 
        "project updates from top 20 industry leaders." + 
        "Whether you're a seasoned blockchain enthusiast or just getting started, our bot has everything you need to stay informed and connected. " + 
        "Join us today and be part of the future of decentralized technology! "+
        "All commands you can see with /help command" );
});
api.onText(/\/Daaps/, function(msg, match){
    var fromId = msg.from.id;
    api.sendMessage(fromId, "Dapps, or decentralized applications, " +
        "are applications that run on decentralized networks, such as blockchain technology. " +
        "Dapps have the potential to be more secure, transparent, and resistant to censorship " +
        "and downtime than traditional centralized applications.");
    api.sendMessage(fromId, "There are several rules for designing Daaps: \n" +
        "\n 1. Define the users of and use cases for the system." +
        "\n 2. Define the data assets, peer participants and their roles, rules to be enforced " +
        "and transactions to be recorded for the system you will be designing." +
        "\n 3. Define a contract diagram that specifies the name, data assests, functions and rules for execution " +
        "of functions access to the data.");
    api.sendMessage(fromId, "Do you want me to send detailed information about Daaps?\n" +
        "(Y/N)", {
        reply_markup: {
            keyboard: [['Yes', 'No']],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
        api.once('message', (msg) => {
            const fromId = msg.chat.id;
            const response = msg.text.toLowerCase();
            if (response === 'yes') {
                api.sendMessage(fromId, 'All information is written in the next message\n\n');
                setTimeout(() => {
                    api.sendMessage(fromId, 'https://telegra.ph/There-are-several-websites-where-developers-represented-a-conception-of-a-Daaps-03-30-2')
                }, "3000");
            } else if (response === 'no') {
                api.sendMessage(fromId, 'Alright!');
            } else {
                api.sendMessage(fromId, 'Invalid response. Please try again.');
                promptUser();
                return;
            }
            // remove the listener to allow the user to enter other commands
            api.removeTextListener(promptUser);

        });
    
    
});
api.onText(/\/web3community/, function(msg, match){
    var fromId = msg.from.id;
    api.sendMessage(fromId, "All of the community will be a telgram channels: \n" +
    "1. https://t.me/bnbchain\n"+
    "2. https://t.me/blockchain\n"+
    "3. https://t.me/cointelegraph\n"+
    "4. https://t.me/cryptoslate"
    );
});
//Top 20 coins in the market
//latest news
//events and trend
//project updates
//expert insights
//communications

//Bot commands


//conscole output
console.log("sLyr@ck's bot has started. Start conversation in your Telegram.");
const readline = require('readline');

function animateDots() {
    let count = 0;
    const dots = ['   ', '.  ', '.. ', '...'];
    const message = 'Application is running';
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    setInterval(() => {
        rl.write(null, { ctrl: true, name: 'u' });
        rl.write(`${message}${dots[count]}`);
        count = (count + 1) % dots.length;
    }, 500);
}

animateDots();


