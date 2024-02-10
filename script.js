const calculatorButtons = document.querySelectorAll(".calculator span");

calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    anime({
      targets: button,
      translateY: [
        { value: -20, duration: 200, easing: "easeInOutQuad" },
        { value: 0, duration: 800, elasticity: 600, easing: "easeInOutQuad" },
      ],
      rotate: [
        { value: 0, duration: 200, easing: "easeInOutQuad" },
        { value: 360, duration: 800, elasticity: 600, easing: "easeInOutQuad" },
      ],
      scale: [
        { value: 1, duration: 200, easing: "easeInOutQuad" },
        { value: 1.2, duration: 800, elasticity: 600, easing: "easeInOutQuad" },
        { value: 1, duration: 200, easing: "easeInOutQuad" },
      ],
      backgroundColor: [
        { value: "rgba(255, 255, 255, 0.05)", duration: 200, easing: "easeInOutQuad" },
        { value: "#14ff47", duration: 800, elasticity: 600, easing: "easeInOutQuad" },
        { value: "rgba(255, 255, 255, 0.05)", duration: 200, easing: "easeInOutQuad" },
      ],
      easing: "easeInOutQuad",
    });
  });
});

const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    sec.classList.toggle('dark');
}