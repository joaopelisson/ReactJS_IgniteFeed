import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/joaopelisson.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Pelisson</strong>
                            <time
                                title="03 de Janeiro ás 21:42"
                                dateTime='2023-05-11 08:13:30'
                            >Cerca de 1hr atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>
                        Muito bom João, parabéns!! 😀
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}