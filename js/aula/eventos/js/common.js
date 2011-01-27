jQuery(function(){
    /*
    $("#acao").click(function(){
        $("p").slideUp("slow");
        // $(this) elemento que foi clickado
        $(this).css("backgroundColor", "red");
    });
    */

    /*
    $("#acao").toggle(
      function(){
        $("p").slideUp("slow");
      },
      function(){
        $("p").slideDown("slow");
      },
      function(){
        $(this).css("backgroundColor", "red");
      }
    );
    */

    /*
    $("#acao").click(function(){
        $("p").hide(2000,
          function(){
          $(this).after("<span>Escondido</span>");
        });
    });
    */

    $("#acao").click(function(){
      var clone = $("p:last").clone();
      $(this).after(clone);
      $(this).after(clone);
      clone.css("backgroundColor", "blue");
    });

    $("p").live("click", function(){
      alert("Detectei click");
    })

});
