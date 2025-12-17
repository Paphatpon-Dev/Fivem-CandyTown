setHp = function(percent, _attempt = 0) {
    const p = Math.max(0, Math.min(100, Number(percent)));
    window._hpPercent = p;
    const el = document.getElementById('hpFill');
    if (!el) {
        if (_attempt < 15) { // retry up to ~6s
            setTimeout(() => window.setHp(p, _attempt + 15), 100);
        }
        return;
    }
    const poly = `polygon(0% 0%, ${p}% 0%, ${p}% 100%, 0% 100%)`;
    el.style.clipPath = poly;
    el.style.webkitClipPath = poly;
};
setHp(50);