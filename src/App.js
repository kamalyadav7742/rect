import './App.css';
import { Link } from 'react-router-dom';



function App() {
  const imageUrl = 'logo.png';
  const imageUrl1 = 'bitterfly.png';
  const imageUrl2 = 'Group.png';
  const imageUrl3 = '_x32_.png';
  const imageUrl4 = 'image 11.png';
  const imageUrl5 = 'image 13.png';
  const imageUrl6 = 'image 15.png';
  const imageUrl7 = 'ill-08.png';
  
  
  return (
    
    <>
<nav class="navbar navbar-expand-lg  mt-3">
        <div class="container-fluid shadow py-3 shadow mt-2 mx-5">
            <a class="navbar-brand" href="/">

            <img src={imageUrl} className="img-fluid" alt="A red apple on a white plate" />

            
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 hu mb-lg-0">
                    <li class="nav-item ">
                        <a class="nav-link " aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>

                    <li class="nav-item">
                        <Link to="/about" class="nav-link" >About</Link>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Feature</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Referral Program</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Support</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">

                    <button class="btn btn text-light nav_button rounded-5 mnv" type="submit">Request Demo</button>
                </form>
            </div>
        </div>
    </nav>

    {/* <!-- main --> */}

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 mt-5">
            <div class="bitt">
                <img src={imageUrl1} alt=""/>
            </div>
            <p class="p_1 d-flex justify-content-center mt-5 align-items-center text-center ">Simplified,
                Streamlined</p>
            <p class="p_2 d-flex justify-content-center align-items-center text-center ">Preschool Management</p>
            <p class="p_3  d-flex justify-content-center align-items-center text-center">Spend less time juggling
                administrative tasks and more time growing your<br/> preschool with Our School Hangout.</p>

            <div class="text-center">

                <button class="btn new_one btn text-light nav_button rounded-5" type="submit">Request Demo</button>
            </div>

        </div>
    </div>
</div>

{/* <!-- end -->

<!-- start II --> */}

<div class="container-fluid">
    <div class="row">
        <div class=" col-md-12 ">
            <img src={imageUrl2}  class="img-fluid w-100" alt=" group"/>

        </div>
    </div>
</div>

{/* <!-- end --> */}


<div class="container-fluid mt-5">
    <div class="rainbow">
        <img src={imageUrl3} class="img-fluid" alt="rainbow"/>
    </div>
    <div class="row d-flex justify-content-center align-items-center mt-5">
        <div class="col-md-3 text-center mt-5">
            <p  class="mt-4 fs_1"><span class="mine">Mine</span>are:</p>
        </div>
    </div>
</div>
{/* <!-- end --> */}

{/* <!-- start  --> */}

<div class="container-fluid mt-4">
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-3 px-0 mx-0" >
            <div class="card px-2 py-2 day">
                <img src={imageUrl4} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text l_45">Preschools/Day schools</p>
                </div>
            </div>

        </div>
        <div class="col-md-3">
            <div class="card px-2 py-2 prog">
                <img src={imageUrl5} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">K-12/Adult Education Programs</p>
                </div>
            </div>

        </div>
        <div class="col-md-3">
            <div class="card px-2 py-2 school">
                <img src={imageUrl6}class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Summer Camps/Before  </p>
                </div>
            </div>

        </div>
    </div>
</div>

{/* <!-- end --> */}
<div class="tower">
    <img src={imageUrl7} alt=""/>
</div>

{/* <!-- /start --> */}

<div class="container-fluid mt-5">
    <div class="row">
    <div className="col-md-12 mt-5 py-5 img-pre" style={{ backgroundImage: "url('pre-bg.jpg')" }}>

           

        </div>
    </div>
</div>


    </>
  );
}

export default App;
