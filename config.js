const config = {
  'channel': 'eskimon',
  'identity': {
    // username: 'bot-name',
    // password: 'oauth:my-bot-token'
  },
  'cooldown': {
    'user': 10,  // Minimal time (seconds) before a user can play again a track
    'track': 10,  // Minimal time (seconds) before the same track can be played again
    'command': 1,  // Minimal time (seconds) before the command can be used again
  },
  'prefix': '!play',

  'rights': {
    'user': true,  // Allow users to use the bot
    'mods': true,  // Allow moderators to use the bot
    'subs': true,  // Allow subs to use the bot
    'vips': true,  // Allow vips to use the bot
  }
}

const tracks = [
  {
    'command': 'alavolette',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_la_volette1.mp3'
  },
  {
    'command': 'amoi',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_moi.mp3'
  },
  {
    'command': 'assassin',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_moi_a_lassassin.mp3'
  },
  {
    'command': 'bucher',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/bucher1.mp3'
  }
]
