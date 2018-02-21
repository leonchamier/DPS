/* MESSAGE BOX IMPLEMENTATION
  USAGE
  $('#btnDelete').on('click', function(e){
    		confirmDialog("Delete Request","Are you sure?", function(){
    			//My code to delete
				doDelete();
    		});
    	});
*/
function confirmDialog(header, message, callback) {

	if (!$('#DivID').length) {
		createConfirmBox();
	}

	var modal = $("#confirmModal");
	modal.modal("show");
	$("#confirmMessage").empty().append(message);
	$("#confirmHeader").empty().append(header);
	$('#confirmYes').off().click(function () {
		modal.modal('hide');
		callback(true);
	});
	$('#confirmNo').off().click(function () {
		modal.modal('hide');
		callback(false);
	});

}



function createConfirmBox() {
	var el = document.createElement('div');
	var domString = '<div id="confirmModal" class="modal fade" role="dialog " data-backdrop="static" data-keyboard="false">  ';
	domString += ' <div class="modal-dialog modal-sm">';
	domString += ' <div class="modal-content">';
	domString += '      <div class="modal-header" >';
	domString += '         <h4 class="modal-title" id="confirmHeader">Modal Header</h4>';
	domString += '      </div>';
	domString += '  <div class="modal-body" id="confirmMessage">';
	domString += '   </div>';
	domString += '   <div class="modal-footer">';
	domString += '      <button type="button" data-dismiss="modal" class="btn btn-primary" id="confirmYes">Yes</button>';
	domString += '      <button type="button" data-dismiss="modal" class="btn" id="confirmNo">Close</button>';
	domString += '   </div>';
	domString += ' </div>'
	domString += '</div>';
	domString += '</div>';

	el.innerHTML = domString;
	document.body.appendChild(el.firstChild);
}

function splitCamelCase(word) {
    var output, i, l, capRe = /[A-Z]/, underscore = new RegExp("_");
    if (typeof(word) !== "string") {
        throw new Error("The \"word\" parameter must be a string.");
    }
    output = [];
    for (i = 0, l = word.length; i < l; i += 1) {
        if (i === 0) {
            output.push(word[i].toUpperCase());
        }
        else {
            if (i > 0 && (capRe.test(word[i]) || underscore.test(word[i]))) {
                output.push(" ");
				if ( underscore.test(word[i])) continue;
            }
			if ( word[i-1]=='_') {
              output.push(word[i].toUpperCase());
            }else{
              output.push(word[i]);
			}
        }
    }
    return output.join("");
}

function viewSource() {
	
	 try {
	
	  if (!document.getElementById('divsource')) {
		var htmltxt="";
		htmltxt='<div id="divsource" class="window" style="display:xnone; top:50; left:20; z-index:100000">';
		htmltxt=htmltxt+'<div class="titleBar">View Source</div>'
		htmltxt=htmltxt+'<img SRC="../image/closewin_icon.gif"  alt="close"  class="ximage" onClick="hideElement(divsrc); clearSourceTxt()"> </img>';
	//  htmltxt=htmltxt+'<form name="source">';
		htmltxt=htmltxt+'<textarea id=sourcetxt readonly cols=120 rows=40 wrap=virtual style="font-family:garmond"></textarea>';
		htmltxt=htmltxt+'<br>';
		htmltxt=htmltxt+'<BUTTON onclick="hideElement(divsrc); clearSourceTxt()">Close</button>';
	//  htmltxt=htmltxt+'</form>';
		htmltxt=htmltxt+'</div>';
		var divform=document.createElement('div');
			divform.innerHTML=htmltxt;
			document.getElementsByTagName('body')[0].appendChild(divform);
	  //    workarea.appendChild(divform);
	  }
	
	  var txt=unescape(document.body.innerHTML);
	   // txt=url.replace(/&gt/g, ">");
	   // txt=url.replace(/&lt/g, "<");
	   document.getElementById('sourcetxt').innerHTML=txt;
	   var obj =document.getElementById('divsource');
	   
	
	 } catch (e) {alert(e.message)}
	
	}