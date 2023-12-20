const container = document.getElementById('container');
const blobCount = 50;

for (let i = 0; i < blobCount; i++) {
    createBlob();
}

function createBlob() {
    const blob = document.createElement('div');
    blob.className = 'blob';
    container.appendChild(blob);

    blob.style.left = Math.random() * window.innerWidth + 'px';
    blob.style.top = Math.random() * window.innerHeight + 'px';

    blob.addEventListener('mousemove', () => {
        moveAway(blob);
    });
}

function moveAway(blob) {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    blob.style.left = newX + 'px';
    blob.style.top = newY + 'px';
}
