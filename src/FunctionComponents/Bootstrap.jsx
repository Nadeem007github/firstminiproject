import React from 'react'

export default function Bootstrap() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">MyShop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Shop</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link text-light" href="#">Contact</a>
                            </li>

                        </ul>
                        <form class="d-flex w-100" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nadeem Saddieq
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Cart</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/images/banner1.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner2.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner3.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item active">
                        <img src="assets/images/banner1.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner2.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner3.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item active">
                        <img src="assets/images/banner1.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner2.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner3.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/banner3.jpg" height="420px" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className='bg-primary background text-light text-center p-2 m-2'>Latest Product Section</h5>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner3.jpg" height="100px" class="card-img-top" alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner3.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner3.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner3.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg"  height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg"  height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner3.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner1.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div class="card" >
                            <img src="assets/images/banner2.jpg" height="100px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Product Title 1</h5>
                                    <p class="card-text">Price : &#8377;<del>4500</del><sup>2500</sup></p>
                                    <p class="card-text">Discount : 60%</p>
                                    <a href="#" class="btn btn-primary w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
