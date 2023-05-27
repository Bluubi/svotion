const EXTRA_LIMIT = 5;
const SIZE_REM = 16;
let handle = false;

export function resizeCol(node){
    let zoneAction = false;

    listenToMouseHandleClick();

    trackMouseMove(node, zoneAction);

    trackMouseOutElement(node);

}

function trackMouseOutElement(node: any) {
    node.addEventListener('mouseout', (_) => {
        document.body.style.cursor = '';

    });
}

function trackMouseMove(node: any, zoneAction: boolean) {
    document.addEventListener('mousemove', (event) => {
        const limit = node.getBoundingClientRect().width;
        const leftLimit = limit + EXTRA_LIMIT;
        const rightLimit = limit - EXTRA_LIMIT;
        const mousePositionAxisX = event.pageX;

        zoneAction = mousePositionAxisX <= leftLimit && mousePositionAxisX >= rightLimit;
        if (zoneAction) {
            document.body.style.cursor = 'col-resize';
            node.classList.add('resizing');
            if (handle) {
                const result = mousePositionAxisX / SIZE_REM;
                node.style.width = result + 'rem';
            }
        } else {
            node.classList.remove('resizing');
            document.body.style.cursor = '';
        }
    });
}

function listenToMouseHandleClick(){
    document.addEventListener('mousedown', (event) => {
        handle = true;
    })

    document.addEventListener('mouseup', () => {
        handle = false;
    })
}
