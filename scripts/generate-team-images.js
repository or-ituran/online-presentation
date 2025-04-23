// Script to generate team images
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const teams = [
    {
        name: 'Go Backend Development',
        subtext: 'Team ICF',
        filename: 'golang-backend.jpg',
        gradient: ['#1a365d', '#2d3748']
    },
    {
        name: 'C# .NET Development',
        subtext: 'Team Engines',
        filename: 'csharp-engines.jpg',
        gradient: ['#2b6cb0', '#4299e1']
    },
    {
        name: 'Business Intelligence',
        subtext: 'Team BI',
        filename: 'bi-analytics.jpg',
        gradient: ['#4299e1', '#63b3ed']
    },
    {
        name: 'ASP.NET Web Development',
        subtext: 'Team IWEB',
        filename: 'aspnet-web.jpg',
        gradient: ['#3182ce', '#4299e1']
    },
    {
        name: 'React & TypeScript',
        subtext: 'Web Team',
        filename: 'react-typescript.jpg',
        gradient: ['#2c5282', '#2b6cb0']
    },
    {
        name: 'Mobile Development',
        subtext: 'Mobile Team',
        filename: 'mobile-dev.jpg',
        gradient: ['#2a4365', '#2c5282']
    },
    {
        name: 'DevOps & Infrastructure',
        subtext: 'DevOps Team',
        filename: 'devops.jpg',
        gradient: ['#1a365d', '#2d3748']
    },
    {
        name: 'Quality Assurance',
        subtext: 'QA Team',
        filename: 'qa-testing.jpg',
        gradient: ['#2b6cb0', '#4299e1']
    }
];

const width = 800;
const height = 400;

async function generateTeamImages() {
    for (const team of teams) {
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, team.gradient[0]);
        gradient.addColorStop(1, team.gradient[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add team name
        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(team.name, width/2, height/2 - 20);

        // Add subtext
        ctx.font = '30px Arial';
        ctx.fillText(team.subtext, width/2, height/2 + 40);

        // Save the image
        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(`../images/teams/${team.filename}`, buffer);
    }
}

generateTeamImages().catch(console.error);