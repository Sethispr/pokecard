/* Reset styles and global settings */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #f0f2f5; /* Adjusted background color */
}

.container {
  width: 100%; /* Modified width for responsiveness */
  max-width: 400px; /* Added max-width for better responsiveness */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px; /* Added padding for better spacing */
}

#card {
  position: relative;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ffffff;
  height: 510px; /* Set a fixed height for the card */
  overflow: hidden; /* Hide overflow to prevent content overflow */
  transition: box-shadow 0.3s; /* Add transition for smooth shadow change */
}

#card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); /* Default shadow on hover */
}

#card:hover::after {
  background-color: var(--theme-color); /* Change pseudo-element background color on hover */
}

#card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent overlay */
  transition: background-color 0.3s; /* Add transition for smooth color change */
  z-index: -1;
}

:root {
  --theme-color: #ff0000; /* Default theme color (replace with actual theme color) */
}

#card img {
  display: block;
  width: 180px;
  max-height: 200px;
  margin: 0 auto 20px;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; /* Added transition for transform and filter */
}

#card img:hover {
  transform: scale(1.1); /* Scale up the image on hover */
  filter: brightness(1.1); /* Increase brightness on hover */
}

.hp {
  width: 80px;
  background-color: #ffffff;
  text-align: center;
  padding: 8px 0;
  border-radius: 30px;
  margin-left: auto;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Unique hover effect for .hp */
.hp::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(to right, #ffffff, #f5f5f5, #ffffff); /* Set gradient with different shades of white */
  transition: transform 0.3s;
  z-index: -1;
}

.hp:hover::after {
  transform: translateX(-50%);
}

/* Pulsating animation for .hp */
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.hp:hover {
  animation: pulsate 1s infinite;
}


.poke-name {
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease-in-out; /* Added transition for color change */
}

.poke-name:hover {
  color: ${themeColor}; /* Update the color on hover */
}

.poke-name::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: auto; /* Set the width to auto */
  height: 2px;
  background-color: #ffcc00;
  transform: scaleX(0); /* Initially, the line has no width */
  transform-origin: bottom left;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.poke-name:hover::after {
  width: 100%; /* Expand the width to 100% on hover */
  transform: scaleX(1);
}

.types {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 40px 0;
}

.hp span,
.types span {
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
}

.types span {
  padding: 5px 20px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  transition: transform 1s, background-color 0.3s;
}

/* Unique hover effect for types */
.types span:hover {
  transform: rotate(360deg); /* Rotate the button 360 degrees on hover */
  background-color: #ff69b4; /* Change background color on hover */
}

.stats {
  display: flex;
  flex-wrap: wrap; /* Allow stats to wrap on smaller screens */
  justify-content: space-between;
  text-align: center;
  margin-bottom: 20px; /* Added bottom margin for spacing */
}

.stats p {
  color: #616161; /* Adjusted text color for better contrast */
}

#btn {
  display: block;
  margin: 20px auto 0;
  width: 70%; /* Modified width for better responsiveness */
  padding: 15px 0; /* Adjusted padding for better appearance */
  font-size: 16px; /* Slightly reduced font size for better fit */
  background-color: #fff; /* Changed button color to pink */
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 25px; /* Increased border radius for smoother corners */
  cursor: pointer; /* Added cursor pointer for better UX */
  position: relative; /* Added position relative for child elements positioning */
  overflow: hidden; /* Hide overflow for inner elements */
  transition: color 0.3s, transform 0.3s; /* Added transition for color and transform */
}

#btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent background color */
  transition: transform 0.3s; /* Added transition for transform */
  transform: translate3d(-100%, 0, 0); /* Initial state, off to the left */
}

#btn:hover::before {
  transform: translate3d(0, 0, 0); /* Move in on hover */
}

#btn:hover {
  color: #000; /* Change text color on hover */
  transform: translate3d(5px, 0, 0); /* Move button slightly to the right */
}

#cardContainer {
  opacity: 0; /* Initially hide the card container */
  transition: opacity 0.3s ease-in-out; /* Add transition for smooth fade-in effect */
}

#cardContainer.loaded {
  opacity: 1; /* Show the card container once content is loaded */
}
