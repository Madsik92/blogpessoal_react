
function Home() {
    return (
        <>
        <div className="w-screen flex justify-center bg-gradient-to-b from-neutral-100 to-neutral-300">
            <div className="font-sora container grid grid-cols-1 md:grid-cols-2 text-stone-800">
                <div className="antialiased font-medium order-2 md:order-1 flex flex-col items-center justify-center gap-4 px-4 py-4">
                    <h2 className="text-3xl md:font-bold">Olá, Humano!</h2>
                    <div className="flex-col text-center text-xl">
                        <p>Carregando ideias... </p>
                        <p>O que você está pensando agora?</p>
                    </div>
                    

                    <div className="flex justify-around gap-4">
                        <div className="bg-neutral-400 rounded-2xl px-6 py-2 uppercase text-stone-50 text-base hover:bg-cyan-700 duration-500 cursor-pointer">
                            Nova postagem
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src="https://ik.imagekit.io/madsik/REACT/ROBOfinishV3.svg?updatedAt=1739647490337"
                        alt="Colagens de imagens do Freepik. Uso na página home."
                        className="w-2/3 py-5"
                    />
                </div>


            </div>

        </div>
        </>
        
    )
}

export default Home
