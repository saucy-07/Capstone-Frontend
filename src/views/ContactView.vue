<template>
      <div class="content-wrap">
    <div class="heading">
      <h1>Contact Us</h1>
      <br />
      <h3>Send us a message!</h3>
    </div>
    <div class="form-div">
      <form action="https://formspree.io/f/xwkjaayr" method="POST">
        <label>
          <p>Your email:</p>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <p>Your message:</p>
          <br />
          <input type="text" name="message" />
        </label>
        <br />
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
    name: 'ContactView'
}
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
  margin-top: 60px;
}
.heading {
  text-align: center;
  margin-top: 10px;
}
.form-div {
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 8%;
  padding-bottom: 8%;
  width: 75%;
  margin-top: 10px;
  margin-bottom: 15px;
}
input {
  width: 50%;
  height: 45px;
  font-size: 30px;
  margin-bottom: 10px;
}
p {
  font-size: 30px;
  margin-bottom: 10px;
}
button {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 100px;
  border: none;
  background-color: rgba(4, 255, 0, 0.936);
  height: 40px;
}
button:hover {
  background-color: rgb(76, 252, 0);
}
button:active {
  background-color: rgb(0, 205, 0);
}
</style>