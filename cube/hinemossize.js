function myFunction2() {
  let spreadsheet = SpreadsheetApp.getActive();
  let sheet = spreadsheet.getActiveSheet();
  let range = sheet.getRange("B2:X24");
  let values = range.getValues();
  for(let i = 0;i < values.length;i++){
    for(let j = 0;j < values[0].length;j++){
      let value = values[i][j];
      let comm = "";
      if(value == "") continue;
      if(value.includes(':')){
        if(value.includes('/')){
          let setup = value.substring(0,value.indexOf(':')).trim();
          let inside = value.substring(value.indexOf(':')+1).trim();
          let a = inside.split('/')[0].trim();
          let b = inside.split('/')[1].trim();
          let ap = a.replace("'","");
          comm = "[" + setup + " " +  a + ":[" + b + "," + ap + "2]]"; 
        }else{
          let setup = value.substring(0,value.indexOf(':')+1).trim();
          let inside = value.substring(value.indexOf(':')+1).trim();
          comm = '[' + setup +'[' + inside +']]';
        }
      }else if(value.includes('/')){
        let a = value.split('/')[0].trim();
        let b = value.split('/')[1].trim();
        let ap = a.replace("'","");
        comm = "[" + a + ":[" + b + "," + ap + "2]"; 
      }else{
        comm = '[' +value+']';
      }
      sheet.getRange(i+2,j+2,1,1).setValue(comm);
    }
  }
}
