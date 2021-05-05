import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
                <section className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <form className="form-login">
                                    <div className="form-group">
                                        <label htmlFor="email">Surel (Email)</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter email" />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>                                    
                                    <button type="submit" className="btn-me btn-masuk">Submit</button>
                                    <span className="text-muted">Belum memiliki akun?</span>
                                    <a href="/daftar" className="btn-me btn-daftar">Daftar</a>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
