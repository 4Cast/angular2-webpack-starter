
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      // if (!f.type.match('image.*')) {
      //   continue;
      // }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {

          debugger;
          // Render thumbnail.
          // var span = document.createElement('span');
          // span.innerHTML = ['<img class="thumb" src="', e.target.result,
          //                   '" title="', escape(theFile.name), '"/>'].join('');
          // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsText(f);
      var xmlText = reader.result;
      var parser=new DOMParser();
      var xmlDoc=parser.parseFromString(reader.result,"text/xml");
      debugger;
      var Ledger:Element = xmlDoc.getElementsByTagName("Ledger")[0];
      var numLines = Ledger.childElementCount;


      var i:number = 0;
      var line:Element = Ledger.firstElementChild;
      while (i < numLines)
      {


          var accountCode = line.getElementsByTagName("AccountCode")[0].childNodes[0].nodeValue;
          var accountingPeriod = line.getElementsByTagName("AccountingPeriod")[0].childNodes[0].nodeValue;
          var projectNumber = line.getElementsByTagName("AnalysisCode4")[0].childNodes[0].nodeValue;
          var costCodeNumber = line.getElementsByTagName("AnalysisCode5")[0].childNodes[0].nodeValue;
          var employeeNode = line.getElementsByTagName("AnalysisCode6");
          if(employeeNode.length>0){
            var employeeNumber = employeeNode[0].childNodes[0].nodeValue;
          }
          var supplierNode = line.getElementsByTagName("AnalysisCode7");
          if(supplierNode.length>0){
            var supplierCode = line.getElementsByTagName("AnalysisCode7")[0].childNodes[0].nodeValue;
          }

          var baseAmountStr = line.getElementsByTagName("BaseAmount")[0].childNodes[0].nodeValue;
          var debitCredit = line.getElementsByTagName("DebitCredit")[0].childNodes[0].nodeValue;
          var description = line.getElementsByTagName("Description")[0].childNodes[0].nodeValue;
          var tDateString = line.getElementsByTagName("TransactionDate")[0].childNodes[0].nodeValue;
          var transactionReference = line.getElementsByTagName("TransactionReference")[0].childNodes[0].nodeValue;
          var journalNumber = line.getElementsByTagName("JournalNumber")[0].childNodes[0].nodeValue;
          var journalLineNumber = line.getElementsByTagName("JournalLineNumber")[0].childNodes[0].nodeValue;

          var baseAmount:number = Number (baseAmountStr);

          baseAmount = baseAmount*-1;

          i++;
          line = Ledger.nextElementSibling;
      }
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
