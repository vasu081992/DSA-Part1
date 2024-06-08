

function pattern17(N) {
  // Outer loop for the number of rows.
  for (let i = 0; i < N; i++) {
      let row = '';
      
      // Inner loop for printing the alphabets from
      // 'A' + N - 1 - i (where i is the row number) to 'A' + N - 1.
      for (let j = ('A'.charCodeAt(0) + N - 1) - i; j <= ('A'.charCodeAt(0) + N - 1); j++) {
          row += String.fromCharCode(j) + ' ';
      }
      
      // Print the row and move to the next line.
      console.log(row);
  }
}
  
  pattern17(3);



  



