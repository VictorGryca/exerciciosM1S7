
function MultiplicarMatrizesInvestimento(A, B){

    const linhasA = A.length;
    const colunasA = A[0].length;
    const linhasB = B.length;
    const colunasB = B[0].length;
  
    if (colunasA !== linhasB) {
      console.log("Número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B.");
    }
  
    const resultado = new Array(linhasA).fill(0).map(() => new Array(colunasB).fill(0));
  
    for (let i = 0; i < linhasA; i++) {
      for (let j = 0; j < colunasB; j++) {
        for (let k = 0; k < colunasA; k++) {
          resultado[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    console.log(resultado);

}

const matrizA = [[1,2],[3,4],[5,6]]
const matrizB = [[7,8,9,10],[11,12,13,14]]
MultiplicarMatrizesInvestimento(matrizA, matrizB)