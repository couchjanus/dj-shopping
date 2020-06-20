<template>
    <div class="header-bottom">
        <div class="container">
            <div class="row">

                <div class="col-sm-3">
                    <div class="search_box pull-left">
                        <input type="text" placeholder="search"/>
                    </div>
                </div>

                <div class="col-sm-9">
                    <div class="navbar-header">
                        <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="mainmenu pull-right">
                        <ul class="nav navbar-nav collapse navbar-collapse">
                            <li><router-link to="/" class="nav-link">Home</router-link></li>
                            
          
                            <li class="dropdown"><a href="#">shop<i class="fa fa-angle-down"></i></a>
                                <ul role="menu" class="sub-menu">
                                    <li><a href="shop.html">products</a></li>
                                    <li><a href="product-details.html"> product details</a></li>
                                    <li><a href="checkout.html">payment</a></li>
                                    <li><a href="cart.html"> buy a baske</a></li>
                                    <li><a href="login.html">login</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#">news<i class="fa fa-angle-down"></i></a>
                                <ul role="menu" class="sub-menu">
                                    <li><a href="blog.html"> last news</a></li>
                                    <li><a href="blog-single.html"> page news</a></li>
                                </ul>
                            </li>
                            <li><router-link to="/about" class="nav-link">About</router-link></li>
                            
                            <li><a href="contact-us.html">  contact us</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: `HeaderBottom`,
    data() {
        return {
            title: 'Header Bottom'
        }
    },
};
</script>