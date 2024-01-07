const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
const { Client , IntentsBitField, Integration, EmbedBuilder, ActivityType, Options } = require('discord.js');

let status = [
  {
    name: "Z4 Army Discord",
    type: ActivityType.Watching,
  },
  {
    name: "illustrator",
    type: ActivityType.Playing,
  },
  {
    name: "Visual Studio Code",
    type: ActivityType.Playing,
  },
  {
    name: "Photoshop",
    type: ActivityType.Playing,
  },
];

client.on("ready", (c) => {
  console.log(`${c.user.username} is Online.✅`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});


client.login(process.env.TOKEN); //login bot using token
