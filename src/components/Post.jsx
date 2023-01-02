import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/joaopelisson.png"
                        alt="imagem de perfil autor do post"
                        title='Imagem de perfil do autor' 
                    />
                    <div className={styles.authorInfo}>
                        <strong>João Pelisson</strong>
                        <span>Web Developer ⚡</span>
                    </div>
                </div>

                <time title="01 de Janeiro de 2023" dateTime='2023-01-01 21:32' >Publicado há 1hr</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera 😁</p>
                <p>Acabei de subir mais um projeto no meu portifa. </p>
                <p>🔗{' '}<a href="#">joao.pelisson/ignitefeed</a></p>
                <p>
                    <a href="/">#novoprojeto</a>{' '}
                    <a href="/">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}