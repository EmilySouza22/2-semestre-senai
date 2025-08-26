import './Sentenca.css'

function Sentenca({emoji, sentenca}) {
  return (
    <p className='container-sentenca'>
        {emoji} {sentenca}
    </p>
  )
}

export default Sentenca