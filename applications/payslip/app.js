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
					Perday: { type: "string" },
					Calaner_Days: { type: "string" },
					Total_Working_Days: { type: "string" },
					1st: { type: "string" },
					1st_Amount: { type: "string" },
					2nd: { type: "string" },
					2nd_Amount: { type: "string" },
					3rd: { type: "string" },
					3rd_Amount: { type: "string" },
					4th: { type: "string" },
					4th_Amount: { type: "string" },
					5th: { type: "string" },
					5th_Amount: { type: "string" },
					6th: { type: "string" },
					6th_Amount: { type: "string" },
					7th: { type: "string" },
					7th_Amount: { type: "string" },
					8th: { type: "string" },
					8th_Amount: { type: "string" },
					9th: { type: "string" },
					9th_Amount: { type: "string" },
					10th: { type: "string" },
					10th_Amount: { type: "string" },
					11th: { type: "string" },
					11th_Amount: { type: "string" },
					12th: { type: "string" },
					12th_Amount: { type: "string" },
					13th: { type: "string" },
					13th_Amount: { type: "string" },
					14th: { type: "string" },
					14th_Amount: { type: "string" },
					15th: { type: "string" },
					15th_Amount: { type: "string" },
					16th: { type: "string" },
					16th_Amount: { type: "string" },
					17th: { type: "string" },
					17th_Amount: { type: "string" },
					18th: { type: "string" },
					18th_Amount: { type: "string" },
					19th: { type: "string" },
					19th_Amount: { type: "string" },
					20th: { type: "string" },
					20th_Amount: { type: "string" },
					21st: { type: "string" },
					21st_Amount: { type: "string" },
					22nd: { type: "string" },
					22nd_Amount: { type: "string" },
					23rd: { type: "string" },
					23rd_Amount: { type: "string" },
					24th: { type: "string" },
					24th_Amount: { type: "string" },
					25th: { type: "string" },
					25th_Amount: { type: "string" },
					26th: { type: "string" },
					26th_Amount: { type: "string" },
					27th: { type: "string" },
					27th_Amount: { type: "string" },
					28th: { type: "string" },
					28th_Amount: { type: "string" },
					29th: { type: "string" },
					29th_Amount: { type: "string" },
					30th: { type: "string" },
					30th_Amount: { type: "string" },
					31st: { type: "string" },
					31st_Amount: { type: "string" },
					Addition: { type: "number" },
					AdditionReason: { type: "string" },
					Deduction: { type: "number" },
					DeductionReason: { type: "string" },
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
					{field:"Perday", title: "Perday", width: 150},
					{field:"Calaner_Days", title: "Calaner Days", width: 150},
					{field:"Total_Working_Days", title: "Total Working Days", width: 150},
					{field:"1st", title: "1st Day", width: 150},
					{field:"1st_Amount", title: "1st Day Amount", width: 150},
					{field:"2nd", title: "2nd Day", width: 150},
					{field:"2nd_Amount", title: "2nd Day Amount", width: 150},
					{field:"3rd", title: "3rd Day", width: 150},
					{field:"3rd_Amount", title: "3rd Day Amount", width: 150},
					{field:"4th", title: "4th Day", width: 150},
					{field:"4th_Amount", title: "4th Day Amount", width: 150},
					{field:"5th", title: "5th Day", width: 150},
					{field:"5th_Amount", title: "5th Day Amount", width: 150},
					{field:"6th", title: "6th Day", width: 150},
					{field:"6th_Amount", title: "6th Day Amount", width: 150},
					{field:"7th", title: "7th Day", width: 150},
					{field:"7th_Amount", title: "7th Day Amount", width: 150},
					{field:"8th", title: "8th Day", width: 150},
					{field:"8th_Amount", title: "8th Day Amount", width: 150},
					{field:"9th", title: "9th Day", width: 150},
					{field:"9th_Amount", title: "9th Day Amount", width: 150},
					{field:"10th", title: "10th Day", width: 150},
					{field:"10th_Amount", title: "10th Day Amount", width: 150},
					{field:"11th", title: "11th Day", width: 150},
					{field:"11th_Amount", title: "11th Day Amount", width: 150},
					{field:"12th", title: "12th Day", width: 150},
					{field:"12th_Amount", title: "12th Day Amount", width: 150},
					{field:"13th", title: "13th Day", width: 150},
					{field:"13th_Amount", title: "13th Day Amount", width: 150},
					{field:"14th", title: "14th Day", width: 150},
					{field:"14th_Amount", title: "14th Day Amount", width: 150},
					{field:"15th", title: "15th Day", width: 150},
					{field:"15th_Amount", title: "15th Day Amount", width: 150},
					{field:"16th", title: "16th Day", width: 150},
					{field:"16th_Amount", title: "16th Day Amount", width: 150},
					{field:"17th", title: "17th Day", width: 150},
					{field:"17th_Amount", title: "17th Day Amount", width: 150},
					{field:"18th", title: "18th Day", width: 150},
					{field:"18th_Amount", title: "18th Day Amount", width: 150},
					{field:"19th", title: "19th Day", width: 150},
					{field:"19th_Amount", title: "19th Day Amount", width: 150},
					{field:"20th", title: "20th Day", width: 150},
					{field:"20th_Amount", title: "20th Day Amount", width: 150},
					{field:"21st", title: "21st Day", width: 150},
					{field:"21st_Amount", title: "21st Day Amount", width: 150},
					{field:"22nd", title: "22nd Day", width: 150},
					{field:"22nd_Amount", title: "22nd Day Amount", width: 150},
					{field:"23rd", title: "23rd Day", width: 150},
					{field:"23rd_Amount", title: "23rd Day Amount", width: 150},
					{field:"24th", title: "24th Day", width: 150},
					{field:"24th_Amount", title: "24th Day Amount", width: 150},
					{field:"25th", title: "25th Day", width: 150},
					{field:"25th_Amount", title: "25th Day Amount", width: 150},
					{field:"26th", title: "26th Day", width: 150},
					{field:"26th_Amount", title: "26th Day Amount", width: 150},
					{field:"27th", title: "27th Day", width: 150},
					{field:"27th_Amount", title: "27th Day Amount", width: 150},
					{field:"28th", title: "28th Day", width: 150},
					{field:"28th_Amount", title: "28th Day Amount", width: 150},
					{field:"29th", title: "29th Day", width: 150},
					{field:"29th_Amount", title: "29th Day Amount", width: 150},
					{field:"30th", title: "30th Day", width: 150},
					{field:"30th_Amount", title: "30th Day Amount", width: 150},
					{field:"31st", title: "31st Day", width: 150},
					{field:"31st_Amount", title: "31st Day Amount", width: 150},
					{field:"Addition", title: "Addition", width: 110, aggregates: ["sum"], footerTemplate: "T.Add : #=sum#"},
					{field:"AdditionReason", title: "Addition Reason", width: 200},
					{field:"Deduction", title: "Deduction", width: 110, aggregates: ["sum"], footerTemplate: "T.Ded : #=sum#"},
					{field:"DeductionReason", title: "DeductionReason", width: 200},
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
