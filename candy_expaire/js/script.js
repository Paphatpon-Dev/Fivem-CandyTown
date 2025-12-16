const container = document.querySelector('.expaire-body');
const items = document.querySelectorAll('.expaire-body-grid-items');
const tooltip = document.querySelector('.hover-time');

items.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();

    tooltip.style.opacity = 1;
    tooltip.style.left = (e.clientX - rect.left + 12) + 'px';
    tooltip.style.top  = (e.clientY - rect.top  + 12) + 'px';
  });

  item.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});
