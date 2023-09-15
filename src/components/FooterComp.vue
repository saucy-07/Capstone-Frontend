<template>
    <footer>
        <div class="content-wrap">
            <div class="information-div">
                <p style="color: black; text-decoration: underline;"><strong>Information</strong></p>
                <ul>
                    <li><p>About Us</p></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>T&C's</p></li>
                </ul>
            </div>
            <div class="account-div">
                <p style="color: black; text-decoration: underline;"><strong>Account</strong></p>
                <ul>
                    <li><p>My Account</p></li>
                    <li><p>Wish List</p></li>
                </ul>
            </div>
            <div class="contact-div">
                <p style="color: black; text-decoration: underline;"><strong>Contact</strong></p>
                <ul>
                    <li><p>Contact Us</p></li>
                    <li><p>Email: danger@noodle.co.za</p></li>
                    <li><p>Telephone: 021-772-7794</p></li>
                </ul>
            </div>
        </div>
        <div class="admin-div">
            <router-link class="admin-router-link" to="/src/views/AdminView.vue"><strong>Admin</strong></router-link>
        </div>
        <div class="copyright-div">
            <p>Copyright&copy; {{currentYear}}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp',
    data(){
        return{
            currentYear: null
        };
    },
    mounted(){
        this.getCurrentYear();
    },
    methods: {
        getCurrentYear(){
            this.currentYear = new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
.content-wrap{
    display: flex;
    justify-content: space-evenly;
}
footer{
    justify-content: space-evenly;
    background-color: #5F7161;
    color: rgb(255, 255, 255);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    position: static;
    bottom: 0;
    width: 100%;
}
.information-div, .account-div, .contact-div{
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-bottom: 1vw;
    font-size: 2.4vh;
}
.admin-div{
    text-align: center;
    margin-bottom: 1vw;
}
.admin-router-link{
    color: white;
    text-decoration: none;
    padding: 0px 15px 0px 0px;
}
.admin-router-link:hover{
    color: rgb(152, 212, 162);
    text-decoration: underline;
}
.copyright-div{
    text-align: center;
}
@media only screen and (max-width: 500px) {
    .content-wrap{
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
    }
    .information-div, .account-div, .contact-div{
        text-align: left;
        margin-right: auto;
        margin-left: 8%;
        margin-bottom: 1vw;
    }
}
</style>