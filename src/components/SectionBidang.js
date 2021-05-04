import React from 'react'

const SectionBidang = () => {
    return (
        <section className="bidang">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12 align-self-center">
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <h3 className="title-section">BIDANG LOMBA</h3>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <img src="/assets/images/mst.png" alt="" />
                                <a href="/" className="btn-bidang mst">Matematika, Sains, dan Teknologi</a>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <img src="/assets/images/ftr.png" alt="" />
                                <a href="/" className="btn-bidang ftr">Fisika Terapan dan Rekayasa</a>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <img src="/assets/images/ish.png" alt="" />
                                <a href="/" className="btn-bidang ish">Ilmu Sosial dan Humaniora</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default SectionBidang
