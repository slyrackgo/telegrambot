var telegramBot = require('node-telegram-bot-api');
var token = '5940223741:AAFr1CRmw3N7lrvdMSSEuzlpZ-9hwN08wwY';//token of a bot
var api = new telegramBot(token, { polling: true });
const axios = require('axios');
// CoinGecko API endpoint   
const COINGECKO_API_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/markets';

//Bot commands


//start
api.onText(/\/start/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "They call me @blockchainEcosystem_bot. " +
        "Welcome to our blockchain ecosystem bot! " + 
        "Stay up-to-date with the latest events and trends in the world of blockchain technology. " + 
        "Get instant access to real-time market data, " + 
        "project updates from top 20 industry leaders. " + 
        "Whether you're a seasoned blockchain enthusiast or just getting started, our bot has everything you need to stay informed and connected. " + 
        "Join us today and be part of the future of decentralized technology! ");
      
});
//start

//DApps
api.onText(/\/dapps/, function(msg, match){
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
                });x
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
//portfolio
const portfolios = {};
api.onText(/\/portfolio/, function (msg) {
    const fromId = msg.from.id;

    if (!portfolios[fromId] || Object.keys(portfolios[fromId]).length === 0) {
        api.sendMessage(fromId, 'You have not entered any assets in your portfolio.',{
            reply_markup: {
                keyboard: [['Add Portfolio', 'Watch Portfolio', 'Remove']],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
        return;
    }

    const portfolioData = portfolios[fromId];
    let message = 'Your Portfolio:\n';

    Object.entries(portfolioData).forEach(([coinName, coinAmount]) => {
        message += `${coinName}: ${coinAmount}\n`;
    });
    // Object.entries(portfolioData).forEach(([coin_name, coin_amount]) =>{
    //     message -= `${coin_name}: ${coin_amount}\n`;
    // })
   

    api.sendMessage(fromId, message);
});

// Add Portfolio button
api.onText(/Add Portfolio/, function (msg) {
    const fromId = msg.from.id;

    api.sendMessage(fromId, 'Enter the name of the coin:');
    api.once('message', (msg) => {
        const coinName = msg.text;

        api.sendMessage(fromId, 'Enter the amount of coins:');
        api.once('message', (msg) => {
            const coinAmount = msg.text;

            if (!portfolios[fromId]) {
                portfolios[fromId] = {};
            }

            portfolios[fromId][coinName] = coinAmount;

            api.sendMessage(fromId, 'Asset added to your portfolio.');
        });
    });
});

// Watch Portfolio button
api.onText(/Watch Portfolio/, function (msg) {
    const fromId = msg.from.id;

    if (!portfolios[fromId] || Object.keys(portfolios[fromId]).length === 0) {
        api.sendMessage(fromId, 'You have not entered any assets in your portfolio.');
        return;
    }

    const portfolioData = portfolios[fromId];
    let message = 'Your Portfolio:\n';

    Object.entries(portfolioData).forEach(([coinName, coinAmount]) => {
        message += `${coinName}: ${coinAmount}\n`;
    });

    api.sendMessage(fromId, message);
});
api.onText(/Remove/, function(msg){
    const fromId = msg.from.id;
    if (!portfolios[fromId] || Object.keys(portfolios[fromId]).length === 0) {
        api.sendMessage(fromId, 'You have not entered any assets in your portfolio.',{
            reply_markup: {
                keyboard: [['Add Portfolio', 'Watch Portfolio', 'Remove']],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
        return;
    }
    api.sendMessage(fromId, 'Enter the name of the coin you want to remove:');
    api.once('message', (msg) =>{
        const coinName = msg.text;
        api.sendMessage(fromId, 'Enter amount of coins:');
        api.once('message', (msg) => {
            const coinAmount = msg.text;
            if(!portfolios[fromId]){
                portfolios[fromId] = {};
            }
            portfolios[fromId][coinName] -= coinAmount;
            api.sendMessage(fromId, 'Asset removed from your portfolio.');
        })
    })
    Object.entries(portfolioData).forEach(([coin_name, coin_amount]) =>{
        message -= `${coin_name}: ${coin_amount}\n`;
    });
})

//portfolio
//web3community
api.onText(/\/community/, function (msg, match) {
    const fromId = msg.from.id;
    const message = `Join the Web 3 community and connect with like-minded individuals in these group chats:
  
  🔹 https://t.me/bnbchain
  🔹 https://t.me/blockchain
  🔹 https://t.me/cointelegraph
  🔹 https://t.me/cryptoslate
  
  And don't forget to check out these Discord servers:
  
  🟣 <a href="https://discord.gg/bnbchain">&#8205;</a><code>https://discord.gg/bnbchain</code>
  🟣 <a href="https://discord.gg/chainlink">&#8205;</a><code>https://discord.gg/chainlink</code>
  🟣 <a href="https://discord.gg/polkadot">&#8205;</a><code>https://discord.gg/polkadot</code>
  
  Join the conversation and stay up-to-date with the latest news and developments in the Web 3 world! 🚀`;
  
    api.sendMessage(fromId, message, { parse_mode: 'HTML', disable_web_page_preview: true });
  });
//web3community

//marketUpdates
api.onText(/\/market/, function (msg, match) {
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
            let message = '🚀Top 20 cryptocurrency coins by market cap:\n';
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
api.onText(/\/defi/, function(msg, match){
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




//latest news
//events and trend  
//project updates
//expert insights

//Bot commands


//conscole output
console.log('\x1b[32m ',"sLyr@ck's bot has started.©️ Start conversation in your Telegram.");
const readline = require('readline');
const { Z_FIXED } = require('zlib');
const { query } = require('express');

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
