export default function generateTeamImage(container, slideConfig) {
    if (!slideConfig.teamImage) return;

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.objectFit = 'cover';
    canvas.style.borderRadius = '12px';

    const ctx = canvas.getContext('2d');

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, slideConfig.teamImage.colors[0]);
    gradient.addColorStop(1, slideConfig.teamImage.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add geometric patterns
    ctx.save();
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, 0);
        ctx.lineTo(Math.random() * canvas.width, canvas.height);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    ctx.restore();

    // Add title with shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(slideConfig.teamImage.title, canvas.width / 2, canvas.height / 2 - 20);

    // Add subtitle
    ctx.font = '30px Arial';
    ctx.fillText(slideConfig.teamImage.subtitle, canvas.width / 2, canvas.height / 2 + 40);
    ctx.restore();

    // Replace img with canvas
    const img = container.querySelector('img');
    if (img) {
        img.replaceWith(canvas);
    }
} 