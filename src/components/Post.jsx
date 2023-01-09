import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){
    const [commentsMock, setcommentsMock] = useState([
        'Post muito bacana, parábens! 🔥 🚀',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setcommentsMock([...commentsMock, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity(``);
        setNewCommentText(event.target.value);
    }
    function handleNewCommentInvalid(){
        event.target.setCustomValidity(`Esse campo é obrigatório!`);
    }
    function deleteComment(commentToDelete){
        
        const commentsWithoutDeletedOne = commentsMock.filter(comment => {
            return comment !== commentToDelete;
        });

        setcommentsMock(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                            return (
                                <p key={content.content}>{content.content}</p>
                            )
                        }
                        else if(content.type === 'link'){
                            return (
                                <p key={content.content}><a href="#">{content.content}</a></p>
                            )
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
             {
                commentsMock.map(comment => {
                    return (
                        (
                            <Comment 
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    )
                })
             }
            </div>
        </article>
    )
}