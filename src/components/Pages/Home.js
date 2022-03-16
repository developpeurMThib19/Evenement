import React, { Component } from "react";
import '../../App.css';
import Sombre from "../../components/Sombre";




export const Home = () => {
      let objJson = {
        prenom : "dany",
        age : 30,
        taille : 170
    }
    let objLinea = JSON.stringify(objJson);
    localStorage.setItem("obj",objLinea);
  
 
  return (   
    <div>
      <div className="App-header ">
        <div className="container border border-danger rounded mr-5 pt-5 pb-5 mt-5 mb-5">
          <div id="electro1">
            <div class="container-fluid border border-primary rounded mt-5 btn wrap button">
              <div class="d-flex justify-content-start ">
                <div className="border-primary rounded align-self-sm-center ">   
                <div class="container border border-light rounded mb-5  w-50 rounded-top">
                    <p className="text-light mt-2">MER <br></br> 16 <br></br> MARS</p>
                  </div>       
                  <img src='/electro/electro3.jpg' width="300" height="170"/> 
                </div>
                <div class="border border-success text-light d-flex justify-content-end">
                  <div class="">
                  <h1>Electronic Peak Festival Les Arcs : NTO, Jennifer Cardini, La P’tite Fumée, François X, I Woks…</h1>
                    <div class="mt-5">    
                      <p class="h5">3 Rue de la tour</p>
                      <p class="h5">martin.thibault78700@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="electro2">
            <div class="container-fluid border border-primary rounded mt-5 btn wrap button">
              <div class="d-flex justify-content-start ">
                <div className="border-primary rounded align-self-sm-center ">
                <div class="container border border-light rounded mb-5  w-50 rounded-top">
                    <p className="text-light mt-2">JEU <br></br> 17 <br></br> MARS</p>
                  </div>           
                  <img src='/electro/electro3.jpg' width="300" height="170"/> 
                </div>
                <div class="border border-success text-light  m-5 ">
                  <div class="">
                    <h1>D3 Festival</h1>
                    <div class="mt-5">    
                      <p class="h5">3 Rue de la tour</p>
                      <p class="h5">martin.thibault78700@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="electro3">
            <div class="container-fluid border border-primary rounded mt-5 btn wrap button">
              <div class="d-flex justify-content-start ">
                <div className="border-primary rounded align-self-sm-center ">
                <div class="container border border-light rounded mb-5  w-50 rounded-top">
                    <p className="text-light mt-2 ">VEN <br></br> 18 <br></br> MARS</p>
                  </div>           
                  <img src='/electro/electro3.jpg' width="300" height="170"/> 
                </div>
                <div class="border border-success text-light d-flex justify-content-end">
                  <div class="">
                    <h1>Hibernation Festival 2022</h1>
                    <div class="mt-5">    
                      <p class="h5">3 Rue de la tour</p>
                      <p class="h5">martin.thibault78700@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="electro4">
            <div class="container-fluid border border-primary rounded mt-5 btn wrap button">
              <div class="d-flex justify-content-start ">
                <div className="border-primary rounded align-self-sm-center ">
                <div class="container border border-light rounded mb-5  w-50 rounded-top ">
                    <p className="text-light mt-2 ">SAM <br></br> 19 <br></br> MARS</p>
                  </div>           
                  <img src='/electro/electro4.jpg' width="300" height="170"/> 
                </div>
                <div class="border border-success text-light d-flex justify-content-end">
                  <div class="">
                    <h1>WomenBeats #5 : Paloma Colombe, Esinam, Morjane Ténéré</h1>

                      <div class="mt-5">    
                        <p class="h5">3 Rue de la tour</p>
                        <p class="h5">martin.thibault78700@gmail.com</p>
                      </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  
};
