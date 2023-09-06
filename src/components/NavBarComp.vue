<template>
    <nav>
        <div class="store-logo-div">
            <img src="https://i.postimg.cc/0yLj1xJ9/pngegg.png" alt="home">
            <router-link class="store-logo" to="/">THE DANGER NOODLE™</router-link>
        </div>
        <div class="router-link-div">
            <router-link class="router-link" to="../views/LogInView.vue">Log In</router-link>
            <router-link class="router-link" to="../views/WishListView.vue">Wish List</router-link>
            <router-link class="router-link" to="../views/CartView.vue">Cart</router-link>
            <router-link class="router-link" to="../views/CheckoutView.vue">Checkout</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComp'
}
</script>

<style scoped>
*{
    font-size: 20px;
}
nav {
    background-color: #6D8B74;
    display: flex;
    height: 60px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    position: sticky;
    top: 0;
    width: 100%;
}
.router-link{
    color: white;
    text-decoration: none;
    padding: 0px 15px 0px 0px;
}
.router-link-div{
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
}
.store-logo{
    align-content: center;
    color: white;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0 0 0 5px;
}
.store-logo-div{
    display: flex;
}
.store-logo-div img{
    height: 30px;
    margin: auto 0 auto 15px;
}
.store-logo:active, .router-link:active, .store-logo:hover, .router-link:hover{
    color: rgb(152, 212, 162);
    text-decoration: underline;
}
</style>