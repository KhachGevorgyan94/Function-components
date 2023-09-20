export const LoginForm = ({onClose}) => {
  const  handleSubmit = ()=>{
      setTimeout(()=>{
          onClose()
      },2000)
  }

    return <div>
        <label>
            <input type="text"/>
        </label>
        <label>
            <input type="text"/>
        </label>
        <div>
            <button onClick={handleSubmit}>Accept</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    </div>
}