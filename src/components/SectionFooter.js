import React from 'react'

const SectionFooter = () => {
    return (
        <section className="footer">            
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12 align-self-center">        
                        <div className="col-lg-4 mx-auto"> 
                            <h3 className="title-section">Diselenggarakan Oleh</h3>   
                        </div>
                        <div className="col-lg-6 mx-auto text-center">
                            <img src="/assets/images/logo-puspresnas.png" alt="" className="logo" />
                        </div> 
                        <div className="col-lg-6 mx-auto">
                            <a href="/" className="fb-tw">
                                <i class="fab fa-facebook-square"></i> <i class="fab fa-twitter"></i> Puspresnas
                            </a>
                            <a href="/" className="yt">
                                <i class="fab fa-youtube"></i> Pusat Prestasi Nasional
                            </a>
                            <a href="/" className="yt">
                                <i class="fab fa-instagram"></i> @Puspresnas
                            </a>
                        </div>                                                             
                    </div>                                       
                </div>
            </div>
            
        </section>
    )
}

export default SectionFooter
