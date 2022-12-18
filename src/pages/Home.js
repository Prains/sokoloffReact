import Advantage from "../components/Advantage";
import Cargo from "../components/Cargo";
import Catalog from "../components/Catalog";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Main from "../components/Main";
import { useState } from "react";


const Home = () => {
    let [items, setItems] = useState([
        {
            title: 'Икра Кижуч 250 гр',
            amount: 0,
            price: 15000,
            image: require('../assets/кижуч.png'),
            id: 0
        }
    ])
    let [allprice, setAllPrice] = useState(0);
    function moreAmount(item) {
        let newArray = [...items];
        newArray.forEach(element => {
            if (element.id === item.id && element.amount >= 0) {
                element.amount++
                setAllPrice(allprice + element.price)
            }
        });
        setItems(newArray)
    }

    function lessAmount(item) {
        let newArray = [...items];
        newArray.forEach(element => {
            if (element.id === item.id && element.amount >= 1) {
                element.amount--
                setAllPrice(allprice - element.price)
                if (element.amount === 0) {
                    newArray.splice(item.id)
                }
            }
        });
        setItems(newArray)
    }
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

    return (
        <div className="page">
            <Cargo lessAmount={lessAmount} moreAmount={moreAmount} items={items} allprice={allprice}></Cargo>
            <Header></Header>
            <Main></Main>
            <Advantage></Advantage>
            <Catalog red={red} fish={fish}></Catalog>
            <Contacts></Contacts>
        </div>
    );
}

export default Home;