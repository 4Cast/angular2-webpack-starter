function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                debugger;
            };
        })(f);
        reader.readAsText(f);
        var xmlText = reader.result;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(reader.result, "text/xml");
        debugger;
        var Ledger = xmlDoc.getElementsByTagName("Ledger")[0];
        var numLines = Ledger.childElementCount;
        var i = 0;
        var line = Ledger.firstElementChild;
        while (i < numLines) {
            var accountCode = line.getElementsByTagName("AccountCode")[0].childNodes[0].nodeValue;
            var accountingPeriod = line.getElementsByTagName("AccountingPeriod")[0].childNodes[0].nodeValue;
            var projectNumber = line.getElementsByTagName("AnalysisCode4")[0].childNodes[0].nodeValue;
            var costCodeNumber = line.getElementsByTagName("AnalysisCode5")[0].childNodes[0].nodeValue;
            var employeeNode = line.getElementsByTagName("AnalysisCode6");
            if (employeeNode.length > 0) {
                var employeeNumber = employeeNode[0].childNodes[0].nodeValue;
            }
            var supplierNode = line.getElementsByTagName("AnalysisCode7");
            if (supplierNode.length > 0) {
                var supplierCode = line.getElementsByTagName("AnalysisCode7")[0].childNodes[0].nodeValue;
            }
            var baseAmountStr = line.getElementsByTagName("BaseAmount")[0].childNodes[0].nodeValue;
            var debitCredit = line.getElementsByTagName("DebitCredit")[0].childNodes[0].nodeValue;
            var description = line.getElementsByTagName("Description")[0].childNodes[0].nodeValue;
            var tDateString = line.getElementsByTagName("TransactionDate")[0].childNodes[0].nodeValue;
            var transactionReference = line.getElementsByTagName("TransactionReference")[0].childNodes[0].nodeValue;
            var journalNumber = line.getElementsByTagName("JournalNumber")[0].childNodes[0].nodeValue;
            var journalLineNumber = line.getElementsByTagName("JournalLineNumber")[0].childNodes[0].nodeValue;
            var baseAmount = Number(baseAmountStr);
            baseAmount = baseAmount * -1;
            i++;
            line = Ledger.nextElementSibling;
        }
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
