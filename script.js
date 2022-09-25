// Create 16x16 grid of square divs
function populateGrid (numberSquares) {

    const container = document.querySelector('.container');
    let singleSquareWidth = (500 / numberSquares) - 2;

    for (let i = 1; i <= numberSquares * numberSquares; i++){

        const single_square = document.createElement('div');

        // single_square.style.cssText = "border: 1px solid black; width: 31; height: 31";
        single_square.style.border = '1px solid black';
        single_square.style.width = `${singleSquareWidth}px`; // 2px for borders
        single_square.style.height = `${singleSquareWidth}px`; // 2px for borders

        container.appendChild(single_square);
    };
};

populateGrid(16);