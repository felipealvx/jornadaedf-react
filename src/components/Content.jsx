import { faBook, faFilePdf, faPen } from "@fortawesome/free-solid-svg-icons";
import Linkcard from "./elements/Linkcard";
import Maintext from "./elements/Maintext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content () {
  return (
    <div className="
    w-full
    h-full
    bg-gradient-to-b
    from-white
    to-purple-300
    ">
      <div className="
      flex
      content-center
      flex-col
      justify-center
      ">
        <Maintext />

        <Linkcard href={"https://forms.gle/UvAZVtM4tv9KnAT7A"} text={"INSCRIÇÃO NO EVENTO"} icon={<FontAwesomeIcon icon={faBook} />}/>
        <Linkcard href={"https://forms.gle/yagQx8F8KMhC9hCi7"} text={"SUBMISSÃO"} icon={<FontAwesomeIcon icon={faPen} />}/>
        <Linkcard href={""} text={"EDITAL"} icon={<FontAwesomeIcon icon={faFilePdf}/>} />
      </div>
    </div>
  )
}
export default Content;