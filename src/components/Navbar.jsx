import{
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope
} from "react-icons/fa"

export default function Navbar()
{
    return <nav className="bg-blue-950 text-white">
    <div className="container flex justify-around items-center p-3">
        <h1 className="font-bold text-2xl font-mono">🚀Codezzz</h1>
    <ul className="flex space-x-6">
        <li> <a href=""className="flex items-center gap-1 hover:text-blue-400"><FaHome/>Home</a></li>
        <li><a href=""className="flex items-center gap-1 hover:text-blue-400"><FaInfoCircle/>About</a></li>
        <li><a href=""className="flex items-center gap-1 hover:text-blue-400"><FaServicestack/>Services</a></li>
        <li><a href="" className="flex items-center gap-1 hover:text-blue-400"> <FaEnvelope/>Contact</a></li>
    </ul>
    </div>
    </nav>
}