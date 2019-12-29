# Presentation

Jukebot is a very simple twitch chatbot that let your viewers play local audio media file directly in your stream from the chat.

**No setup, no account, no headache.**

The idea is simple. The bot read your twitch chat, check if a specific keyword is written and react accordingly.

The aim is to **increase streamer <-> viewer interactions** by letting your viewers play funny sounds while your are live.

(my favorite is some kind of "listen to me" when someone wants to draw my attention toward the chat :D . And of course the classic drum effect "badumtsss")

# Installation

1. To install the bot, first download the zip file of the bot from this link: https://github.com/Eskimon/jukebot-twitch-chat-mediabot/archive/master.zip
2. Then, unzip the folder wherever you'd like
3. Finally... well nothing, its done. :D

# Configuration

Let's start simple by configuring the bot. To do so, open the file `configurator.html` in your favorite browser.

On the opened page, you can see different sections.

- The first one let you set the bot global settings
    - What is the channel name your bot should read (your streamer's name)
    - What is the command your bot should react too (`!play`, `.audio`, `?myawesomecommand` are all valid ;) )
- Then you can select *who* can play with the bot (so basically who can play audio file during your stream)
- Finally, the last section is about *how often* the bot can be triggered on differents aspects:
    - *user cooldown* is how often a user can trigger the bot. If set to 10 for example, the same user can't trigger the bot only once every 10 seconds
    - *track cooldown* is how often the same command can be triggered
    - *call cooldown* is how often the bot itself can be triggered

The last section is the list of the audio file and the keyword they react too. Simply write the keyword and paste the path to the file and your are good to go!

**Last step**, save the file under the name `config.js` exactly at the same location the `jukebot.html` and `configurator.html` files are.

# Usage

## In OBS

To use the bot directly in OBS, add a **browser source**, then check the box **local file** and go select your `jukebot.html` file. Size doesn't matter as we are just playing audio files.

And setup is done. Yup. Told you it wasn't complicated.

If at any time you want to update the configuration (after changing the `config.js` file), either restart OBS or simply open the *properties* of the browser source and clear on "refresh page cache".

## Directly from browser

If you don't want to (or can't) add a browser source in your broadcasting software, you can simply start it in a regular browser and "listen" to the audio of your computer.
Just make sure to click *in* the webpage. Modern browser will silent any audio if you don't interact with the page first.

# Wanna thank me?

You like this tool? You wanna thank me? Buy me a beer or some coffee!
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&item_name=Donation+for+Draw+On+Stream+telestrator&business=WTF33XNRB3XTL&currency_code=EUR&source=url)

Also, you can find me on [Twitter](https://twitter.com/Eskimon_fr), [Twitch](https://twitch.tv/eskimon), or [my very own blog](https://eskimon.fr)!
