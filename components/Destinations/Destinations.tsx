import styles from './Destinations.module.scss'
import {DestinationOffer} from './DestinationOffer'
import SectionTitle from '../SectionTitle/SectionTitle'

const data = [
    {
        id: 1,
        fromName: 'თბილისი',
        toName: 'ბათუმი',
        fromValue: 'tbilisi',
        toValue: 'batumi',
        img: 'https://tkt.ge/static/images/batumi.jpg'
    },
    {
        id: 2,
        fromName: 'ბათუმი',
        toName: 'თბილისი',
        fromValue: 'batumi',
        toValue: 'tbilisi',
        img: 'https://tkt.ge/static/images/tbilisi.jpg'
    },
    {
        id: 3,
        fromName: 'თბილისი',
        toName: 'ფოთი',
        fromValue: 'tbilisi',
        toValue: 'poti',
        img: 'https://tkt.ge/static/images/foti.jpg'
    }
]

export const Destinations = () => {
    return (
        <div className={styles.destinations}>
            <div className='container'>
                <SectionTitle title={'შემოთავაზებული მიმართულებები'} />
                <div className={styles.list}>
                    {
                        data.map(item => {
                            return (
                                <DestinationOffer key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}