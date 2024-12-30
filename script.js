let snowflakes = document.querySelectorAll(".snowflake")

snowflakes.forEach(snowflake =>{
    snowflake.style.left = Math.floor(Math.random() * 97) + "%";
    snowflake.style.animationDelay = Math.random() * 10 + "s";
})