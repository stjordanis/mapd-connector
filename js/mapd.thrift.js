//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

MapD_connect_args = function(args) {
  this.user = null;
  this.passwd = null;
  this.dbname = null;
  if (args) {
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.passwd !== undefined) {
      this.passwd = args.passwd;
    }
    if (args.dbname !== undefined) {
      this.dbname = args.dbname;
    }
  }
};
MapD_connect_args.prototype = {};
MapD_connect_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.passwd = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.dbname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_connect_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_connect_args');
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 1);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  if (this.passwd !== null && this.passwd !== undefined) {
    output.writeFieldBegin('passwd', Thrift.Type.STRING, 2);
    output.writeString(this.passwd);
    output.writeFieldEnd();
  }
  if (this.dbname !== null && this.dbname !== undefined) {
    output.writeFieldBegin('dbname', Thrift.Type.STRING, 3);
    output.writeString(this.dbname);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_connect_result = function(args) {
  this.success = null;
  this.e = null;
  this.te = null;
  if (args instanceof MapDException) {
    this.e = args;
    return;
  }
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_connect_result.prototype = {};
MapD_connect_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new MapDException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_connect_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_connect_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 2);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_disconnect_args = function(args) {
  this.session = null;
  if (args) {
    if (args.session !== undefined) {
      this.session = args.session;
    }
  }
};
MapD_disconnect_args.prototype = {};
MapD_disconnect_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.session = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_disconnect_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_disconnect_args');
  if (this.session !== null && this.session !== undefined) {
    output.writeFieldBegin('session', Thrift.Type.I32, 1);
    output.writeI32(this.session);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_disconnect_result = function(args) {
  this.e = null;
  this.te = null;
  if (args instanceof MapDException) {
    this.e = args;
    return;
  }
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.e !== undefined) {
      this.e = args.e;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_disconnect_result.prototype = {};
MapD_disconnect_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new MapDException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_disconnect_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_disconnect_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 2);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_sql_execute_args = function(args) {
  this.session = null;
  this.query = null;
  if (args) {
    if (args.session !== undefined) {
      this.session = args.session;
    }
    if (args.query !== undefined) {
      this.query = args.query;
    }
  }
};
MapD_sql_execute_args.prototype = {};
MapD_sql_execute_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.session = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_sql_execute_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_sql_execute_args');
  if (this.session !== null && this.session !== undefined) {
    output.writeFieldBegin('session', Thrift.Type.I32, 1);
    output.writeI32(this.session);
    output.writeFieldEnd();
  }
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 2);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_sql_execute_result = function(args) {
  this.success = null;
  this.e = null;
  this.te = null;
  if (args instanceof MapDException) {
    this.e = args;
    return;
  }
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_sql_execute_result.prototype = {};
MapD_sql_execute_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new QueryResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new MapDException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_sql_execute_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_sql_execute_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 2);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getColumnTypes_args = function(args) {
  this.session = null;
  this.table_name = null;
  if (args) {
    if (args.session !== undefined) {
      this.session = args.session;
    }
    if (args.table_name !== undefined) {
      this.table_name = args.table_name;
    }
  }
};
MapD_getColumnTypes_args.prototype = {};
MapD_getColumnTypes_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.session = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.table_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getColumnTypes_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_getColumnTypes_args');
  if (this.session !== null && this.session !== undefined) {
    output.writeFieldBegin('session', Thrift.Type.I32, 1);
    output.writeI32(this.session);
    output.writeFieldEnd();
  }
  if (this.table_name !== null && this.table_name !== undefined) {
    output.writeFieldBegin('table_name', Thrift.Type.STRING, 2);
    output.writeString(this.table_name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getColumnTypes_result = function(args) {
  this.success = null;
  this.e = null;
  this.te = null;
  if (args instanceof MapDException) {
    this.e = args;
    return;
  }
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_getColumnTypes_result.prototype = {};
MapD_getColumnTypes_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.MAP) {
        var _size24 = 0;
        var _rtmp328;
        this.success = {};
        var _ktype25 = 0;
        var _vtype26 = 0;
        _rtmp328 = input.readMapBegin();
        _ktype25 = _rtmp328.ktype;
        _vtype26 = _rtmp328.vtype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          if (_i29 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key30 = null;
          var val31 = null;
          key30 = input.readString().value;
          val31 = new ColumnType();
          val31.read(input);
          this.success[key30] = val31;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new MapDException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getColumnTypes_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_getColumnTypes_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.success));
    for (var kiter32 in this.success)
    {
      if (this.success.hasOwnProperty(kiter32))
      {
        var viter33 = this.success[kiter32];
        output.writeString(kiter32);
        viter33.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 2);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getTables_args = function(args) {
  this.session = null;
  if (args) {
    if (args.session !== undefined) {
      this.session = args.session;
    }
  }
};
MapD_getTables_args.prototype = {};
MapD_getTables_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.session = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getTables_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_getTables_args');
  if (this.session !== null && this.session !== undefined) {
    output.writeFieldBegin('session', Thrift.Type.I32, 1);
    output.writeI32(this.session);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getTables_result = function(args) {
  this.success = null;
  this.e = null;
  this.te = null;
  if (args instanceof MapDException) {
    this.e = args;
    return;
  }
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_getTables_result.prototype = {};
MapD_getTables_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size34 = 0;
        var _rtmp338;
        this.success = [];
        var _etype37 = 0;
        _rtmp338 = input.readListBegin();
        _etype37 = _rtmp338.etype;
        _size34 = _rtmp338.size;
        for (var _i39 = 0; _i39 < _size34; ++_i39)
        {
          var elem40 = null;
          elem40 = input.readString().value;
          this.success.push(elem40);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new MapDException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getTables_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_getTables_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter41 in this.success)
    {
      if (this.success.hasOwnProperty(iter41))
      {
        iter41 = this.success[iter41];
        output.writeString(iter41);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 2);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getUsers_args = function(args) {
};
MapD_getUsers_args.prototype = {};
MapD_getUsers_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getUsers_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_getUsers_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getUsers_result = function(args) {
  this.success = null;
  this.te = null;
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_getUsers_result.prototype = {};
MapD_getUsers_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size42 = 0;
        var _rtmp346;
        this.success = [];
        var _etype45 = 0;
        _rtmp346 = input.readListBegin();
        _etype45 = _rtmp346.etype;
        _size42 = _rtmp346.size;
        for (var _i47 = 0; _i47 < _size42; ++_i47)
        {
          var elem48 = null;
          elem48 = input.readString().value;
          this.success.push(elem48);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getUsers_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_getUsers_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter49 in this.success)
    {
      if (this.success.hasOwnProperty(iter49))
      {
        iter49 = this.success[iter49];
        output.writeString(iter49);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 1);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getDatabases_args = function(args) {
};
MapD_getDatabases_args.prototype = {};
MapD_getDatabases_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getDatabases_args.prototype.write = function(output) {
  output.writeStructBegin('MapD_getDatabases_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapD_getDatabases_result = function(args) {
  this.success = null;
  this.te = null;
  if (args instanceof ThriftException) {
    this.te = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.te !== undefined) {
      this.te = args.te;
    }
  }
};
MapD_getDatabases_result.prototype = {};
MapD_getDatabases_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size50 = 0;
        var _rtmp354;
        this.success = [];
        var _etype53 = 0;
        _rtmp354 = input.readListBegin();
        _etype53 = _rtmp354.etype;
        _size50 = _rtmp354.size;
        for (var _i55 = 0; _i55 < _size50; ++_i55)
        {
          var elem56 = null;
          elem56 = new DBInfo();
          elem56.read(input);
          this.success.push(elem56);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.te = new ThriftException();
        this.te.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MapD_getDatabases_result.prototype.write = function(output) {
  output.writeStructBegin('MapD_getDatabases_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter57 in this.success)
    {
      if (this.success.hasOwnProperty(iter57))
      {
        iter57 = this.success[iter57];
        iter57.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.te !== null && this.te !== undefined) {
    output.writeFieldBegin('te', Thrift.Type.STRUCT, 1);
    this.te.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MapDClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
MapDClient.prototype = {};
MapDClient.prototype.connect = function(user, passwd, dbname, callback) {
  if (callback === undefined) {
    this.send_connect(user, passwd, dbname);
    return this.recv_connect();
  } else {
    var postData = this.send_connect(user, passwd, dbname, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_connect);
  }
};

MapDClient.prototype.send_connect = function(user, passwd, dbname, callback) {
  this.output.writeMessageBegin('connect', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_connect_args();
  args.user = user;
  args.passwd = passwd;
  args.dbname = dbname;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_connect = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_connect_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'connect failed: unknown result';
};
MapDClient.prototype.disconnect = function(session, callback) {
  if (callback === undefined) {
    this.send_disconnect(session);
    this.recv_disconnect();
  } else {
    var postData = this.send_disconnect(session, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_disconnect);
  }
};

MapDClient.prototype.send_disconnect = function(session, callback) {
  this.output.writeMessageBegin('disconnect', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_disconnect_args();
  args.session = session;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_disconnect = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_disconnect_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.te) {
    throw result.te;
  }
  return;
};
MapDClient.prototype.sql_execute = function(session, query, callback) {
  if (callback === undefined) {
    this.send_sql_execute(session, query);
    return this.recv_sql_execute();
  } else {
    var postData = this.send_sql_execute(session, query, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_sql_execute);
  }
};

MapDClient.prototype.send_sql_execute = function(session, query, callback) {
  this.output.writeMessageBegin('sql_execute', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_sql_execute_args();
  args.session = session;
  args.query = query;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_sql_execute = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_sql_execute_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'sql_execute failed: unknown result';
};
MapDClient.prototype.getColumnTypes = function(session, table_name, callback) {
  if (callback === undefined) {
    this.send_getColumnTypes(session, table_name);
    return this.recv_getColumnTypes();
  } else {
    var postData = this.send_getColumnTypes(session, table_name, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getColumnTypes);
  }
};

MapDClient.prototype.send_getColumnTypes = function(session, table_name, callback) {
  this.output.writeMessageBegin('getColumnTypes', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_getColumnTypes_args();
  args.session = session;
  args.table_name = table_name;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_getColumnTypes = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_getColumnTypes_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getColumnTypes failed: unknown result';
};
MapDClient.prototype.getTables = function(session, callback) {
  if (callback === undefined) {
    this.send_getTables(session);
    return this.recv_getTables();
  } else {
    var postData = this.send_getTables(session, true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getTables);
  }
};

MapDClient.prototype.send_getTables = function(session, callback) {
  this.output.writeMessageBegin('getTables', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_getTables_args();
  args.session = session;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_getTables = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_getTables_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getTables failed: unknown result';
};
MapDClient.prototype.getUsers = function(callback) {
  if (callback === undefined) {
    this.send_getUsers();
    return this.recv_getUsers();
  } else {
    var postData = this.send_getUsers(true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getUsers);
  }
};

MapDClient.prototype.send_getUsers = function(callback) {
  this.output.writeMessageBegin('getUsers', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_getUsers_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_getUsers = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_getUsers_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getUsers failed: unknown result';
};
MapDClient.prototype.getDatabases = function(callback) {
  if (callback === undefined) {
    this.send_getDatabases();
    return this.recv_getDatabases();
  } else {
    var postData = this.send_getDatabases(true);
    return this.output.getTransport()
      .jqRequest(this, postData, arguments, this.recv_getDatabases);
  }
};

MapDClient.prototype.send_getDatabases = function(callback) {
  this.output.writeMessageBegin('getDatabases', Thrift.MessageType.CALL, this.seqid);
  var args = new MapD_getDatabases_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush(callback);
};

MapDClient.prototype.recv_getDatabases = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MapD_getDatabases_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.te) {
    throw result.te;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'getDatabases failed: unknown result';
};
