import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'

interface CommentProps{
    name: string,
    avatarUrl: string,
    comment: string
    likes: string
}

export function Comments(props: CommentProps){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder src={props.avatarUrl}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.name}</strong>
                            <time title='10 de Abril de 2024' dateTime='2024-04-10 16:50'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{props.comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Like <span>{props.likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}