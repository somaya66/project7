$(document).ready(function(){

    $("#btn1").click(function(){
        $("#content1").hide(1000).show(1000);

    })

    $("#btn2").click(function(){
$("body").css("background-color","black");
    })

    $("#btn3").click(function(){
        $("#content2").css("color","pink");
            })

            $("#btn4").click(function(){
                $("#content3").toggle(1000);
        
            })

            $("#btn5").click(function(){
                $("html,body").animate({scrollTop:0},600);
        
            })

            $("#myform").submit(function(event){

                var isvalid=true;
                $(".error").hide();

              if($("#name").val().trim()===''){
                $("#name-error").show();
                isvalid=false;
              }

              if($("#email").val().trim()===''){
                $("#email-error").show();
                isvalid=false;

              }

              if($("#age").val().trim()===''){
                $("#age-error").show();
                isvalid=false;

              }

              if($("#gender").val().trim()===''){
                $("#gender-error").show();
                isvalid=false;

              }
              if(!isvalid){
                event.preventDefault();
              }
              else{
                alert('all data send.')
              }
        
            });

           

});