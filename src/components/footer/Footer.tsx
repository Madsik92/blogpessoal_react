import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
    <>
    <div className = "w-screen flex justify-center bg-pink-800 text-stone-50 font-sora" >
            <div className="text-xs container flex flex-col items-center py-4">
                <p className='md:text-base'>
                    Jessica Rosário | Copyright: {data}
                </p>
                <p>Acesse minhas redes sociais</p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/jessica-rosario-" target='_blank'>
                        <LinkedinLogo size={35} weight='light'/>
                    </a>
                    <a href="https://www.instagram.com/mad.sik/" target='_blank'>
                        <InstagramLogo size={35} weight='light'/>
                    </a>
                    <a href="https://github.com/Madsik92" target='_blank'>
                        <GithubLogo size={35} weight='light'/>
                    </a>                    
                    
                </div>

                <p className='pt-3'>Ilustrações editadas a partir de recursos de <a href="https://www.freepik.com/" target="_blank" rel="noopener">Freepik</a></p>
            </div>
        </div >
    </>
        
        
    )
}

export default Footer