<template>
	<transition  name="modal">
		<div class="modal-mask">
	      <div class="modal-wrapper" @click="$emit('close')">
	        <div class="modal-container modal-container-width" @click.stop>
	          <div class="modal-header">
	            <slot name="header">
	            </slot>
	          </div>

	          <div class="modal-body">
	            <slot name="body">
	            </slot>
	          </div>

	          <div class="modal-footer">
	            <slot name="footer">
	            </slot>
	          </div>
	        </div>
	      </div>
	    </div>
	  </transition>
</template>


<style scoped>
	.modal-mask {
	  position: fixed;
	  z-index: 9998;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, .5);
	  display: table;
	  transition: opacity .3s ease;
	}

	.modal-wrapper {
	  display: table-cell;
	  vertical-align: middle;
	}

	.modal-container {
	  width: 300px;
	  margin: 0px auto;
	  padding: 20px 30px;
	  background-color: #fff;
	  border-radius: 5px;
	  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	  transition: all .3s ease;
		overflow-y: auto;
	}

	.modal-header h3 {
	  margin-top: 0;
	  color: orange;
	}

	.modal-body {
	  margin: 20px 0;
	}

	.modal-default-button {
	  float: right;
	}

@media(min-width: 640px) {
	.modal-container-width {
		width: 460px !important;
	}
}

</style>