import './Dashboard.css';

import { mdiFullscreen, mdiPower } from '@mdi/js';
import Icon from '@mdi/react';
import { FC } from 'react';
import styled from 'styled-components';
import { Card, Divider, IconButton, ToggleButton, ToggleButtonGroup } from 'ui-neumorphism';

import { AnalyticsGraph, CardSmall, CustomDropdown, Header, MapPlaceHolder } from '../../common/components';
import { DAYS, MONITOR_DATA, TOTAL_ANALYTICS } from '../../common/constants/common';


const Footer = styled.footer`
    height: 45px;
    background-color: #2c304c;
    width: 100%;
    position: fixed;
    bottom: 0
`
/**
 * Header Component
 * Header Sub
 * Map Placeholder
 * Monitor Parking
 * App Analytics
 *
 * @returns
 */
const Dashboard: FC = () => {
    return (
        <div className="flex">

            <div className="flex-auto w-2/5 float-left">
                <Header />
                
                <div>
                    <Card className={'card card-bg-light'} rounded={false} dark elevation={1} height={75}>
                        <div className="flex flex-auto">
                            <CustomDropdown className="typeahead-search">
                                <option defaultValue={"Parking Area"}>Parking Area</option>
                            </CustomDropdown>
                            <div className="flex flex-auto">

                                <ToggleButtonGroup dark mandatory>
                                    {DAYS.map(day => {
                                        return <ToggleButton className={'mr-2 light-gray toggle-custom'}
                                            value={day} key={day}>
                                            {day}
                                        </ToggleButton>
                                    })}
                                </ToggleButtonGroup>

                            </div>
                            <div className="flex flex-auto">

                                <IconButton dark size='small' className={'mr-6'}>
                                    <Icon path={mdiFullscreen} className={'light-gray'} size={1.5} />
                                </IconButton>


                                <IconButton dark size='small'>
                                    <Icon path={mdiPower} className={'light-gray'} size={1.5} />
                                </IconButton>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex m-3">
                    <Card className={'card card-bg-light p-3'} rounded={false} dark elevation={1} height={175}>
                        <AnalyticsGraph />
                    </Card>
                </div>
                <div className='flex'>
                    <Divider className={'bg-theme'} dark dense elevated />
                </div>

                <div className="flex flex-wrap overflow-hidden text-white p-3">

                    <div className="w-1/2 overflow-hidden font-semibold light-gray">
                        <h1>
                            ONGOING PARKINGS
                        </h1>
                    </div>

                    <div className="w-1/2 font-semibold light-gray mb-12">
                        <h1 className='mb-3'>Monitor <sub className='text-green-500'>LIVE</sub></h1>
                        <div className='flex flex-col card-monitor'>
                            {
                                MONITOR_DATA.map(data => {
                                    return <CardSmall key={data.id} data={data} />
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex-auto w-3/5 float-right">
                <MapPlaceHolder />
            </div>

            <Footer>
                <div className='flex flex-row card-analytics'>
                    {
                        TOTAL_ANALYTICS.map(data => {
                            return <CardSmall key={data.id} data={data} />
                        })
                    }

                </div>

            </Footer>

        </div>
    )
}

export default Dashboard 