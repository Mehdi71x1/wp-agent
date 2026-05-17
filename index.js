const { Client, LocalAuth } = require('whatsapp-web.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
    }
});

// Using pairing code instead of QR
client.on('qr', async (qr) => {
    console.log('QR Code received, but we will use Pairing Code instead.');
    try {
        const pairingCode = await client.requestPairingCode('8801627280992');
        console.log('-------------------------------------------');
        console.log('YOUR WHATSAPP PAIRING CODE IS:');
        console.log(pairingCode);
        console.log('-------------------------------------------');
        console.log('Please enter this code on your WhatsApp (+8801627280992).');
    } catch (err) {
        console.error('Error requesting pairing code:', err);
    }
});

client.on('ready', () => {
    console.log('WhatsApp Agent is ready and connected!');
});

client.on('message', async (msg) => {
    if (msg.fromMe) return;

    try {
        console.log(`Received message from ${msg.from}: ${msg.body}`);
        const prompt = msg.body;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        await msg.reply(text);
        console.log(`Replied with: ${text}`);
    } catch (error) {
        console.error('Error with Gemini API:', error);
    }
});

client.initialize();
