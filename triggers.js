var navbarExpanded = false;

function OnLoad()
{
    const bdate = new Date("1999/12/26");
    document.getElementById("age").textContent = Math.floor((new Date() - bdate) / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("year").textContent = new Date().getFullYear();
}
function toggleNavBar() 
{
    if (navbarExpanded)
    {
        navbarExpanded = false;
        document.getElementById("navbar").classList.remove("navbarExpand");
        document.getElementById("navbar").classList.add("navbarContract");
    }
    else
    {
        navbarExpanded = true;
        document.getElementById("navbar").classList.remove("navbarContract");
        document.getElementById("navbar").classList.add("navbarExpand");
    }
}/*
function NavClick(panel)
{
    document.getElementById(panel).classList.add("navscroll");
}*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.id == 'navbar') {/*
                document.getElementById('about').classList.remove("navscroll");
                document.getElementById('skills').classList.remove("navscroll");
                document.getElementById('projects').classList.remove("navscroll");
                document.getElementById('contact').classList.remove("navscroll");*/
            }
            else if (entry.target.id == 'skill') {
                entry.target.classList.add('appear');
            }
            else if (entry.target.id == 'projimgcntnr') {
                entry.target.classList.add('slide');
            }
            else if (entry.target.id == 'pimg') {
                entry.target.classList.add('slidedelay');
            }
            else if (entry.target.classList.contains('ptitle')) {
                entry.target.classList.add('ptitle1');
            }
            else if (entry.target.classList.contains('textColored')) {
                entry.target.classList.add('ptitle2');
            }
            else {
                entry.target.classList.add('appear');
            }
        }
    });
});
document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
observer.observe(document.querySelector('#navbar'));