import { Link } from 'react-router-dom'
import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { IoExtensionPuzzleOutline, IoDocumentTextOutline } from 'react-icons/io5'

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/blocks">
          <IoExtensionPuzzleOutline /> Blocks
        </Link>
      </li>
      <li>
        <Link to="/pages">
          <IoDocumentTextOutline /> Pages
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <AiOutlineUser /> Blog
        </Link>
      </li>
      <li>
        <Link to="/users">
          <AiOutlineUser /> Collaborateurs
        </Link>
      </li>
      <li>
        <Link to="/settings">
          <AiOutlineSetting /> Paramètres
        </Link>
      </li>
    </ul>
  )
}
