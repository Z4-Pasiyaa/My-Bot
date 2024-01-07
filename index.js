const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
const { Client , IntentsBitField, Integration, EmbedBuilder, ActivityType, Options } = require('discord.js');


client.on("ready", (c) => {
  console.log(`${c.user.username} is Online.✅`);



client.login(process.env.TOKEN); //login bot using token
