"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="gRPC, REST, and Tendermint Endpoints",s={unversionedId:"core/grpc_rest",id:"core/grpc_rest",title:"gRPC, REST, and Tendermint Endpoints",description:"This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.",source:"@site/docs/core/06-grpc_rest.md",sourceDirName:"core",slug:"/core/grpc_rest",permalink:"/main/core/grpc_rest",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Encoding",permalink:"/main/core/encoding"},next:{title:"Command-Line Interface",permalink:"/main/core/cli"}},l={},p=[{value:"An Overview of All Endpoints",id:"an-overview-of-all-endpoints",level:2},{value:"gRPC Server",id:"grpc-server",level:2},{value:"REST Server",id:"rest-server",level:2},{value:"gRPC-gateway REST Routes",id:"grpc-gateway-rest-routes",level:3},{value:"Swagger",id:"swagger",level:3},{value:"Tendermint RPC",id:"tendermint-rpc",level:2},{value:"Comparison Table",id:"comparison-table",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grpc-rest-and-tendermint-endpoints"},"gRPC, REST, and Tendermint Endpoints"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.")),(0,r.kt)("h2",{id:"an-overview-of-all-endpoints"},"An Overview of All Endpoints"),(0,r.kt)("p",null,"Each node exposes the following endpoints for users to interact with a node, each endpoint is served on a different port. Details on how to configure each endpoint is provided in the endpoint's own section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the gRPC server (default port: ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),"),"),(0,r.kt)("li",{parentName:"ul"},"the REST server (default port: ",(0,r.kt)("inlineCode",{parentName:"li"},"1317"),"),"),(0,r.kt)("li",{parentName:"ul"},"the Tendermint RPC endpoint (default port: ",(0,r.kt)("inlineCode",{parentName:"li"},"26657"),").")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The node also exposes some other endpoints, such as the Tendermint P2P endpoint, or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/metrics.html#metrics"},"Prometheus endpoint"),", which are not directly related to the Cosmos SDK. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#configuration"},"Tendermint documentation")," for more information about these endpoints.")),(0,r.kt)("h2",{id:"grpc-server"},"gRPC Server"),(0,r.kt)("p",null,"In the Cosmos SDK, Protobuf is the main ",(0,r.kt)("a",{parentName:"p",href:"./encoding"},"encoding")," library. This brings a wide range of Protobuf-based tools that can be plugged into the Cosmos SDK. One such tool is ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC"),", a modern open-source high performance RPC framework that has decent client support in several languages."),(0,r.kt)("p",null,"Each module exposes a ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/messages-and-queries#queries"},"Protobuf ",(0,r.kt)("inlineCode",{parentName:"a"},"Query")," service")," that defines state queries. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," services and a transaction service used to broadcast transactions are hooked up to the gRPC server via the following function inside the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/server/types/app.go#L45-L47\n")),(0,r.kt)("p",null,"Note: It is not possible to expose any ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/messages-and-queries#messages"},"Protobuf ",(0,r.kt)("inlineCode",{parentName:"a"},"Msg")," service")," endpoints via gRPC. Transactions must be generated and signed using the CLI or programmatically before they can be broadcasted using gRPC. See ",(0,r.kt)("a",{parentName:"p",href:"/main/run-node/txs"},"Generating, Signing, and Broadcasting Transactions")," for more information."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc.Server")," is a concrete gRPC server, which spawns and serves all gRPC query requests and a broadcast transaction request. This server can be configured inside ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp/config/app.toml"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc.enable = true|false")," field defines if the gRPC server should be enabled. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc.address = {string}")," field defines the address (really, the port, since the host should be kept at ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),") the server should bind to. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0:9090"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp")," is the directory where the node's configuration and databases are stored. By default, it's set to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.{app_name}"),".")),(0,r.kt)("p",null,"Once the gRPC server is started, you can send requests to it using a gRPC client. Some examples are given in our ",(0,r.kt)("a",{parentName:"p",href:"/main/run-node/interact-node#using-grpc"},"Interact with the Node")," tutorial."),(0,r.kt)("p",null,"An overview of all available gRPC endpoints shipped with the Cosmos SDK is ",(0,r.kt)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk"},"Protobuf documentation"),"."),(0,r.kt)("h2",{id:"rest-server"},"REST Server"),(0,r.kt)("p",null,"Cosmos SDK supports REST routes via gRPC-gateway."),(0,r.kt)("p",null,"All routes are configured under the following fields in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp/config/app.toml"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api.enable = true|false")," field defines if the REST server should be enabled. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api.address = {string}")," field defines the address (really, the port, since the host should be kept at ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),") the server should bind to. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"tcp://0.0.0.0:1317"),"."),(0,r.kt)("li",{parentName:"ul"},"some additional API configuration options are defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.simapp/config/app.toml"),", along with comments, please refer to that file directly.")),(0,r.kt)("h3",{id:"grpc-gateway-rest-routes"},"gRPC-gateway REST Routes"),(0,r.kt)("p",null,"If, for various reasons, you cannot use gRPC (for example, you are building a web application, and browsers don't support HTTP2 on which gRPC is built), then the Cosmos SDK offers REST routes via gRPC-gateway."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc-ecosystem.github.io/grpc-gateway/"},"gRPC-gateway")," is a tool to expose gRPC endpoints as REST endpoints. For each gRPC endpoint defined in a Protobuf ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," service, the Cosmos SDK offers a REST equivalent. For instance, querying a balance could be done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"/cosmos.bank.v1beta1.QueryAllBalances")," gRPC endpoint, or alternatively via the gRPC-gateway ",(0,r.kt)("inlineCode",{parentName:"p"},'"/cosmos/bank/v1beta1/balances/{address}"')," REST endpoint: both will return the same result. For each RPC method defined in a Protobuf ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," service, the corresponding REST endpoint is defined as an option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/proto/cosmos/bank/v1beta1/query.proto#L19-L22\n")),(0,r.kt)("p",null,"For application developers, gRPC-gateway REST routes needs to be wired up to the REST server, this is done by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterGRPCGatewayRoutes")," function on the ModuleManager."),(0,r.kt)("h3",{id:"swagger"},"Swagger"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," (or OpenAPIv2) specification file is exposed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/swagger")," route on the API server. Swagger is an open specification describing the API endpoints a server serves, including description, input arguments, return types and much more about each endpoint."),(0,r.kt)("p",null,"Enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"/swagger")," endpoint is configurable inside ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp/config/app.toml")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"api.swagger")," field, which is set to true by default."),(0,r.kt)("p",null,"For application developers, you may want to generate your own Swagger definitions based on your custom modules.\nThe Cosmos SDK's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/scripts/protoc-swagger-gen.sh"},"Swagger generation script")," is a good place to start."),(0,r.kt)("h2",{id:"tendermint-rpc"},"Tendermint RPC"),(0,r.kt)("p",null,"Independently from the Cosmos SDK, Tendermint also exposes a RPC server. This RPC server can be configured by tuning parameters under the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," table in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simapp/config/config.toml"),", the default listening address is ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp://0.0.0.0:26657"),". An OpenAPI specification of all Tendermint RPC endpoints is available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/rpc/"},"here"),"."),(0,r.kt)("p",null,"Some Tendermint RPC endpoints are directly related to the Cosmos SDK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/abci_query"),": this endpoint will query the application for state. As the ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," parameter, you can send the following strings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"any Protobuf fully-qualified service method, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"/cosmos.bank.v1beta1.Query/AllBalances"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," field should then include the method's request parameter(s) encoded as bytes using Protobuf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/app/simulate"),": this will simulate a transaction, and return some information such as gas used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/app/version"),": this will return the application's version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/store/{path}"),": this will query the store directly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p2p/filter/addr/{port}"),": this will return a filtered list of the node's P2P peers by address port."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p2p/filter/id/{id}"),": this will return a filtered list of the node's P2P peers by ID."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/broadcast_tx_{aync,async,commit}"),": these 3 endpoint will broadcast a transaction to other peers. CLI, gRPC and REST expose ",(0,r.kt)("a",{parentName:"li",href:"/main/core/transactions#broadcasting-the-transaction"},"a way to broadcast transations"),", but they all use these 3 Tendermint RPCs under the hood.")),(0,r.kt)("h2",{id:"comparison-table"},"Comparison Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Advantages"),(0,r.kt)("th",{parentName:"tr",align:null},"Disadvantages"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},"- can use code-generated stubs in various languages ",(0,r.kt)("br",null)," - supports streaming and bidirectional communication (HTTP2) ",(0,r.kt)("br",null)," - small wire binary sizes, faster transmission"),(0,r.kt)("td",{parentName:"tr",align:null},"- based on HTTP2, not available in browsers ",(0,r.kt)("br",null)," - learning curve (mostly due to Protobuf)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REST"),(0,r.kt)("td",{parentName:"tr",align:null},"- ubiquitous ",(0,r.kt)("br",null)," - client libraries in all languages, faster implementation ",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"- only supports unary request-response communication (HTTP1.1) ",(0,r.kt)("br",null)," - bigger over-the-wire message sizes (JSON)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tendermint RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"- easy to use"),(0,r.kt)("td",{parentName:"tr",align:null},"- bigger over-the-wire message sizes (JSON)")))))}u.isMDXComponent=!0}}]);