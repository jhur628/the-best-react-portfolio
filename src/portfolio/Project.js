

export default function Project ({pwoject}) {
    const { id, imageString, title, description, deployedApp, repository } = pwoject;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}