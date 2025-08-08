import { FaBook, FaReact, FaRocket } from "react-icons/fa";

export default function Aside()
{
    return(
        <aside className="container bg-gray-200 p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">📌Related Links</h2>
            <ul className="space-y-2 mt-2">
                <li>
                    <a href="" 
                    className="flex items-center text-blue-500 gap-1 hover:underline">
                        <FaBook />
                        Vite Documentation

                    </a>
                </li>
            </ul>
            <ul className="space-y-2 mt-2">
                <li>
                    <a href="" 
                    className="flex items-center text-blue-500 gap-1 hover:underline">
                        <FaReact />
                        React Guide

                    </a>
                </li>
            </ul>
            <ul className="space-y-2 mt-2">
                <li>
                    <a href="" 
                    className="flex items-center text-blue-500 gap-1 hover:underline">
                        <FaRocket />
                        Frontend Trends

                    </a>
                </li>
            </ul>
        </aside>
    );
}