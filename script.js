// JavaScript untuk Efek Dinamis

document.querySelectorAll('.match').forEach(match => {
    match.addEventListener('mouseover', () => {
        match.style.backgroundColor = '#ff4b2b';
        match.style.color = '#fff';
    });
    match.addEventListener('mouseout', () => {
        match.style.backgroundColor = '#333';
        match.style.color = '#fff';
    });
});
