const Text = (props) => {
    return (
    <div className='paragraph' style={{backgroundColor: '#61dafb', textTransform: 'uppercase'}}>
        <h3>{props.title}</h3>
        <p>{props.title} permitem você dividir a UI em partes independentes e reutilizáveis.</p>
    </div>
    )
}

export default Text