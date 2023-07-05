import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className='header'>
            <div className='div-header'>
                    <div className="header-body">
                        <h3>Welcome to BD screen</h3>
                        <p id="p">Download Unlimited Movies,Drama,Music Video and More Content.</p>
                        <p id="paragraphe">Enjoy exclusive Music Video popular movies and lives shows.</p>
                        <p id="paragraphe">Subcribe <span>BD Screen</span> now</p>
                        <div id="contact">
                            <div className="contact">
                                <input type="text" name="" id="number" placeholder="+880" />
                                <input type="text" name="" id="number-writte" placeholder="Enter mobil number" />
                            </div>
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Header;