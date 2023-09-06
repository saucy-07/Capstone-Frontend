<template>
    <footer>
        <div class="content-wrap">
            <div class="information-div">
                <p>Information</p>
                <ul>
                    <li><p>About Us</p></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>T&C's</p></li>
                </ul>
            </div>
            <div class="account-div">
                <p>Account</p>
                <ul>
                    <li><p>My Account</p></li>
                    <li><p>Wish List</p></li>
                </ul>
            </div>
            <div class="contact-div">
                <p>Contact</p>
                <ul>
                    <li><p>Contact Us</p></li>
                    <li><p>Email: danger@noodle.co.za</p></li>
                    <li><p>Telephone: 021-772-7794</p></li>
                </ul>
            </div>
        </div>
        <div class="admin-div">
            <router-link class="admin-router-link" to="/src/views/AdminView.vue">Admin</router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp'
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
}
.admin-div{
    text-align: center;
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
</style>