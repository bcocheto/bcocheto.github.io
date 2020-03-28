function joinEvent(path,evt) {
	ls.ajax(path+'/join/'+evt,{},function(data){	
		ls.msg.notice(data.message);
		$('#event_stats_block_'+evt).text(data.total);
		$('#join_btn_'+evt).addClass('button-hidden');
		$('#unjoin_btn_'+evt).removeClass('button-hidden');
		var user = ls.event_topic['id'];
		if(user){
			$('.event_joined_users').append('<li id="event_'+evt+'_user_'+user+'">'+
					'<a href="'+ls.event_topic['webpath']+'">'+
						'<img src="'+ls.event_topic['avatar']+'" alt="'+ls.event_topic['login']+'" />'+
					'</a></li>');
		};
	});	
}
function unjoinEvent(path,evt) {
	ls.ajax(path+'/unjoin/'+evt,{},function(data){	
		ls.msg.notice(data.message);
		$('#event_stats_block_'+evt).text(data.total);
		$('#unjoin_btn_'+evt).addClass('button-hidden');
		$('#join_btn_'+evt).removeClass('button-hidden');
		var user = ls.event_topic['id'];
		if(user){
			$('#event_'+evt+'_user_'+user).remove();
		}
	});	
}
