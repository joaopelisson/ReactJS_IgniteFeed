import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from './Post.module.css';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
};
interface Content {
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content}: PostProps){
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

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setcommentsMock([...commentsMock, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity(``);
        setNewCommentText(event.target.value);
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity(`Esse campo é obrigatório!`);
    }
    function deleteComment(commentToDelete: string){
        
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