// JavaScript Document
 $(function () {
      
        $("#mess_js").find("div").click(function () {
            $(this).css("background-color", "#ffb362");
            $("#mess_js").find("div").not(this).css("background-color", "#e0e0e0");
        })

        $("#xxjs").click(function () {
            $(".xxjs").css("display","block");
            $("#main").find("div").not(".xxjs").css("display","none")
        })

        $("#sylc").click(function () {
            $(".sylc").css("display", "block");
            $("#main").find("div").not(".sylc").css("display", "none")
        })
        $("#zysx").click(function () {
            $(".zysx").css("display", "block");
            $("#main").find("div").not(".zysx").css("display", "none")
        })

    })