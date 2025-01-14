 /* Best Sellers Slideshow Styling */
  .best-sellers {
   text-align: center;
   padding: 40px 20px;
   background-color: #fff;
   }

   .best-sellers h2 {
   font-size: 2rem;
   margin-bottom: 20px;
   color: #623b27;
   }

   /* Slider Container */
    .slider-container {
    position: relative;
    max-width: 100%;
    overflow: hidden; /* Hide overflow content */
    margin: 0 auto;
    }
    
    /* Slides Container */
    .slides {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Smooth transition between slides */
    }
    
    .slide {
    min-width: 100%; /* Each slide takes up 100% of the container */
    box-sizing: border-box;
    text-align: center;
    }
    
    .slide img {
    width: 80%;
    max-height: 300px; /* Set a max height for the images */
    object-fit: cover;
    margin-bottom: 10px;
    }
    
    .slide p {
    font-size: 1.2rem;
    color: #623b27;
    }
    
    /* Navigation Arrows */
    button {
   position: absolute;
   top: 50%;
   background-color: rgba(0, 0, 0, 0.5);
   color: white;
   border: none;
   padding: 10px;
   font-size: 2rem;
   cursor: pointer;
   z-index: 10;
   transform: translateY(-50%);
transition: background-color 0.3s;
    }
    
    button:hover {
    background-color: rgba(0, 0, 0, 0.8);
    }
    
    /* Left Arrow */
    .prev {
    left: 10px;
    }
    
    /* Right Arrow */
    .next {
    right: 10px;
    }