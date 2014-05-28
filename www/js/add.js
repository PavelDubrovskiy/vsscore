$(document).ready(function(){
	$('#battleCreate').click(function(){
		var obj=$(this);
		$.ajax({
			type: "POST",
			url: server+"/service/add/",
			data: "battleName="+$('#battleName').val()+"&opponentName="+$('#opponentName').val()+"&id="+localStorage.userId,
			success: function(msg){
                localStorage.lastCode=msg;
				document.location.href='done.html';
			}
		});
	});
});