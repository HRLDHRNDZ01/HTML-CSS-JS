document.addEventListener('DOMContentLoaded', function () {
    const flower = document.getElementById('flower');
  
    for (let i = 0; i < 8; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.transform = `rotate(${i * 45}deg)`;
      flower.appendChild(petal);
    }
  });