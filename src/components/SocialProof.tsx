import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
    const brands = [
        { name: "Vihara", file: "vihara.png" },
        { name: "Cap", file: "cap.png" },
        { name: "Simble", file: "simble.png" },
        { name: "99 Studioz", file: "99studioz.png" },
        { name: "Partner", file: "new-logo.png" }, // Kept previous addition
        { name: "25 Year", file: "brand-25year.jpg" },
        { name: "Brand 1", file: "brand-img1.jpg" },
        { name: "AI Tech", file: "brand-chatgpt.png" },
        { name: "Drive", file: "brand-drive.png" },
        { name: "Client 1", file: "brand-wa1.jpg" },
        { name: "Client 2", file: "brand-wa2.jpg" },
        { name: "Client 3", file: "brand-wa3.jpg" },
        { name: "Red", file: "brand-red.png" }
    ];

    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof-label">Trusted by leading brands worldwide</p>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <div key={`original-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {brands.map((brand, index) => (
                            <div key={`dup-1-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Extra duplicate set for wide screens */}
                        {brands.map((brand, index) => (
                            <div key={`dup-2-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                        {/* Extra duplicate set for wide screens */}
                        {brands.map((brand, index) => (
                            <div key={`dup-3-${index}`} className="brand-logo-wrapper">
                                <img
                                    src={`/brands/${brand.file}`}
                                    alt={brand.name}
                                    className="brand-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
