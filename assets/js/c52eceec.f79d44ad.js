"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[3017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),o=(n(7294),n(3905));const a={},r="ADR 027: Deterministic Protobuf Serialization",s={unversionedId:"architecture/adr-027-deterministic-protobuf-serialization",id:"version-v0.47/architecture/adr-027-deterministic-protobuf-serialization",title:"ADR 027: Deterministic Protobuf Serialization",description:"Changelog",source:"@site/versioned_docs/version-v0.47/architecture/adr-027-deterministic-protobuf-serialization.md",sourceDirName:"architecture",slug:"/architecture/adr-027-deterministic-protobuf-serialization",permalink:"/v0.47/architecture/adr-027-deterministic-protobuf-serialization",draft:!1,tags:[],version:"v0.47",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 024: Coin Metadata",permalink:"/v0.47/architecture/adr-024-coin-metadata"},next:{title:"ADR 028: Public Key Addresses",permalink:"/v0.47/architecture/adr-028-public-key-addresses"}},l={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:3},{value:"Decision",id:"decision",level:3},{value:"Specification",id:"specification",level:2},{value:"Scope",id:"scope",level:3},{value:"Background - Protobuf3 Encoding",id:"background---protobuf3-encoding",level:3},{value:"Serialization rules",id:"serialization-rules",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Test vectors",id:"test-vectors",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Usage in Cosmos SDK",id:"usage-in-cosmos-sdk",level:3},{value:"References",id:"references",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-027-deterministic-protobuf-serialization"},"ADR 027: Deterministic Protobuf Serialization"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2020-08-07: Initial Draft"),(0,o.kt)("li",{parentName:"ul"},"2020-09-01: Further clarify rules")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Fully deterministic structure serialization, which works across many languages and clients,\nis needed when signing messages. We need to be sure that whenever we serialize\na data structure, no matter in which supported language, the raw bytes\nwill stay the same.\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"Protobuf"),"\nserialization is not bijective (i.e. there exist a practically unlimited number of\nvalid binary representations for a given protobuf document)",(0,o.kt)("sup",null,"1"),"."),(0,o.kt)("p",null,"This document describes a deterministic serialization scheme for\na subset of protobuf documents, that covers this use case but can be reused in\nother cases as well."),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("p",null,"For signature verification in Cosmos SDK, the signer and verifier need to agree on\nthe same serialization of a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignDoc")," as defined in\n",(0,o.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-020-protobuf-transaction-encoding"},"ADR-020")," without transmitting the\nserialization."),(0,o.kt)("p",null,"Currently, for block signatures we are using a workaround: we create a new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/9e85e81e0e8140067dd893421290c191529c148c/proto/cosmos/tx/v1beta1/tx.proto#L30"},"TxRaw"),"\ninstance (as defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-020-protobuf-transaction-encoding.md#transactions"},"adr-020-protobuf-transaction-encoding"),")\nby converting all ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/9e85e81e0e8140067dd893421290c191529c148c/proto/cosmos/tx/v1beta1/tx.proto#L13"},"Tx"),"\nfields to bytes on the client side. This adds an additional manual\nstep when sending and signing transactions."),(0,o.kt)("h3",{id:"decision"},"Decision"),(0,o.kt)("p",null,"The following encoding scheme is to be used by other ADRs,\nand in particular for ",(0,o.kt)("inlineCode",{parentName:"p"},"SignDoc")," serialization."),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"This ADR defines a protobuf3 serializer. The output is a valid protobuf\nserialization, such that every protobuf parser can parse it."),(0,o.kt)("p",null,"No maps are supported in version 1 due to the complexity of defining a\ndeterministic serialization. This might change in future. Implementations must\nreject documents containing maps as invalid input."),(0,o.kt)("h3",{id:"background---protobuf3-encoding"},"Background - Protobuf3 Encoding"),(0,o.kt)("p",null,"Most numeric types in protobuf3 are encoded as\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/encoding#varints"},"varints"),".\nVarints are at most 10 bytes, and since each varint byte has 7 bits of data,\nvarints are a representation of ",(0,o.kt)("inlineCode",{parentName:"p"},"uint70")," (70-bit unsigned integer). When\nencoding, numeric values are casted from their base type to ",(0,o.kt)("inlineCode",{parentName:"p"},"uint70"),", and when\ndecoding, the parsed ",(0,o.kt)("inlineCode",{parentName:"p"},"uint70")," is casted to the appropriate numeric type."),(0,o.kt)("p",null,"The maximum valid value for a varint that complies with protobuf3 is\n",(0,o.kt)("inlineCode",{parentName:"p"},"FF FF FF FF FF FF FF FF FF 7F")," (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"2**70 -1"),"). If the field type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"{,u,s}int64"),", the highest 6 bits of the 70 are dropped during decoding,\nintroducing 6 bits of malleability. If the field type is ",(0,o.kt)("inlineCode",{parentName:"p"},"{,u,s}int32"),", the\nhighest 38 bits of the 70 are dropped during decoding, introducing 38 bits of\nmalleability."),(0,o.kt)("p",null,"Among other sources of non-determinism, this ADR eliminates the possibility of\nencoding malleability."),(0,o.kt)("h3",{id:"serialization-rules"},"Serialization rules"),(0,o.kt)("p",null,"The serialization is based on the\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/encoding"},"protobuf3 encoding"),"\nwith the following additions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fields must be serialized only once in ascending order"),(0,o.kt)("li",{parentName:"ol"},"Extra fields or any extra data must not be added"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3#default"},"Default values"),"\nmust be omitted"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"repeated")," fields of scalar numeric types must use\n",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/encoding#packed"},"packed encoding")),(0,o.kt)("li",{parentName:"ol"},"Varint encoding must not be longer than needed:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"No trailing zero bytes (in little endian, i.e. no leading zeroes in big\nendian). Per rule 3 above, the default value of ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," must be omitted, so\nthis rule does not apply in such cases."),(0,o.kt)("li",{parentName:"ul"},"The maximum value for a varint must be ",(0,o.kt)("inlineCode",{parentName:"li"},"FF FF FF FF FF FF FF FF FF 01"),".\nIn other words, when decoded, the highest 6 bits of the 70-bit unsigned\ninteger must be ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),". (10-byte varints are 10 groups of 7 bits, i.e.\n70 bits, of which only the lowest 70-6=64 are useful.)"),(0,o.kt)("li",{parentName:"ul"},"The maximum value for 32-bit values in varint encoding must be ",(0,o.kt)("inlineCode",{parentName:"li"},"FF FF FF FF 0F"),"\nwith one exception (below). In other words, when decoded, the highest 38\nbits of the 70-bit unsigned integer must be ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The one exception to the above is ",(0,o.kt)("em",{parentName:"li"},"negative")," ",(0,o.kt)("inlineCode",{parentName:"li"},"int32"),", which must be\nencoded using the full 10 bytes for sign extension",(0,o.kt)("sup",null,"2"),"."))),(0,o.kt)("li",{parentName:"ul"},"The maximum value for Boolean values in varint encoding must be ",(0,o.kt)("inlineCode",{parentName:"li"},"01")," (i.e.\nit must be ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"). Per rule 3 above, the default value of ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," must\nbe omitted, so if a Boolean is included it must have a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),".")))),(0,o.kt)("p",null,"While rule number 1. and 2. should be pretty straight forward and describe the\ndefault behavior of all protobuf encoders the author is aware of, the 3rd rule\nis more interesting. After a protobuf3 deserialization you cannot differentiate\nbetween unset fields and fields set to the default value",(0,o.kt)("sup",null,"3"),". At\nserialization level however, it is possible to set the fields with an empty\nvalue or omitting them entirely. This is a significant difference to e.g. JSON\nwhere a property can be empty (",(0,o.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or undefined, leading to 3\ndifferent documents."),(0,o.kt)("p",null,"Omitting fields set to default values is valid because the parser must assign\nthe default value to fields missing in the serialization",(0,o.kt)("sup",null,"4"),". For scalar\ntypes, omitting defaults is required by the spec",(0,o.kt)("sup",null,"5"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"repeated"),"\nfields, not serializing them is the only way to express empty lists. Enums must\nhave a first element of numeric value 0, which is the default",(0,o.kt)("sup",null,"6"),". And\nmessage fields default to unset",(0,o.kt)("sup",null,"7"),"."),(0,o.kt)("p",null,"Omitting defaults allows for some amount of forward compatibility: users of\nnewer versions of a protobuf schema produce the same serialization as users of\nolder versions as long as newly added fields are not used (i.e. set to their\ndefault value)."),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"There are three main implementation strategies, ordered from the least to the\nmost custom development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use a protobuf serializer that follows the above rules by default.")," E.g.\n",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/gogoproto/gogoproto"},"gogoproto")," is known to\nbe compliant by in most cases, but not when certain annotations such as\n",(0,o.kt)("inlineCode",{parentName:"p"},"nullable = false")," are used. It might also be an option to configure an\nexisting serializer accordingly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Normalize default values before encoding them.")," If your serializer follows\nrule 1. and 2. and allows you to explicitly unset fields for serialization,\nyou can normalize default values to unset. This can be done when working with\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/protobufjs"},"protobuf.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const bytes = SignDoc.encode({\n  bodyBytes: body.length > 0 ? body : null, // normalize empty bytes to unset\n  authInfoBytes: authInfo.length > 0 ? authInfo : null, // normalize empty bytes to unset\n  chainId: chainId || null, // normalize "" to unset\n  accountNumber: accountNumber || null, // normalize 0 to unset\n  accountSequence: accountSequence || null, // normalize 0 to unset\n}).finish();\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use a hand-written serializer for the types you need.")," If none of the above\nways works for you, you can write a serializer yourself. For SignDoc this\nwould look something like this in Go, building on existing protobuf utilities:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"if !signDoc.body_bytes.empty() {\n    buf.WriteUVarInt64(0xA) // wire type and field number for body_bytes\n    buf.WriteUVarInt64(signDoc.body_bytes.length())\n    buf.WriteBytes(signDoc.body_bytes)\n}\n\nif !signDoc.auth_info.empty() {\n    buf.WriteUVarInt64(0x12) // wire type and field number for auth_info\n    buf.WriteUVarInt64(signDoc.auth_info.length())\n    buf.WriteBytes(signDoc.auth_info)\n}\n\nif !signDoc.chain_id.empty() {\n    buf.WriteUVarInt64(0x1a) // wire type and field number for chain_id\n    buf.WriteUVarInt64(signDoc.chain_id.length())\n    buf.WriteBytes(signDoc.chain_id)\n}\n\nif signDoc.account_number != 0 {\n    buf.WriteUVarInt64(0x20) // wire type and field number for account_number\n    buf.WriteUVarInt(signDoc.account_number)\n}\n\nif signDoc.account_sequence != 0 {\n    buf.WriteUVarInt64(0x28) // wire type and field number for account_sequence\n    buf.WriteUVarInt(signDoc.account_sequence)\n}\n")))),(0,o.kt)("h3",{id:"test-vectors"},"Test vectors"),(0,o.kt)("p",null,"Given the protobuf definition ",(0,o.kt)("inlineCode",{parentName:"p"},"Article.proto")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'package blog;\nsyntax = "proto3";\n\nenum Type {\n  UNSPECIFIED = 0;\n  IMAGES = 1;\n  NEWS = 2;\n};\n\nenum Review {\n  UNSPECIFIED = 0;\n  ACCEPTED = 1;\n  REJECTED = 2;\n};\n\nmessage Article {\n  string title = 1;\n  string description = 2;\n  uint64 created = 3;\n  uint64 updated = 4;\n  bool public = 5;\n  bool promoted = 6;\n  Type type = 7;\n  Review review = 8;\n  repeated string comments = 9;\n  repeated string backlinks = 10;\n};\n')),(0,o.kt)("p",null,"serializing the values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'title: "The world needs change \ud83c\udf33"\ndescription: ""\ncreated: 1596806111080\nupdated: 0\npublic: true\npromoted: false\ntype: Type.NEWS\nreview: Review.UNSPECIFIED\ncomments: ["Nice one", "Thank you"]\nbacklinks: []\n')),(0,o.kt)("p",null,"must result in the serialization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0a1b54686520776f726c64206e65656473206368616e676520f09f8cb318e8bebec8bc2e280138024a084e696365206f6e654a095468616e6b20796f75\n")),(0,o.kt)("p",null,"When inspecting the serialized document, you see that every second field is\nomitted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo 0a1b54686520776f726c64206e65656473206368616e676520f09f8cb318e8bebec8bc2e280138024a084e696365206f6e654a095468616e6b20796f75 | xxd -r -p | protoc --decode_raw\n1: "The world needs change \\360\\237\\214\\263"\n3: 1596806111080\n5: 1\n7: 2\n9: "Nice one"\n9: "Thank you"\n')),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Having such an encoding available allows us to get deterministic serialization\nfor all protobuf documents we need in the context of Cosmos SDK signing."),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Well defined rules that can be verified independent of a reference\nimplementation"),(0,o.kt)("li",{parentName:"ul"},"Simple enough to keep the barrier to implement transaction signing low"),(0,o.kt)("li",{parentName:"ul"},"It allows us to continue to use 0 and other empty values in SignDoc, avoiding\nthe need to work around 0 sequences. This does not imply the change from\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/6949"},"https://github.com/cosmos/cosmos-sdk/pull/6949")," should not be merged, but not\ntoo important anymore.")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When implementing transaction signing, the encoding rules above must be\nunderstood and implemented."),(0,o.kt)("li",{parentName:"ul"},"The need for rule number 3. adds some complexity to implementations."),(0,o.kt)("li",{parentName:"ul"},"Some data structures may require custom code for serialization. Thus\nthe code is not very portable - it will require additional work for each\nclient implementing serialization to properly handle custom data structures.")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("h3",{id:"usage-in-cosmos-sdk"},"Usage in Cosmos SDK"),(0,o.kt)("p",null,'For the reasons mentioned above ("Negative" section) we prefer to keep workarounds\nfor shared data structure. Example: the aforementioned ',(0,o.kt)("inlineCode",{parentName:"p"},"TxRaw")," is using raw bytes\nas a workaround. This allows them to use any valid Protobuf library without\nthe need of implementing a custom serializer that adheres to this standard (and related risks of bugs)."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"1")," _When a message is serialized, there is no guaranteed order for how its known or unknown fields should be written. Serialization order is an implementation detail and the details of any particular implementation may change in the future. Therefore, protocol buffer parsers must be able to parse fields in any order._ from https://developers.google.com/protocol-buffers/docs/encoding#order"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"2")," https://developers.google.com/protocol-buffers/docs/encoding#signed_integers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"3")," _Note that for scalar message fields, once a message is parsed there's no way of telling whether a field was explicitly set to the default value (for example whether a boolean was set to false) or just not set at all: you should bear this in mind when defining your message types. For example, don't have a boolean that switches on some behavior when set to false if you don't want that behavior to also happen by default._ from https://developers.google.com/protocol-buffers/docs/proto3#default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"4")," _When a message is parsed, if the encoded message does not contain a particular singular element, the corresponding field in the parsed object is set to the default value for that field._ from https://developers.google.com/protocol-buffers/docs/proto3#default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"5")," _Also note that if a scalar message field is set to its default, the value will not be serialized on the wire._ from https://developers.google.com/protocol-buffers/docs/proto3#default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"6")," _For enums, the default value is the first defined enum value, which must be 0._ from https://developers.google.com/protocol-buffers/docs/proto3#default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("sup",null,"7")," _For message fields, the field is not set. Its exact value is language-dependent._ from https://developers.google.com/protocol-buffers/docs/proto3#default"),(0,o.kt)("li",{parentName:"ul"},"Encoding rules and parts of the reasoning taken from\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/regen-network/canonical-proto3"},"canonical-proto3 Aaron Craelius"))))}c.isMDXComponent=!0}}]);