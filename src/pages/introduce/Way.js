import TopBanner from '../TopBanner'
import Header from '../Header';
import Footer from "../Footer";

function Way(){

    const headerStyle=true;
    const topBannerID=3;

    return(
        <>
            <Header headerStyle={headerStyle}/>
            <TopBanner topBannerID={topBannerID}/>

            <div className="way">
            <div className="container">

                <h2>판교오피스</h2>
                <dl>
                    <dt>주소</dt>
                    <dd>경기 성남시 분당구 대왕판교로 644번길 49(삼평동) DTC타워 10층</dd>
                </dl>
                <dl>
                    <dt>전화번호</dt>
                    <dd>031-606-4600</dd>
                </dl>
                <div className='map'></div>

            </div>
            </div>

            <Footer/>
        </>
    );
}

export default Way;