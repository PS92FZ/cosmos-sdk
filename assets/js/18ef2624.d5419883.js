"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[4674],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const o={},s="ADR 050: SIGN_MODE_TEXTUAL",r={unversionedId:"architecture/adr-050-sign-mode-textual",id:"version-v0.47/architecture/adr-050-sign-mode-textual",title:"ADR 050: SIGN_MODE_TEXTUAL",description:"Changelog",source:"@site/versioned_docs/version-v0.47/architecture/adr-050-sign-mode-textual.md",sourceDirName:"architecture",slug:"/architecture/adr-050-sign-mode-textual",permalink:"/v0.47/architecture/adr-050-sign-mode-textual",draft:!1,tags:[],version:"v0.47",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 2 XXX",permalink:"/v0.47/architecture/adr-050-sign-mode-textual-annex2"},next:{title:"ADR 053: Go Module Refactoring",permalink:"/v0.47/architecture/adr-053-go-module-refactoring"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Invertible Rendering",id:"invertible-rendering",level:3},{value:"Chain State",id:"chain-state",level:3},{value:"Signature and Security",id:"signature-and-security",level:3},{value:"Transaction Hash Malleability",id:"transaction-hash-malleability",level:3},{value:"SignDoc",id:"signdoc",level:3},{value:"Details",id:"details",level:2},{value:"Encoding of the Transaction Envelope",id:"encoding-of-the-transaction-envelope",level:3},{value:"Encoding of the Transaction Body",id:"encoding-of-the-transaction-body",level:3},{value:"Example",id:"example",level:4},{value:"Custom <code>Msg</code> Renderers",id:"custom-msg-renderers",level:3},{value:"Require signing over the <code>TxBody</code> and <code>AuthInfo</code> raw bytes",id:"require-signing-over-the-txbody-and-authinfo-raw-bytes",level:3},{value:"Additional Formatting by the Hardware Device",id:"additional-formatting-by-the-hardware-device",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Simple <code>MsgSend</code>",id:"example-1-simple-msgsend",level:4},{value:"Example 2: Multi-Msg Transaction with 3 signers",id:"example-2-multi-msg-transaction-with-3-signers",level:4},{value:"Example 3: Legacy Multisig",id:"example-3-legacy-multisig",level:4},{value:"Example 4: Fee Payer with Tips",id:"example-4-fee-payer-with-tips",level:4},{value:"Example 5: Complex Transaction with Nested Messages",id:"example-5-complex-transaction-with-nested-messages",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-050-sign_mode_textual"},"ADR 050: SIGN_MODE_TEXTUAL"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dec 06, 2021: Initial Draft."),(0,i.kt)("li",{parentName:"ul"},"Feb 07, 2022: Draft read and concept-ACKed by the Ledger team."),(0,i.kt)("li",{parentName:"ul"},"May 16, 2022: Change status to Accepted."),(0,i.kt)("li",{parentName:"ul"},"Aug 11, 2022: Require signing over tx raw bytes."),(0,i.kt)("li",{parentName:"ul"},"Sep 07, 2022: Add custom ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg"),"-renderers."),(0,i.kt)("li",{parentName:"ul"},"Sep 18, 2022: Structured format instead of lines of text")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted. Implementation started. Small value renderers details still need to be polished."),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This ADR specifies SIGN_MODE_TEXTUAL, a new string-based sign mode that is targetted at signing with hardware devices."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Protobuf-based SIGN_MODE_DIRECT was introduced in ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-020-protobuf-transaction-encoding"},"ADR-020")," and is intended to replace SIGN_MODE_LEGACY_AMINO_JSON in most situations, such as mobile wallets and CLI keyrings. However, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," hardware wallet is still using SIGN_MODE_LEGACY_AMINO_JSON for displaying the sign bytes to the user. Hardware wallets cannot transition to SIGN_MODE_DIRECT as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SIGN_MODE_DIRECT is binary-based and thus not suitable for display to end-users. Technically, hardware wallets could simply display the sign bytes to the user. But this would be considered as blind signing, and is a security concern."),(0,i.kt)("li",{parentName:"ul"},"hardware cannot decode the protobuf sign bytes due to memory constraints, as the Protobuf definitions would need to be embedded on the hardware device.")),(0,i.kt)("p",null,"In an effort to remove Amino from the SDK, a new sign mode needs to be created for hardware devices. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6513"},"Initial discussions")," propose a text-based sign mode, which this ADR formally specifies."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"In SIGN_MODE_TEXTUAL, a transaction is rendered into a textual representation,\nwhich is then sent to a secure device or subsystem for the user to review and sign.\nUnlike ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),", the transmitted data can be simply decoded into legible text\neven on devices with limited processing and display."),(0,i.kt)("p",null,"The textual representation is a sequence of ",(0,i.kt)("em",{parentName:"p"},"screens"),".\nEach screen is meant to be displayed in its entirety (if possible) even on a small device like a Ledger.\nA screen is roughly equivalent to a short line of text.\nLarge screens can be displayed in several pieces,\nmuch as long lines of text are wrapped,\nso no hard guidance is given, though 40 characters is a good target.\nA screen is used to display a single key/value pair for scalar values\n(or composite values with a compact notation, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Coins"),")\nor to introduce or conclude a larger grouping."),(0,i.kt)("p",null,"The text can contain the full range of Unicode code points, including control characters and nul.\nThe device is responsible for deciding how to display characters it cannot render natively.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-050-sign-mode-textual-annex2"},"annex 2")," for guidance."),(0,i.kt)("p",null,"Screens have a non-negative indentation level to signal composite or nested structures.\nIndentation level zero is the top level.\nIndentation is displayed via some device-specific mechanism.\nMessage quotation notation is an appropriate model, such as\nleading ",(0,i.kt)("inlineCode",{parentName:"p"},">")," characters or vertical bars on more capable displays."),(0,i.kt)("p",null,"Some screens are marked as ",(0,i.kt)("em",{parentName:"p"},"expert")," screens,\nmeant to be displayed only if the viewer chooses to opt in for the extra detail.\nExpert screens are meant for information that is rarely useful,\nor needs to be present only for signature integrity (see below)."),(0,i.kt)("h3",{id:"invertible-rendering"},"Invertible Rendering"),(0,i.kt)("p",null,"We require that the rendering of the transaction be invertible:\nthere must be a parsing function such that for every transaction,\nwhen rendered to the textual representation,\nparsing that representation yeilds a proto message equivalent\nto the original under proto equality."),(0,i.kt)("p",null,"Note that this inverse function does not need to perform correct\nparsing or error signaling for the whole domain of textual data.\nMerely that the range of valid transactions be invertible under\nthe composition of rendering and parsing."),(0,i.kt)("p",null,"Note that the existence of an inverse function ensures that the\nrendered text contains the full information of the original transaction,\nnot a hash or subset."),(0,i.kt)("h3",{id:"chain-state"},"Chain State"),(0,i.kt)("p",null,"The rendering function (and parsing function) may depend on the current chain state.\nThis is useful for reading parameters, such as coin display metadata,\nor for reading user-specific preferences such as language or address aliases.\nNote that if the observed state changes between signature generation\nand the transaction's inclusion in a block, the delivery-time rendering\nmight differ. If so, the signature will be invalid and the transaction\nwill be rejected."),(0,i.kt)("h3",{id:"signature-and-security"},"Signature and Security"),(0,i.kt)("p",null,"For security, transaction signatures should have three properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Given the transaction, signatures, and chain state, it must be possible to validate that the signatures matches the transaction,\nto verify that the signers must have known their respective secret keys.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It must be computationally infeasible to find a substantially different transaction for which the given signatures are valid, given the same chain state.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user should be able to give informed consent to the signed data via a simple, secure device with limited display capabilities."))),(0,i.kt)("p",null,"The correctness and security of ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is guaranteed by demonstrating an inverse function from the rendering to transaction protos.\nThis means that it is impossible for a different protocol buffer message to render to the same text."),(0,i.kt)("h3",{id:"transaction-hash-malleability"},"Transaction Hash Malleability"),(0,i.kt)("p",null,'When client software forms a transaction, the "raw" transaction (',(0,i.kt)("inlineCode",{parentName:"p"},"TxRaw"),") is serialized as a proto\nand a hash of the resulting byte sequence is computed.\nThis is the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxHash"),", and is used by various services to track the submitted transaction through its lifecycle.\nVarious misbehavior is possible if one can generate a modified transaction with a different TxHash\nbut for which the signature still checks out."),(0,i.kt)("p",null,"SIGN_MODE_TEXTUAL prevents this transaction malleability by including the TxHash as an expert screen\nin the rendering."),(0,i.kt)("h3",{id:"signdoc"},"SignDoc"),(0,i.kt)("p",null,"The SignDoc for ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is formed from a data structure like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Screen struct {\n  Text string text  // possibly size limited to, e.g. 255 characters\n  Indent uint8  // size limited to something small like 16 or 32\n  Expert bool\n}\n\ntype SignDocTextual = []Screen\n")),(0,i.kt)("p",null,"We do not plan to use protobuf serialization to form the sequence of bytes\nthat will be tranmitted and signed, in order to keep the decoder simple.\nWe will use ",(0,i.kt)("a",{parentName:"p",href:"https://cbor.io"},"CBOR")," (",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8949.html"},"RFC 8949"),") instead."),(0,i.kt)("p",null,"TODO: specify the details of the CBOR encoding."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"In the examples that follow, screens will be shown as lines of text,\nindentation is indicated with a leading '>',\nand expert screens are marked with a leading ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,i.kt)("h3",{id:"encoding-of-the-transaction-envelope"},"Encoding of the Transaction Envelope"),(0,i.kt)("p",null,'We define "transaction envelope" as all data in a transaction that is not in the ',(0,i.kt)("inlineCode",{parentName:"p"},"TxBody.Messages")," field. Transaction envelope includes fee, signer infos and memo, but don't include ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s. ",(0,i.kt)("inlineCode",{parentName:"p"},"//")," denotes comments and are not shown on the Ledger device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Chain ID: <string>\nAccount number: <uint64>\n*Public Key: <hex_string>\nSequence: <uint64>\n<TxBody>                                                    // See #8.\nFee: <coins>                                                // See value renderers for coins encoding.\n*Fee payer: <string>                                        // Skipped if no fee_payer set\n*Fee granter: <string>                                      // Skipped if no fee_granter set\nMemo: <string>                                              // Skipped if no memo set\n*Gas Limit: <uint64>\n*Timeout Height:  <uint64>                                  // Skipped if no timeout_height set\nTipper: <string>                                            // If there's a tip\nTip: <string>\n*This transaction has <int> body extension:                 // Skipped if no body extension options\n*<repeated Any>\n*This transaction has <int> body non-critical extensions:   // Skipped if no body non-critical extension options\n*<repeated Any>                                             // See value renderers for Any and array encoding.\n*This transaction has <int> body auth info extensions:      // Skipped if no auth info extension options\n*<repeated Any>\n*This transaction has <int> other signers:                  // Skipped if there is only one signer\n*Signer (<int>/<int>):\n*Public Key: <hex_string>\n*Sequence: <uint64>\n*End of other signers\n*Hash of raw bytes: <hex_string>                            // Hex encoding of bytes defined in #10, to prevent tx hash malleability.\n")),(0,i.kt)("h3",{id:"encoding-of-the-transaction-body"},"Encoding of the Transaction Body"),(0,i.kt)("p",null,"Transaction Body is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx.TxBody.Messages")," field, which is an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),"s, where each ",(0,i.kt)("inlineCode",{parentName:"p"},"Any")," packs a ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),". Since ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),"s are widely used, they have a slightly different encoding than usual array of ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),"s (Protobuf: ",(0,i.kt)("inlineCode",{parentName:"p"},"repeated google.protobuf.Any"),") described in Annex 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"This transaction has <int> message:   // Optional 's' for \"message\" if there's is >1 sdk.Msgs.\n// For each Msg, print the following 2 lines:\nMsg (<int>/<int>): <string>           // E.g. Msg (1/2): bank v1beta1 send coins\n<value rendering of Msg struct>\nEnd of transaction messages\n")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Given the following Protobuf message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},'message Grant {\n  google.protobuf.Any       authorization = 1 [(cosmos_proto.accepts_interface) = "Authorization"];\n  google.protobuf.Timestamp expiration    = 2 [(gogoproto.stdtime) = true, (gogoproto.nullable) = false];\n}\n\nmessage MsgGrant {\n  option (cosmos.msg.v1.signer) = "granter";\n  option (cosmos.msg.v1.textual.type_url) = "authz v1beta1 grant";\n\n  string granter = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  string grantee = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n')),(0,i.kt)("p",null,"and a transaction containing 1 such ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg"),", we get the following encoding:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"This transaction has 1 message:\nMsg (1/1): authz v1beta1 grant\nGranter: cosmos1abc...def\nGrantee: cosmos1ghi...jkl\nEnd of transaction messages\n")),(0,i.kt)("h3",{id:"custom-msg-renderers"},"Custom ",(0,i.kt)("inlineCode",{parentName:"h3"},"Msg")," Renderers"),(0,i.kt)("p",null,"Application developers may choose to not follow default renderer value output for their own ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s. In this case, they can implement their own custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," renderer. This is similar to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4430.md"},"EIP4430"),", where the smart contract developer chooses the description string to be shown to the end user."),(0,i.kt)("p",null,"This is done by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos.msg.v1.textual.expert_custom_renderer")," Protobuf option to a non-empty string. This option CAN ONLY be set on a Protobuf message representing transaction message object (implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgFooBar {\n  // Optional comments to describe in human-readable language the formatting\n  // rules of the custom renderer.\n  option (cosmos.msg.v1.textual.expert_custom_renderer) = "<unique algorithm identifier>";\n\n  // proto fields\n}\n')),(0,i.kt)("p",null,"When this option is set on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),", a registered function will transform the ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," into an array of one or more strings, which MAY use the key/value format (described in point #3) with the expert field prefix (described in point #5) and arbitrary indentation (point #6). These strings MAY be rendered from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," field using a default value renderer, or they may be generated from several fields using custom logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<unique algorithm identifier>")," is a string convention chosen by the application developer and is used to identify the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," renderer. For example, the documentation or specification of this custom algorithm can reference this identifier. This identifier CAN have a versioned suffix (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"_v1"),") to adapt for future changes (which would be consensus-breaking). We also recommend adding Protobuf comments to describe in human language the custom logic used."),(0,i.kt)("p",null,"Moreover, the renderer must provide 2 functions: one for formatting from Protobuf to string, and one for parsing string to Protobuf. These 2 functions are provided by the application developer. To satisfy point #1, the parse function MUST be the inverse of the formatting function. This property will not be checked by the SDK at runtime. However, we strongly recommend the application developer to include a comprehensive suite in their app repo to test invertibility, as to not introduce security bugs."),(0,i.kt)("h3",{id:"require-signing-over-the-txbody-and-authinfo-raw-bytes"},"Require signing over the ",(0,i.kt)("inlineCode",{parentName:"h3"},"TxBody")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"AuthInfo")," raw bytes"),(0,i.kt)("p",null,"Recall that the transaction bytes merklelized on chain are the Protobuf binary serialization of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/proto/cosmos/tx/v1beta1/tx.proto#L33"},"TxRaw"),", which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"body_bytes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_info_bytes"),". Moreover, the transaction hash is defined as the SHA256 hash of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxRaw")," bytes. We require that the user signs over these bytes in SIGN_MODE_TEXTUAL, more specifically over the following string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*Hash of raw bytes: <HEX(sha256(len(body_bytes) ++ body_bytes ++ len(auth_info_bytes) ++ auth_info_bytes))>\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"++")," denotes concatenation,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HEX")," is the hexadecimal representation of the bytes, all in capital letters, no ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix,"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("inlineCode",{parentName:"li"},"len()")," is encoded as a Big-Endian uint64.")),(0,i.kt)("p",null,"This is to prevent transaction hash malleability. The point #1 about invertiblity assures that transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_info")," values are not malleable, but the transaction hash still might be malleable with point #1 only, because the SIGN",(0,i.kt)("em",{parentName:"p"},"MODE_TEXTUAL strings don't follow the byte ordering defined in ",(0,i.kt)("inlineCode",{parentName:"em"},"body_bytes")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"auth_info_bytes"),". Without this hash, a malicious validator or exchange could intercept a transaction, modify its transaction hash _after")," the user signed it using SIGN_MODE_TEXTUAL (by tweaking the byte ordering inside ",(0,i.kt)("inlineCode",{parentName:"p"},"body_bytes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"auth_info_bytes"),"), and then submit it to Tendermint."),(0,i.kt)("p",null,"By including this hash in the SIGN_MODE_TEXTUAL signing payload, we keep the same level of guarantees as ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-020-protobuf-transaction-encoding"},"SIGN_MODE_DIRECT"),"."),(0,i.kt)("p",null,"These bytes are only shown in expert mode, hence the leading ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,i.kt)("h2",{id:"additional-formatting-by-the-hardware-device"},"Additional Formatting by the Hardware Device"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-050-sign-mode-textual-annex2"},"annex 2"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"example-1-simple-msgsend"},"Example 1: Simple ",(0,i.kt)("inlineCode",{parentName:"h4"},"MsgSend")),(0,i.kt)("p",null,"JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from": "cosmos1...abc",\n        "to": "cosmos1...def",\n        "amount": [\n          {\n            "denom": "uatom",\n            "amount": 10000000\n          }\n        ]\n      }\n    ]\n  },\n  "auth_info": {\n    "signer_infos": [\n      {\n        "public_key": "iQ...==",\n        "mode_info": { "single": { "mode": "SIGN_MODE_TEXTUAL" } },\n        "sequence": 2\n      }\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "atom",\n          "amount": 0.002\n        }\n      ],\n      "gas_limit": 100000\n    }\n  },\n  // Additional SignerData.\n  "chain_id": "simapp-1",\n  "account_number": 10\n}\n')),(0,i.kt)("p",null,"SIGN_MODE_TEXTUAL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Chain ID: simapp-1\nAccount number: 10\n*Public Key: iQ...==        // Hex pubkey\nSequence: 2\nThis transaction has 1 message:\nMessage (1/1): bank v1beta1 send coins\nFrom: cosmos1...abc\nTo: cosmos1...def\nAmount: 10 atom            // Conversion from uatom to atom using value renderers\nEnd of transaction messages\nFee: 0.002 atom\n*Gas: 100'000\n*Hash of raw bytes: <hex_string>\n")),(0,i.kt)("h4",{id:"example-2-multi-msg-transaction-with-3-signers"},"Example 2: Multi-Msg Transaction with 3 signers"),(0,i.kt)("h4",{id:"example-3-legacy-multisig"},"Example 3: Legacy Multisig"),(0,i.kt)("h4",{id:"example-4-fee-payer-with-tips"},"Example 4: Fee Payer with Tips"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from": "cosmos1...tipper",\n        "to": "cosmos1...abc",\n        "amount": [\n          {\n            "denom": "uatom",\n            "amount": 10000000\n          }\n        ]\n      }\n    ]\n  },\n  "auth_info": {\n    "signer_infos": [\n      {\n        "public_key": "iQ...==",\n        "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT_AUX" } },\n        "sequence": 42\n      },\n      {\n        "public_key": "iR...==",\n        "mode_info": { "single": { "mode": "SIGN_MODE_TEXTUAL" } },\n        "sequence": 2\n      }\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "atom",\n          "amount": 0.002\n        }\n      ],\n      "gas_limit": 100000,\n      "payer": "cosmos1...feepayer"\n    },\n    "tip": {\n      "amount": [\n        {\n          "denom": "ibc/CDC4587874B85BEA4FCEC3CEA5A1195139799A1FEE711A07D972537E18FDA39D",\n          "amount": 200\n        }\n      ],\n      "tipper": "cosmos1...tipper"\n    }\n  },\n  // Additional SignerData.\n  "chain_id": "simapp-1",\n  "account_number": 10\n}\n')),(0,i.kt)("p",null,"SIGN_MODE_TEXTUAL for the feepayer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Chain ID: simapp-1\nAccount number: 10\n*Public Key: iR...==\nSequence: 2\nThis transaction has 1 message:\nMessage (1/1): bank v1beta1 send coins\nFrom: cosmos1...abc\nTo: cosmos1...def\nAmount: 10 atom\nEnd of transaction messages\nFee: 0.002 atom\nFee Payer: cosmos1...feepayer\nTipper: cosmos1...tipper\nTip: 200 ibc/CDC4587874B85BEA4FCEC3CEA5A1195139799A1FEE711A07D972537E18FDA39D\n*Gas: 100'000\n*This transaction has 1 other signer:\n*Signer (1/2):\n*Public Key: iQ...==\n*Sign mode: Direct Aux\n*Sequence: 42\n*End of other signers\n*Hash of raw bytes: <hex_string>\n")),(0,i.kt)("h4",{id:"example-5-complex-transaction-with-nested-messages"},"Example 5: Complex Transaction with Nested Messages"),(0,i.kt)("p",null,"JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from": "cosmos1...abc",\n        "to": "cosmos1...def",\n        "amount": [\n          {\n            "denom": "uatom",\n            "amount": 10000000\n          }\n        ]\n      },\n      {\n        "@type": "/cosmos.gov.v1.MsgSubmitProposal",\n        "proposer": "cosmos1...ghi",\n        "messages": [\n          {\n            "@type": "/cosmos.bank.v1beta1.MsgSend",\n            "from": "cosmos1...jkl",\n            "to": "cosmos1...mno",\n            "amount": [\n              {\n                "denom": "uatom",\n                "amount": 20000000\n              }\n            ]\n          },\n          {\n            "@type": "/cosmos.authz.v1beta1.MsgExec",\n            "grantee": "cosmos1...pqr",\n            "msgs": [\n              {\n                "@type": "/cosmos.bank.v1beta1.MsgSend",\n                "from": "cosmos1...stu",\n                "to": "cosmos1...vwx",\n                "amount": [\n                  {\n                    "denom": "uatom",\n                    "amount": 30000000\n                  }\n                ]\n              },\n              {\n                "@type": "/cosmos.bank.v1beta1.MsgSend",\n                "from": "cosmos1...abc",\n                "to": "cosmos1...def",\n                "amount": [\n                  {\n                    "denom": "uatom",\n                    "amount": 40000000\n                  }\n                ]\n              }\n            ]\n          }\n        ],\n        "initial_deposit": [\n          {\n            "denom": "atom",\n            "amount": 100.01\n          }\n        ]\n      }\n    ]\n  },\n  "auth_info": {\n    "signer_infos": [\n      {\n        "public_key": "iQ...==",\n        "mode_info": { "single": { "mode": "SIGN_MODE_TEXTUAL" } },\n        "sequence": 2\n      },\n      {\n        "public_key": "iR...==",\n        "mode_info": { "single": { "mode": "SIGN_MODE_DIRECT" } },\n        "sequence": 42\n      }\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "atom",\n          "amount": 0.002\n        }\n      ],\n      "gas_limit": 100000\n    }\n  },\n  // Additional SignerData.\n  "chain_id": "simapp-1",\n  "account_number": 10\n}\n}\n')),(0,i.kt)("p",null,"SIGN_MODE_TEXTUAL for 1st signer ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos1...abc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Chain ID: simapp-1\nAccount number: 10\n*Public Key: iQ...==\nSequence: 2\nThis transaction has 2 messages:\nMessage (1/2): bank v1beta1 send coins\nFrom: cosmos1...abc\nTo: cosmos1...def\nAmount: 10 atom\nMessage (2/2): gov v1 submit proposal\nMessages: 2 Messages\n> Message (1/2): bank v1beta1 send coins\n> From: cosmos1...jkl\n> To: cosmos1...mno\n> Amount: 20 atom\n> Message (2/2): authz v1beta exec\n> Grantee: cosmos1...pqr\n> Msgs: 2 Msgs\n>> Msg (1/2): bank v1beta1 send coins\n>> From: cosmos1...stu\n>> To: cosmos1...vwx\n>> Amount: 30 atom\n>> Msg (2/2): bank v1beta1 send coins\n>> From: cosmos1...abc\n>> To: cosmos1...def\n>> Amount: 40 atom\n> End of Msgs\nEnd of transaction messages\nProposer: cosmos1...ghi\nInitial Deposit: 100.01 atom\nEnd of transaction messages\nFee: 0.002 atom\n*Gas: 100'000\n*This transaction has 1 other signer:\n*Signer (2/2):\n*Public Key: iR...==\n*Sign mode: Direct\n*Sequence: 42\n*End of other signers\n*Hash of raw bytes: <hex_string>\n")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"SIGN_MODE_TEXTUAL is purely additive, and doesn't break any backwards compatibility with other sign modes."),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Human-friendly way of signing in hardware devices."),(0,i.kt)("li",{parentName:"ul"},"Once SIGN_MODE_TEXTUAL is shipped, SIGN_MODE_LEGACY_AMINO_JSON can be deprecated and removed. On the longer term, once the ecosystem has totally migrated, Amino can be totally removed.")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some fields are still encoded in non-human-readable ways, such as public keys in hexadecimal."),(0,i.kt)("li",{parentName:"ul"},"New ledger app needs to be released, still unclear")),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the transaction is complex, the string array can be arbitrarily long, and some users might just skip some screens and blind sign.")),(0,i.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some details on value renderers need to be polished, see ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/architecture/adr-050-sign-mode-textual-annex1"},"Annex 1"),"."),(0,i.kt)("li",{parentName:"ul"},"Are ledger apps able to support both SIGN_MODE_LEGACY_AMINO_JSON and SIGN_MODE_TEXTUAL at the same time?"),(0,i.kt)("li",{parentName:"ul"},"Open question: should we add a Protobuf field option to allow app developers to overwrite the textual representation of certain Protobuf fields and message? This would be similar to Ethereum's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs/pull/4430"},"EIP4430"),", where the contract developer decides on the textual representation."),(0,i.kt)("li",{parentName:"ul"},"Internationalization.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/v0.47/architecture/adr-050-sign-mode-textual-annex1"},"Annex 1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Initial discussion: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6513"},"https://github.com/cosmos/cosmos-sdk/issues/6513"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Living document used in the working group: ",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/fsZAO-TfT0CKmLDtfMcKeA?both"},"https://hackmd.io/fsZAO-TfT0CKmLDtfMcKeA?both"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Working group meeting notes: ",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/7RkGfv_rQAaZzEigUYhcXw"},"https://hackmd.io/7RkGfv_rQAaZzEigUYhcXw"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Ethereum\'s "Described Transactions" ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/pull/4430"},"https://github.com/ethereum/EIPs/pull/4430")))))}p.isMDXComponent=!0}}]);