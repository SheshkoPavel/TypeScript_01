import React from 'react';

const Enum = () => {

    enum Membership {
        Simple,
        Additional,
        Premium
    }
    console.log(Membership)

    const membership = Membership.Premium
    const membershipReverse = Membership[2]

    enum SocialMedia {
        VK = 'VKontakte',
        FACEBOOK = 'Facebook',
        INSTA = 'Instagram'
    }
    const social1 = SocialMedia.INSTA

    return (
        <div>
            {membership} <br/>
            {membershipReverse} <br/>
            {social1}
        </div>
    );
};

export default Enum;