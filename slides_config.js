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
        id: 'slide3',
        title: 'מבוא',
        file: 'slides/introduction.html'
    },
    {
        id: 'slide4',
        title: 'Anthropic - דיריקס הופמן',
        file: 'slides/anthropic-summary.html'
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
    {
        id: 'slide-devops-uses',
        title: 'שימושי AI ל-DevOps',
        file: 'slides/use-cases-devops.html'
    },
    {
        id: 'slide-qa-uses',
        title: 'שימושי AI ל-QA',
        file: 'slides/use-cases-qa.html'
    },
    {
        id: 'slide-pm-uses',
        title: 'שימושי AI למנהלי פרויקטים',
        file: 'slides/use-cases-pm.html'
    },
    {
        id: 'slide-benefits',
        title: 'יתרונות מרכזיים',
        file: 'slides/use-cases-benefits.html'
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
        id: 'slide14',
        title: 'מדיניות אבטחה',
        file: 'slides/security-measures.html'
    },
    {
        id: 'security-data-protection',
        title: 'הגנה על מידע ופרטיות',
        file: 'slides/security-data-protection.html'
    },
    {
        id: 'security-access-control',
        title: 'בקרת גישה וממשל',
        file: 'slides/security-access-control.html'
    },
    {
        id: 'security-ethical',
        title: 'שימוש אתי ב-AI',
        file: 'slides/security-ethical.html'
    },
    {
        id: 'security-critical',
        title: 'שיקולים קריטיים',
        file: 'slides/security-critical.html'
    },
    {
        id: 'security-measures',
        title: 'אמצעי אבטחה שוטפים',
        file: 'slides/security-measures-ongoing.html'
    },
    {
        id: 'slide15',
        title: 'מבט לעתיד',
        file: 'slides/future.html'
    },
    {
        id: 'future-trends',
        title: 'מגמות והזדמנויות עתידיות',
        file: 'slides/future-trends.html'
    },
    {
        id: 'future-challenges',
        title: 'אתגרים צפויים',
        file: 'slides/future-challenges.html'
    },
    {
        id: 'future-roadmap',
        title: 'מפת דרכים עתידית',
        file: 'slides/future-roadmap.html'
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
        id: 'performance-innovation',
        title: 'מדדי חדשנות',
        file: 'slides/performance-innovation.html'
    },
    {
        id: 'performance-team',
        title: 'מדדי צוות',
        file: 'slides/performance-team.html'
    },
    {
        id: 'implementation-overview',
        title: 'מפת דרכים אסטרטגית - סקירה',
        file: 'slides/implementation-overview.html'
    },
    {
        id: 'implementation-foundation',
        title: 'שלב 1: תשתית והיערכות',
        file: 'slides/implementation-foundation.html'
    },
    {
        id: 'implementation-pilot',
        title: 'שלב 2: פיילוטים ממוקדים',
        file: 'slides/implementation-pilot.html'
    },
    {
        id: 'implementation-rollout',
        title: 'שלב 3: הטמעה ארגונית',
        file: 'slides/implementation-rollout.html'
    },
    {
        id: 'implementation-roadmap',
        title: 'מפת דרכים ליישום',
        file: 'slides/implementation-roadmap.html'
    },
    {
        id: 'questions',
        title: 'שאלות ודיון',
        file: 'slides/questions.html'
    }
];

export default slides;