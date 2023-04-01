var telegramBot = require('node-telegram-bot-api');
var token = '5940223741:AAFr1CRmw3N7lrvdMSSEuzlpZ-9hwN08wwY';//token of a bot
var api = new telegramBot(token, { polling: true });
const axios = require('axios');
// CoinGecko API endpoint   
const COINGECKO_API_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/markets';




//Bot commands
// help
api.onText(/\/help/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "This bot has 6 commands:\n" +
        "/DApps\n/DeFi\n/marketUpdates\n/web3community");
});
// help

//start
api.onText(/\/start/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "They call me @blockchainEcosystem_bot. " +
        "Welcome to our blockchain ecosystem bot! " + 
        "Stay up-to-date with the latest events and trends in the world of blockchain technology. " + 
        "Get instant access to real-time market data, " + 
        "project updates from top 20 industry leaders. " + 
        "Whether you're a seasoned blockchain enthusiast or just getting started, our bot has everything you need to stay informed and connected. " + 
        "Join us today and be part of the future of decentralized technology! "+
        "All commands you can see with /help command" );
});
//start

//DApps
api.onText(/\/DApps/, function(msg, match){
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
    
        api.once('message', (msg) => {
            const fromId = msg.chat.id;
            const response = msg.text.toLowerCase();
            if (response === 'yes') {
                api.sendMessage(fromId, 'All information is written here👇🏾\n\n').then((message) => {
                    const messageId = message.message_id;
                    api.sendMessage(fromId, 'https://telegra.ph/There-are-several-websites-where-developers-represented-a-conception-of-a-Daaps-03-30-2')
                        .then(() => {
                            setTimeout(() => {
                                api.deleteMessage(fromId, messageId);
                            }, 3000); // wait for 5 seconds before deleting the message
                        });
                });
            }
            else if (response === 'no') {
                api.sendMessage(fromId, 'Alright!');
            } else {
                api.sendMessage(fromId, 'Invalid response. Please try again.');
                promptUser();
                return;
            }
            // remove the listener to allow the user to enter other commands
            api.removeTextListener(promptUser);

        });
    api.sendMessage(fromId, "Do you want me to send detailed information about Daaps?\n" +
        "(Yes/No)", {
        reply_markup: {
            keyboard: [['Yes', 'No']],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
    
});
//DApps

//web3community
api.onText(/\/web3community/, function(msg, match){
    var fromId = msg.from.id;
    api.sendMessage(fromId, "All of the community will be a telgram channels: \n" +
    "1. https://t.me/bnbchain\n"+
    "2. https://t.me/blockchain\n"+
    "3. https://t.me/cointelegraph\n"+
    "4. https://t.me/cryptoslate"
    );
});
//web3community

//marketUpdates
api.onText(/\/marketUpdates/, function (msg, match) {
    var fromId = msg.from.id;

    // Parameters for CoinGecko API request
    const params = {
        vs_currency: 'usd',
        per_page: 20,
        page: 1,
        order: 'market_cap_desc'
    };

    // Send API request to CoinGecko
    axios.get(COINGECKO_API_ENDPOINT, { params })
        .then(response => {
            // Extract top 20 coins from response
            const coins = response.data.slice(0, 20);
            let message = 'Top 20 cryptocurrency coins by market cap:\n';
            coins.forEach((coin, index) => {
                message += `||  ${index + 1}. ${coin.name} (${coin.symbol.toUpperCase()}) - $${coin.current_price}\n`;
            });
            // Send message with top 20 coins to user
            api.sendMessage(fromId, message);
        })
        .catch(error => {
            console.log(error);
            api.sendMessage(fromId, 'Sorry, something went wrong while fetching market data.');
        });
});
//marketUpdates

//DeFi
api.onText(/\/DeFi/, function(msg, match){
    var fromId = msg.from.id;
    api.sendMessage(fromId, "DeFi, or decentralized finance, " + 
    "refers to a new movement in finance that seeks to create a more open, transparent, and decentralized financial system using blockchain technology." +
    "The basic idea behind DeFi is to replace traditional financial intermediaries, such as banks and other financial institutions, " +
    "with decentralized networks of smart contracts that can execute financial transactions without the need for a central authority. \n\n" +
    "DeFi applications are built on blockchain platforms, such as Ethereum, and enable users to borrow, lend, trade, and invest in a wide range of financial instruments, including cryptocurrencies, stablecoins, " + 
    "and other digital assets.Some of the key features of DeFi include open access, peer - to - peer transactions, transparency, and non - custodial control over funds.");
    var time = function(){
        api.sendMessage(fromId, "Here is the examples of DeFi:👇🏾\n" +
            "https://telegra.ph/The-examples-of-DeFi-03-31");
    }
    var timeout = setTimeout(time, 3000);

});
//DeFi
//Top 20 coins in the market
//latest news
//events and trend  
//project updates
//expert insights

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


