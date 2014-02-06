$(document).ready(function(){

	$('.trig_movie').click( function(e){
		e.preventDefault();
		var URL = $(this).attr('href');
		var htm = '<iframe width="425" height="349" src="http://www.youtube.com/embed/' + URL + '?autoplay=1;3&amp;autohide=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';

		$('#vid_container').html(htm);

		player.playVideo();
		return false;
	});

});

