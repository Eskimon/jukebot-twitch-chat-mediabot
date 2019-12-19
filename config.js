const config = {
  'channel': 'eskimon',
  'identity': {
    // username: 'bot-name',
    // password: 'oauth:my-bot-token'
  },
  'cooldown': {
    'user': 10,  // Minimal time (seconds) before a user can play again a track
    'track': 10,  // Minimal time (seconds) before the same track can be played again
    'command': 10,  // Minimal time (seconds) before the command can be used again
  },
  'prefix': '!play',
}

const tracks = [
  {
    'command': 'alavolette',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_la_volette1.mp3'
  },
  {
    'command': 'amoi',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_moi.mp3'
  }
]
