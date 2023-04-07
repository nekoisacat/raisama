export const parseURL = (code: string) => {
    let url = '';
    if(code.startsWith('https://clips')) {
        url = code.split('/')[3]
        return twitchURL(url, 'twitch');
    } else if(code.startsWith('https://www.twitch.tv/alfrea/clip/')) {
        url = code.split('/')[5]?.split('?')[0]
        return twitchURL(url, 'twitch');
    } else if(code.startsWith('https://youtu.be')) {
        url = code.split('/')[3].split('?')[0];
        return twitchURL(url, 'you');
    } else if(code.startsWith('https://twitter')) {
        return <a className='links' href={code} target="_blank">＞＞これはTwitterで見て＜＜</a>
    }
    return 'empty';
}

function twitchURL (url: string, site: string) {
    let rst = <p></p>;
    const ppr = window.location.hostname;
    switch(site) {
        case 'twitch':
            rst = <iframe src={`https://clips.twitch.tv/embed?clip=${url}&parent=${ppr}`} width={620} height={378} />
            break;
        case 'you':
            rst =  <iframe width={620} height={378} src={`https://www.youtube.com/embed/${url}`} />
            break;
    }
    return rst;
}