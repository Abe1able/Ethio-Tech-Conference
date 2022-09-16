const openMobileMenu = document.querySelector('.hamburger-icon');
const closeMobileMenu = document.querySelector('.close-button');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const featuredSpeakersContainer = document.querySelector('.featured-speakers-container');
const showMoreBtn = document.querySelector('.show-more-btn');
const showMoreSpan = document.querySelector('.more');
const showLessSpan = document.querySelector('.down-arrow');

const speakers = [
  {
    name: 'Elon Musk',
    title: 'Founder and CEO of Tesla, Neuralink, OpenAI, SpaceX',
    description: 'Elon Reeve Musk is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.',
    speaker_image: './Images/Elon.jpg',
  },
  {
    name: 'Bill Gates',
    title: 'Cofounder and former CEO of Microsoft',
    description: 'Bill Gates, in full William Henry Gates III, American computer programmer and entrepreneur who cofounded Microsoft Corporation, the world’s largest personal-computer software company.',
    speaker_image: './Images/Bill.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    title: 'Founder and CEO of Meta, formerly known as Facebook',
    description: 'Mark Elliot Zuckerberg is an American business magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder',
    speaker_image: './Images/Mark.png',
  },
  {
    name: 'Jeff Bezos',
    title: 'Founder and former CEO of Amazon',
    description: 'Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon.',
    speaker_image: './Images/Jeff.jpg',
  },
  {
    name: 'Rediet Abebe',
    title: 'Assistant Professor of computer science.',
    description: 'Rediet Abebe is an Ethiopian computer scientist working in algorithms and artificial intelligence. She is an Assistant Professor of Computer Science at the University of California, Berkeley. Previously, she was a Junior Fellow at the Harvard Society of Fellows.',
    speaker_image: './Images/Rediet.png',
  },
  {
    name: 'Jack Ma',
    title: 'Co-founder and former executive chairman of Alibaba Group',
    description: 'Jack Ma is a Chinese business magnate, investor and philanthropist. He is the co-founder and former executive chairman of Alibaba Group, a multinational technology conglomerate. In addition, he co-founded Yunfeng Capital, a Chinese private equity firm',
    speaker_image: './Images/Jack.jpg',
  },
];

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});

menuContainer.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  humburgerButton.classList.add('hide');
});

document.addEventListener('DOMContentLoaded', () => {
  featuredSpeakersContainer.innerHTML = speakers.map((speaker) => `
        <article class="speaker-catagories">
                <div class="speaker-img">
                    <img src=${speaker.speaker_image} alt="speaker image">
                </div>
                <div class="speaker-text">
                    <div class="speaker-name">
                        <h5>${speaker.name}</h5>
                    </div>
                    <div class="speaker-title">
                        <p>${speaker.title}</p>
                    </div>
                    <div class="speaker-detail">
                        <p>${speaker.description}</p>
                    </div>
                </div>
        </article>
    `).join('');
  showMoreBtn.addEventListener('click', () => {
    const isMoreClicked = featuredSpeakersContainer.classList.contains('show-more');
    if (isMoreClicked) {
      featuredSpeakersContainer.classList.remove('show-more');
      showMoreSpan.innerHTML = 'MORE';
      showLessSpan.innerHTML = '&#8964';
      showLessSpan.classList.add('down-arrow');
      showLessSpan.classList.remove('up-arrow');
    } else {
      featuredSpeakersContainer.classList.add('show-more');
      showMoreSpan.innerHTML = 'LESS';
      showLessSpan.innerHTML = '&#8963';
      showLessSpan.classList.add('up-arrow');
      showLessSpan.classList.remove('down-arrow');
    }
  });
});
