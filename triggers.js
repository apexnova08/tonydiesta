var navbarExpanded = false;

function OnLoad()
{
    const bdate = new Date("1999/12/26");
    document.getElementById("age").textContent = Math.floor((new Date() - bdate) / (1000 * 60 * 60 * 24 * 365.25));
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
}