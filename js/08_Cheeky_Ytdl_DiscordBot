const Discord = require('discord.js')
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
client.login(YOURTOKENHERE");

//Set a prefix so the bot will only listen to messages that begin with this character
const prefix = ">";

//Output for when the bot is online and ready
client.on('ready',()=>{
    console.log(`${client.user.username} is online!`)
})

//When the bot receives a message
client.on('message', async (message) => {
    if(message.author.bot) return; //If the message is from another or this bot, do nothing
    if(!message.content.startsWith(prefix)) return; //If the message does not start with the prefix do nothing

    let argv = message.content.split(" "); //Split the message into seperate arguments
    let argc = argv.length; //Gives the count of amount of arguments supplied including the intial command
    if(argv[0] == `${prefix}dl`){
        let type = "mp3"
        let url = argv[1]

        /**
         * OOPS, Probably shouldnt upload videos, too big for base tier discord account
         */
        // if(argc < 2){
        //     url = argv[1]
        // }else{
        //     type = argv[1].toLocaleLowerCase()
        //     url = argv[2]
        // }
        // if(type == undefined) type = "mp4"

        if(argc == 1) return;// If no video URL is supplied to the command, return and do nothing

        download(message,url,type).then((name,error) => { // Declare a download function
            if(error) message.channel.send(error); //If it is rejected, give that as output so the user knows something went wrong
            message.channel.send("Uploading...") //Feedback that the bot is now uploading it to discord
            message.channel.send("Downloaded Video:", {files:[`${name.path}${name.ext}`]}).then(()=>{ //Send the file
                fs.unlinkSync(`${name.path}${name.ext}`); // After sending the file, delete it from local storage
            });
        });
    }
});
const download = async (message,url,type) => { // Create a download function to handle everything
    return new Promise((resolve,reject) => {
        if(!ytdl.validateURL(url)) return message.channel.send("Invalid Link"); //Makes sure its a valid youtube link
        let name = makeid(5); // Generate random 5 character string to name the file, could of got the video details but that method is a bit funky at the minute with ytdl async stuff
        message.channel.send("Downloading....") //User feedback for successful submission of request
        switch(type){ // Check the type of file, of course with the base account, there isnt enough upload space for a video file so only MP3 is downloaded
            case "mp4":
                    ytdl(url).pipe(fs.createWriteStream(`./${name}.mp4`)).on('finish', ()=>{
                        resolve({path:`./${name}`, ext:`.${type}`});
                    });
                    break;
                case "mp3":
                    let stream = ytdl(url); //Create a readable stream from ytdl containing the video
                    let proc = new ffmpeg({source: stream}); // Create a new ffmpeg object
                    proc.withAudioCodec('libmp3lame').toFormat('mp3').output(`./${name}.mp3`).run(); //Pass the ytdl stream to the ffmpeg object to live encode to mp3
                    message.channel.send("Encoding...") //Feedback that the service is encoding
                    proc.on('end', async ()=>{ //Once it has finished encoding
                        resolve({path:`./${name}`, ext:`.${type}`});//Resolve promise with name of file and extension type
                    })
                    break;
                default: reject("Invalid Type"); // if neither mp3 or mp4 are send, reject promise
            }
    })
}

const makeid = (length) => {
    let result = ''; //Declare blank string variable
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //Create Character set for random filename
    for ( var i = 0; i < length; i++ ) { //Loop the amount of times the length of the filename will be
       result += characters.charAt(Math.floor(Math.random() * characters.length)); // Pick a random character from the character set
    }
    return result; //Return the final random filename
 }
