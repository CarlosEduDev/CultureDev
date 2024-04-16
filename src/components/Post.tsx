import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comments } from './Comments'
import styles from './Post.module.css'


export function Post(props:any){

    const publishedDateFormat = format(props.publishedAt, "d 'de' LLLL 'de' 2024 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar hasBorder={false} src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }
                })}
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    
                    <textarea
                    placeholder='Deixe um comentário'
                    />

                    <footer>
                    <button type='submit'>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comments
                     name='João'
                     comment='Meus parabéns!'
                     avatarUrl='https://github.com/Tom.png'
                     likes='16'
                     />
                    <Comments
                     name='Julia'
                     comment='Continue assim!'
                     avatarUrl='https://github.com/Julia.png'
                     likes='20'
                     />
                    <Comments
                     name='Luan'
                     comment='Muito bom, parabéns!'
                     avatarUrl='https://github.com/Diego.png'
                     likes='74'
                     />
                </div>
        </article>
    )
}