window.addEventListener('message', function(event) {
    let data = event.data;
    const panel = document.getElementById('task-panel');
    
    if (data.action === 'showUI') {
        panel.innerHTML = '';
        for(let i = 0; i < data.max; i++) {
            let circle = document.createElement('div');
            circle.className = 'status-circle active'; 
            circle.innerHTML = '<i class="fa-solid fa-trowel-bricks"></i>';
            panel.appendChild(circle);
        }
        panel.classList.add('show');
    } 
    else if (data.action === 'hideUI') {
        panel.classList.remove('show');
    } 
    else if (data.action === 'updateCount') {
        let circles = document.querySelectorAll('.status-circle');
        circles.forEach((circle, index) => {
            if (index < data.count) {
                if (circle.classList.contains('active')) {
                    circle.classList.remove('active');
                    circle.classList.add('repaired');
                }
            }
        });
    }
});