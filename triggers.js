var navbarExpanded = false;
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