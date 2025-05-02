import css from './errorMessage.module.css'

export function ErrorMessage({ isActive, message }: { isActive: boolean, message: string }) {

    return (
        <div className={css.error}>
            {message}
        </div>
    )
}