import texture from '../assets/текстура.svg'
import fishTablet from '../assets/fish.png'
import sea from '../assets/sea.png'
import Item from './Item'


const Catalog = () => {
    const red = [
        {
            title: 'Икра Кижуч',
            image: require('../assets/red1.png'),
            description: 'Икра слабосоленая',
            weight: 'Фасовка: 250гр',
            price: '1500 руб',
        },
        {
            title: 'Икра Кеты',
            image: require('../assets/red2.png'),
            description: 'Икра слабосоленая',
            weight: 'Фасовка: 250гр',
            price: '1500 руб'
        },
        {
            title: 'Икра Горбуши',
            image: require('../assets/red3.png'),
            description: 'Икра среднесоленая',
            weight: 'Фасовка: 250гр',
            price: '1400 руб'
        },
    ]

    const fish = [
        {
            title: 'Кета',
            image: require('../assets/fish1.png'),
            description: 'Рыба свежемороженая потрошеная без головы',
            weight: 'Фасовка: Брикет 11кг',
            price: '650 руб/кг',
        },
        {
            title: 'Кижуч',
            image: require('../assets/fish2.png'),
            description: 'Рыба свежемороженая потрошеная без головы',
            weight: 'Фасовка: Брикет 11кг',
            price: '650 руб/кг'
        },
        {
            title: 'Нерка',
            image: require('../assets/fish3.png'),
            description: 'Рыба свежемороженая потрошеная без головы',
            weight: 'Фасовка: Брикет 11кг',
            price: '850 руб/кг'
        },
        {
            title: 'Чавыча',
            image: require('../assets/fish4.png'),
            description: 'Рыба свежемороженая потрошеная без головы',
            weight: 'Фасовка: Поштучно (вес 1 рыбы 5-12 кг)',
            price: '1900 руб./ кг'
        },
    ]

    const style = 'catalog__fish'

    return (<section class="catalog" style={{
        backgroundImage: `url(${sea})`,
    }}>
        <img src={texture} alt="" class="catalog__lead"></img>
            <Item red={red} />
        <img src={fishTablet} alt="" class="catalog__lead"></img>
            <Item red={fish} style={style} />
    </section>);
}

export default Catalog;

