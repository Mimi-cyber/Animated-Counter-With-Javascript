const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach(count => {
    const updateCount = () => {
        const target = +count.getAttribute("data-target");
        const counter = +count.innerText;

        const inc = target / speed;

        if(counter < target){
            count.innerText = Math.ceil(counter + inc);
            setTimeout(updateCount, 1);
        }else {
            count.innerText = target;
        }
        
    }

    updateCount();
   
});