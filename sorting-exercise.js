// #1 - Sort 10 schools around your house by distance
// the best sorting algorithm to use is in this case is 
// my answer -> MergeSort because in this case it's a small list 
// correct answer -> Insertion Sort porque es un tamaño de entrada pequeño, y en estos casos este algoritmo es muy eficaz, además si la entrada está (o casi) ordenada será aún más rápido.

// #2 - eBay sorts listings by the current Bid amount
// my answer ->  the best sorting algorithm to use is in this case is QuickSort because in this case it's a large list
// correct Answer -> Radix or Counting Sort porque es un número en un rango, por lo que podremos aprovechar sus rápidas ejecuciones con números, además de ser un valor entero, además de que al ser en eBay no será un valor como un billón, serán valores más pequeños.

// #3 - Sport scores on ESPN
// / my answer ->  the best sorting algorithm to use is in this case is RadixSort because in this case it's a large list and full of integer numbers
// correct Answer ->  Quick Sort porque a veces tiene decimales, distintos formatos para el fútbol, tenis, etc. Será el más eficiente, porque a pesar de preocuparnos en el peor caso porque sus entradas pueden ser distintas, es importante preocuparnos por el espacio en memoria que ocuparemos.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// my answer ->  the best sorting algorithm to use is in this case is HeapSort because in this case it's a large list and full of integer numbers
// correct answer --> Merge Sort porque no estaremos ordenando en memoria debido a que la data es muy grande, y debido a que el tamaño es masivo debemos priorizar la complejidad de tiempo.


// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// my answer -> the best sorting algorithm to use is in this case is InsertionSort because in this case it's a small list and it is almost sorted
// correct answer --> Insertion sort - assuming that most of the previous data is already sorted, insertion sort is the best choice.

// #6 - Temperature Records for the past 50 years in Canada
// my answer -> the best sorting algorithm to use is in this case is RadixSort because in this case it's a large list and full of integer numbers
// correct answer --> Radix or Counting sort if there is no decimal point, otherwise QuickSort because it is a large list and full of integer numbers (save on space complexity)


// #7 - Large user name database needs to be sorted. Data is very random
// my answer -> the best sorting algorithm to use is in this case is QuickSort because in this case it's a large list and full of random data
// correct answer --> Quick sort to save on memory space complexity

// #8 - You want to teach sorting for the first time
// my answer -> the best sorting algorithm to use is in this case is BubbleSort because it is easy to understand and implement
// correct answer --> bubble sort because it is easy to understand and implement