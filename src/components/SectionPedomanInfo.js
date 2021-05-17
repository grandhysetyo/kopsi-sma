import React, { Component } from 'react'
import axios from 'axios'
import request_api from '../api/request_api'

export class SectionPedomanInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             informasi: [],             
        }
    }
    getDataInformasi = () =>{
        axios.get(request_api.fetchInformasi)
        .then((res)=> {
            if(res.data.length>3){
                this.setState({
                    informasi: res.data.slice(0,3)
                }) 
            }else{
                this.setState({
                    informasi: res.data
                })
            }       
                
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    componentDidMount() {
        this.getDataInformasi()
    }
    render() {
        return (
            <>        
            <section className="h-100">
                <div className="row h-100">
                    <div className="pedoman col-sm-12 col-md-12 col-lg-6 align-content-center">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 align-self-center">
                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <h3 className="title-section2">BUKU PEDOMAN</h3>
                                        </div>
                                    </div>                        
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img src="/assets/images/hero-pedoman.png" alt="" className="hero" />
                                            <a href="/" className="btn-pedoman">Unduh Pedoman Kopsi SMA Tahun 2021</a>
                                        </div>
                                        
                                    </div>
                                </div>                   
                            </div>                
                        </div>
                    </div>
                    <div className="info col-sm-12 col-md-12 col-lg-6  align-content-center">
                        <div className="container h-100 ">
                            <div className="row h-100">                    
                                <div className="col-lg-12 align-self-center">
                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <h3 className="title-section">INFORMASI TERBARU</h3>
                                        </div>
                                    </div>                        
                                    <div className="row">
                                        { this.state.informasi.map((data,idx) => 
                                            <div className="col-lg-12" key={data.info_id}>
                                                <a href="/" className="informasi">                                                      
                                                    <h5 className={idx === 0 ? "first-t" : idx===1 ? "second-t" : "third-t"}>{data.title}</h5>
                                                    <span className={idx === 0 ? "first" : idx===1 ? "second" : "third"}>{data.date}</span>                                                                       
                                                    <p>{data.desc}</p>
                                                </a>
                                            </div>
                                        )}                                                                                                                       
                                        <div className="col-lg-12">
                                            <a href="/" className="link-white float-right mr-4">Selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default SectionPedomanInfo
