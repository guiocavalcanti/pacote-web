jQuery(function(){
  $("#uma-vez").click(function(){
    $("div").hide();
  });

  $("#uma-vez-efeito").click(function(){
    $("div").slideUp();
  });

  $("#dobrar").click(function(){
    var clonados = $("div").clone();
    clonados.addClass("clonado");

    $("div:last").after(clonados);
  });

  $("#resetar").click(function(){
    $(".clonado").remove();
    $("div").show();
  });

  $("div").live("click", function(){
      console.log("teste");
      if($(this).is(":not(.clonado)")){
        var clone = $(this).clone();
        clone.html("clone").addClass("clonado");
        $(this).after(clone);
      }
  });

  /*
  $("div").live("click", function(){
      var clone = $(this).next().clone();
      clone.html("clone").addClass("clonado");
      $(this).next().after(clone);
  });
  */
});
