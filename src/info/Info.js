import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
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
    firstName: "Vinay",
    lastName: "Kumar",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🥛',
            text: 'fueled by milk'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Student at IIITs"
        },
        {
            emoji: "📧",
            text: "raovinay925@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/vinay_rao25",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/VinayRao25",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vinay-rao-a7b179234",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/raovinay925",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Vinay. I'm a computer science student in IIITs.I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'e-sports',
            emoji: '🎮'
        },
        {
            label: 'travel',
            emoji: '✈️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Shopper -  E-Commerce WebApp",
            live: "https://shopperby4.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sachin492002/MERN-E-commerce", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "MuseBox - Music Streaming App",
            live: "https://museboxx.vercel.app",
            source: "https://github.com/sachin492002/musebox",
            image: mock2
        },
        {
            title: "Sketch Art Gallary",
            live: "https://sketch-art-gallery.vercel.app/",
            source: "https://github.com/VinayRao25/Sketch-Art-Gallery",
            image: mock3
        }

    ]
}