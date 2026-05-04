// all variables 
let addNote = document.querySelector('#add-note');
let formContainer = document.querySelector('.form-container');
let closeForm = document.querySelector('.close');

const stack = document.querySelector('.stack');
const upBtn = document.querySelector('#upBtn');
const downBtn = document.querySelector('#downBtn');

const form = document.querySelector('#note-form');

const imageUrl = document.querySelector('input[name="imageUrl"]');
const fullName = document.querySelector('input[name="fullName"]');
const homeTown = document.querySelector('input[name="homeTown"]');
const purpose = document.querySelector('input[name="purpose"]');

const categories = document.querySelectorAll('input[name="cat"]');

// ================= SAVE =================
function saveToLocalStorage(obj) {
  let oldTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

// ================= OPEN/CLOSE FORM =================
addNote.addEventListener('click', function() {
  formContainer.style.display = 'initial';
});

closeForm.addEventListener('click', function() {
  formContainer.style.display = 'none';
});

// ================= FORM SUBMIT =================
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const img = imageUrl.value.trim();
  const name = fullName.value.trim();
  const town = homeTown.value.trim();
  const purp = purpose.value.trim();

  let selected = false;
  categories.forEach(function(cat) {
    if (cat.checked) selected = cat.value;
  });

  // validations
  if (!img) return alert("Please enter an Image URL.");
  if (!name) return alert("Please enter your Full Name.");
  if (!town) return alert("Please enter your Home Town.");
  if (!purp) return alert("Please enter the Purpose.");
  if (!selected) return alert("Please select a Category.");

  saveToLocalStorage({
    imageUrl: img,
    fullName: name,
    homeTown: town,
    purpose: purp,
    selected,
  });

  form.reset();
  formContainer.style.display = 'none';

  showCards();   // 🔥 refresh UI
  updateStack(); // 🔥 update stack styling
});

// ================= SHOW CARDS =================
function showCards() {
  stack.innerHTML = ""; // 🔥 clear old cards

  let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  allTasks.forEach(function(task) {

    const card = document.createElement("div");
    card.className = "card";

    const profile = document.createElement("div");
    profile.className = "profile";

    const img = document.createElement("img");
    img.src = task.imageUrl;

    profile.appendChild(img);

    const name = document.createElement("h2");
    name.textContent = task.fullName;

    const info = document.createElement("div");
    info.className = "info";

    const homeDiv = document.createElement("div");
    const homeP = document.createElement("p");
    homeP.textContent = "Home town";

    const homeSpan = document.createElement("span");
    homeSpan.textContent = task.homeTown;

    homeDiv.append(homeP, homeSpan);

    const bookingDiv = document.createElement("div");
    const bookingP = document.createElement("p");
    bookingP.textContent = "Bookings";

    const bookingSpan = document.createElement("span");
    bookingSpan.textContent = task.purpose;

    bookingDiv.append(bookingP, bookingSpan);

    info.append(homeDiv, bookingDiv);

    const actions = document.createElement("div");
    actions.className = "actions";

    const callBtn = document.createElement("button");
    callBtn.className = "call";
    callBtn.textContent = "📞 Call";

    const msgBtn = document.createElement("button");
    msgBtn.className = "msg";
    msgBtn.textContent = "Message";

    actions.append(callBtn, msgBtn);

    card.append(profile, name, info, actions);

    stack.appendChild(card);
  });
}

// ================= STACK DESIGN =================
function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach(function(card, index) {
    card.style.zIndex = cards.length - index;
    card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
    card.style.opacity = `${1 - index * 0.02}`;
  });
}

// ================= BUTTONS =================
upBtn.addEventListener('click', function() {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    updateStack();
  }
});

downBtn.addEventListener('click', function() {
  let firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.appendChild(firstChild);
    updateStack();
  }
});

// ================= INITIAL LOAD =================
showCards();
updateStack();