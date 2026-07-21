import React from 'react'

import catalogueIcon from '../assets/Icons/iconCatalogue.png'


function Multicolumn({multicolumnDet}) {
  return (
    <main className="main-section--multicolumn p-[20px] bg-[#081B33]">
        <div className="main-section--inner">
            <div className="inner-multicolumn flex wrapper-multicolumn w-[90%] m-auto justify-between">
                {multicolumnDet.map((multicolumn)=>(
                    <div className="multicolumn-card brands-card-multicolumn w-[32%] overflow-hidden bg-[#061f3c]">
                        <div className="card-inner-wrapper w-full">
                            <div className="card-image--wrapper">
                                <img src={multicolumn.image} alt="" className="card-img" />
                            </div>
                            <div className="card-content--wrapper flex flex-col gap-[10px] items-center w-full p-[20px]">
                                <div className="card-logo-image">
                                    <img src={multicolumn.logoImage} alt="" width="40%" className="card-logo-img m-auto" />
                                </div>
                                <p className="card-subtext uppercase text-[#936e42] font-semibold">{multicolumn.subtext}</p>
                                <p className="card-description description--multicolumn text-center w-[80%] m-auto pb-[20px]">{multicolumn.description}</p>
                                <a href={multicolumn.buttonURL1} className="w-full block">
                                    <button className="secondary-button button multicolumn--button multicolumn--button-brown w-full uppercase tracking-[1px] cursor-pointer">{multicolumn.buttonText1} <span className="iconArrow"></span></button>
                                </a>
                                <a href={multicolumn.buttonURL2} className="w-full block">
                                    <button className="primary-button multicolumn--button button w-full uppercase tracking-[1px] cursor-pointer">{multicolumn.buttonText2} <span className="iconDownload"></span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <br />
        <div className="bottom-full-catalogue--block w-[90%] m-auto px-[20px] py-[30px] bg-[#061f3c]">
            <div className="flex-wrapper full-cataglogue--brands flex justify-between items-center">
                <div className="right-block content-box flex items-center justify-left gap-[2rem] w-[60%]">
                    <div className="icon-full-cat">
                        <img src={catalogueIcon} alt="download full catalogue" width="75px" className="full-catalogue-image" />
                    </div>
                    <div className="icon-full-content">
                        <h3 className="full-cat-heading text-[2rem]">Can't find what you're looking for?</h3>
                        <p className="full-cat-description">Download our complete catalogue for the full collection.</p>
                    </div>
                </div>
                <div className="left-block button-box w-[30%] p-[20px] text-center">
                    <button className="download-full-catalogue-button button uppercase tracking-[1px]">
                        Download Full Catalogue  <i className="fa-solid fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Multicolumn