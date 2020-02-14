// Cached Elements
const inputs = document.querySelectorAll('.controls input');

// Event Listener Function
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event Listeners
inputs.forEach(function (input) {

  input.addEventListener("change",  function() {
    const suffix = this.dataset.sizing || '';
    console.log(this.name, this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  });
});


inputs.forEach(input => input.addEventListener("mouseover", handleUpdate));
