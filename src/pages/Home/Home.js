import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    state = {
        arrFilms: []
    }

    loadFilm = () => {
        //Dùng Axios gọi lấy thông tin từ back-end
        // console.log(1)
        const promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'

        });
        promise.then((result) => {
            console.log(result.data);
            this.setState({
                arrFilms: result.data
            })
        })

        promise.catch((error) => {
            console.log('err', error.response.data)
        })
    }
    renderDSFilms = () => {
        // this.loadFilm()
        return this.state.arrFilms.map((items, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={items.hinhAnh} alt={items.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{items.tenPhim}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>


        })
    }
    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <button className="btn btn-success"
                 
                >Lấy Danh Sách Phim</button>
                <div className="text-center display-4">Danh Sách Phim</div>
                <div className="row">
                    {this.renderDSFilms()}
                </div>
            </div>
        )
    }
    //Hàm giống hàm render của react component kế thừa nên có
    componentDidMount() {
        //Các api muốn gọi sau khi giao diện render thì sẽ gọi hàm này
        this.loadFilm();
    }
}
