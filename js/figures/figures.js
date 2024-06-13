 export const area = new Array(42).fill(0).map(()=>new Array(21).fill(0));


 let square = [
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }],
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }],
   
    
];
let line = [
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }]
];
let corner = [
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }],
    [{block:"active",
      cube:1,
    },{block:"active",
        cube:0,
      },{block:"active",
      cube:0,
    }]
];
let z = [
    [{block:"active",
      cube:0,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }],
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:0,
    }]
];
let t = [ 
    [{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:1,
    }],
    [{block:"active",
      cube:0,
    },{block:"active",
      cube:1,
    },{block:"active",
      cube:0,
    }]
];
export {square,line,z,t,corner};