import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){
    const [commentsMock, setcommentsMock] = useState([1,2]);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setcommentsMock([...commentsMock, commentsMock.length + 1]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(content => {
                        if(content.type === 'paragraph'){
                            return <p>{content.content}</p>
                        }
                        else if(content.type === 'link'){
                            return <p><a href="#">{content.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
             {
                commentsMock.map(comment => {
                    return (
                        <Comment />
                    )
                })
             }
            </div>
        </article>
    )
}