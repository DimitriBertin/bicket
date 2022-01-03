import { Link } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'
import { IoExtensionPuzzleOutline, IoDocumentTextOutline, IoMenu } from 'react-icons/io5'
import { FiUsers, FiSun } from 'react-icons/fi'
import { GoLink } from 'react-icons/go'

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
          <GoLink /> Pages
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <IoDocumentTextOutline /> Blog
        </Link>
      </li>
      <li>
        <Link to="/users">
          <FiUsers /> Collaborateurs
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <IoMenu /> Gestion menu
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <FiSun /> Mon profil
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
