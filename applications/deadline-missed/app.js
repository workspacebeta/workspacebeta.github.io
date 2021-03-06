$("#ws-explore").html('<div class="row"><div class="col-md-12"><h2>Missed Deadline</h2><p>Check your project with missed deadline from here. 1st table for Customer Deadline and 2nd table for Admin Deadline.</p></div></div><div class="row"><div class="col-md-12"><div id="ws-ui-112345"><div class="col-md-12 bottom-20"><input id="ws-ui-113762" placeholder="Select Date" /><p>&nbsp;</p><div id="ws-ui-113762-1" class="bottom-20"></div><div id="ws-ui-113762-2" class="bottom-20"></div><div id="ws-ui-113762-2" class="bottom-20"></div></div></div></div></div>');

	$("#ws-ui-113762").kendoDatePicker({
		start: "date",
		depth: "year",
		format: "dd/MM/yyyy",
		change: function(e){
			window.wsd = this.value();
			udate = this.value();
			udate1 = udate.getFullYear()+"-"+_ws_get_by_zero(udate.getMonth()+1)+"-"+_ws_get_by_zero(udate.getDate());
			udate2 = _ws_get_by_zero(udate.getDate())+"/"+_ws_get_by_zero(udate.getMonth()+1)+"/"+udate.getFullYear();
			
			$("#ws-ui-113762-1").kendoGrid({
				dataSource: {
					type: "jsonp",
					transport: {
						read: {
							url: "https://script.google.com/macros/s/AKfycbzVkMNMk7TfEm5m_jj0mFD3P0s4Thx4Gbk27jVS9PwxGvzi02uW/exec?type=deadline-missed&rl="+window.authUser[0].Role+"&comp=cd&date="+udate1
						}
					},
					/*schema: { model: { id: "sl", fields: {
						UserName: { type: "string" }, 
						ID: { type: "string" }, 
						Status: { type: "string" }, 
						Description: { type: "string" }, 
						DateTime: { type: "date" }, 
						UOW: { type: "number" }
					}}},*/
					aggregate: [{ field: "ID", aggregate: "count" }, { field: "UOW", aggregate: "sum" }],
					scrollable: {
						virtual: true
					}
				}, 
				filterable: true, refresh: true, sortable: true, height: 450, selectable: "single", 
				columns: [
					{ field: "UserName", title: "Name", width: 200 },
					{ field: "ID", title: "Project", width: 150, aggregates: ["count"], footerTemplate: "Count: #=count#" },
					{ field: "Status", title: "Status", width: 100 },
					{ field: "Tag", title: "Your ID", width: 200 },
					{ field: "Description", title: "Category", width: 150 },
					{ field: "DateTime", title: "Deadline", width: 210, template: '#: kendo.format("{0:d}", DateTime)#' },
					{ field: "End", title: "End", width: 210, template: '#: kendo.format("{0:d}", End)#' },
					{ field: "UOW", title: "Words", width: 180, aggregates: ["sum"], footerTemplate: "Allocated: #=sum#" }
				] 
			});
			
			$("#ws-ui-113762-2").kendoGrid({
				dataSource: {
					type: "jsonp",
					transport: {
						read: {
							url: "https://script.google.com/macros/s/AKfycbzVkMNMk7TfEm5m_jj0mFD3P0s4Thx4Gbk27jVS9PwxGvzi02uW/exec?type=deadline-missed&rl="+window.authUser[0].Role+"&comp=ad&date="+udate2
						}
					},
					/*schema: { model: { id: "sl", fields: {
						UserName: { type: "string" }, 
						ID: { type: "string" }, 
						Status: { type: "string" }, 
						Description: { type: "string" }, 
						DateTime: { type: "date" }, 
						UOW: { type: "number" }
					}}},*/
					aggregate: [{ field: "ID", aggregate: "count" }, { field: "UOW", aggregate: "sum" }],
					scrollable: {
						virtual: true
					}
				}, 
				filterable: true, refresh: true, sortable: true, height: 450, selectable: "single", 
				columns: [
					{ field: "UserName", title: "Name", width: 200 },
					{ field: "ID", title: "Project", width: 150, aggregates: ["count"], footerTemplate: "Count: #=count#" },
					{ field: "Status", title: "Status", width: 100 },
					{ field: "Tag", title: "Your ID", width: 200 },
					{ field: "Description", title: "Category", width: 150 },
					{ field: "DateTime", title: "Deadline", width: 210, template: '#: kendo.format("{0:d}", DateTime)#' },
					{ field: "End", title: "End", width: 210, template: '#: kendo.format("{0:d}", End)#' },
					{ field: "UOW", title: "Words", width: 180, aggregates: ["sum"], footerTemplate: "Allocated: #=sum#" }
				] 
			});
			
		}
	});

	
function _ws_get_by_zero(v){ return (v < 10) ? '0' + v : v; }
