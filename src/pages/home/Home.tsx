
function Home() {
    return (
        <>
        <div className="max-w-screen flex justify-center bg-neutral-200">
            <div className="container grid grid-cols-1 md:grid-cols-2 text-stone-800">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center gap-4 px-4 py-4">
                    <h2 className="text-4xl font-bold">Olá, Humano!</h2>
                    <p className="flex text-center text-xl font-bold">Carregando ideias... O que você está pensando agora?</p>

                    <div className="flex justify-around gap-4">
                        <div className="bg-neutral-400 rounded-2xl px-6 py-2 text-stone-50 font-bold hover:bg-cyan-700">
                            Nova postagem
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src="https://ik.imagekit.io/madsik/REACT/ROBO.svg?updatedAt=1739574756106"
                        alt="imagem da pagina home"
                        className="w-3/4"
                    />
                </div>


            </div>

        </div>
        </>
        
    )
}

export default Home
