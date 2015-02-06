(function(exports){
  dbcon.version = "1.0";
  exports.dbcon = dbcon;
  function dbcon() {
    var dbcon = {
      setPlatform: setPlatform,
      setHost: setHost,
      setUser: setUser,
      setDbName: setDbName,
      query: query,
      getFields: getFields
    }
    var platform = "postgres";
    var host = "localhost"; // default
    var user = null;
    var dbName = null;

    function setPlatform(newPlatform) {
      platform = newPlatofrm;
      return dbcon;
    }

    function setHost (newHost) {
      host = newHost;
      return dbcon;
    }

    function setUser (newUser) {
      user = newUser;
      return dbcon;
    }

    function setDbName (newDb) {
      dbName = newDb;
      return dbcon;
    }

    function testParamsDefined() {
      if (host == null) {
        throw "Host not defined";
      }
      if (user == null) {
        throw "User not defined";
      }
      if (dbName == null) {
        throw "Db name not defined";
      }
    }
    function query(query) {
      testParamsDefined();
      var requestString = platform + ".php?zip=1&host=" + host + "&user=" + user + "&dbname=" + dbName + "&q=" +  query;
      var response = JSON.parse($.ajax({type: "GET", url: requestString, async: false}).responseText);
      var fields = response.fields;
      // need to check for dates
      var dateVars = []
      var numFields = fields.length;
      for (var i = 0; i < numFields; i++) {
        if (fields[i].type == "date")  {
          dateVars.push(fields[i].name);
        }
      }
      var numDateVars = dateVars.length;
      if (numDateVars > 0) {
        var numRows = response.results.length;
        for (var r = 0; r < numRows; r++) { 
          for (var d = 0; d < numDateVars; d++) {
            response.results[r][dateVars[d]] = new Date(response.results[r][dateVars[d]]);
          }
        }
      }
      return response.results;
    }

    function getFields(tableName) { 
      testParamsDefined();
      var query = "SELECT * FROM " + tableName + " LIMIT 0";
      var requestString = platform + ".php?host=" + host + "&user=" + user + "&dbname=" + dbName + "&q=" +  query;
      return JSON.parse($.ajax({type: "GET", url: requestString, async: false}).responseText).fields;
    }

    return dbcon;
  }
})(typeof exports !== 'undefined' && exports || this);