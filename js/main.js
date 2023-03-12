/* Step 1: Select the element that will be clicked on to show or hide the navigator. In this case it's the button element. */
const btn = document.querySelector('.toggle-btn');

/*Step 2: add a click event to that button icon */
btn.addEventListener('click', function() {
    //when the button is clicked, show the nav element by adding the class name. Show nav to it
    document.querySelector('nav').classList.toggle('show-nav');

});

/*Step 3: Link to the js file in the HTML, note: the js must be loaded last so use a defer attribute */