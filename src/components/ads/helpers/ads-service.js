import getRandomInt from '../../../helpers/random-int';

const ads = [
    { component: 'FirstAd', data: { firstName: 'Przemek' } },
    { component: 'SecondAd', data: { coupon: 'AEZAKMI'} },
    { component: 'ThirdAd', data: { languages: [ 'C#', 'Java', 'JavaScript' ] } },
]

export default function fetchAd() {
    return new Promise((resolve) => {
        const adIndex = getRandomInt(0, ads.length);
        resolve(ads[adIndex]);
    })
}