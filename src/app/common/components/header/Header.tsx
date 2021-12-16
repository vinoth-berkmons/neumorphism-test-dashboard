import React, { FC, useState } from 'react';

import { CustomDropdown, Hamburger, HeaderStyle, Title } from './HeaderStyle';


const Header: FC = () => {
    const [locality, setLocality] = useState([]);
    const [selectedCity, setSelectedCities] = useState("");
    const [selectedLocality, setSelectedLocality] = useState("");

    const cities: any = {
        Bangalore: ["Indiranager", "Ejipura", "Silkboard", "Hebbal"],
        Gurgaon: ["Sector 21", "Subash Chowk", "DLF", "Huda City"]
    };


    const cityList = Object.keys(cities).map(key => ({
        name: key
    }));

    function handleCitySelect(e: React.ChangeEvent<HTMLSelectElement>) {
        if (!e) {
            return '';
        }
        console.log("Selected city", e.currentTarget.value);
        const citySelected = e.currentTarget.value;
        const citySel = citySelected !== "" ? cities[citySelected] : "";
        setSelectedCities(citySelected);
        setLocality(citySel);
        setSelectedLocality("");
    }

    function handleLocalitySelect(e: React.ChangeEvent<HTMLSelectElement>) {
        if (!e) {
            return '';
        }
        console.log("Selected city", e.currentTarget.value);
        const citySel = e.currentTarget.value;
        setSelectedLocality(citySel);
    }

    return (
        <HeaderStyle>
            <div className="flex items-center flex-auto">
                <div className='flex flex-1'>
                    <Hamburger />
                    <Title>XTAG</Title>
                </div>
                <div className='flex items-center justify-center dropdown-container'>
                    <CustomDropdown className='mr-8'
                        name="cities"
                        onChange={e => handleCitySelect(e)}
                        value={selectedCity}
                    >
                        <option value="123">Select City</option>
                        {cityList.map((city, key) => (
                            <option key={key} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </CustomDropdown>

                    <CustomDropdown
                        name="localities"
                        onChange={e => handleLocalitySelect(e)}
                        value={selectedLocality}
                    >
                        <option value="11">Select Locality</option>
                        {locality.map((local, key) => (
                            <option key={key} value={local}>
                                {local}
                            </option>
                        ))}
                    </CustomDropdown>
                </div>
            </div>
        </HeaderStyle>

    )
}

export { Header }