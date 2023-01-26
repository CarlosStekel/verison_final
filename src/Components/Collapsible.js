import { useRef, useState } from "react"

const Collapsible = ({title, children}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  if (contentRef.current) console.log(contentRef.current.scrollHeight);  

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <button onClick={toggle}> {title} </button>
      {open && (
        <div className={open ? "content-show" : "content-parent"}>
          <div className="content"> {children} </div>
        </div>
      )}
    </div>
  )  
}

export default Collapsible