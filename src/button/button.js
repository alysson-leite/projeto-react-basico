import './button.css';

const avisoLabel = () => {
    alert('A label desse botão é BAIXAR CV')
}

const Button = (props) => {
    return (
        <div className='container-btn'>
            <label className='label-btn'>{props.label}</label>
            <button className='btn' onClick={avisoLabel}>Clique aqui</button>
        </div>
    )
}

export default Button