// const addActiveClass = () => {
//   document.addEventListener("keydown", (event) => {
//     const output = document.getElementById("keys-output");
//     const keyEvent = document.querySelector(`.key.${event.code.toLowerCase()}`);
//     if (keyEvent) {
//       keyEvent.classList.add("active");
//       output.textContent += `${event.key.toUpperCase()}, `;
//     }
//   });
// };
// addActiveClass();

// const reset = () => {
//   const resetBtn = document.querySelector(".reset-button");
//   const keyElements = document.querySelectorAll(".key");
//   resetBtn.addEventListener("click", () => {
//     document.getElementById("keys-output").textContent = "";
//     keyElements.forEach((key) => {
//       key.classList.remove("active");
//     });
//   });
// };
// reset();

// Keydown and Keyup event listener (added once)
const addActiveClass = () => {
  document.addEventListener("keydown", (event) => {
    const output = document.getElementById("keys-output");
    const keyEvent = document.querySelector(`.key.${event.code.toLowerCase()}`);
    if (keyEvent) {
      keyEvent.classList.add("active");

      // Prevent the same key from being added multiple times in quick succession
      if (!output.textContent.includes(event.key)) {
        output.textContent += `${event.key.toUpperCase()}, `;
      }
    }
  });
};
addActiveClass();

// Reset functionality with improvements
const reset = () => {
  const resetBtn = document.querySelector(".reset-button");
  const keyElements = document.querySelectorAll(".key");

  resetBtn.addEventListener("click", () => {
    const output = document.getElementById("keys-output");

    // Clear the displayed keys output
    output.textContent = "";

    // Remove active class from all keys
    keyElements.forEach((key) => {
      key.classList.remove("active");
    });
  });
};
reset();
