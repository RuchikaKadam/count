document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const counterContainer = document.getElementById('counterContainer');
    const countDisplay = document.getElementById('countDisplay');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    // Initial count value
    let count = 0;
  
    // Function to update display with animation
    function updateDisplayWithAnimation() {
      countDisplay.style.transform = 'scale(1.07)';
      setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
      }, 500);
      countDisplay.textContent = count;
    }
  
    // Event listeners
    increaseBtn.addEventListener('click', function() {
      count++;
      updateDisplayWithAnimation();
    });
  
    decreaseBtn.addEventListener('click', function() {
      count--;
      updateDisplayWithAnimation();
    });
  
    resetBtn.addEventListener('click', function() {
      counterContainer.style.opacity = 0;
      setTimeout(() => {
        count = 0;
        counterContainer.style.opacity = 1;
        updateDisplayWithAnimation();
      }, 1000);
    });
  
    // Initial display
    updateDisplayWithAnimation();
  });
  