$("#ws-explore").html('<div class="row"><div class="col-md-12"><h2>Report External A</h2><p>Report (customized) with external activity and marked as A.</p><p>Note: Contains business report, please make sure that the Project databse is not in use!</p><p>Example: <a href="#" onclick="example1(this.innerHTML)">Debmalya,Souvik,Sneha,Akanksha,Shaonti,Arka,Sudeshna</a> etc. Please provide values using coma without space.</p></div></div><div class="row"><div class="col-md-12"><div id="ws-ui-112345"><form method="post" onsubmit="return wsPageForm_112346_01();"><ul class="fieldlist"><li><label for="u_Query">User Name Search</label><input id="u_Query" type="text" class="k-textbox" style="width: 50%;" required /></li><li><label for="u_Month">Month</label><input id="u_Month" style="width: 50%;" required /></li><li id="u_Msg"></li><li><button id="ws-112345-01" type="submit" class="k-button k-primary">Finish</button></li></ul></form><style>.fieldlist {margin: 10px 0; padding: 0;} .fieldlist li {list-style: none;} .fieldlist label {display: block; padding-bottom: 5px; font-weight: bold; text-transform: uppercase; font-size: 12px; color: #444;}</style></div></div></div>');

function wsPageForm_112346_01(){
	_wsProgress(80);
	
	var uqs = $("#u_Query").val();
	uqs = uqs.split(",");
	try{		
		uqs = JSON.stringify(uqs);
		
		$.getJSON('https://script.google.com/macros/s/AKfycbyBeaAyqxk2iphU72PsWmmHein8fwd17s5a0EKPhXiYVNYpM88/exec?type=report-ext-a&month='+$("#u_Month").val()+'&values='+uqs).done(function(result){
			_wsProgress(100);
			if(result){
				_msg('Success: Report generated');
			}else{
				_msg('Sorry! Unable to process your request');
			}
		}).fail(function(result){
			_msg('Error: Connection problem'); _wsProgress(100);
		});
	}catch(e){
		_msg('Error: Please check your input');
	}
	
	return false;
}

function example1(v){
	$("#u_Query").val(v);
}
	
	$("#u_Month").kendoDatePicker({
		start: "year",
		depth: "year",
		format: "yyyy-MM"
	});

_url('Report External A', '#Report/ext-a');