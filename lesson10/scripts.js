$(document).ready(function(){
	$('#sendGet').bind('click', function(){
		if($('#userAgeGet').val()<0||$('#userAgeGet').val()>100){
			alert('Sorry, wrong input of your age');
			$('#userAgeGet').focus();
		}else if(isNaN($('#userAgeGet').val())){
			alert('Sorry, wrong input of your age');
			$('#userAgeGet').focus();
		}else{
			var userData = {
					userLastName : $('#userLastNameGet').val(),
					userName : $('#userNameGet').val(),
					userAge : $('#userAgeGet').val(),
					userAddress : $('#userAddressGet').val()
				};
	$.ajax({
		type:'GET',
		contentType: 'application/json',
		url: '/userGet?userLastName=' + userData.userLastName + '&userName=' + userData.userName + '&userAge=' + userData.userAge
		+'&userAddress=' + userData.userAddress ,
		success: function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
			alert(JSON.stringify(data));
		}
	});	}
	});
	
	$('#sendPost').bind('click', function(){
		if($('#userAgePost').val()<0||$('#userAgePost').val()>100){
			alert('Sorry, wrong input of your age');
			$('#userAgePost').focus();
		}else if(isNaN($('#userAgePost').val())){
			alert('Sorry, wrong input of your age');
			$('#userAgePost').focus();
		}else{
			var userData = {
					userLastName : $('#userLastNamePost').val(),
					userName : $('#userNamePost').val(),
					userAge : $('#userAgePost').val(),
					userAddress : $('#userAddressPost').val()
				};
	$.ajax({
		type:'POST',
		data: JSON.stringify(userData),
		contentType: 'application/json',
		url: '/userPost' ,
		success: function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
			alert(JSON.stringify(data));
		}
	});	}
	});
})	
