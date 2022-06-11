export default function scrollNav () {

    const scrollPosition = window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;
        const myNav = document.getElementById('MainNav')

        if (scrollY > 100) {
            myNav.classList.remove("bg-transparent");
            myNav.classList.add("bg-gray-900");
        }
        
        if (scrollY < 100) {
            myNav.classList.remove("bg-gray-900");
            myNav.classList.add("bg-transparent");
        }
    });
}
console.log('Hello World');
scrollNav();