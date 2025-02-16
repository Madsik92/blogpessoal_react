import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
    <>
    <div className = "w-screen flex justify-center bg-pink-800 text-stone-50 font-sora" >
            <div className="text-xs md:text-base container flex flex-col items-center py-4">
                <p>
                    Jessica Rosário | Copyright: {data}
                </p>
                <p>Acesse minhas redes sociais</p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/jessica-rosario-" target='_blank'>
                        <LinkedinLogo size={35} weight='thin'/>
                    </a>
                    <a href="https://www.instagram.com/mad.sik/" target='_blank'>
                        <InstagramLogo size={35} weight='thin'/>
                    </a>
                    <a href="https://github.com/Madsik92" target='_blank'>
                        <GithubLogo size={35} weight='thin'/>
                    </a>                    
                    
                </div>
            </div>
        </div >
    </>
        
        
    )
}

export default Footer