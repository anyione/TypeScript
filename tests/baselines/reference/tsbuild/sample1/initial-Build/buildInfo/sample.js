//// [/src/core/anotherModule.d.ts]
export declare const World = "hello";
//# sourceMappingURL=anotherModule.d.ts.map

//// [/src/core/anotherModule.d.ts.map]
{"version":3,"file":"anotherModule.d.ts","sourceRoot":"","sources":["anotherModule.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,KAAK,UAAU,CAAC"}

//// [/src/core/anotherModule.d.ts.map.baseline.txt]
===================================================================
JsFile: anotherModule.d.ts
mapUrl: anotherModule.d.ts.map
sourceRoot: 
sources: anotherModule.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/core/anotherModule.d.ts
sourceFile:anotherModule.ts
-------------------------------------------------------------------
>>>export declare const World = "hello";
1 >
2 >^^^^^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^^^^^
5 >                          ^^^^^^^^^^
6 >                                    ^
7 >                                     ^^^^^->
1 >
2 >export 
3 >               const 
4 >                     World
5 >                           = "hello"
6 >                                    ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 16) Source(1, 8) + SourceIndex(0)
3 >Emitted(1, 22) Source(1, 14) + SourceIndex(0)
4 >Emitted(1, 27) Source(1, 19) + SourceIndex(0)
5 >Emitted(1, 37) Source(1, 29) + SourceIndex(0)
6 >Emitted(1, 38) Source(1, 30) + SourceIndex(0)
---
>>>//# sourceMappingURL=anotherModule.d.ts.map

//// [/src/core/anotherModule.js]
"use strict";
exports.__esModule = true;
exports.World = "hello";


//// [/src/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
//# sourceMappingURL=index.d.ts.map

//// [/src/core/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,UAAU,EAAE,MAAsB,CAAC;AAChD,wBAAgB,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAC/D,wBAAgB,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB"}

//// [/src/core/index.d.ts.map.baseline.txt]
===================================================================
JsFile: index.d.ts
mapUrl: index.d.ts.map
sourceRoot: 
sources: index.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/core/index.d.ts
sourceFile:index.ts
-------------------------------------------------------------------
>>>export declare const someString: string;
1 >
2 >^^^^^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^^^^^^^^^^
5 >                               ^^
6 >                                 ^^^^^^
7 >                                       ^
8 >                                        ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >export 
3 >               const 
4 >                     someString
5 >                               : 
6 >                                 string = "HELLO WORLD"
7 >                                       ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 16) Source(1, 8) + SourceIndex(0)
3 >Emitted(1, 22) Source(1, 14) + SourceIndex(0)
4 >Emitted(1, 32) Source(1, 24) + SourceIndex(0)
5 >Emitted(1, 34) Source(1, 26) + SourceIndex(0)
6 >Emitted(1, 40) Source(1, 48) + SourceIndex(0)
7 >Emitted(1, 41) Source(1, 49) + SourceIndex(0)
---
>>>export declare function leftPad(s: string, n: number): string;
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^
4 >                               ^
5 >                                ^
6 >                                 ^^
7 >                                   ^^^^^^
8 >                                         ^^
9 >                                           ^
10>                                            ^^
11>                                              ^^^^^^
12>                                                    ^^^^^^^^^^
13>                                                              ^^->
1->
  >
2 >export function 
3 >                        leftPad
4 >                               (
5 >                                s
6 >                                 : 
7 >                                   string
8 >                                         , 
9 >                                           n
10>                                            : 
11>                                              number
12>                                                    ) { return s + n; }
1->Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 25) Source(2, 17) + SourceIndex(0)
3 >Emitted(2, 32) Source(2, 24) + SourceIndex(0)
4 >Emitted(2, 33) Source(2, 25) + SourceIndex(0)
5 >Emitted(2, 34) Source(2, 26) + SourceIndex(0)
6 >Emitted(2, 36) Source(2, 28) + SourceIndex(0)
7 >Emitted(2, 42) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 44) Source(2, 36) + SourceIndex(0)
9 >Emitted(2, 45) Source(2, 37) + SourceIndex(0)
10>Emitted(2, 47) Source(2, 39) + SourceIndex(0)
11>Emitted(2, 53) Source(2, 45) + SourceIndex(0)
12>Emitted(2, 63) Source(2, 64) + SourceIndex(0)
---
>>>export declare function multiply(a: number, b: number): number;
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^
3 >                        ^^^^^^^^
4 >                                ^
5 >                                 ^
6 >                                  ^^
7 >                                    ^^^^^^
8 >                                          ^^
9 >                                            ^
10>                                             ^^
11>                                               ^^^^^^
12>                                                     ^^^^^^^^^^
1->
  >
2 >export function 
3 >                        multiply
4 >                                (
5 >                                 a
6 >                                  : 
7 >                                    number
8 >                                          , 
9 >                                            b
10>                                             : 
11>                                               number
12>                                                     ) { return a * b; }
1->Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 25) Source(3, 17) + SourceIndex(0)
3 >Emitted(3, 33) Source(3, 25) + SourceIndex(0)
4 >Emitted(3, 34) Source(3, 26) + SourceIndex(0)
5 >Emitted(3, 35) Source(3, 27) + SourceIndex(0)
6 >Emitted(3, 37) Source(3, 29) + SourceIndex(0)
7 >Emitted(3, 43) Source(3, 35) + SourceIndex(0)
8 >Emitted(3, 45) Source(3, 37) + SourceIndex(0)
9 >Emitted(3, 46) Source(3, 38) + SourceIndex(0)
10>Emitted(3, 48) Source(3, 40) + SourceIndex(0)
11>Emitted(3, 54) Source(3, 46) + SourceIndex(0)
12>Emitted(3, 64) Source(3, 65) + SourceIndex(0)
---
>>>//# sourceMappingURL=index.d.ts.map

//// [/src/core/index.js]
"use strict";
exports.__esModule = true;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;


//// [/src/core/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.d.ts": {
        "version": "/lib/lib.d.ts",
        "signature": "/lib/lib.d.ts"
      },
      "/lib/lib.es5.d.ts": {
        "version": "/lib/lib.es5.d.ts",
        "signature": "/lib/lib.es5.d.ts"
      },
      "/lib/lib.dom.d.ts": {
        "version": "/lib/lib.dom.d.ts",
        "signature": "/lib/lib.dom.d.ts"
      },
      "/lib/lib.webworker.importscripts.d.ts": {
        "version": "/lib/lib.webworker.importscripts.d.ts",
        "signature": "/lib/lib.webworker.importscripts.d.ts"
      },
      "/lib/lib.scripthost.d.ts": {
        "version": "/lib/lib.scripthost.d.ts",
        "signature": "/lib/lib.scripthost.d.ts"
      },
      "/src/core/anothermodule.ts": {
        "version": "-2676574883",
        "signature": "25219880154"
      },
      "/src/core/index.ts": {
        "version": "-18749805970",
        "signature": "11051732871"
      },
      "/src/core/some_decl.d.ts": {
        "version": "-9253692965",
        "signature": "-9253692965"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "/src/core/tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "/lib/lib.d.ts",
      "/lib/lib.dom.d.ts",
      "/lib/lib.es5.d.ts",
      "/lib/lib.scripthost.d.ts",
      "/lib/lib.webworker.importscripts.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/core/some_decl.d.ts"
    ]
  }
}

//// [/src/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/logic/index.js]
"use strict";
exports.__esModule = true;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
//# sourceMappingURL=index.js.map

//// [/src/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC"}

//// [/src/logic/index.js.map.baseline.txt]
===================================================================
JsFile: index.js
mapUrl: index.js.map
sourceRoot: 
sources: index.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/logic/index.js
sourceFile:index.ts
-------------------------------------------------------------------
>>>"use strict";
>>>exports.__esModule = true;
>>>var c = require("../core/index");
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >import * as c from '../core/index';
1 >Emitted(3, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(3, 34) Source(1, 36) + SourceIndex(0)
---
>>>function getSecondsInDay() {
1 >
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^
4 >                        ^^^^^^^->
1 >
  >
2 >export function 
3 >         getSecondsInDay
1 >Emitted(4, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(4, 10) Source(2, 17) + SourceIndex(0)
3 >Emitted(4, 25) Source(2, 32) + SourceIndex(0)
---
>>>    return c.multiply(10, 15);
1->^^^^
2 >    ^^^^^^^
3 >           ^
4 >            ^
5 >             ^^^^^^^^
6 >                     ^
7 >                      ^^
8 >                        ^^
9 >                          ^^
10>                            ^
11>                             ^
1->() {
  >    
2 >    return 
3 >           c
4 >            .
5 >             multiply
6 >                     (
7 >                      10
8 >                        , 
9 >                          15
10>                            )
11>                             ;
1->Emitted(5, 5) Source(3, 5) + SourceIndex(0)
2 >Emitted(5, 12) Source(3, 12) + SourceIndex(0)
3 >Emitted(5, 13) Source(3, 13) + SourceIndex(0)
4 >Emitted(5, 14) Source(3, 14) + SourceIndex(0)
5 >Emitted(5, 22) Source(3, 22) + SourceIndex(0)
6 >Emitted(5, 23) Source(3, 23) + SourceIndex(0)
7 >Emitted(5, 25) Source(3, 25) + SourceIndex(0)
8 >Emitted(5, 27) Source(3, 27) + SourceIndex(0)
9 >Emitted(5, 29) Source(3, 29) + SourceIndex(0)
10>Emitted(5, 30) Source(3, 30) + SourceIndex(0)
11>Emitted(5, 31) Source(3, 31) + SourceIndex(0)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(6, 1) Source(4, 1) + SourceIndex(0)
2 >Emitted(6, 2) Source(4, 2) + SourceIndex(0)
---
>>>exports.getSecondsInDay = getSecondsInDay;
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                          ^^->
1->
2 >export function getSecondsInDay() {
  >    return c.multiply(10, 15);
  >}
1->Emitted(7, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(7, 43) Source(4, 2) + SourceIndex(0)
---
>>>var mod = require("../core/anotherModule");
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1->
  >
2 >import * as mod from '../core/anotherModule';
1->Emitted(8, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(8, 44) Source(5, 46) + SourceIndex(0)
---
>>>exports.m = mod;
1 >
2 >^^^^^^^^
3 >        ^
4 >         ^^^
5 >            ^^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^->
1 >
  >export const 
2 >
3 >        m
4 >          = 
5 >            mod
6 >               ;
1 >Emitted(9, 1) Source(6, 14) + SourceIndex(0)
2 >Emitted(9, 9) Source(6, 14) + SourceIndex(0)
3 >Emitted(9, 10) Source(6, 15) + SourceIndex(0)
4 >Emitted(9, 13) Source(6, 18) + SourceIndex(0)
5 >Emitted(9, 16) Source(6, 21) + SourceIndex(0)
6 >Emitted(9, 17) Source(6, 22) + SourceIndex(0)
---
>>>//# sourceMappingURL=index.js.map

//// [/src/logic/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.d.ts": {
        "version": "/lib/lib.d.ts",
        "signature": "/lib/lib.d.ts"
      },
      "/lib/lib.es5.d.ts": {
        "version": "/lib/lib.es5.d.ts",
        "signature": "/lib/lib.es5.d.ts"
      },
      "/lib/lib.dom.d.ts": {
        "version": "/lib/lib.dom.d.ts",
        "signature": "/lib/lib.dom.d.ts"
      },
      "/lib/lib.webworker.importscripts.d.ts": {
        "version": "/lib/lib.webworker.importscripts.d.ts",
        "signature": "/lib/lib.webworker.importscripts.d.ts"
      },
      "/lib/lib.scripthost.d.ts": {
        "version": "/lib/lib.scripthost.d.ts",
        "signature": "/lib/lib.scripthost.d.ts"
      },
      "/src/core/index.ts": {
        "version": "-13851440507",
        "signature": "-13851440507"
      },
      "/src/core/anothermodule.ts": {
        "version": "7652028357",
        "signature": "7652028357"
      },
      "/src/logic/index.ts": {
        "version": "-5786964698",
        "signature": "-6548680073"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "sourceMap": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "/src/logic/tsconfig.json"
    },
    "referencedMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts",
        "/src/core/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "/lib/lib.d.ts",
      "/lib/lib.dom.d.ts",
      "/lib/lib.es5.d.ts",
      "/lib/lib.scripthost.d.ts",
      "/lib/lib.webworker.importscripts.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/logic/index.ts"
    ]
  }
}

//// [/src/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/tests/index.js]
"use strict";
exports.__esModule = true;
var c = require("../core/index");
var logic = require("../logic/index");
c.leftPad("", 10);
logic.getSecondsInDay();
var mod = require("../core/anotherModule");
exports.m = mod;


//// [/src/tests/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.d.ts": {
        "version": "/lib/lib.d.ts",
        "signature": "/lib/lib.d.ts"
      },
      "/lib/lib.es5.d.ts": {
        "version": "/lib/lib.es5.d.ts",
        "signature": "/lib/lib.es5.d.ts"
      },
      "/lib/lib.dom.d.ts": {
        "version": "/lib/lib.dom.d.ts",
        "signature": "/lib/lib.dom.d.ts"
      },
      "/lib/lib.webworker.importscripts.d.ts": {
        "version": "/lib/lib.webworker.importscripts.d.ts",
        "signature": "/lib/lib.webworker.importscripts.d.ts"
      },
      "/lib/lib.scripthost.d.ts": {
        "version": "/lib/lib.scripthost.d.ts",
        "signature": "/lib/lib.scripthost.d.ts"
      },
      "/src/core/index.ts": {
        "version": "-13851440507",
        "signature": "-13851440507"
      },
      "/src/core/anothermodule.ts": {
        "version": "7652028357",
        "signature": "7652028357"
      },
      "/src/logic/index.ts": {
        "version": "-6548680073",
        "signature": "-6548680073"
      },
      "/src/tests/index.ts": {
        "version": "12336236525",
        "signature": "-9209611"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "/src/tests/tsconfig.json"
    },
    "referencedMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ],
      "/src/tests/index.ts": [
        "/src/core/anothermodule.d.ts",
        "/src/core/index.d.ts",
        "/src/logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ],
      "/src/tests/index.ts": [
        "/src/core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "/lib/lib.d.ts",
      "/lib/lib.dom.d.ts",
      "/lib/lib.es5.d.ts",
      "/lib/lib.scripthost.d.ts",
      "/lib/lib.webworker.importscripts.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/logic/index.ts",
      "/src/tests/index.ts"
    ]
  }
}

