import styles from './layoutContainer.module.scss'

export interface LayoutContainerProps {
    children: React.ReactNode
}

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}