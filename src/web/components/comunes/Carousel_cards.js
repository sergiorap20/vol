import React, {Component} from 'react';
import $ from 'jquery';
import './Carousel_card.css';



class Carousel_cards extends React.Component{
    componentDidMount(){
        $(".carousel-control-prev").click(function () {
            $(".carousel-control-prev").fadeOut();
            $(".carousel-control-next").fadeOut();

            setTimeout(function () {
                $(".carousel-control-prev").fadeIn();
                $(".carousel-control-next").fadeIn();
            },400)
        });
        $(".carousel-control-next").click(function () {
            $(".carousel-control-prev").fadeOut();
            $(".carousel-control-next").fadeOut();

            setTimeout(function () {
                $(".carousel-control-prev").fadeIn();
                $(".carousel-control-next").fadeIn();
            },400)
        });
    }


    render () {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row justify-content-center py-5 mb-5 Card-row">
                            <div className="col-12 col-md-9 col-lg-8">
                                <div className="card w-100 h-100 p-0 p-md-4">
                                    <div className="card-body text-left">
                                        <div className="">
                                            <div className="col-md-12">

                                                <h5 className="Titulo-tarjeta card-title w-100 text-left text-uppercase Barlow">14/febrero
                                                    san valentin</h5>
                                                <p className=" Width-75 text-left Subtitulo-tarjeta">Vuelo en pareja & noche romántica en una cabaña en un árbol.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-2 pt-lg-5 justify-content-between">
                                            <div className="col-12 col-sm-5 col-md-5  text-left d-flex align-items-center mb-4  mb-lg-0">
                                                <button className=" Btn-blue W-8rem Mayor-responsive">VER OFERTA</button>
                                            </div>
                                            <div className="col-12 col-sm-7 col-md-7 mt-3 mt-md-0 text-left d-flex Tarjeta-footer flex-md-row">
                                                <div className="d-flex">
                                                    <img src="https://via.placeholder.com/55x55" className=""
                                                         alt=""/>
                                                    <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                </div>
                                             <div className="d-flex">
                                                 <span className="d-flex align-items-center Price-card pl-3">250€</span>

                                             </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row justify-content-center py-5 mb-5 Card-row">
                            <div className="col-12 col-md-9 col-lg-8">
                                <div className="card w-100 h-100 p-0 p-md-4">
                                    <div className="card-body text-left">
                                        <div className="">
                                            <div className="col-md-12">

                                                <h5 className="Titulo-tarjeta card-title w-100 text-left text-uppercase Barlow">14/febrero
                                                    san valentin</h5>
                                                <p className=" Width-75 text-left Subtitulo-tarjeta">Vuelo en pareja & noche romántica en una cabaña en un árbol.</p>
                                            </div>

                                        </div>

                                        <div className="row w-100 pt-2 pt-lg-5 justify-content-between">
                                            <div className="col-12 col-sm-5 col-md-5  text-left d-flex align-items-center mb-4  mb-lg-0">
                                                <button className=" Btn-blue W-8rem Mayor-responsive">VER OFERTA</button>
                                            </div>
                                            <div className="col-12 col-sm-7 col-md-7 mt-3 mt-md-0 text-left d-flex Tarjeta-footer flex-md-row">
                                                <div className="d-flex">
                                                    <img src="https://via.placeholder.com/55x55" className=""
                                                         alt=""/>
                                                    <span className=" d-flex align-items-center p-2 Info-card">Vuela en globo <br/> Globo no compartido</span>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="d-flex align-items-center Price-card pl-3">250€</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i href="#carouselExampleIndicators" role="button" data-slide="prev" className="fas fa-angle-left Carousel-arrow"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="fas fa-angle-right Carousel-arrow"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
export default Carousel_cards;
