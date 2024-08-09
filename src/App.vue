<template>
  <div class="container">
    <h2>Динамические и ассинхронные компоненты</h2>
    <div class="btns">
      <app-button :color="choosenButton == 1 ? 'choosen' : 'notChoosen'" @action="choosenButton = 1">One</app-button>
      <app-button :color="choosenButton == 2 ? 'choosen' : 'notChoosen'" @action="choosenButton = 2">Two</app-button>
    </div>
    <!-- <app-text-one v-if="choosenButton == 1"></app-text-one>
    <app-text-two v-else></app-text-two> -->
    <!-- ЭТо все хорошо но если их 20 то будет не очень -->
    <component :is="getComponent"></component>
    <!-- component заменяет себя компонентом, имя которого указано в is -->
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue';

export default {
  data(){
    return {
      choosenButton: 1,
    }
  },
  computed: {
    getComponent(){
      return this.choosenButton == 1 ? "app-text-one" : "app-text-two"
    }
  },
  components: {
    "app-button": AppButton,
    'app-text-one': AppTextOne,
    'app-text-two': AppTextTwo,
  }
}
</script>

<style>

</style>
