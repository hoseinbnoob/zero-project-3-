const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const Discord = require("discord.js");
const client = new Discord.Client();

const querystring = require('querystring'); // import query 
const fetch = require('node-fetch'); // import api tool
const cron = require('node-cron');
const moment = require('moment');
const pm = require('pretty-ms');
const chalk = require('chalk');
const axios = require('axios');
const randomPuppy = require('random-puppy');
const Gamedig = require('gamedig');
const Database = require("@replit/database")
const db = new Database()
const hook = new Discord.WebhookClient("787199136105627709", "eqCH11SAoeFlxdyIX4hgIyyELaBfolQ333RX0Y33QozG8-tkGLQT5d_s-IHs63ZovOb7");


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    hook.send('bot on shod @everyone');
    client.user.setActivity('Updating 💦💤', {
        type: 'PLAYING'
    })
});




const prefix = "z!";
client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;
    const withoutPrefix = message.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = split.slice(1);

    if (command === `setstatus`) {

        if (!args.length) {

            return message.channel.send(`**Shoma Argument [1] Ra Vared Nakardid**`);

        }

        if (message.author.id === "746668047183642705" || message.author.id === "485374529531674625" || message.author.id === "716039158979887204") {

            /*client.user.setActivity(`${args.join(' ')}`, {
              type: "STREAMING",
              url: "https://www.twitch.tv/zerocimmiunity"
            });*/
            client.user.setActivity(args.join(' '), {
                type: 'PLAYING'
            })
        }
    }




    if (command === 'help') {
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('List Of Commands! <a:check_no:783007977208414248> ')
            .setColor('RANDOM')
            .setAuthor('Bot Invite Link!', 'https://cdn.discordapp.com/emojis/783740233299656705.gif?v=1', 'https://discord.com/api/oauth2/authorize?client_id=721773862701760645&permissions=8&scope=bot')
            .addField('z!fn <a:check_no:783007978336419840>', 'translate finglish to persian <a:check_no:783007979255496715>', true)
            /*.addField('z!tr <a:check_no:783007978336419840>', 'translate English to Persian <a:check_no:783007979255496715>', true)*/
            .addField('z!jok <a:check_no:783007977878716447>', 'namayesh jok haye kossher be shoma <a:check_no:783007978864640010>', true)
            .addField('z!danestani <a:check_no:783007979497979964>', 'namayesh danastani haye kossher be shoma <a:check_no:783007977208414248>', true)
            .addField('z!pnp <a:check_no:783007977707667476>', 'namayesh p n p kosher (jedan kosshere) <a:check_no:783007979255496715>', true)
            .addField('z!zkr <a:check_no:783007978164322305>', 'zekr emrooz <a:check_no:781581458812698676>', true)
            .addField('z!whois <a:check_no:783007978398810167>', 'moshakhasat yek site <a:check_no:783007977204219954>', true)
            .addField('z!pass (tedad horoof) :lock:', 'sakhtan yek password pishnahadi <a:check_no:783007977216802886>', true)
            .addField('z!font (kalame) <a:check_no:783007977631252550>', 'tagir font yek kalame <a:check_no:783007978767908865>', true)
            .addField('z!bio <a:check_no:783007978714169384>', ' bio haye shakh <a:check_no:783007981519503390>', true)
            .addField('z!dayinfo <a:check_no:783007978714169384>', ' etelat emrooz <a:check_no:783007981519503390>', true)
            .addField('z!newyear <a:check_no:783007978412048416>', ' chand rooz be tahvil sal moonde? <a:check_no:783007978210721802>', true)
            .addField('z!short https://url.ir <a:check_no:783740233933520927>', ' kootah kardan yek link (30 sanye sabr konin) <a:check_no:783740225133740092>', true)
            .addField('z!meme <a:check_no:783007978767908865>', ' baraye daryaft meme <a:check_no:783007978767908865>', true)
            .addField('z!kick <a:check_no:783007978046357504>', ' kick kardan yek nafar <a:check_no:783007978046357504>', true)
            .addField('z!info <a:check_no:783007978637885460>', ' greftan info yek user <a:check_no:783007978637885460>', true)
            .addField('z!btc <a:8f47ba3a151a90c3dd0ac18d46908b32:787187130707345441>', ' Gereftane Price Bitcoin <a:8f47ba3a151a90c3dd0ac18d46908b32:787187130707345441>', true)
            .addField('z!ip <a:708661508883873864:787202901034401853>', ' Gereftane Etelaate IP <a:708661508883873864:787202901034401853>', true)
            .addField('z!skm <a:3119_Setting:783007978398810167>', ' Motmaen Shodan Az Sehate Kode Meli <a:3119_Setting:783007978398810167>', true)
            .addField('z!fontfa <a:1169_ablobwobwork:783007977216802886>', ' Tabdile Matne Shoma Be Font Haye Mokhtalef (Farsi) <a:1169_ablobwobwork:783007977216802886>', true)
            .addField('z!ping <a:1397_partywizardparrot:783007977631252550>', ' Gereftane Ping Site <a:1397_partywizardparrot:783007977631252550>', true)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send(exampleEmbed)
    }




    if (command === 'zkr') {
        const file = await fetch('https://api.codebazan.ir/zekr/').then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`ذکر ایام هفته : ${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'pnp') {
        const file = await fetch('https://api.codebazan.ir/jok/pa-na-pa/').then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('نمایش پ ن پ  زیبا شما')
            .setDescription(`${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'fn') {


        if (!args.length) {
            return message.channel.send(`**Shoma Argument[1] Ra Vared Nakardeid**`);
        }
        const query = querystring.stringify({
            text: args.join(' ')
        });
        const file = await fetch(`https://api.codebazan.ir/fintofa/?${query}`).then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:check_no:783007977208414248> ترجمه فینگلیش به فارسی شما')
            .setDescription(`${args.join(' ')} => ${file.result}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'jok') {
        const file = await fetch('https://api.codebazan.ir/jok/json/').then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('جوک شما')
            .setDescription(`${file.result.jok}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'danstani') {
        const file = await fetch('https://api.codebazan.ir/danestani/').then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('دانستنی')
            .setDescription(`${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }


    if (command === 'whois') {


        if (!args.length) {

            return message.channel.send(`**Shoma Link Hich Discordi Ra Vared Nakardeid**`);

        }

        const query = querystring.stringify({
            domain: args.join(' ')
        });
        const a = 1
        const b = 2
        const file = await fetch(`https://api.codebazan.ir/whois/index.php?type=json&${query}`).then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file.owner} \n  ${file.address} \n ${file.dns[1]} \n ${file.dns[2]}`)

            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }

    if (command === 'pass') {


        if (!args.length) {

            return message.channel.send(`**Shoma Tedad Argham Ra Vared Nakardeid**`);

        }

        if (args > 75 || args < 5) {
          return message.channel.send('**Tedad Horof Nabayad Bishtar Az 75 Va Kamtar 5 Bashad**')
        }

        const query = querystring.stringify({
            length: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/password/?${query}`).then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }
    
//start--------------------------------------------------

if (command == 'aparat'){
  
      if (!args.length) {

          return message.channel.send(`No results found for **${args.join(' ')}**.`);

      }

      
        const file = await fetch(`https://www.aparat.com/etc/api/videoByUser/username/${args.join(' ')}`).then(response => response.text());
console.log(`${file.videobyuser[0].frame}`)
          // const embed = new Discord.MessageEmbed()
          // .setTitle(`آخرین پست یوزر ${args.join(' ')}`)
          // .setColor(0xeb344c)
          // .setURL(`${file.videobyuser[0].frame}`)
          // .setImage(`${file.videobyuser[0].big_poster}`)
          // .addField(`${file.videobyuser[0].title}`,
          //     `کسی که پست را منتشر کرده : ${file.videobyuser[0].sender_name}
          //     تاریخ انتشار پست : ${file.videobyuser[0].create_date}
          //     ${file.videobyuser[0].sdate}
          //     `)

          // message.channel.send(embed)
    

    }//end commend 





















    //end --------------------------------------------------

    if (command === 'font') {


        if (!args.length) {

            return message.channel.send(`**Shoma Link Ra Vared Nakardeid**`);

        }

        const query = querystring.stringify({
            text: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/font/?${query}`).then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file.result[1]} \n ${file.result[2]} \n ${file.result[3]} \n ${file.result[4]} \n${file.result[5]} \n${file.result[6]} \n ${file.result[7]}\n ${file.result[8]}\n ${file.result[9]}\n ${file.result[10]} \n ${file.result[11]}\n ${file.result[12]}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'bio') {
        const file = await fetch('https://api.codebazan.ir/bio/').then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }


    if (command === 'newyear') {
        const file = await fetch('https://api.codebazan.ir/new-year/').then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file.day} rooz moonde!`)
            .setThumbnail('https://media.discordapp.net/attachments/720310779932442654/783630252991316018/tasvirezendegi.ir29.gif?width=278&height=166')
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send(exampleEmbed)

    }

    if (command === 'dayinfo') {
        const file = await fetch('https://api.codebazan.ir/time-date/?json=en').then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`time ${file.result.time}\ndate: ${file.result.date}\nfadate ${file.result.fadate}\nfasl ${file.result.fasl} \nmahname : ${file.result.mahname}\nweekname ${file.result.weekname}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }




    if (command === 'short') {


        if (!args.length) {

            return message.channel.send(`**Shoma Hich Linki Ra Vared Nakardeid**`);

        }

        const query = querystring.stringify({
            text: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/shortlink/?url=${query}`).then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file.result.shortur}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }



    if (command === 'meme') {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

        message.channel.startTyping();

        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));

    };

    if (command === 'kick') {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("شما دسترسی اخراح کردن ندارید <a:783007978398810167:783007978398810167> ");

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);

            if (member) {

                member

                    .kick()

                    .then(() => {

                        const kick = new Discord.MessageEmbed()

                            .setDescription(`${user.tag} اخراح شد <a:783007978398810167:783007978398810167>  `)

                        message.channel.send(kick);

                    })

                    .catch(err => {



                        const kick_err_1 = new Discord.MessageEmbed()

                            .setColor('#ff0000')

                            .setDescription("نمیتوان این کاربر را اخراج کرد <a:783007978398810167:783007978398810167> ")

                        message.channel.send(kick_err_1);

                        console.error(err);

                    });

            } else {



                const kick_err_2 = new Discord.MessageEmbed()

                    .setColor('#ff0000')

                    .setDescription("این کاربر در این سرور نیست! <a:783007978398810167:783007978398810167> ")

                message.channel.send(kick_err_2);

            }

        } else {

            message.reply("یک کاربر برای اخراج کردن مینشن کنید <a:783007978398810167:783007978398810167> ");

        }




    }




    if (command === 'info') {
        message.react('✅')
        if (!message.mentions.users.size) {
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const c = message.author.createdAt
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(message.author.displayAvatarURL({
                    size: 2048,
                    dynamic: true
                }))
                .addField("🕒 Account Age :", "`" + `${c.getDate()}/${months[c.getMonth()]}/${c.getFullYear()}  ${c.getHours()}:${c.getMinutes()}` + "`", false)
                .addField("🆔 Client Id :", `${message.author.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${message.author.displayAvatarURL({ size: 2048, dynamic: true })})`, true)
                .setFooter(` ${message.author.tag}`, `${message.author.displayAvatarURL({ size: 2048, dynamic: true })}`)
            message.channel.send(Accinfo);
        } else {
            const taggedUser = message.mentions.users.first();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const c = taggedUser.createdAt
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(taggedUser.displayAvatarURL({
                    size: 2048,
                    dynamic: true
                }))
                .addField("🕒 Account Age :", "`" + `${c.getDate()}/${months[c.getMonth()]}/${c.getFullYear()}  ${c.getHours()}:${c.getMinutes()}` + "`", false)
                .addField("🆔 Client Id :", `${taggedUser.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${taggedUser.displayAvatarURL({ size: 2048, dynamic: true })})`, true)
                .setFooter(` ${taggedUser.tag}`, `${taggedUser.displayAvatarURL({ size: 2048, dynamic: true })}`)
            message.channel.send(Accinfo);
        }
    }

    if (command === 'btc') {
        const file = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle(' **قیمت بیتکوین امروز **')
            .setColor('RANDOM')
            .setDescription(`1 btc \n ${file.bpi.USD.rate_float} USD \n ${file.bpi.GBP.rate_float} GBP\n ${file.bpi.EUR.rate_float} EUR `)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }
    if (command === 'ip') {


        if (!args.length) {

            return message.channel.send(`**Shoma IP Ra Vared Nakardeid !**`);

        }

        const query = querystring.stringify({
            ip: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/ipinfo/?${query}`).then(response => response.json());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(` city:  ${file.city} \ncompany:  ${file.company} \n continent_code: ${file.continent_code} \ncountry_code:  ${file.country_code} \n country_name: ${file.country_name}\n isp: ${file.isp}\nlat:  ${file.lat}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }

    if (command === 'skm') {
        if (!args.length) {
            return message.channel.send('**Shoma Kode Meli Ra Vared Nakardid**')
        }
        const file = await fetch(`https://api.codebazan.ir/codemelli/?code=${args.join(' ')}`).then(response => response.json());
        if (file.Ok === false) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Code Meli Motabar nemibashad`)
                .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());
            message.channel.send(exampleEmbed);
        } else {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Code Meli Motabar Mibashad`)
                .setFooter(`req by  ${message.author.tag}`,
                    message.author.displayAvatarURL());
            message.channel.send(exampleEmbed);
        }
    }




    if (command === 'fontfa') {


        if (!args.length) {

            return message.channel.send(`**Shoma Nam Ra Vared Nakardeiid**`);

        }

        const query = querystring.stringify({
            text: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/font/?type=fa&${query}`).then(response => response.json());
        if (file.ok === false) {
            if (file.description == 'Only Persian text is accepted') {
                return message.channel.send('Shoma Faghat Mitavanid Text Farsi Change Font Konid')
            }
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Font 1 : ${file.Result[1]}\nFont 2 : ${file.Result[2]}\n Font 3 : ${file.Result[3]}\n Font 4 : ${file.Result[4]}\n Font 5 : ${file.Result[5]}\n Font 6 : ${file.Result[6]}\n Font 7 : ${file.Result[7]}\n Font 8 : ${file.Result[8]}\n Font 9 : ${file.Result[9]}\n Font 10 : ${file.Result[10]}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send(exampleEmbed)
    }




    if (command === 'ping') {


        if (!args.length) {

            return message.channel.send(`No results found for **${args.join(' ')}**.`);

        }

        const query = querystring.stringify({
            url: args.join(' ')
        });

        const file = await fetch(`https://api.codebazan.ir/ping/?${query}`).then(response => response.text());
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${file}`)
            .setFooter(`req by  ${message.author.tag}`, message.author.displayAvatarURL());

        message.channel.send(exampleEmbed)

    }
   
    
});
client.login('NzIxNzczODYyNzAxNzYwNjQ1.XuZaSg.ub_ggdzdpMD32CwCnjmUmiGYQZU');