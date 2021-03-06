import React, {Component} from 'react';
import './Buscador_filtro_movil.css';
import {Link} from 'react-router-dom'
import logo from '../../images/Globo-header-w.png'
import menos from '../../images/menos.png'
import mas from '../../images/mas.png'
import filtro from '../../images/filtro.png'
import Menu2 from './Menu2'
import flecha_abajo from '../../images/flecha-abajo.png';
import flecha_arriba from '../../images/flecha-arriba.png';
import $ from 'jquery';
import Datepicker from "./Datepicker";


function retablecer_chk() {
    $('input:checkbox').prop('checked', false);
}

/*Controlo si el movil está abierto o cerrado*/
var filtro_movil_abierto = false;

function show_filtro() {

    $(".Filtro-movil").addClass('Open-filtro');
    $(".Filtro-div-movil").fadeIn();
    filtro_movil_abierto = true;

}

function hide_filtro() {

    $(".Filtro-div-movil").fadeOut();
    $(".Filtro-movil").removeClass('Open-filtro');


    filtro_movil_abierto = false;
}

/*Hace que al clicar en cualquier sitio que no tenga la clase movil icon se ejecute el hide movil*/

$(document).ready(function () {
    if ($(window).width() <= 600) {
        $('#logo').attr('src', logo);

    }
    ;
})

document.addEventListener("DOMContentLoaded", function (event) {

    var abierto1 = false;
    $(".Click1").click(function () {
        if (!abierto1) {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-abajo").addClass("Ocultar");
            $(this).children(".Flecha-arriba").removeClass("Ocultar");

            abierto1 = true;
        } else {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-arriba").addClass("Ocultar");
            $(this).children(".Flecha-abajo").removeClass("Ocultar");


            abierto1 = false;

        }
    })

    var abierto2 = false;
    $(".Click2").click(function () {
        if (!abierto2) {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-abajo").addClass("Ocultar");
            $(this).children(".Flecha-arriba").removeClass("Ocultar");

            abierto2 = true;
        } else {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-arriba").addClass("Ocultar");
            $(this).children(".Flecha-abajo").removeClass("Ocultar");


            abierto2 = false;

        }
    })

    var abierto3 = false;
    $(".Click3").click(function () {
        if (!abierto3) {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-abajo").addClass("Ocultar");
            $(this).children(".Flecha-arriba").removeClass("Ocultar");

            abierto3 = true;
        } else {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-arriba").addClass("Ocultar");
            $(this).children(".Flecha-abajo").removeClass("Ocultar");


            abierto3 = false;

        }
    })

    var abierto4 = false;
    $(".Click4").click(function () {
        if (!abierto4) {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-abajo").addClass("Ocultar");
            $(this).children(".Flecha-arriba").removeClass("Ocultar");

            abierto4 = true;
        } else {
            $('.Flecha-abajo').not(this).removeClass("Ocultar");
            $('.Flecha-arriba').not(this).addClass("Ocultar");
            $(this).children(".Flecha-arriba").addClass("Ocultar");
            $(this).children(".Flecha-abajo").removeClass("Ocultar");


            abierto4 = false;

        }
    })



    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove')

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }


});

/* HAGO DESTRUCTURING: En vez de crear la const logo con props.logo le añado al parametro {} y le pongo de nomrbe el nombre de la prop que le paso
* así lo coge directamente*/
class Buscador_filtro_movil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador_adultos: 0,
            contador_ninyos: 0,
            v_individual: false,
            v_ninos: false,
            v_2: false,
            v_4: false,
            v_adaptados: false,
            globo_nocompartido: false,
            p_romantico: false,
            p_aventura: false,
            p_historico: false
        }
    }

    toggle_ch_romantico(event) {
        this.setState({
            p_romantico: !this.state.p_romantico
        });
    }

    toggle_ch_aventura(event) {
        this.setState({
            p_aventura: !this.state.p_aventura
        });
    }

    toggle_ch_historia(event) {
        this.setState({
            p_historico: !this.state.p_historico
        });
    }

    sum_adultos() {
        this.setState({
            contador_adultos: this.state.contador_adultos + 1
        })
    }

    rest_adultos() {
        if (this.state.contador_adultos > 0) {
            this.setState({
                contador_adultos: this.state.contador_adultos - 1
            })
        }
    }

    sum_ninyos() {
        this.setState({
            contador_ninyos: this.state.contador_ninyos + 1
        })
    }

    rest_ninyos() {
        if (this.state.contador_ninyos > 0) {
            this.setState({
                contador_ninyos: this.state.contador_ninyos - 1
            })
        }

    }

    restablecer() {
        this.setState({
            contador_adultos: 0,
            contador_ninyos: 0
        })
    }

    aplicar() {
        this.setState({
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            ocultar_filtro_pack: true
        });
    }


    componentWillMount() {
        if (this.props.pack == "Pack_romantico") {
            this.setState({
                p_romantico: true
            });
        }
        if (this.props.pack == "Pack_historico") {
            this.setState({
                p_historico: true
            });
        }
    }

    render() {


        return (
            <div className="Buscador-filtro-movil d-lg-none">
                <div className="container-fluid">
                    <div className="row p-md-3 p-0 pt-2 pt-md-0 pl-0 pl-md-5 justify-content-end mb-2">
                        <div
                            className="col-6 col-md-6 d-flex align-items-center justify-content-end pr-1 pr-lg-5 P-initial">
                            <div className="Div-btnfiltro">
                                {/*Boton movil*/}
                                <button id="btn_filtro" onClick={show_filtro}
                                        className="Filtro-movil  Open-filtro d-lg-none Filtros-color">FILTROS
                                </button>
                                <img onClick={show_filtro} src={filtro} className="Filtro-icomo" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-12 Filtro-div-movil">
                    <div className="row">
                        <span className="Cruz" onClick={hide_filtro}>x</span>
                    </div>
                    <div className="row pl-3 mb-4 mt-3">
                        <span className="F-peq1">Filtra los resultados</span>
                    </div>
                    <nav className="row mb-1 text-left w-100 ml-0">
                        <div className="col-md-12 Click1  p-0">
                            {/*<img src={flecha_abajo} className="d-md-none Flechas-faq Flecha-abajo Click1 Z-index-bajo"
                                 alt=""/>
                            <img src={flecha_arriba}
                                 className="d-md-none Flechas-faq Ocultar Flecha-arriba Click1 Z-index-bajo" alt=""/>*/}
                            <p className="accordion  ">Fecha</p>
                            <div className="panel ">
                                <Datepicker tipo={'inline'}/>

                            </div>
                        </div>
                        <div className="col-md-12 Click2  p-0">
                           {/* <img src={flecha_abajo} className="d-md-none Flechas-faq Flecha-abajo Click2 Z-index-bajo"
                                 alt=""/>
                            <img src={flecha_arriba}
                                 className="d-md-none Flechas-faq Ocultar Flecha-arriba Click2 Z-index-bajo" alt=""/>*/}
                            <p className="accordion  ">Personas</p>
                            <div className="panel ">
                                <div className="d-flex flex-column p-4 justify-content-start pt-4">
                                    <div className="col-12 d-flex pl-0 pr-0">
                                        <div className="col-6 pl-0 d-flex align-items-center">
                                            <span>Adultos</span>

                                        </div>
                                        <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                            <div onClick={this.rest_adultos.bind(this)} className="Filtro-boton-menos">
                                                <img src={menos} className="img-fluid" alt=""/></div>
                                            <span className="pt-2">{this.state.contador_adultos}+</span>
                                            <div onClick={this.sum_adultos.bind(this)} className="Filtro-boton-mas">
                                                <img src={mas} className="img-fluid" alt=""/></div>
                                        </div>

                                    </div>
                                    <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                        <div className="col-6 pl-0 d-flex align-items-center">
                                            <span>Niños <br/> <span className="Filtro-gray">hasta 12 años</span></span>

                                        </div>
                                        <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                            <div onClick={this.rest_ninyos.bind(this)} className="Filtro-boton-menos">
                                                <img src={menos} className="img-fluid" alt=""/></div>
                                            <span className="pt-2">{this.state.contador_ninyos}+</span>
                                            <div onClick={this.sum_ninyos.bind(this)} className="Filtro-boton-mas"><img
                                                src={mas} className="img-fluid" alt=""/></div>

                                        </div>

                                    </div>
                                    <div className="col-12 pt-5 w-100 pl-0 pr-0">
                                        <button onClick={this.restablecer.bind(this)}
                                                className="Btn-restablecer pl-0">Restablecer
                                        </button>
                                        <button onClick={this.aplicar.bind(this)} id="aplicar_personas"
                                                className="Btn-aplicar">Aplicar
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 Click3 p-0">
                          {/*  <img src={flecha_abajo} className="d-md-none Flechas-faq Flecha-abajo Click3 Z-index-bajo"
                                 alt=""/>
                            <img src={flecha_arriba}
                                 className="d-md-none Flechas-faq Ocultar Flecha-arriba Click3 Z-index-bajo" alt=""/>*/}
                            <p className="accordion  ">Tipo de viaje</p>
                            <div className="panel ">
                                <div className="d-flex flex-column px-4 justify-content-start pt-1">
                                    <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="ch_individual"
                                                   value="1"/>
                                            <label class="form-check-label pl-4">Vuelo individual</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="ch_ninos"
                                                   value="1"/>
                                            <label class="form-check-label pl-4">Con niños</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="ch_2"
                                                   value="1"/>
                                            <label class="form-check-label pl-4">Vuelo para 2</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="ch_4"
                                                   value="1"/>
                                            <label class="form-check-label pl-4">Vuelo para 4</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="ch_adaptados"
                                                   value="1"/>
                                            <label class="form-check-label pl-4">Vuelos adaptados</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-4 justify-content-end">
                                        <div class="form-check form-check-inline Input-gray m-0">
                                            <label class="form-check-label  pr-3">Globo no compartido</label>

                                            <input class="form-check-input" type="checkbox" id="ch_nocompartidos"
                                                   value="1"/>
                                        </div>
                                    </div>

                                    <div className="col-12 pt-4 w-100 pl-0 pr-0">
                                        <button onClick={retablecer_chk} className="Btn-restablecer pl-0">Restablecer
                                        </button>
                                        <button onClick={this.aplicar.bind(this)} id="aplicar_tipovuelo"
                                                className="Btn-aplicar">Aplicar
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 Click4 p-0">
                            {/*<img src={flecha_abajo} className="d-md-none Flechas-faq Flecha-abajo Click4 Z-index-bajo"
                                 alt=""/>
                            <img src={flecha_arriba}
                                 className="d-md-none Flechas-faq Ocultar Flecha-arriba Click4 Z-index-bajo" alt=""/>*/}
                            <p className="accordion  ">Packs de vuelo</p>
                            <div className="panel ">
                                <div className="d-flex flex-column px-4 justify-content-start pt-1">
                                    <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox"
                                                   onClick={this.toggle_ch_romantico.bind(this)} id="ch_romantico"
                                                   value="1" checked={this.state.p_romantico}/>
                                            <label class="form-check-label pl-4">Pack Romántico</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox"
                                                   onClick={this.toggle_ch_historia.bind(this)} id="ch_historia"
                                                   value="1" checked={this.state.p_historico}/>
                                            <label class="form-check-label pl-4">Pack Historico</label>
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" onClick={this.toggle_ch_aventura.bind(this)}
                                                   type="checkbox" id="ch_aventura"
                                                   value="1" checked={this.state.p_aventura}/>
                                            <label class="form-check-label pl-4">Pack Aventura</label>
                                        </div>
                                    </div>


                                    <div className="col-12 pt-4 w-100 pl-0 pr-0">
                                        <button onClick={retablecer_chk} className="Btn-restablecer pl-0">Restablecer
                                        </button>
                                        <button onClick={this.aplicar.bind(this)} id="aplicar_pack"
                                                className="Btn-aplicar">Aplicar
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </nav>
                    {/*  <div className="row pt-3">
                        <div className="col-12 text-center">
                            <a href="/filtro">
                                <button className="Btn-skinnyblue">ver ofertas</button>
                            </a>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <a href="/filtro">
                                <button className="Btn-red">todos los vuelos</button>
                            </a>
                        </div>
                    </div>*/}
                </div>

            </div>
        )
    }

}

export default Buscador_filtro_movil;

