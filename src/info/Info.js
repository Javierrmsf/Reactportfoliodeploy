import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"
import mock9 from "../img/mock9.png"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(000)", "rgb(000)"];
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
    firstName: "Javier",
    lastName: "Resines",
    initials: "JR",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🚀',
            text: 'I am a web developer always wanting to learn new skills'
        },
        {
            emoji: '📍',
            text: 'Monterrey, Mexico'
        },
        {
            emoji: "📧",
            text: "javierresines@gmail.com"
        }
    ],
    socials: [

        {
            link: "https://github.com/javierrmsf",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
      


    ],
    bio: "My Name is Javier Resines, I'm a web developer from Monterrey, Mexico currently enrolled in the Tecnológico de Monterrey fullstack web development coding bootcamp. I obtained my bachelor's degree in chemical engineering from this same institution in 2019 and I'm currently working in the recycling industry. I also have a passion for learning new things.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'tailwind', 'nodejs', 'express'],
            exposedTo: ['vuejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'Playing Music',
            emoji: '🎸'
        },
        {
            label: 'Going to concerts',
            emoji: '🎶'
        },
        {
            label: 'Learning new skills',
            emoji: '🖌️'
        },
        {
            label: 'Hiking',
            emoji: '🥾'
        }

    ],
    portfolio: [ 
        {
            title: "Note Taker",
            live: "", 
            source: "https://github.com/Javierrmsf/Note-Taker", 
            image: mock1
        },
        {
            title: "E Commerce Back end",
            live: "",
            source: "https://github.com/Javierrmsf/E-Commerce-Back-end",
            image: mock2
        },
        {
            title: "Employee Management System",
            source: "https://github.com/Javierrmsf/EMS",
            image: mock3
        },
        {
            title: "Good ReadMe File Generator",
            live: "",
            source: "https://github.com/Javierrmsf/Good-Readme-file-Generator",
            image: mock4
        },
        {
            title: "Javascript Quiz",
            live: "",
            source: "https://github.com/Javierrmsf/Javascript-Code-Quiz",
            image: mock5
        },
        {
            title: "Nifty",
            live: "",
            source: "https://github.com/aeklf/BootcampProject01",
            image: mock6
        },
        {
            title: "Pin-it",
            live: "",
            source: "https://github.com/AlejandroBahSan/Pin-it",
            image: mock7
        },
        {
            title: "Safe Password Generator",
            live: "",
            source: "https://github.com/Javierrmsf/Safe-Password-Generator",
            image: mock8
        },
        {
            title: "Software Team Profile Generator",
            live: "",
            source: "https://github.com/Javierrmsf/Software-team-profile-generator",
            image: mock9
        },
        {
            title: "MVC Tech Blog",
            live: "",
            source: "https://github.com/Javierrmsf/Tech-Blog",
            image: mock10
        },
        {
            title: "Weather App",
            live: "",
            source: "https://github.com/Javierrmsf/WeatherApp",
            image: mock11
        },
        {
            title: "Work Day Scheduler",
            live: "",
            source: "https://github.com/Javierrmsf/Workday-Schedule-Planner",
            image: mock12
        }

    ]
}