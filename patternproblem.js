// function printRectangle(n, t) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 if (t === "a") {
//                     // Print letters based on column index
//                     let char = String.fromCharCode(96 + j); // 96 is ASCII for 'a'
//                     row += char;
//                 } else if (t === 1) {
//                     // Print numbers based on column index
//                     row += j;
//                 // row += "*";
//                 }
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// }

// const n = 3;
// const t = 1;
// printRectangle(n, t);


// function printRectangle(n, t) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 if (t === "a") {
//                     // Print letters based on column index
//                     let char = String.fromCharCode(96 + j); // 'a' corresponds to ASCII 97
//                     row += char;
//                 } else if (t === 1) {
//                     // Print numbers based on the edge position
//                     if (i === 1) {
//                         row += j; // Top edge
//                     } else if (i === n) {
//                         row += n - j + 1; // Bottom edge
//                     } else if (j === 1) {
//                         row += i; // Left edge
//                     } else if (j === n) {
//                         row += n - i + 1; // Right edge
//                     }
//                 }
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// }

// const n = 4;
// const t = "a";
// // const t = 1;
// printRectangle(n, t);



function printRectangle(n, t) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                if (t === "a") {
                    // Print letters based on column index
                    let char = String.fromCharCode(96 + j); // 'a' corresponds to ASCII 97
                    if (i === 1) {
                        row += char; // Top edge
                    } else if (i === n) {
                        row += String.fromCharCode(96 + n - j + 1); // Bottom edge
                    } else if (j === 1) {
                        row += String.fromCharCode(96 + i); // Left edge
                    } else if (j === n) {
                        row += String.fromCharCode(96 + n - i + 1); // Right edge
                    }
                    
                } else if (t === 1) {
                    // Print numbers based on the edge position
                    if (i === 1) {
                        row += j; // Top edge
                    } else if (i === n) {
                        row += n - j + 1; // Bottom edge
                    } else if (j === 1) {
                        row += i; // Left edge
                    } else if (j === n) {
                        row += n - i + 1; // Right edge
                    }
                }
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

const n = 10;
const t = "a";
// const t = 1;
printRectangle(n, t);