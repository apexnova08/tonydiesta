var navbarExpanded = false;
function OnLoad()
{
    const date = new Date();
    console.log(date);
    document.getElementById("age").textContent = date;
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