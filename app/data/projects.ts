export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    category: 'web' | 'mobile' | 'design';
    liveLink?: string;
    githubLink?: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Web Design",
        description: "A web design Login page",
        technologies: [],
        category: "design",
        images: ["/nutre/2.png"]
    },
    {
        id: 4,
        title: "Web Design",
        description: "A web design Login page",
        technologies: [],
        category: "design",
        images: ["/nutre/4.png"]
    },
    {
        id: 2,
        title: "Desktop application For Trafic Prediction",
        description: "A desktop application for predicting traffic using machine learning algorithms.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Keras", "TensorFlow", "pyqt5"],
        category: "mobile",
        images: ["/nutre/1.png"]
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A portfolio website built with HTML, CSS, JS and Bootstrap.",
        technologies: ["HTML", "CSS", "JS","Bootstrap"],
        category: "web",
        liveLink: "https://sellak1.netlify.app",
        githubLink: "https://github.com/Mohamedsellak/Portfolio2",
        images: ["/portfolio1/1.png", "/portfolio1/2.png", "/portfolio1/3.png", "/portfolio1/4.png", "/portfolio1/5.png"]
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A portfolio website built with HTML, CSS, JS and Bootstrap.",
        technologies: ["HTML", "CSS", "JS","Bootstrap",],
        category: "web",
        liveLink: "https://sellak2.netlify.app",
        githubLink: "https://github.com/Mohamedsellak/Portfolio2",
        images: ["/portfolio2/1.png", "/portfolio2/2.png", "/portfolio2/3.png", "/portfolio2/4.png", "/portfolio2/5.png","/portfolio2/6.png"]
    },
    {
        id: 6,
        title: "Tic Tac Toe Game",
        description: "A Tic Tac Toe game built with HTML, CSS, JS.",
        technologies: ["HTML", "CSS", "JS","bootstrap"],
        category: "web",
        liveLink: "https://tic-taac-toe.netlify.app",
        githubLink: "https://github.com/Mohamedsellak/Tic_Tac_Toe",
        images: ["/nutre/5.png"]
    },
    {
        id: 7,
        title: "Mobile Pomp Detection App",
        description: "A mobile application for pompe detection and energy consomation calculation.",
        technologies: ["React Native", "Expo"],
        category: "mobile",
        images: ["/nutre/3.png"]
    },

    {
        id: 8,
        title: "Pump Detection System",
        description: "real-time detection system to accurately identify pump activity and energy cost calculations.",
        technologies: ["React Native", "Expo"],
        category: "web",
        images: ["/taqa/1.png", "/taqa/2.png", "/taqa/3.png", "/taqa/4.png", "/taqa/5.png","/taqa/6.png","/taqa/7.png","/taqa/8.png","/taqa/9.png","/taqa/10.png"]
    },
    {
        id: 9,
        title: "Solveroutes",
        description: "web application for solving vehicle routing problem.such as tsp,vrp,vrp with time constraints, vrp with time windows,etc.",
        technologies: ["PHP", "Laravel", "MySQL","JavaScript","Bootstrap","Python","Flask","ortools"],
        category: "web",
        liveLink: "https://solveroutes.com",
        images: ["/solveroutes/1.png", "/solveroutes/2.png", "/solveroutes/3.png", "/solveroutes/4.png", "/solveroutes/5.png","/solveroutes/6.png","/solveroutes/7.png","/solveroutes/8.png","/solveroutes/9.png","/solveroutes/10.png","/solveroutes/11.png","/solveroutes/12.png","/solveroutes/13.png","/solveroutes/14.png","/solveroutes/15.png","/solveroutes/16.png","/solveroutes/17.png"]
    },

    {
        id: 10,
        title: "PentestGPT",
        description: "web application for pentesting using Llama3 and linux tools for reconnaissance,exploitation and post exploitation. and vulnerability scanning and detection.",
        technologies: ["Python", "Llama3", "Linux", "Nmap", "NextJS", "TailwindCSS","mongoDB","Nodejs","Express"],
        category: "web",
        images: ["/pentest/1.png", "/pentest/2.png", "/pentest/3.png", "/pentest/4.png", "/pentest/5.png","/pentest/6.png","/pentest/7.png","/pentest/8.png","/pentest/9.png","/pentest/10.png","/pentest/11.png","/pentest/12.png","/pentest/13.png","/pentest/14.png","/pentest/15.png","/pentest/16.png","/pentest/17.png","/pentest/18.png","/pentest/19.png","/pentest/20.png","/pentest/21.png"]
    },
    {
        id: 11,
        title: "NextWeb Trade",
        description: "Web application for trading and buying and selling stocks and crypto currencies.",
        technologies: ["NextJS", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
        category: "web",
        images: ["/nextTrade/1.png", "/nextTrade/2.png", "/nextTrade/3.png", "/nextTrade/4.png", "/nextTrade/5.png","/nextTrade/6.png","/nextTrade/7.png","/nextTrade/8.png","/nextTrade/9.jpeg","/nextTrade/10.jpeg","/nextTrade/11.jpeg","/nextTrade/12.jpeg","/nextTrade/13.jpeg","/nextTrade/14.jpeg","/nextTrade/15.jpeg","/nextTrade/16.jpeg","/nextTrade/17.jpeg","/nextTrade/18.jpeg"]
    },

];
