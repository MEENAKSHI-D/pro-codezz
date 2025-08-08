export default function Tablesec()
{
   
 return(
        <div className="container mx-auto p-6">
            <h2 className=" text-gray-950 font-bold text-2xl">📊User Data</h2>
        <table className="table-auto mx-auto mt-10 border w-1/2 border-gray-300 text-center text-sm ">
            <thead className="bg-gray-100">
                <tr> 
                    <th className="border border-gray-300 px-4 py2">👤 Avatar</th>
                    <th className="border border-gray-300 px-4 py2">⛔Name</th>
                    <th className="border border-gray-300 px-4 py-2">✅Status</th> 
                        
                    </tr>
                        </thead> 
                        <tbody>
                            <tr className="hover:bg-gray-50">
              <td className="border-gray-300 px-4 py-2 border">
             <img className="w-11 h-10 object-cover" src="/images/profile.png" alt="" />
      </td>
      <td className="border border-gray-300 px-4 py-2 font-medium">  Alice
     </td>
    <td className=" border border-gray-300 text-green-600 px-4 py-2 font-semibold">Active</td>
</tr>
     <tr className="hover:bg-gray-50">
         <td className=" border border-gray-300 px-4 py-2">
             <img  className="w-11 mt-6" src="/images/profile.png" alt="" />
             </td>
                <td className="border border-gray-300 px-4 py-2 font-medium">Benita</td>
                <td className="text-red-600 border font-semibold px-4 py-2 border-gray-300"> Inactive</td>
                </tr>
                <tr className="hover:bg-gray-50" >
                 <td className="border border-gray-300 px-4 py-2">
                <img className="w-11 mt-4"src="/images/profile.png"/>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">Jaison</td>
                <td className="text-green-600 border border-gray-300 px-4 py-2 font-semibold">Active</td>
                </tr>
                <tr className="hover:bg-gray-50" >
                 <td className="border border-gray-300 px-4 py-2">
                <img className="w-11 mt-4"src="/images/profile.png"/>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">Priya</td>
                <td className="text-red-600 border border-gray-300 px-4 py-2 font-semibold">Inactive</td>
                </tr>
                <tr className="hover:bg-gray-50" >
                 <td className="border border-gray-300  px-4 py-2">
                <img className="w-11 mt-4"src="/images/profile.png"/>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">Krithik</td>
                <td className="text-green-600 border border-gray-300 px-4 py-2 font-semibold">Active</td>
                </tr>
                <tr className="hover:bg-gray-50" >
                 <td className="border border-gray-300 px-4 py-2">
                <img className="w-11 mt-4"src="/images/profile.png"/>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">Harry</td>
                <td className="text-green-600 border border-gray-300 px-4 py-2 font-semibold">Active</td>
                </tr>
                </tbody>
                </table>       
        </div>
    );
}