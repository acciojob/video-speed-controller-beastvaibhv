const inputs = document.querySelectorAll('.controls input');


    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const bac10 = document.getElementById("back10");
bac10.addEventListener("click",()=>{
	
})
const for25 = document.getElementById("forward25");
for25.addEventListener("click", ()=>{
	
})