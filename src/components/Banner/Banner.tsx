import { LayoutContainer } from '../../containers/LayoutContainer/LayoutContainer'
import styles from './banner.module.scss'

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <LayoutContainer>
                <h1 className={styles.banner__h1}>conduit</h1>
                <p>A place to share your knowledge.</p>
            </LayoutContainer>
        </section>
    )
}