jQuery(function(){
    $("#aumentar").click(function(){
        $("div").animate(
          { "top" : "+=100px",
            "opacity" : 0.5 },
          { "duration" : 2000,
            "easing" : "swing"}
        )
    });

    $("#diminuir").click(function(){
        $("div").animate(
          { "width" : "100px",
            "height" : "100px",
            "opacity" : 1 },
          { "duration" : 2000,
            "easing" : "swing",
            "queue" : false }
        )
    });


    $("#parar").click(function(){
      $("div").stop();
    })
});
