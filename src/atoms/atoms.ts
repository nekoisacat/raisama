import { atom, RecoilState, selector } from 'recoil';

function randomStrings(): string {
    return Math.random().toString(30).substring(2,11);
}
export interface IRai {
    "No."?: string,
    "リ　ン　ク"?: string,
    "名　言"?: string,
    "らいさまかわいい集"?: string
}
export const theme = atom({
    key: `theme/${randomStrings()}`,
    default: true
});

export const raisama = atom<IRai[]>({
    key: `raisama/${randomStrings()}`,
    default: []
});

export const selectRai = selector({
    key: `selectRai/${randomStrings()}`,
    get: async () => {
        const rai: IRai[] = await fetch(
            `https://api.fureweb.com/spreadsheets/1txzsWYmA86n7yrMtovgvI1arzblxUIG0DFLLcNi4lnU`
        ).then(res => res.json())
        .then(data => data.data)
        return rai.filter(el => el["リ　ン　ク"] !== undefined);
    },
});

export const totalRai = selector({
    key: `totalRai/${randomStrings()}`,
    get: ({get}) => {
        const rst = get(selectRai);
        return rst.length;
    }
})