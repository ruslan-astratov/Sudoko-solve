function solve(boardString) {


  // Создаю пустой массив, в который буду складывать все ИНДЕКСЫ элементов  ( найденные в конкретном квадрате символы прочерка "-")
  // let arrForIndex = []






  // Я хочу разбить входящую строку на МАССИВ, который в свою очередь я превращу в отдельные квадраты, чтобы потом эти значения в этих квадратах проверять на уникальность
  let a = boardString.split("")

  // Из полученного ранее массива делаю 9 квдаратов 

  let square1 = [ 
    a[0], a[1], a[2],
    a[9], a[10], a[11],
    a[18], a[19], a[20],
  ]

  let square2 = [ 
    a[3], a[4], a[5],
    a[12], a[13], a[14],
    a[21], a[22], a[23],
  ]

  let square3 = [ 
    a[6], a[7], a[8],
    a[15], a[16], a[17],
    a[24], a[25], a[26],
  ]


  let square4 = [ 
    a[27], a[28], a[29],
    a[36], a[37], a[38],
    a[45], a[46], a[47],
  ]

  let square5 = [ 
    a[30], a[31], a[32],
    a[39], a[40], a[41],
    a[48], a[49], a[50],
  ]

  let square6 = [ 
    a[33], a[34], a[35],
    a[42], a[43], a[44],
    a[51], a[52], a[53],
  ]


  let square7 = [ 
    a[54], a[55], a[56],
    a[63], a[64], a[65],
    a[72], a[73], a[74],
  ]


  let square8 = [ 
    a[57], a[58], a[59],
    a[66], a[67], a[68],
    a[75], a[76], a[77],
  ]



  let square9 = [ 
    a[60], a[61], a[62],
    a[69], a[70], a[71],
    a[78], a[79], a[80],
  ]


  // Теперь разобью массив на ГОРИЗОНТАЛЬНЫЕ СТРОКИ.  На 9 горизонтальных строк

  let string1 = [ a[ 0 ], a[ 1 ], a[ 2 ], a[ 3 ], a[ 4 ], a[ 5 ], a[ 6 ], a[ 7 ], a[ 8 ]]



  let string2 = [ a[ 9 ], a[ 10 ], a[ 11 ], a[ 12 ], a[ 13 ], a[ 14 ], a[ 15 ], a[ 16 ], a[ 17 ] ]



  let string3 = [ a[ 18 ], a[ 19 ], a[ 20 ], a[ 21 ], a[ 22 ], a[ 23 ], a[ 24 ], a[ 25 ], a[ 26 ] ]



  let string4 = [ a[ 27 ], a[ 28 ], a[ 29 ], a[ 30 ], a[ 31 ], a[ 32 ], a[ 33 ], a[ 34 ], a[ 35 ] ]



  let string5 = [ a[ 36 ], a[ 37 ], a[ 38 ], a[ 39 ], a[ 40 ], a[ 41 ], a[ 42 ], a[ 43 ], a[ 44 ] ]




  let string6 = [ a[ 45 ], a[ 46 ], a[ 47 ], a[ 48 ], a[ 49 ], a[ 50 ], a[ 51 ], a[ 52 ], a[ 53 ] ]



  let string7 = [ a[ 54 ], a[ 55 ], a[ 56 ], a[ 57 ], a[ 58 ], a[ 59 ], a[ 60 ], a[ 61 ], a[ 62 ] ]



  let string8 = [ a[ 63 ], a[ 64 ], a[ 65 ], a[ 66 ], a[ 67 ], a[ 68 ], a[ 69 ], a[ 70 ], a[ 71 ] ]



  let string9 = [ a[ 72 ], a[ 73 ], a[ 74 ], a[ 75 ], a[ 76 ], a[ 77 ], a[ 78 ], a[ 79 ], a[ 80 ] ]
  //    //   РАЗБИЛ  массив на ГОРИЗОНТАЛЬНЫЕ СТРОКИ.  На 9 горизонтальных строк






  // Разобью массив на 9 ВЕРТИКАЛЬНЫХ СТОЛБЦОВ
  let column1 = [ a[ 0 ], a[ 9 ], a[ 18 ], a[ 27 ], a[ 36 ], a[ 45 ], a[ 54 ], a[ 63 ], a[ 72 ] ]


  let column2 = [ a[ 1 ], a[ 10 ], a[ 19 ], a[ 28 ], a[ 37 ], a[ 46 ], a[ 55 ], a[ 64 ], a[ 73 ] ]


  let column3 = [ a[ 2 ], a[ 11 ], a[ 20 ], a[ 29 ], a[ 38 ], a[ 47 ], a[ 56 ], a[ 65 ], a[ 74 ] ]


  let column4 = [ a[ 3 ], a[ 12 ], a[ 21 ], a[ 30 ], a[ 39 ], a[ 48 ], a[ 57 ], a[ 66 ], a[ 75 ] ]


  let column5 = [ a[ 4 ], a[ 13 ], a[ 22 ], a[ 31 ], a[ 40 ], a[ 49 ], a[ 58 ], a[ 67 ], a[ 76 ] ]


  let column6 = [ a[ 5 ], a[ 14 ], a[ 23 ], a[ 32 ], a[ 41 ], a[ 50 ], a[ 59 ], a[ 68 ], a[ 77 ] ]

 

  let column7 = [ a[ 6 ], a[ 15 ], a[ 24 ], a[ 33 ], a[ 42 ], a[ 51 ], a[ 60 ], a[ 69 ], a[ 78 ] ]




  let column8 = [ a[ 7 ], a[ 16 ], a[ 25 ], a[ 34 ], a[ 43 ], a[ 52 ], a[ 61 ], a[ 70 ], a[ 79 ] ]


  let column9 = [ a[ 8 ], a[ 17 ], a[ 26 ], a[ 35 ], a[ 44 ], a[ 53 ], a[ 62 ], a[ 71 ], a[ 80 ] ]

  //  //  Разобью массив на 9 ВЕРТИКАЛЬНЫХ СТОЛБЦОВ




  
  // Квадрат, строку и столбец  объединяет то, что в них лежат общие индексы.  А ещё то, что под индексом, например a[0] может скрываться  знак прочерка "-"

  // Нужно вместо a[0] по очереди подставлять цифры с 1 по 9  и смотреть - являются ли эти цифры уникальными для КВАДРАТА , СТРОКИ, СТОЛБЦА

  // Циклом for проверю СНАЧАЛА      КВАДРАТ , затем СТРОКУ, затем СТОЛБЕЦ

  for( i = 0; i <= 80; i++ ) {

    // Переменная-триггер для КВАДРАТА.  Если в квадрате под прочерком "-" мы подставим число, и это число будет единственным в квадрате, то позже в переменную запишется логическое true
    let isSquareUniq


    // Квадрат.   Находим по порядку каждый элемент..
    let findedElementInSquare = square1.find( item => item == a[i] )

    // ..и его индекс
    let findedIndexElementInSquare = square1.findIndex( item => item == a[i] )



    //.. затем проверяем - не лежит ли в этом элементе прочерк   "-"  

    // Если лежит, значит,  в КВАДРАТЕ   вместо  прочерка    подставляем одно из значений (с 1 по 9), а затем проверяем КВАДРАТ, СТОЛБЕЦ и СТРОКУ на уникальность элементов 
    if(findedElementInSquare == "-") {

      // Ещё один цикл for.  С его помощью мы подставим В КВАДРАТЕ, ВМЕСТО ПРОЧЕРКА  каждое число  с 1 по 9 по очереди, а затем будем проверять уникальность этих чисел 
      // В КВАДРАТЕ ,  затем в СТРОКЕ,   затем в СТОЛБЦЕ 

      for( j = 1; j < 10; j++ ) {

        // Например, меняем прочерк   на 1  (при следующей итерации будет цифра 2 , затем 3 ,   и так далее)
        square1[findedIndexElementInSquare] = j

        // Теперь нужно проверить - есть ли в КВАДРАТЕ ещё одна  цифра 1
        let arrayWithDublicate = square1.filter( item => item == j)

        // Если длина массива arrWithNumbers  равна 1, это будет значить, что это значение уникально для квадрата, и нужно проверять СТРОКУ и СТОЛБЕЦ
        if(arrayWithDublicate.length == 1) {

          isSquareUniq = true

        } 

      }

      
      // Здесь должен быть аналогичный код, проверяющий СТРОКУ, содержащую a[i]



    }


  }





  

  // Найди и выведи мне элемент, который скрывается в КВАДРАТЕ    под индексом a[1]
  // console.log( square1.find(item => item == a[1]) )


}

//     0123445
solve("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--") 


//      1 - 5     8 - 2     - - -
//      - 9 -     - 7 6     4 - 5
//      2 - -     4 - -     8 1 9


//      - 1 9     - - 7     3 - 6
//      7 6 2     - 8 3     - 9 -
//      - - -     - 6 1     - 5 -


//      - - 7     6 - -     - 3 -
//      4 3 -     - 2 -     5 - 1
//      6 - -     3 - 8     9 - -























// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
