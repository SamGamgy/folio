// // grab testimonial cards
// const slides = document.querySelectorAll('.review-item')

// // grab buttons
// const buttons = document.querySelectorAll('.slide-ctrl-container button');

// // generate random number for array index
// let current = Math.floor(Math.random() * slides.length);
// let next = current < slides.length - 1 ? current + 1 : 0;
// let prev = current > 0 ? current - 1 : slides.length - 1;

// const update = () => {
//     slides.forEach((slide) => {
//         slide.classList.remove('active', 'previous', 'next');
//     })
//     slides[current].classList.add('active');
//     slides[prev].classList.add('previous');
//     slides[next].classList.add('next');
// }

// const goToNum = (num) => {
//     current = num;
//     next = current < slides.length - 1 ? current + 1 : 0;
//     prev = current > 0 ? current - 1 : slides.length - 1;
//     update();
// }

// const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0); 
// const goToPrev = () => current > 0 ? goToNum(current - 1) : goToNum( slides.length - 1) ;

// for (let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
// }

// update();

// HTML

// <!-- reviews -->
//             <!-- <section class="reviews">
//                 <div class="review-title">What People Say</div>
//                 <h2 class="header-medium">Trusted by Clients.</h2>
//                 <div class="review-preview">
//                     <img src="./assets/images/cube.png" alt="cube">
//                 </div>

//                 <div class="review-carousel">
//                     <div class="review-item ">
//                         <div class="review-text">
//                             #1 folio Designer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </div>
//                         <div class="review-author">
//                             <div class="avatar">
//                                 <img src="./assets/images/ava-1.jpg" alt="avatar">
//                             </div>
//                             <div class="details">
//                                 <div>Joe Schmoe</div>
//                                 <div>Carp Corp</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="review-item ">
//                         <div class="review-text">
//                             #2 folio Designer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </div>
//                         <div class="review-author">
//                             <div class="avatar">
//                                 <img src="./assets/images/ava-1.jpg" alt="avatar">
//                             </div>
//                             <div class="details">
//                                 <div>Charlie Buckets</div>
//                                 <div>Company.co</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="review-item ">
//                         <div class="review-text">
//                             #3 folio Designer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </div>
//                         <div class="review-author">
//                             <div class="avatar">
//                                 <img src="./assets/images/ava-1.jpg" alt="avatar">
//                             </div>
//                             <div class="details">
//                                 <div>John Jacob</div>
//                                 <div>El El Sea LLC</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="review-item">
//                         <div class="review-text">
//                             #4 folio Designer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                         </div>
//                         <div class="review-author">
//                             <div class="avatar">
//                                 <img src="./assets/images/ava-1.jpg" alt="avatar">
//                             </div>
//                             <div class="details">
//                                 <div>Duh Doe</div>
//                                 <div>Simpson Services</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="slide-ctrl-container">
//                     <button>
//                         <i class="fas fa-arrow-left"></i>
//                     </button>
//                     <button>
//                         <i class="fas fa-arrow-right"></i>
//                     </button>
//                 </div>

//             </section> -->
