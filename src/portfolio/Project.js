import './Portfolio.css'

export default function Project ({pwoject}) {
    const { id, imageString, title, description, deployedApp, repository } = pwoject;

    return (
        <div>
            <h2>{title}</h2>
            <p className='app-description'>{description}</p>
            <div className="links">
                <a href={deployedApp} target="_blank">Deployed Application</a>
                <a href={repository} target="_blank">Application Repository</a>
            </div>
        </div>
    )
}