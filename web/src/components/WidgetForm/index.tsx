import { CloseButton } from '../CloseButton';
import {useState} from'react'
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedBackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento',
        },
    },
};
//Object.entries(feedbackTypes=>
/**
 * {Retorna um ARRAY de ARRAYS em que o indice 0 é a chave e o 1 é o conteudo da propriedade
 * 
  ['BUG', {...}]} )
  ['IDEA', {...}]} )
  ['THOUGHT', {...}]} )
 }*/
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType]=useState <FeedbackType | null>(null)
    const[feedbackSent, setFeedbackSent]=useState(false)
    function handleRestartFeedback (){
        setFeedbackType(null) 
        setFeedbackSent(false)
        //limpa o state de feedbacktype
    }

    return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto">
            
            { feedbackSent?(
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ):(
                <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={()=> setFeedbackSent(true)}
                />
        )}
                </>
                

            
            )}
        
        <footer className="text-xs text-neutral-400">
        Feito com ❤️ Por <a className="underline underline-offset-2"
        href="https://github.com/adammartinss?tab=repositories">Zangadam</a>
        </footer>
    </div>
        
    );
}
