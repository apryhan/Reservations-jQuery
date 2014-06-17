<script>
$(function () {
        $( "#from" ).datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true
        });
        $( "#to" ).datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true
        });
  });
$(document).ready(function(){
	$("#nationality").change(function(){
		if($("#nationality").val()==""){
			$("span").text("");
		}
		else if($("#nationality").val()=="amer"||$("#nationality").val()=="can"){
				$("span").text("You do not require a passport for this trip");
		}
		else{
			$("span").html("<font color=red>You require a passport for this trip<font>");
			}
	});
	$("input").change(function(){
		var cost=0;
		if($("#SF").prop("checked")||$("#LA").prop("checked")) {
			cost=cost+200;
			}
		if($("#to").val()){
			var start=$("#from").datepicker("getDate");
			var end=$("#to").datepicker("getDate");
			var days=Math.round((end-start)/(24*60*60*1000));
			var price=150*(days+1);
			cost=cost+price;
			}
		if($("#firstClass").prop("checked")) {
			cost=cost+500;
			}
		if($("#spouse").prop("checked")) {
			cost=cost*2;
			}
		$("div").text("Your estimated cost for this trip is: " + "$" + cost);
	});
});
$(document).ready(function(){
	$("#reset").click(function(){
		$("span").empty();
		$("div").empty();
	});
});	
</script>