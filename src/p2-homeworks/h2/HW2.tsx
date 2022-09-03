import React, {useState} from 'react'
import Affairs from './Affairs'

export type FilterType = 'all' | AffairPriorityType
export type AffairPriorityType = "low" | "middle" | "high"
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (
    affairs: Array<AffairType>,
    filter: FilterType): Array<AffairType> => {

    if (filter === 'all') return affairs
    else return affairs.filter(affair => affair.priority === filter)
}

export const deleteAffair = (
    affairs: Array<AffairType>,
    _id: number): Array<AffairType> => {

    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 2</h3>
            <Affairs
                data={filteredAffairs}
                filter={filter}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
