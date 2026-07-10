const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.topbar nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const eventType = document.getElementById('eventType').value;
  const eventDate = document.getElementById('eventDate').value || 'Not decided';
  const location = document.getElementById('location').value.trim() || 'Not provided';
  const message = document.getElementById('message').value.trim() || '-';

  const text =
`Hello Mahadev Lightings,

Name: ${name}
Mobile: ${mobile}
Event: ${eventType}
Event Date: ${eventDate}
Location: ${location}
Requirement: ${message}`;

  window.open('https://wa.me/918320618746?text=' + encodeURIComponent(text), '_blank');
});