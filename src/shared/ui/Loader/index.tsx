import css from './loader.module.css'


export function Loader() {


    return (
        <div className={css.loaderWrapper}>
            <span className={css.loader}></span>
        </div>
    )
}