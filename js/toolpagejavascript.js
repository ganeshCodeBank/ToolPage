$(document).ready(function(){

  $("#dash-Id").addClass("active");
  $("#all-mch").addClass("machine-active");

  $("#report-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").show();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".run-report").hide();
    $(".linkview").hide();
    $(".impactView").hide();
    $(".machineView").hide();
    $("#dash-Id").removeClass("active");
    $("#review-Id").removeClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").addClass("active");    
 });
  //
$("#dash-Id").click(function(){
    $(".dashview").show();
    $(".reportView").hide();
    $(".codeReview").hide(); 
    $(".testCode").hide();
    $(".run-report").hide();
    $(".linkview").hide();
    $(".machineView").hide();
    $(".impactView").hide();
    $("#dash-Id").addClass("active");
    $("#review-Id").removeClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").removeClass("active");   
  
 });

$("#review-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").show();
    $(".testCode").hide();
    $(".run-report").hide();
    $(".linkview").hide();
    $(".machineView").hide();
    $(".impactView").hide();
    $("#dash-Id").removeClass("active");
    $("#review-Id").addClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").removeClass("active");   

 });

  $("#run-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".run-report").show();
    $(".linkview").hide();
    $(".machineView").hide();
    $(".impactView").hide();
    $("#dash-Id").removeClass("active"); 
    $("#review-Id").removeClass("active");
    $("#run-Id").addClass("active");
    $("#report-Id").removeClass("active");

 });

   $("#link-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".linkview").show();
    $(".run-report").hide();
    $(".machineView").hide();
    $(".impactView").hide();
    $("#dash-Id").removeClass("active");
    $("#review-Id").removeClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").removeClass("active");

 });
    $("#machine-Id").click(function(){
    $(".machineView").show();
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".linkview").hide();
    $(".run-report").hide();
    $(".impactView").hide();
    $("#dash-Id").removeClass("active");
    $("#review-Id").removeClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").removeClass("active");
 });

    $("#impact-Id").click(function(){
    $(".machineView").hide();
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".linkview").hide();
    $(".run-report").hide();
    $(".impactView").show();
    $("#dash-Id").removeClass("active");
    $("#review-Id").removeClass("active");
    $("#run-Id").removeClass("active");
    $("#report-Id").removeClass("active");
 });

   $("#run-btn").click(function(){
    $(".testCode").hide();
    $(".run-report").show();
  });

   $("#new-run").click(function(){
    $(".testCode").show();
    $(".run-report").hide();
  });

   $("#full-view-Id").click(function(){
    $(".toolmenu").hide(500);
    $(".expand").show();
    $(".full-view").hide();
    $(".viewBody").css("margin-left","50px");
  });

   $("#expand_Id").click(function(){
    $(".toolmenu").show(500);
    $(".expand").hide();
    $(".full-view").show();
    $(".viewBody").css("margin-left","0px");
  });

  $("#new-build").click(function(){
    $(".build-report").hide();
    $(".codeBox").show();
  });

  $("#buil-btn-id").click(function(){
     $(".codeBox").hide();
    $(".build-report").show();
   
  });

  $("#imp-sub-btn").click(function(){
     $(".add-impact").hide();
    $(".impact-Body").show();
   
  });

  $("#imp-add").click(function(){
     $(".impact-Body").hide();
    $(".add-impact").show();
   
  });
   //imp-add

  $('#logo-Id').click(function() {
    location.reload();
  });

  $("#all-mch").click(function(){
    $(".all-machine").show();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").addClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active");  
   
  });

   $("#inc-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").show();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").addClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

  $("#exc-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").show();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").addClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

  $("#add-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").show();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").addClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

   $("#rem-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").show();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").addClass("machine-active"); 
   
  });

   /*$("#link-Id").click(function(){
    $.ajax({url: "file://D:/Toolpages/pages/link.html", success: function(result){
        $(".viewBody").html(result);
    }});
});*/
 //alert(123);
    //$("viewBody").load("ajax/link.html");

 });

