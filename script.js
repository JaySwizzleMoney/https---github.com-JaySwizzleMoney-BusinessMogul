const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Create an image object
const img = new Image();
img.src = 'commercial_building.png';  // Replace this with the actual file name

// Draw the image when it loads
img.onload = function() {
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
        ctx.drawImage(img, 50, 50, 100, 200);  // Draw the image at (50, 50), with size 100x100
        requestAnimationFrame(draw);  // Calls draw repeatedly (for animation purposes)
    }

    draw();  // Start the game loop
};
