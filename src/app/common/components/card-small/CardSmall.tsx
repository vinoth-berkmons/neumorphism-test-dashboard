import { FC } from "react";
import { Card } from "ui-neumorphism";

import { Data } from '../../models/common'


const CardSmall: FC<Props> = ({ data }) => {
    return (
        <>
            <Card key={data.id} className={'card p-3 card-bg-dark card-small'}
                rounded={false} dark elevation={1} height={40}>
                <p className='text-slate-200'>{data.title}</p>
                <p className='text-green-500'>
                    {data.count}
                </p>
            </Card>
        </>
    )
}

export { CardSmall }

interface Props {
    data: Data
}