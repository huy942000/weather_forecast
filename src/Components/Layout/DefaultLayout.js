import React from "react"
import Imageslogo from '../../Images/logo.png'
import "../../CSS/DefaultLayout.css"
import DataJson from "../../Data/City.json"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
class DefaultLayout extends React.Component {

    render() {
        const items = DataJson

        const handleOnSearch = (string, results) => {
            console.log(string, results)
        }

        const handleOnSelect = (item) => {
            localStorage.setItem("lon", item.coord.lon)
            localStorage.setItem("lat", item.coord.lat)
            localStorage.setItem("name", item.name)
            window.location.href = '/'
        }
        return (
            <div className="header_out">
                <div className="header_inner">
                    <div className="header_logo" >
                        <img className="logo_banner" src={Imageslogo} alt="img_logo" width="50px" height="50px" />
                    </div>
                    <div className="text_logo">
                        <h4>HuyBQ</h4>
                    </div>
                    <div className="header_search">

                        <div className="search">
                            <header className="logosearch">
                                <div className="searchcity" >
                                    <ReactSearchAutocomplete
                                        placeholder="Tìm Kiếm bằng tên Thành phố"
                                        items={items}
                                        onSearch={handleOnSearch}
                                        onSelect={handleOnSelect}
                                        autoFocus
                                    />
                                </div>
                            </header>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}
export default DefaultLayout;