const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question('What do you think of Node.js?\n', answer => {
  profile.push(`${answer}`);
  rl.question(`What's your name? Nicknames are also acceptable :)\n`, answer => {
    profile.push(`My name is ${answer}.`);
    rl.question('Whats an activity you like doing?\n', answer => {
      profile.push(`I love ${answer} and `);
      rl.question('What do you listen to while doing that?\n', answer => {
        profile.push(`listening to ${answer} as I play.`);
        rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)\n', answer => {
          profile.push(`My favorite meal is probably ${answer} and `);
          rl.question("What's your favorite thing to eat for that meal?\n", answer => {
            profile.push(`I love having it with ${answer}.`);
            rl.question('Which sport is your absolute favorite?\n', answer => {
              profile.push(`I'd have to say ${answer} is my favorite sport.`);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', answer => {
                profile.push(`If I had a superpower, it would be ${answer}.`);
                console.log(profile.join(' '));
                rl.close();
              })
            })
          })
        })
      })
    })
  })
});
