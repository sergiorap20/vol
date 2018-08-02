import React, {Component} from 'react';

import menos from '../../images/menos.png'
import mas from '../../images/mas.png'
import $ from 'jquery';

import Datepicker from './Datepicker';
import moment from 'react-datepicker';
import './Buscador_filtro.css';


function retablecer_chk(){
    $('input:checkbox').prop('checked', false);
}




class Buscador_filtro extends React.Component{

    constructor(){
        super();
        this.state = {
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            ocultar_filtro_pack: true,
            contador_adultos:0,
            contador_ninyos:0,
            v_individual: false,
            v_ninos: false,
            v_2: false,
            v_4: false,
            v_adaptados: false,
            globo_nocompartido: false,
            p_romantico: false,
            p_aventura: false,
            p_historico: false,
            active_tipo : '',
            active_packs : '',
            active_personas : '',
            color_segunpack: 'Hover-blue'

        };

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

    toggle_filtro_tipo() {

        this.setState({
            ocultar_filtro_tipo: !this.state.ocultar_filtro_tipo,
            ocultar_filtro_personas: true,
            ocultar_filtro_pack: true,
            active_packs : '',
            active_personas : ''
        });

         if(this.props.pack=="Pack_historico"){
            this.setState({
                active_tipo:'Filtro-activado-historico'
            });

        }else if(this.props.pack=="Pack_romantico"){
            this.setState({
                active_tipo:'Filtro-activado-romantico'
            });

        }
         else{
             this.setState({

                 active_tipo : 'Filtro-activado',
             });

         }
    }
    toggle_filtro_personas() {
        this.setState({
            ocultar_filtro_personas: !this.state.ocultar_filtro_personas,
            ocultar_filtro_tipo: true,
            ocultar_filtro_pack: true,
            active_tipo: '',
            active_packs : '',
        });

         if(this.props.pack=="Pack_historico"){
            this.setState({
                active_personas:'Filtro-activado-historico'
            });

        }else if(this.props.pack=="Pack_romantico"){
            this.setState({
                active_personas:'Filtro-activado-romantico'
            });

        }
         else{
             this.setState({

                 active_personas : 'Filtro-activado'

             });

         }
    }
    toggle_filtro_pack() {
        this.setState({
            ocultar_filtro_pack: !this.state.ocultar_filtro_pack,
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            active_tipo: '',
            active_personas : ''
        });

         if(this.props.pack=="Pack_historico"){
            this.setState({
                active_packs:'Filtro-activado-historico'
            });

        }else if(this.props.pack=="Pack_romantico"){
            this.setState({
                active_packs:'Filtro-activado-romantico'
            });

        }
        else{
             this.setState({

                 active_packs : 'Filtro-activado',
             });

         }
    }
    cerrartodo() {
        this.setState({
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            ocultar_filtro_pack: true
        });
    }

    sum_adultos(){
        this.setState({
            contador_adultos: this.state.contador_adultos+1
        })
    }

    rest_adultos(){
        if(this.state.contador_adultos>0) {
            this.setState({
                contador_adultos: this.state.contador_adultos - 1
            })
        }
    }

    sum_ninyos(){
        this.setState({
            contador_ninyos: this.state.contador_ninyos+1
        })
    }

    rest_ninyos(){
        if(this.state.contador_ninyos>0){
            this.setState({
                contador_ninyos: this.state.contador_ninyos-1
            })
        }

    }

    restablecer(){
        this.setState({
            contador_adultos: 0,
            contador_ninyos: 0
        })
    }

    aplicar(){
        this.setState({
            ocultar_filtro_tipo: true,
            ocultar_filtro_personas: true,
            ocultar_filtro_pack: true
        });
    }

    color_segunpack(){
        if(this.props.pack=="Pack_historico"){
            this.setState({
                color_segunpack:'Hover-historico'
            });

        }else if(this.props.pack=="Pack_romantico"){
            this.setState({
                color_segunpack:'Hover-romantico'
            });

        }

    }
    componentWillMount(){
        if(this.props.pack=="Pack_romantico"){
            this.setState({
                p_romantico: true
            });
        }
        if(this.props.pack=="Pack_historico"){
            this.setState({
                p_historico: true
            });
        }
        this.color_segunpack();
    }

    componentDidMount(){
        /*Hace que al clicar en cualquier sitio que no tenga la clase menu icon se ejecute el hide menu*/
        $(document).on("click", function (e) {
            let clase= $(e.target).attr("class") ;
            console.log(clase);

            if (clase != "img-fluid" &&  clase != "Opacity" &&  clase != "Btn-restablecer"   ){
                $(".Botones-filtro .card").hide();
                if($("#input_hidden_tipopack").val()=="Pack_romantico"){
                    $(".Btn-gris-sinfondo").removeClass('Filtro-activado-romantico');

                }else if($("#input_hidden_tipopack").val()=="Pack_historico"){
                    $(".Btn-gris-sinfondo").removeClass('Filtro-activado-historico');

            }else{
                    $(".Btn-gris-sinfondo").removeClass('Filtro-activado');

                }
                $(".Elemento-tarjeta").removeClass('Difuminado');
            }

        });


        $(".Btn-gris-sinfondo").click(function () {
            setTimeout(()=>{
                $(".Elemento-tarjeta").addClass('Difuminado');
            },10)

        })


    }
    render () {


        var ocultar_filtro_tipo = {
            display: this.state.ocultar_filtro_tipo ? "block" : "none"
        };

        var ocultar_filtro_personas = {
            display: this.state.ocultar_filtro_personas ? "block" : "none"
        };
        var ocultar_filtro_pack = {
            display: this.state.ocultar_filtro_pack ? "block" : "none"
        };

        var hidden_filtro_tipo = {
            display: this.state.ocultar_filtro_tipo ? "none" : "block"
        }

        var hidden_filtro_personas = {
            display: this.state.ocultar_filtro_personas ? "none" : "block"
        }

        var hidden_filtro_pack = {
            display: this.state.ocultar_filtro_pack ? "none" : "block"
        }



        return (
                        <div className="row p-3 Botones-filtro">
                            <input type="hidden" id="input_hidden_tipopack" value={this.props.pack}/>
                            <div className="col-12 col-md-12 col-lg-9 col-xl-6 d-flex pl-0">
                                <div className="w-150" onClick={this.cerrartodo.bind(this)}>
                                    <Datepicker/>

                                </div>
                                <div className="w-150">
                                    <button onClick={this.toggle_filtro_personas.bind(this)} className={`Btn-gris-sinfondo ${this.state.color_segunpack} Btn-gris-arreglado ${this.state.active_personas}   `}>
                                        Personas
                                    </button>
                                    <div id="card_personas" className={`card Filtro-card Filtro-personas Z-index-alto `} style={ hidden_filtro_personas }>
                                        <div className="d-block flex-column p-4 justify-content-start pt-4">
                                            <div className="col-12 d-flex pl-0 pr-0">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Adultos</span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_adultos.bind(this)} className="Filtro-boton-menos"> <img src={menos} className="img-fluid" alt=""/></div>
                                                    <span>{this.state.contador_adultos}+</span>
                                                    <div onClick={this.sum_adultos.bind(this)} className="Filtro-boton-mas">
                                                        <img src={mas} className="img-fluid" alt=""/></div>
                                                </div>

                                            </div>
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div className="col-6 pl-0 d-flex align-items-center">
                                                    <span>Niños <br/> <span className="Filtro-gray">hasta 12 años</span></span>

                                                </div>
                                                <div className="col-6 pr-0 d-flex align-items-center justify-content-around">
                                                    <div onClick={this.rest_ninyos.bind(this)} className="Filtro-boton-menos"><img src={menos} className="img-fluid" alt=""/></div>
                                                    <span>{this.state.contador_ninyos}+</span>
                                                    <div onClick={this.sum_ninyos.bind(this)} className="Filtro-boton-mas"><img src={mas} className="img-fluid" alt=""/></div>

                                                </div>

                                            </div>
                                            <div className="col-12 pt-5 w-100 pl-0 pr-0">
                                                <button onClick={this.restablecer.bind(this)} className="Btn-restablecer pl-0">Restablecer</button>
                                                <button onClick={this.aplicar.bind(this)} id="aplicar_personas" className="Btn-aplicar">Aplicar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-150">
                                    <button onClick={this.toggle_filtro_tipo.bind(this)} className={`Btn-gris-sinfondo ${this.state.color_segunpack} Btn-gris-arreglado ${this.state.active_tipo}   `}>
                                        Tipo de vuelo
                                    </button>
                                    <div id="card_tipovuelo" className={`card Filtro-card Filtro-tipovuelo Z-index-alto`} style={ hidden_filtro_tipo }>
                                        <div className="d-block flex-column px-4 justify-content-start pt-1">
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" id="ch_individual"
                                                           value="1"/>Vuelo individual
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" id="ch_ninos"
                                                           value="1"/>
                                                   Con niños
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" id="ch_2"
                                                           value="1"/>
                                                    Vuelo para 2
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" id="ch_4"
                                                           value="1"/>
                                                    Vuelo para 4
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" id="ch_adaptados"
                                                           value="1"/>
                                                    Vuelos adaptados
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-4 justify-content-end">
                                                <div class=" Input-gray m-0 d-flex align-items-center">
                                                    Globo no compartido

                                                    <input class="Opacity" type="checkbox" id="ch_nocompartidos"
                                                           value="1"/>
                                                </div>
                                            </div>

                                            <div className="col-12 pt-4 w-100 pl-0 pr-0">
                                                <button onClick={retablecer_chk} className="Btn-restablecer pl-0">Restablecer</button>
                                                <button  onClick={this.aplicar.bind(this)} id="aplicar_tipovuelo" className="Btn-aplicar">Aplicar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-150">
                                    <button id="btn_packs" onClick={this.toggle_filtro_pack.bind(this)} className={`Btn-gris-sinfondo ${this.state.color_segunpack} Btn-gris-arreglado  ${this.state.active_packs}   ${this.props.pack}`} >
                                        {this.props.texto}
                                    </button>
                                    <div id="card_pack" className={`card Filtro-card Filtro-packs Z-index-alto pb-3`} style={ hidden_filtro_pack }>
                                        <div className="d-block flex-column px-4 justify-content-start pt-1">
                                            <div className="col-12 d-flex pl-0 pr-0 pt-3">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" onClick={this.toggle_ch_romantico.bind(this)} id="ch_romantico"
                                                           value="1" checked={this.state.p_romantico} />
                                                    Pack Romántico
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" type="checkbox" onClick={this.toggle_ch_historia.bind(this)} id="ch_historia"
                                                           value="1" checked={this.state.p_historico} />
                                                    Pack Historico
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pl-0 pr-0 pt-2">
                                                <div class="">
                                                    <input class="Opacity" onClick={this.toggle_ch_aventura.bind(this)} type="checkbox" id="ch_aventura"
                                                           value="1" checked={this.state.p_aventura} />
                                                    Pack Aventura
                                                </div>
                                            </div>


                                            <div className="col-12 pt-4 w-100 pl-0 pr-0">
                                                <button onClick={retablecer_chk} className="Btn-restablecer pl-0">Restablecer</button>
                                                <button onClick={this.aplicar.bind(this)} id="aplicar_pack" className="Btn-aplicar">Aplicar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
    }
}
export default Buscador_filtro;
