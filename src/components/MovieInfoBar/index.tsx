import React from 'react'

// Helper
import { calcTime, convertMoney } from '../../helpers'

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles'


type Props = {
    time: number,
    budget: number,
    revenue: number,
}
const MovieInfoBar: React.FC<Props> = ({time,budget,revenue}) => {

    console.log(time,budget,revenue)

    return (

        <Wrapper>
            <Content>
                <div className="column">
                    <h4>{calcTime(time)}</h4>
                </div>
                <div className="column">
                    <h4>{convertMoney(budget)}</h4>
                </div>
                <div className="column">
                    <h4>{convertMoney(revenue)}</h4>
                </div>
            </Content>
        </Wrapper>

    )
}

export default MovieInfoBar

