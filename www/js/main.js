$(document).ready(function(){
    if(localStorage.userId && localStorage.userName){
        console.log(localStorage);
        /*$.ajax({
			type: "POST",
			url: server+"/service/getname/",
			data: "name="+$('#name').val(),
			success: function(msg){
                if(msg){
                    //name
                }
			}
		});*/
        
        $('#namePostForm').hide();
        $('#userName').text(localStorage.userName).show();
    }
	$('#nameCreate').click(function(){
		var obj=$(this);
        if(jQuery.trim($('#name').val())!=''){
            $.ajax({
                type: "POST",
                url: server+"/service/create/",
                data: "name="+$('#name').val(),
                success: function(msg){
                    localStorage.userId=msg;
                    localStorage.userName=$('#name').val(),
                    document.location.href='list.html';
                }
            });
        }
	});
    $('#clearme').click(function(){
        localStorage.clear();
    });
});