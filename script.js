let bitcoin = document.getElementById('bitcoin');
let dollars = document.getElementById('dollars');
let btcOut = document.getElementById('btcOut');

const getEmotion = (btc) => {
    switch (true) {
        case btc >= 5:
            return '🤑🤑🤑';
        case btc >= 1:
            return '🤑';
        case btc >= 0.5:
            return '🙂';
        case btc >= 0.005:
            return '😟';
        case btc === 0:
            return '😭';
        default:
            return '😶'
    }
}

bitcoin.addEventListener('keyup', (e) => {
    calc();
});
dollars.addEventListener('keyup', (e) => {
    calc();
});


function calc() {
    const btcPrice = parseFloat(bitcoin.value);
    const dollarCount = parseFloat(dollars.value);
    if (btcPrice && dollarCount) {
        const btc = dollarCount / btcPrice;
        showBtc(btc);
    } else {
        showBtc(0);
    }
}

function showBtc(btc) {
    btcOut.innerText = Math.floor(btc * 10000000) / 10000000
    document.getElementById('emoji').innerText = getEmotion(btc);
}

function validate(evt) {
    const theEvent = evt;

    let key;
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
        key = String.fromCharCode(theEvent.keyCode)
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


