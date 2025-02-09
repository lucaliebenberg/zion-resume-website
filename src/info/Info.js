import self from '../img/self.jpeg';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
// export let colors = ["rgb(0,255,0)", "rgb(0,225,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Zion',
  lastName: 'hendricks',
  initials: 'ZH', // the example uses first and last, but feel free to use three or more if you like.
  // position: 'Waiter',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇿🇦 ',
      text: 'based in SA',
    },
    {
      emoji: '📧',
      text: 'zionhendricks@gmail.com',
    },
  ],
  socials: [
    {
      link: 'http://linkedin.com/in/zion-hendricks-9819102a6',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: '',
  skills: {
    proficientWith: [
      'c#',
      'unity',
      'adobe photoshop',
      'autodesk 3ds max',
      'game design',
      'blender',
      'animation',
      'adobe illustrator',
    ],
    exposedTo: ['2d animation', 'branding & marketing', 'open source coding'],
  },
  hobbies: [
    {
      label: 'football',
      emoji: '⚽️ ',
    },
    {
      label: 'gaming',
      emoji: '🎮',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'music',
      emoji: '🎵 ',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
};
