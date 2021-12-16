
import React from 'react';

import { Content } from './components/content/content';


const MasterLayout: React.FC = ({ children }) => {
    return (
        <div>
            <Content> {children} </Content>
        </div>

    )
}

export { MasterLayout }

