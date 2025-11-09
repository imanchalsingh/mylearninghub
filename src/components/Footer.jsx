//create a footer with text  "© 2024 My Learning Hub. All rights reserved." centered at bottom with light gray background and dark gray text, responsive. and also add some padding. and also add a hover effect to change background to slightly darker gray. and also add a smooth transition effect for background color change. 

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center font-['Kanit']">
               ANCHAL SiNGH © 2025 My Learning Hub. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;