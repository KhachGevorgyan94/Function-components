import './style.scss'

export const Modal = ({onClose, title, children}) => {


    return <div className="modalContainer">
        <div className='modal-bg' onClick={onClose}></div>
        <div className="modal">
            <div className='modal-header'>
                {title ? <h3>{title}</h3> : null}
                <span onClick={onClose}>X</span>
            </div>
            <div className='modal-body'>
                {children}
            </div>
        </div>
    </div>
}