import { atom, RecoilState, selector } from 'recoil';

function randomStrings(): string {
    return Math.random().toString(30).substring(2,11);
}
interface Props {
    "No."?: string,
    "リ　ン　ク"?: string,
    "名　言"?: string,
    "らいさまかわいい集"?: string
}
export const theme = atom({
    key: `theme/${randomStrings()}`,
    default: true
});

export const raisama = atom<Props[]>({
    key: `raisama/${randomStrings()}`,
    default: []
});

export const totalRai = atom({
    key: `totalRai/${randomStrings()}`,
    default: 0
})