interface Props {
    title: string,
    url: JSX.Element | string
}

const Content: React.FunctionComponent<Props> = ({title, url}) => {
    const ppr = window.location.hostname;
    return (
        <>
        {
            <div className="item">
                <div className="twitch">
                    {url}
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