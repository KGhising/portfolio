import React from 'react';

import SocialLink from '../SocialLinks/SocialLink';

class BottomBar extends React.Component {
    render() {
        return (
            <div className="bottom-bar">
                <p className="body3">2021 | Kishor Ghising | kghisinga@gmail.com</p>
                <SocialLink />
            </div>
        );
    }
} 

export default BottomBar;
