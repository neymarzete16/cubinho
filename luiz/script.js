const scene = document.getElementById('scene');
const size = 40;

// 1. Criar o Cubo 3x3x3
for (let i = 0; i < 27; i++) {
    const cube = document.createElement('div');
    cube.className = 'cube';

    // Cálculo para centralizar o cubo no eixo (subtraindo 40px)
    const x = (i % 3) * size - size;
    const y = Math.floor((i / 3) % 3) * size - size;
    const z = Math.floor(i / 9) * size - size;

    cube.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;

    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    faces.forEach(f => {
        const div = document.createElement('div');
        div.className = `face ${f}`;
        cube.appendChild(div);
    });

    scene.appendChild(cube);
}

// 2. Lógica de Interação com o Mouse
let isDragging = false;
let rotX = -25; // Rotação inicial
let rotY = 45;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;

    // Sensibilidade do movimento
    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});