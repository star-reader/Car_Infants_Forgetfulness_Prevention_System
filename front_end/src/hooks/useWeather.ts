import axios from 'axios'

export default async (lat: number, lng: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        //先默认是广州市，后续根据接口内容进行调整
        axios.get(
            `https://7timer.info/bin/astro.php?lon=${lng}&lat=${lat}&ac=0&lang=en&unit=metric&output=json&tzshift=0]`
        ).then(res => {
            try {
                const temperature = res.data.dataseries[0].temp2m
                resolve(temperature)
            } catch (error) {
                reject(error)
            }
        }).catch(() => reject())
    })
}