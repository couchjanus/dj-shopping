<template>
<footer id="footer">
    <div class="footer-Before">
        <div class="container">
            <div class="block-news">
                <div class="row">
                    <h3>Be aware of our special discounts by subscribing to our newsletter ... </h3>
                    <div class="searchform newslatter">
                        <input type="text" placeholder="Your email address ..."/>
                        <button type="submit" class="btn btn-default">
                            <i class="fa fa-arrow-circle-o-left"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="address">
                        <img src="/static/images/home/map.png" alt=""/>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="address">
                        <img src="/static/images/home/map.png" alt=""/>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="companyinfo">
                        <h2><span>SHOP</span>CENTER</h2>
                        <h4> about us:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            The fabrication is by producing an incomprehensible simplicity of the printing industry and using graphic designers. Printers and texts
                             Rather, newspapers and magazines in the column and row as needed and for the current state of technology required and
                             Various applications are aimed at improving the application tools. Many books in the past sixty-three percent,
                             The present and the future require a lot of knowledge from the community and professionals to get to know more about the software
                             Computer designers, especially creative designers and leading.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-widget">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="single-widget">
                        <h2>Service</h2>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Online Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Change Location</a></li>
                            <li><a href="#">FAQ’s</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="single-widget">
                        <h2>Quock Shop</h2>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">T-Shirt</a></li>
                            <li><a href="#">Mens</a></li>
                            <li><a href="#">Womens</a></li>
                            <li><a href="#">Gift Cards</a></li>
                            <li><a href="#">Shoes</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="single-widget">
                        <h2>Policies</h2>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privecy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Billing System</a></li>
                            <li><a href="#">Ticket System</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="single-widget">
                        <h2>About Shopper</h2>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Company Information</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Store Location</a></li>
                            <li><a href="#">Affillate Program</a></li>
                            <li><a href="#">Copyright</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom" style="direction: ltr !important;">
        <div class="container">
            <div class="row">
                <p class="pull-left">&copy; {{ year }} | Built with 💗 by
                    <router-link to="/contributors">The Couch Janus Community</router-link>
                </p>
            </div>
        </div>
    </div>

</footer>
</template>

<script>
export default {
    name: `MainFooter`,
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    
};
</script>