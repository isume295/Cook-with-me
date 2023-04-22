const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('header');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-xmark');
  nav.classList.toggle('mobile-menu');
});

const links = document.querySelectorAll('.nav ul li a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle('mobile-menu');
  });
});

const data = [
  {
    name: 'Sumeya Ibrahim',
    image: 'img/avatar6.jpg',
    title: 'Specializing in making burgers and fries',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
  {
    name: 'David Nguyen',
    image: 'img/avatar5.jpg',
    title: 'An expert in Mexican cuisine and traditional mole sauces',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
  {
    name: 'Sarah Johnson',
    image: 'img/avatar4.jpg',
    title: 'A specialist in Southern comfort food.',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
  {
    name: 'Tom Wilson',
    image: 'img/avatar2.jpg',
    title: 'Specializing in sushi and Japanese cuisine',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
  {
    name: 'Alex Kim',
    image: 'img/avatar1.jpg',
    title: 'famous for her chicken nuggets and fries',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
  {
    name: 'John Brown',
    image: 'img/avatar3.jpg',
    title: 'An expert in French pastry',
    details: 'As a cook, I believe that food has the power to bring people together and create a sense of community.',
  },
];

const cookPage = document.getElementById('cooks');
const div = document.createElement('div');
div.className = 'cooks-grid-container';
cookPage.appendChild(div);

div.innerHTML = data.reduce((output, cook) => (
  `${output
  }
  <div class="cook-flex-container">
  <div class = "img-container">
  <div class="cook-img">
    <img src=${cook.image} alt="profile pic"/>
  </div>
</div>
  <div class="cook-details">
      <div>
      <h5>${cook.name}</h5>
      <p class="detail-p1">${cook.title}</p>
      <div class="cook-line"></div>
      </div>
      <p class="detail-p">${cook.details}</p>
  </div>
</div>
`
), '');