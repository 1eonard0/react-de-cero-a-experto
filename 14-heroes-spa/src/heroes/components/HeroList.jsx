import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
    
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__slideInRight'>
        { 
            heroes.map(h => {
                return <HeroCard key={h.id} { ...h } /> 
            })
        }
    </div>
  )
}
