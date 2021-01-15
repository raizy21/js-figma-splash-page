/*********************
 * links
 *
 * {@link} - https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/
 * {@link} - https://www.figma.com/file/4KIM14zOqqIKRuF8kBtHGs/Showcase-Website
 * {@link} - https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots
 * {@link} - https://developers.google.com/web/tools/chrome-devtools/memory-problems
 *********************/

const { body } = document;

/****
 * 
 * memory leaks and heap snapshots
******** */
// let count = 0;

// const ourMemory = {
//     [count]: Array(1000).fill('*')
// }

function changeBackground(number) {
    // count++;
    // ourMemory[count] = Array(1000).fill('*');

    // check if background already showing
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }
    //reset css class for body
    body.className = '';
    switch (number) {
        case '1':
            return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':

            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':

            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        default: break;
    }
}
