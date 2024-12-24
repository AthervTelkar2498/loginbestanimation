// Select the elements with the class 'signInBtn-link' and store them in variables
const signInBtnLink = document.querySelector('.signInBtn-link');

// Select the elements with the class 'signUpBtn-link' and store them in variables
const signUpBtnLink = document.querySelector('.signUpBtn-link');

// Select the element with the class 'wrapper' and store it in a variable
const wrapper = document.querySelector('.wrapper');

// Add a click event listener to the 'signUpBtnLink' element
signUpBtnLink.addEventListener('click', () => {
    // Toggle the 'active' class on the 'wrapper' element when 'signUpBtnLink' is clicked
    wrapper.classList.toggle('active');
});

// Add a click event listener to the 'signInBtnLink' element
signInBtnLink.addEventListener('click', () => {
    // Toggle the 'active' class on the 'wrapper' element when 'signInBtnLink' is clicked
    wrapper.classList.toggle('active');
});
