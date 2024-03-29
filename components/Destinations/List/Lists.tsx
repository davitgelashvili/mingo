"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import { useRouter, useSearchParams } from 'next/navigation'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { filterDataAction } from '@/store/filter'
import useDateFormat from '@/hooks/useDateFormat'

export const Lists = ({date}:any) => {
    const [data,setData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const dispatch = useDispatch()
    const time = [
        '07 : 00',
        '08 : 00',
        '09 : 00',
        '10 : 00',
        '11 : 00',
        '12 : 00',
        '13 : 00',
        '14 : 00',
        '15 : 00',
        '16 : 00',
        '17 : 00',
        '18 : 00',
        '19 : 00',
        '20 : 00',
        '21 : 00',
        '22 : 00',
        '23 : 00',
        '23 : 55',
    ]

    useEffect(()=>{
        setLoading(true)
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}&getDate=${searchParamsDate}`)
        .then((res:any)=> {
            setData([])
            setData(res[0])
        })
        .finally(()=>{
            setLoading(false)
            dispatch(filterDataAction.changeFilterFrom(searchParamsFrom))
            dispatch(filterDataAction.changeFilterTo(searchParamsTo))
            // dispatch(filterDataAction.changeFilterDate(searchParamsDate))
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])

    const x = useDateFormat(new Date()).getDate()

    return (
        <div className={styles.list}>
            {
                loading && <Loader />
            }
            {
                data ? time.map((t:any) => {
                    if(searchParamsDate?.split('-')[0] == x){
                        if(new Date().getHours() < t.split(' ')[0]){
                            return (
                                <Item key={t} item={data} time={t} />
                            )
                        }
                    }else {
                        return (
                            <Item key={t} item={data} time={t} />
                        )
                    }
                }) : (
                    <h1>ინფორმაცია არ მოიძებნა</h1>
                )
            }
        </div>
    )
}