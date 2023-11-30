window.addEventListener("load", function()
{
    setTimeout(
        function open(event)
        {
            document.querySelector(".popup").style.display = "block";
        },
        1500
    )
});
document.querySelector(".close").addEventListener("click", function()
{
    document.querySelector(".popup").style.display = "none";
});

