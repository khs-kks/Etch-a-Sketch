// Create 16x16 grid of square divs


function populateGrid (numberSquares) {

    const container = document.querySelector('.container');
    let singleSquareWidth = (500 / numberSquares) - 2;

    for (let i = 1; i <= numberSquares * numberSquares; i++){

        const single_square = document.createElement('div');
        single_square.classList.add('child');

        // single_square.style.cssText = "border: 1px solid black; width: 31; height: 31";
        single_square.style.border = '1px solid black';
        single_square.style.width = `${singleSquareWidth}px`; // 2px for borders
        single_square.style.height = `${singleSquareWidth}px`; // 2px for borders
        single_square.addEventListener('mouseenter', () => {
            single_square.style.backgroundColor = 'black';
            
        })

        container.appendChild(single_square);
    };
};


populateGrid(16);


function removeGrid () {
    const container = document.querySelector('.container');
    const childlist = document.querySelectorAll('.child');
    
        childlist.forEach( (child) => {
            container.removeChild(child);
        });
        return;
    };

//Button

const button = document.querySelector('button');


button.addEventListener('click', () => {
    // let newGrid = 0;
    const answer = Number(prompt("Number of squares per side: ", 16));
    if (answer <= 100 && answer >= 2) {
        removeGrid();
        populateGrid(answer);
    } else {
        alert("Rows must be between 2 and 100 !!!!");
    }
})



// changeColor();