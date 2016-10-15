$("#ws-explore").html('<div class="row"><div class="col-md-12"><h2>Payslip</h2><p>Select month to view payslip.</p></div></div><div class="row"><div class="col-md-12"><div class="col-md-12 bottom-20"><input id="ws-ui-113762" placeholder="Select Month" /><p>&nbsp;</p><div id="ws-ui-113762-1" class="bottom-20"></div></div></div></div>');

var userPayslipAccess = "&usersl="+window.authUser[0].sl;
//if(typeof window.authUser[0]["navigation"][3] != 'undefined') if(window.authUser[0]["navigation"][3] != '') userPayslipAccess = "";
if(window.authUser[0].Role == 'Power') userPayslipAccess = "";

$("#ws-ui-113762").kendoDatePicker({
		start: "year",
		depth: "year",
		format: "MM/yyyy",
		change: function(e){
			window.wsd = this.value();
			udate = this.value();
			udate = udate.getFullYear()+"-"+_ws_get_by_zero(udate.getMonth()+1);

			$("#ws-ui-113762-1").kendoGrid({
				dataSource: {
					type: "jsonp",
					transport: {
						read: {
							url: "https://script.google.com/macros/s/AKfycbwMsAqWmQCYz2fNZ12W4m9c4c-EiFscQrbV1jdkXdROVctenaw/exec?type=grid&rl="+window.authUser[0].Role+userPayslipAccess+"&month="+udate
						}
					},
					schema: { model: { id: "sl", fields: {
					Month: { type: "string" }, 
					UserName: { type: "string" }, 
					Salary: { type: "number" },
					Status: { type: "string" },
					Addition: { type: "number" },					
					Deduction: { type: "number" },
					Net: { type: "number" }
					
					}}},
					aggregate: [{ field: "Net", aggregate: "sum" },{ field: "Salary", aggregate: "sum" }, { field: "UserName", aggregate: "count" }, { field: "Addition", aggregate: "sum" }, { field: "Deduction", aggregate: "sum" }, { field: "Perday", aggregate: "sum" }, { field: "CL", aggregate: "sum" }, { field: "NPL", aggregate: "sum" },{ field: "NPLamount", aggregate: "sum" }, { field: "LateNPL", aggregate: "sum" },{ field: "LateNPLamount", aggregate: "sum" }, { field: "EmergencyLeave", aggregate: "sum" }, { field: "EmergencyLeaveAmount", aggregate: "sum" }, { field: "SundayDeduct", aggregate: "sum" }, { field: "SundayDeductAmount", aggregate: "sum" }, { field: "AttendanceIncentiveAmount", aggregate: "sum" }, { field: "JobIncentiveAmount", aggregate: "sum" }, { field: "TAperSal", aggregate: "sum" }, { field: "TAperNet", aggregate: "sum" }],
					scrollable: {
						virtual: true
					},
					sort: { field: "DateTime", dir: "desc" }
				},
				filterable: true, refresh: true, sortable: true, height: 500, 
				columns: [
					{field:"Month", title: "Month", width: 110},
					{field:"UserName", title: "Name", width: 180, aggregates: ["count"], footerTemplate: "Count : #=count#"},
					{field:"Salary", title: "Salary", width: 130, aggregates: ["sum"], footerTemplate: "Total : #=sum#"},
					{field:"Status", title: "Status", width: 150},
					{command: {text: "View", click: ws_ui_113762_btn1}, title: " ", width: "100px"},					
					{field:"Addition", title: "Addition", width: 110, aggregates: ["sum"], footerTemplate: "T.Add : #=sum#"},
					{field:"Deduction", title: "Deduction", width: 110, aggregates: ["sum"], footerTemplate: "T.Ded : #=sum#"},
					{field:"Net", title: "Net Payment", width: 130, aggregates: ["sum"], footerTemplate: "Total : #=sum#"}
				] 
			});
		}
	});
	
	function ws_ui_113762_btn1(e){
		e.preventDefault();	
		var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
		
		var currentDataPayslip = [];
		currentDataPayslip.push(dataItem.UserID);
		currentDataPayslip.push(dataItem.UserName);
		currentDataPayslip.push(dataItem.Month);
		currentDataPayslip.push(dataItem.Salary);
		currentDataPayslip.push(dataItem.Addition);
		currentDataPayslip.push(dataItem.Deduction);
		currentDataPayslip.push(dataItem.Net);
		currentDataPayslip = btoa(currentDataPayslip.join("~"));
		window.location = "applications/payslip/view/#"+currentDataPayslip;
	}
	
_url('Payslip', '#Payslip/all');
	
function _ws_get_by_zero(v){ return (v < 10) ? '0' + v : v; }
