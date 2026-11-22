/**
 * KGD CONCEPTS — SITE CONFIGURATION
 * Centralized content and settings. Edit contact placeholders and links here.
 */

export const siteConfig = {
  brand: {
    name: 'KGD Concepts',
    shortName: 'KGD',
    title: 'KGD Concepts — Digital Portfolio',
    headline: 'Building Digital Experiences. Automating What Matters.',
    statement:
      'From modern web applications to intelligent automation and emerging technology, KGD Concepts explores ideas, builds practical solutions, and creates meaningful digital experiences.',
    tagline: 'Ideas conceived. Technology crafted. Experiences delivered.',
    introBadge: 'INDEPENDENT DIGITAL & TECHNOLOGY BRAND',
    positioning:
      'A digital technology and creative brand working across software development, artificial intelligence, automation, cybersecurity, and digital design.'
  },

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ],

  about: {
    heading: 'Technology meets creativity.',
    lead:
      'KGD Concepts is an independent digital brand focused on developing digital experiences, experimenting with emerging technologies, and building practical solutions that bridge design and engineering.',
    paragraphs: [
      'We operate at the convergence of software development, artificial intelligence, workflow automation, and cybersecurity. Rather than approaching technology in silos, we believe the best digital solutions emerge when rigorous engineering is paired with intuitive visual design.',
      'As an evolving technology brand, KGD Concepts continually tests new paradigms — exploring how autonomous agents can streamline operations, how security simulations can safeguard systems, and how web applications can engage users meaningfully.'
    ],
    pillars: [
      {
        id: '01',
        title: 'Software Development',
        desc: 'Building modern, high-performance web applications and resilient digital infrastructure.'
      },
      {
        id: '02',
        title: 'AI & Automation',
        desc: 'Engineering intelligent workflows that eliminate friction and unlock system leverage.'
      },
      {
        id: '03',
        title: 'Cybersecurity',
        desc: 'Analyzing vulnerabilities, simulating attack surfaces, and encouraging defensive design.'
      },
      {
        id: '04',
        title: 'Digital Design',
        desc: 'Crafting thoughtful user interfaces, visual identities, and interactive experiences.'
      }
    ]
  },

  expertise: [
    {
      id: '01',
      title: 'SOFTWARE DEVELOPMENT',
      description: 'Developing modern web applications and responsive digital experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Supabase', 'PostgreSQL'],
      details: 'Focusing on clean architecture, component modularity, fluid responsiveness, and database integration for dynamic applications.'
    },
    {
      id: '02',
      title: 'AI & AUTOMATION',
      description: 'Exploring intelligent systems and building workflows that reduce repetitive work.',
      technologies: ['n8n', 'AI integrations', 'Workflow automation', 'LLM experimentation', 'API integrations', 'AI-powered workflows'],
      details: 'Creating automated pipelines that connect external APIs, process unstructured inputs, and automate complex tasks with reliable orchestration.'
    },
    {
      id: '03',
      title: 'CYBERSECURITY',
      description: 'Exploring cybersecurity, security assessment, and responsible testing of digital systems.',
      technologies: ['Linux', 'Nmap', 'Wireshark', 'Security testing', 'AI security experimentation'],
      details: 'Investigating network analysis, packet inspection, boundary defense, and deterministic security evaluation frameworks.'
    },
    {
      id: '04',
      title: 'DIGITAL DESIGN',
      description: 'Combining visual creativity and thoughtful interface design to create engaging digital experiences.',
      technologies: ['Graphic design', 'UI/UX concepts', 'Visual identity', 'Web design', 'Digital experiences'],
      details: 'Designing user-centered layouts with disciplined typography, atmospheric depth, accessible color contrast, and subtle micro-interactions.'
    }
  ],

  featuredProjects: [
    {
      id: 'canary',
      number: '01',
      name: 'CANARY',
      category: 'AI Security / Cybersecurity',
      liveUrl: 'https://canary-omega.vercel.app/',
      image: '/screenshots/canary.png',
      badge: 'Contributed Project',
      tagline: 'AI Security Assessment & Research Platform',
      description:
        'CANARY is an AI security assessment platform designed to demonstrate adversarial testing, experiment evaluation, risk scoring, and research reporting through controlled security simulations.',
      disclaimer:
        'Note: CANARY currently uses deterministic policy simulations and synthetic data.',
      technologies: ['React', 'Security Simulation', 'Adversarial Testing', 'Risk Scoring', 'Data Visualizations']
    },
    {
      id: 'nexa-ai',
      number: '02',
      name: 'Nexa AI',
      category: 'AI / Web3',
      liveUrl: 'https://nexa-ai-amber.vercel.app/',
      image: '/screenshots/nexa-ai.png',
      badge: 'Contributed Project',
      tagline: 'Bridging Global Access to DeFi through AI',
      description:
        'Nexa AI explores the intersection of artificial intelligence and Web3, with a focus on accessible AI utilities and practical tools for emerging digital communities.',
      disclaimer:
        'Note: Conceptual AI-utility platform exploring decentralized finance integrations.',
      technologies: ['React', 'Web3 Concepts', '3D Polyhedral Visuals', 'Tokenomics UI', 'DeFi Tools']
    },
    {
      id: 'nexa-corp',
      number: '03',
      name: 'Nexa Corp',
      category: 'Web3 / Digital Strategy',
      liveUrl: 'https://nexacorp.vercel.app/',
      image: '/screenshots/nexa-corp.png',
      badge: 'Contributed Project',
      tagline: 'Strategic Web3 Coordination & Positioning Platform',
      description:
        'Nexa Corp is a Web3 growth and strategy platform focused on project positioning, marketing, fundraising, tokenomics, and ecosystem development.',
      disclaimer:
        'Note: Strategic advisory and positioning firm model for digital ecosystems.',
      technologies: ['React', 'Digital Strategy', 'Positioning Architecture', 'Ecosystem Growth', 'Interactive UI']
    }
  ],

  additionalProjects: [
    {
      id: 'faves-academy',
      name: 'The Faves Academy',
      status: 'COMPLETED',
      isDeveloping: false,
      category: 'Education / Web Application',
      description:
        'An educational website project featuring learning resources, class booking, and an administrative experience.',
      highlights: ['Class Booking System', 'Educational Learning Resources', 'Administrative Dashboard Experience']
    },
    {
      id: 'nth-jobs',
      name: 'Nth Jobs',
      status: 'IN DEVELOPMENT',
      isDeveloping: true,
      category: 'Workflow Automation / Aggregation',
      description:
        'An automation project exploring job discovery, job aggregation, filtering, and application workflow management using n8n and database integrations.',
      highlights: ['n8n Multi-Source Aggregator', 'Intelligent Filtering Workflows', 'Database Pipeline Synchronization']
    }
  ],

  currentExplorations: [
    {
      title: 'AI Agents & LLM Integrations',
      desc: 'Developing specialized multi-agent architectures, reasoning loops, and structured function calling.'
    },
    {
      title: 'AI Workflow Automation',
      desc: 'Integrating headless orchestrators, n8n webhook nodes, and event-driven data dispatchers.'
    },
    {
      title: 'AI Security & Guardrails',
      desc: 'Investigating adversarial prompt injection defenses, boundary verification, and policy enforcement.'
    },
    {
      title: 'Cybersecurity Assessment',
      desc: 'Analyzing attack surfaces, passive packet capture techniques, and vulnerability discovery.'
    },
    {
      title: 'Web3 Development',
      desc: 'Exploring decentralized state machines, smart contract interactions, and decentralized identity.'
    },
    {
      title: 'Modern Web Architecture',
      desc: 'Benchmarking edge runtimes, component rendering performance, and high-fidelity 3D CSS techniques.'
    }
  ],

  approach: [
    {
      num: '01',
      title: 'FUNCTION FIRST',
      quote: 'Technology should solve real problems, not simply look impressive.',
      desc: 'Every architecture decision and interface element must serve a distinct purpose. We build tools that prioritize utility, performance, and pragmatic value over unnecessary complexity.'
    },
    {
      num: '02',
      title: 'CONTINUOUS EXPLORATION',
      quote: 'Experiment, learn, improve, and adapt to what comes next.',
      desc: 'Technology shifts rapidly. We embrace curious experimentation with new APIs, automation platforms, and emerging security models to remain agile and forward-thinking.'
    },
    {
      num: '03',
      title: 'DESIGN WITH PURPOSE',
      quote: 'Good technology should be intuitive, accessible, and visually thoughtful.',
      desc: 'Sophisticated technical capabilities deserve interfaces that communicate clarity, balance, and aesthetic restraint. Elegance and usability are essential to our engineering standard.'
    }
  ],

  contact: {
    heading: 'Have an idea worth building?',
    statement:
      "Let's explore what's possible. KGD Concepts is open to interesting collaborations, digital projects, and opportunities across software development, AI, automation, and technology.",
    email: 'conceptskgd@gmail.com',
    github: 'https://github.com/ShinobiiX',
    githubUser: 'ShinobiiX'
  }
};
