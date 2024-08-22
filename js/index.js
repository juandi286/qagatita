document.querySelector('.X').addEventListener('click', function() {
    document.querySelector('.element').style.display = 'none';
});
document.querySelector('.element').addEventListener('dblclick', function() {
    const colores = ['lightyellow', 'lightblue', 'lightred', 'lightpink', 'purple'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    this.style.backgroundColor = colorAleatorio;
});