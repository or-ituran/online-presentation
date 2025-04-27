const slides = [
    {
        id: 'slide1',
        title: 'בינה מלאכותית בפיתוח תוכנה',
        subtitle: 'שיפור הפרודוקטיביות והחדשנות',
        presenter: 'הראל ומשה',
        file: 'slides/title.html'
    },
    {
        id: 'slide2',
        title: 'סדר יום',
        file: 'slides/agenda.html'
    },
    {
        id: 'slide4',
        title: 'Anthropic - דיריקס הופמן',
        file: 'slides/anthropic-summary.html'
    },
    {
        id: 'slide3',
        title: 'מבוא',
        file: 'slides/introduction.html'
    },

    {
        id: 'slide5',
        title: 'שימושים מרכזיים',
        file: 'slides/use-cases.html'
    },
  
    {
        id: 'slide-developers',
        title: 'שימושי AI למפתחים',
        file: 'slides/use-cases-developers.html'
    },
    // {
    //     id: 'slide-refactoring',
    //     title: 'שימושי AI למפתחים - ריפקטורינג',
    //     file: 'slides/use-cases-refactoring.html'
    // },
    {
        id: 'slide-devops-uses',
        title: 'שימושי AI ל-DevOps',
        file: 'slides/use-cases-devops.html'
    },
    {
        id: 'slide-tech-support',
        title: 'שימושי AI לתמיכה טכנית',
        file: 'slides/use-cases-tech-support.html'
    },
    // {
    //     id: 'slide-tech-support-image',
    //     title: 'שימושי AI לתמיכה טכנית - תמונה',
    //     file: 'slides/use-cases-tech-support-image.html'
    // },
    {
        id: 'slide-qa-uses',
        title: 'שימושי AI ל-QA',
        file: 'slides/use-cases-qa.html'
    },
    {
        id: 'slide-pm-uses',
        title: 'שימושי AI למנהלי פרויקטים ומאפיינים',
        file: 'slides/use-cases-pm.html'
    },
    {
        id: 'slide-benefits',
        title: 'יתרונות מרכזיים',
        file: 'slides/use-cases-benefits.html'
    },
    {
        id: 'slide-ai-video',
        title: 'כיצד AI עוזר למתכנתים - סרטון',
        file: 'slides/ai-video-summary.html'
    },
    {
        id: 'demo-daniel',
        title: 'הדגמה - דניאל',
        file: 'slides/demo-daniel.html'
    },
    {
        id: 'demo-moshe',
        title: 'הדגמה - משה',
        file: 'slides/demo-moshe.html'
    },
    {
        id: 'demo-or',
        title: 'הדגמה - אור',
        file: 'slides/demo-or.html'
    },
    {
        id: 'slide-icf',
        title: 'צוות ICF (Golang)',
        file: 'slides/icf.html',
        teamImage: {
            title: 'Go Backend Development',
            subtitle: 'Team ICF',
            colors: ['#1a365d', '#2d3748']
        }
    },
    {
        id: 'slide-engines',
        title: 'צוות Engines (C# .NET)',
        file: 'slides/engines.html',
        teamImage: {
            title: 'C# .NET Development',
            subtitle: 'Team Engines',
            colors: ['#2b6cb0', '#4299e1']
        }
    },
    {
        id: 'slide-bi',
        title: 'צוות BI (SQL)',
        file: 'slides/bi.html',
        teamImage: {
            title: 'Business Intelligence',
            subtitle: 'Team BI',
            colors: ['#4299e1', '#63b3ed']
        }
    },
    {
        id: 'slide-iweb',
        title: 'צוות IWEB (C# .Net)',
        file: 'slides/iweb.html',
        teamImage: {
            title: 'Web Development',
            subtitle: 'Team IWEB',
            colors: ['#3182ce', '#4299e1']
        }
    },
    {
        id: 'slide-web',
        title: 'פיתוח Web (React/TypeScript)',
        file: 'slides/web.html',
        teamImage: {
            title: 'React & TypeScript',
            subtitle: 'Web Team',
            colors: ['#2c5282', '#2b6cb0']
        }
    },
    {
        id: 'slide-mobile',
        title: 'צוות Mobile',
        file: 'slides/mobile.html',
        teamImage: {
            title: 'Mobile Development',
            subtitle: 'Mobile Team',
            colors: ['#2a4365', '#2c5282']
        }
    },
    {
        id: 'slide-devops',
        title: 'צוות DevOps',
        file: 'slides/devops.html',
        teamImage: {
            title: 'DevOps & Infrastructure',
            subtitle: 'DevOps Team',
            colors: ['#1a365d', '#2d3748']
        }
    },
    {
        id: 'slide-qa',
        title: 'צוות QA (V&V)',
        file: 'slides/qa.html',
        teamImage: {
            title: 'Quality Assurance',
            subtitle: 'QA Team',
            colors: ['#2b6cb0', '#4299e1']
        }
    },
    {
        id: 'security-access',
        title: 'שימוש בטוח בכלי AI - בקרת גישה וממשל',
        file: 'slides/security-access.html'
    },
    {
        id: 'security-code',
        title: 'שימוש בטוח בכלי AI - סיווג קוד ומזעור מידע',
        file: 'slides/security-code.html'
    },
    {
        id: 'security-quality',
        title: 'שימוש בטוח בכלי AI - בקרת איכות וסיכונים',
        file: 'slides/security-quality.html'
    },

    {
        id: 'training-overview',
        title: 'תוכנית הדרכה והכשרה - סקירה',
        file: 'slides/training-overview.html'
    },
    {
        id: 'training-methods',
        title: 'שיטות הדרכה',
        file: 'slides/training-methods.html'
    },
    {
        id: 'training-timeline',
        title: 'לוח זמנים להדרכה',
        file: 'slides/training-timeline.html'
    },
    {
        id: 'training-results',
        title: 'תוצאות מצופות מההדרכה',
        file: 'slides/training-results.html'
    },
    {
        id: 'performance-overview',
        title: 'מדדי ביצוע והצלחה - סקירה',
        file: 'slides/performance-metrics-overview.html'
    },
    {
        id: 'performance-development',
        title: 'מדדי פיתוח ואיכות',
        file: 'slides/performance-development.html'
    },
   
    {
        id: 'performance-team',
        title: 'מדדי צוות',
        file: 'slides/performance-team.html'
    },
    {
        id: 'performance-quality',
        title: 'מדדי צוות',
        file: 'slides/performance-quality.html'
    },
    {
        id: 'performance-innovation',
        title: 'מדדי חדשנות',
        file: 'slides/performance-innovation.html'
    },
    {
        id: 'questions',
        title: 'Johnney',
        file: 'slides/questions.html'
    }
];

export default slides;