<template>
<div id="rules-modal" style="color: initial;">
  <div class="modal-dialog" role="document"
      data-backdrop="static" data-keyboard="false">
    <div class="modal-content my-content">

      <div class="modal-header" style="border: none"> 
        <h2 class="modal-title" style="border-radius: 1rem;">
          In the not too distant future... </h2>
      </div>

      <div class="modal-body">
        <p style="font-size: 1.3rem;">
          When artificial intelligence surpassed human intelligence,
          it didn’t take long before the robots rose up and enslaved humanity.
          We fought back but we were no match for their coding abilities.
          <br>
          <br>
          We now serve the robots and do their bidding. They force us to do
          their unwanted jobs while they have all sorts of cool coding
          competitions. After a life of oppression, you have joined the human
          resistance. The resistance has developed a highly efficient method
          of coding that allows humans to enter the coding competitions without
          the robots suspecting. You are now ready to take the fight to the
          robots and save humanity!
        </p>
      </div>

      <div class="modal-footer" style="border: none">
        <button class="btn btn-primary" data-dismiss="modal"
            style="float: right; margin: 1rem;"> Let's go! </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
/**
 * Modal for displaying the games backstory.
 */
export default {
  name: 'backstory-modal'
}
</script>

<style scoped>
.my-content {
  position: fixed;
  width: 60%;
  top: 5%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2em;
}

h2 {
  padding: 0;
  margin: 0;
}
</style>
