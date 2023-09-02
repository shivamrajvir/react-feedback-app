import spinnerGif from './../assets/spinner.png';

function spinner() {
    return (
        <img src={spinnerGif} alt='loading...' style={{
            width: '100px', margin: 'auto', display: 'block'
        }} />
    )
}

export default spinner