export const parseURL = (code: string) => {
    if(code.startsWith('https://clips')) {
        return code.split('/')[3]
    } else if(code.startsWith('https://www.twitch.tv/alfrea/clip/')) {
        return code.split('/')[5]?.split('?')[0]
    }
    return 'empty';
}