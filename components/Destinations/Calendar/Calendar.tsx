"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"
import { useRouter } from "next/navigation"

const Calendar = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state:any) => state.filterData)

    useEffect(()=>{
        // 
    }, [filter])

    function x(date:any) {
        return `${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}`
    }

    return (
        <div>
            <DatePicker
                selected={new Date(`${filter.date.split('-')[1]}/${filter.date.split('-')[0]}/2023`)}
                inline={true}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(date:any) => {
                    dispatch(filterDataAction.changeFilterDate(x(date)))
                }}
            />
        </div>
    )
}

export default Calendar