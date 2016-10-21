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
					_1st: { type: "string" },
					_1st_Amount: { type: "string" },
					_2nd: { type: "string" },
					_2nd_Amount: { type: "string" },
					_3rd: { type: "string" },
					_3rd_Amount: { type: "string" },
					_4th: { type: "string" },
					_4th_Amount: { type: "string" },
					_5th: { type: "string" },
					_5th_Amount: { type: "string" },
					_6th: { type: "string" },
					_6th_Amount: { type: "string" },
					_7th: { type: "string" },
					_7th_Amount: { type: "string" },
					_8th: { type: "string" },
					_8th_Amount: { type: "string" },
					_9th: { type: "string" },
					_9th_Amount: { type: "string" },
					_10th: { type: "string" },
					_10th_Amount: { type: "string" },
					_11th: { type: "string" },
					_11th_Amount: { type: "string" },
					_12th: { type: "string" },
					_12th_Amount: { type: "string" },
					_13th: { type: "string" },
					_13th_Amount: { type: "string" },
					_14th: { type: "string" },
					_14th_Amount: { type: "string" },
					_15th: { type: "string" },
					_15th_Amount: { type: "string" },
					_16th: { type: "string" },
					_16th_Amount: { type: "string" },
					_17th: { type: "string" },
					_17th_Amount: { type: "string" },
					_18th: { type: "string" },
					_18th_Amount: { type: "string" },
					_19th: { type: "string" },
					_19th_Amount: { type: "string" },
					_20th: { type: "string" },
					_20th_Amount: { type: "string" },
					_21st: { type: "string" },
					_21st_Amount: { type: "string" },
					_22nd: { type: "string" },
					_22nd_Amount: { type: "string" },
					_23rd: { type: "string" },
					_23rd_Amount: { type: "string" },
					_24th: { type: "string" },
					_24th_Amount: { type: "string" },
					_25th: { type: "string" },
					_25th_Amount: { type: "string" },
					_26th: { type: "string" },
					_26th_Amount: { type: "string" },
					_27th: { type: "string" },
					_27th_Amount: { type: "string" },
					_28th: { type: "string" },
					_28th_Amount: { type: "string" },
					_29th: { type: "string" },
					_29th_Amount: { type: "string" },
					_30th: { type: "string" },
					_30th_Amount: { type: "string" },
					_31st: { type: "string" },
					_31st_Amount: { type: "string" },
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
					{field:"_1st", title: "1st", width: 150},
					{field:"_1st_Amount", title: "1st_Amount", width: 150},
					{field:"_2nd", title: "2nd", width: 150},
					{field:"_2nd_Amount", title: "2nd_Amount", width: 150},
					{field:"_3rd", title: "3rd", width: 150},
					{field:"_3rd_Amount", title: "3rd_Amount", width: 150},
					{field:"_4th", title: "4th", width: 150},
					{field:"_4th_Amount", title: "4th_Amount", width: 150},
					{field:"_5th", title: "5th", width: 150},
					{field:"_5th_Amount", title: "5th_Amount", width: 150},
					{field:"_6th", title: "6th", width: 150},
					{field:"_6th_Amount", title: "6th_Amount", width: 150},
					{field:"_7th", title: "7th", width: 150},
					{field:"_7th_Amount", title: "7th_Amount", width: 150},
					{field:"_8th", title: "8th", width: 150},
					{field:"_8th_Amount", title: "8th_Amount", width: 150},
					{field:"_9th", title: "9th", width: 150},
					{field:"_9th_Amount", title: "9th_Amount", width: 150},
					{field:"_10th", title: "10th", width: 150},
					{field:"_10th_Amount", title: "10th_Amount", width: 150},
					{field:"_11th", title: "11th", width: 150},
					{field:"_11th_Amount", title: "11th_Amount", width: 150},
					{field:"_12th", title: "12th", width: 150},
					{field:"_12th_Amount", title: "12th_Amount", width: 150},
					{field:"_13th", title: "13th", width: 150},
					{field:"_13th_Amount", title: "13th_Amount", width: 150},
					{field:"_14th", title: "14th", width: 150},
					{field:"_14th_Amount", title: "14th_Amount", width: 150},
					{field:"_15th", title: "15th", width: 150},
					{field:"_15th_Amount", title: "15th_Amount", width: 150},
					{field:"_16th", title: "16th", width: 150},
					{field:"_16th_Amount", title: "16th_Amount", width: 150},
					{field:"_17th", title: "17th", width: 150},
					{field:"_17th_Amount", title: "17th_Amount", width: 150},
					{field:"_18th", title: "18th", width: 150},
					{field:"_18th_Amount", title: "18th_Amount", width: 150},
					{field:"_19th", title: "19th", width: 150},
					{field:"_19th_Amount", title: "19th_Amount", width: 150},
					{field:"_20th", title: "20th", width: 150},
					{field:"_20th_Amount", title: "20th_Amount", width: 150},
					{field:"_21st", title: "21st", width: 150},
					{field:"_21st_Amount", title: "21st_Amount", width: 150},
					{field:"_22nd", title: "22nd", width: 150},
					{field:"_22nd_Amount", title: "22nd_Amount", width: 150},
					{field:"_23rd", title: "23rd", width: 150},
					{field:"_23rd_Amount", title: "23rd_Amount", width: 150},
					{field:"_24th", title: "24th", width: 150},
					{field:"_24th_Amount", title: "24th_Amount", width: 150},
					{field:"_25th", title: "25th", width: 150},
					{field:"_25th_Amount", title: "25th_Amount", width: 150},
					{field:"_26th", title: "26th", width: 150},
					{field:"_26th_Amount", title: "26th_Amount", width: 150},
					{field:"_27th", title: "27th", width: 150},
					{field:"_27th_Amount", title: "27th_Amount", width: 150},
					{field:"_28th", title: "28th", width: 150},
					{field:"_28th_Amount", title: "28th_Amount", width: 150},
					{field:"_29th", title: "29th", width: 150},
					{field:"_29th_Amount", title: "29th_Amount", width: 150},
					{field:"_30th", title: "30th", width: 150},
					{field:"_30th_Amount", title: "30th_Amount", width: 150},
					{field:"_31st", title: "31st", width: 150},
					{field:"_31st_Amount", title: "31st_Amount", width: 150},
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
