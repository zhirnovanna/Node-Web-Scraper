<template>
  <div>
    <div class="bloc-modal" v-if="isOpen">
      <div class="overlay" v-on:click="$emit('toggleModal')"></div>
      <div class="modal">
        <div v-on:click="$emit('toggleModal')" class="btn-modal btn btn-danger">
          X
        </div>
        <h1>Are you sure? Really?</h1>
        <p>
          <img src="@/assets/none.jpeg" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  props: ["isOpen", "toggleModal"],
};
</script>

<style>
.bloc-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.btn-modal {
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: rgb(128, 128, 128);
}
.btn-modal:hover {
  color: #6fae1d;
}
.overlay {
  position: fixed;
  background-color: #5a5959;
  opacity: 0.1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.modal {
  background: #ffffff;
  color: #333;
  padding: 30px;
  position: fixed;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
</style>
