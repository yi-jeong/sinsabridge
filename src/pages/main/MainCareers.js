import React from "react";

function MainCareers(){
    return(
        <div className="mainCareers">
            <div className="container">
                <div className="row">

                    <div className="content col-xl-5">
                        <h3>CAREERS</h3>
                        <h2>Right people for the 'sinsabridge'</h2>
                        <p>
                            기술과 사람을 중심으로 새로운 세상, 새로운 연결을 함께 하는<br/>
                            sinsabridge 동반 성장할 전문가를 기다립니다.
                        </p>
                        <a type="button" className="btn-type-black">영입절차 확인하기</a>
                    </div>

                    <div className="img col-xl-7">
                        <img src="https://www.dktechin.com/service/assets/images/img_main_careers.png" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainCareers;