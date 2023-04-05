interface Props {
    title: string,
    url: string
}

const Content: React.FunctionComponent<Props> = ({title, url}) => {
    const ppr = window.location.hostname;
    return (
        <>
        {
            <div className="item">
                <div className="twitch">
                    <iframe
                        src={`https://clips.twitch.tv/embed?clip=${url}&parent=${ppr}`}
                        height={378}
                        width={620}
                    />
                </div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
            </div>
        }
        </>
    )
}

export default Content;