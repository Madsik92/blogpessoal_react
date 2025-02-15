import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <div className = "flex justify-center bg-pink-800 text-stone-50" >
            <div className="container flex flex-col items-center py-4">
                <p className='text-base'>
                    Jessica Rosário | Copyright: {data}
                </p>
                <p className='text-base'>Acesse minhas redes sociais</p>
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
        
    )
}

export default Footer