const checkboxes  = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let sandwich = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(cb => {
            if(cb === this || cb === lastChecked){
                sandwich = !sandwich;
            }
            if(sandwich){
                cb.checked = true;
            }
        })

    }
    lastChecked = this;
}
checkboxes.forEach(cb => cb.addEventListener('click', handleCheck));
