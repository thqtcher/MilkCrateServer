import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="flex w-full h-8 items-center justify-center text-MCblack space-x-4">
            <a href="#" className='hover:text-MCorange'>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className='hover:text-MCred'>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className='hover:text-MCblue'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className='hover:text-MCorange'>
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    );
}