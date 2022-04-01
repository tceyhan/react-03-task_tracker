import DeleteAll from "./DeleteAll";



const Footer = ({setTasks}) => {

    // DELETE ALL TASKS
  let deleteAlltasks = () =>setTasks([]); 

  return (
    <div className="footer">
        <DeleteAll deleteAlltasks={deleteAlltasks} />       
    </div>
  )
}

export default Footer;