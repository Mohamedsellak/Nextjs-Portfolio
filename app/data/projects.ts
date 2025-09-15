export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    category: 'web' | 'mobile' | 'design' | 'ai' | 'cybersecurity';
    liveLink?: string;
    githubLink?: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Cyber X Radar – Advanced Threat Detection Platform",
        description: "A comprehensive real-time cybersecurity platform that monitors dark web activities, data breaches, and vulnerabilities. Provides complete digital risk visibility for organizations with advanced threat intelligence and automated incident response capabilities.",
        technologies: ["PHP", "Next.js", "Tailwind CSS", "REST API", "MySQL", "JavaScript", "HTML5", "CSS3"],
        category: "cybersecurity",
        liveLink: "https://scan.cyberxradar.com/",
        githubLink: "https://github.com/Mohamedsellak/cyber-x-radar",
        images: [
            "/cyberxradar/1.png",
            "/cyberxradar/2.png",
            "/cyberxradar/3.png",
            "/cyberxradar/4.png",
            "/cyberxradar/5.png",
            "/cyberxradar/6.png",
            "/cyberxradar/7.png",
            "/cyberxradar/8.png",
            "/cyberxradar/9.png",
            "/cyberxradar/10.png",
            "/cyberxradar/11.png",
            "/cyberxradar/12.png",
            "/cyberxradar/13.png",
            "/cyberxradar/14.png",
            "/cyberxradar/15.png",
            "/cyberxradar/16.png",
            "/cyberxradar/17.png",
            "/cyberxradar/18.png",
            "/cyberxradar/19.png",
            "/cyberxradar/20.png"
        ]
    },

        {
            id: 2,
            title: "Pentest GPT – AI-Powered Pentesting Platform",
            description: "Developed an AI-powered pentesting web application leveraging LLaMA 3, fine-tuned on cybersecurity data, to automate website scans and analyze vulnerabilities. Delivered intelligent recommendations and actionable guidance, helping users remediate security issues efficiently. Integrated a chat-based interface for real-time interaction and consultation on security findings.",
            technologies: ["Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Linux pentest tools", "LLaMA 3", "AI/ML"],
            category: "cybersecurity",
            liveLink: "https://pentestgpt.com",
            githubLink: "https://github.com/Mohamedsellak/Pentest-Tools-Client",
            images: [
                "/pentest/1.png",
                "/pentest/2.png",
                "/pentest/3.png",
                "/pentest/4.png",
                "/pentest/5.png",
                "/pentest/6.png",
                "/pentest/7.png",
                "/pentest/8.png",
                "/pentest/9.png",
                "/pentest/10.png",
                "/pentest/11.png",
                "/pentest/12.png",
                "/pentest/13.png",
                "/pentest/14.png",
                "/pentest/15.png",
                "/pentest/16.png",
                "/pentest/17.png",
                "/pentest/18.png"
            ]
        },

    {
        id: 3,
        title: "Edufacilita – AI-Powered Math Learning Platform",
        description: "Revolutionary educational platform featuring 5,000+ AI-curated mathematics questions with advanced search capabilities and LaTeX rendering. Currently used by educators across 50+ countries, providing personalized learning experiences and comprehensive analytics.",
        technologies: ["Laravel", "PHP", "MathJax", "LaTeX", "MathType", "MySQL", "JavaScript", "Tailwind CSS"],
        category: "ai",
        liveLink: "https://edufacilita.com.br",
        githubLink: "https://github.com/Mohamedsellak/Edufacilita",
        images: [
            "/Edufacilita/1.png",
            "/Edufacilita/2.png",
            "/Edufacilita/3.png",
            "/Edufacilita/4.png",
            "/Edufacilita/5.png",
            "/Edufacilita/6.png",
            "/Edufacilita/7.png",
            "/Edufacilita/8.png",
            "/Edufacilita/9.png",
            "/Edufacilita/10.png",
            "/Edufacilita/11.png",
            "/Edufacilita/12.png",
            "/Edufacilita/13.png",
            "/Edufacilita/14.png",
            "/Edufacilita/15.png"
        ]
    },
    {
        id: 4,
        title: "AI Translator - Go Translate",
        description: "Comprehensive AI-powered translation application supporting 100+ languages. Features voice translation, image text recognition, document translation, and real-time conversation mode. Built with advanced machine learning for accurate and contextual translations.",
        technologies: ["Swift", "iOS SDK", "Core ML", "Vision API", "Speech Recognition", "Google Translate API"],
        category: "mobile",
        liveLink: "https://apps.apple.com/us/app/ai-translator-go-translate/id6747006001",
        githubLink: "https://github.com/Mohamedsellak/Ai-Translation",
        images: [
            "/ai translate/1.png",
            "/ai translate/2.png",
            "/ai translate/3.png",
            "/ai translate/4.png",
            "/ai translate/5.png",
            "/ai translate/6.png"
        ]
    },
    {
        id: 5,
        title: "NextTrade - Advanced Trading Platform",
        description: "Professional cryptocurrency and stock trading platform with real-time market data, advanced charting tools, portfolio management, and automated trading strategies. Features secure transactions, multi-wallet support, and comprehensive analytics dashboard.",
        technologies: ["Next.js", "TypeScript", "Node.js", "WebSocket", "MongoDB", "Redis", "Chart.js", "Crypto Payment API"],
        category: "web",
        githubLink: "https://github.com/Mohamedsellak/webTrade-client",
        images: [
            "/nextTrade/1..png",
            "/nextTrade/2.png",
            "/nextTrade/3.png",
            "/nextTrade/4.png",
            "/nextTrade/5.png",
            "/nextTrade/6.png",
            "/nextTrade/7.png",
            "/nextTrade/8.png",
            "/nextTrade/9.jpeg",
            "/nextTrade/10.jpeg",
            "/nextTrade/11.jpeg",
            "/nextTrade/12.jpeg",
            "/nextTrade/13.jpeg",
            "/nextTrade/14.jpeg",
            "/nextTrade/15.jpeg",
            "/nextTrade/16.jpeg",
            "/nextTrade/17.jpeg",
            "/nextTrade/18.jpeg"
        ]
    },
    {
        id: 6,
        title: "Mr. Basit's Authentic Moroccan Crafts",
        description: "Premium e-commerce platform showcasing authentic Moroccan handicrafts and traditional artistry. Features secure payment processing, inventory management, international shipping, and cultural storytelling to connect customers with Moroccan heritage.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "Node.js"],
        category: "web",
        liveLink: "https://mr-basit.netlify.app/",
        githubLink: "https://github.com/Mohamedsellak/mr-basit",
        images: [
            "/mr-basit/1.png",
            "/mr-basit/2.png",
            "/mr-basit/3.png",
            "/mr-basit/4.png",
            "/mr-basit/5.png"
        ]
    },
    {
        id: 7,
        title: "TechStore - Premium Technology Marketplace",
        description: "Sophisticated French e-commerce platform specializing in premium technology products. Serves 50,000+ satisfied customers across 15+ countries with 24/7 support. Features advanced product filtering, AR product visualization, and comprehensive customer service system.",
        technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript", "Stripe API"], 
        category: "web",
        liveLink: "https://teechstore.netlify.app/",
        githubLink: "https://github.com/Mohamedsellak/COD-Store",
        images: [
            "/tech store/1.png",
            "/tech store/2.png",
            "/tech store/3.png",
            "/tech store/4.png",
            "/tech store/5.png",
            "/tech store/6.png"
        ]
    }
];
