// JavaScript Document

//按钮

    	
    //按钮
  function showlist() {
        $("#imgright").attr("src", "jfsc_images/icon_btnuprad.png");
        $("#btnright").removeClass("clsShow");
        $("#btnShowRight").hide();
        $("#btnLeft").addClass("clsShow");
        $("#imgleft").attr({ src: "jfsc_images/icon_btndowngreen.png" });
        $("#btnShowLeft").show();
        $("#btnLeft").unbind("click");
        $("#btnLeft").bind({click:hidelistLeft});
        $("#btnright").unbind("click");
        $("#btnright").bind({click:showListRight});
    }
     function hidelist() {
        $("#imgleft").attr("src", "jfsc_images/icon_btnupgreen.png");
        $("#btnLeft").removeClass("clsShow");
        $("#btnShowLeft").hide();
        $("#imgright").attr("src", "jfsc_images/icon_btnuprad.png");
        $("#btnright").removeClass("clsShow");
        $("#btnShowRight").hide();
    }

    function showListRight() {
        $("#imgleft").attr("src", "jfsc_images/icon_btnupgreen.png");
        $("#btnLeft").removeClass("clsShow");
        $("#btnShowLeft").hide();
        $("#btnright").addClass("clsShow");
        $("#imgright").attr("src", "jfsc_images/icon_btndownrad.png");
		
        $("#btnShowRight").show();
		
        $("#btnright").unbind("click");
		
        $("#btnright").bind({click:hidelistRight});
        $("#btnLeft").unbind("click");
        $("#btnLeft").bind({click:showlist});
    }

    function hidelistLeft() {
        hidelist();
        $("#btnLeft").unbind("click");
        $("#btnLeft").bind({click:showlist});
    }
    function hidelistRight() {
        hidelist();
        $("#btnright").unbind("click");
        $("#btnright").bind({click:showListRight});
    }