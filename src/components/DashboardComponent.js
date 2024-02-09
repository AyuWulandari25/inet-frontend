import * as React from "react";
import {API_URL} from "../utils/constants"
import axios from "axios";

export default class DashboardComponent extends React.Component {
    state = {
        products : []
    }

    componentDidMount () { 
        axios.get(API_URL+"products").then(res => {
            const products = res.data
            this.setState({products})
        }).catch((err) => {
            console.log(err, "error get");
        })
    }
    render () {
        return (
            <div className="pr-16 bg-slate-50 max-md:pr-5">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-11 mx-auto w-full bg-white max-md:mt-10">
                    <div className="flex gap-5 self-start ml-10 max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef9ac5dcd763044ba828a226593c59bd045c7593dd034220af29ed23f686af3?apiKey=61ff43272a5b46609e5949f30c25179c&"
                        className="aspect-[1.04] w-[52px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg font-semibold text-slate-800">
                          MyInet
                        </div>
                        <div className="mt-3.5 text-sm whitespace-nowrap text-neutral-400">
                          Always Connect
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-10 mt-2.5 max-md:px-5">
                      <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
                        <div className="flex flex-col text-lg text-neutral-500">
                          <div className="font-medium text-slate-800">My Account</div>
                          <div className="flex gap-5 justify-between mt-6">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f44707716aba6cc8f8ab11ff4ebc09939eacb8a403589b37ab3ec238982def?apiKey=61ff43272a5b46609e5949f30c25179c&"
                              className="my-auto w-6 aspect-square"
                            />
                            <div className="flex-auto">Your Order</div>
                          </div>
                        </div>
                        <div className="flex flex-col self-start mt-10 text-sm font-medium text-right text-blue-600 whitespace-nowrap max-md:mt-10">
                          <div className="justify-center px-2.5 py-4 rounded-full aspect-square">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-5 ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-5 justify-between items-start">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9b1d4b7911c21880ce07a41d6c6422273cf3f75ad17ab5c171f86a2df02fd3b?apiKey=61ff43272a5b46609e5949f30c25179c&"
                          className="aspect-square w-[60px]"
                        />
                        <div className="flex flex-col flex-1 mt-2">
                          <div className="text-2xl font-semibold whitespace-nowrap text-slate-900">
                            Hallo, Yeager
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 self-start text-sm text-neutral-500">
                        <div className="flex gap-1.5 justify-between px-5 py-3.5 bg-white rounded-xl">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/297808f8a6d94866757e997cc9ed3a954c280774e48223b336d7026d9fff4071?apiKey=61ff43272a5b46609e5949f30c25179c&"
                            className="w-6 aspect-square"
                          />
                          <div className="flex-auto my-auto">Search shoes</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                      <div className="flex-auto text-2xl font-semibold text-slate-800">
                        Exclusive Product From MyInet
                      </div>
                    </div>
                    <div className="mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        {
                            this.state.products
                            .map(product =>
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-5 mx-auto w-full bg-white rounded-3xl max-md:mt-6">
                                  <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef9ac5dcd763044ba828a226593c59bd045c7593dd034220af29ed23f686af3?apiKey=61ff43272a5b46609e5949f30c25179c&"
                                    className="w-full aspect-[1.45]"
                                  />
                                  <div className="flex gap-4 justify-between items-start mt-3.5">
                                    <div className="flex flex-col flex-1 text-slate-1000">
                                      <div>{product.name}</div>
                                      <div className="mt-3 text-base font-semibold whitespace-nowrap text-slate-800">
                                        {product.description}
                                      </div>
                                      <div className="mt-7">Price:</div>
                                      <div className="mt-3 text-lg font-semibold text-blue-600">
                                        Rp {product.price}
                                      </div>
                                    </div>
                                    <div className="flex flex-col flex-1 mt-1.5 text-sm font-medium text-white whitespace-nowrap">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdcb3f22f6bc234b60cd994ea5e92ff9af7e1d6472ef0d003268a1481f86ee10?apiKey=61ff43272a5b46609e5949f30c25179c&"
                                        className="self-end w-6 aspect-square"
                                      />
                                      <div className="justify-center px-6 py-3 mt-7 bg-blue-600 rounded-xl max-md:px-5">
                                        Buy Now
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                        }
                      </div>
                    </div>
                </div>
              </div>
            </div>
          )
    }
  
}