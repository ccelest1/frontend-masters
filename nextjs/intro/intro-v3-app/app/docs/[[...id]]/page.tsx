import styles from './styles.module.css'

const DocsIdPage = ({
    params,
    searchParams,
}: {
    params: {
        id: string
    },
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}) => {
    console.log(params)
    console.log(searchParams)
    const values = Object.values(searchParams)
    return (
        <>
            <div className={`${styles.title} ${styles.another}`}>
                DOCS ID PAGE
                {params.id}
            </div>
            <div>
                {searchParams['a']}
            </div>
        </>
    )
}
export default DocsIdPage
