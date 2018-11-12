var ServerID = "511633362331631621"; //اي دي السيرفر
var ChannelID = "511639593511026698";// اي دي الروم


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

client.on('ready', async() => {
let server = "511633362331631621"; // ايدي السررفر
let channel = "511639593511026698";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "511633362331631621"; // ايدي السررفر
var channel = "511639593511026698";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@480407581085532180>')
    },8.64e+7);
})
const devs = ['480407581085532180'];


 client.on('message', message => {
var prefix = "."
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {
if(!message.guild.member(message.author).hasPermission("ADMINSTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

message.channel.send(args.join("  "))
    message.delete();
  }



}); 





client.login(process.env.BOT_TOKEN);
