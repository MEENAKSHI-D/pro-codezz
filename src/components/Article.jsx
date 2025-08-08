export default function Article()
{
    return(
        <article className="container justify-center flex mx-auto p-6">
            <div className="flex shadow-lg bg-white p-4" >
         <h2 className="text-2xl font-bold ">Latest News</h2>
                <img className="rounded-lg " src="https://tse3.mm.bing.net/th/id/OIP.nHUnHfqAHm0ewYIRgxClTQHaEK?pid=Api&P=0&h=180"/>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">🚀Vite is Revolutionization Frontend</h2>
                    <p className="text-gray-600 mt-3">Vite is a  next-gen frontend tool that delivers fast development</p>
                </div>
            </div>
        </article>

    );
    
}