let index = 0;
let modalOpen = false;

const app = document.getElementById("app");
const track = document.querySelector(".sliders-track");
const slides = document.querySelectorAll(".sliders-card");
const maxIndex = slides.length - 1;

const modalcreate = document.querySelector('.container-modal-create');
const modaledit = document.querySelector('.container-modal-edit');

const editButtons = document.querySelectorAll('.edit');
const createButtons = document.querySelectorAll('.create');

createButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modalcreate.classList.add('active');
    modalOpen = true;
  });
});

editButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modaledit.classList.add('active');
    modalOpen = true;
  });
});

// CANCEL BUTTON (ทุก modal)
document.querySelectorAll('.cancle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const modal = e.target.closest('.container-modal-create, .container-modal-edit');
    modal?.classList.remove('active');
  });
});

// CLICK BACKDROP TO CLOSE
// modalcreate.addEventListener('click', () => {
//   modalcreate.classList.remove('active');
// });

// modaledit.addEventListener('click', () => {
//   modaledit.classList.remove('active');
// });

app.focus();

function updateActive() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index);
  });
}

function slide(dir) {
  if (modalOpen) return;
  index += dir;
  index = Math.max(0, Math.min(index, maxIndex));

  track.style.transform = `translateX(-${index * 100}%)`;
  updateActive();
}
updateActive();

app.addEventListener("keydown", (e) => {
  if (modalOpen) return;

  if (e.code === "PageUp") slide(-1);
  if (e.code === "PageDown") slide(1);
});

document.getElementById("prev").onclick = () => slide(-1);
document.getElementById("next").onclick = () => slide(1);
