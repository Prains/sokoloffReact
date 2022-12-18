import texture from '../assets/текстура.svg'
import fishTablet from '../assets/fish.png'
import sea from '../assets/sea.png'
import Item from './Item'


const Catalog = (props) => {
    const style = 'catalog__fish'

    return (<section class="catalog" style={{
        backgroundImage: `url(${sea})`,
    }}>
        <img src={texture} alt="" class="catalog__lead"></img>
            <Item red={props.red} />
        <img src={fishTablet} alt="" class="catalog__lead"></img>
            <Item red={props.fish} style={style} />
    </section>);
}

export default Catalog;

