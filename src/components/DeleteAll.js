

const DeleteAll = ({deleteAlltasks}) => {

  return (
    <div>
        <button className='deleteAllbutton'  onClick={deleteAlltasks}>Delete All Tasks</button>
    </div>
  )
}

export default DeleteAll;