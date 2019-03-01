"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  type Query {\n    \"A simple type for getting started!\"\n    hello: String\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _require = require('apollo-server-fastify'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var app = require('fastify')();

var typeDefs = gql(_templateObject()); // A map of functions which return data for the schema.

var resolvers = {
  Query: {
    hello: function hello() {
      return 'world';
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.register(server.createHandler());
          _context.next = 3;
          return app.listen(3000);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();